import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createSuite, hash } from '../lib/report.js';
import { validateReturnRequest, validateSuccessResponse, RecoveryCoordinator } from './recovery.js';

const directory = path.dirname(fileURLToPath(import.meta.url));
const read = name => JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
const fixtures = read('fixtures.json');
const spec = read('contracts/ups_delivery_intercept_v2.openapi.json');
const provenance = read('contracts/provenance.json');
const suite = createSuite('carrier-recovery', {
  classification: 'Focused offline UPS return-contract checks and local recovery-state simulation; no live CIE or physical execution',
  inputs: ['fixtures.json', 'recovery.js', 'synapse_adapter_schema.json', 'contracts/ups_delivery_intercept_v2.openapi.json', 'contracts/provenance.json']
});
const request = () => structuredClone(fixtures.return_request);
const coordinator = () => new RecoveryCoordinator(spec, { successFeeCents: fixtures.fee_assumptions.success_fee_cents, failureFeeCents: fixtures.fee_assumptions.failure_fee_cents });
const success = { httpStatus: 200, body: fixtures.success_response };
const confirmations = [];

await suite.check('Pinned official JSON snapshot matches provenance hash', () => {
  assert.equal(hash(fs.readFileSync(path.join(directory, 'contracts/ups_delivery_intercept_v2.openapi.json'))), provenance.converted_json_sha256);
  assert.equal(spec.openapi, '3.1.0');
  assert.equal(spec.servers[0].variables.version.default, 'v2');
  assert.match(spec.info.description, /stubbed success response/);
});
await suite.check('Documented return fixture satisfies selected wire-contract checks', () => {
  assert.deepEqual(validateReturnRequest(request(), spec), []);
});
for (const [name, change] of [
  ['missing required transId', r => delete r.headers.transId],
  ['invalid platformType', r => r.headers.platformType = 'INVENTED'],
  ['missing bearer authorization', r => delete r.headers.Authorization],
  ['invalid tracking syntax', r => r.path = '/api/deliveryintercept/v2/return/1ZSHORT'],
  ['invalid method', r => r.method = 'GET'],
  ['wrong API route', r => r.path = '/api/packageintercept/v1/intercept'],
  ['custom adapter body sent directly to UPS', r => r.body = { request_type: 'RETURN_TO_SENDER', reason_code: 'ORDER_MUTATION' }],
  ['invalid return reason', r => r.body.reasonForReturn = 'ORDER_MUTATION'],
  ['missing RS reason', r => delete r.body.reasonForReturn],
  ['invalid contact phone', r => r.body.requesterContactInfo.telephone = 'not-a-phone'],
  ['malformed request JSON', r => r.body = '{'],
  ['unexpected UPS request field', r => r.body.madeUp = true]
]) {
  await suite.check(`Reject ${name}`, () => { const r = request(); change(r); assert.ok(validateReturnRequest(r, spec).length); });
}
await suite.check('HTTP 200 success and failure examples both satisfy selected response constraints', () => {
  assert.deepEqual(validateSuccessResponse(fixtures.success_response, spec).errors, []);
  assert.deepEqual(validateSuccessResponse(fixtures.business_failure_response, spec).errors, []);
});
await suite.check('Missing business success field is an invalid response', () => {
  const body = structuredClone(fixtures.success_response); delete body.success;
  assert.ok(validateSuccessResponse(body, spec).errors.length);
});

