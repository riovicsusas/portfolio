# BOM and Contribution Evidence

Classification: scenario inputs and calculated results. All money is represented as integer cents; percentage fees use rational arithmetic with half-up rounding.

## Bundle cost inputs

| Component | Quantity | Extended cost |
|---|---:|---:|
| Focus Stick Packs 30-Pack | 1 | $8.50 |
| AM Adaptogen Tincture 60ml | 1 | $12.50 |
| Precision Tumbler, Matte Obsidian | 1 | $7.00 |
| Raw component BOM | | $28.00 |
| Assumed kitting material | | $0.40 |
| Kitted cost | | $28.40 |

These are declared scenario costs. No historical supplier contract, invoice or procurement transaction is established. The kitting allowance is product material, distinct from outbound fulfillment service.

## Separate financial scenarios

Shipping revenue and tax are zero for these baselines. Tax collected is excluded from revenue but included in the processing base when applicable.

| Scenario | Merchandise | COGS | Handling | Freight | Processing | Contribution | Contribution margin | Minimum payable |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| capstone | $98.00 | $28.40 | $4.50 | $7.20 | $3.14 | $54.76 | 55.88% | $41.61 |
| alternative_standard | $98.00 | $28.40 | $4.90 | $6.50 | $3.14 | $55.06 | 56.18% | $41.30 |
| alternative_promo | $82.00 | $28.40 | $4.90 | $6.50 | $2.68 | $39.52 | 48.2% | $41.30 |
| reference_price_82_40 | $82.40 | $28.40 | $4.90 | $6.50 | $2.69 | $39.91 | 48.43% | $41.30 |

The alternative fulfillment rows intentionally use different handling/freight from the Capstone. The representative-price row is not a measurement of cohort profitability.

## Capstone replacement branch

| Additional recovery cost | Amount |
|---|---:|
| Intercept scenario charge | $17.50 |
| Return freight | $8.40 |
| Fresh replacement COGS | $28.40 |
| Replacement handling | $4.50 |
| Replacement freight | $14.80 |
| Goodwill expense | $25.00 |
| Total incremental cost | $98.60 |

Baseline $54.76 − incremental recovery $98.60 = retained-sale contribution **-$43.84**. Original COGS, handling, outbound freight and processing remain incurred. No salvage recovery is assumed. Goodwill is fully expensed in this scenario.

A separate lost-chargeback branch reverses $98.00 principal and adds $15.00 dispute fee, producing **-$156.84**. Neither is included in the retained-sale branch.

## Sensitivity analysis

The following chosen ranges hold the promotional scenario's other inputs fixed; they are not supplier quotes or carrier zone assignments. Minimum payable is the lowest whole-cent amount with nonnegative contribution under the rounded processing fee. Its preceding cent is asserted negative. A production policy needs a positive buffer and actual basket costs.

### Component costs

| Parameter | COGS | Freight | Contribution | Minimum payable |
|---|---:|---:|---:|---:|
| -20% | $22.80 | $6.50 | $45.12 | $35.53 |
| -10% | $25.60 | $6.50 | $42.32 | $38.41 |
| 0% | $28.40 | $6.50 | $39.52 | $41.30 |
| 10% | $31.20 | $6.50 | $36.72 | $44.18 |
| 20% | $34.00 | $6.50 | $33.92 | $47.06 |

### Kitting material

| Parameter | COGS | Freight | Contribution | Minimum payable |
|---|---:|---:|---:|---:|
| $0.20 | $28.20 | $6.50 | $39.72 | $41.09 |
| $0.40 | $28.40 | $6.50 | $39.52 | $41.30 |
| $0.60 | $28.60 | $6.50 | $39.32 | $41.50 |
| $0.80 | $28.80 | $6.50 | $39.12 | $41.71 |
| $1.00 | $29.00 | $6.50 | $38.92 | $41.92 |

### Freight

| Parameter | COGS | Freight | Contribution | Minimum payable |
|---|---:|---:|---:|---:|
| $4.50 | $28.40 | $4.50 | $41.52 | $39.24 |
| $6.50 | $28.40 | $6.50 | $39.52 | $41.30 |
| $8.50 | $28.40 | $8.50 | $37.52 | $43.36 |
| $10.50 | $28.40 | $10.50 | $35.52 | $45.42 |
| $14.60 | $28.40 | $14.60 | $31.42 | $49.64 |
| $17.80 | $28.40 | $17.80 | $28.22 | $52.93 |

## Scope

This package verifies the printed scenario arithmetic and boundary behavior. It does not establish actual purchasing costs, a universal discount ceiling, realized merchant savings, or net profit after overhead, acquisition, support, returns, tax effects and other excluded fees.

## Executed checks

Run: `2026-11-11T09-32-49-630Z-b8ae4167` · Node v24.22.1

Passed: 11; failed: 0; skipped: 0.

| Check | Status | Detail |
|---|---|---|
| Input ledger uses nonnegative integer cents and valid component/scenario identities | passed |  |
| Half-up rational processing fees are correct at a half-cent boundary | passed |  |
| Money helpers reject negative, fractional, unsafe or invalid-rate inputs | passed |  |
| Fixture BOM contains exactly one of each approved bundle component | passed |  |
| Capstone baseline preserves the declared financial fixture | passed |  |
| Replacement and chargeback branches retain original costs without double-expensing COGS | passed |  |
| Alternative fulfillment inputs are a distinct scenario, not the Capstone baseline | passed |  |
| Every baseline and sensitivity row reconciles in cents | passed |  |
| Every discount floor passes and its immediately preceding cent fails | passed |  |
| Processing includes shipping and tax, but contribution excludes tax liability | passed |  |
| Increasing a declared cost cannot increase contribution or reduce its floor | passed |  |
