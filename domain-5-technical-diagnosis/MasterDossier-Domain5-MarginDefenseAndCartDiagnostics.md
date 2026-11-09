# Margin Defense & Cart / Payment Diagnostics

> **Empirical staging simulation.** Synapse Botanicals is a technical operations sandbox used to stress-test e-commerce failure modes with synthetic customer and order fixtures. Commercial charges and financial outcomes are scenario inputs and calculations. The verification section distinguishes supplied trace excerpts, reproducible model results, and acceptance criteria for the designed controls. No production customer data or live fulfillment is represented.

## 1. Executive Context & Failure Mode

A failed cart mutation, a rejected payment and an unprofitable promotion are different operational problems. This study pairs stage-specific diagnosis with basket-level contribution rules. The objective is to identify the failing boundary before acting and to prevent promotions from being approved on a retail-price calculation that excludes actual fulfillment costs.

## 2. Governance & Architecture Protocol

### 2.1 Diagnostic paths

| Stage | Inspect | Evidence required before conclusion |
|---|---|---|
| Cart | Locale-aware `/cart/add.js` or `/cart/change.js`, variant/quantity and response body | Rejection reason and resulting cart state |
| Checkout | Eligibility, delivery, tax and configured discount validation | Actual checkout error and applicable configuration |
| Payment | Merchant-visible transaction and gateway events | Authorization, capture, decline or unknown state |
| Fulfillment | Order, fulfillment orders and WMS shipments | Physical status and synchronization by version |

A cart failure can occur before an order exists. HTTP 200 does not prove payment success; authorization does not prove capture. A cart 422 can indicate rejected quantity or another invalid operation, but does not by itself identify a warehouse. A 500/504 identifies a failed request boundary, not a proven downstream webhook root cause.

The storefront error-handling control parses the business response, displays its safe error message and clears loading state even on failure. A 422 does not intrinsically freeze the browser; missing client-side recovery can make the interface appear frozen.

| Processor-normalized reason | Supported interpretation | Guidance |
|---|---|---|
| insufficient_funds | Processor reports insufficient funds | Alternate payment method; resolve any other open issue |
| expired_card | Processor reports expired credentials | Check card validity |
| card_velocity_exceeded | Provider-specific limit response | Follow provider guidance; do not infer a universal fraud/PIN code |
| do_not_honor | Issuer refusal without a specific established cause | Alternate method or issuer contact; do not assert international restriction |

Normalized decline reasons and raw network codes are separate fields. Record provider and transaction identity and use only telemetry actually exposed to the merchant. Shopify Payments does not imply access to a separate Stripe dashboard.

### 2.2 Merchant discount policy

This is Synapse policy, not a statement that Shopify universally prohibits product/product or order/order combinations:

- At most one promotion per product line; eligible promotions on different lines may coexist.
- At most one order-level promotion in this scenario.
- Product and order promotions combine only when merchandise subtotal **before promotions**, excluding tax and shipping, is at least **$85.00**.
- Free shipping requires final merchandise subtotal **after merchandise discounts** of at least **$50.00**.
- Loyalty rewards in this experiment are merchant-funded discounts. Gift-card/store-credit payment tender requires separate accounting.

Combination flags and a conditional discount implementation enforce the policy. The integration must name its actual app or Shopify Function and retain its version and boundary tests. A generic reference to Checkout Extensibility or a client-side message is not the server-side enforcement contract.

## 3. Decision Matrix & Contribution Model

```text
M = merchandise revenue after merchandise discounts
S = shipping collected from customer
T = tax collected and remitted; excluded from contribution revenue
P = round_half_up(0.029 × (M + S + T) + 0.30, 2)
CM = M + S − COGS − 3PL handling − carrier freight − P
```

All examples use USD, T=$0 and the stated scenario gateway rate. Contribution excludes overhead, acquisition, support labor, currency conversion, returns, chargebacks and additional app/provider fees unless listed. It is not net profit or a cash-flow statement.

Protected packing is $2.50 base, $1.20 packaging and $0.40 per pick after the first. Single units cost $3.70, two-unit parcels $4.10 and three-component bundles $4.50. The $1.20 packaging is standard $0.80 corrugate plus $0.40 protection. Each table row is a single-parcel scenario; the Executive Focus Bundle uses three component picks.

| SKU | Price | COGS | Handling | Freight | Full-price gateway | Full-price CM |
|---|---:|---:|---:|---:|---:|---:|
| SYN-NB-001 | $48.00 | $14.40 | $3.70 | $5.85 | $1.69 | $22.36 |
| SYN-NB-002 | $48.00 | $14.40 | $3.70 | $5.85 | $1.69 | $22.36 |
| SYN-AT-001 | $34.00 | $8.16 | $3.70 | $5.85 | $1.29 | $15.00 |
| SYN-FG-001 | $32.00 | $10.24 | $3.70 | $5.85 | $1.23 | $10.98 |
| SYN-BD-001 | $110.00 | $31.90 | $4.50 | $7.20 | $3.49 | $62.91 |

