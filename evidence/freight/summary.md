# Workstream A — Freight and Handling Scenario Evidence

All amounts are declared scenario inputs calculated in integer cents. The listed USPS/UPS URLs identify possible reference sources; no current tariff, dated historical tariff, ShipBob quotation, ZIP-zone assignment or invoice is verified by this suite.

## Controlled three-unit comparison

Basket: two SYN-FSTK-MY units and one SYN-TNCT-AM unit. The synthetic reservation fixture allows the full basket at Reno and sticks only at Allentown. Model buckets 4/6 are pricing inputs, not verified Denver postal zones. A forced split is compared with feasible consolidation; the comparison does not demonstrate that a closest-node rule would select the split.

| Split parcel node | Picked units | Freight | Handling | Total |
|---|---:|---:|---:|---:|
| LOC-PA-01 | 2 | $8.10 | $3.70 | $11.80 |
| LOC-NV-02 | 1 | $6.40 | $3.30 | $9.70 |

Split total: **$21.50**. Reno consolidated total: **$10.50**. Difference: **$11.00**.

Handling is $2.50 base + $0.80 corrugate per parcel + $0.40 per pick after the first. There is no extra cart penalty. Weights, service-specific surcharges and re-rating are excluded from this fixed-input comparison.

## Paired-basket cohort model

The fixture assigns 310 two-unit orders and 190 exactly-three-unit orders: **1190 units**. This explicit assumption makes a conditional model reproducible; it is not a reconstructed historical ledger. Aggregate carrier totals and split counts are supplied inputs, not generated routing or quoting results.

| Cost | Alpha (657 parcels) | Beta (541 parcels) | Saving |
|---|---:|---:|---:|
| Handling | $2381.30 | $2044.90 | $336.40 |
| Freight input | $5190.20 | $4529.20 | $661.00 |
| Total | $7571.50 | $6574.10 | **$997.40** |

Split reduction: 116 orders, 73.89% relative and 23.2 percentage points absolute. Handling savings are 116 × $2.90 = $336.40. Per-order saving is $997.40 / 500 = $1.9948.

At 1700 orders/month: **$3391.16/month** and **$40693.92** for twelve identical months. The separate 1000-orders/day, 365-day scale yields **$728102.00/year**. These scales are distinct sensitivity scenarios.

The dossier's previously reported $445.40 handling delta and $1,106.40 total do not follow this handling model. This execution validates the conditional arithmetic; it does not certify those reported totals or replace them with new observed savings.

## Capstone boundary

Order #1070's original destination is **Philadelphia, PA 19102**, requested destination **San Francisco, CA 94102**. Its $7.20 original freight is a separate declared input. No Brooklyn routing example, carrier invoice, physical shipment or misrouting outcome is inferred from these calculations.

## Executed checks

Run: `2026-11-09T18-21-14-457Z-59d713d1` · Node v24.22.1

Passed: 13; failed: 0; skipped: 1.

| Check | Status | Detail |
|---|---|---|
| All monetary inputs are nonnegative safe integer cents | passed |  |
| Three-pick parcel handling equals $4.10 under the declared model | passed |  |
| Three units split across two parcels cost $7.00 handling | passed |  |
| Both priced plans reserve the complete basket within fixture capacity | passed |  |
| Unavailable tincture cannot be allocated to Allentown | passed |  |
| Incomplete basket cannot be priced as successful fulfillment | passed |  |
| Reservations are aggregated across parcels at the same node | passed |  |
| Split $21.50 and consolidated $10.50 derive from parcel line items | passed |  |
| Changing a lane cost propagates into the plan total without a hidden surcharge | passed |  |
| Five-hundred-order fixture preserves paired units and parcel counts | passed |  |
| Cohort savings match handling formula and aggregate freight inputs | passed |  |
| Monthly and annual projections retain the exact cohort numerator | passed |  |
| Capstone fixture retains Philadelphia and its separate $7.20 freight assumption | passed |  |
| Dated carrier tariff and ZIP-zone verification | skipped | No dated publication snapshot or independently checked quote is included; carrier amounts remain scenario inputs. |
