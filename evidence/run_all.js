import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('================================================================');
console.log(' SYNAPSE BOTANICALS — REPRODUCIBLE EVIDENCE VERIFICATION SUITE  ');
console.log('================================================================\n');

const suites = [
  { name: 'Workstream A: Carrier Rates & Freight Routing', script: 'freight/calculate_freight.js' },
  { name: 'Workstream B: Measured Staging Latency & Fault Tolerances', script: 'latency/coordinator_simulator.js' },
  { name: 'Workstream C: Barcode Checksums & SKU Governance', script: 'barcodes/validate_barcodes.js' },
  { name: 'Workstream D: Transparent BOM & Cost Sensitivity Model', script: 'costs/run_cost_model.js' },
  { name: 'Workstream E: UPS Intercept Contract & Recovery State Machine', script: 'carrier-recovery/test_recovery.js' }
];

let allPassed = true;
const summary = [];

for (const suite of suites) {
  const fullPath = path.join(__dirname, suite.script);
  console.log(`\n>>> Executing ${suite.name}...`);
  const t0 = Date.now();
  try {
    const stdout = execSync(`node "${fullPath}"`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    const elapsed = Date.now() - t0;
    console.log(stdout.trim());
    console.log(`[PASS] ${suite.name} completed successfully (${elapsed}ms).`);
    summary.push({ name: suite.name, status: 'PASSED', duration_ms: elapsed });
  } catch (err) {
    allPassed = false;
    const elapsed = Date.now() - t0;
    console.error(`[FAIL] ${suite.name} failed:`, err.message);
    if (err.stdout) console.log(err.stdout);
    if (err.stderr) console.error(err.stderr);
    summary.push({ name: suite.name, status: 'FAILED', duration_ms: elapsed, error: err.message });
  }
}

console.log('\n================================================================');
console.log(' EVIDENCE VERIFICATION SUMMARY                                 ');
console.log('================================================================');
for (const res of summary) {
  console.log(`- ${res.name}: ${res.status} (${res.duration_ms}ms)`);
}
console.log('================================================================');

if (!allPassed) {
  console.error('\nOne or more evidence verification suites failed!');
  process.exit(1);
} else {
  console.log('\nAll 5 evidence workstreams verified with 100% assertions passed.');
  process.exit(0);
}
