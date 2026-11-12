# Riovic Matthew G. Susas — Technical Operations Portfolio

**Systems Architecture · E-Commerce Infrastructure · Shopify Plus · Multi-Node 3PL Logistics**

[View live portfolio](https://riovicsusas.github.io/portfolio/) · [Contact](https://riovicsusas.github.io/portfolio/contact/)

---

[![Verification and Pages deployment](https://github.com/riovicsusas/portfolio/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/riovicsusas/portfolio/actions/workflows/deploy.yml)

## Automated Evidence Suite

The portfolio includes an offline verification harness with **152 passing automated checks** across five workstreams. It uses Node’s built-in SQLite for the order coordinator simulation, BigInt for exact cent arithmetic, and a pinned UPS Delivery Intercept OpenAPI contract for carrier recovery checks.

Run from the repository root with **Node.js 24**. The harness needs no npm install, credentials, or network access.

```sh
node evidence/run_all.js
```

| Workstream | What it verifies | Passed | Skipped |
| --- | --- | ---: | ---: |
| [Freight](evidence/freight/summary.md) | Parcel allocation, handling charges, and modeled freight costs | 15 | 1 |
| [Order coordinator](evidence/latency/summary.md) | Idempotency, cutoff and reconciliation rules, and SQLite restart recovery | 34 | 0 |
| [Barcodes](evidence/barcodes/summary.md) | UPC checksums, SKU mapping, invalid inputs, and bitstream round trips | 58 | 0 |
| [Costs](evidence/costs/summary.md) | Bill of materials, cent rounding, contribution margin, and sensitivity | 11 | 0 |
| [Carrier recovery](evidence/carrier-recovery/summary.md) | Pinned UPS OpenAPI contract fixtures and recovery state transitions | 34 | 2 |
| **Total** | **0 failures** | **152** | **3** |

The [recorded smoke run](evidence/latest_run.json) covers local simulations and fixtures. See the [evidence guide](evidence/README.md) for assumptions, provenance, and the larger workload.

---

## 🗂️ Master Flagship Dossiers & Case Studies

Each dossier is an in-depth systems specification combining operational SOPs, mathematical decision engines, simulation run sheets, and forensic incident autopsies.

| Domain | Master Dossier | Interactive Viewer |
| :--- | :--- | :--- |
| **★ Capstone** | [`MasterDossier-Capstone-AsynchronousOrderMutation.md`](capstone/MasterDossier-Capstone-AsynchronousOrderMutation.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=capstone/MasterDossier-Capstone-AsynchronousOrderMutation.md) |
| **Domain 1: Order Lifecycle** | [`MasterDossier-Domain1-OrderStateMachineAndPONR.md`](domain-1-order-lifecycle/MasterDossier-Domain1-OrderStateMachineAndPONR.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-1-order-lifecycle/MasterDossier-Domain1-OrderStateMachineAndPONR.md) |
| **Domain 2: Routing & Logistics** | [`MasterDossier-Domain2-MultiNodeLogisticsRouting.md`](domain-2-order-routing/MasterDossier-Domain2-MultiNodeLogisticsRouting.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-2-order-routing/MasterDossier-Domain2-MultiNodeLogisticsRouting.md) |
| **Domain 3: Bulk Data** | [`MasterDossier-Domain3-BulkCatalogSchemaGovernance.md`](domain-3-bulk-data-management/MasterDossier-Domain3-BulkCatalogSchemaGovernance.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-3-bulk-data-management/MasterDossier-Domain3-BulkCatalogSchemaGovernance.md) |
| **Domain 4: Automation** | [`MasterDossier-Domain4-WebhookAutomationAndFlowTriage.md`](domain-4-business-automation/MasterDossier-Domain4-WebhookAutomationAndFlowTriage.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-4-business-automation/MasterDossier-Domain4-WebhookAutomationAndFlowTriage.md) |
| **Domain 5: Diagnostics** | [`MasterDossier-Domain5-MarginDefenseAndCartDiagnostics.md`](domain-5-technical-diagnosis/MasterDossier-Domain5-MarginDefenseAndCartDiagnostics.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-5-technical-diagnosis/MasterDossier-Domain5-MarginDefenseAndCartDiagnostics.md) |
| **Domain 6: Helpdesk** | [`MasterDossier-Domain6-FrontlineHelpdeskAutomation.md`](domain-6-frontline-helpdesk/MasterDossier-Domain6-FrontlineHelpdeskAutomation.md) | [Open in Viewer →](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-6-frontline-helpdesk/MasterDossier-Domain6-FrontlineHelpdeskAutomation.md) |

> 💡 **Print / Save as PDF:** Every document in the interactive viewer can be saved as a print-optimized PDF with one click using the **"Save as PDF"** button (or `Ctrl+P`).

---

## 🏗️ Multi-Page Portfolio Structure

```text
├── index.html                      # Homepage
├── about/index.html                # Bio, certifications, and skills
├── contact/index.html              # Contact channels
├── dossier-viewer/index.html       # Markdown, equations, diagrams, and PDF export
├── latest/index.html               # Portfolio updates
├── projects/index.html             # Project catalogue and case studies
├── resume/                         # Résumé page and downloadable PDF
├── testimonials/index.html         # Client reviews and impact metrics
├── assets/hero/                    # Built homepage assets
├── components/ and src/            # Homepage React source
├── css/ and js/                    # Shared styles and static page scripts
├── capstone/                       # Cross-domain capstone dossier
├── domain-1-order-lifecycle/       # Order state machine and cutoff rules
├── domain-2-order-routing/         # Multi-node logistics and freight
├── domain-3-bulk-data-management/  # Bulk catalog schema and migration
├── domain-4-business-automation/  # Webhook triage and Shopify Flow
├── domain-5-technical-diagnosis/   # Cart diagnostics and margin defense
├── domain-6-frontline-helpdesk/    # Gorgias and HTTP automation
└── evidence/                      # Offline harness, fixtures, and reports
```

---

## 🚀 Deployment (GitHub Pages)

The [GitHub Actions workflow](.github/workflows/deploy.yml) runs the report accounting tests and offline evidence suite on every branch push. When verification passes on `main`, it deploys the static site from a fresh checkout with the committed homepage assets.

---

*Author: Riovic Matthew G. Susas · TechOps Systems Analyst & E-Commerce Architect*
