# Synapse Botanicals — Operations & Technical Architecture

> **Empirical staging simulation.** Synapse Botanicals is a technical operations sandbox used to stress-test e-commerce failure modes with synthetic customer and order fixtures. Commercial charges and financial outcomes are scenario inputs and calculations. The verification section distinguishes supplied trace excerpts, reproducible model results, and acceptance criteria for the designed controls. No production customer data or live fulfillment is represented.

## 1. Business Model and Planning Envelope

Synapse Botanicals models a DTC wellness catalog with consumables, accessories and component-based bundles. Planning load is 800–1,200 orders/day; 1,000/day is the common scale-projection input. The $85–$120 AOV range is a planning assumption. The routing experiment's separate 500-order cohort has $41,200 GMV, giving an AOV of $82.40.

Two-day ground delivery to 90% of contiguous-US demand is a service-design target. Qualification requires a demand-weighted ZIP/service transit matrix, processing calendars and exception coverage; it is not a measured carrier guarantee.

## 2. Scenario Catalog and Cost Basis

Distinct SKUs represent distinct products. Price and COGS below are fixed experiment inputs in USD; COGS excludes outbound fulfillment and payment processing. API product/variant IDs are resolved from the staging catalog and are not derived from SKU strings or order display names.

| SKU | Product / variant | Selling price | Unit COGS |
|---|---|---:|---:|
| SYN-NB-001 | NeuroFocus Alpha, 60ct | $48.00 | $14.40 |
| SYN-NB-002 | NeuroFocus PM, 60ct | $48.00 | $14.40 |
| SYN-FG-001 | Lion's Mane Gummies, Berry | $32.00 | $10.24 |
| SYN-FG-002 | Lion's Mane Gummies, Citrus | $32.00 | $10.24 |
| SYN-AT-001 | Ashwagandha Tincture | $34.00 | $8.16 |
| SYN-TNCT-AM | AM Focus Adaptogen Tincture, 60ml | $38.00 | $12.50 |
| SYN-FSTK-MY | Focus Stick Packs, Matcha Yuzu, 30-pack | $42.00 | $8.50 |
| SYN-TMBL-MO | Precision Tumbler, Matte Obsidian | $34.00 | $7.00 |
| SYN-ACC-WHSK | Micro-Foam Whisk | $16.00 | $3.10 |
| SYN-BNDL-MAO | Daily Protocol Starter Bundle | $98.00 | $28.40 |
| SYN-BD-001 | Executive Focus Bundle, separate fixture | $110.00 | $31.90 |

The Starter Bundle contains one stick pack, one AM tincture and one tumbler. Component cost is $8.50+$12.50+$7.00=$28.00; the model allocates $0.40 of consumable insert/material cost, giving $28.40. Components sell separately for $114.00; $98.00 is the bundle selling price. Product margin is ($98−$28.40)/$98=71.02%, before fulfillment, freight and processing. `SYN-AT-001` and `SYN-TNCT-AM` are separate fixtures, not conflicting prices for one variant.

Standard fulfillment is $2.50 base per parcel, $0.80 corrugate and $0.40 per pick after the first: `H = 2.90P + 0.40U`, where P is parcels and U is picked units. Protective packing adds $0.40 per parcel in the margin and Capstone scenarios. Thus a protected single-unit parcel costs $3.70, two units $4.10 and three units $4.50. Bundle material COGS and outbound protective-packing service are distinct costs. A virtual bundle expands to its three component picks.

## 3. Fulfillment Topology and Mutation Policy

| Node | ID | Routing role |
|---|---|---|
| Allentown, PA | LOC-PA-01 | Eastern candidate; eligibility depends on component-level availability |
| Reno, NV | LOC-NV-02 | Western candidate; eligibility depends on component-level availability |
| Showroom / test inventory | Non-commercial | Excluded from online commercial fulfillment routing |

No SKU is declared permanently node-exclusive. Each experiment embeds its relevant inventory condition. Catalog membership is not available-to-promise inventory. Before dispatch, reserve the full basket, rank feasible nodes, and verify the service promise. Carrier zones depend on origin and destination ZIPs, service and parcel characteristics.

Automatic customer edits stop at **wave release**. Later exceptions require warehouse confirmation of a physical stop. A printed label does not prove carrier possession; carrier intercept is considered only when shipment eligibility permits it. Adapter states such as QUEUED, WAVE_RELEASED and PACKED are normalized states, not asserted literal ShipBob API enums. Export delay, polling cadence, warehouse scheduling and retry timers are configured separately.

Returned dietary supplements are identified and quarantined for documented quality-control disposition. Synapse applies a conservative company policy against returning customer-delivered ingestibles to sellable stock. This disposal policy is separate from the regulatory requirements governing returned supplements in 21 CFR Part 111, Subpart N. Assess durable bundle components separately; inventory write-offs use cost, not retail price. Ordinary carrier tracking does not establish product temperature history. Product classification and the applicable quality procedure must be confirmed before operational deployment.

## 4. Integration Responsibilities

Shopify Plus owns commercial orders and fulfillment-order records. Shopify Flow initiates workflows; a durable middleware coordinator owns concurrency, retries and downstream reconciliation. ShipBob integration translates documented provider resources into normalized shipment state. Gorgias captures intent and presents confirmed operational state. Matrixify supports controlled catalog imports. Carrier integrations report eligibility and recovery status. Slack/PagerDuty receive exceptions.

A Shopify hold, a helpdesk tag and queue acceptance are separate from a confirmed physical WMS hold. Durable operation identity and version checks govern side effects; tags provide operator visibility. Secrets remain server-side.

## 5. Dossier Map and Evidence

1. **Domain 1:** Order state, PONR and safe mutation.
2. **Domain 2:** Multi-node routing and freight economics.
3. **Domain 3:** Catalog schema, barcode validation and import governance.
4. **Domain 4:** Event processing, Flow triage and retry ownership.
5. **Domain 5:** Cart/payment diagnosis and margin protection.
6. **Domain 6:** Helpdesk intent, authorization and operator actions.
7. **Capstone:** Cross-domain asynchronous order-mutation investigation.

Each dossier includes its working assumptions, calculation method and verification boundary. Architecture contracts and acceptance criteria describe the designed controls; they are not substitutes for authenticated provider test results. No standalone spreadsheet is required to understand the calculations.
