# The Zombie Order: How a Correct Address Edit Shipped a Parcel to the Wrong Coast

*Synapse Botanicals Systems Architecture | Riovic Matthew | Compiled 2026-11-06*

---

## 1. The Address Said San Francisco. The Box Said Philadelphia.

If you run an e-commerce operation, or hire the people who do, the most useful thing I can show you is not a system that crashed. It is a system where Shopify said "success" while the warehouse hold remained unconfirmed, and a customer's parcel still went to the wrong coast. I want you to finish this case study able to explain why that happens, why a single HTTP status code was the hinge of it, and what a team has to build so it doesn't happen at scale.

Here is the whole incident in one frame. At 13:35 on October 17, 2026, a support agent changed the shipping address on Order **#1070** from Philadelphia to San Francisco. Shopify accepted it instantly. Thirteen minutes later, a box with the *old* address was sealed and sitting on a carrier conveyor in Reno, Nevada. Nothing in between raised an alarm that anyone acted on.

> [!CAUTION]
> **This is a staged incident.** It comes from an empirical failure-injection experiment in an isolated staging sandbox. Where I describe actual platform responses, injected adapter events, and modeled warehouse or carrier outcomes, I separate them in the evidence section at the end. All dollar amounts and monthly projections are scenario calculations. No production PII or live services were touched.

| | |
|---|---|
| **Order** | #1070, Starter Bundle, $98.00 |
| **Customer** | Elena Vance |
| **What broke** | A hold request to the 3PL timed out (`504 Gateway Timeout`) and nobody knew whether it landed |
| **Why it mattered** | The warehouse crossed its point of no return seven minutes after the edit |
| **What was at risk** | A misdirected parcel, a $98.00 chargeback plus a $15.00 gateway penalty, and a returned supplement that has to pass quality review |

So how did a change that looked finished at 13:35 turn into a parcel nobody could stop? To see that, you first need to know what was in the box and where it was supposed to go.

---

## 2. Two Addresses, One Order

Before the clock starts, you need the two facts that make this a conflict: what Elena bought, and the two places it could have gone. Everything after this section is a race between those two addresses.

### 2.1 Order Profile

| Field | Value |
|-------|-------|
| Customer | Elena Vance (`elena.vance@example.com`) |
| Order created | `2026-10-17T13:00:10-04:00` |
| Item | 1× Starter Bundle (`SYN-BNDL-MAO`, $98.00) |
| Contents | Matcha Yuzu Stick Packs 30-Pack (`SYN-FSTK-MY`), AM Focus Adaptogen Tincture 60ml (`SYN-TNCT-AM`), Precision Insulated Tumbler, Matte Obsidian (`SYN-TMBL-MO`) |
| Fulfilled from | Reno Fulfillment Hub, NV (`LOC-NV-02`) |
| Original address | 1420 Chestnut St, Apt 4B, Philadelphia, PA 19102 |
| Requested address | 820 Market St, Suite 400, San Francisco, CA 94102 |

### 2.2 Why the Bundle Contents Matter

One detail here matters later: the bundle contains an ingestible supplement. A box that goes the wrong way and comes back is not just a shipping problem. It is a quality and regulatory problem.

With the order in hand, the next question is how the two systems each came to believe a different address was true. The answer is in the minutes.

---

## 3. Thirteen Minutes: Following the Clock

This incident only makes sense as a sequence, so I am giving you the full trace before any explanation. As you read it, watch the gap between the first failed hold at 13:35:15 and the wave release at 13:42:00, because that gap is the entire story.

All times follow the incident scenario in EDT (UTC−04:00). Order placement is T+0; this reconstructed chronology is separate from the local simulator's measured timing records.

### 3.1 Incident Event Chronology

