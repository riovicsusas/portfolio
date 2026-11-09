# Synapse Botanicals — Operations & Technical Architecture Blueprint

> [!NOTE] **Architectural Sandbox & Benchmark Context:**  
> Synapse Botanicals is an engineered reference architecture and technical operations sandbox built to model, stress-test, and benchmark distributed direct-to-consumer (DTC) systems. Customer identities and order fixtures are synthetic. Commercial costs are scenario inputs; calculations are reproducible. Local simulator measurements and pinned public API references are identified separately from supplied narrative telemetry. No carrier contract rate or production provider latency is established by the offline suite. This controlled environment enables verifiable failure-mode testing without exposing customer PII or proprietary merchant data.

---

## 1. Brand & Business Overview

**Synapse Botanicals** (`synapse-botanicals.myshopify.com`) is a high-growth, direct-to-consumer (DTC) functional wellness and cognitive longevity brand. The company formulates clean, nootropic-infused adaptogen tinctures, daily focus drink powders, and premium lifestyle accessories designed for daily sustained performance.

* **Business Model:** DTC E-Commerce with high subscription velocity + seasonal promotional flash sales.
* **Average Order Value (AOV):** \$85.00 – \$120.00 planning baseline (specific evaluated cohorts vary, e.g., \$82.40 across the 500-order multi-node routing cohort).
* **Target Delivery SLA:** 2-day ground shipping coverage to 90% of the contiguous United States via bi-coastal nodes (planning objective).
* **Order Velocity:** High daily order volume with significant promotional spikes (e.g., Black Friday, product drops, influencer campaigns).

---

## 2. Product Catalog Architecture

The catalog balances consumable, expiration-sensitive ingestibles with non-perishable branded merchandise across distinct inventory tracking profiles:

```mermaid
classDiagram
    class SynapseCatalog {
        +Consumables (Perishable / Lot-Tracked)
        +Hardware & Merchandise (Durable)
        +Bundled Kits (Virtual Parent SKUs)
    }
    class Consumables {
        Adaptogen Tincture 60ml (AM Focus / PM Restore) - $38.00 [COGS: $12.50]
        Focus Stick Packs 30-Pack (4 Flavors) - $42.00 [COGS: $8.50]
    }
    class Hardware_Merch {
        Precision Insulated Tumbler (3 Colors) - $34.00 [COGS: $7.00]
        Micro-Foam Electric Whisk - $16.00 [COGS: $3.10]
    }
    class Bundled_Kits {
        The Daily Protocol Starter Bundle - $82.00 Promotional Scenario / $98.00 Standard Scenario [COGS: $28.00 Component BOM / $28.40 Kitted Scenario]
    }
    SynapseCatalog --> Consumables
    SynapseCatalog --> Hardware_Merch
    SynapseCatalog --> Bundled_Kits
```

