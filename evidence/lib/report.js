import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const evidenceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const hash = value => createHash('sha256').update(value).digest('hex');

export const VALID_CHECK_STATUSES = new Set(['passed', 'failed', 'skipped']);

export function validateSuiteReport(report, expectedRunId) {
  if (!report || typeof report !== 'object') {
    throw new Error('Report must be a non-null object');
  }
  if (expectedRunId && report.run_id !== expectedRunId) {
    throw new Error(`Suite did not produce a fresh report for this run (expected ${expectedRunId}, got ${report.run_id})`);
  }
  if (!Array.isArray(report.checks) || report.checks.length === 0) {
    throw new Error('Suite report must contain a nonempty checks array');
  }
  for (let i = 0; i < report.checks.length; i++) {
    const c = report.checks[i];
    if (!c || typeof c !== 'object') {
      throw new Error(`Check at index ${i} must be a non-null object`);
    }
    if (typeof c.name !== 'string' || !c.name.trim()) {
      throw new Error(`Check at index ${i} must have a non-empty name string`);
    }
    if (!VALID_CHECK_STATUSES.has(c.status)) {
      throw new Error(`Check "${c.name}" has invalid status "${c.status}"; must be passed, failed, or skipped`);
    }
  }
  if (!report.counts || typeof report.counts !== 'object') {
    throw new Error('Missing or malformed report counts object');
  }
  for (const status of ['passed', 'failed', 'skipped', 'total']) {
    const count = report.counts[status];
    if (!Number.isSafeInteger(count) || count < 0) {
      throw new Error(`Report count for "${status}" must be a nonnegative safe integer, got ${count}`);
    }
  }
  const { passed, failed, skipped, total } = report.counts;
  if (passed + failed + skipped !== total) {
    throw new Error(`Report counts sum (passed: ${passed} + failed: ${failed} + skipped: ${skipped} = ${passed + failed + skipped}) does not equal total: ${total}`);
  }
  if (total !== report.checks.length) {
    throw new Error(`Report count total (${total}) does not match checks array length (${report.checks.length})`);
  }
  for (const status of ['passed', 'failed', 'skipped']) {
    const actual = report.checks.filter(c => c.status === status).length;
    if (report.counts[status] !== actual) {
      throw new Error(`Report count for "${status}" (${report.counts[status]}) does not match executed checks (${actual})`);
    }
  }
  if (report.status !== 'passed' && report.status !== 'failed') {
    throw new Error(`Suite report status must be "passed" or "failed", got "${report.status}"`);
  }
  if (failed > 0 && report.status !== 'failed') {
    throw new Error(`Suite status is "${report.status}" but failed count is ${failed}`);
  }
  if (failed === 0 && report.status !== 'passed') {
    throw new Error(`Suite status is "${report.status}" but failed count is 0`);
  }
  return true;
}
export function createSuite(id, { classification = 'Local functional tests', inputs = [] } = {}) {
  const started = new Date().toISOString();
  const runId = process.env.EVIDENCE_RUN_ID || `${started.replace(/[:.]/g, '-')}-${process.pid}`;
  const checks = [];
  return {
    async check(name, fn) {
      try { await fn(); checks.push({ name, status: 'passed' }); }
      catch (error) { checks.push({ name, status: 'failed', error: error.message }); }
    },
    skip(name, reason) { checks.push({ name, status: 'skipped', reason }); },
    finish({ data = {}, markdown = '', outputName = 'results.json', artifacts = {}, sources = [] } = {}) {
      const directory = path.join(evidenceRoot, id);
      const archiveRoot = process.env.EVIDENCE_RUN_DIR || path.join(evidenceRoot, 'runs', runId);
      const archive = path.join(archiveRoot, id);
      fs.mkdirSync(archive, { recursive: true });
      if (!checks.length) checks.push({ name: 'Suite executed at least one check', status: 'failed', error: 'No checks executed' });
      const counts = { passed: 0, failed: 0, skipped: 0, total: checks.length };
      for (const check of checks) counts[check.status]++;
      const inputHashes = Object.fromEntries(inputs.map(f => [f, hash(fs.readFileSync(path.join(directory, f)))]));
      const script = path.resolve(process.argv[1]);
      let revision = 'unavailable';
      try { revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: evidenceRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch {}
      const report = {
        run_id: runId, started_at: started, finished_at: new Date().toISOString(),
        runtime: { node: process.version, platform: process.platform, arch: process.arch },
        revision, script_sha256: hash(fs.readFileSync(script)), input_sha256: inputHashes,
        classification, status: counts.failed ? 'failed' : 'passed', counts, checks, sources, data
      };
      const audit = `\n\n## Executed checks\n\nRun: \`${runId}\` · Node ${process.version}\n\n` +
        `Passed: ${counts.passed}; failed: ${counts.failed}; skipped: ${counts.skipped}.\n\n` +
        '| Check | Status | Detail |\n|---|---|---|\n' + checks.map(c => `| ${c.name.replaceAll('|','/')} | ${c.status} | ${(c.error || c.reason || '').replaceAll('|','/').replaceAll('\n',' ')} |`).join('\n') + '\n';
      const json = JSON.stringify(report, null, 2) + '\n';
      fs.writeFileSync(path.join(directory, outputName), json);
      fs.writeFileSync(path.join(directory, 'summary.md'), markdown.trim() + audit);
      fs.writeFileSync(path.join(archive, outputName), json);
      fs.writeFileSync(path.join(archive, 'summary.md'), markdown.trim() + audit);
      for (const [filename, body] of Object.entries(artifacts)) {
        const target = path.join(archive, filename); fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, typeof body === 'string' ? body : JSON.stringify(body, null, 2) + '\n');
      }
      console.log(`${id}: ${counts.passed} checks passed; ${counts.failed} failed; ${counts.skipped} skipped. Archive: ${archive}`);
      if (counts.failed) process.exitCode = 1;
      return report;
    }
  };
}
