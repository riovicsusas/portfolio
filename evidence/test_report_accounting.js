import assert from 'node:assert/strict';
import { validateSuiteReport } from './lib/report.js';

console.log('Running isolated report accounting fault-injection tests...');

const validBaseReport = () => ({
  run_id: 'test-run-123',
  status: 'passed',
  checks: [
    { name: 'Check alpha', status: 'passed' },
    { name: 'Check beta', status: 'skipped', reason: 'Scenario condition' }
  ],
  counts: {
    passed: 1,
    failed: 0,
    skipped: 1,
    total: 2
  }
});

// 1. Valid passing report
{
  const report = validBaseReport();
  assert.equal(validateSuiteReport(report, 'test-run-123'), true);
}

// 2. Valid failing report
{
  const report = {
    run_id: 'test-run-123',
    status: 'failed',
    checks: [
      { name: 'Passing check', status: 'passed' },
      { name: 'Failing check', status: 'failed', error: 'Assertion failed' }
    ],
    counts: { passed: 1, failed: 1, skipped: 0, total: 2 }
  };
  assert.equal(validateSuiteReport(report, 'test-run-123'), true);
}

// 3. Unknown check status (e.g., "bogus" as in audit finding)
{
  const report = {
    run_id: 'test-run-123',
    status: 'passed',
    checks: [
      { name: 'valid', status: 'passed' },
      { name: 'uncounted', status: 'bogus' }
    ],
    counts: { passed: 1, failed: 0, skipped: 0, total: 2 }
  };
  assert.throws(
    () => validateSuiteReport(report, 'test-run-123'),
    /invalid status "bogus"/
  );
}

// 4. Missing or malformed counts
{
  const reportNoCounts = validBaseReport();
  delete reportNoCounts.counts;
  assert.throws(() => validateSuiteReport(reportNoCounts, 'test-run-123'), /Missing or malformed report counts/);

  const reportNullCounts = { ...validBaseReport(), counts: null };
  assert.throws(() => validateSuiteReport(reportNullCounts, 'test-run-123'), /Missing or malformed report counts/);

  const reportMissingTotal = validBaseReport();
  delete reportMissingTotal.counts.total;
  assert.throws(() => validateSuiteReport(reportMissingTotal, 'test-run-123'), /nonnegative safe integer/);
}

// 5. Fractional, negative, or unsafe counts
{
  const reportFractional = validBaseReport();
  reportFractional.counts.passed = 1.5;
  assert.throws(() => validateSuiteReport(reportFractional, 'test-run-123'), /nonnegative safe integer/);

  const reportNegative = validBaseReport();
  reportNegative.counts.failed = -1;
  assert.throws(() => validateSuiteReport(reportNegative, 'test-run-123'), /nonnegative safe integer/);

  const reportUnsafe = validBaseReport();
  reportUnsafe.counts.total = Number.MAX_SAFE_INTEGER + 1;
  assert.throws(() => validateSuiteReport(reportUnsafe, 'test-run-123'), /nonnegative safe integer/);
}

// 6. Known-status count mismatch
{
  const reportMismatch = validBaseReport();
  reportMismatch.counts.passed = 2; // only 1 check actually passed
  reportMismatch.counts.total = 3;
  assert.throws(() => validateSuiteReport(reportMismatch, 'test-run-123'), /does not match checks array length/);

  const reportStatusMismatch = validBaseReport();
  reportStatusMismatch.checks.push({ name: 'Bogus passed check', status: 'passed' });
  reportStatusMismatch.counts.total = 3; // total matches checks.length, but counts.passed is still 1
  assert.throws(() => validateSuiteReport(reportStatusMismatch, 'test-run-123'), /Report counts sum/);
}

// 7. Total mismatch
{
  const reportTotalMismatch = validBaseReport();
  reportTotalMismatch.counts.total = 999;
  assert.throws(() => validateSuiteReport(reportTotalMismatch, 'test-run-123'), /Report counts sum/);
}