| Product Line | Format & SKU Handle | Variants | Unit Price | Unit COGS | Gross Margin |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **Adaptogen Tincture (60ml)** | `synapse-adaptogen-tincture-60ml` | AM Focus (Lion's Mane)<br/>PM Restore (Reishi & Ashwagandha) | \$38.00 | \$12.50 | 67.1% |
| **Focus Stick Packs (30-Pack)** | `synapse-focus-stick-packs-30-pack` | Matcha Yuzu, Blood Orange,<br/>Wild Blueberry, Crisp Green Apple | \$42.00 *(Comp \$48)* | \$8.50 | 79.8% |
| **Daily Protocol Starter Bundle** | `the-daily-protocol-starter-bundle` | AM/PM Routine Kit (`SYN-BNDL-MAO` / `BAB`) | \$82.00 *(Promotional Scenario)* / \$98.00 *(Standard Scenario)* | \$28.00 *(Component BOM)*<br/>\$28.40 *(Kitted Scenario)* | 65.4% – 71.0% |
| **Precision Insulated Tumbler** | `precision-insulated-tumbler-durable-merchandise` | Matte Obsidian, Bone White, Sage Green | \$34.00 | \$7.00 | 79.4% |
| **Micro-Foam Electric Whisk** | `micro-foam-electric-whisk` | Single Variant (`SYN-ACC-WHSK`) | \$16.00 | \$3.10 | 80.6% |

*(Note on Bundle Accounting: Raw component BOM cost is \$28.00: Focus Sticks \$8.50 + AM Tincture \$12.50 + Tumbler \$7.00. The \$28.40 Capstone scenario cost incorporates \$0.40 dedicated packaging and kitting materials. These are declared cost assumptions, not historical procurement contract values).*

---

## 3. Logistical Topology & Fulfillment Network

To support rapid, cost-effective domestic fulfillment, Synapse operates a **bi-coastal distributed 3PL warehousing model** synchronized via automated API webhooks:

```mermaid
flowchart TD
    Customer["DTC Customer (Checkout)"] --> Shopify["Shopify Core (Order Routing Engine)"]
    
    subgraph Warehouses["Distributed Fulfillment Nodes"]
        West["Synapse 3PL - West (Reno, NV)<br/>Primary West/Midwest Node<br/>Full Inventory Buffer"]
        East["Synapse 3PL - East (Allentown, PA)<br/>Secondary East Coast Node<br/>High-Velocity Consumables"]
        Showroom["Showroom / Testing HQ<br/>Internal R&D / Samples<br/>Commercial Stocking Disabled"]
    end
    
    Shopify -->|"Fulfillment Order 1 (Zone 1-4)"| West
    Shopify -->|"Fulfillment Order 2 (Zone 5-8)"| East
    Shopify -.->|"Stocking Disabled (not stocked)"| Showroom
```

1. **Synapse 3PL - West (Reno, NV) — Primary Node:**
   * Full catalog distribution authorization; houses complete consumable batches, hardware, and packaging stock.
   * Holds active on-hand inventory across all 12 variants, including exclusive on-hand allocation for Adaptogen Tinctures and Starter Bundles in the evaluated routing scenarios.
   * Fulfills Pacific, Mountain, and West-Central shipments within 1–2 transit days.
2. **Synapse 3PL - East (Allentown, PA) — Secondary Node:**
   * Authorized for distributed catalog fulfillment; maintains active on-hand stock for high-velocity consumables and merchandise (Focus Stick Packs, Tumblers, and Whisks) to minimize cross-country shipping zone surcharges.
   * Fulfills Mid-Atlantic, Northeast, and Southeast customer orders.
3. **Showroom / Testing HQ — R&D Node:**
   * Used strictly for product testing, VIP sample gifting, and marketing photoshoots.
   * Commercial customer stocking is disabled (`not stocked` status in inventory records) to prevent order leakage.

---

## 4. The Technical Stack & Integration Layer

The brand relies on an interconnected operational stack where data integrity, speed, and automation guardrails are paramount:

* **E-Commerce Platform & Core ERP:** **Shopify Plus** (Custom Online Store 2.0 Theme, Fulfillment Orders API, GraphQL admin mutations).
* **Fulfillment & WMS Middleware:** **ShipBob 3PL WMS** (Distributed multi-node warehousing across Reno and Allentown synchronized via asynchronous REST webhooks).
* **Frontline Customer Support & Automation:** **Gorgias Helpdesk** (HTTP integration webhooks, automated order holds, macro-driven tag sanitation, and customer address mutation safeguards).
* **Order & Inventory Routing:** Native Shopify Order Routing engine with strict deterministic rules: *Minimize split fulfillments* $\rightarrow$ *Closest location priority*.
* **Workflow Automation & Idempotency:** **Shopify Flow** (Fraud risk quarantine holds, VIP high-order value routing, automated tag hygiene, and zero-loop idempotency locks).
* **Data Engineering & Catalog Migrations:** **Matrixify (Excelify)** + Native CSV ingestion pipelines paired with custom pre-flight Python regex linters.
* **Incident Alerting & Telemetry:** **Slack Webhooks** (Real-time Sev-1 order routing alerts and inventory depletion thresholds).
* **Diagnostic & Observability Tooling:** **Chrome DevTools** (Storefront API / Cart AJAX payload triage), Order Timeline transaction forensics, and gateway authorization logs.

---

## 5. Core Operational Challenges (The TechOps Mandate)

Because Synapse Botanicals operates at the intersection of perishable health supplements, multi-location logistics, and high-velocity promotional marketing, the Technical Operations role enforces six primary operational disciplines across the architecture, synthesized by an integrated Capstone:

1. **Order State Machine & Point-of-No-Return Protocol (Domain 1):** Managing physical-to-digital order synchronization across Shopify and 3PL WMS, enforcing fulfillment holds, and defining irreversible operational cutoffs.
2. **Bi-Coastal Multi-Node Logistics & Freight Cost Optimization (Domain 2):** Preventing multi-node stockouts and misallocated split shipments that trigger redundant pick/pack and carrier freight surcharges.
3. **Enterprise Matrixify Migration & Barcode Schema Governance (Domain 3):** Enforcing strict schema governance and plain-text data typing to prevent catastrophic catalog corruptions (e.g. numeric coercion of 12-digit UPC barcodes or accidental handle mutations).
4. **Business Logic Automation & Webhook Recursion Triage (Domain 4):** Building event-driven workflows in Shopify Flow equipped with state-check guards, queue-level retries, and dead-letter queues.
5. **Algorithmic Margin Defense & Storefront Cart Diagnostics (Domain 5):** Auditing multi-tier discount combinations (Product, Order, and Shipping) to eliminate negative-margin coupon stacking, while isolating client-side cart exceptions and payment gateway errors.
6. **Frontline Helpdesk Automation & HTTP Webhook Actions (Domain 6):** Standardizing Gorgias macro payloads, automated order exception holds, and SLA-governed frontline response paths.
7. **Asynchronous Order Mutations & Distributed Webhook Failure Architecture (Capstone):** Synthesizing all foundational domains (D1–D6) into an empirical autopsy of distributed state divergence ("Zombie Orders") when asynchronous webhooks fail across system seams.

---

## 6. Reproducible Technical Evidence Package

The [offline Node.js suite](evidence/README.md) separates assumptions, computed outputs, measured simulator timings and public references. It records executed checks, failures and skips, runtime and source/input hashes. The retained sample run supplies detailed local execution records.

- [Freight](evidence/freight/summary.md): feasible synthetic shipment plans, conditional handling/cohort calculations and scale projections. Tariff verification is explicitly outside the executed checks.
- [Coordinator](evidence/latency/summary.md): local SQLite operation identity, cutoff, reconciliation, owned-hold release and post-effect process-restart assertions, with separately measured seeded workloads.
- [Barcodes](evidence/barcodes/summary.md): twelve synthetic SKU mappings, checksum and invalid-input tests, and shared-table UPC bitstream self-consistency. No physical or independent optical scan is asserted.
- [Costs](evidence/costs/summary.md): explicit $28.00 component BOM plus assumed $0.40 kitting material; integer-cent contribution branches and discount-floor sensitivity.
- [Recovery](evidence/carrier-recovery/summary.md): focused checks against a pinned official UPS contract and an event-driven local recovery model. No authenticated CIE request or actual interception is represented.

```bash
node evidence/run_all.js
```

Use `--full` for a larger local timing workload. Offline tests do not certify the merchant's private costs, actual provider latency, configured helpdesk automations, SQS deployment, warehouse actions or carrier billing.