for (const fixture of fixtures.scenarios) {
  await suite.check(`Event-driven scenario: ${fixture.id}`, () => {
    const c = coordinator();
    c.request(fixture.id, request(), { eligible: fixture.eligible });
    const responses = {
      success,
      failure: { httpStatus: 200, body: fixtures.business_failure_response },
      timeout: { timeout: true },
      unauthorized: { httpStatus: 401 },
      malformed: { httpStatus: 200, body: '{' }
    };
    if (fixture.response) c.response(fixture.id, responses[fixture.response]);
    for (const event of fixture.events) c.event(fixture.id, event);
    const result = c.snapshot(fixture.id);
    assert.equal(result.state, fixture.expected_state);
    assert.equal(result.modeled_fee_cents, fixture.expected_fee_cents);
    assert.equal(c.submissions, fixture.eligible ? 1 : 0);
    confirmations.push({ fixture_id: fixture.id, state: result.state, modeled_fee_cents: result.modeled_fee_cents, submissions: c.submissions, history: result.history });
  });
}
await suite.check('Renaming the fixture cannot change the recovery outcome', () => {
  const c = coordinator(); c.request('arbitrary-new-name', request()); c.response('arbitrary-new-name', success);
  c.event('arbitrary-new-name', { id: 'event', sequence: 1, revision: 1, type: 'INTERCEPT_CONFIRMED' });
  assert.equal(c.snapshot('arbitrary-new-name').state, 'SUCCEEDED');
});
await suite.check('Duplicate accepted request returns existing state with one submission', () => {
  const c = coordinator(); c.request('dup', request()); c.response('dup', success); c.request('dup', request());
  assert.equal(c.submissions, 1); assert.equal(c.snapshot('dup').state, 'ACCEPTED');
});
await suite.check('Duplicate rejected request preserves rejection', () => {
  const c = coordinator(); c.request('reject', request(), { eligible: false }); c.request('reject', request());
  assert.equal(c.submissions, 0); assert.equal(c.snapshot('reject').state, 'REJECTED');
});
await suite.check('Conflicting payload under an existing operation ID is rejected', () => {
  const c = coordinator(); c.request('conflict', request()); const altered = request(); altered.body.reasonForReturn = 'AN';
  assert.equal(c.request('conflict', altered).state, 'CONFLICT'); assert.equal(c.submissions, 1);
});
await suite.check('Timeout stays UNKNOWN on retry; lookup reconciles without another submission', () => {
  const c = coordinator(); c.request('unknown', request()); c.response('unknown', { timeout: true });
  assert.equal(c.request('unknown', request()).state, 'UNKNOWN'); assert.equal(c.submissions, 1);
  c.reconcile('unknown', 'ACCEPTED'); assert.equal(c.snapshot('unknown').state, 'ACCEPTED');
  c.event('unknown', { id: 'confirmed', sequence: 1, revision: 1, type: 'INTERCEPT_CONFIRMED' });
  assert.equal(c.snapshot('unknown').state, 'SUCCEEDED'); assert.equal(c.submissions, 1);
});
await suite.check('No physical event means accepted request does not become successful', () => {
  const c = coordinator(); c.request('pending', request()); c.response('pending', success);
  assert.equal(c.snapshot('pending').state, 'ACCEPTED'); assert.equal(c.snapshot('pending').modeled_fee_cents, 0);
});
await suite.check('Wrong revision and non-increasing event sequence cannot advance state', () => {
  const c = coordinator(); c.request('stale', request(), { revision: 2 }); c.response('stale', success);
  c.event('stale', { id: 'old', sequence: 1, revision: 1, type: 'INTERCEPT_CONFIRMED' });
  c.event('stale', { id: 'old-seq', sequence: 0, revision: 2, type: 'INTERCEPT_CONFIRMED' });
  assert.equal(c.snapshot('stale').state, 'ACCEPTED');
});
await suite.check('Duplicate physical event does not repeat fee or terminal transition', () => {
  const c = coordinator(); c.request('event-dup', request()); c.response('event-dup', success);
  const event = { id: 'scan', sequence: 1, revision: 1, type: 'INTERCEPT_CONFIRMED' };
  c.event('event-dup', event); const size = c.snapshot('event-dup').history.length; c.event('event-dup', event);
  assert.equal(c.snapshot('event-dup').history.length, size); assert.equal(c.snapshot('event-dup').modeled_fee_cents, 1750);
});
await suite.check('A contradictory event cannot overwrite terminal success', () => {
  const c = coordinator(); c.request('terminal', request()); c.response('terminal', success);
  c.event('terminal', { id: 'good', sequence: 1, revision: 1, type: 'INTERCEPT_CONFIRMED' });
  c.event('terminal', { id: 'late', sequence: 2, revision: 1, type: 'INTERCEPT_FAILED' });
  assert.equal(c.snapshot('terminal').state, 'SUCCEEDED');
});
await suite.check('Modeled fee policy is configurable, not a hardcoded UPS guarantee', () => {
  const c = new RecoveryCoordinator(spec, { successFeeCents: 1900, failureFeeCents: 250 });
  c.request('fee', request()); c.response('fee', success); c.event('fee', { id: 'failed', sequence: 1, revision: 1, type: 'INTERCEPT_FAILED' });
  assert.equal(c.snapshot('fee').modeled_fee_cents, 250);
});
suite.skip('Authenticated UPS CIE execution', 'No network calls or credentialed sandbox execution are performed by this offline suite.');
suite.skip('Physical carrier interception and billing verification', 'Injected events and modeled fees do not establish carrier operations or invoices.');

