import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { performance } from 'node:perf_hooks';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const terminal = new Set(['CONFIRMED', 'REJECTED', 'RELEASED']);
export function seededRandom(seed) {
  let state = seed >>> 0;
  return (min, max) => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return min + Math.floor(state / 4294967296 * (max - min + 1));
  };
}
export class Coordinator {
  constructor(filename) {
    this.db = new DatabaseSync(filename);
    this.db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
      CREATE TABLE IF NOT EXISTS shipments (
        id TEXT PRIMARY KEY, revision INTEGER NOT NULL, state TEXT NOT NULL,
        hold_owner TEXT, other_hold INTEGER NOT NULL DEFAULT 0,
        effects INTEGER NOT NULL DEFAULT 0);
      CREATE TABLE IF NOT EXISTS operations (
        key TEXT PRIMARY KEY, shipment_id TEXT NOT NULL, fingerprint TEXT NOT NULL, expected_revision INTEGER NOT NULL,
        status TEXT NOT NULL, response TEXT NOT NULL, updated_at TEXT NOT NULL);`);
  }
  close() { this.db.close(); }
  initShipment(id, { revision = 1, state = 'QUEUED', otherHold = false } = {}) {
    this.db.prepare('INSERT OR IGNORE INTO shipments(id,revision,state,other_hold) VALUES (?,?,?,?)')
      .run(id, revision, state, Number(otherHold));
  }
  shipment(id) { return this.db.prepare('SELECT * FROM shipments WHERE id=?').get(id); }
  operation(key) { return this.db.prepare('SELECT * FROM operations WHERE key=?').get(key); }
  setState(id, state) { this.db.prepare('UPDATE shipments SET state=? WHERE id=?').run(state, id); }
  save(key, status, response) {
    this.db.prepare('UPDATE operations SET status=?,response=?,updated_at=? WHERE key=?')
      .run(status, JSON.stringify(response), new Date().toISOString(), key);
    return response;
  }
  claim(request) {
    const fingerprint = digest({ shipmentId: request.shipmentId, expectedRevision: request.expectedRevision,
      desiredAddress: request.desiredAddress });
    this.db.exec('BEGIN IMMEDIATE');
    try {
      const existing = this.operation(request.operationId);
      let response;
      if (existing) {
        if (existing.fingerprint !== fingerprint) response = { status: 409, result: 'OPERATION_PAYLOAD_CONFLICT' };
        else if (terminal.has(existing.status)) response = { ...JSON.parse(existing.response), replayed: true };
        else if (existing.status !== 'RETRYABLE') response = { status: 202, result: existing.status, replayed: true };
        else {
          this.save(request.operationId, 'PENDING', { status: 202, result: 'PENDING' });
          response = null;
        }
      } else {
        const busy = this.db.prepare("SELECT key FROM operations WHERE shipment_id=? AND status IN ('PENDING','UNKNOWN','RETRYABLE')")
          .get(request.shipmentId);
        if (busy) response = { status: 409, result: 'SHIPMENT_BUSY' };
        else {
          this.db.prepare('INSERT INTO operations(key,shipment_id,fingerprint,expected_revision,status,response,updated_at) VALUES (?,?,?,?,?,?,?)')
            .run(request.operationId, request.shipmentId, fingerprint, request.expectedRevision, 'PENDING', JSON.stringify({ status: 202, result: 'PENDING' }), new Date().toISOString());
          response = null;
        }
      }
      this.db.exec('COMMIT'); return response;
    } catch (error) { this.db.exec('ROLLBACK'); throw error; }
  }
  async execute(request, { shopifyDelayMs = 0, wmsDelayMs = 0, timeoutBeforeApply = false,
    timeoutAfterApply = false, beforeConditionalHold, crashAfterApply = false } = {}) {
    const start = performance.now();
    const stages = { claim_ms: null, shopify_simulator_ms: null, wms_simulator_ms: null };
    const finish = response => ({ ...response, operation_id: request.operationId, shipment_id: request.shipmentId,
      received_at: received, duration_ms: performance.now() - start, stages });
    const received = new Date().toISOString();
    const claimStart = performance.now();
    const claimed = this.claim(request); stages.claim_ms = performance.now() - claimStart;
    if (claimed) return finish(claimed);
    const initial = this.shipment(request.shipmentId);
    if (!initial || initial.revision !== request.expectedRevision) {
      return finish(this.save(request.operationId, 'REJECTED', { status: 409, result: 'VERSION_OR_SHIPMENT_REJECTED' }));
    }
    if (initial.state !== 'QUEUED') {
      return finish(this.save(request.operationId, 'REJECTED', { status: 409, result: 'CUTOFF_REJECTED' }));
    }
    const shopifyStart = performance.now();
    if (shopifyDelayMs > 0) await sleep(shopifyDelayMs);
    stages.shopify_simulator_ms = performance.now() - shopifyStart;
    const wmsStart = performance.now();
    if (wmsDelayMs > 0) await sleep(wmsDelayMs);
    if (beforeConditionalHold) await beforeConditionalHold();
    if (timeoutBeforeApply) {
      stages.wms_simulator_ms = performance.now() - wmsStart;
      return finish(this.save(request.operationId, 'UNKNOWN', { status: 504, result: 'UNKNOWN' }));
    }
    // The WMS simulator's conditional write is the physical-state gate. A prior read cannot authorize it.
    const held = this.db.prepare(`UPDATE shipments SET hold_owner=?,effects=effects+1
      WHERE id=? AND revision=? AND state='QUEUED' AND hold_owner IS NULL`)
      .run(request.operationId, request.shipmentId, request.expectedRevision);
    stages.wms_simulator_ms = performance.now() - wmsStart;
    if (!held.changes) return finish(this.save(request.operationId, 'REJECTED', { status: 409, result: 'CONDITIONAL_HOLD_REJECTED' }));
    // Fault injection boundary: remote effect committed, coordinator completion not yet persisted.
    if (crashAfterApply) process.exit(86);
    if (timeoutAfterApply) return finish(this.save(request.operationId, 'UNKNOWN', { status: 504, result: 'UNKNOWN' }));
    return finish(this.save(request.operationId, 'CONFIRMED', { status: 200, result: 'HOLD_CONFIRMED' }));
  }
  reconcile(operationId) {
    const op = this.operation(operationId);
    if (!op) return { status: 404, result: 'OPERATION_NOT_FOUND' };
    if (terminal.has(op.status)) return { ...JSON.parse(op.response), replayed: true };
    const remote = this.shipment(op.shipment_id);
    if (remote?.hold_owner === operationId && remote.revision !== op.expected_revision) return this.save(operationId, 'UNKNOWN', { status: 202, result: 'VERSION_RECONCILIATION_REQUIRED' });
    if (remote?.hold_owner === operationId) return this.save(operationId, 'CONFIRMED', { status: 200, result: 'HOLD_CONFIRMED' });
    if (!remote || remote.state !== 'QUEUED') return this.save(operationId, 'REJECTED', { status: 409, result: 'CUTOFF_REJECTED' });
    // Do not take over a worker that may still be executing. PENDING recovery without a
    // known effect needs a separate lease/owner-liveness decision, outside this local model.
    if (op.status === 'PENDING') return { status: 202, result: 'PENDING' };
    // Local simulator database is authoritative for absence of this effect. An actual WMS needs an equivalent documented lookup.
    return this.save(operationId, 'RETRYABLE', { status: 202, result: 'RECONCILED_NOT_APPLIED' });
  }
  release(operationId) {
    const op = this.operation(operationId);
    if (!op || op.status !== 'CONFIRMED') return { status: 409, result: 'CONFIRMATION_REQUIRED' };
    const changed = this.db.prepare('UPDATE shipments SET hold_owner=NULL WHERE id=? AND hold_owner=? AND revision=?')
      .run(op.shipment_id, operationId, op.expected_revision);
    if (!changed.changes) return { status: 409, result: 'HOLD_OWNERSHIP_MISMATCH' };
    return this.save(operationId, 'RELEASED', { status: 200, result: 'OWNED_HOLD_RELEASED' });
  }
}
