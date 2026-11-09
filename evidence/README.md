# Synapse Botanicals — Reproducible Evidence Package

This directory contains executable test suites, deterministic models, and empirical benchmark runners that validate the technical architectures, economic models, and logistics claims in the Synapse Botanicals portfolio dossiers.

## Evidence Classification Hierarchy

Every technical claim in the portfolio is categorized by its evidentiary boundary:
1. **Public Reference**: Third-party published tariffs, GS1 standards, or carrier API contracts.
2. **Scenario Input**: Explicit, transparent operational assumptions (e.g. $0.40 kitting material, $17.50 intercept fee).
3. **Calculated Result**: Deterministic, reproducible mathematical outputs computed from documented inputs.
4. **Measured Staging Result**: Monotonically timed executions recorded on a local test harness under controlled load and fault injection.
5. **Authenticated Vendor-Sandbox Result**: Recorded responses from vendor developer sandboxes.
6. **Physical Operational Result**: Physical depot or carrier facility events (demarcated as requiring real-world warehouse operations).

---

## Directory Structure & Workstreams

- **`freight/` (Workstream A)**:
  - Validates single-node vs split-node shipping economics using USPS Notice 123 (Ground Advantage Commercial) and UPS Daily Rates tariffs.
  - Script: `calculate_freight.js`
- **`latency/` (Workstream B)**:
  - Measures execution latency, queue contention, and idempotent deduplication across a simulated Coordinator middleware, Shopify Hold API, and ShipBob WMS queue.
  - Script: `coordinator_simulator.js`
- **`barcodes/` (Workstream C)**:
  - Validates GS1 Modulo-10 checksums, tests Excel scientific notation corruption rejection, and proves 100% software round-trip barcode generation and decode across all 12 Universe A SKUs.
  - Script: `validate_barcodes.js`
- **`costs/` (Workstream D)**:
  - Transparently breaks down Starter Bundle unit economics ($28.00 component BOM + $0.40 kitting materials = $28.40) and executes sensitivity sweeps across component costs, kitting labor, and parcel freight.
  - Script: `run_cost_model.js`
- **`carrier-recovery/` (Workstream E)**:
  - Validates UPS Delivery Intercept v2 OpenAPI payloads and simulates carrier recovery state transitions (`REQUESTED` → `ACCEPTED` → `IN_TRANSIT` → `SUCCEEDED`/`FAILED`).
  - Script: `test_recovery.js`

---

## Reproduction Commands

Run all evidence verification suites in one command:
```bash
node evidence/run_all.js
```

Or execute individual test suites:
```bash
node evidence/freight/calculate_freight.js
node evidence/latency/coordinator_simulator.js
node evidence/barcodes/validate_barcodes.js
node evidence/costs/run_cost_model.js
node evidence/carrier-recovery/test_recovery.js
```
