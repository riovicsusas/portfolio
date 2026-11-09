import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createSuite } from '../lib/report.js';

const directory = path.dirname(fileURLToPath(import.meta.url));
const inputArgument = process.argv.indexOf('--input');
const inputPath = inputArgument < 0 ? path.join(directory, 'tariffs.json') : path.resolve(process.argv[inputArgument + 1]);
const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const suite = createSuite('freight', {
  classification: 'Calculated results from declared synthetic inventory, handling and freight inputs',
  inputs: [path.relative(directory, inputPath)]
});
const money = cents => `${cents < 0 ? '-' : ''}$${(Math.abs(cents) / 100).toFixed(2)}`;
const roundRatio = (numerator, denominator) => {
  assert.ok(Number.isSafeInteger(numerator) && numerator >= 0);
  assert.ok(Number.isSafeInteger(denominator) && denominator > 0);
  return Math.floor((numerator + denominator / 2) / denominator);
};
const { handling: fees, lane_scenario: lane, cohort_scenario: cohort } = input;
function handling(parcels, units) {
  assert.ok(Number.isSafeInteger(parcels) && parcels > 0);
  assert.ok(Number.isSafeInteger(units) && units >= parcels);
  return parcels * (fees.base_per_parcel_cents + fees.corrugate_per_parcel_cents)
    + (units - parcels) * fees.additional_pick_cents;
}
function quantities(items) {
  const totals = {};
  for (const item of items) {
    assert.ok(Number.isSafeInteger(item.quantity) && item.quantity > 0, 'Positive whole-unit quantity required');
    totals[item.sku] = (totals[item.sku] || 0) + item.quantity;
  }
  return Object.fromEntries(Object.entries(totals).sort(([a], [b]) => a.localeCompare(b)));
}
function pricePlan(plan) {
  assert.ok(plan.length > 0);
  assert.deepEqual(quantities(plan.flatMap(parcel => parcel.items)), quantities(lane.basket), 'Plan must contain exactly the requested basket');
  const reservedByNode = {};
  const parcels = plan.map(parcel => {
    const node = lane.available_to_promise_fixture[parcel.node];
    assert.ok(node, `Unknown node: ${parcel.node}`);
    reservedByNode[parcel.node] ||= {};
    for (const [sku, quantity] of Object.entries(quantities(parcel.items))) {
      reservedByNode[parcel.node][sku] = (reservedByNode[parcel.node][sku] || 0) + quantity;
      assert.ok(reservedByNode[parcel.node][sku] <= (node[sku] || 0), `Insufficient ${sku} at ${parcel.node}`);
    }
    const units = parcel.items.reduce((n, i) => n + i.quantity, 0);
    const freight = lane.lanes[parcel.node].freight_per_parcel_cents;
    return { node: parcel.node, items: parcel.items, units, freight_cents: freight, handling_cents: handling(1, units), total_cents: freight + handling(1, units) };
  });
  return { parcels, units: parcels.reduce((n, p) => n + p.units, 0), total_cents: parcels.reduce((n, p) => n + p.total_cents, 0) };
}
let split, consolidated, modeledCohort;
await suite.check('All monetary inputs are nonnegative safe integer cents', () => {
  function inspect(value) {
    for (const [key, v] of Object.entries(value)) {
      if (key.endsWith('_cents')) assert.ok(Number.isSafeInteger(v) && v >= 0, `${key} must be nonnegative integer cents`);
      else if (v && typeof v === 'object') inspect(v);
    }
  }
  inspect(input); assert.equal(fees.first_pick_included, true);
});
await suite.check('Three-pick parcel handling equals $4.10 under the declared model', () => assert.equal(handling(1, 3), 410));
await suite.check('Three units split across two parcels cost $7.00 handling', () => assert.equal(handling(2, 3), 700));
await suite.check('Both priced plans reserve the complete basket within fixture capacity', () => {
  split = pricePlan(lane.split_plan); consolidated = pricePlan(lane.consolidated_plan);
  assert.equal(split.units, consolidated.units); assert.equal(split.units, 3);
});
await suite.check('Unavailable tincture cannot be allocated to Allentown', () => {
  assert.throws(() => pricePlan([{ node: 'LOC-PA-01', items: lane.basket }]), /Insufficient/);
});
await suite.check('Incomplete basket cannot be priced as successful fulfillment', () => {
  assert.throws(() => pricePlan([{ node: 'LOC-NV-02', items: [{ sku: 'SYN-FSTK-MY', quantity: 2 }] }]), /exactly/);
});
await suite.check('Reservations are aggregated across parcels at the same node', () => {
  const capacity = lane.available_to_promise_fixture['LOC-PA-01']['SYN-FSTK-MY'];
  try {
    lane.available_to_promise_fixture['LOC-PA-01']['SYN-FSTK-MY'] = 1;
    assert.throws(() => pricePlan([
      { node: 'LOC-PA-01', items: [{ sku: 'SYN-FSTK-MY', quantity: 1 }] },
      { node: 'LOC-PA-01', items: [{ sku: 'SYN-FSTK-MY', quantity: 1 }] },
      { node: 'LOC-NV-02', items: [{ sku: 'SYN-TNCT-AM', quantity: 1 }] }
    ]), /Insufficient/);
  } finally { lane.available_to_promise_fixture['LOC-PA-01']['SYN-FSTK-MY'] = capacity; }
});
await suite.check('Split $21.50 and consolidated $10.50 derive from parcel line items', () => {
  assert.equal(split.total_cents, 2150); assert.equal(consolidated.total_cents, 1050);
  assert.equal(split.total_cents - consolidated.total_cents, 1100);
  for (const p of [...split.parcels, ...consolidated.parcels]) assert.equal(p.total_cents, p.freight_cents + p.handling_cents);
});
await suite.check('Changing a lane cost propagates into the plan total without a hidden surcharge', () => {
  const prior = lane.lanes['LOC-NV-02'].freight_per_parcel_cents;
  try {
    lane.lanes['LOC-NV-02'].freight_per_parcel_cents += 37;
    assert.equal(pricePlan(lane.consolidated_plan).total_cents, consolidated.total_cents + 37);
  } finally { lane.lanes['LOC-NV-02'].freight_per_parcel_cents = prior; }
});
await suite.check('Five-hundred-order fixture preserves paired units and parcel counts', () => {
  const orders = cohort.orders_with_two_units + cohort.orders_with_three_plus_units;
  const units = cohort.orders_with_two_units * 2 + cohort.orders_with_three_plus_units * cohort.assumed_units_per_three_plus_order;
  assert.equal(orders, 500); assert.equal(units, 1190); assert.equal(cohort.max_parcels_per_split_order, 2);
  for (const plan of [cohort.alpha, cohort.beta]) {
    assert.ok(Number.isSafeInteger(plan.split_orders) && plan.split_orders >= 0 && plan.split_orders <= orders);
    assert.equal(plan.parcels, orders + plan.split_orders);
  }
  const calculate = plan => {
    const handlingCents = handling(plan.parcels, units);
    return { ...plan, handling_cents: handlingCents, total_cents: handlingCents + plan.aggregate_freight_input_cents };
  };
  const alpha = calculate(cohort.alpha), beta = calculate(cohort.beta);
  const saving = alpha.total_cents - beta.total_cents;
  const eliminated = alpha.parcels - beta.parcels;
  const annualOrders = cohort.planning_orders_per_day * cohort.planning_days_per_year;
  modeledCohort = {
    orders, units, alpha, beta,
    eliminated_split_orders: eliminated,
    relative_split_reduction_percent: Number((eliminated / cohort.alpha.split_orders * 100).toFixed(2)),
    absolute_split_reduction_percentage_points: (cohort.alpha.split_orders - cohort.beta.split_orders) / orders * 100,
    handling_savings_cents: alpha.handling_cents - beta.handling_cents,
    freight_savings_cents: alpha.aggregate_freight_input_cents - beta.aggregate_freight_input_cents,
    total_savings_cents: saving,
    savings_per_order_exact: { numerator_cents: saving, denominator_orders: orders },
    monthly_projection: { orders: cohort.monthly_projection_orders, saving_cents: roundRatio(saving * cohort.monthly_projection_orders, orders) },
    matching_12_month_projection: { orders: cohort.monthly_projection_orders * 12, saving_cents: roundRatio(saving * cohort.monthly_projection_orders * 12, orders) },
    separate_planning_projection: { orders: annualOrders, saving_cents: roundRatio(saving * annualOrders, orders) }
  };
});
await suite.check('Cohort savings match handling formula and aggregate freight inputs', () => {
  assert.equal(modeledCohort.handling_savings_cents, 33640);
  assert.equal(modeledCohort.freight_savings_cents, 66100);
  assert.equal(modeledCohort.total_savings_cents, 99740);
  assert.equal(modeledCohort.total_savings_cents, modeledCohort.handling_savings_cents + modeledCohort.freight_savings_cents);
});
await suite.check('Monthly and annual projections retain the exact cohort numerator', () => {
  assert.equal(modeledCohort.monthly_projection.saving_cents, 339116);
  assert.equal(modeledCohort.matching_12_month_projection.saving_cents, 4069392);
  assert.equal(modeledCohort.separate_planning_projection.saving_cents, 72810200);
});
await suite.check('Capstone fixture retains Philadelphia and its separate $7.20 freight assumption', () => {
  assert.equal(input.capstone_context.original_destination, 'Philadelphia, PA 19102');
  assert.equal(input.capstone_context.outbound_freight_scenario_cents, 720);
});
suite.skip('Dated carrier tariff and ZIP-zone verification', 'No dated publication snapshot or independently checked quote is included; carrier amounts remain scenario inputs.');
const planRows = plan => plan.parcels.map(p => `| ${p.node} | ${p.units} | ${money(p.freight_cents)} | ${money(p.handling_cents)} | ${money(p.total_cents)} |`).join('\n');
const markdown = split && consolidated && modeledCohort ? `# Workstream A — Freight and Handling Scenario Evidence

All amounts are declared scenario inputs calculated in integer cents. The listed USPS/UPS URLs identify possible reference sources; no current tariff, dated historical tariff, ShipBob quotation, ZIP-zone assignment or invoice is verified by this suite.

## Controlled three-unit comparison

Basket: two SYN-FSTK-MY units and one SYN-TNCT-AM unit. The synthetic reservation fixture allows the full basket at Reno and sticks only at Allentown. Model buckets 4/6 are pricing inputs, not verified Denver postal zones. A forced split is compared with feasible consolidation; the comparison does not demonstrate that a closest-node rule would select the split.

| Split parcel node | Picked units | Freight | Handling | Total |
|---|---:|---:|---:|---:|
${planRows(split)}

Split total: **${money(split.total_cents)}**. Reno consolidated total: **${money(consolidated.total_cents)}**. Difference: **${money(split.total_cents - consolidated.total_cents)}**.

Handling is $2.50 base + $0.80 corrugate per parcel + $0.40 per pick after the first. There is no extra cart penalty. Weights, service-specific surcharges and re-rating are excluded from this fixed-input comparison.

## Paired-basket cohort model

The fixture assigns ${cohort.orders_with_two_units} two-unit orders and ${cohort.orders_with_three_plus_units} exactly-three-unit orders: **${modeledCohort.units} units**. This explicit assumption makes a conditional model reproducible; it is not a reconstructed historical ledger. Aggregate carrier totals and split counts are supplied inputs, not generated routing or quoting results.

| Cost | Alpha (${modeledCohort.alpha.parcels} parcels) | Beta (${modeledCohort.beta.parcels} parcels) | Saving |
|---|---:|---:|---:|
| Handling | ${money(modeledCohort.alpha.handling_cents)} | ${money(modeledCohort.beta.handling_cents)} | ${money(modeledCohort.handling_savings_cents)} |
| Freight input | ${money(modeledCohort.alpha.aggregate_freight_input_cents)} | ${money(modeledCohort.beta.aggregate_freight_input_cents)} | ${money(modeledCohort.freight_savings_cents)} |
| Total | ${money(modeledCohort.alpha.total_cents)} | ${money(modeledCohort.beta.total_cents)} | **${money(modeledCohort.total_savings_cents)}** |

Split reduction: ${modeledCohort.eliminated_split_orders} orders, ${modeledCohort.relative_split_reduction_percent}% relative and ${modeledCohort.absolute_split_reduction_percentage_points.toFixed(1)} percentage points absolute. Handling savings are 116 × $2.90 = ${money(modeledCohort.handling_savings_cents)}. Per-order saving is ${money(modeledCohort.total_savings_cents)} / ${modeledCohort.orders} = $${(modeledCohort.total_savings_cents / modeledCohort.orders / 100).toFixed(4)}.

At ${modeledCohort.monthly_projection.orders} orders/month: **${money(modeledCohort.monthly_projection.saving_cents)}/month** and **${money(modeledCohort.matching_12_month_projection.saving_cents)}** for twelve identical months. The separate ${cohort.planning_orders_per_day}-orders/day, ${cohort.planning_days_per_year}-day scale yields **${money(modeledCohort.separate_planning_projection.saving_cents)}/year**. These scales are distinct sensitivity scenarios.

The dossier's previously reported $445.40 handling delta and $1,106.40 total do not follow this handling model. This execution validates the conditional arithmetic; it does not certify those reported totals or replace them with new observed savings.

## Capstone boundary

Order #1070's original destination is **${input.capstone_context.original_destination}**, requested destination **${input.capstone_context.requested_destination}**. Its ${money(input.capstone_context.outbound_freight_scenario_cents)} original freight is a separate declared input. No Brooklyn routing example, carrier invoice, physical shipment or misrouting outcome is inferred from these calculations.
` : '# Workstream A — Calculation failed\n\nSee failed assertions; incomplete results must not be cited as verified.';
suite.finish({ data: { inputs: input, split_plan: split, consolidated_plan: consolidated, cohort_model: modeledCohort }, markdown, sources: input.reference_candidates });
