# Frontline Helpdesk Automation & HTTP Webhook Actions

---

## 1. Executive Summary & The Support-to-Fulfillment Seam

### 1.1 The Operational Hazard
Customer support (CS) is rarely viewed as a technical systems department, yet it operates as the **frontline control plane** for active order state machines.

When an anxious customer emails *"I need to change my shipping address!"* or *"Cancel my order!"*, traditional e-commerce teams suffer a fatal communication latency gap:
- The customer's ticket sits in a general support queue with an average First-Response Time (FRT) of **4.2 hours**.
- Meanwhile, the warehouse management system (ShipBob WMS in Allentown or Reno) operates on an automated 15-minute polling and wave-release cycle.
- By the time a support agent opens the ticket, the warehouse has already printed the shipping label, picked the box, and staged it for carrier pallet induction.
- **The Financial Waste**: The order mis-ships, creating duplicate shipping costs, inventory write-offs under FDA consumable regulations, and dissatisfied customers.

```mermaid
flowchart TD
    A[Customer Ingests Urgent Modification Email] --> B[Gorgias Intent AI Classification <10s]
    B --> C{Intent == Address Update OR Cancel?}
    C -- Yes --> D[Rule R-01: Fire HTTP Action 'freeze_order_mutation']
    D --> E[Shopify Orders API Sets Fulfillment On Hold]
    E --> F[ShipBob WMS Queue Freezes Order]
    F --> G[Route Ticket to Tier 2 Priority Queue with Pre-Populated Macro]
    G --> H[Agent Resolves Ticket with Zero Warehouse Race Conditions]
    C -- No --> I[Standard Queue Triage]
```

### 1.2 The Engineering Solution: Zero-Latency Programmatic Holds
This Master Dossier codifies the bi-directional architecture that eliminates frontline latency:
1. **Automated Intent Detection & HTTP Webhooks**: Gorgias rules that intercept incoming messages and programmatically fire fulfillment holds into Shopify's API before an agent even opens the ticket.
2. **Helpdesk Sidebar Data Model**: Providing frontline agents with real-time ShipBob WMS queue state, carrier tracking telemetry, and 1-click mutation buttons directly within the ticket interface.
3. **Automated Macro Playbooks**: Standardized operator response templates with built-in validation checks.

---

## 2. Helpdesk Sidebar Architecture & HTTP Integration Actions

To prevent agents from toggling between 5 browser tabs (Shopify Admin, ShipBob WMS, USPS tracking, Stripe), custom HTTP integration widgets were engineered directly into the Gorgias agent interface.

### 2.1 HTTP Integration Action 1: Instant Fulfillment Hold (`freeze_order_mutation`)

```json
POST /admin/api/2026-01/fulfillment_orders/{{order.fulfillment_order_id}}/holds.json
Headers:
  Content-Type: application/json
  X-Shopify-Access-Token: {{secrets.SHOPIFY_ADMIN_API_TOKEN}}
Payload:
{
  "fulfillment_hold": {
    "reason": "AWAITING_CUSTOMER_UPDATE",
    "reason_notes": "Gorgias Automation: Urgent ticket intent #{{ticket.id}} received."
  }
}
```
- *Execution Latency*: **8.4 seconds** from customer email arrival to Shopify hold commitment.
- *Outcome*: Order is safely locked in the database; 3PL warehouse picking wave is halted.

### 2.2 HTTP Integration Action 2: Release Fulfillment Hold (`release_order_hold`)

```json
POST /admin/api/2026-01/fulfillment_orders/{{order.fulfillment_order_id}}/release_hold.json
Headers:
  Content-Type: application/json
  X-Shopify-Access-Token: {{secrets.SHOPIFY_ADMIN_API_TOKEN}}
```
- *Trigger*: Agent completes address sanitization or flavor swap, and fires Macro `M-01`.
- *Outcome*: Order hold is released, and updated payload is immediately re-queued to Allentown or Reno.

---

## 3. Helpdesk State Machine Integration & Tag Taxonomy

To maintain perfect synchronization between Gorgias tickets and Shopify Admin, a controlled tag lifecycle was established:

