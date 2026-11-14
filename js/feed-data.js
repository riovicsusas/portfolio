/**
 * Portfolio Activity Feed & Latest Updates
 * Directly linked to the 7 Flagship Engineering Case Studies
 */
const LATEST_UPDATES = [
  {
    id: "update-capstone",
    projectId: "capstone-cross-domain",
    date: "Nov 2026",
    tag: "Forensic Post-Mortem",
    domain: "Master Capstone Architecture",
    icon: "ph-crown",
    title: "Asynchronous Order Mutation & Webhook Failure Autopsy",
    short: "Conducted an empirical systems autopsy investigating race conditions between customer address updates and 3PL wave picking.",
    problem: "When customers submitted shipping address corrections within a 15-minute polling window, warehouse WMS systems had already released waves for physical picking. Mis-delivered orders required expensive carrier intercepts and replacement shipments.",
    solution: "Engineered a mandatory two-phase commit state lock protocol ('Freeze First'), paired with Amazon-standard dead-letter queue (DLQ) buffers and automated UPS/FedEx package intercept triggers.",
    metrics: [
      { val: "0%", label: "Misdirected Deliveries Post-Lock" },
      { val: "$28,500", label: "Monthly GMV Protected" },
      { val: "<1.2s", label: "State Lock Resolution Latency" }
    ],
    tags: ["Shopify Flow", "ShipBob WMS", "Two-Phase Commit", "DLQ Buffering", "Carrier APIs"]
  },
  {
    id: "update-d1",
    projectId: "d1-order-lifecycle",
    date: "Oct 2026",
    tag: "State Machine SOP",
    domain: "Order Lifecycle",
    icon: "ph-arrows-clockwise",
    title: "Order State Machine & Point-of-No-Return (PONR) Protocol",
    short: "Codified the zero-tolerance 'Freeze First' fulfillment hold mandate to eliminate desynchronization with downstream 3PL polling scripts.",
    problem: "Customer support agents modified orders while physical fulfillment lines picked and packed units, resulting in duplicate split shipments and untracked inventory leakage across multi-node warehouses.",
    solution: "Established immutable state machine gates with strict Point-of-No-Return (PONR) timestamps, automated CASS address validation, and sanitary destruction logs under FDA 21 CFR Part 111.",
    metrics: [
      { val: "100%", label: "Hold Execution Compliance" },
      { val: "0", label: "Post-PONR Mis-shipments" },
      { val: "<45s", label: "Exception Triage Turnaround" }
    ],
    tags: ["Order State Machine", "Shopify Admin API", "Fulfillment Holds", "FDA 21 CFR Part 111"]
  },
  {
    id: "update-d2",
    projectId: "d2-routing-spec",
    date: "Oct 2026",
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
    date: "Sep 2026",
    tag: "Data Governance SOP",
    domain: "Bulk Data Management",
    icon: "ph-database",
    title: "Enterprise Matrixify Migration & Barcode Schema Governance",
    short: "Executed non-destructive MERGE migrations for 50,000+ SKUs with pre-commit UPC-A barcode linters and zero storefront downtime.",
    problem: "Spreadsheet auto-formatting corrupted 12-digit UPC barcodes into IEEE 754 scientific notation (e.g., 8.10012E+11), breaking warehouse barcode scanners and desynchronizing 3PL catalog matrices.",
    solution: "Codified the Matrixify Non-Destructive MERGE standard, enforcing Google Sheets raw text export flags, Python pre-commit regex schema validation, and a strict 1-SKU canary batch protocol.",
    metrics: [
      { val: "50,000+", label: "SKU Catalog Records Mutated" },
      { val: "0", label: "Barcode Truncation Errors" },
      { val: "0 mins", label: "Storefront Downtime" }
    ],
    tags: ["Matrixify", "UPC-A Barcode Integrity", "Schema Linters", "Canary Batches"]
  },
  {
    id: "update-d4",
    projectId: "d4-automation-sop",
    date: "Sep 2026",
    tag: "Automation Architecture",
    domain: "Business Automation",
    icon: "ph-cpu",
    title: "Business Logic Automation & Webhook Recursion Triage",
    short: "Engineered idempotent webhook event handlers with exponential backoff buffers to contain cascading Shopify Flow recursion loops.",
    problem: "An unconstrained tag-mutation trigger entered an infinite recursive Flow loop (1,840 executions in 12 minutes), exhausting Shopify API rate limits and causing an 8m 45s lag on fraud quarantine checks.",
    solution: "Built idempotent Shopify Flow workflows utilizing list-quantifier guardrails, unique event payload hashes, and automated Slack webhook anomaly alerts when run frequency exceeds 50 runs/minute.",
    metrics: [
      { val: "1,840", label: "Recursive Runs Quarantined" },
      { val: "100%", label: "Webhook Idempotency" },
      { val: "8m 45s", label: "Fraud Check Lag Eliminated" }
    ],
    tags: ["Shopify Flow", "Idempotency Keys", "Webhook Queues", "Slack Alerting"]
  },
  {
    id: "update-d5",
    projectId: "d5-storefront-casestudy",
    date: "Aug 2026",
    tag: "Empirical Case Study",
    domain: "Technical Diagnosis",
    icon: "ph-browsers",
    title: "Algorithmic Margin Defense & Storefront Cart Diagnostics",
    short: "Isolated mobile cart AJAX failures in under 60 seconds and eliminated negative-margin 3-way discount collision stacks.",
    problem: "Storefront promotional codes (FLASH20 + ALEX15 + FREESHIP) stacked simultaneously, causing gross product margins to collapse from 70% down to 29.5%, while mobile carts experienced unhandled HTTP 422 JSON errors.",
    solution: "Audited Shopify discount combination matrices to enforce mutual exclusivity, restructured mobile theme cart scripts with defensive validation, and codified Chrome DevTools payload triage checklists.",
    metrics: [
      { val: "<60s", label: "Cart Error MTTI" },
      { val: "70% → 29.5%", label: "Margin Leak Prevented" },
      { val: "100%", label: "Stacking Rule Verification" }
    ],
    tags: ["Chrome DevTools", "Margin Defense", "Cart Diagnostics", "HTTP 422 Triage"]
  },
  {
    id: "update-d6",
    projectId: "d6-helpdesk-sop",
    date: "Aug 2026",
    tag: "Frontline Operations",
    domain: "Frontline Helpdesk",
    icon: "ph-headset",
    title: "Frontline Helpdesk Automation & HTTP Webhook Actions",
    short: "Configured Gorgias custom HTTP webhook actions to place instant fulfillment holds directly against Shopify Orders API.",
    problem: "Customer cancellation and address update requests sat in frontline helpdesk queues during peak hours, allowing 3PL warehouses to ship orders before human agents could manually intervene.",
    solution: "Integrated Gorgias automated macro triggers with custom HTTP webhook requests that immediately query and lock Shopify Fulfillment Orders API, slashing exception response times from hours to sub-second execution.",
    metrics: [
      { val: "50%", label: "SLA Response Time Reduction" },
      { val: "0s", label: "Automated Hold Execution Latency" },
      { val: "100%", label: "Downstream Address Sync" }
    ],
    tags: ["Gorgias Academy", "HTTP Actions", "Shopify Admin API", "SLA Workflows"]
  }
];

function getFeed() {
  return LATEST_UPDATES;
}
