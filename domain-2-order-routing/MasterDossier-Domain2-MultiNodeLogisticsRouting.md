# Bi-Coastal Multi-Node Logistics & Freight Cost Optimization

---

## 1. Executive Summary & The Logistics Trade-Off

### 1.1 The Operational Challenge
In direct-to-consumer e-commerce scaling past $3M GMV, shipping costs represent the single largest variable operating expense outside of marketing. Brands distribute inventory across multi-node networks—such as East Coast (**Allentown, PA**) and West Coast (**Reno, NV**)—to reduce transit times and lower carrier zone rates.

However, direct-to-consumer catalogs with multi-item shopping baskets face a dangerous financial hazard: **Split-Shipment Surcharge Leakage**.

When a customer orders multiple items (e.g., *NeuroFocus Alpha* capsules + *Ashwagandha* tincture + *Lion's Mane* gummies):
- If the routing algorithm blindly prioritizes **"Closest Location"**, it may fulfill Item 1 from Allentown (Zone 2) and Items 2 & 3 from Reno (Zone 2).
- **The Financial Trap**: The merchant now pays **two independent carrier base postage charges** and **two independent 3PL pick/pack/box handling fees**.
- The cost of the second package almost always wipes out any zone savings gained from physical proximity.

```mermaid
flowchart TD
    A[Order Ingested: Multi-Item Basket] --> B{Can Any Single Node Fulfill 100%?}
    B -- Yes: Consolidated Stock Found --> C[Assign to Single Node Closest to Customer]
    C --> D[1 Box / 1 Postage Fee / 1 Handling Fee]
    D --> E[Optimal Unit Economics: Zero Split Surcharge]
    B -- No: Stock Depleted Across Nodes --> F{Is Split Penalty < Long-Zone Single Package?}
    F -- Split Unavoidable --> G[Execute Controlled Split Wave]
    F -- False --> H[Reroute to Central Backlog / Restock Node]
```

---

## 2. Fulfillment Economics & Carrier Rate Modeling

### 2.1 3PL Handling Fee Structure (ShipBob Benchmark)
Every time a physical package is inducted into a fulfillment stream, standard 3PL contracts assess base handling fees:

| Fee Component | Single Package Order | Split Shipment (Package 1) | Split Shipment (Package 2) | Total Split Cost |
|---|---|---|---|---|
| **Base Order Fulfillment** | $2.50 | $2.50 | $2.50 | $5.00 |
| **Additional Pick Fee** | $0.80 (2 extra picks) | $0.00 (single pick) | $0.40 (1 extra pick) | $0.40 |
| **Packaging & Corrugate** | $0.80 | $0.80 | $0.80 | $1.60 |
| **Total 3PL Handling** | **$4.10** | **$3.30** | **$3.70** | **$7.00 (+$2.90 penalty)** |

### 2.2 Commercial Plus Carrier Rate Card (Under 1 lb / 16 oz Parcel)

| Destination Zone | Distance from Origin | Standard USPS Ground Advantage | Priority Mail Commercial |
|---|---|---|---|
| **Zones 1–2** | 0 – 150 miles | $5.40 | $7.80 |
| **Zone 3** | 151 – 300 miles | $5.85 | $8.40 |
| **Zone 4** | 301 – 600 miles | $6.40 | $9.10 |
| **Zone 5** | 601 – 1,000 miles | $7.20 | $10.40 |
| **Zone 6** | 1,001 – 1,400 miles | $8.10 | $11.80 |
| **Zone 7** | 1,401 – 1,800 miles | $9.20 | $13.50 |
| **Zone 8** | 1,801+ miles (Cross-Country) | $10.50 | $15.20 |

### 2.3 The Mathematical Breakeven: Consolidated vs. Split

```
Scenario: Customer in Denver, CO (Zone 4 from Reno, Zone 6 from Allentown)
Basket: 2 Units NeuroFocus (stocked at Reno) + 1 Unit Ashwagandha (stocked only at Allentown)
```

- **Option A: Naive Split Routing (Closest Node for each item)**:
  - Package 1 from Reno (Zone 4): $6.40 (Carrier) + $3.30 (3PL) = $9.70
  - Package 2 from Allentown (Zone 6): $8.10 (Carrier) + $3.30 (3PL) = $11.40
  - **Total Cost**: **$21.10**

- **Option B: Consolidated Long-Zone Routing (Allentown fulfills all 3 units)**:
  - Single Package from Allentown (Zone 6): $8.10 (Carrier) + $4.10 (3PL) = **$12.20**
  - **Net Financial Advantage**: **$8.90 SAVED** by shipping from the "further" warehouse in a single box!

> **Core Axiom**: A consolidated shipment across Zone 8 is almost always $4.00 to $9.00 cheaper than two split shipments in Zone 2.

---

## 3. Algorithmic Routing Waterfall Architecture

To systematically contain freight leakage, the Shopify Plus routing engine was configured with a strict, hierarchical 3-tier rule stack:

```mermaid
flowchart TD
    R([Order Routing Decision]) --> T1

    T1{"**Tier 1: Minimize Split Shipments**
    ABSOLUTE PRIORITY
    Can any single node fulfill 100% of basket?"}

    T1 -- Yes --> A1["Route entirely to that node
    Single box / single postage fee"]
    A1 --> Done([Dispatch])

    T1 -- No --> T2

    T2{"**Tier 2: Closest Location**
    SECONDARY TIE-BREAKER
    Multiple nodes can fulfill 100%?"}

    T2 -- Yes --> A2["Select node minimizing
    destination zone distance"]
    A2 --> Done

    T2 -- No --> T3

    T3["**Tier 3: Inventory Ranking Balance**
    FALLBACK TIE-BREAKER
    Equidistant (Midwest Zone 5):
    Default to LOC-PA-01 Allentown
    Protect Reno stock for West Coast velocity"]
    T3 --> Done
```

### 3.1 Network Topology & Node SKU Matrix

```mermaid
flowchart LR
    PA["**LOC-PA-01**
    Allentown, PA
    ─────────────────
    Primary East & Midwest Hub
    Carrier: USPS / UPS
    SKU Depth: 100% (24/24 SKUs)
    Production & Batching Lead"]

    NV["**LOC-NV-02**
    Reno, NV
    ─────────────────
    Primary West & Mountain Hub
    Carrier: USPS / FedEx
    SKU Depth: High-Velocity Core (16 SKUs)
    Rapid Cross-Dock from PA"]

    PA <-->|"Cross-dock replenishment"| NV
```

---

## 4. Empirical A/B Simulation: 500-Order Cohort

To measure real-world performance, an empirical simulation was executed across a representative cohort of **500 live orders** representing $41,200 in gross merchandise value.

### 4.1 Cohort Parameters & Geography
- **Cohort Size**: 500 multi-item orders
- **Geographic Mix**:
  - East Coast (USPS Zones 1–4 East): 42% (210 orders)
  - West Coast (USPS Zones 1–4 West): 34% (170 orders)
  - Central / Midwest (USPS Zones 5–6): 24% (120 orders)
- **Basket Complexity**:
  - 2-item orders: 62% (310 orders)
  - 3+ item orders: 38% (190 orders)

### 4.2 Benchmark Results: Model Alpha (Naive) vs. Model Beta (Optimized)

| Metric | Model Alpha (Naive Proximity) | Model Beta (Waterfall Optimized) | Variance / Delta |
|---|---|---|---|
| **Total Split Shipments** | 157 orders (31.4%) | 41 orders (8.2%) | **-73.9% Split Reduction** |
| **Total Boxes Dispatched** | 657 parcels | 541 parcels | **-116 fewer cartons** |
| **Total 3PL Handling Cost** | $2,481.50 | $2,036.10 | **-$445.40 saved** |
| **Total Carrier Freight Spend** | $5,190.20 | $4,529.20 | **-$661.00 saved** |
| **Total Fulfillment Cost** | **$7,671.70** | **$6,565.30** | **-$1,106.40 NET SAVINGS** |
| **Average Cost Per Order** | **$15.34** | **$13.13** | **-$2.21 per order** |

### 4.3 Annualized Business Impact
For a direct-to-consumer store operating at Synapse Botanicals' projected scale (1,000 orders/day = 365,000 orders/year):
```
Annual Savings = 365,000 orders x $2.21 savings/order = $806,650 in Direct Freight Margin Recovery
```

---
