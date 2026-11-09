import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createSuite } from '../lib/report.js';
import { assertCents, feeCents, roundRatio, formatCents as usd } from './money.js';
const directory = path.dirname(fileURLToPath(import.meta.url));
const inputIndex = process.argv.indexOf('--input');
const inputPath = inputIndex >= 0 ? path.resolve(process.argv[inputIndex + 1]) : path.join(directory, 'bom_inputs.json');
const suite = createSuite('costs', { classification: 'Calculated scenario economics with executed invariant and regression checks', inputs: [path.relative(directory, inputPath), 'money.js'] });
let inputs, valid = false;
await suite.check('Input ledger uses nonnegative integer cents and valid component/scenario identities', () => {
  inputs = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  assert.equal(inputs.currency, 'USD'); assert.equal(inputs.monetary_unit, 'integer cents');
  const entries = Object.entries(inputs.components);
  assert.ok(entries.length > 0);
  assert.equal(new Set(entries.map(([, c]) => c.sku)).size, entries.length);
  for (const [key, c] of entries) {
    assert.ok(c.sku && c.name, key); assertCents(c.unit_cost_cents, `${key} cost`); assertCents(c.retail_cents, `${key} retail`);
  }
  assert.equal(new Set(inputs.bundle.components.map(c => c.component)).size, inputs.bundle.components.length);
  for (const c of inputs.bundle.components) {
    assert.ok(inputs.components[c.component], `Unknown component ${c.component}`);
    assert.ok(Number.isSafeInteger(c.quantity) && c.quantity > 0, 'Positive integral component quantity required');
    assertCents(inputs.components[c.component].unit_cost_cents * c.quantity);
  }
  assertCents(inputs.bundle.kitting_material_cents);
  assert.ok(inputs.scenarios.length > 0); assert.equal(new Set(inputs.scenarios.map(s => s.id)).size, inputs.scenarios.length);
  for (const s of inputs.scenarios) {
    for (const key of ['merchandise_cents','shipping_collected_cents','tax_collected_cents','handling_cents','freight_cents']) assertCents(s[key], `${s.id}.${key}`);
  }
  for (const [key, value] of Object.entries(inputs.recovery)) if (key.endsWith('_cents')) assertCents(value, key);
  for (const key of ['kitting_cents','freight_cents']) for (const value of inputs.sensitivity[key]) assertCents(value, key);
  for (const value of inputs.sensitivity.component_basis_points) assert.ok(Number.isSafeInteger(value) && value >= -10000, 'Invalid component variation');
  feeCents(0, inputs.processing.rate_numerator, inputs.processing.rate_denominator, inputs.processing.fixed_cents);
  valid = true;
});
if (!valid) {
  suite.finish({ outputName: 'sensitivity.json', markdown: '# Cost evidence\n\nInput validation failed; no financial results are reported.' });
} else {
  const fee = amount => feeCents(amount, inputs.processing.rate_numerator, inputs.processing.rate_denominator, inputs.processing.fixed_cents);
  const componentRows = inputs.bundle.components.map(row => ({ ...inputs.components[row.component], quantity: row.quantity, extended_cost_cents: inputs.components[row.component].unit_cost_cents * row.quantity }));
  const rawBom = componentRows.reduce((n, c) => n + c.extended_cost_cents, 0);
  const kitted = rawBom + inputs.bundle.kitting_material_cents;
  function economics(scenario, cogs = kitted) {
    const revenue = scenario.merchandise_cents + scenario.shipping_collected_cents;
    const payment = revenue + scenario.tax_collected_cents;
    const gateway = fee(payment);
    const variableCosts = cogs + scenario.handling_cents + scenario.freight_cents + gateway;
    const contribution = revenue - variableCosts;
    return { ...scenario, cogs_cents: cogs, contribution_revenue_cents: revenue, payment_amount_cents: payment, processing_cents: gateway, variable_costs_cents: variableCosts, contribution_cents: contribution, contribution_margin_percent: revenue ? roundRatio(contribution * 10000, revenue) / 100 : null };
  }
  function floor(cogs, handling, freight) {
    const nonfee = cogs + handling + freight;
    let lo = 0, hi = Math.max(nonfee + inputs.processing.fixed_cents, 1);
    while (hi - nonfee - fee(hi) < 0) { hi *= 2; assertCents(hi); }
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (mid - nonfee - fee(mid) >= 0) hi = mid; else lo = mid + 1;
    }
    return { payable_cents: lo, processing_cents: fee(lo), contribution_cents: lo - nonfee - fee(lo), previous_cent_contribution_cents: lo ? lo - 1 - nonfee - fee(lo - 1) : null };
  }
  const scenarios = inputs.scenarios.map(s => ({ ...economics(s), zero_contribution_floor: floor(kitted, s.handling_cents, s.freight_cents) }));
  const capstone = scenarios.find(s => s.id === 'capstone');
  assert.ok(capstone, 'Capstone scenario required');
  const r = inputs.recovery;
  const recoveryLines = [
    ['Intercept scenario charge', r.intercept_cents], ['Return freight', r.return_freight_cents], ['Fresh replacement COGS', kitted],
    ['Replacement handling', r.replacement_handling_cents], ['Replacement freight', r.replacement_freight_cents], ['Goodwill expense', r.goodwill_expense_cents]
  ].map(([name, cents]) => ({ name, cents }));
  const incremental = recoveryLines.reduce((sum, line) => sum + line.cents, 0);
  const finalContribution = capstone.contribution_cents - incremental;
  const recovery = { lines: recoveryLines, incremental_cost_cents: incremental, retained_sale_contribution_cents: finalContribution,
    lost_chargeback_contribution_cents: finalContribution - capstone.payment_amount_cents - r.dispute_fee_cents,
    chargeback_principal_cents: capstone.payment_amount_cents, dispute_fee_cents: r.dispute_fee_cents };
  const promo = inputs.scenarios.find(s => s.id === 'alternative_promo');
  assert.ok(promo, 'Promotional comparison scenario required');
  const sweeps = {
    components: inputs.sensitivity.component_basis_points.map(bps => {
      const raw = roundRatio(rawBom * (10000 + bps), 10000), cogs = raw + inputs.bundle.kitting_material_cents;
      return { change_basis_points: bps, raw_bom_cents: raw, cogs_cents: cogs, ...economics(promo, cogs), zero_contribution_floor: floor(cogs, promo.handling_cents, promo.freight_cents) };
    }),
    kitting: inputs.sensitivity.kitting_cents.map(cents => ({ kitting_material_cents: cents, ...economics(promo, rawBom + cents), zero_contribution_floor: floor(rawBom + cents, promo.handling_cents, promo.freight_cents) })),
    freight: inputs.sensitivity.freight_cents.map(cents => ({ ...economics({ ...promo, freight_cents: cents }), zero_contribution_floor: floor(kitted, promo.handling_cents, cents) }))
  };
  await suite.check('Half-up rational processing fees are correct at a half-cent boundary', () => {
    assert.equal(feeCents(500), 45); assert.equal(feeCents(9800), 314); assert.equal(feeCents(2820), 112); assert.equal(roundRatio(-15, 10), -2);
  });
  await suite.check('Money helpers reject negative, fractional, unsafe or invalid-rate inputs', () => {
    for (const n of [-1, 1.2, Number.NaN, Number.MAX_SAFE_INTEGER + 1]) assert.throws(() => feeCents(n));
    assert.throws(() => feeCents(100, 1000, 1000)); assert.equal(usd(-1), '-$0.01');
  });
  await suite.check('Fixture BOM contains exactly one of each approved bundle component', () => {
    assert.deepEqual(inputs.bundle.components, [{ component: 'sticks', quantity: 1 }, { component: 'tincture', quantity: 1 }, { component: 'tumbler', quantity: 1 }]);
    assert.equal(rawBom, 2800); assert.equal(kitted, 2840);
  });
  await suite.check('Capstone baseline preserves the declared financial fixture', () => {
    assert.equal(capstone.merchandise_cents, 9800); assert.equal(capstone.handling_cents, 450); assert.equal(capstone.freight_cents, 720);
    assert.equal(capstone.processing_cents, 314); assert.equal(capstone.contribution_cents, 5476);
  });
  await suite.check('Replacement and chargeback branches retain original costs without double-expensing COGS', () => {
    assert.equal(incremental, 9860); assert.equal(finalContribution, -4384); assert.equal(recovery.lost_chargeback_contribution_cents, -15684);
    const direct = capstone.contribution_revenue_cents - capstone.variable_costs_cents - incremental;
    assert.equal(direct, finalContribution);
  });
  await suite.check('Alternative fulfillment inputs are a distinct scenario, not the Capstone baseline', () => {
    assert.equal(scenarios.find(s => s.id === 'alternative_standard').contribution_cents, 5506);
    assert.notEqual(scenarios.find(s => s.id === 'alternative_standard').contribution_cents, capstone.contribution_cents);
  });
  await suite.check('Every baseline and sensitivity row reconciles in cents', () => {
    for (const row of [...scenarios, ...sweeps.components, ...sweeps.kitting, ...sweeps.freight]) {
      assert.equal(row.processing_cents, fee(row.payment_amount_cents));
      assert.equal(row.contribution_cents, row.contribution_revenue_cents - row.cogs_cents - row.handling_cents - row.freight_cents - row.processing_cents);
      assertCents(row.contribution_cents, 'contribution', true);
    }
  });
  await suite.check('Every discount floor passes and its immediately preceding cent fails', () => {
    for (const row of [...scenarios, ...sweeps.components, ...sweeps.kitting, ...sweeps.freight]) {
      const f = row.zero_contribution_floor;
      assert.ok(f.contribution_cents >= 0); assert.ok(f.previous_cent_contribution_cents === null || f.previous_cent_contribution_cents < 0);
      assert.equal(f.payable_cents - row.cogs_cents - row.handling_cents - row.freight_cents - fee(f.payable_cents), f.contribution_cents);
    }
  });
  await suite.check('Processing includes shipping and tax, but contribution excludes tax liability', () => {
    const row = economics({ ...promo, shipping_collected_cents: 650, tax_collected_cents: 500 });
    assert.equal(row.payment_amount_cents, promo.merchandise_cents + 1150);
    assert.equal(row.contribution_revenue_cents, promo.merchandise_cents + 650);
    assert.equal(row.processing_cents, fee(row.payment_amount_cents));
  });
  await suite.check('Increasing a declared cost cannot increase contribution or reduce its floor', () => {
    for (const rows of [sweeps.components, sweeps.kitting, sweeps.freight]) for (let i = 1; i < rows.length; i++) {
      assert.ok(rows[i].contribution_cents <= rows[i - 1].contribution_cents);
      assert.ok(rows[i].zero_contribution_floor.payable_cents >= rows[i - 1].zero_contribution_floor.payable_cents);
    }
  });
  const rows = scenarios.map(s => `| ${s.id} | ${usd(s.merchandise_cents)} | ${usd(s.cogs_cents)} | ${usd(s.handling_cents)} | ${usd(s.freight_cents)} | ${usd(s.processing_cents)} | ${usd(s.contribution_cents)} | ${s.contribution_margin_percent}% | ${usd(s.zero_contribution_floor.payable_cents)} |`).join('\n');
  const sweepSection = (title, values, label) => `\n### ${title}\n\n| Parameter | COGS | Freight | Contribution | Minimum payable |\n|---|---:|---:|---:|---:|\n` + values.map(row => `| ${label(row)} | ${usd(row.cogs_cents)} | ${usd(row.freight_cents)} | ${usd(row.contribution_cents)} | ${usd(row.zero_contribution_floor.payable_cents)} |`).join('\n') + '\n';
  const markdown = `# BOM and Contribution Evidence\n\nClassification: scenario inputs and calculated results. All money is represented as integer cents; percentage fees use rational arithmetic with half-up rounding.\n\n## Bundle cost inputs\n\n| Component | Quantity | Extended cost |\n|---|---:|---:|\n${componentRows.map(c => `| ${c.name} | ${c.quantity} | ${usd(c.extended_cost_cents)} |`).join('\n')}\n| Raw component BOM | | ${usd(rawBom)} |\n| Assumed kitting material | | ${usd(inputs.bundle.kitting_material_cents)} |\n| Kitted cost | | ${usd(kitted)} |\n\nThese are declared scenario costs. No historical supplier contract, invoice or procurement transaction is established. The kitting allowance is product material, distinct from outbound fulfillment service.\n\n## Separate financial scenarios\n\nShipping revenue and tax are zero for these baselines. Tax collected is excluded from revenue but included in the processing base when applicable.\n\n| Scenario | Merchandise | COGS | Handling | Freight | Processing | Contribution | Contribution margin | Minimum payable |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|\n${rows}\n\nThe alternative fulfillment rows intentionally use different handling/freight from the Capstone. The representative-price row is not a measurement of cohort profitability.\n\n## Capstone replacement branch\n\n| Additional recovery cost | Amount |\n|---|---:|\n${recoveryLines.map(l => `| ${l.name} | ${usd(l.cents)} |`).join('\n')}\n| Total incremental cost | ${usd(incremental)} |\n\nBaseline ${usd(capstone.contribution_cents)} − incremental recovery ${usd(incremental)} = retained-sale contribution **${usd(finalContribution)}**. Original COGS, handling, outbound freight and processing remain incurred. No salvage recovery is assumed. Goodwill is fully expensed in this scenario.\n\nA separate lost-chargeback branch reverses ${usd(recovery.chargeback_principal_cents)} principal and adds ${usd(recovery.dispute_fee_cents)} dispute fee, producing **${usd(recovery.lost_chargeback_contribution_cents)}**. Neither is included in the retained-sale branch.\n\n## Sensitivity analysis\n\nThe following chosen ranges hold the promotional scenario's other inputs fixed; they are not supplier quotes or carrier zone assignments. Minimum payable is the lowest whole-cent amount with nonnegative contribution under the rounded processing fee. Its preceding cent is asserted negative. A production policy needs a positive buffer and actual basket costs.\n${sweepSection('Component costs', sweeps.components, r => `${r.change_basis_points / 100}%`)}${sweepSection('Kitting material', sweeps.kitting, r => usd(r.kitting_material_cents))}${sweepSection('Freight', sweeps.freight, r => usd(r.freight_cents))}\n## Scope\n\nThis package verifies the printed scenario arithmetic and boundary behavior. It does not establish actual purchasing costs, a universal discount ceiling, realized merchant savings, or net profit after overhead, acquisition, support, returns, tax effects and other excluded fees.\n`;
  suite.finish({ outputName: 'sensitivity.json', data: { monetary_unit: 'integer cents', rounding: inputs.processing.rounding, raw_component_bom_cents: rawBom, kitted_cogs_cents: kitted, component_rows: componentRows, scenarios, recovery, sensitivity_sweeps: sweeps }, markdown,
    sources: [{ type: 'scenario_input', file: path.relative(directory, inputPath), verified_procurement_record: false }] });
}
