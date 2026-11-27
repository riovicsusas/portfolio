/**
 * Portfolio Activity Feed & Latest Updates
 * Directly linked to the three published case studies
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
    tag: "State Architecture",
    domain: "Order Lifecycle",
    icon: "ph-arrows-clockwise",
    title: "Order State Machine & Point-of-No-Return (PONR) Protocol",
    short: "Systems investigation into why Shopify's 'In Progress' hides queued, wave-assigned, and picked warehouse states—and how a lock-verified coordinator stops wrong labels.",
    problem: "Shopify compresses three physical WMS risk tiers under 'In Progress,' expedited orders bypass the 15-minute edit buffer, and HTTP 200 receipts don't stop a warehouse floor; unheld mis-shipments trigger $23.70 direct cash drain ($50.70 contribution deterioration per unit in the modeled refund branch).",
    solution: "Replaced operator guesswork with a Freeze-First state coordinator enforcing two PONR boundaries (`wave_id == null` or authenticated WMS `supervisor_override` pre-pick), explicit `holdIds` isolation, USPS CASS validation, and fail-closed post-pick lockout (34/34 local coordinator checks).",
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