```mermaid
flowchart TD
    I1["Intent: Urgent Address Change
    Tag: CS-ADDR-HOLD"] --> A1["Fire Fulfillment Hold
    Set Priority: High in Gorgias"]

    I2["Intent: Cancel Request
    Tag: CS-CANCEL-PENDING"] --> A2["Check PONR Status
    Block warehouse wave pick"]

    I3["Intent: Flavor / Item Swap
    Tag: CS-SWAP-REVIEW"] --> A3["Verify ATS inventory ≥ 5 units
    at target node"]

    I4["Intent: Damaged / Defect Claim
    Tag: CS-CLAIM-VERIFIED"] --> A4["Trigger replacement order
    via Shopify Flow"]

    I5["Intent: Carrier Delivery Delay
    Tag: CS-CARRIER-ESCALATE"] --> A5["File automated synthetic
    tracing claim with UPS / USPS"]
```

---

## 4. Automated Gorgias Rules Engine (Backend Automation)

### 4.1 Rule R-01: Zero-Latency "Freeze-Before-Edit" Address Protection
- **Trigger**: New Ticket Created OR Customer Message Received
- **Condition**:
  - Message body matches regex: `(?i)(change|update|wrong)\s+(my\s+)?(address|shipping|apt|suite|zip|street)`
  - AND Shopify Order fulfillment status == `Unfulfilled` OR `In Progress`
  - AND Ticket does NOT contain tag `CS-ADDR-HOLD-APPLIED`
- **Actions**:
  1. Trigger HTTP Action: `freeze_order_mutation`
  2. Add Ticket Tags: `CS-ADDR-HOLD`, `Priority-High`, `SLA-15M`
  3. Assign Ticket to: **Tier 2 Technical Triage Queue**
  4. Internal Note: *"AUTOMATED NOTICE: Fulfillment hold executed against Shopify API. Order is frozen downstream at ShipBob. Agent may safely verify address."*

### 4.2 Rule R-02: Point of No Return (PONR) Gatekeeper
- **Trigger**: Customer requests cancellation
- **Condition**: ShipBob WMS status == `Picked` OR `Packed` OR `Manifested`
- **Actions**:
  1. Tag Ticket: `PONR-BREACHED`
  2. Block cancel action in sidebar
  3. Pre-populate Macro `M-04`: *"Your order has cleared warehouse dispatch. We have initiated a carrier intercept, or you may return the package upon arrival."*

---

## 5. Frontline Macro Playbooks & Operational Protocols

### 5.1 Macro M-01: Pre-PONR Address Mutation Protocol
- **Triggered When**: Ticket is flagged with `CS-ADDR-HOLD` and physical status is in Queue.
- **Operator Execution Checklist**:
  1. Verify customer identity and raw address input.
  2. Run USPS CASS address verification tool.
  3. Update shipping address in Shopify Admin.
  4. Click sidebar button: `Release Fulfillment Hold`.
  5. Apply Macro M-01 response:
     > *"Hi {{ticket.customer.first_name}}, I have successfully frozen your order and updated your shipping address to: {{order.shipping_address.formatted}}. Your order is now re-queued for dispatch from our warehouse. Tracking will be emailed shortly!"*

### 5.2 Macro M-02: Consumable 1:1 Flavor Swap Protocol
- **Constraint**: Swaps are strictly permitted within identical product lines and retail values (e.g. *Lion's Mane Gummies Berry* `SYN-FG-001` ↔ *Citrus* `SYN-FG-002`).
- **Operator Verification**:
  1. Check Gorgias sidebar widget for ATS inventory at the allocated node (must be ≥ 5 units).
  2. Execute line item swap in Shopify Admin with net zero balance ($0.00).
  3. Release hold.

---

## 6. CS-to-TechOps Escalation Matrix & Root Cause Analysis

To eliminate recurring operational defects, a weekly closed-loop RCA protocol was established between Customer Support and TechOps:

```mermaid
flowchart TD
    T1["**Tier 1 — Frontline Agents**
    Routine address updates
    Tracking inquiries
    Pre-PONR cancellations"]

    T2["**Tier 2 — Senior Support Specialists**
    Post-PONR carrier package intercepts
    Damaged item claims
    FDA consumable scrap processing"]

    T3["**Tier 3 — Technical Operations Lead**
    Systemic API webhook failures (HTTP 504)
    Inventory desyncs
    Checkout discount collisions
    Carrier service level breaches"]

    T1 --> T2 --> T3
```

### 6.1 Weekly Defect Review Metrics (Key Performance Indicators)
- **First-Response Time (FRT)**: Reduced from **4.2 hours** to **14 minutes**.
- **Race Condition Incidents**: Reduced from 18 incidents/month to **0 incidents/month**.
- **Scrap Write-Off Savings**: Saved approximately **$4,200/month** in mis-delivered consumable inventory write-offs.

---
