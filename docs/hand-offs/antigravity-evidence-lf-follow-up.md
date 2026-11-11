# Antigravity Follow-Up: LF Normalization and Evidence Refresh

Status: completed in the cloud on 11 November 2026. This document preserves the follow-up prompt for reference; no repeat execution is required for the recorded run.

Recorded run: `2026-11-11T09-32-49-630Z-b8ae4167`, Node.js v24.22.1, Linux x64. The evidence suite passed 152 checks, with zero failures and three declared skips. The separate report-accounting script passed all 14 cases. All 20 source hashes, 12 input-hash entries, five script hashes and five output hashes were verified. Active cloud files already used LF, so only the generated evidence reports needed refreshing. Historical samples, dossiers and implementation source were preserved.

## Preserved Follow-Up Prompt

Normalize the local evidence files' line endings and regenerate the test reports so their recorded hashes match the files committed to GitHub.

### Context

Codex pulled GitHub revision `5497f4e` and verified:

- Windows smoke run: 152 passed, zero failed, three skipped.
- Cloud smoke and full runs: identical counts.
- Full cloud benchmark: 60,000 attempts completed successfully.
- Separate report-accounting tests: 14 cases passed.
- Financial results match.

The remaining issue was that ten recorded source hashes matched CRLF versions of files, while GitHub stored their LF versions. Nine per-suite input-hash entries were also affected. Adding `.gitattributes` rules did not rewrite all existing Windows working-tree files before the recorded run.

### Instructions

1. Inspect the current branch, HEAD, Git status and applicable repository instructions. Preserve unrelated and uncommitted work. Do not reset, discard changes or automatically pull into a dirty working tree. If the checkout has advanced beyond `5497f4e`, retain the newer work.

2. Confirm the existing `.gitattributes` rules enforce LF for `*.json`, `*.md`, `*.js` and `*.jsonl`.

3. Normalize tracked, active files under `evidence/` to LF. Only replace CRLF with LF. Preserve UTF-8 encoding and all other content. Do not alter implementation logic, scenario inputs or financial assumptions, and do not rewrite dossiers. Leave preserved historical evidence untouched, including `evidence/archive/`, `evidence/sample-run/`, any other sample-run archives and `evidence/runs/`. Do not introduce a BOM or UTF-16 encoding.

4. Verify that `evidence/carrier-recovery/contracts/ups_delivery_intercept_v2.openapi.json` retains this SHA-256:

   ```text
   6bf051ea964d3c74de18c30b87505d80f9ccf2056d6809fe9cecf700355ec33b
   ```

   Do not change the expected hash to accommodate different bytes.

5. From the repository root, run:

   ```bash
   node evidence/test_report_accounting.js
   node evidence/run_all.js
   ```

   Another `--full` benchmark is unnecessary solely for line-ending normalization.

6. Verify the regenerated evidence:

   - Every source hash in `evidence/latest_run.json` matches the actual file bytes.
   - Every suite report's script and input hashes match the executed files.
   - Every output hash in `latest_run.json` matches its report.
   - All suite run IDs match the aggregate run ID.
   - Check accounting is consistent and no tests failed.

   Expected baseline: 152 passed, zero failed, three skipped, plus the separate 14 accounting cases. If newer changes legitimately alter counts, explain the difference rather than forcing these totals.

7. Review the final diff. Changes should be limited to necessary line-ending normalization and regenerated evidence reports. Run `git diff --check` and preserve historical sample archives.

Report the files normalized, test results, source/input/script/output/UPS hash verification results and any remaining discrepancies. Save the changes locally. Do not commit, push, publish or deploy without an explicit command.