| Timestamp | Event | System | Status |
|-----------|-------|--------|--------|
| 13:00:10 | Order #1070 placed | Shopify | — |
| 13:00:12 | `orders/create` webhook sent to the WMS | Shopify → ShipBob | 200 OK |
| 13:00:15 | Fulfillment order created | ShipBob | OPEN |
| 13:35:00 | Gorgias ticket #T-10842: customer asks for an address change | Gorgias | — |
| 13:35:08 | Staff edits the shipping address in Admin | Shopify Admin | — |
| 13:35:10 | Address-edit workflow starts | Shopify Flow | — |
| 13:35:11 | Action 1: tag `flow-hold:customer-edit` added | Shopify | 200 OK |
| 13:35:12 | **Action 2: hold request POSTed to the WMS** | Flow → WMS | — |
| 13:35:15 | **Hold request returns a 504. Upstream outcome unknown.** Retries scheduled for +5m and +15m | ShipBob | **504** |
| 13:40:15 | Attempt 2 | Transport → WMS | **504** |
| 13:42:00 | **Wave Plan #8812 auto-releases, including Order #1070** | ShipBob WMS | — |
| 13:45:00 | Technician picks the bundle into Tote #44 | Warehouse floor | — |
| 13:48:00 | **Barcode scanned at pack bench. Label printed: Philadelphia, PA** | WMS | PACKED |
| 13:48:30 | Box sealed and placed on the outbound conveyor | Warehouse floor | — |
| 13:48:45 | Status becomes `PACKED / READY_FOR_DISPATCH` | ShipBob | — |
| 13:50:18 | **Attempt 3** | Transport → WMS | **422 PONR_EXCEEDED** |
| 13:50:19 | **Zombie state achieved** | Shopify vs. WMS | Diverged |

I call the end state a zombie because Shopify Admin is "alive" and says San Francisco, while the physical order is already dead on arrival and headed to Philadelphia.

### 3.2 Cross-System State Divergence Diagram

```mermaid
flowchart TD
    SD["**Shopify Digital State**
    Address: San Francisco, CA ✅ SUCCESS"]
    PH["**3PL Physical State**
    Label: Philadelphia, PA
    Status: PACKED → DISPATCHED ❌"]
    CE["**Customer Expectation**
    Delivery to San Francisco, CA"]
    AO["**Actual Outcome**
    Misdirected parcel + Chargeback Risk 💸"]
    SD -->|"State divergence: silent failure at seam"| PH
    CE -->|"Expectation vs. reality gap"| AO
    PH --> AO
```

Two of the lines in that table deserve a closer look, the 504 and the 422. They look like the same kind of failure, and they are not.

---

## 4. Two Error Codes That Look Alike and Mean Opposite Things

The most expensive mistake in this incident would have been treating the 504 as a "no." I'm showing you the raw payloads so you can see the difference for yourself. Note that the request and rejection below illustrate the Synapse adapter contract, not native ShipBob API schemas, and a custom Flow HTTP request is not the same as a native Shopify webhook delivery.

### 4.1 Outbound Fulfillment-Hold Request — HTTP POST / JSON Payload

**Contract:** Synapse adapter · **Scenario dispatch:** `13:35:12 EDT`

**HTTP Request Line & Headers**

```http
POST /1.0/webhook/order/hold HTTP/1.1
Host: wms.example.com
X-Shopify-Topic: fulfillment_orders/hold_placed
Content-Type: application/json
```

**JSON Request Payload**

```json
{
  "fulfillment_order_id": 881920149012,
  "order_id": 5920194812,
  "reason": "customer_address_edit",
  "reason_notes": "Customer requested address swap to San Francisco, CA via Gorgias #T-10842",
  "new_shipping_address": {
    "address1": "820 Market St, Suite 400",
    "city": "San Francisco",
    "province_code": "CA",
    "zip": "94102",
    "country_code": "US"
  }
}
```

### 4.2 Gateway Timeout Response — HTTP 504 / HTML Body

**Scenario response:** `13:35:15 EDT`, three seconds after dispatch.

**HTTP Status Line & Headers**

