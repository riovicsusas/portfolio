import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createSuite } from '../lib/report.js';
import { Coordinator, seededRandom } from './coordinator.js';

const directory = path.dirname(fileURLToPath(import.meta.url));
const config = JSON.parse(fs.readFileSync(path.join(directory, 'workloads.json'), 'utf8'));
const suite = createSuite('latency', {
  classification: 'Measured local SQLite coordinator and fault-injected WMS simulator; no vendor or SQS calls',
  inputs: ['workloads.json', 'coordinator.js', 'restart_worker.js']
});
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'synapse-coordinator-'));
const records = [];
const functional = [];
const summaries = [];
let databaseNumber = 0;
const request = (suffix = 'one') => ({ operationId: `edit-${suffix}`, shipmentId: `shipment-${suffix}`,
  expectedRevision: 1, desiredAddress: 'San Francisco fixture address' });
async function check(name, fn) {
  await suite.check(name, async () => {
    const filename = path.join(temp, `${databaseNumber++}.sqlite`);
    const coordinator = new Coordinator(filename);
    try { const outcome = await fn(coordinator, filename); functional.push({ name, outcome: outcome ?? 'assertions passed' }); }
    finally { coordinator.close(); }
  });
}
export function percentiles(values) {
  if (!values.length) return { count: 0, min: null, p50: null, p95: null, p99: null, max: null, mean: null };
  const sorted = [...values].sort((a,b) => a-b);
  const p = n => +sorted[Math.max(0, Math.ceil(n * sorted.length) - 1)].toFixed(4);
  return { count: sorted.length, min: +sorted[0].toFixed(4), p50: p(.5), p95: p(.95), p99: p(.99),
    max: +sorted.at(-1).toFixed(4), mean: +(sorted.reduce((n,v)=>n+v,0) / sorted.length).toFixed(4) };
}