Customer shipping is zero in this table. Gateway fees fall when merchandise is discounted. Before cent rounding, the minimum payable amount is `(COGS + handling + freight + 0.30)/(1−0.029)`; evaluate neighboring cents using actual fee rounding.

| SKU | Minimum payable with rounded CM≥0 | Gateway at floor | Maximum dollar discount |
|---|---:|---:|---:|
| SYN-NB-001 / SYN-NB-002 | $24.97 | $1.02 | $23.03 |
| SYN-AT-001 | $18.55 | $0.84 | $15.45 |
| SYN-FG-001 | $20.69 | $0.90 | $11.31 |
| SYN-BD-001 | $45.21 | $1.61 | $64.79 |

These are zero-contribution boundaries for the printed single-parcel inputs. Operational policy requires a positive buffer and basket-level recalculation; rounded percentages are not enforcement values.

## 4. Empirical Verification & Run Sheet

### 4.1 Order #1063 — controlled discount collision

Basket: one Lion's Mane Gummies `SYN-FG-001` at $32 and one Ashwagandha Tincture `SYN-AT-001` at $34. Combined COGS=$10.24+$8.16=$18.40. This $34 tincture is distinct from the $38 `SYN-TNCT-AM` used in the Capstone.

The collision fixture applies VIP20 ($13.20), WELCOME20 ($20.00) and LOYALTY7 ($7.20), plus zero customer shipping through FREESHIP. These four promotions are the fault input; the post-control replay uses the same basket and attempted promotions.

| Contribution line | Collision fixture | Policy-compliant replay |
|---|---:|---:|
| Gross merchandise | $66.00 | $66.00 |
| VIP20 | −$13.20 | −$13.20 |
| WELCOME20 | −$20.00 | $0.00; ineligible |
| LOYALTY7 | −$7.20 | $0.00; ineligible |
| Merchandise collected | $25.60 | $52.80 |
| Customer shipping | $0.00 | $0.00 |
| COGS | −$18.40 | −$18.40 |
| Protected handling | −$4.10 | −$4.10 |
| Carrier freight | −$6.50 | −$6.50 |
| Gateway | −$1.04 | −$1.83 |
| **Contribution** | **−$4.44** | **+$21.97** |

The initial merchandise subtotal $66 is below $85, so order promotions cannot combine with VIP20. Final merchandise $52.80 meets the $50 free-shipping rule. Post-control contribution is $21.97/$52.80=**41.61%**; improvement is **$26.41/order**. The rate includes no additional authorization toll. Under a separately configured shipping-collected policy, $6.50 shipping gives $59.30 payment, $2.02 processing and $28.28 contribution; that is not the current free-shipping replay.

```python
from decimal import Decimal as D, ROUND_HALF_UP
fee = lambda amount: (amount * D('0.029') + D('0.30')).quantize(D('0.01'), rounding=ROUND_HALF_UP)
def cm(m, shipping=D('0')):
    return m + shipping - D('18.40') - D('4.10') - D('6.50') - fee(m + shipping)
assert cm(D('25.60')) == D('-4.44')
assert cm(D('52.80')) == D('21.97')
assert cm(D('52.80'), D('6.50')) == D('28.28')
```

### 4.2 Diagnostic and eligibility acceptance cases

| Case | Required result |
|---|---|
| Cart 422 | Error surfaced; button usable; no inferred payment outcome |
| HTTP 200 with business error | No success notification |
| Authorization without capture | Payment state remains distinct from settlement |
| Unknown payment result | Reconcile transaction before another charge |
| $84.99 / $85.00 pre-promotion subtotal | Combined-promotion eligibility switches at threshold |
| $49.99 / $50.00 final subtotal | Free-shipping eligibility switches at threshold |
| Same reward repeated | No duplicate redemption |
| Extra parcel or different lane | Contribution re-rated before approval |

The financial replay is reproducible from the printed inputs. A deployed discount control is verified with actual allocations, configuration/version and recorded boundary responses. Diagnostic targets are ≤60 seconds to classify the subsystem and ≤180 seconds to assemble an actionable evidence set. MTTI is the mean of recorded identification intervals, with trial count and failures reported; a single fast diagnosis is not a mean.

## 5. Technical References

- [Shopify Dawn cart error handling](https://github.com/Shopify/dawn/blob/3e9ee2281dc40e1eda9d5fd3ca64719d0a36b47d/assets/product-form.js).
- [Stripe API schema](https://github.com/stripe/openapi/blob/6360907ca278d6aecff118df90167e94aaba1437/openapi/spec3.json) — normalized and network decline fields are distinct.
- [Shopify discount combinations](https://help.shopify.com/en/manual/discounts/discount-combinations).
