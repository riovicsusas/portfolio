# Workstream B: Coordinator & WMS Simulation Metrics

**Generated:** 2026-11-09T16:33:42.639Z  
**Classification:** Measured Staging Result (Controlled Staging Simulator)  
**Environment:** Node.js v24.18.0 on win32 (x64), Monotonic Timers (`perf_hooks.performance.now`)

---

## Executive Summary of Measured Workloads

| Workload Name | Iterations | Concurrency | Mean E2E (ms) | p50 E2E (ms) | p95 E2E (ms) | p99 E2E (ms) | Success / Rejection Rate |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Baseline Sequential Flow** | 50 | 1 | 60.54 ms | 62.08 ms | 77.73 ms | 78.7 ms | 100% (200 OK) |
| **High-Concurrency Flash-Sale Burst** | 50 | 50 | 84.72 ms | 77.26 ms | 108.05 ms | 108.06 ms | 100% (200 OK) |
| **Downstream 3PL Latency Degradation** | 20 | 5 | 1484.37 ms | 1493.95 ms | 1816.13 ms | 2013.37 ms | 100% (200 OK) |
| **Duplicate Webhook Re-Delivery** | 20 | 5 | 35.55 ms | 15.64 ms | 62.85 ms | 62.88 ms | 100% (200 OK) |
| **Warehouse Cutoff Race (PONR Breach)** | 20 | 5 | 15.1 ms | 14.89 ms | 15.96 ms | 16.1 ms | 100% (409 Cutoff Rejection) |
| **WMS Gateway Timeout & Rollback** | 10 | 2 | 1538.1 ms | 1540.02 ms | 1541.18 ms | 1541.18 ms | 100% (504 Timeout) |

---

## Granular Stage-by-Stage Latency Breakdown

### Baseline Sequential Flow
*50 sequential customer hold requests under standard staging network conditions.*

| Pipeline Stage | Sample Count | Min (ms) | Median / p50 (ms) | p95 (ms) | p99 (ms) | Max (ms) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **durable_lock** | 50 | 9.59 | 15.54 | 16.14 | 16.38 | 16.38 |
| **shopify_hold** | 50 | 14.56 | 15.93 | 31.15 | 32.06 | 32.06 |
| **wms_lock** | 50 | 15.03 | 30.39 | 31.7 | 32.37 | 32.37 |
| **total_e2e** | 50 | 45.97 | 62.08 | 77.73 | 78.7 | 78.7 |

### High-Concurrency Flash-Sale Burst
*50 simultaneous hold requests arriving in parallel to evaluate lock contention and event-loop queueing.*

| Pipeline Stage | Sample Count | Min (ms) | Median / p50 (ms) | p95 (ms) | p99 (ms) | Max (ms) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **durable_lock** | 50 | 15.13 | 15.34 | 15.62 | 15.73 | 15.73 |
| **shopify_hold** | 50 | 14.93 | 30.82 | 46.44 | 46.53 | 46.53 |
| **wms_lock** | 50 | 15.3 | 31.37 | 46.67 | 46.78 | 46.78 |
| **total_e2e** | 50 | 61.39 | 77.26 | 108.05 | 108.06 | 108.06 |

### Downstream 3PL Latency Degradation
*Simulates 3PL WMS webhook slow responses under warehouse wave batch load.*

| Pipeline Stage | Sample Count | Min (ms) | Median / p50 (ms) | p95 (ms) | p99 (ms) | Max (ms) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **durable_lock** | 20 | 15.39 | 15.63 | 15.95 | 15.96 | 15.96 |
| **shopify_hold** | 20 | 15.2 | 17.66 | 31.7 | 31.7 | 31.7 |
| **wms_lock** | 20 | 1011.98 | 1447.08 | 1784.65 | 1966.22 | 1966.22 |
| **total_e2e** | 20 | 1043.15 | 1493.95 | 1816.13 | 2013.37 | 2013.37 |

### Duplicate Webhook Re-Delivery
*Evaluates idempotency key deduplication: second delivery returns cached 200 OK immediately with 0 downstream calls.*

| Pipeline Stage | Sample Count | Min (ms) | Median / p50 (ms) | p95 (ms) | p99 (ms) | Max (ms) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **durable_lock** | 20 | 14.61 | 15.29 | 15.62 | 15.64 | 15.64 |
| **shopify_hold** | 10 | 14.29 | 15 | 30.97 | 30.97 | 30.97 |
| **wms_lock** | 10 | 15.5 | 16.31 | 32.48 | 32.48 | 32.48 |
| **total_e2e** | 20 | 14.66 | 15.64 | 62.85 | 62.88 | 62.88 |

### Warehouse Cutoff Race (PONR Breach)
*Simulates request arriving after warehouse wave picking has commenced; verifies fast 409 Conflict rejection.*

| Pipeline Stage | Sample Count | Min (ms) | Median / p50 (ms) | p95 (ms) | p99 (ms) | Max (ms) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **durable_lock** | 20 | 14.45 | 14.87 | 15.96 | 16.08 | 16.08 |
| **total_e2e** | 20 | 14.47 | 14.89 | 15.96 | 16.1 | 16.1 |

### WMS Gateway Timeout & Rollback
*Simulates HTTP 504 Gateway Timeout from 3PL; tests graceful failure and escalation queue tagging.*

| Pipeline Stage | Sample Count | Min (ms) | Median / p50 (ms) | p95 (ms) | p99 (ms) | Max (ms) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **durable_lock** | 10 | 14.39 | 15.34 | 16.1 | 16.1 | 16.1 |
| **shopify_hold** | 10 | 15.23 | 15.43 | 16.09 | 16.09 | 16.09 |
| **wms_lock** | 10 | 1502.99 | 1507.85 | 1510.18 | 1510.18 | 1510.18 |
| **total_e2e** | 10 | 1532.96 | 1540.02 | 1541.18 | 1541.18 | 1541.18 |

---

## Evidentiary Boundary
- **What this proves**: Demonstrates the algorithmic correctness, thread-safe deduplication, queueing latency under concurrency, and graceful fault recovery of the coordinator architecture.
- **What remains outside scope**: Does not reflect ShipBob production network p99 or Shopify public cloud edge routing latencies under live BFCM conditions.
