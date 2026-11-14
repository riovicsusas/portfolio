# Synapse Botanicals — reproducible evidence

These dependency-free Node.js tools exercise financial models, identifier validation, a local order coordinator, and carrier-recovery contracts. They test the declared fixtures and simulator implementation. They do not establish production Shopify/ShipBob latency, negotiated carrier prices, physical scanning, or successful parcel interception.

## Run

Use Node.js 24 or later with built-in SQLite support. No npm install, credentials, or network connection is required to execute the suites.

```bash
node evidence/run_all.js
```

For a larger latency workload:

```bash
node evidence/run_all.js --full
```

Individual commands remain available:

```bash
node evidence/freight/calculate_freight.js
node evidence/latency/coordinator_simulator.js
node evidence/barcodes/validate_barcodes.js
node evidence/costs/run_cost_model.js
node evidence/carrier-recovery/test_recovery.js
```

All commands run from the repository root on Windows, macOS or Linux. The checked-in workstream summaries identify the runtime actually used; execution times will vary by machine. SQLite may produce Node's experimental-feature notice on supported Node 24 versions.

## What is checked

| Workstream | Evidence | Scope |
|---|---|---|
| [Freight](freight/summary.md) | Nearest-stocked allocation versus whole-basket consolidation, stock and cost checks, and separate cohort arithmetic | Declared scenario rates; public source candidates are not certified tariffs |
| [Coordinator](latency/summary.md) | Operation identity, duplicate outcomes, cutoff/reconciliation behavior and local restart recovery; seeded timing workloads | Local SQLite and WMS/Shopify simulation, not Redis, SQS or vendor performance |
| [Barcodes](barcodes/summary.md) | Exact SKU mapping, checksum, invalid-input rejection and shared-table bitstream round trips | Synthetic UPC fixtures; no GS1 ownership, independent optical reader or warehouse scanner claim |
| [Costs](costs/summary.md) | Component BOM, cent-rounded processing, contribution branches and sensitivity | Scenario costs; not historical procurement invoices |
| [Carrier recovery](carrier-recovery/summary.md) | Focused offline checks against the pinned UPS contract plus event-driven local recovery tests | Not a complete OpenAPI validator, authenticated CIE execution or physical carrier operation |

Every executed check is counted. Skips and failures are separate. A failed check produces a nonzero exit status; the runner also rejects missing, stale and inconsistent suite reports. The reported number of passing checks is a count of fixture assertions, not a universal correctness guarantee.

## Results and provenance

- Each workstream's JSON report and `summary.md` show its latest execution.
- `latest_run.json` records the status, runtime, assertion totals, and hashes from the most recent whole-suite run. Individual workstream runs refresh their own reports.
- Every execution creates a separate `evidence/runs/<run-id>/` directory with the reports and additional raw records. These local archives are ignored by Git so repeated runs do not bloat the repository.
- `sample-run/` contains a checked-in representative execution, including the operation records underlying its latency summary. Its freight example predates the Bethlehem fixture. See the [current freight report](freight/summary.md) for the active case. Regenerate new archives with the commands above; compare method and outcomes rather than expecting identical wall-clock timings.
- `archive/baseline-4cb2048/` preserves the earlier committed outputs. Those reports predate these validation corrections and do not certify their old claims.
- Source/code and input hashes identify the tested content even before a new Git commit exists. The base revision alone is not proof that the working tree was clean.

Rates, commercial costs and injected delays are inputs. Financial totals are calculations. Timer samples are actual measurements of the local simulator. Recorded vendor examples remain public references; they are not vendor responses observed by this execution.

## Changing inputs

Change a declared fixture or model input and rerun its suite. The results must recalculate from those inputs. Integrity assertions reject inconsistent BOM declarations, impossible routing allocations, broken SKU mappings and invalid contract examples. An intentional scenario change may require updating its expected invariants; investigate failures before changing expected values.

Keep test data synthetic and secrets out of these files. Vendor sandbox and physical tests require their own authorized environment and recorded evidence.
