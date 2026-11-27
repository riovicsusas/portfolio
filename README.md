# Riovic Matthew G. Susas — E-Commerce Systems Portfolio

**E-commerce systems analysis · Order-to-fulfillment reliability · Shopify and multi-node 3PL operations**

[View the portfolio](https://riovicsusas.github.io/portfolio/) · [Contact](https://riovicsusas.github.io/portfolio/contact/) · [Evidence summary](https://riovicsusas.github.io/portfolio/evidence/)

---

[![Verification and Pages deployment](https://github.com/riovicsusas/portfolio/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/riovicsusas/portfolio/actions/workflows/deploy.yml)

## Offline Evidence

The repository includes four offline workstreams for the active studies. They use declared scenario inputs, a local order coordinator, SQLite, integer-cent arithmetic, and a focused UPS contract fixture. They do not establish live Shopify, 3PL, carrier, or warehouse performance.

Run from the repository root with **Node.js 24**. No install, credentials, or network access is required.

```sh
node evidence/run_all.js
```

| Workstream | What it checks | Latest recorded passed | Skipped |
| --- | --- | ---: | ---: |
| [Freight](evidence/freight/summary.md) | Parcel allocation, handling, and modeled freight costs | 15 | 1 |
| [Order coordinator](evidence/latency/summary.md) | Idempotency, cutoff, reconciliation, and SQLite restart recovery | 34 | 0 |
| [Costs](evidence/costs/summary.md) | Bill of materials, cent rounding, contribution, and sensitivity | 11 | 0 |
| [Carrier recovery](evidence/carrier-recovery/summary.md) | Selected UPS contract fixtures and recovery state transitions | 34 | 2 |

The table reports the latest checked-in results for the retained workstreams. The previous aggregate manifest included a barcode suite now archived for Phase 2; it is preserved with that local archive. Running the command above creates a fresh aggregate manifest for the current four-suite runner. See the [evidence guide](evidence/README.md) for assumptions and limits.

## Featured Case Studies

The portfolio currently presents two domain studies and one integration Capstone. Each can be read on its own.

| Study | Technical Case Study | Read Online |
| :--- | :--- | :--- |
| **Capstone** | [Asynchronous Order Mutation](capstone/TechnicalStudy-Capstone-AsynchronousOrderMutation.md) | [Read Online](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=capstone/TechnicalStudy-Capstone-AsynchronousOrderMutation.md) |
| **Domain 1 — Order Lifecycle** | [The 'In Progress' UI Lie & Three Observability Blindspots](domain-1-order-lifecycle/TechnicalStudy-Domain1-UILieBlindspot.md) | [Read Online](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-1-order-lifecycle/TechnicalStudy-Domain1-UILieBlindspot.md) |
| **Domain 2 — Routing and Logistics** | [Multi-Node Logistics Routing](domain-2-order-routing/TechnicalStudy-Domain2-MultiNodeLogisticsRouting.md) | [Read Online](https://riovicsusas.github.io/portfolio/dossier-viewer/?file=domain-2-order-routing/TechnicalStudy-Domain2-MultiNodeLogisticsRouting.md) |

## Repository Layout

```text
├── index.html                    # Portfolio homepage
├── about/                        # Background, skills, and credentials
├── contact/                      # Contact channels
├── dossier-viewer/               # Interactive Markdown viewer and PDF export
├── latest/                       # Public activity log
├── projects/                     # Three featured case studies
├── resume/                        # Web résumé and downloadable PDF
├── evidence/                     # Active offline harness and reports
├── capstone/                     # Order mutation integration study
├── domain-1-order-lifecycle/     # Order state machine and cutoff rules
└── domain-2-order-routing/       # Multi-node logistics and freight
```

## Deployment

The [GitHub Actions workflow](.github/workflows/deploy.yml) runs the report-accounting checks and offline evidence harness on pushes. A passing run on `main` deploys the static portfolio to GitHub Pages.

---

*Riovic Matthew G. Susas · E-Commerce Systems Analyst*