try {
  await check('Eligible hold commits one WMS-simulator effect', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    const res=await c.execute(r);
    assert.equal(res.status,200); assert.equal(res.result,'HOLD_CONFIRMED');
    assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Concurrent same-order duplicate returns pending; later replay returns confirmed', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    const first=c.execute(r,{shopifyDelayMs:5,wmsDelayMs:5});
    const duplicate=await c.execute(r);
    assert.equal(duplicate.status,202); assert.equal(duplicate.result,'PENDING');
    assert.equal(c.shipment(r.shipmentId).effects,0);
    assert.equal((await first).status,200);
    assert.equal((await c.execute(r)).result,'HOLD_CONFIRMED');
    assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Reconciliation cannot steal an active pending operation', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    const first=c.execute(r,{shopifyDelayMs:5,wmsDelayMs:5});
    assert.equal(c.reconcile(r.operationId).result,'PENDING');
    assert.equal((await c.execute(r)).status,202);
    assert.equal((await first).result,'HOLD_CONFIRMED');
    assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Rejected cutoff outcome is preserved on duplicate delivery', async c => {
    const r=request(); c.initShipment(r.shipmentId,{state:'PICKED'});
    const first=await c.execute(r), replay=await c.execute(r);
    assert.equal(first.status,409); assert.equal(replay.status,409);
    assert.equal(replay.result,first.result); assert.equal(c.shipment(r.shipmentId).effects,0);
  });
  await check('Reusing a key for a different order rejects the conflicting payload', async c => {
    const r=request(); c.initShipment(r.shipmentId); await c.execute(r);
    assert.equal((await c.execute({...r,shipmentId:'other-order'})).result,'OPERATION_PAYLOAD_CONFLICT');
  });
  await check('Reusing a key with a changed address rejects the conflicting payload', async c => {
    const r=request(); c.initShipment(r.shipmentId); await c.execute(r);
    assert.equal((await c.execute({...r,desiredAddress:'Different fixture address'})).status,409);
    assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Competing operation IDs serialize the same shipment while pending', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    const first=c.execute(r,{shopifyDelayMs:5});
    assert.equal((await c.execute({...r,operationId:'competing-edit'})).result,'SHIPMENT_BUSY');
    await first; assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Wave release between initial read and conditional hold rejects mutation', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    const res=await c.execute(r,{beforeConditionalHold:()=>c.setState(r.shipmentId,'WAVE_RELEASED')});
    assert.equal(res.result,'CONDITIONAL_HOLD_REJECTED'); assert.equal(c.shipment(r.shipmentId).effects,0);
  });
  await check('Timeout after remote success reconciles without a second effect', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    assert.equal((await c.execute(r,{timeoutAfterApply:true})).status,504);
    assert.equal((await c.execute(r)).result,'UNKNOWN');
    assert.equal(c.reconcile(r.operationId).result,'HOLD_CONFIRMED');
    assert.equal((await c.execute(r)).status,200); assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Absent effect is reconciled before a safe same-key retry', async c => {
    const r=request(); c.initShipment(r.shipmentId);
    await c.execute(r,{timeoutBeforeApply:true});
    assert.equal(c.shipment(r.shipmentId).effects,0);
    assert.equal(c.reconcile(r.operationId).result,'RECONCILED_NOT_APPLIED');
    assert.equal((await c.execute(r)).result,'HOLD_CONFIRMED'); assert.equal(c.shipment(r.shipmentId).effects,1);
  });
  await check('Stale order revision cannot apply a hold', async c => {
    const r=request(); c.initShipment(r.shipmentId,{revision:2});
    assert.equal((await c.execute(r)).result,'VERSION_OR_SHIPMENT_REJECTED');
    assert.equal(c.shipment(r.shipmentId).effects,0);
  });
  await check('Reconciliation detects revision change after an uncertain effect', async c => {
    const r=request(); c.initShipment(r.shipmentId); await c.execute(r,{timeoutAfterApply:true});
    c.db.prepare('UPDATE shipments SET revision=2 WHERE id=?').run(r.shipmentId);
    assert.equal(c.reconcile(r.operationId).result,'VERSION_RECONCILIATION_REQUIRED');
    assert.equal(c.release(r.operationId).status,409);
  });
  await check('Selective release preserves the unrelated hold', async c => {
    const r=request(); c.initShipment(r.shipmentId,{otherHold:true}); await c.execute(r);
    assert.equal(c.release('not-the-owner').status,409);
    assert.equal(c.release(r.operationId).result,'OWNED_HOLD_RELEASED');
    assert.equal(c.shipment(r.shipmentId).other_hold,1); assert.equal(c.shipment(r.shipmentId).hold_owner,null);
  });
  await check('New process recovers effect persisted before worker termination', async (c, filename) => {
    const r=request('restart'); c.initShipment(r.shipmentId);
    const worker=spawnSync(process.execPath,[path.join(directory,'restart_worker.js'),filename,JSON.stringify(r)],{encoding:'utf8'});
    assert.equal(worker.status,86,worker.stderr || worker.stdout);
    assert.equal(c.operation(r.operationId).status,'PENDING');
    const restarted=new Coordinator(filename);
    try {
      assert.equal(restarted.reconcile(r.operationId).result,'HOLD_CONFIRMED');
      assert.equal((await restarted.execute(r)).result,'HOLD_CONFIRMED');
      assert.equal(restarted.shipment(r.shipmentId).effects,1);
      return { child_exit:worker.status, persisted_status_before_recovery:'PENDING', reconciled_status:'CONFIRMED',effects:1 };
    } finally { restarted.close(); }
  });
  await suite.check('Seed reproduces injected delays, not observed wall-clock timings',()=>{
    const a=seededRandom(config.seed),b=seededRandom(config.seed);
    assert.deepEqual(Array.from({length:50},()=>a(0,50)),Array.from({length:50},()=>b(0,50)));
  });
  await suite.check('Nearest-rank percentile implementation matches known values',()=>{
    assert.deepEqual(percentiles([1,2,3,4,5]).p50,3);
    assert.equal(percentiles([1,2,3,4,5]).p99,5);
    assert.equal(percentiles([]).p99,null);
  });

  const full=process.argv.includes('--full');
  for (let index=0;index<config.workloads.length;index++) {
    const source=config.workloads[index];
    const wl={...source,iterations:full?config.full_iterations_per_workload:source.iterations};
    if(wl.duplicate_pairs) assert.equal(wl.iterations%2,0);
    const c=new Coordinator(path.join(temp,`benchmark-${index}.sqlite`));
    const jitter=seededRandom(config.seed+index);
    const operations=[];
    const tasks=[];
    for(let i=0;i<wl.iterations;i++) {
      const businessIndex=wl.duplicate_pairs?Math.floor(i/2):i;
      const r=request(`${wl.id}-${businessIndex}`);
      c.initShipment(r.shipmentId,{state:wl.initial_state||'QUEUED'});
      const injected={shopifyDelayMs:jitter(...wl.shopify_delay_ms),wmsDelayMs:jitter(...wl.wms_delay_ms),
        timeoutAfterApply:Boolean(wl.timeout_after_apply)};
      tasks.push(async()=>{
        const response=await c.execute(r,injected);
        operations.push({workload_id:wl.id,delivery_index:i,request:r,injected_delays_ms:injected,response});
      });
    }
    for(let i=0;i<tasks.length;i+=wl.concurrency) await Promise.all(tasks.slice(i,i+wl.concurrency).map(f=>f()));
    let reconciled=0;
    for(const row of operations) if(row.response.result==='UNKNOWN') {
      row.reconciliation=c.reconcile(row.request.operationId); reconciled++;
    }
    await suite.check(`${wl.id}: actual result count equals configured attempts`,()=>assert.equal(operations.length,wl.iterations));
    const effects=c.db.prepare('SELECT COALESCE(SUM(effects),0) AS count FROM shipments').get().count;
    const expected=wl.initial_state?0:wl.duplicate_pairs?wl.iterations/2:wl.iterations;
    await suite.check(`${wl.id}: WMS-simulator business-effect count`,()=>assert.equal(effects,expected));
    await suite.check(`${wl.id}: every result matches the workload safety outcome`,()=>{
      for(const row of operations) {
        if(wl.initial_state) assert.equal(row.response.status,409);
        else if(wl.timeout_after_apply) {assert.equal(row.response.status,504);assert.equal(row.reconciliation.result,'HOLD_CONFIRMED');}
        else if(wl.duplicate_pairs) assert.ok(row.response.result==='PENDING'||row.response.result==='HOLD_CONFIRMED');
        else assert.equal(row.response.result,'HOLD_CONFIRMED');
      }
    });
    const outcomes={};
    for(const row of operations) outcomes[row.response.result]=(outcomes[row.response.result]||0)+1;
    const byOutcome={};
    for(const outcome of Object.keys(outcomes)) byOutcome[outcome]=percentiles(operations.filter(x=>x.response.result===outcome).map(x=>x.response.duration_ms));
    const summary={...wl,seed:config.seed+index,attempts:operations.length,outcomes,effects,reconciled,
      request_response_all_outcomes_ms:percentiles(operations.map(x=>x.response.duration_ms)),by_outcome_ms:byOutcome};
    summaries.push(summary);records.push(...operations);c.close();
  }
} catch(error) {
  await suite.check('Benchmark execution completed',()=>{throw error;});
} finally {
  fs.rmSync(temp,{recursive:true,force:true});
}
const table=summaries.map(w=>`| ${w.name} | ${w.attempts} | ${w.concurrency} | ${w.request_response_all_outcomes_ms.p50} | ${w.request_response_all_outcomes_ms.p95} | ${w.request_response_all_outcomes_ms.p99} | ${w.effects} |`).join('\n');
suite.finish({
  outputName:'metrics.json',
  data:{profile:process.argv.includes('--full')?'full':'smoke',seed:config.seed,quantile_method:config.quantile_method,
    measurement:'Local request-response elapsed time, all outcomes; disaggregated by outcome. Injected delays are test parameters.',
    functional_cases:functional,workloads:summaries,attempts:records.length,
    limitations:['SQLite is a local operation ledger and virtual WMS store, not Redis/Postgres/SQS or an authenticated provider.',
      'Tests establish local process-restart recovery after a persisted effect, not power-loss, network-partition or multi-host failover. A pending operation with no known effect is not automatically stolen; owner-liveness/lease recovery requires a separate design.',
      'One virtual shipment per case; no actual Shopify, ShipBob, carrier or physical warehouse calls.',
      'Small-sample p99 may be the maximum; smoke measurements are not production or BFCM percentiles.']},
  markdown:`# Coordinator functional checks and measured local simulation\n\nThe coordinator uses Node ${process.version} built-in SQLite for a local persistent operation ledger and virtual WMS state. SQLite is experimental in this Node release. Atomic claims and conditional shipment updates are exercised locally; no vendor API or queue service is contacted.\n\nFunctional checks cover preserved rejections, payload conflicts, pending duplicates, a cutoff changing during the request, uncertain side effects, selective release, and recovery after a separate worker exits at the post-effect boundary.\n\n| Workload | Attempts | Concurrency | p50 response ms | p95 | p99 | Business effects |\n|---|---:|---:|---:|---:|---:|---:|\n${table}\n\nTimings use performance.now(). Percentiles use ${config.quantile_method}. All request outcomes are retained; per-outcome statistics are available in metrics.json. Response latency includes pending, rejected and unknown results and must not be described as confirmation latency. The seed reproduces injected delays, not operating-system scheduling or measured durations. Raw per-delivery records are archived as operations.jsonl in this run's latency directory.\n\nThe default smoke profile is a small local benchmark. Run --full for ${config.full_iterations_per_workload} attempts per workload. No production latency, durable distributed locking, physical stop, SQS delivery, or vendor SLA is established.`,
  artifacts:{'operations.jsonl':records.map(x=>JSON.stringify(x)).join('\n')+'\n','functional-cases.json':functional}
});
