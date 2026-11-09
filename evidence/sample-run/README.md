# Representative executed evidence

`run.json` and the five directories preserve one complete smoke execution, including all per-delivery latency records in `latency/operations.jsonl`. They are fixed snapshots, not regenerated whenever the live summaries change.

`full-run.json`, `full-latency-metrics.json` and `full-latency-summary.md` preserve the larger run with 10,000 requests in each of six workloads. Its 60,000 raw records remain in the local run archive referenced by that manifest; regenerate a new full archive with `node evidence/run_all.js --full`. The checked-in raw smoke records support the smoke distribution, not the full distribution.

Both executions ran local simulators and financial models. No authenticated vendor sandbox, production carrier rate, physical scanner or live shipment was verified. Base Git revision and tested content hashes are recorded in each run; the scripts were executed from the edited working tree.
