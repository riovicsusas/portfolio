# Coordinator functional checks and measured local simulation

The coordinator uses Node v24.22.1 built-in SQLite for a local persistent operation ledger and virtual WMS state. SQLite is experimental in this Node release. Atomic claims and conditional shipment updates are exercised locally; no vendor API or queue service is contacted.

Functional checks cover preserved rejections, payload conflicts, pending duplicates, a cutoff changing during the request, uncertain side effects, selective release, and recovery after a separate worker exits at the post-effect boundary.

| Workload | Attempts | Concurrency | p50 response ms | p95 | p99 | Business effects |
|---|---:|---:|---:|---:|---:|---:|
| Sequential local baseline | 10000 | 1 | 5.0483 | 6.6644 | 7.1614 | 10000 |
| Concurrent local burst | 10000 | 25 | 12.8084 | 23.669 | 34.9333 | 10000 |
| Injected WMS delay | 10000 | 10 | 14.5088 | 20.601 | 23.4485 | 10000 |
| Same-payload duplicate pairs | 10000 | 20 | 0.5694 | 7.8148 | 9.3947 | 5000 |
| Post-cutoff rejection | 10000 | 5 | 0.7007 | 1.0606 | 1.3155 | 0 |
| Response loss after WMS-simulator success | 10000 | 5 | 6.6551 | 8.9205 | 10.1521 | 10000 |

Timings use performance.now(). Percentiles use nearest-rank, ceil(p*N)-1, no interpolation. All request outcomes are retained; per-outcome statistics are available in metrics.json. Response latency includes pending, rejected and unknown results and must not be described as confirmation latency. The seed reproduces injected delays, not operating-system scheduling or measured durations. Raw per-delivery records are archived as operations.jsonl in this run's latency directory.

The default smoke profile is a small local benchmark. Run --full for 10000 attempts per workload. No production latency, durable distributed locking, physical stop, SQS delivery, or vendor SLA is established.

## Executed checks

Run: `2026-11-09T18-15-13-245Z-0afc5d46` · Node v24.22.1

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