suite.finish({
  data: {
    scenarios: confirmations,
    fee_assumptions: fixtures.fee_assumptions,
    contract_scope: 'Focused checks for method/path, selected documented parameters, return-request properties and HTTP-200 response properties. Conditional RS reason is enforced by the adapter. Does not implement every OpenAPI keyword or establish entitlement/eligibility.',
    live_cie_executed: false,
    physical_recovery_observed: false,
    storage: 'In-memory local recovery simulator; no persistence or distributed exactly-once guarantee claimed.'
  },
  sources: [provenance],
  markdown: `# Workstream E — Carrier Recovery Evidence\n\n**Scope:** Focused offline checks against a pinned official UPS Delivery Intercept v2 JSON snapshot, plus an event-driven local recovery simulator. No authenticated CIE calls, real tracking events, physical recovery or billing verification occurred.\n\n## Contract boundaries\n\nThe \`synapse_adapter_schema.json\` file describes a custom normalized application model. The separate \`contracts/ups_delivery_intercept_v2.openapi.json\` snapshot is converted from the pinned UPS YAML. The suite checks selected constraints from that snapshot and the return operation; it is not a complete OpenAPI validator or provider certification. Bearer-token syntax is checked without authenticating it. The return fixture uses \`requestType: RS\` and the documented canceled-fixture reason \`AM\`; actual recovery requires eligible shipment options and account access.\n\nUPS documents stubbed CIE responses for known fixtures. HTTP 200 with \`success:false\` is a business failure; electronic acceptance never establishes physical recovery.\n\n## Event-driven scenarios\n\n| Fixture | Result | Modeled fee |\n|---|---|---:|\n${confirmations.map(r => `| ${r.fixture_id} | ${r.state} | $${(r.modeled_fee_cents / 100).toFixed(2)} |`).join('\n')}\n\nThe scenario name does not choose the outcome. Eligibility, structured response and injected carrier events drive transitions. Duplicate operation IDs return the existing state; conflicting payloads are rejected. Unknown responses require reconciliation. Stale or duplicate events cannot repeat a fee or overwrite a terminal outcome.\n\n## Fee assumptions\n\nSuccessful modeled recovery costs $${(fixtures.fee_assumptions.success_fee_cents / 100).toFixed(2)}; failed recovery costs $${(fixtures.fee_assumptions.failure_fee_cents / 100).toFixed(2)} in these fixtures. These are configurable scenario inputs, not verified current UPS tariffs or a universal fee-waiver policy.\n\n## Reproduction\n\nRun \`node evidence/carrier-recovery/test_recovery.js\` from the portfolio root. The archived report records runtime, source/input hashes, executed checks and the explicit out-of-scope checks.\n`.replaceAll('\`','`')
});