```http
HTTP/1.1 504 Gateway Time-out
Content-Type: text/html
Date: Sat, 17 Oct 2026 17:35:15 GMT
```

**HTML Error Response Body**

```html
<html><head><title>504 Gateway Time-out</title></head>
<body><center><h1>504 Gateway Time-out</h1></center>
<hr><center>cloudflare-nginx</center></body></html>
```

An HTML error page from a gateway. It says nothing about whether the warehouse received the hold. That silence is the problem.

### 4.3 Post-Cutoff Hold Rejection — HTTP 422 / JSON Error Payload

**Scenario attempt:** `13:50:18 EDT`, after the box was sealed.

**HTTP Status Line & Headers**

```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json
Date: Sat, 17 Oct 2026 17:50:19 GMT
```

**JSON Error Response Payload**

```json
{
  "status": 422,
  "error_code": "PONR_EXCEEDED",
  "message": "Fulfillment hold rejected. Order 5920194812 has already crossed the Point of No Return.",
  "details": {
    "current_wms_status": "PACKED",
    "tracking_number": "1Z9999999999999999",
    "carrier": "UPS",
    "packed_at": "2026-10-17T17:48:22Z",
    "shipping_address_locked": "1420 Chestnut St, Apt 4B, Philadelphia, PA 19102"
  }
}
```

A structured, deliberate answer: the warehouse is telling you the window is closed and the address is locked to Philadelphia.

### 4.4 HTTP Status Classification & Retry Decision Matrix

| Status | What it really means | Right response | Operational impact |
|--------|---------------------|----------------|--------------------|
| **504 Gateway Timeout** | A gateway did not get a timely upstream response | Retry with the *same operation ID*, only while the operation is still eligible | The outcome stays **unknown** until the operation ledger and the current WMS state are reconciled |
| **422 + PONR_EXCEEDED** | A business rule rejected the request under the adapter contract | Do **not** retry the same prohibited mutation | The cutoff is crossed; escalate to the approved recovery workflow |

A 504 means "I don't know." This adapter's `422 PONR_EXCEEDED` means "too late." The system treated the first like a reason to wait, and by the time it heard the second, waiting had already cost the order.

> [!IMPORTANT]
> The standard edit deadline was **13:42:00**. Measured from the first hold request at 13:35:12, the real intervention window was **6 minutes 48 seconds**, about seven minutes. The retry schedule used a fifteen-minute interval. It was never a safe editing window.

If the window was seven minutes and the retries ran on fifteen, you can already see the mismatch. The retry policy and the warehouse clock were never designed against each other. We'll come back to why. First, how did anyone find out?

---

## 5. Nobody Noticed for 48 Hours: The Three-Minute Triage Plan

The system did not catch this. In the simulation, the customer did, roughly 48 hours after dispatch (`2026-10-19T13:30:00-04:00`), when delivery tracking showed her parcel heading to Philadelphia instead of San Francisco. That delay is why I want to show the investigation in detail: the modeled three-minute triage sequence uses three checks, each answering one question. It is a diagnostic playbook, not a measured completion time.

### 5.1 Did Shopify think the edit worked?

**Shopify Order Timeline Inspection**

Open **Admin → Orders → #1070 → Timeline**.

| Timeline event | Time | What it tells you |
|----------------|------|-------------------|
| "Elena Vance's shipping address updated to San Francisco" | 13:35 EDT | Shopify accepted the edit |
| Flow run: "Send HTTP request" returned 504 Gateway Timeout, retrying | 13:35 EDT | The hold outcome is unknown; reconcile it |
| "ShipBob added tracking: 1Z9999999999999999 (UPS Ground)" | 13:52 EDT | A tracking reference exists; inspect the WMS hold and label history |

Shopify accepted the address locally, without confirmation from the 3PL. That answers the first question, and raises the second.

### 5.2 Did the hold ever land?

**Adapter Retry & WMS Reconciliation Log**

