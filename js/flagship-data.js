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
    "filterCat": "capstone",
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
    "filterCat": "lifecycle",
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
    "filterCat": "routing",
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
  }
];
