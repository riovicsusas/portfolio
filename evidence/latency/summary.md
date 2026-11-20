# Coordinator functional checks and measured local simulation

The coordinator uses Node v24.18.0 built-in SQLite for a local persistent operation ledger and virtual WMS state. SQLite is experimental in this Node release. Atomic claims and conditional shipment updates are exercised locally; no vendor API or queue service is contacted.

Functional checks cover preserved rejections, payload conflicts, pending duplicates, a cutoff changing during the request, uncertain side effects, selective release, and recovery after a separate worker exits at the post-effect boundary.

| Workload | Attempts | Concurrency | p50 response ms | p95 | p99 | Business effects |
|---|---:|---:|---:|---:|---:|---:|
| Sequential local baseline | 50 | 1 | 31.0361 | 32.8926 | 34.2037 | 50 |
| Concurrent local burst | 200 | 25 | 136.0086 | 264.802 | 322.8605 | 200 |
| Injected WMS delay | 40 | 10 | 71.263 | 139.5093 | 142.4082 | 40 |
| Same-payload duplicate pairs | 100 | 20 | 0.913 | 66.5927 | 76.1979 | 50 |
| Post-cutoff rejection | 20 | 5 | 6.4875 | 19.396 | 41.0713 | 0 |
| Response loss after WMS-simulator success | 30 | 5 | 41.7463 | 72.3149 | 76.9895 | 30 |

Timings use performance.now(). Percentiles use nearest-rank, ceil(p*N)-1, no interpolation. All request outcomes are retained; per-outcome statistics are available in metrics.json. Response latency includes pending, rejected and unknown results and must not be described as confirmation latency. The seed reproduces injected delays, not operating-system scheduling or measured durations. Raw per-delivery records are archived as operations.jsonl in each archived execution directory (evidence/runs/<run-id>/latency/operations.jsonl), not in the working tree.

The default smoke profile is a small local benchmark. Run --full for 10000 attempts per workload. No production latency, durable distributed locking, physical stop, SQS delivery, or vendor SLA is established.

## Executed checks

Run: `2026-11-20T14-04-24-973Z-74618b33` · Node v24.18.0

Passed: 34; failed: 0; skipped: 0.

| Check | Status | Detail |
|---|---|---|
| Eligible hold commits one WMS-simulator effect | passed |  |
| Concurrent same-order duplicate returns pending; later replay returns confirmed | passed |  |
| Reconciliation cannot steal an active pending operation | passed |  |
| Rejected cutoff outcome is preserved on duplicate delivery | passed |  |
| Reusing a key for a different order rejects the conflicting payload | passed |  |
| Reusing a key with a changed address rejects the conflicting payload | passed |  |
| Competing operation IDs serialize the same shipment while pending | passed |  |
| Wave release between initial read and conditional hold rejects mutation | passed |  |
| Timeout after remote success reconciles without a second effect | passed |  |
| Absent effect is reconciled before a safe same-key retry | passed |  |
| Stale order revision cannot apply a hold | passed |  |
| Reconciliation detects revision change after an uncertain effect | passed |  |
| Selective release preserves the unrelated hold | passed |  |
| New process recovers effect persisted before worker termination | passed |  |
| Seed reproduces injected delays, not observed wall-clock timings | passed |  |
| Nearest-rank percentile implementation matches known values | passed |  |
| baseline: actual result count equals configured attempts | passed |  |
| baseline: WMS-simulator business-effect count | passed |  |
| baseline: every result matches the workload safety outcome | passed |  |
| burst: actual result count equals configured attempts | passed |  |
| burst: WMS-simulator business-effect count | passed |  |
| burst: every result matches the workload safety outcome | passed |  |
| delayed: actual result count equals configured attempts | passed |  |
| delayed: WMS-simulator business-effect count | passed |  |
| delayed: every result matches the workload safety outcome | passed |  |
| duplicates: actual result count equals configured attempts | passed |  |
| duplicates: WMS-simulator business-effect count | passed |  |
| duplicates: every result matches the workload safety outcome | passed |  |
| cutoff: actual result count equals configured attempts | passed |  |
| cutoff: WMS-simulator business-effect count | passed |  |
| cutoff: every result matches the workload safety outcome | passed |  |
| unknown: actual result count equals configured attempts | passed |  |
| unknown: WMS-simulator business-effect count | passed |  |
| unknown: every result matches the workload safety outcome | passed |  |
