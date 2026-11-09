# Event-Driven Automation & Webhook Triage

> **Empirical staging simulation.** Synapse Botanicals is a technical operations sandbox used to stress-test e-commerce failure modes with synthetic customer and order fixtures. Commercial charges and financial outcomes are scenario inputs and calculations. The verification section distinguishes supplied trace excerpts, reproducible model results, and acceptance criteria for the designed controls. No production customer data or live fulfillment is represented.

## 1. Executive Context & Failure Mode

Repeated event delivery, asynchronous fraud results and ambiguous downstream responses can turn independent automations into duplicate work or premature fulfillment. The relevant failure is a repeated business side effect, not the mere presence of several workflow runs.

Order #1048 exercises repeated order-update delivery. A pair of fixed tag additions does not itself establish infinite recursion: a sustained loop requires an actual changing event, tag removal/re-addition or harness re-emission. The modeled blast radius is the integration's request volume and dependent processing; checkout impact requires separate measurement.

## 2. Governance & Architecture Protocol

### 2.1 Explicit progression gates

| Stage | Required state before progression |
|---|---|
| Security / fraud | Risk assessment available and approved; pending remains blocked |
| Inventory / routing | Eligible shipment plan and reservations confirmed |
| Financial reconciliation | Payment state, totals and approved changes reconciled |
| Fulfillment release | WMS version matches and unrelated holds remain respected |
| Notifications / analytics | Publish confirmed outcomes, independently deduplicated |

A durable coordinator enforces these transitions. Independent Shopify Flow runs do not acquire execution priority from a diagram. Order creation may precede risk analysis; the coordinator waits for the relevant completed analysis or escalates its timeout. It must not treat missing risk data as low risk.

### 2.2 Authentication and durable operation identity

Verify native Shopify webhook HMAC using the raw body and app secret before accepting work. Custom Flow HTTP calls use a configured adapter authentication contract; a manually attached Shopify topic header does not make them native signed Shopify webhooks. Gorgias and other senders use their supported authentication. Keep secrets server-side and sanitize logs.

Atomically claim `(shop_id, operation_type, business_operation_id)` under a unique constraint. Store request hash, order/version, status, attempt count and downstream correlation ID. Repeated delivery IDs may differ while referring to the same business operation. Conflicting payloads sharing an operation ID are rejected; valid new edits receive new operation IDs.

Two workers can both read a tag as absent. A processed tag is therefore an operator marker, not an atomic lock. Crash recovery reconciles the downstream operation before repeating a side effect. Per-order serialization, leases and version checks prevent an older edit from overwriting a newer one.

### 2.3 Queue and retry ownership

The authenticated ingress adapter writes a durable operation record and enqueues work before acknowledging acceptance. An Amazon SQS **Standard source queue** feeds idempotent workers; a separate DLQ receives exhausted messages. Per-order serialization and version checks are implemented in the coordinator, not inferred from queue delivery order.

| Control | Scenario configuration | Operational meaning |
|---|---|---|
| Visibility | 30 seconds initially | Extend while processing; stop before worker lease expires |
| Long polling | 20 seconds | Receive wait, not a processing delay |
| Source retention | 4 days | Storage horizon; never overrides a mutation deadline |
| DLQ retention | 14 days | Investigation horizon, not permission to replay stale edits |
| Redrive threshold | `maxReceiveCount=3` | Receive-based safeguard, not a Shopify retry policy |
| Worker budget | At most three downstream mutation attempts | Reconcile before retry; no attempt beyond cutoff |

Use full jitter `U(0, min(60, 2**n))` seconds for retry index n=1,2, respecting provider throttling instructions and the business deadline. The worker schedules this policy; SQS does not supply it automatically. Upstream redelivery reuses the durable operation and does not reset the budget. A receive can end in reconciliation without another mutation attempt.

