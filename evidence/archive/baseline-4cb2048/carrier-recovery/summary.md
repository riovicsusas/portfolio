# Workstream E: UPS Intercept Contract & Recovery Evidence

**Generated:** 2026-11-09T16:34:01.402Z  
**Classification:** Official Carrier OpenAPI Specification Validation & Finite State Machine Simulation  
**Contract Pinned:** UPS Delivery Intercept API v2 Contract Specification (`ups_intercept_schema.json`)

---

## 1. Test Scenario Execution Matrix

| Scenario ID | Test Scenario Description | Initial State | API Response | Final FSM State | Carrier Fee Billed | Assertion Result |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **SCENARIO-01-CLEAN-SUCCESS** | Mid-Transit Clean Depot Intercept | `IN_TRANSIT_HUB` | HTTP 202 | **SUCCEEDED** | **$17.50** | **PASS** |
| **SCENARIO-02-ALREADY-DELIVERED** | Post-Delivery Ineligible Attempt | `DELIVERED` | HTTP 422 | **REJECTED_IMMEDIATELY** | **$0.00** | **PASS** |
| **SCENARIO-03-LAST-MILE-RACE-FAILURE** | Out-for-Delivery Hub Race (API Accepted but Physically Delivered) | `OUT_FOR_DELIVERY` | HTTP 202 | **FAILED** | **$0.00** | **PASS** |
| **SCENARIO-04-INVALID-TRACKING** | Malformed Tracking Number Schema Rejection | `UNKNOWN` | HTTP 400 | **VALIDATION_FAILED** | **$0.00** | **PASS** |

---

## 2. Finite State Machine (FSM) Lifecycle Details

### SCENARIO-01-CLEAN-SUCCESS: Mid-Transit Clean Depot Intercept
- **Tracking Number**: `1Z9999999999999991`
- **Outcome**: **SUCCEEDED** (Carrier Fee Billed: **$17.50**)
- **State Transition Log**:
  1. `INITIAL` — *Order parcel active in carrier network*
  1. `SCHEMA_VALIDATED` — *Request adheres to UPS Delivery Intercept v2 OpenAPI contract*
  1. `CARRIER_REQUEST_ACCEPTED` — *UPS API returned HTTP 202 ACCEPTED. Intercept request queued at sorting hubs.*
  1. `DEPOT_HUB_SCANNED` — *Terminal laser scan flagged parcel at Louisville KY hub*
  1. `RTS_OVERLABEL_APPLIED` — *Automated sorter redirected parcel to origin return loop*
  1. `SUCCEEDED` — *Parcel returned to warehouse. Intercept fee settled.*

### SCENARIO-02-ALREADY-DELIVERED: Post-Delivery Ineligible Attempt
- **Tracking Number**: `1Z9999999999999992`
- **Outcome**: **REJECTED_IMMEDIATELY** (Carrier Fee Billed: **$0.00**)
- **State Transition Log**:
  1. `INITIAL` — *Order parcel active in carrier network*
  1. `SCHEMA_VALIDATED` — *Request adheres to UPS Delivery Intercept v2 OpenAPI contract*
  1. `CARRIER_REJECTED_INELIGIBLE` — *UPS API returned HTTP 422: Parcel already delivered*

### SCENARIO-03-LAST-MILE-RACE-FAILURE: Out-for-Delivery Hub Race (API Accepted but Physically Delivered)
- **Tracking Number**: `1Z9999999999999993`
- **Outcome**: **FAILED** (Carrier Fee Billed: **$0.00**)
- **State Transition Log**:
  1. `INITIAL` — *Order parcel active in carrier network*
  1. `SCHEMA_VALIDATED` — *Request adheres to UPS Delivery Intercept v2 OpenAPI contract*
  1. `CARRIER_REQUEST_ACCEPTED` — *UPS API returned HTTP 202 ACCEPTED. Intercept request queued at sorting hubs.*
  1. `OUT_FOR_DELIVERY_RACE` — *Parcel was loaded on final delivery vehicle before hub sorting flag propagated*
  1. `DELIVERY_COMPLETED_BEFORE_INTERCEPT` — *Driver delivered parcel to customer porch. Intercept physically failed.*
  1. `FAILED` — *Physical intercept unsuccessful. Fee waived ($0.00 charged).*

### SCENARIO-04-INVALID-TRACKING: Malformed Tracking Number Schema Rejection
- **Tracking Number**: `1Z123SHORT`
- **Outcome**: **VALIDATION_FAILED** (Carrier Fee Billed: **$0.00**)
- **State Transition Log**:
  1. `INITIAL` — *Order parcel active in carrier network*
  1. `CLIENT_VALIDATION_ERROR` — *Request payload rejected by client-side schema validator*

---

## 3. The Critical Evidentiary Boundary
- **Electronic Acceptance vs. Physical Depot Containment**:
  - Receiving HTTP 202 `ACCEPTED` from UPS confirms only that the intercept request was received and routed to regional sorting facilities.
  - It **does not guarantee** physical parcel recovery. If the package has already entered a final delivery vehicle (Scenario 03), courier delivery may occur before the digital flag reaches the driver manifest.
- **Fee Settlement Rule**:
  - The **$17.50 intercept fee** is contingent on physical diversion at the hub. If the parcel is delivered despite the intercept request, UPS waives the fee ($0.00 billed).
- **What remains outside scope**: Physical carrier sorting hub optical conveyor performance and real-world package interception success rate across UPS domestic hubs.