/**
 * Portfolio Activity Feed & Latest Updates
 * Directly linked to the 6 Flagship Engineering Case Studies
 */
const LATEST_UPDATES = [
  {
    id: "update-capstone",
    projectId: "capstone-cross-domain",
    date: "2026-11-20",
    tag: "Technical Study",
    domain: "Capstone Architecture",
    icon: "ph-crown",
    title: "Asynchronous Order Mutation & Webhook Failure Autopsy",
    short: "Staged reconstruction of Order #35070 tracing a 504 fulfillment hold across Reno's 13:42 wave cutoff and 13:45 pick scan.",
    problem: "A customer address save succeeded in Shopify Admin at 13:35:08, while the outbound WMS hold timed out at 13:35:15. Wave Plan #8812 released at 13:42:00 and physical picking began at 13:45:00, driving $98.60 in modeled recovery costs (-$43.84 retained-sale contribution).",
    solution: "Designed a Hold–Update–Release coordination protocol with an operation-owned SQLite ledger (`coordinator.js`), six-field read-backs, SQS DLQ reconciliation, and confirmed UPS Delivery Intercept recovery.",
    metrics: [
      { val: "+$54.76 → -$43.84", label: "Modeled Order Swing" },
      { val: "$1,479–$14,790", label: "Monthly Erosion Sensitivity" },
      { val: "34 / 34", label: "Local Coordinator Checks" }
    ],
    tags: ["Shopify Flow", "ShipBob WMS", "Hold–Update–Release", "SQS DLQ", "UPS Intercept"]
  },
  {
    id: "update-d1",
    projectId: "d1-order-lifecycle",
    date: "2026-11-20",
    tag: "State Machine SOP",
    domain: "Order Lifecycle",
    icon: "ph-arrows-clockwise",
    title: "Order State Machine & Point-of-No-Return (PONR) Protocol",
    short: "Staged 133-second Freeze-First trace separating automated wave cutoffs from hard physical pick lockouts.",
    problem: "Storefront edits made while an order sits 'In Progress' conflict with batched 3PL wave picking; unheld mis-shipments trigger $23.70 direct cash drain ($50.70 contribution deterioration per unit in the modeled refund branch).",
    solution: "Codified two PONR boundaries (`wave_id == null` or authenticated WMS `supervisor_override` pre-pick), USPS CASS standardization, and 21 CFR Part 111 / SOP-QA-402 disposition controls.",
    metrics: [
      { val: "18s", label: "Staged WMS Lock" },
      { val: "133s", label: "Total Freeze Cycle" },
      { val: "$50.70", label: "Unit Delta Modeled" }
    ],
    tags: ["Order State Machine", "Shopify Admin API", "PONR Boundaries", "21 CFR Part 111"]
  },
  {
    id: "update-d2",
    projectId: "d2-routing-spec",
    date: "2026-11-20",
    tag: "Logistics Specification",
    domain: "Routing & Logistics",
    icon: "ph-truck",
    title: "Bi-Coastal Multi-Node Routing Engine & Freight Optimization",
    short: "The closest-stocked rule gives a Bethlehem customer two boxes. Checking the whole basket brings it down to one.",
    problem: "Nearby Allentown can ship the sticks, and only Reno has the tincture. The resulting two-parcel plan costs $22.90 in the model.",
    solution: "Check stock, packaging, cost, and delivery as a basket. Reno can ship all three units in one $14.60 parcel under the same modeled delivery promise.",
    metrics: [
      { val: "$8.30", label: "Modeled Bethlehem Savings" },
      { val: "2 → 1", label: "Bethlehem Parcels" },
      { val: "$997.40", label: "Separate 500-Order Model" }
    ],
    tags: ["Multi-Node Routing", "Freight Waterfalls", "ShipBob 3PL", "Split Containment"]
  },
  {
    id: "update-d3",
    projectId: "d3-catalog-sop",
    date: "2026-11-20",
    tag: "Data Governance SOP",
    domain: "Bulk Data Management",
    icon: "ph-database",
    title: "Enterprise Matrixify Migration & Barcode Schema Governance",
    short: "Blocked malformed barcode fixtures and unauthorized handle edits across a 12-variant catalog with targeted column pruning.",
    problem: "Spreadsheet leading-zero stripping, scientific-notation text exports, and unredirected handle changes disrupt WMS scanning and paid-media URLs ($3,900.00 modeled exposure per release).",
    solution: "Enforced Gate 1 column pruning paired with Matrixify `MERGE`, strict 12-digit string Modulo-10 verification, and a 2-of-12 (16.67%) canary deployment sequence.",
    metrics: [
      { val: "58 / 58", label: "Barcode & Bitstream Checks" },
      { val: "$3,900", label: "Modeled Release Exposure" },
      { val: "5s", label: "Pre-Flight Circuit Stop" }
    ],
    tags: ["Matrixify MERGE", "UPC-A Modulo-10", "Column Pruning", "Canary Gates"]
  },
  {
    id: "update-d4",
    projectId: "d4-automation-sop",
    date: "2026-11-20",
    tag: "Automation Architecture",
    domain: "Business Automation",
    icon: "ph-cpu",
    title: "Business Logic Automation & Webhook Recursion Triage",
    short: "Reconstructed 114-entry feedback trace and SQS Full Jitter backoff smoothing against 504 gateway retry storms.",
    problem: "Unconstrained Order #24148 listeners re-emitted tag updates (342 attempted REST requests across 62s at 5.52 req/s against a 2 req/s leak), driving $2,162.50 in modeled outage exposure.",
    solution: "Specified Flow negative-check guards, `operation_id` + `hold_owner` state reconciliation, 3-receive SQS dead-letter queues, and Full Jitter backoff smoothing.",
    metrics: [
      { val: "114", label: "Trace Entries in 62s" },
      { val: "$2,162.50", label: "Modeled Outage Floor" },
      { val: "8.33/s", label: "Jitter Mean (500 Retries)" }
    ],
    tags: ["Shopify Flow", "Operation IDs", "SQS Full Jitter", "DLQ Contracts"]
  },
  {
    id: "update-d5",
    projectId: "d5-storefront-casestudy",
    date: "2026-11-20",
    tag: "Technical Study",
    domain: "Technical Diagnosis",
    icon: "ph-browsers",
    title: "Algorithmic Margin Defense & Storefront Cart Diagnostics",
    short: "Reversed a modeled -$4.52 Order #29863 coupon collision and derived whole-cent dynamic contribution floors.",
    problem: "Four stacked codes (`VIP20` + `WELCOME25` + `LOYALTY10` + `FREESHIP`) reduced an $80 basket to $28.20 collected against a $32.85 breakeven floor (-$4.52 contribution).",
    solution: "Designed a 3x3 promotion exclusivity matrix enforced via Shopify Functions (`validationCreate` with `blockOnFailure: true`), exact cent floors, and <60s Tier-1 cart triage.",
    metrics: [
      { val: "+$34.76", label: "Per-Order Swing (Order #29863)" },
      { val: "$32.85", label: "Exact Basket Floor" },
      { val: "+$34,760", label: "1,000-Order Model Delta" }
    ],
    tags: ["Chrome DevTools", "Margin Floor", "Shopify Validation", "HTTP 422 Triage"]
  },
  {
    id: "update-gorgias-agent",
    date: "2026-10-04",
    tag: "Certification Earned",
    domain: "Gorgias Certification",
    icon: "ph-certificate",
    title: "Gorgias Certified Agent",
    short: "Earned the Gorgias Certified Agent certification.",
    attachment: {
      label: "View Certificate",
      href: "../assets/certifications/gorgias-certified-agent-susas.pdf",
      preview: "../assets/certifications/gorgias-certified-agent-susas.png"
    }
  },
  {
    id: "update-gorgias-admin",
    date: "2026-10-04",
    tag: "Certification Earned",
    domain: "Gorgias Certification",
    icon: "ph-certificate",
    title: "Gorgias Certified Admin",
    short: "Earned the Gorgias Certified Admin certification.",
    attachment: {
      label: "View Certificate",
      href: "../assets/certifications/gorgias-certified-admin-susas.pdf",
      preview: "../assets/certifications/gorgias-certified-admin-susas.png"
    }
  }
];

function getFeed() {
  return LATEST_UPDATES;
}
