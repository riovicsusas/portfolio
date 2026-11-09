# Workstream D: Transparent BOM & Unit Cost Sensitivity Evidence

**Generated:** 2026-11-09T16:34:01.317Z  
**Classification:** Scenario Inputs & Deterministic Sensitivity Modeling  

---

## 1. Starter Bundle BOM Provenance & Cost Reconciliation

The unit costs across all technical dossiers are reconciled into a single transparent ledger:

| BOM Component Item | SKU Lineage | Individual Price | Direct Component COGS | Scenario Notes |
| :--- | :--- | :---: | :---: | :--- |
| **Focus Stick Packs (30ct)** | `SYN-FSTK-MY` / `BO` | $42.00 | **$8.50** | Component unit cost |
| **Adaptogen Tincture (60ml)** | `SYN-TNCT-AM` | $38.00 | **$12.50** | Component unit cost |
| **Precision Insulated Tumbler** | `SYN-TMBL-MO` / `BW` | $34.00 | **$7.00** | Component unit cost |
| **Subtotal (Raw Components)** | — | $114.00 (Unbundled) | **$28.00** | **Pure Component BOM** |
| **Custom Kitting Box & Inserts**| — | — | **$0.40** | Dedicated packaging / labor |
| **Total Kitted Bundle COGS** | `SYN-BNDL-MAO` / `BAB` | **$98.00 MSRP / $82 Promo** | **$28.40** | **Capstone Scenario Cost** |

> **Historical Contract Footnote**: Prior unbundled bulk procurement runs achieved a **$24.50** component baseline; landed container shipments incurred **$26.50**. The **$28.00 / $28.40** figures represent the authoritative active operational scenario inputs.

---

## 2. Baseline Unit Economics (MSRP vs Promotional Entry)

| Financial Metric | Standard MSRP ($98.00) | Promotional Price ($82.00) | Cohort Average ($82.40) |
| :--- | :---: | :---: | :---: |
| **Gross Revenue** | $98.00 | $82.00 | $82.40 |
| **COGS (Kitted)** | -$28.40 | -$28.40 | -$28.40 |
| **Gross Profit / Margin** | **$69.60 (71.02%)** | **$53.60 (65.37%)** | **$54.00 (65.53%)** |
| **3PL Pick/Pack Handling** | -$4.90 | -$4.90 | -$4.90 |
| **Standard Ground Freight** | -$6.50 | -$6.50 | -$6.50 |
| **Payment Processing (2.9% + $0.30)** | -$3.14 | -$2.68 | -$2.69 |
| **Net Dollar Contribution** | **+$55.06** | **+$39.52** | **+$39.91** |
| **Net Contribution Margin %** | **56.18%** | **48.20%** | **48.43%** |

---

## 3. Parametric Sensitivity Sweeps

### A. Component Cost Sensitivity (±20% Shift on Raw Ingredients)
| Component Shift | Raw BOM | Total COGS | MSRP Net Contrib ($) | MSRP Margin % | Promo Net Contrib ($) | Promo Margin % | Breakeven Floor |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **-20%** | $22.40 | $22.80 | +$60.66 | 61.9% | +$45.12 | 55.02% | **$35.53** |
| **-10%** | $25.20 | $25.60 | +$57.86 | 59.04% | +$42.32 | 51.61% | **$38.41** |
| **+0%** | $28.00 | $28.40 | +$55.06 | 56.18% | +$39.52 | 48.2% | **$41.30** |
| **+10%** | $30.80 | $31.20 | +$52.26 | 53.33% | +$36.72 | 44.78% | **$44.18** |
| **+20%** | $33.60 | $34.00 | +$49.46 | 50.47% | +$33.92 | 41.37% | **$47.06** |

### B. Outbound Freight Sensitivity (Local Zone 2 vs Cross-Country Zone 8)
| Freight Cost | Zone / Service Context | MSRP Net Contrib ($) | MSRP Margin % | Promo Net Contrib ($) | Promo Margin % | Breakeven Floor |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **$4.50** | Zone 1-2 Ground | +$57.06 | 58.22% | +$41.52 | 50.63% | **$39.24** |
| **$6.50** | Zone 1-2 Ground | +$55.06 | 56.18% | +$39.52 | 48.2% | **$41.30** |
| **$8.50** | Zone 5 Ground | +$53.06 | 54.14% | +$37.52 | 45.76% | **$43.36** |
| **$10.50** | Zone 5 Ground | +$51.06 | 52.1% | +$35.52 | 43.32% | **$45.42** |
| **$14.60** | Zone 8 Cross-Country | +$46.96 | 47.92% | +$31.42 | 38.32% | **$49.64** |
| **$17.80** | Zone 8 Cross-Country | +$43.76 | 44.65% | +$28.22 | 34.41% | **$52.94** |

---

## 4. Evidentiary Boundary
- **What this proves**: Reconciles all bundle pricing discrepancies across dossiers, transparently details the $28.00 vs $28.40 provenance, and proves the financial floor ($41.20 standard / $49.54 cross-country) below which discounts cause cash burn.
- **What remains outside scope**: Synapse Botanicals private audited historical general ledger tax filings and supplier contract invoices.