Inspect the Flow run, the adapter request ledger, and the WMS shipment history separately.

| Attempt | Time | Result |
|---------|------|--------|
| 1 | 13:35:15 | 504 Gateway Timeout |
| 2 | 13:40:15 | 504 Gateway Timeout |
| 3 | 13:50:18 | 422 Unprocessable Entity |

The timeout and the tracking number alone cannot prove the WMS never received or applied the hold. That has to be confirmed from the operation ledger and WMS event history. This is the discipline the whole case study is about: an unknown stays unknown until you reconcile it.

### 5.3 Where is this parcel actually going?

**Shopify Admin GraphQL — Fulfillment Order State Query**

```graphql
query inspectFulfillmentOrderState {
  order(id: "gid://shopify/Order/5920194812") {
    name
    displayFulfillmentStatus
    fulfillmentOrders(first: 5) {
      edges {
        node {
          id
          status
          assignedLocation { name }
          destination { address1 city province zip }
          fulfillments(first: 5) {
            edges {
              node { trackingInfo { number url } }
            }
          }
        }
      }
    }
  }
}
```

The query returns Shopify fulfillment-order and tracking references for correlation with a separately retrieved WMS label snapshot. The scenario's linked fulfillment reference is `gid://shopify/Fulfillment/4820194812`; the query itself does not request that fulfillment-level ID or retrieve the WMS record. A tracking number alone does not prove what address is encoded on the physical 2D barcode, so the operator also queries the ShipBob shipment manifest record. In production this needs pagination across all fulfillment orders and fulfillments.

Three minutes, three answers: Shopify said San Francisco, the hold's fate was unknown, the label said Philadelphia. Now the question changes from "what happened" to "what do we do with a box that is already moving?"

---

## 6. The Box Is Already Moving: Containing the Damage

Prevention failed at 13:42. From here the only goal is to limit the loss, and there are three separate problems to solve in order: stop the parcel, handle the supplement that may come back, and make the customer whole.

### 6.1 Try to catch the parcel

I would use UPS Delivery Intercept v2: check `GET /api/deliveryintercept/v2/eligibility/intercept/{tracking_number}` first, and only then pick an eligible operation. A return uses `POST /api/deliveryintercept/v2/return/{tracking_number}`. Validate the JSON `success` field and error list as well as the HTTP status.

The example below is the documented CIE canceled-shipment fixture. `AM` is its canceled-shipment reason, not a generic address-change reason. For a real shipment, use the reason and option the eligibility check returns.

**UPS Delivery Intercept v2 — CIE Return-Request Fixture (cURL/Bash)**

```bash
curl --request POST \
  'https://wwwcie.ups.com/api/deliveryintercept/v2/return/1Z4096YY0316914058' \
  --header "Authorization: Bearer $UPS_API_TOKEN" \
  --header 'Content-Type: application/json' \
  --header 'transId: SIIReturn' \
  --header 'platformType: XOLT' \
  --header 'inquiryType: U' \
  --data '{"requestType":"RS","specialInstructions":"Staging return fixture","requesterContactInfo":{"name":"Sandbox Operator","telephone":"+12010000000"},"reasonForReturn":"AM"}'
```

