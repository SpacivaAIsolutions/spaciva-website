import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "Manufacturing Inventory, ERP & Document Automation | Spaciva AI";
const DESCRIPTION =
  "Inventory systems, ERP integration, and document automation for manufacturers and distributors. Proven on a 5,000+ SKU catalogue with 80% faster data entry.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/manufacturing",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/manufacturing",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const DATA: IndustryData = {
  slug: "manufacturing",
  name: "Manufacturing",
  eyebrow: "For Manufacturers & Distributors",
  h1: "Inventory, ERP, and paperwork automation for manufacturers",
  intro:
    "Stock counts in a spreadsheet nobody fully trusts. Purchase orders and delivery notes keyed in by hand. An ERP that holds half the picture. We build the inventory systems, integrations, and document automation that keep the numbers in step with the shop floor.",
  trustLine: "80% faster data entry on a 5,000+ SKU catalogue · Fixed price · You own the code",
  problemsHeading: "Where the numbers drift",
  problems: [
    { title: "Spreadsheet inventory", desc: "Several workbooks with overlapping part lists, and no single count anyone will sign off on." },
    { title: "Stock and ledger out of step", desc: "Every movement re-keyed into the accounting system, so stock and finance drift apart until someone spends days reconciling." },
    { title: "Paper in, typing out", desc: "Purchase orders, delivery notes, and supplier invoices arrive as PDFs and get typed in line by line." },
    { title: "Ops data nobody can see", desc: "Production, purchasing, and stock figures live in different systems, so the daily picture is assembled by hand." },
  ],
  offersHeading: "What we build for manufacturers",
  offersIntro: "Each is a fixed-price build that works alongside the ERP you already run.",
  offers: [
    { title: "Inventory management", desc: "One accurate stock number across locations, with validated bulk imports, barcode scanning, and reorder logic.", href: "/services/inventory-management" },
    { title: "ERP integration", desc: "Stock movements and purchasing synced with QuickBooks, Xero, Sage, NetSuite, or Business Central, so nothing is entered twice.", href: "/services/erp-systems" },
    { title: "PO and delivery-note processing", desc: "Purchase orders, delivery notes, and supplier invoices read, matched, and posted, with mismatches flagged for review.", href: "/services/document-invoice-processing" },
    { title: "Internal tools for the floor", desc: "Trackers, approval flows, and admin panels built around how your team actually works, instead of another spreadsheet.", href: "/services/internal-business-tools" },
    { title: "Operations dashboards", desc: "Stock, purchasing, and production figures in one dashboard that refreshes itself.", href: "/services/custom-dashboards" },
    { title: "Demand forecasting", desc: "Reorder and demand forecasts tested against a simple baseline first, so you only pay for a model that beats it.", href: "/services/predictive-analytics" },
  ],
  proof: {
    intro: "PartsFlow is the exact match: a spare-parts distributor's inventory platform with validated imports and a live QuickBooks sync.",
    studies: ["partsflow", "unified-accounting"],
  },
  faqs: [
    { q: "Do we have to replace our ERP?", a: "No. Most of our manufacturing work sits alongside an existing ERP: integrations, custom modules, and tools for the gaps it doesn't cover. We won't sell you a rollout." },
    { q: "Can you import our existing spreadsheets?", a: "Yes. Bulk imports run through validation first: required fields, duplicate part numbers, and type and range checks, with bad rows rejected and reported rather than loaded silently." },
    { q: "How long does it take?", a: "Most automations go live in 2 to 3 weeks. An inventory system or ERP integration takes 6 to 12 weeks. You get the timeline with the fixed price, before you commit." },
    { q: "What happens after launch?", a: "Every system includes a monthly plan: monitoring, fixes, updates, and small changes, with a named engineer who knows your setup." },
  ],
  ctaHeading: "Tell us which number nobody trusts.",
  ctaBody: "Book a 30-minute call. We'll look at your stock and paperwork flow, tell you honestly what's worth automating, and give you a fixed price if it is.",
};

export default function ManufacturingPage() {
  return <IndustryPage data={DATA} />;
}
