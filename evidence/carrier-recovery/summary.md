# Workstream E — Carrier Recovery Evidence

**Scope:** Focused offline checks against a pinned official UPS Delivery Intercept v2 JSON snapshot, plus an event-driven local recovery simulator. No authenticated CIE calls, real tracking events, physical recovery or billing verification occurred.

## Contract boundaries

The `synapse_adapter_schema.json` file describes a custom normalized application model. The separate `contracts/ups_delivery_intercept_v2.openapi.json` snapshot is converted from the pinned UPS YAML. The suite checks selected constraints from that snapshot and the return operation; it is not a complete OpenAPI validator or provider certification. Bearer-token syntax is checked without authenticating it. The return fixture uses `requestType: RS` and the documented canceled-fixture reason `AM`; actual recovery requires eligible shipment options and account access.

UPS documents stubbed CIE responses for known fixtures. HTTP 200 with `success:false` is a business failure; electronic acceptance never establishes physical recovery.

## Event-driven scenarios

| Fixture | Result | Modeled fee |
|---|---|---:|
| accepted-pending | ACCEPTED | $0.00 |
| confirmed-return | SUCCEEDED | $17.50 |
| failed-return | FAILED | $0.00 |
| ineligible | REJECTED | $0.00 |
| 200-business-failure | REJECTED | $0.00 |
| timeout | UNKNOWN | $0.00 |
| authorization-failure | REJECTED | $0.00 |
| malformed-response | UNKNOWN | $0.00 |

The scenario name does not choose the outcome. Eligibility, structured response and injected carrier events drive transitions. Duplicate operation IDs return the existing state; conflicting payloads are rejected. Unknown responses require reconciliation. Stale or duplicate events cannot repeat a fee or overwrite a terminal outcome.

## Fee assumptions

Successful modeled recovery costs $17.50; failed recovery costs $0.00 in these fixtures. These are configurable scenario inputs, not verified current UPS tariffs or a universal fee-waiver policy.

## Reproduction

Run `node evidence/carrier-recovery/test_recovery.js` from the portfolio root. The archived report records runtime, source/input hashes, executed checks and the explicit out-of-scope checks.

## Executed checks

Run: `2026-11-12T07-40-53-912Z-566faf52` · Node v24.18.0

Passed: 34; failed: 0; skipped: 2.

| Check | Status | Detail |
|---|---|---|
| Pinned official JSON snapshot matches provenance hash | passed |  |
| Documented return fixture satisfies selected wire-contract checks | passed |  |
| Reject missing required transId | passed |  |
| Reject invalid platformType | passed |  |
| Reject missing bearer authorization | passed |  |
| Reject invalid tracking syntax | passed |  |
| Reject invalid method | passed |  |
| Reject wrong API route | passed |  |
| Reject custom adapter body sent directly to UPS | passed |  |
| Reject invalid return reason | passed |  |
| Reject missing RS reason | passed |  |
| Reject invalid contact phone | passed |  |
| Reject malformed request JSON | passed |  |
| Reject unexpected UPS request field | passed |  |
| HTTP 200 success and failure examples both satisfy selected response constraints | passed |  |
| Missing business success field is an invalid response | passed |  |
| Event-driven scenario: accepted-pending | passed |  |
| Event-driven scenario: confirmed-return | passed |  |
| Event-driven scenario: failed-return | passed |  |
| Event-driven scenario: ineligible | passed |  |
| Event-driven scenario: 200-business-failure | passed |  |
| Event-driven scenario: timeout | passed |  |
| Event-driven scenario: authorization-failure | passed |  |
| Event-driven scenario: malformed-response | passed |  |
| Renaming the fixture cannot change the recovery outcome | passed |  |
| Duplicate accepted request returns existing state with one submission | passed |  |
| Duplicate rejected request preserves rejection | passed |  |
| Conflicting payload under an existing operation ID is rejected | passed |  |
| Timeout stays UNKNOWN on retry; lookup reconciles without another submission | passed |  |
| No physical event means accepted request does not become successful | passed |  |
| Wrong revision and non-increasing event sequence cannot advance state | passed |  |
| Duplicate physical event does not repeat fee or terminal transition | passed |  |
| A contradictory event cannot overwrite terminal success | passed |  |
| Modeled fee policy is configurable, not a hardcoded UPS guarantee | passed |  |
| Authenticated UPS CIE execution | skipped | No network calls or credentialed sandbox execution are performed by this offline suite. |
| Physical carrier interception and billing verification | skipped | Injected events and modeled fees do not establish carrier operations or invoices. |