Record three things separately: the intercept request, its acceptance, and the confirmed physical outcome. Offline fixture tests check selected request and response handling; they do not establish authenticated UPS CIE execution. Physical interception requires carrier-event evidence. The $17.50 intercept charge is a scenario input. Spec: [UPS Delivery Intercept v2](https://github.com/UPS-API/api-documentation/blob/fd57ca9fde3c26c4ec5c2c4f4831715a223daa85/DeliveryIntercept.yaml).

If the intercept works, the parcel comes back. And that is where the supplement in the bundle becomes a compliance question.

### 6.2 Decide what happens to a returned supplement

A returned bundle contains a tincture, and that cannot simply go back on the shelf. Returned supplements need documented quarantine and quality disposition under FDA 21 CFR Part 111. Any stricter no-restock rule is company policy, and should be labeled that way.

**Returned-Supplement Quarantine & Quality Disposition Protocol**

| Step | Action | System |
|------|--------|--------|
| 1 | WMS receives the returned parcel scan | ShipBob |
| 2 | Parcel auto-routes to Quarantine Zone A | WMS rule |
| 3 | QA officer inspects packaging seal integrity | Physical |
| 4 | Review qualified temperature evidence, when available | Validated logger or qualified shipping record |
| 5 | `SYN-TNCT-AM` lot number logged | QA record |
| 6 | Clearance or disposal decision logged | QA officer |

> [!CAUTION]
> Ordinary carrier tracking does not prove temperature exposure. Non-ingestible bundle components are assessed separately. If the bundle is disposed of, it is written off at inventory cost, not at the $98.00 selling price.

### 6.3 Make the customer whole

1. Issue a full refund, or reship from eligible Reno inventory. Any returned stock requires QA clearance before reuse.
2. Apply a $25 courtesy credit.
3. Flag the order for chargeback pre-emption by contacting the gateway before a dispute clears.
4. Update Gorgias ticket #T-10842 with the resolution timeline.

### 6.4 One Payment, a Second Shipment

The three phases above cover carrier recovery, returned-product disposition, and customer resolution. For the branch calculated in §8, the original $98.00 payment is retained and the customer receives a fresh replacement without paying again. The business pays to fulfill the same sale again, while the costs of the first shipment remain incurred.

That branch retains the original payment, assumes an eligible intercept and return, and sends a fresh replacement from Reno to San Francisco. The replacement product, handling and expedited freight add **$47.70**. Intercept and return freight add **$25.90**, and the goodwill credit adds **$25.00**. Together, those recovery costs consume **$98.60** against the original order's **$54.76** contribution, leaving **−$43.84**.

The model assumes no salvage value from the original parcel and expenses the goodwill credit in full. It models a replacement shipment; it does not establish that a separate Shopify order record was created. A refund is a different recovery branch and would need its own calculation.

This recovery path is expensive, and it only exists because something upstream failed. So where exactly did it fail?

---

## 7. Where It Actually Broke

It is tempting to blame the 504, but a timeout is normal in distributed systems. The incident needed three things to line up, and only one of them was a bad day for the network. The other two were choices.

### 7.1 Root-Cause Analysis — Failure Mode Matrix

| # | Failure | What kind of failure | Past the point of no return? |
|---|---------|----------------------|------------------------------|
| 1 | The hold request returned a 504 | Unknown upstream outcome | No, this was recoverable if reconciled before the cutoff |
| 2 | The address edit was accepted without a confirmed hold | Missing hold-confirm-update coordinator; a design gap | No |
| 3 | The wave auto-released during the 15-minute retry window | Physical state advanced past the cutoff | **Yes, the automatic edit cutoff was crossed** |

The decisive one is #2. The system let Shopify say "done" before the warehouse had said "held." If the edit had waited for confirmation, the 504 would have blocked the change and a human could have intervened. Instead, the 504 left two systems with two truths and no one assigned to reconcile them.

### 7.2 Hold-Confirm-Update Coordination Protocol

The design control that closes this gap is a **hold-confirm-update coordinator**:

- Persist one operation ID for the whole edit.
- Serialize competing edits to the same order.
- Confirm that the affected WMS shipment is actually held.
- Update both systems, reconcile their versions, and release only this operation's hold.
- Treat unknown outcomes as **pending**, never as success.

This does not create an atomic transaction across Shopify and the WMS. It gives the unknown a place to live and an owner, which is all the incident was missing.

But a coordinator is a design. What did the missing design cost in the scenario, in money terms an executive can read?

---

## 8. What One Misdirected Order Costs

An engineering failure becomes a business case when you can put a number on it. Order #1070 started as a healthy sale and ended as a loss, and the ledger below shows exactly where the margin went. All figures are modeled scenario inputs.

### 8.1 Contribution Inputs & Processing-Fee Formula

Starter Bundle COGS is modeled at $28.40: $28.00 in raw components (Focus Sticks $8.50, AM Tincture $12.50, Precision Tumbler $7.00) plus $0.40 for dedicated packaging and inserts. Gateway processing is `round($98.00 × 2.9% + $0.30, 2) = $3.14`, assuming zero tax and free ground shipping revenue. The replacement branch keeps the original sale and all initial fulfillment costs, and treats the $25.00 goodwill credit at full face value as an expense (a future unredeemed credit liability may be treated differently under a specific accounting policy).

### 8.2 Order Contribution Ledger

```text
NORMAL ORDER ECONOMICS (#1070 Baseline):
  Gross Merchandise Value (GMV):                +$98.00
  Cost of Goods Sold (COGS):                    -$28.40
  3PL Fulfillment (Pick / Pack / Box):          -$4.50
  Carrier Outbound Ground Freight (Scenario):   -$7.20
  Credit Card Gateway Processing (2.9% + $0.30):-$3.14
  ─────────────────────────────────────────────────────
  NET CONTRIBUTION MARGIN:                      +$54.76 (55.9%)

ZOMBIE ORDER RECOVERY (#1070 Retained Sale + Replacement):
  Gross Merchandise Value (Collected):          +$98.00
  Original Parcel COGS (No Salvage Assumed):    -$28.40
  Original 3PL Fulfillment:                     -$4.50
  Original Outbound Ground Freight:             -$7.20
  Carrier Package Intercept Toll (UPS API):     -$17.50
  Carrier Return-to-Sender Freight:             -$8.40
  Replacement Parcel COGS (Re-shipped from NV): -$28.40
  Replacement 3PL Pick / Pack Handling:         -$4.50
  Replacement Outbound Air Freight (Expedited): -$14.80
  Goodwill Expense (Fully Expensed Scenario):   -$25.00
  Payment Gateway Transaction Tolls:            -$3.14
  ─────────────────────────────────────────────────────
  FINAL CONTRIBUTION:                           -$43.84
  INCREMENTAL RECOVERY COST:                     $98.60

Incremental recovery costs:
  $17.50 + $8.40 + $28.40 + $4.50 + $14.80 + $25.00 = $98.60

Final contribution after recovery:
  $54.76 - $98.60 = -$43.84

Separate lost-chargeback scenario:
  -$43.84 - $98.00 principal - $15.00 penalty = -$156.84
```

A $54.76 positive contribution becomes a $43.84 negative contribution in this branch, or a $156.84 negative contribution in the separate lost-chargeback branch. The recovery cost alone, at $98.60, is slightly more than the $98.00 the customer paid.

### 8.3 Monthly Exposure Sensitivity Calculation

One order is an anecdote, so what happens at volume? As a sensitivity calculation, not an observed count: at 1,000 orders a day over a 30-day month, a 0.5% misdirection rate gives 150 events, and at $98.60 each that is **$14,790 a month** in modeled contribution deterioration.

### 8.4 Address-Edit Exposure Model

I want to be careful with one input I could have overstated. The scenario cites a 4.2% overlap between address edits and WMS latency. That figure does not, on its own, give a monthly misdirection count. The edit-specific exposure model is:

`misdirections = address_edits × overlap_probability × conditional_failure_probability`

You need the number of edits and the conditional failure rate to complete it, and the case study does not claim to have them.

If the cost scales like that, the fix has to do more than retry harder. It has to change what the system does with uncertainty.

---

## 9. Why Fifteen Minutes Was the Wrong Clock

The original design retried on a polite schedule, as if the order would wait. This section explains why that was a mismatch between two clocks, and what the replacement design does differently.

### 9.1 Adapter Retry Schedule

The retry schedule in the scenario, measured from the initial attempt, looked like this:

| Attempt | Offset | Order age | Outcome |
|---------|--------|-----------|---------|
| 1 (initial) | 0s | T+35m | First POST, 504 |
| 2 | +5m | T+40m | Retry, 504 |
| 3 | +15m | T+50m | Retry, **PONR confirmed** |
| Exception / DLQ | n/a | T+50m+ | Final escalation. The prevention alert has to have fired before 13:42 |

> [!NOTE]
> This schedule describes the adapter attempts in the incident scenario. It is not a Shopify Flow or native webhook retry guarantee. The worker owns downstream retries, and transport redelivery must reuse the operation ID. Before every mutation, re-check the current version, hold ownership and cutoff.

Attempt 2 landed at 13:40:15, one minute and forty-five seconds before the wave released. It failed too. By attempt 3 the box had been sealed for nearly two minutes. A retry policy that is only measured in elapsed time, and not against the physical deadline, can do everything right and still arrive after the point of no return.

### 9.2 Proposed SQS Work Queue & Dead-Letter Queue Architecture

The fix is a queue design built around that deadline, not around politeness. I'd use an Amazon SQS Standard work queue feeding idempotent workers, with a separate dead-letter queue for exhausted or quarantined work. The adapter authenticates the request, persists the operation ID, and acknowledges only after the message is durably enqueued. Redelivery reuses the same operation. Per-order serialization and a current-version check come before every mutation, and replaying a DLQ message requires a fresh eligibility and version check.

```text
        ┌──────────────────────────────────────────┐
        │  SHOPIFY FLOW: address-edit → hold request │
        └────────────────────┬─────────────────────┘
                             ▼
        ┌──────────────────────────────────────────┐
        │  MIDDLEWARE ADAPTER                        │
        │  Authenticates request, ACKs only after    │
        │  durable enqueue                           │
        └────────────────────┬─────────────────────┘
                             ▼
        ┌──────────────────────────────────────────┐
        │  SQS STANDARD QUEUE                        │
        │  Visibility timeout 30s, max receive 3     │
        │  → separate DLQ after receive limit        │
        └────────────────────┬─────────────────────┘
                             ▼
        ┌──────────────────────────────────────────┐
        │  WMS HOLD CONSUMER                         │
        │  Confirmed effect: delete message          │
        │  504: reconcile the unknown result         │
        │  Receive limit exceeded: → DLQ             │
        └────────────────────┬─────────────────────┘
                             ▼
        ┌──────────────────────────────────────────┐
        │  ALERT & HUMAN ESCALATION                  │
        │  "Hold uncertain" → escalate BEFORE the    │
        │  warehouse cutoff                          │
        └──────────────────────────────────────────┘
```

### 9.3 SQS Configuration Parameters

| Parameter | Value | Why |
|-----------|-------|-----|
| Visibility timeout | 30s initially | Extend while a worker is active, and set worker and request timeouts. A 25s p99 alone does not guarantee completion within the visibility window |
| Max receive count | 3 | A scenario redrive policy, separate from Shopify retries and business-attempt accounting |
| DLQ retention | 14 days | Investigation storage. It does not extend carrier eligibility or mutation deadlines |
| Long polling | 20s | Reduces empty-poll cost |
| Message retention | 4 days | Work storage. Expired mutations must not execute |

The most important line in the diagram is the last box. The alert fires on the **first uncertain hold result**, not after retries are exhausted. A person gets the chance to act inside the seven-minute window, not fifteen minutes after it.

A single incident can be patched. How do you keep the whole class of failure from coming back?

---

## 10. Four Rules for Prevention and Recovery

Looking back across the incident, the first three controls address the failure before the cutoff; the fourth governs recovery afterward. These are the rules I would hold any new integration to.

1. **Hold-confirm-update verification.** Confirm the affected WMS shipment is held before accepting the edit. Update both systems, reconcile their versions, and release only this operation's hold. Unknown outcomes stay pending.
2. **Idempotency enforcement.** One operation ID across every retry. Serialize competing edits. Check the current order version before any side effect, and reconcile unknown outcomes before replaying.
3. **Work queue and dead-letter queue.** Use the Standard source queue and separate DLQ described above. Workers own bounded retries, and the first uncertain hold result alerts before the warehouse deadline.
4. **Carrier recovery eligibility.** After the cutoff, evaluate warehouse intervention and eligible carrier redirection or return. Record request, acceptance and confirmed physical outcome as three separate facts.

A design is only worth as much as the evidence behind it. So how much of this has actually been tested?

---

## 11. What Is Proven, and What Is Only Designed

A case study that claims everything works is less credible than one that says where its evidence stops. I distinguish documented designs, executed local model tests, and focused offline contract checks. Authenticated vendor-sandbox execution and physical verification require their own evidence. The links below use the preserved [sample run](../evidence/sample-run/run.json) so each result can be read alongside its recorded scope.

**Evidence Scope & Verification Status Matrix**

| Deliverable | Where | Evidence status | Evidence |
|-------------|-------|-----------------|----------|
| Capstone systems investigation dossier | This document | Documented scenario and calculated financial consequences | §8 and [cost results](../evidence/sample-run/costs/summary.md) |
| PONR decision engine | Domain 1 dossier (§2 & §4) | Local SQLite coordinator safety and process-restart tests | [Coordinator results](../evidence/sample-run/latency/summary.md) |
| Multi-node freight optimization waterfall | Domain 2 dossier (§2 & §3) | Conditional cost model and reservation fixtures; tariff verification skipped | [Freight results](../evidence/sample-run/freight/summary.md) |
| Matrixify catalog pre-flight schema audit | Domain 3 dossier (§3 & §4) | Local barcode mapping, checksum and shared-table bitstream tests; import execution not established | [Barcode results](../evidence/sample-run/barcodes/summary.md) |
| Shopify Flow webhook and DLQ triage matrix | Domain 4 dossier (§2 & §3) | Workflow specified; local coordinator tests do not verify deployed Flow or SQS | [Coordinator results](../evidence/sample-run/latency/summary.md) |
| Algorithmic margin defense and cart diagnostics | Domain 5 dossier (§3 & §4) | Local arithmetic and boundary assertions; checkout enforcement specified | [Cost results](../evidence/sample-run/costs/summary.md) |
| Gorgias frontline webhook automation engine | Domain 6 dossier (§2 & §4) | Specified; no authenticated Gorgias execution established | [Evidence scope](../evidence/README.md) |
| GraphQL order state inspection query | §5.3 | Versioned schema-compatible example; no authenticated execution claimed | Query in this dossier |
| Carrier package intercept API integration | §6.1 | Focused offline UPS-contract checks and local recovery events | [Recovery results](../evidence/sample-run/carrier-recovery/summary.md) |
| Amazon SQS dead-letter queue architecture | §9 | Specified; local SQLite tests do not establish a deployed queue | Architecture blueprint in this dossier |

Read the last row honestly: the queue design that I'm recommending as the fix is **Specified**, not verified in SQS. For carrier recovery, the fixtures check selected contract constraints and local state transitions; authenticated CIE calls, physical interception and billing remain outside that execution.

---

## 12. What I Would Want You to Take Away

Elena's order failed because Shopify accepted the new address while the warehouse sequence retained the old one, and the one signal that could have reconciled them, a 504, was read as a delay instead of as a question. Everything else in this case study is a consequence: the seven-minute window, the three-minute autopsy, the $98.60 recovery bill, the quarantine of a returned tincture.

The fix is not smarter retries. It is making uncertainty visible, owned, and louder than the clock. That is the thing I would build first, and the thing I would ask any integration to prove before it touches a customer's address.

---

*Compiled: 2026-11-06 | Synapse Botanicals Systems Architecture | Riovic Matthew*
