/**
 * Synapse Botanicals - Technical Operations & System Architecture Data
 * 6 Core Curriculum Domains + Capstone Cross-Domain Investigation
 */
const DEFAULT_PROJECTS = [
  {
    "id": "d1-order-lifecycle",
    "folder": "Order Lifecycle & State Machine",
    "folderIcon": "ph-arrows-clockwise",
    "icon": "ph-arrows-clockwise",
    "title": "Order Exception Mutation Protocol",
    "category": "Standard Operating Procedure (SOP)",
    "subtitle": "Parent Specification — Fulfillment Holds & Downstream 3PL Synchronization",
    "short": "Mandatory protocol for intercepting, modifying, and canceling orders across multi-node 3PL networks without desynchronization.",
    "overview": "Mandatory operational standard for intercepting, modifying, and canceling active customer orders. Enforces the zero-tolerance 'Freeze First' fulfillment hold protocol, eliminating race conditions across multi-node 3PL warehouses (Allentown & Reno) and preventing downstream mis-ships.",
    "fullOverview": "This Master Standard Operating Procedure (SOP) establishes the mandatory technical and operational protocol for intercepting, modifying, and canceling active orders across the Synapse Botanicals DTC fulfillment network. It codifies the zero-tolerance 'Freeze First' fulfillment hold mandate to eliminate race conditions between customer support updates and asynchronous 15-minute 3PL warehouse polling scripts. The document governs CASS-standardized shipping address corrections, 1:1 consumable flavor exchanges, financial ledger reconciliations, downstream warehouse queue verifications, and strict quarantine scrap protocols for ingestible botanicals under FDA 21 CFR Part 111.",
    "dossierUrl": "domain-1-order-lifecycle/MasterDossier-Domain1-OrderStateMachineAndPONR.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Admin",
      "Order State Machine",
      "Fulfillment Holds",
      "3PL WMS API",
      "FDA 21 CFR Part 111",
      "Sanitary Write-Offs"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 1.1 Parent SOP ➔ Domain 1.2 PONR Master Matrix ➔ Domain 1.3 Simulation Run Sheet ➔ Domain 2.1 Multi-Node Routing",
      "architectureScope": [
        {
          "name": "Shopify Admin & Fulfillment Orders API",
          "role": "State Machine Single Source of Truth (SSOT)"
        },
        {
          "name": "3PL WMS Network (Allentown LOC-PA-01 & Reno LOC-NV-02)",
          "role": "Physical wave allocation, picking, and carrier label generation"
        },
        {
          "name": "Gorgias Helpdesk & HTTP Actions",
          "role": "Zero-latency Rule R-01 customer address hold execution"
        },
        {
          "name": "FDA 21 CFR Part 111 Mandate",
          "role": "Consumable dietary supplement quarantine & sanitary destruction"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.2 Matrix",
          "title": "Matrix — Order State Point of No Return",
          "role": "Codifies the 9 discrete order lifecycle states and establishes the immutable Point of No Return (PONR) boundary at LABEL_PRINTED / PACKED."
        },
        {
          "code": "Domain 1.3 Audit",
          "title": "Audit — Order State Simulation Run Sheet",
          "role": "Empirical 25-order run sheet validating the 'Freeze First' hold protocol, tax balance adjustments, and restock flags across all order mutation types."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Defines whole-basket allocation and the Bethlehem stock fixture, with the tincture available only at Reno."
        }
      ]
    }
  },
  {
    "id": "d1-order-state-ponr",
    "folder": "Order Lifecycle & State Machine",
    "folderIcon": "ph-arrows-clockwise",
    "icon": "ph-shield-warning",
    "title": "Order State Point of No Return",
    "category": "Decision Matrix & Risk Governance Framework",
    "subtitle": "Dual-State Mapping: Shopify Fulfillment Orders API vs. 3PL Physical WMS Lifecycle",
    "short": "Authoritative dual-state decision matrix mapping Shopify Fulfillment Orders API states to physical 3PL warehouse phases.",
    "overview": "Authoritative dual-state decision matrix mapping Shopify Fulfillment Orders API states to physical 3PL warehouse phases (Phases 1–6). Establishes the hard Point of No Return (PONR) at LABEL_PRINTED / PACKED and defines financial, tax, and FDA 21 CFR Part 111 lot quarantine rules.",
    "fullOverview": "This authoritative risk governance framework establishes the bidirectional state engine between Shopify's native Fulfillment Orders API and multi-node 3PL Warehouse Management Systems (WMS) across Allentown (LOC-PA-01) and Reno (LOC-NV-02). It codifies the immutable Point of No Return (PONR) threshold where digital mutations terminate and physical carrier intercepts begin, establishes regulatory lot-quarantine standards under FDA 21 CFR Part 111 preventing biological contamination, and defines financial ledger reconciliation rules for multi-state tax shifts and gateway authorizations.",
    "dossierUrl": "domain-1-order-lifecycle/MasterDossier-Domain1-OrderStateMachineAndPONR.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Fulfillment Orders API",
      "3PL WMS (ShipStation / ShipBob / Extensiv)",
      "Point of No Return (PONR)",
      "FDA 21 CFR Part 111",
      "Avalara / Shopify Tax",
      "Carrier API Intercepts"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 1.1 Parent SOP ➔ Domain 1.2 PONR Master Matrix (Current) ➔ Domain 1.3 Simulation Run Sheet ➔ Domain 2.1 Multi-Node Routing",
      "architectureScope": [
        {
          "name": "Shopify Fulfillment Orders API",
          "role": "State Machine Single Source of Truth (SSOT) & hold management"
        },
        {
          "name": "3PL Physical WMS Lifecycle (Phases 1–6)",
          "role": "Wave batching, tote picking, barcode verification, and manifest"
        },
        {
          "name": "FDA 21 CFR Part 111 Mandate",
          "role": "Dietary supplement lot quarantine and sanitary scrap protocol"
        },
        {
          "name": "Avalara / Shopify Tax Engine",
          "role": "Automated destination-based sales tax recalculation and adjustments"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.1 SOP",
          "title": "SOP — Order Exception Mutation Protocol",
          "role": "Master operating procedure defining the Freeze First fulfillment hold mandate and 3PL sync steps."
        },
        {
          "code": "Domain 1.3 Audit",
          "title": "Audit — Order State Simulation Run Sheet",
          "role": "Empirical 25-order run sheet validating PONR gatekeeper rules, tax reconciliation, and scrap workflows."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Governs bi-coastal warehouse allocation, priority rules, and regional node assignments."
        }
      ]
    }
  },
  {
    "id": "d1-order-state-simulation",
    "folder": "Order Lifecycle & State Machine",
    "folderIcon": "ph-arrows-clockwise",
    "icon": "ph-clipboard-text",
    "title": "Order State Simulation Run Sheet",
    "category": "Simulation Audit & Execution Run Sheet",
    "subtitle": "Production Test Log & Ledger Verification — 25 Order Mutation Scenarios",
    "short": "Empirical production simulation testing the 'Freeze First' fulfillment hold protocol, downstream 3PL sync, and tax recalculations.",
    "overview": "Empirical production simulation testing the 'Freeze First' fulfillment hold protocol, downstream 3PL queue synchronization, address mutations, SKU swaps, and tax ledger recalculations with 100% test pass rate.",
    "fullOverview": "Complete forensic test run sheet detailing live order mutation simulations across Synapse Botanicals' product catalog. Verifies hold placement latency (< 120s), carrier intercept execution windows, tax recalculation deltas across PA and CA destination jurisdictions, and automated sanitary inventory quarantine ('No Restock') for returned consumable stick packs and tinctures under FDA 21 CFR Part 111.",
    "dossierUrl": "domain-1-order-lifecycle/MasterDossier-Domain1-OrderStateMachineAndPONR.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Admin & REST API",
      "3PL WMS Simulator",
      "USPS CASS Standardizer",
      "Gorgias Macro Automation",
      "Stripe / Shopify Payments Gateway",
      "FDA Lot Quarantine Log"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 1.1 Parent SOP ➔ Domain 1.2 PONR Master Matrix ➔ Domain 1.3 Simulation Run Sheet (Current) ➔ Domain 2.1 Multi-Node Routing",
      "architectureScope": [
        {
          "name": "Shopify Admin & Fulfillment Orders API",
          "role": "Atomic hold lock and post-checkout payload mutation engine"
        },
        {
          "name": "3PL Multi-Node Network (LOC-PA-01 & LOC-NV-02)",
          "role": "Split-shipment fulfillment execution and batch queue hold enforcement"
        },
        {
          "name": "USPS CASS Standardizer",
          "role": "Delivery point validation, ZIP+4 enhancement, and DPV confirmation"
        },
        {
          "name": "FDA 21 CFR Part 111 Compliance Vault",
          "role": "Lot tracking and sanitary scrap verification on returned consumable inventory"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.1 SOP",
          "title": "SOP — Order Exception Mutation Protocol",
          "role": "Establishes the step-by-step Freeze First operational workflow and helpdesk triage."
        },
        {
          "code": "Domain 1.2 Matrix",
          "title": "Matrix — Order State Point of No Return",
          "role": "Defines the exact phase gates, PONR line, and tax recalculation requirements tested in this audit."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Provides the underlying bi-coastal warehouse allocation and split-shipment baseline."
        }
      ]
    }
  },
  {
    "id": "d2-routing-spec",
    "folder": "Inventory & Order Routing Logic",
    "folderIcon": "ph-arrows-split",
    "icon": "ph-tree-structure",
    "title": "Multi-Node Routing Engine Spec",
    "category": "Systems Engineering & Routing Specification",
    "subtitle": "Whole-Basket Routing & Rule Governance — Allentown and Reno",
    "short": "Architectural specification for Shopify Native Order Routing, multi-node allocation rules, and split-shipment containment.",
    "overview": "Routing specification for Allentown and Reno. Check whether one warehouse can fill the basket, compare eligible plans on cost and delivery, then reserve the chosen stock.",
    "fullOverview": "In the Bethlehem, PA fixture, the closest-stocked rule sends two stick packs from nearby Allentown and the tincture from Reno. Reno already has to ship the tincture and has both stick packs in stock. The proposed routing waterfall checks the basket as a unit, compares the rated parcel costs against the delivery promise, and rechecks stock before reservation.",
    "dossierUrl": "domain-2-order-routing/MasterDossier-Domain2-MultiNodeLogisticsRouting.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Order Routing",
      "Multi-Node Fulfillment",
      "Location Priority",
      "Reservation Checks",
      "3PL WMS Integration",
      "Split-Shipment Minimization"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 1.1 Order Exception SOP ➔ Domain 2.1 Routing Engine Spec (Current) ➔ Domain 2.2 Cost Optimization Matrix ➔ Domain 2.3 Paired-Cohort Analysis",
      "architectureScope": [
        {
          "name": "Shopify Native Order Routing Engine",
          "role": "Built-in rule ordering and custom ranking hooks for eligible fulfillment locations"
        },
        {
          "name": "Allentown DC (LOC-PA-01)",
          "role": "Nearby warehouse for Bethlehem with two stick packs and no tincture in the fixture"
        },
        {
          "name": "Reno Hub (LOC-NV-02)",
          "role": "Cross-country warehouse with enough stock to ship the full Bethlehem basket"
        },
        {
          "name": "Shopify Inventory API",
          "role": "Inventory inputs for checking availability before reservation"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.1 SOP",
          "title": "SOP — Order Exception Mutation Protocol",
          "role": "Provides the fulfillment hold protocol required prior to manual location reassignment."
        },
        {
          "code": "Domain 2.2 Matrix",
          "title": "Matrix — Order Routing Cost Optimization",
          "role": "Supplies the breakeven financial model balancing split handling fees against cross-country postage."
        },
        {
          "code": "Domain 3.1 SOP",
          "title": "SOP — Bulk Catalog Migration & Hygiene",
          "role": "Governs warehouse-specific inventory provisioning across LOC-PA-01 and LOC-NV-02."
        }
      ]
    }
  },
  {
    "id": "d2-routing-matrix",
    "folder": "Inventory & Order Routing Logic",
    "folderIcon": "ph-arrows-split",
    "icon": "ph-calculator",
    "title": "Order Routing Cost Optimization",
    "category": "Algorithmic Evaluation & Cost Optimization",
    "subtitle": "Decision Engine — Logistics Economics & Breakeven Analysis",
    "short": "Mathematical decision engine balancing 3PL split-shipment fees against cross-country carrier postage zones.",
    "overview": "Compares the cost of a local Allentown parcel plus a Reno parcel with the cost of shipping the full Bethlehem basket from Reno.",
    "fullOverview": "The fixed-rate model puts the Bethlehem split at $22.90 and one Reno box at $14.60. Consolidation avoids $5.40 in postage and $2.90 in handling under the same delivery promise. If the larger Reno box raises postage by $8.30, the plans tie.",
    "dossierUrl": "domain-2-order-routing/MasterDossier-Domain2-MultiNodeLogisticsRouting.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Logistics Economics",
      "Modeled Carrier Zones",
      "Parcel Re-Rating",
      "3PL Handling Fees",
      "Breakeven Analysis",
      "Margin Preservation"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 2.1 Routing Spec ➔ Domain 2.2 Cost Optimization Matrix (Current) ➔ Domain 2.3 Benchmark Analysis ➔ Domain 5.2 Margin Protection",
      "architectureScope": [
        {
          "name": "Carrier Scenario Rates",
          "role": "Fixed postage inputs by modeled zone"
        },
        {
          "name": "3PL Handling Model",
          "role": "Base handling and packaging per parcel, plus picks after the first"
        },
        {
          "name": "Shopify Routing Configuration",
          "role": "Implementation of cost-optimal split vs. proximity directives"
        },
        {
          "name": "Financial Unit Economics Ledger",
          "role": "Gross margin and contribution margin impact modeling"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Defines the physical distribution node topology and SKU allocation evaluated in this engine."
        },
        {
          "code": "Domain 2.3 Analysis",
          "title": "Case Study — Multi-Location Routing Optimization",
          "role": "Extends the handling arithmetic to a separate 500-order fixture with declared split counts and freight totals."
        },
        {
          "code": "Domain 3.2 Matrix",
          "title": "Matrix — Catalog Data Schema & Validation",
          "role": "Provides catalog attributes for production package rating."
        }
      ]
    }
  },
  {
    "id": "d2-routing-casestudy",
    "folder": "Inventory & Order Routing Logic",
    "folderIcon": "ph-arrows-split",
    "icon": "ph-chart-line-up",
    "title": "Multi-Location Routing Optimization",
    "category": "Modeled Logistics & Financial Analysis",
    "subtitle": "Bethlehem Basket and 500-Order Paired-Cohort Model",
    "short": "The Bethlehem basket costs $8.30 less in one box. A separate 500-order model calculates $997.40 in savings.",
    "overview": "Compares two Bethlehem parcel plans, then models fulfillment spend for the same 500 orders under two sets of split and freight inputs.",
    "fullOverview": "For Bethlehem, the proximity-only rule splits the basket between Allentown and Reno. One box from Reno costs $14.60 instead of $22.90. In the separate cohort, Model Alpha has 157 splits and Model Beta has 41. Given the supplied freight totals, 116 fewer parcels and $661.00 less freight produce $997.40 in modeled savings.",
    "dossierUrl": "domain-2-order-routing/MasterDossier-Domain2-MultiNodeLogisticsRouting.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Paired-Cohort Model",
      "Split Shipment Containment",
      "Carrier Zone Distribution",
      "Freight Cost Auditing",
      "Delivery Promise",
      "Operational ROI"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 2.1 Routing Spec ➔ Domain 2.2 Cost Engine ➔ Domain 2.3 Paired-Cohort Analysis (Current) ➔ Capstone Portfolio Defense",
      "architectureScope": [
        {
          "name": "Offline Freight Fixture",
          "role": "Reproduces the nearest-stocked split and whole-basket alternative"
        },
        {
          "name": "Paired-Cohort Freight Inputs",
          "role": "Compares declared freight totals across 500 matching orders"
        },
        {
          "name": "Warehouse Pick/Pack Model",
          "role": "Calculates handling from parcel and unit counts"
        },
        {
          "name": "Delivery Promise",
          "role": "Both Bethlehem plans assume the selected service can meet the same promise"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Describes the baseline and whole-basket policies used in the Bethlehem comparison."
        },
        {
          "code": "Domain 2.2 Matrix",
          "title": "Matrix — Order Routing Cost Optimization",
          "role": "Supplies the unit economics and rate cards against which simulation results were reconciled."
        },
        {
          "code": "Domain 1.3 Audit",
          "title": "Audit — Order State Simulation Run Sheet",
          "role": "Verifies that multi-node allocation holds maintain data integrity across split lines."
        }
      ]
    },
    "isCaseStudy": true,
    "domainsUsed": [
      "Domain 2: Inventory & Order Routing Logic",
      "Domain 1: Order Lifecycle & State Machine",
      "Domain 3: Bulk Catalog Management"
    ]
  },
  {
    "id": "d3-catalog-sop",
    "folder": "Bulk Data Management & Migration",
    "folderIcon": "ph-database",
    "icon": "ph-database",
    "title": "Bulk Catalog Migration & Hygiene Protocol",
    "category": "Standard Operating Procedure (SOP)",
    "subtitle": "Parent Specification — Zero-Corruption Bulk Data Governance & Matrixify Workflows",
    "short": "Master operational standard for exporting, mutating, and re-importing enterprise catalog data without barcode truncation or SEO breaks.",
    "overview": "Master operational protocol for bulk catalog exports, audits, mutations, and re-imports. Mandates strict Google Sheets formatting controls, Matrixify non-destructive MERGE commands, canary batch deployments, and 3PL barcode verification.",
    "fullOverview": "This Master SOP codifies the enterprise data hygiene standards for managing Synapse Botanicals' product catalog. It establishes strict procedural safeguards against catastrophic catalog import errors: scientific notation barcode truncation, accidental handle mutation (broken SEO and 404s), custom metafield type mismatches, and destructive REPLACE wipes overwriting live Available-to-Sell (ATS) inventory counts. The protocol enforces mandatory pre-import database backups, Google Sheets raw text handling, 10% canary batch validation, and post-import 3PL physical scanner verification.",
    "dossierUrl": "domain-3-bulk-data-management/MasterDossier-Domain3-BulkCatalogSchemaGovernance.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Matrixify (Excelify)",
      "Catalog Data Hygiene",
      "Barcode Protection (UPC-A)",
      "SEO Handle Preservation",
      "Canary Deployment Gates",
      "Rollback Safeguards"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 3.1 Parent SOP (Current) ➔ Domain 3.2 Schema Validation Matrix ➔ Domain 3.3 Mutation Run Sheet ➔ Domain 2.1 Routing Alignment",
      "architectureScope": [
        {
          "name": "Shopify GraphQL Admin API & Matrixify",
          "role": "High-throughput batch export/import and non-destructive MERGE execution"
        },
        {
          "name": "Google Sheets Data Workspace",
          "role": "Mandatory plaintext environment preventing automatic numeric truncation"
        },
        {
          "name": "3PL WMS Barcode Database",
          "role": "Physical scanner sync for UPC-A, SKU, and lot-tracked variants"
        },
        {
          "name": "Storefront URL Index & Routing",
          "role": "Preservation of 301 redirects, handle slugs, and collection linkages"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 3.2 Matrix",
          "title": "Matrix — Catalog Data Schema & Validation",
          "role": "Provides the field-level data dictionary, regex formulas, and validation gates enforced in this SOP."
        },
        {
          "code": "Domain 3.3 Audit",
          "title": "Audit — Bulk Catalog Mutation Run Sheet",
          "role": "Empirical execution log documenting the step-by-step migration of 12 catalog variants under this protocol."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Relies on accurate catalog weight and inventory location mapping maintained by this SOP."
        }
      ]
    }
  },
  {
    "id": "d3-catalog-matrix",
    "folder": "Bulk Data Management & Migration",
    "folderIcon": "ph-database",
    "icon": "ph-table",
    "title": "Catalog Data Schema & Validation Governance",
    "category": "Technical Decision & Validation Engine",
    "subtitle": "Governance Matrix — Master Data Dictionary, Regex Formulas & Hazard Gates",
    "short": "Field-level data dictionary and automated validation formulas preventing barcode corruption and schema drift.",
    "overview": "Comprehensive technical governance matrix establishing field-level schemas, regex audit formulas, mutation risk classifications, and automated validation gates for all bulk catalog operations across Shopify and 3PL WMS.",
    "fullOverview": "This technical governance matrix defines the mandatory schema specifications for all 24 critical product and variant fields in the Synapse Botanicals catalog. It categorizes each field into Hazard Tiers (Hazard Tier 1: Barcode, Handle, Variant ID, Inventory Quantity; Hazard Tier 2: SKU, Price, Cost, Weight; Hazard Tier 3: Metafields, Tags, Descriptions), provides plug-and-play Google Sheets audit formulas (e.g. 12-digit UPC verification regex, lowercase-hyphenated handle syntax validators), and codifies exact rollback procedures for failed import batches.",
    "dossierUrl": "domain-3-bulk-data-management/MasterDossier-Domain3-BulkCatalogSchemaGovernance.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Data Dictionary",
      "Hazard Risk Classification",
      "Regex Audit Formulas",
      "UPC-A Barcode Integrity",
      "Metafield Typing",
      "Rollback Playbooks"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 3.1 Parent SOP ➔ Domain 3.2 Validation Matrix (Current) ➔ Domain 3.3 Mutation Run Sheet ➔ Domain 2.2 Cost Engine",
      "architectureScope": [
        {
          "name": "Shopify Product Catalog Data Model",
          "role": "Core schema definitions across products, variants, and metafield definitions"
        },
        {
          "name": "Spreadsheet Audit Formula Toolkit",
          "role": "Pre-import automated validation formulas (LEN, REGEXMATCH, ISNUMBER)"
        },
        {
          "name": "Matrixify Field Mapping Engine",
          "role": "Column header validation and data type coercion rules"
        },
        {
          "name": "Warehouse Scanner Protocol",
          "role": "GS1/UPC barcode validation standards for fulfillment intake"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 3.1 SOP",
          "title": "SOP — Bulk Catalog Migration & Hygiene",
          "role": "Establishes the operational workflows that execute against this validation matrix."
        },
        {
          "code": "Domain 3.3 Audit",
          "title": "Audit — Bulk Catalog Mutation Run Sheet",
          "role": "Empirically tests all regex validation formulas against a live catalog mutation cohort."
        },
        {
          "code": "Domain 5.1 SOP",
          "title": "SOP — Technical Diagnosis & Audit Logging",
          "role": "Coordinates catalog pricing and variant identifiers with storefront checkout diagnostics."
        }
      ]
    }
  },
  {
    "id": "d3-catalog-audit",
    "folder": "Bulk Data Management & Migration",
    "folderIcon": "ph-database",
    "icon": "ph-file-text",
    "title": "Bulk Catalog Mutation Run Sheet",
    "category": "Empirical Simulation & Execution Log",
    "subtitle": "Proof-of-Execution — 12-SKU Controlled Catalog Restructure & Metafield Injection",
    "short": "Production test log documenting a zero-downtime, zero-error catalog mutation across 12 product variants.",
    "overview": "Production execution run sheet documenting a live, controlled 12-variant catalog mutation. Demonstrates 100% barcode preservation, zero SEO handle drift, successful custom metafield injection, and zero inventory count discrepancy.",
    "fullOverview": "This execution run sheet records the forensic step-by-step execution of a major catalog restructure for Synapse Botanicals. Over a 90-minute operational window, the run sheet logs the pre-import snapshot, spreadsheet formula audit, canary batch import (SKU SYN-BNDL-MAO), full batch execution via Matrixify Command: MERGE, and multi-point verification. The audit verifies 100% preservation of 12-digit barcodes, flawless injection of custom nutritional metafields, zero 404 URL errors across storefront handles, and zero desync of Available-to-Sell stock counts across Allentown and Reno.",
    "dossierUrl": "domain-3-bulk-data-management/MasterDossier-Domain3-BulkCatalogSchemaGovernance.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Execution Run Sheet",
      "Matrixify Canary Import",
      "Spreadsheet Formula Audit",
      "Metafield Migration",
      "Inventory Ledger Verification",
      "Zero-Defect Audit"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 3.1 Parent SOP ➔ Domain 3.2 Validation Matrix ➔ Domain 3.3 Mutation Run Sheet (Current) ➔ Domain 1.1 State Machine",
      "architectureScope": [
        {
          "name": "Matrixify Batch Processing Engine",
          "role": "Execution of canary (10%) and master (100%) MERGE operations"
        },
        {
          "name": "Shopify GraphQL Admin API",
          "role": "Live product payload verification and storefront cache invalidation"
        },
        {
          "name": "3PL Physical Dock Receiving",
          "role": "Hardware barcode scanner verification on warehouse floor"
        },
        {
          "name": "Google Search Console & Theme Accordion",
          "role": "Storefront URL status code 200 checks and metafield display verification"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 3.1 SOP",
          "title": "SOP — Bulk Catalog Migration & Hygiene",
          "role": "Supplied the procedural playbook executed step-by-step in this audit."
        },
        {
          "code": "Domain 3.2 Matrix",
          "title": "Matrix — Catalog Data Schema & Validation",
          "role": "Provided the validation gates and regex tests checked during spreadsheet review."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Validated that multi-location inventory stocking profiles remained intact post-import."
        }
      ]
    }
  },
  {
    "id": "d4-automation-sop",
    "folder": "Business Automation & Logic",
    "folderIcon": "ph-cpu",
    "icon": "ph-gear-six",
    "title": "Business Logic Automation & Webhooks Protocol",
    "category": "Standard Operating Procedure (SOP)",
    "subtitle": "Master Specification — Event-Driven Architecture, Anti-Loop Guardrails & Webhook Governance",
    "short": "Defines mandatory engineering standards for constructing, deploying, monitoring, and debugging business logic automations and webhook integrations in Shopify Flow.",
    "overview": "Defines mandatory engineering standards for constructing, deploying, monitoring, and debugging business logic automations in Shopify Flow and webhook integrations across 3PL WMS and Gorgias.",
    "fullOverview": "This Master Standard Operating Procedure (SOP) defines the engineering standards for event-driven business logic automations and webhook integrations across Synapse Botanicals. It establishes strict guardrails against infinite tag recursion loops, unmonitored webhook dropouts, asynchronous state drift, and payload validation failures. Outlines Shopify Flow architectural blueprints, HMAC-SHA256 signature verification, a 3-step emergency kill-switch, and a master tag taxonomy.",
    "dossierUrl": "domain-4-business-automation/MasterDossier-Domain4-WebhookAutomationAndFlowTriage.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Flow",
      "Shopify Webhooks API",
      "ShipBob 3PL WMS",
      "Gorgias CRM",
      "HMAC-SHA256",
      "Event Bus",
      "Idempotency Guardrails"
    ],
    "references": {
      "lineage": "Domain 4.1 Master SOP ➔ Domain 4.2 Webhook Engine ➔ Domain 4.3 Run Sheet ➔ Capstone Analysis",
      "architectureScope": [
        {
          "name": "Shopify Flow Engine",
          "role": "Event-driven automation orchestration and tag mutation gatekeeper"
        },
        {
          "name": "Shopify Webhooks Bus",
          "role": "Asynchronous HTTPS POST notification bus connecting external systems"
        },
        {
          "name": "ShipBob 3PL WMS",
          "role": "Fulfillment synchronization, hold enforcement, and tracking injection"
        },
        {
          "name": "Gorgias Helpdesk API",
          "role": "Customer support ticket classification and automated order hold injection"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.1 SOP",
          "title": "SOP — Order Exception Mutation Protocol",
          "role": "Fulfillment hold mechanics and order mutation lifecycle gates."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Consumes 'heavy-basket' and 'reno-exclusive' tags for node allocation."
        },
        {
          "code": "Domain 3.2 Matrix",
          "title": "Matrix — Catalog Data Schema & Validation Governance",
          "role": "Regulates tag formatting standards and custom metafield structures."
        }
      ]
    }
  },
  {
    "id": "d4-automation-matrix",
    "folder": "Business Automation & Logic",
    "folderIcon": "ph-lightning",
    "icon": "ph-circuit-board",
    "title": "Automation Logic & Webhook Triage Engine",
    "category": "Algorithmic Evaluation & Incident Governance",
    "subtitle": "Decision Engine — Event Priority, Retry Curves & Recursion Fail-Safes",
    "short": "Authoritative technical decision matrix governing webhook response codes, exponential backoff, and recursion guardrails.",
    "overview": "Authoritative technical decision matrix defining event prioritization, HTTP webhook triage curves, exponential backoff schedules, circuit-breaker thresholds, and loop-prevention guardrails for enterprise e-commerce automations.",
    "fullOverview": "This incident governance matrix defines the operational architecture for event-driven workflows across Shopify Flow, custom middleware, and third-party APIs (3PL WMS, Gorgias, ERP). It establishes strict triage protocols for HTTP response status codes (200/202 Success, 429 Rate Limit backoff curves, 500/502/504 Server Error circuit breakers), mandates idempotent ingestion via unique event headers, codifies exponential retry schedules with jitter, and defines hard anti-recursion guardrails (tag negation preconditions, mutation debounce timers, and recursion kill-switches) to prevent runaway automation loops.",
    "dossierUrl": "domain-4-business-automation/MasterDossier-Domain4-WebhookAutomationAndFlowTriage.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Flow Architecture",
      "Webhook Triage (429/500/504)",
      "Exponential Backoff",
      "Dead-Letter Queues (DLQ)",
      "Recursion Prevention",
      "Idempotency Keys"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 4.1 Automation Matrix (Current) ➔ Domain 4.2 Webhook Run Sheet ➔ Domain 1.1 Hold Automation ➔ Domain 5.1 Diagnostic Framework",
      "architectureScope": [
        {
          "name": "Shopify Flow Engine",
          "role": "Internal native business logic and order tagging workflows"
        },
        {
          "name": "Enterprise Webhook Gateway (Node.js/Express)",
          "role": "Payload parsing, idempotency verification, and DLQ dispatch"
        },
        {
          "name": "Redis DLQ & AWS SQS",
          "role": "Resilient buffering and persistent storage for failed webhook events"
        },
        {
          "name": "3PL Ingestion Endpoints (ShipBob/ShipStation)",
          "role": "Downstream order creation and fulfillment tracking updates"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 4.2 Audit",
          "title": "Audit — Webhook Failure & Flow Recursion Run Sheet",
          "role": "Empirically validates the circuit-breakers and retry curves defined in this matrix."
        },
        {
          "code": "Domain 1.2 Matrix",
          "title": "Matrix — Order State Point of No Return",
          "role": "Synchronizes webhook event timing with warehouse fulfillment lifecycle stages."
        },
        {
          "code": "Domain 5.1 SOP",
          "title": "SOP — Technical Diagnosis & Audit Logging",
          "role": "Integrates webhook failure error codes into front-line support triage protocols."
        }
      ]
    }
  },
  {
    "id": "d4-automation-audit",
    "folder": "Business Automation & Logic",
    "folderIcon": "ph-lightning",
    "icon": "ph-warning-octagon",
    "title": "Webhook Failure & Flow Recursion Run Sheet",
    "category": "Empirical Simulation & Execution Log",
    "subtitle": "Incident Forensics & Recovery Audit — Controlled Severity-1 Remediation",
    "short": "Forensic execution log resolving a circular Flow recursion loop and an upstream 3PL 504 webhook dropout.",
    "overview": "Production test log documenting the controlled simulation and forensic remediation of two high-severity automation incidents: an infinite Flow tagging loop exhausting API limits, and a 3PL 504 timeout triggering webhook drops.",
    "fullOverview": "This incident forensics run sheet documents the live simulation, rapid containment, and architectural remediation of two catastrophic e-commerce automation failures. Incident Alpha models a runaway circular Flow loop that generated 4,800+ duplicate mutations in under 4 minutes, triggering Shopify API rate throttling; it logs the emergency triage, conditional tag gating fix, and bulk cleanup. Incident Bravo models a 3PL WMS database deadlock returning persistent HTTP 504 Gateway Timeouts; it demonstrates the interception of dropped payloads via an AWS SQS Dead-Letter Queue, replaying 100% of stranded orders with zero manual re-entry.",
    "dossierUrl": "domain-4-business-automation/MasterDossier-Domain4-WebhookAutomationAndFlowTriage.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Incident Post-Mortem",
      "Runaway Flow Loop",
      "Rate Limit Throttling",
      "HTTP 504 Gateway Timeout",
      "Dead-Letter Queue Replay",
      "CAPA Implementation"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 4.1 Automation Matrix ➔ Domain 4.2 Incident Run Sheet (Current) ➔ Domain 1.1 Order Hold Sync ➔ Domain 5.1 Storefront Triage",
      "architectureScope": [
        {
          "name": "Shopify Admin API Rate Governor",
          "role": "Leaky bucket API leak-rate monitoring and throttling defense"
        },
        {
          "name": "Shopify Flow Log & Run History",
          "role": "Real-time workflow execution tracing and recursion path isolation"
        },
        {
          "name": "AWS SQS Dead-Letter Queue Buffer",
          "role": "Persistence layer capturing dropped webhook payloads during 504 outages"
        },
        {
          "name": "Automated Replay Daemon",
          "role": "Controlled FIFO replay of stranded orders post-recovery"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 4.1 Matrix",
          "title": "Matrix — Automation Logic & Webhook Triage",
          "role": "Supplied the circuit-breaker thresholds and tag-negation rules implemented in this run sheet."
        },
        {
          "code": "Domain 1.3 Audit",
          "title": "Audit — Order State Simulation Run Sheet",
          "role": "Verified that replayed orders correctly respected warehouse fulfillment hold locks."
        },
        {
          "code": "Domain 5.1 SOP",
          "title": "SOP — Technical Diagnosis & Audit Logging",
          "role": "Provided the timeline inspection framework used to isolate root cause timestamps."
        }
      ]
    }
  },
  {
    "id": "d5-storefront-sop",
    "folder": "Technical Diagnosis & Audit Logging",
    "folderIcon": "ph-magnifying-glass",
    "icon": "ph-stethoscope",
    "title": "Technical Diagnosis & Audit Logging Protocol",
    "category": "Standard Operating Procedure (SOP)",
    "subtitle": "Parent Specification — The '3-Minute Diagnostic' Framework for Storefront Triage",
    "short": "Master diagnostic protocol for rapid troubleshooting of broken checkouts, payment gateway failures, and cart freezes.",
    "overview": "Master operational protocol for front-line and escalation storefront triage. Codifies the '3-Minute Diagnostic' framework across Order Timeline forensics, Chrome DevTools network telemetry, and discount combination audits.",
    "fullOverview": "This Master SOP establishes the authoritative diagnostic methodology for identifying, isolating, and resolving high-severity e-commerce storefront errors in under 3 minutes. It provides exhaustive procedural playbooks across three vectors: Vector 1 (Order Timeline Forensics for raw Stripe gateway decline codes, AVS/CVV risk indicators, and automated Flow mutation trails); Vector 2 (Browser DevTools Network Telemetry for inspecting live AJAX /cart/add.js payloads, 422 Unprocessable Entity errors, and third-party script conflicts); and Vector 3 (Discount Stacking & Combination Governance for auditing conflicting promotional rules and protecting gross margins).",
    "dossierUrl": "domain-5-technical-diagnosis/MasterDossier-Domain5-MarginDefenseAndCartDiagnostics.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Chrome DevTools Telemetry",
      "AJAX Cart API (/cart/add.js)",
      "Stripe Gateway Decline Codes",
      "Order Timeline Forensics",
      "Discount Stacking Governance",
      "3-Minute RCA"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 5.1 Diagnostic SOP (Current) ➔ Domain 5.2 Storefront Case Study ➔ Domain 4.1 Webhook Triage ➔ Domain 1.1 Order Exceptions",
      "architectureScope": [
        {
          "name": "Shopify Storefront AJAX Cart API",
          "role": "Endpoint telemetry (/cart/add.js, /cart/change.js) and status code evaluation"
        },
        {
          "name": "Chrome DevTools Network & Console Tabs",
          "role": "Client-side payload inspection, stack trace capture, and script hang identification"
        },
        {
          "name": "Shopify Payments / Stripe Gateway",
          "role": "Raw transaction error codes, fraud score analysis, and card authorization logs"
        },
        {
          "name": "Shopify Discounts Engine",
          "role": "Evaluation of Product, Order, and Shipping discount combination permissions"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 5.2 Analysis",
          "title": "Case Study — Discount Collision & Cart Diagnostics",
          "role": "Provides empirical storefront data and financial impact analysis validating this protocol."
        },
        {
          "code": "Domain 4.1 Matrix",
          "title": "Matrix — Automation Logic & Webhook Triage",
          "role": "Coordinates gateway and cart error signals with backend webhook retry curves."
        },
        {
          "code": "Domain 1.1 SOP",
          "title": "SOP — Order Exception Mutation Protocol",
          "role": "Directs customer resolution actions once payment or cart anomalies are isolated."
        }
      ]
    }
  },
  {
    "id": "d5-storefront-casestudy",
    "folder": "Technical Diagnosis & Audit Logging",
    "folderIcon": "ph-magnifying-glass",
    "icon": "ph-shield-check",
    "title": "Discount Collision & Cart Diagnostics Analysis",
    "category": "Empirical Storefront Simulation & Financial Post-Mortem",
    "subtitle": "Storefront Telemetry & Margin Verification — 300-Order Empirical Promotional Simulation",
    "short": "Empirical financial post-mortem exposing how unmonitored discount stacking eroded contribution margins by 40.5%.",
    "overview": "Empirical 300-order storefront simulation and financial post-mortem evaluating uncontrolled discount stacking (Model Omega) vs. strict combination governance (Model Sigma). Demonstrates margin floor recovery from 23.0% to 63.5%.",
    "fullOverview": "This empirical case study documents a forensic financial simulation across a 300-order promotional campaign at Synapse Botanicals. It contrasts Model Omega (an uncontrolled promotional setup allowing sitewide discounts, creator codes, and free shipping to compound without restriction) against Model Sigma (a governed architecture with combination rules and strict contribution margin floors). The study reveals that uncontrolled stacking resulted in 82% of orders breaching the brand's 35% margin threshold, while Model Sigma recovered $8,420 in preserved gross profit, eliminated zero-margin split freight, and maintained a healthy 63.5% net contribution margin.",
    "dossierUrl": "domain-5-technical-diagnosis/MasterDossier-Domain5-MarginDefenseAndCartDiagnostics.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Discount Combinations Engine",
      "Margin Floor Protection",
      "Cart Telemetry Diagnostics",
      "Promotional Stacking Audit",
      "Financial Post-Mortem",
      "Unit Economics Governance"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 5.1 Diagnostic SOP ➔ Domain 5.2 Storefront Case Study (Current) ➔ Domain 2.2 Cost Engine ➔ Capstone Defense",
      "architectureScope": [
        {
          "name": "Shopify Checkout Engine",
          "role": "Execution of discount combination rules and coupon application gates"
        },
        {
          "name": "Storefront Telemetry Monitor",
          "role": "Measurement of cart add-to-checkout drop-off and coupon error rates"
        },
        {
          "name": "Financial Contribution Margin Model",
          "role": "Accounting for COGS, gateway fees, pick/pack labor, and absorbed postage"
        },
        {
          "name": "Influencer & Affiliate Code Engine",
          "role": "Configuration of creator incentives with mutually exclusive stacking flags"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 5.1 SOP",
          "title": "SOP — Technical Diagnosis & Audit Logging",
          "role": "Provided the forensic diagnostic framework used to audit cart and checkout payloads."
        },
        {
          "code": "Domain 2.2 Matrix",
          "title": "Matrix — Order Routing Cost Optimization",
          "role": "Supplied the carrier freight cost assumptions evaluated in the absorbed shipping audit."
        },
        {
          "code": "Domain 3.2 Matrix",
          "title": "Matrix — Catalog Data Schema & Validation",
          "role": "Verified underlying variant cost (COGS) figures used in margin calculations."
        }
      ]
    },
    "isCaseStudy": true,
    "domainsUsed": [
      "Domain 5: Technical Diagnosis & Storefront Triage",
      "Domain 2: Inventory & Absorbed Freight Economics",
      "Domain 3: Product Catalog & Margin Floors"
    ]
  },
  {
    "id": "d5-discount-matrix",
    "folder": "Technical Diagnosis & Audit Logging",
    "folderIcon": "ph-bug",
    "icon": "ph-percent",
    "title": "Discount Combinations & Margin Protection Engine",
    "category": "Decision Matrix & Risk Governance Framework",
    "subtitle": "Algorithmic Evaluation & Margin Governance Engine — 3x3 Stacking Matrix & Unit Economics",
    "short": "Codifies mathematical permutations across Shopify discount classes (Product, Order, Shipping) and enforces a hard 35% contribution margin floor across all promotions.",
    "overview": "Codifies mathematical permutations across Shopify discount classes (Product, Order, Shipping) and enforces a hard 35% contribution margin floor ($CM >= 35%) across all promotional campaigns.",
    "fullOverview": "This algorithmic decision engine governs promotional discounting across Synapse Botanicals, establishing clear policies for discount combinations across Shopify's three discount classes: Product, Order, and Shipping. It provides a complete 3x3 interaction matrix, contribution margin formula modeling with carrier freight absorption, and checkout error remediation playbooks to permanently eliminate toxic order cohorts.",
    "dossierUrl": "domain-5-technical-diagnosis/MasterDossier-Domain5-MarginDefenseAndCartDiagnostics.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Shopify Discounts Engine",
      "Checkout API",
      "Contribution Margin Modeling",
      "Freight Absorption",
      "Carrier Rate Cards",
      "Promotion Governance"
    ],
    "references": {
      "lineage": "Domain 5.1 Parent SOP ➔ Domain 5.2 Case Study ➔ Domain 5.3 Discount Engine ➔ Storefront Checkout",
      "architectureScope": [
        {
          "name": "Shopify Discounts Engine",
          "role": "Evaluates combination rules, code precedence, and cart eligibility"
        },
        {
          "name": "Storefront Checkout API",
          "role": "Executes GraphQL discount mutations and returns rejection error toasts"
        },
        {
          "name": "Carrier Rate Cards",
          "role": "Supplies actual ground postage costs for margin erosion calculations"
        },
        {
          "name": "Financial Margin Ledger",
          "role": "Enforces 35% minimum contribution margin floor across promotional carts"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 2.2 Matrix",
          "title": "Matrix — Order Routing Cost Optimization Decision Engine",
          "role": "Supplies carrier zone freight benchmarks for absorbed shipping calculations."
        },
        {
          "code": "Domain 3.2 Matrix",
          "title": "Matrix — Catalog Data Schema & Validation Governance",
          "role": "Ensures compare-at prices and catalog variants feed accurate discount baselines."
        },
        {
          "code": "Domain 5.2 Case Study",
          "title": "CaseStudy — Discount Code Collision & Checkout Cart Diagnostics",
          "role": "Empirical simulation documenting the recovery of 82% toxic order cohorts."
        }
      ]
    }
  },
  {
    "id": "d6-helpdesk-sop",
    "folder": "Frontline Helpdesk",
    "folderIcon": "ph-headset",
    "icon": "ph-headset",
    "title": "Helpdesk Operations & Macro Automation Protocol",
    "category": "Standard Operating Procedure (SOP)",
    "subtitle": "Master Helpdesk Governance & Triage Protocol — Frontline State Machine Hooks & Gorgias Rules",
    "short": "Transforms customer support from a disconnected ticketing silo into an integrated state machine gatekeeper, deploying zero-latency fulfillment holds and automated Gorgias macros.",
    "overview": "Transforms customer support from a disconnected ticketing silo into an integrated state machine gatekeeper, deploying zero-latency fulfillment holds and automated Gorgias macros.",
    "fullOverview": "This master Standard Operating Procedure defines frontline customer service engineering standards for Synapse Botanicals. It connects Gorgias Helpdesk directly into the Shopify order state machine via HTTP integration actions, deploying automated 'freeze-before-edit' fulfillment holds, strict Point of No Return (PONR) verification rules, flavor swap workflows, and carrier delivery intercept protocols.",
    "dossierUrl": "domain-6-frontline-helpdesk/MasterDossier-Domain6-FrontlineHelpdeskAutomation.md",
    "pdfUrl": "",
    "image": "",
    "tags": [
      "Gorgias Helpdesk",
      "Shopify Admin GraphQL",
      "Shopify Flow",
      "ShipBob 3PL WMS",
      "Order State Machine",
      "Macro Automation",
      "Carrier Intercept"
    ],
    "references": {
      "lineage": "Domain 1.1 State Machine ➔ Domain 1.2 PONR Matrix ➔ Domain 4.1 Flow Rules ➔ Helpdesk Operations SOP",
      "architectureScope": [
        {
          "name": "Gorgias Helpdesk API",
          "role": "Omnichannel ticket ingestion, intent parsing, and macro execution"
        },
        {
          "name": "Shopify GraphQL Admin API",
          "role": "Fulfillment order hold placement and release mutation execution"
        },
        {
          "name": "Shopify Flow Engine",
          "role": "State tag synchronization and anti-loop guard enforcement"
        },
        {
          "name": "ShipBob 3PL WMS",
          "role": "Warehouse pick/pack polling verification and carrier label gating"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.1 SOP",
          "title": "SOP — Order Exception Mutation Protocol",
          "role": "Codifies the native fulfillment order hold lifecycle and edit workflows."
        },
        {
          "code": "Domain 1.2 Matrix",
          "title": "Matrix — Order State Point of No Return",
          "role": "Defines the physical PONR gates enforced by Gorgias Rule R-02."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Informs multi-location split shipment explanations in Macro M-03."
        }
      ]
    }
  },
  {
    "id": "capstone-cross-domain",
    "folder": "Capstone Cross-Domain Analysis",
    "folderIcon": "ph-crown",
    "icon": "ph-arrows-split",
    "title": "Asynchronous Order Mutation & Webhook Failure",
    "category": "Cross-Domain Empirical Simulation & Forensic Post-Mortem",
    "subtitle": "Advanced Case Study — Distributed Race Conditions & Two-Phase Commit Locks",
    "isCapstone": true,
    "isCaseStudy": true,
    "domainsUsed": [
      "Domain 1: Order Lifecycle & State Machine",
      "Domain 2: Inventory & Multi-Node Routing",
      "Domain 4: Business Automations & Webhooks"
    ],
    "short": "Forensic cross-domain systems investigation analyzing an asynchronous race condition between Shopify Flow customer address edits and 3PL WMS HTTP 504 timeout retries.",
    "overview": "Forensic cross-domain systems investigation analyzing an asynchronous race condition between Shopify Flow customer address edits and 3PL WMS HTTP 504 timeout retries. Establishes distributed idempotency locks, carrier intercept protocols, and emergency triage playbooks.",
    "fullOverview": "This Capstone Cross-Domain Case Study documents a high-severity operational failure at Synapse Botanicals manifesting at the uncoordinated seam between distributed systems. When a customer requested an urgent address change 35 minutes post-purchase, Shopify Flow accepted the edit in Admin while the downstream 3PL WMS in Reno (LOC-NV-02) suffered a database lockup returning HTTP 504 Gateway Timeout. During Shopify's 15-minute background webhook retry delay, warehouse operators printed the shipping label with the original address, crossing the irreversible Point of No Return (PONR). When the webhook finally reconnected, the 3PL rejected the edit with HTTP 422 Unprocessable Entity, creating a desynchronized 'Zombie Order'. The case study establishes distributed idempotency locks, automated carrier redirect rules, and cross-domain fail-safe architecture.",
    "dossierUrl": "capstone/MasterDossier-Capstone-AsynchronousOrderMutation.md",
    "pdfUrl": "",
    "isPlaceholder": false,
    "image": "",
    "tags": [
      "Shopify Fulfillment Orders API",
      "Shopify Flow",
      "Shopify Webhooks API",
      "ShipBob 3PL WMS",
      "UPS Package Intercept API",
      "Two-Phase Commit Locks",
      "Gorgias CRM"
    ],
    "loomUrl": "",
    "references": {
      "lineage": "Domain 1.1 Parent SOP ➔ Domain 1.2 PONR Matrix ➔ Domain 2.1 Multi-Node Routing ➔ Domain 4.1 Webhook Engine ➔ Capstone Analysis",
      "architectureScope": [
        {
          "name": "Shopify Fulfillment Orders API",
          "role": "State machine single source of truth and fulfillment hold coordinator"
        },
        {
          "name": "Enterprise Webhook Proxy & SQS DLQ",
          "role": "Dead-letter queue buffering and idempotent retry governance"
        },
        {
          "name": "3PL WMS (ShipBob Reno LOC-NV-02)",
          "role": "Physical wave batching, carton packing, and carrier label generation"
        },
        {
          "name": "UPS Package Intercept API",
          "role": "Physical in-transit parcel redirection once PONR has been breached"
        }
      ],
      "dependencies": [
        {
          "code": "Domain 1.2 Matrix",
          "title": "Matrix — Order State Point of No Return",
          "role": "Defines the physical PONR gate breached during the 15-minute webhook retry window."
        },
        {
          "code": "Domain 4.1 Matrix",
          "title": "Matrix — Automation Logic & Webhook Triage",
          "role": "Supplies the exponential retry curve and HTTP 504 circuit breaker thresholds."
        },
        {
          "code": "Domain 2.1 Spec",
          "title": "Architecture — Multi-Node Routing Engine Spec",
          "role": "Governs the bi-coastal warehouse allocation and split routing baseline."
        }
      ]
    }
  }
];