Before each side effect, check operation ownership, order version, current WMS state and deadline. A duplicate returns the stored result; an unknown remote outcome is reconciled; a stale message is rejected. Alert on the first unknown hold outcome. DLQ arrival is a final exception signal, not the first opportunity to stop a warehouse wave. Replay requires a new eligibility review and cannot blindly overwrite a newer address.

## 3. Algorithmic Response Matrix

| Result | Interpretation | Required action |
|---|---|---|
| Ingress 2xx | Authenticated work durably accepted | Record ACCEPTED, not business completion |
| Downstream success | Response may describe acceptance or completion | Validate body, resource version and intended effect |
| Timeout / ambiguous 5xx | Remote result UNKNOWN | Reconcile before another side effect |
| 429 / GraphQL throttling | Endpoint-specific quota pressure | Honor supplied retry instructions; bounded jitter |
| 400 / 422 | Invalid data or business-state rejection | Stop unchanged replay; correct or escalate |
| 401 / 403 | Authentication / authorization failure | Stop, alert owner and repair access |
| Business cutoff reached | Operation no longer eligible | Reject automatic mutation; recovery workflow |
| Retry budget exhausted | Exception requiring investigation | DLQ and alert; no success notification |

A 504 has no universal five-second threshold and does not independently prove a database deadlock. A 422 carrying `PONR_EXCEEDED` is terminal for that edit under the Synapse adapter contract; corrected data or another authorized recovery operation is a different action.

REST request-bucket headers and GraphQL query-cost telemetry remain separate. Record REST `X-Shopify-Shop-Api-Call-Limit` / `Retry-After` when present. For GraphQL inspect response `errors`, `extensions.cost.requestedQueryCost`, `actualQueryCost` and `throttleStatus`. HTTP 200 can contain GraphQL errors. A harness quota of 40 requests with restoration at two/second is not a Shopify Plus GraphQL limit.

## 4. Empirical Verification & Run Sheet

### 4.1 Order #1048 supplied telemetry summary

The staging summary reports 114 timeline events over 11:02:01–11:03:03 EDT, a 62-second interval. These are event counts, not necessarily API calls or distinct business effects. Rate=114/62=**1.839 events/second**. The 39/40 request-quota sample is **97.5% utilized**, from a REST-style or harness counter; it is not GraphQL cost telemetry.

| Summary measurement | Value | Interpretation |
|---|---:|---|
| Baseline latency | 140 ms | Timing boundary must be held constant |
| Repetition-period latency | 4,850 ms | 34.64 times baseline |
| Post-control latency | 180 ms | 28.57% above baseline |
| Reported follow-up workload | 1,000 operations | Requires operation/result counts for independent verification |

These are supplied summary values. They do not establish the causal mechanism without event identity and configuration, or prove a percentile without the underlying timings. Zero reported duplicate effects is a sample statement, not an unconditional guarantee. Under independent comparable Bernoulli trials, zero failures in 1,000 has a one-sided 95% upper failure-rate bound of `1−0.05**(1/1000)`≈**0.299%**.

### 4.2 Designed acceptance cases

| Injection | Required result |
|---|---|
| Same event delivered twice | Existing operation returned; one business effect |
| Two concurrent handlers | One atomic claim; other handler reconciles |
| Crash after downstream success | Status recovered without repeated mutation |
| 200 with business error | No COMPLETE state |
| Fraud result delayed | Fulfillment remains blocked |
| 429 | Respect quota instructions and deadline |
| 422 beyond cutoff | No repeated prohibited mutation |
| DLQ replay after newer edit | Stale revision rejected |
| Authentication failure | No durable business work accepted |

A completed run retains event/operation IDs, configuration, input revisions, injected fault, actual response, business-effect count and assertion result. The supplied summary does not establish execution of every acceptance case.

## 5. Technical References

- [Shopify API limits](https://shopify.dev/docs/api/usage/limits).
- [AWS SQS source queues and dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html).
- [AWS visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html).
