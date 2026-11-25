# RIOVIC MATTHEW G. SUSAS
**Cebu, Philippines** | **+63 939 781 4256** | **riovicmatthew@gmail.com**  
**LinkedIn:** [linkedin.com/in/riovicsusas](https://www.linkedin.com/in/riovicsusas) | **Portfolio:** [riovicsusas.github.io/portfolio](https://riovicsusas.github.io/portfolio/)

---

## PROFESSIONAL SUMMARY
**Technical Operations & E-Commerce Systems Analyst** with an Electronics Engineering foundation (Finite State Machines, Logic Systems) and frontline Amazon logistics operations experience. Focuses on Shopify Plus order lifecycles, multi-node 3PL routing, catalog schema governance, idempotent webhook automation, and checkout margin forensics. Developed the **Synapse Botanicals** reference architecture, presented in a Capstone and five domain studies, with a local verification package reporting **152 passing checks** across five workstreams.

---

## CORE TECHNICAL SKILLS
* **Platforms & Commerce:** Shopify Plus Admin, ShipBob 3PL WMS, Gorgias Helpdesk, Matrixify (`MERGE` Protocol), Slack Webhooks
* **APIs & Automation:** GraphQL Admin API (Fulfillment Orders, `validationCreate`), Shopify Flow, REST Rate Limits, AWS SQS / DLQ Design
* **Verification & Forensics:** Node.js 24 (Built-in SQLite, BigInt Cent Math), Chrome DevTools (Fetch/XHR, Payload Triage), Regex Schema Linters
* **Operations & Reliability:** Finite State Machines (FSM), Two-Boundary PONR Governance, Sev-1 Incident Triage, CAPA / 5 Whys

---

## TECHNICAL PROJECTS & SYSTEMS ARCHITECTURE

### E-Commerce Systems Architecture — Synapse Botanicals | 2026
*Independent reference architecture modeling distributed fulfillment, catalog governance, automation reliability, and margin protection on Shopify Plus — supported by five offline verification workstreams reporting **152 passed checks, 3 skipped checks, and 0 failures** ([Portfolio](https://riovicsusas.github.io/portfolio/)).*

* **Asynchronous Order Coordination & Carrier Recovery (Capstone & Domain 1):** Modeled the 13:42 automated wave cutoff vs. 13:45 hard physical pick boundary (Order #35070, `$98.60` modeled recovery / `-$43.84` retained-sale contribution) and 133-second Freeze-First flow (Order #18404). Specified a **Hold–Update–Release** protocol verified in a local SQLite coordinator (`34/34` checks) alongside pinned UPS Delivery Intercept contract tests (`34/34` checks).
* **Multi-Node Routing & Split-Shipment Consolidation (Domain 2):** Designed and modeled whole-basket node selection across Allentown (`LOC-PA-01`) and Reno (`LOC-NV-02`) to contain split-carton handling (`$2.90` base parcel fee + postage), calculating **$8.30 (36.2%) modeled savings** per Bethlehem basket and **$997.40** across a paired 500-order cohort (`15/15` checks).
* **Bulk Catalog Governance & Matrixify Integrity (Domain 3):** Designed a pre-flight validation gate enforcing targeted column pruning paired with Matrixify `MERGE`, strict 12-digit string Modulo-10 checks, handle immutability, and a modeled 2-of-12 canary rollout (`58/58` local barcode & bitstream checks; quantified `$3,900` in potential bad-release exposure under declared assumptions).
* **Idempotent Automation & Retry Storm Containment (Domain 4):** Audited a 114-entry feedback trace saturating a 40-call REST bucket under 3-call burst amplification (`$2,162.50` modeled floor toll); engineered Flow negative guards, `operation_id` + `hold_owner` reconciliation, and AWS SQS Full Jitter retry smoothing (`8.33/s` first-retry expected rate).
* **Checkout Margin Defense & Cart Triage (Domain 5):** Derived whole-cent dynamic contribution floors (`$32.85` on Order #29863, reversing `-$4.52` to `+$30.24` — a **+$34.76 modeled swing**, or **+$34,760** across 1,000 modeled orders; `11/11` cost checks), specified fail-closed Shopify Validation (`validationCreate` with `blockOnFailure: true`), and documented <60s DevTools triage.

---

## PROFESSIONAL EXPERIENCE

### Customer Service Operations Associate — Amazon Operation Services Philippines, Inc.
*Cebu, Philippines | Jul 2023 – Dec 2023*
* Resolved mission-critical customer escalations spanning order lifecycles, payment authorizations, carrier tracking desynchronizations, and refund triage under strict SLA benchmarks.
* Coordinated directly with Amazon Fulfillment Centers and carrier dispatch teams to release stranded parcels and correct delivery anomalies.
* Consistently surpassed operational CSAT, QA, and First-Contact Resolution (FCR) targets, securing a permanent regularization offer within 5 months.

---

## EDUCATION

### Bachelor of Science in Electronics Engineering — Cebu Institute of Technology – University
*Cebu, Philippines | In progress*
* **Core Systems Focus:** Systems Engineering, Finite State Machines (FSM), Logic Circuit Design, Telemetry & Discrete Signals.

---

## CERTIFICATIONS & TECHNICAL CREDENTIALS
* **Gorgias Certified Administrator** & **Gorgias Certified Agent** — Gorgias Academy
* **Shopify Plus Platform Fundamentals & Store Operations** — Shopify Academy
* **Catalog Schema Governance, Incident Command & Root Cause Analysis (CAPA / 5 Whys)**
