/**
 * Curated Flagship Projects & 21st.dev Component Data
 */
const FLAGSHIP_PROJECTS = [
  {
    "id": "capstone-cross-domain",
    "isFeatured": true,
    "title": "Asynchronous Order Mutation & Webhook Failure",
    "subtitle": "Cross-Domain Empirical Simulation & Forensic Systems Post-Mortem",
    "domain": "Capstone Architecture",
    "category": "Cross-Domain Systems Post-Mortem",
    "filterCat": "automations",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "desc": "Staged autopsy of Order #35070 where a timed-out hold crossed Reno's 13:42 wave cutoff and 13:45 pick scan, turning a +$54.76 contribution sale into -$43.84 ($98.60 recovery). Specifies a Hold–Update–Release saga and SQS DLQ triage backed by 34 local coordinator checks.",
    "tags": [
      "Shopify Flow",
      "ShipBob 3PL WMS",
      "Carrier APIs",
      "Hold–Update–Release",
      "SQS DLQ Triage"
    ],
    "dossierUrl": "capstone/TechnicalStudy-Capstone-AsynchronousOrderMutation.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Capstone-AsynchronousOrderMutation.md"
  },
  {
    "id": "d1-order-lifecycle",
    "isFeatured": false,
    "title": "Order State Machine & Point-of-No-Return (PONR) Protocol",
    "subtitle": "Two-Boundary PONR Model — Fulfillment Holds & Downstream 3PL Synchronization",
    "domain": "Order Lifecycle",
    "category": "Standard Operating Procedure (SOP)",
    "filterCat": "logistics",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "desc": "Staged 133-second Freeze-First trace (Order #18404, 18s WMS queue lock) separating automated wave cutoff from hard physical pick lockout, paired with CASS address validation and 21 CFR Part 111 / SOP-QA-402 disposition controls.",
    "tags": [
      "Shopify Flow",
      "ShipBob WMS",
      "PONR Boundaries",
      "State Machines"
    ],
    "dossierUrl": "domain-1-order-lifecycle/TechnicalStudy-Domain1-OrderStateMachineAndPONR.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Domain1-OrderStateMachineAndPONR.md"
  },
  {
    "id": "d2-routing-spec",
    "isFeatured": false,
    "title": "Bi-Coastal Multi-Node Routing Engine & Freight Optimization",
    "subtitle": "Allentown (PA) & Reno (NV) Freight Cost Minimization",
    "domain": "Routing & Logistics",
    "category": "Systems Engineering Specification",
    "filterCat": "logistics",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    "desc": "A Bethlehem, PA order follows the closest-stocked rule into two boxes ($22.90). Whole-basket allocation ships all three units from Reno for $14.60, saving $8.30 (36.2%) under the modeled rates.",
    "tags": [
      "Multi-Node Routing",
      "Freight Waterfalls",
      "ShipBob 3PL",
      "Split Containment"
    ],
    "dossierUrl": "domain-2-order-routing/TechnicalStudy-Domain2-MultiNodeLogisticsRouting.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Domain2-MultiNodeLogisticsRouting.md"
  },
  {
    "id": "d3-catalog-sop",
    "isFeatured": false,
    "title": "Enterprise Matrixify Migration & Barcode Schema Governance",
    "subtitle": "Pre-Flight Schema Linter & Matrixify Non-Destructive MERGE",
    "domain": "Bulk Data Management",
    "category": "Standard Operating Procedure (SOP)",
    "filterCat": "data",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "desc": "Pre-flight governance across a 12-variant catalog blocking malformed barcodes, leading-zero loss, and unredirected handle mutations ($3,900 modeled release exposure). Enforces targeted column pruning, Matrixify MERGE, and 2-of-12 canary rollout.",
    "tags": [
      "Matrixify MERGE",
      "UPC-A Modulo-10",
      "Column Pruning",
      "Canary Gates"
    ],
    "dossierUrl": "domain-3-bulk-data-management/TechnicalStudy-Domain3-BulkCatalogSchemaGovernance.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Domain3-BulkCatalogSchemaGovernance.md"
  },
  {
    "id": "d4-automation-sop",
    "isFeatured": false,
    "title": "Business Logic Automation & Webhook Recursion Triage",
    "subtitle": "Idempotent Event Handlers & SQS Full Jitter Backoff",
    "domain": "Business Automation",
    "category": "Standard Operating Procedure (SOP)",
    "filterCat": "automations",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "desc": "Audits a 114-entry feedback trace exhausting a 40-call REST bucket under 3-call burst amplification ($2,162.50 modeled toll). Specifies Flow negative guards, operation-owned hold reconciliation, and SQS Full Jitter retry smoothing.",
    "tags": [
      "Webhooks",
      "Shopify Flow",
      "Operation IDs",
      "SQS Full Jitter"
    ],
    "dossierUrl": "domain-4-business-automation/TechnicalStudy-Domain4-WebhookAutomationAndFlowTriage.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Domain4-WebhookAutomationAndFlowTriage.md"
  },
  {
    "id": "d5-storefront-casestudy",
    "isFeatured": false,
    "title": "Algorithmic Margin Defense & Storefront Cart Diagnostics",
    "subtitle": "Checkout Exception Triage (<60s MTTI) & Dynamic Contribution Floors",
    "domain": "Technical Diagnosis",
    "category": "Technical Case Study & Post-Mortem",
    "filterCat": "diagnostics",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    "desc": "Reverses Order #29863 from -$4.52 to +$30.24 contribution (+$34.76 swing) using a 3x3 promotion exclusivity matrix, whole-cent dynamic breakeven floors ($32.85), fail-closed Shopify Validation (blockOnFailure: true), and <60s cart triage.",
    "tags": [
      "Chrome DevTools",
      "Contribution Floor",
      "Shopify Validation",
      "HTTP 422 Triage"
    ],
    "dossierUrl": "domain-5-technical-diagnosis/TechnicalStudy-Domain5-MarginDefenseAndCartDiagnostics.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Domain5-MarginDefenseAndCartDiagnostics.md"
  }
];
