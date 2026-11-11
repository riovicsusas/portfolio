import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { performance } from 'node:perf_hooks';
import { hash, validateSuiteReport } from './lib/report.js';
const root = path.dirname(fileURLToPath(import.meta.url));
const runId = `${new Date().toISOString().replace(/[:.]/g, '-')}-${randomUUID().slice(0, 8)}`;
const archive = path.join(root, 'runs', runId);
fs.mkdirSync(archive, { recursive: true });
const suites = [
  ['freight', 'calculate_freight.js', 'results.json'],
  ['latency', 'coordinator_simulator.js', 'metrics.json'],
  ['barcodes', 'validate_barcodes.js', 'results.json'],
  ['costs', 'run_cost_model.js', 'sensitivity.json'],
  ['carrier-recovery', 'test_recovery.js', 'results.json']
];
const args = process.argv.slice(2);
if (args.some(a => a !== '--full')) throw new Error('Usage: node evidence/run_all.js [--full]');
const summary = { run_id: runId, started_at: new Date().toISOString(), runtime: { node: process.version, platform: process.platform, arch: process.arch }, mode: args.includes('--full') ? 'full' : 'smoke', execution_failures: 0, suites: [], counts: { passed: 0, failed: 0, skipped: 0, total: 0 }, sources_sha256: {} };
console.log(`Evidence run ${runId} (${summary.mode}, ${process.version})`);
for (const [id, entry, output] of suites) {
  const t = performance.now();
  const child = spawnSync(process.execPath, [path.join(root, id, entry), ...(id === 'latency' ? args : [])], {
    encoding: 'utf8', env: { ...process.env, EVIDENCE_RUN_ID: runId, EVIDENCE_RUN_DIR: archive }, maxBuffer: 8 * 1024 * 1024
  });
  if (child.stdout) process.stdout.write(child.stdout);
  if (child.stderr) process.stderr.write(child.stderr);
  const record = { id, status: 'failed', duration_ms: Math.round(performance.now() - t), counts: null };
  try {
    if (child.error) throw child.error;
    const filename = path.join(root, id, output);
    if (!fs.existsSync(filename)) throw new Error(`Suite report not found: ${id}/${output}`);
    const report = JSON.parse(fs.readFileSync(filename, 'utf8'));
    validateSuiteReport(report, runId);
    record.counts = report.counts;
    for (const key of Object.keys(summary.counts)) summary.counts[key] += report.counts[key];
    if (child.status !== 0) throw new Error(`Suite process exited ${child.status ?? child.signal}; see counted check failures`);
    if (report.status !== 'passed' || report.counts.failed > 0) throw new Error('A safety or financial check failed');
    if (!report.counts.passed) throw new Error('Suite executed no passing checks');
    record.status = 'passed';
    record.report = `${id}/${output}`; record.report_sha256 = hash(fs.readFileSync(filename));
  } catch (error) { record.error = error.message; if (!record.counts) summary.execution_failures++; }
  summary.suites.push(record);
  console.log(`${id}: ${record.status.toUpperCase()}${record.error ? ': ' + record.error : ''}`);
}
const generated = new Set(['results.json','metrics.json','sensitivity.json','latest_run.json','manifest.json']);
function index(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['runs','archive','sample-run'].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) index(p);
    else if (/\.(js|json|yaml)$/.test(ent.name) && !generated.has(ent.name)) summary.sources_sha256[path.relative(root,p).split(path.sep).join('/')] = hash(fs.readFileSync(p));
  }
}
index(root);
summary.finished_at = new Date().toISOString();
summary.status = summary.suites.every(s => s.status === 'passed') ? 'passed' : 'failed';
const json = JSON.stringify(summary, null, 2) + '\n';
fs.writeFileSync(path.join(archive, 'run.json'), json);
fs.writeFileSync(path.join(root, 'latest_run.json'), json);
console.log(`Checks: ${summary.counts.passed} passed; ${summary.counts.failed} failed; ${summary.counts.skipped} skipped. Status: ${summary.status.toUpperCase()}`);
console.log(`Suite execution/report failures without check counts: ${summary.execution_failures}`);
console.log(`Previous executions remain in evidence/runs/. Vendor sandbox and physical operations are outside this offline run.`);
if (summary.status === 'failed') process.exitCode = 1;