// 8. Empty checks
{
  const reportEmptyChecks = { ...validBaseReport(), checks: [], counts: { passed: 0, failed: 0, skipped: 0, total: 0 } };
  assert.throws(() => validateSuiteReport(reportEmptyChecks, 'test-run-123'), /nonempty checks array/);
}

// 9. Stale run ID
{
  const reportStale = validBaseReport();
  reportStale.run_id = 'old-stale-run-456';
  assert.throws(() => validateSuiteReport(reportStale, 'test-run-123'), /Suite did not produce a fresh report/);
}

// 10. Check object validation (missing name, invalid object)
{
  const reportNoName = validBaseReport();
  reportNoName.checks[0].name = '';
  assert.throws(() => validateSuiteReport(reportNoName, 'test-run-123'), /non-empty name string/);

  const reportNullCheck = validBaseReport();
  reportNullCheck.checks[0] = null;
  assert.throws(() => validateSuiteReport(reportNullCheck, 'test-run-123'), /must be a non-null object/);
}

// 11. Inconsistent suite status
{
  const reportInconsistentStatus = validBaseReport();
  reportInconsistentStatus.status = 'failed'; // 0 failed checks, but status says failed
  assert.throws(() => validateSuiteReport(reportInconsistentStatus, 'test-run-123'), /failed count is 0/);

  const reportInconsistentPassed = {
    run_id: 'test-run-123',
    status: 'passed', // 1 failed check, but status says passed
    checks: [{ name: 'Failed check', status: 'failed', error: 'boom' }],
    counts: { passed: 0, failed: 1, skipped: 0, total: 1 }
  };
  assert.throws(() => validateSuiteReport(reportInconsistentPassed, 'test-run-123'), /failed count is 1/);
}

// 12. Nonzero child exit after a passing-looking report
{
  // Simulating run_all.js evaluation logic:
  const passingReport = validBaseReport();
  const child = { status: 1, signal: null, error: null };
  const record = { id: 'test-suite', status: 'failed', counts: null };
  let caughtError = null;
  try {
    if (child.error) throw child.error;
    validateSuiteReport(passingReport, 'test-run-123');
    record.counts = passingReport.counts;
    if (child.status !== 0) throw new Error(`Suite process exited ${child.status ?? child.signal}; see counted check failures`);
    if (passingReport.status !== 'passed' || passingReport.counts.failed > 0) throw new Error('A safety or financial check failed');
    record.status = 'passed';
  } catch (err) {
    caughtError = err;
    record.error = err.message;
  }
  assert.ok(caughtError !== null, 'Should have thrown on nonzero child exit');
  assert.match(caughtError.message, /Suite process exited 1/);
  assert.equal(record.status, 'failed', 'Record status must remain failed');
  assert.deepEqual(record.counts, passingReport.counts, 'Counts should still be recorded');
}

// 13. Missing report file handling
{
  const record = { id: 'test-suite', status: 'failed', counts: null };
  let executionFailures = 0;
  try {
    const missingFileExists = false;
    if (!missingFileExists) throw new Error('Suite report not found: missing/results.json');
  } catch (err) {
    record.error = err.message;
    if (!record.counts) executionFailures++;
  }
  assert.equal(executionFailures, 1, 'Missing report must increment execution failures');
  assert.equal(record.status, 'failed');
}

// 14. Failed assertion handling
{
  const failingReport = {
    run_id: 'test-run-123',
    status: 'failed',
    checks: [{ name: 'Assertion check', status: 'failed', error: 'expected 1 to equal 2' }],
    counts: { passed: 0, failed: 1, skipped: 0, total: 1 }
  };
  const child = { status: 1, signal: null, error: null };
  const record = { id: 'test-suite', status: 'failed', counts: null };
  let caughtError = null;
  try {
    validateSuiteReport(failingReport, 'test-run-123');
    record.counts = failingReport.counts;
    if (child.status !== 0) throw new Error(`Suite process exited ${child.status ?? child.signal}; see counted check failures`);
    record.status = 'passed';
  } catch (err) {
    caughtError = err;
    record.error = err.message;
  }
  assert.equal(record.status, 'failed');
  assert.equal(record.counts.failed, 1);
}

console.log('All 14 report accounting fault-injection tests passed successfully.');
