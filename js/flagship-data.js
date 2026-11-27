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
    "subtitle": "Why Shopify’s ‘In Progress’ Masks Warehouse Reality — State Compression & Lock-Verified Coordination",
    "domain": "Order Lifecycle",
    "category": "Systems Investigation & State Architecture",
    "filterCat": "lifecycle",
    "loomDuration": "Technical Study",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "desc": "Shopify displays “In Progress” across queued, wave-assigned, and picked cartons. A systems investigation into UI state compression, expedited buffer bypass, and the lock-verified coordinator tested across 34 local checks.",
    "fullOverview": "Order #18404’s address edit arrives 11 minutes after checkout—looking safe in Shopify Admin under “In Progress,” even though expedited SLA routing already pushed it into Allentown’s warehouse queue 72 seconds after purchase. This investigation exposes the three blindspots behind that label (5 physical stages compressed into 1 UI status, expedited buffer bypass, and misleading HTTP 200/504 signals), models the $50.70 single-pack mis-shipment stake, and replaces human guesswork with a lock-verified Freeze-First coordinator. Order #18404’s 133-second trace is staged; the 34 local checks verify coordinator state and hold-isolation mechanics rather than a live Shopify or WMS workflow.",
    "objectives": [
      "Expose how Shopify’s single “In Progress” status compresses queued, wave-assigned, and picked warehouse states.",
      "Trace how expedited shipping SLAs skip the 15-minute edit buffer and shrink the safe window below 600 seconds.",
      "Separate HTTP 200 transport receipts and 504 uncertainty from a verified SHIPMENT_ON_HOLD lock.",
      "Enforce Freeze → Verify → Mutate → Release with explicit holdIds isolation and hard post-pick lockout.",
      "Contrast staged 133-second trace latency against 34 locally verified SQLite coordinator checks."
    ],
    "references": {
      "architectureScope": [
        {
          "name": "Order-state mapping",
          "role": "Maps Shopify’s visible fulfillment status to the warehouse stage that determines whether an edit is safe."
        },
        {
          "name": "Freeze-First coordinator",
          "role": "Places the Shopify hold, then requires a confirmed physical WMS lock before changing an order already handed off."
        },
        {
          "name": "Mutation and PONR guards",
          "role": "Applies request-specific checks and blocks storefront changes after the physical pick boundary."
        },
        {
          "name": "Scoped release and recovery",
          "role": "Releases only the hold owned by this operation; after pick, sends the request to recovery instead of rewriting the order."
        }
      ]
    },
    "tags": [
      "Shopify Flow",
      "ShipBob WMS",
      "PONR Boundaries",
      "State Machines"
    ],
    "dossierUrl": "domain-1-order-lifecycle/TechnicalStudy-Domain1-UILieBlindspot.md",
    "pdfUrl": "",
    "specName": "TechnicalStudy-Domain1-UILieBlindspot.md"
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
