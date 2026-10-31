import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "Finance & Accounting Automation for Growing Teams | Spaciva AI";
const DESCRIPTION =
  "Ledger sync, invoice processing, and ERP integration for finance and accounting teams. Proven on a sync layer across 12+ accounting platforms that cut manual entry 70%.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/fintech",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/fintech",
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
  slug: "fintech",
  name: "Finance & Accounting",
  eyebrow: "For Finance & Accounting Teams",
  h1: "Finance automation for teams still closing the books by hand",
  intro:
    "Invoices keyed in from PDFs. Vendors and payments reconciled across two or three ledgers. A month-end that depends on one person's spreadsheet. We build the sync, document processing, and reporting that take the manual entry out of finance operations, with review steps where they matter.",
  trustLine: "70% less manual entry on our accounting sync build · Fixed price · You own the code",
  problemsHeading: "Where finance teams lose the week",
  problems: [
    { title: "Data entry from documents", desc: "Supplier invoices, receipts, and statements retyped into the ledger, with errors caught at month-end if at all." },
    { title: "More than one ledger", desc: "Entities, acquisitions, or client books spread across QuickBooks, Xero, NetSuite, and others, kept in step by hand." },
    { title: "Approvals in email", desc: "Purchase and payment approvals chased over email and chat, with no record of who signed off on what." },
    { title: "Reporting that's always late", desc: "Management numbers assembled from exports, so they arrive after the decisions they were meant to inform." },
  ],
  offersHeading: "What we build for finance teams",
  offersIntro: "Each is a fixed-price build. Most teams start with whichever one costs the most hours.",
  offers: [
    { title: "Invoice and document processing", desc: "Invoices, receipts, and statements read, validated against your rules, and posted to the ledger, with exceptions sent for review.", href: "/services/document-invoice-processing" },
    { title: "Ledger and ERP integration", desc: "Vendors, invoices, and payments kept in sync across QuickBooks, Xero, Sage, NetSuite, and Business Central.", href: "/services/erp-systems" },
    { title: "Finance data pipelines", desc: "Ledger, billing, and bank data pulled into one warehouse on a schedule, monitored so a broken feed doesn't go unnoticed.", href: "/services/data-warehousing-etl" },
    { title: "Management reporting", desc: "Cash, revenue, and margin dashboards on that data layer, refreshed automatically instead of rebuilt each month.", href: "/services/custom-dashboards" },
    { title: "Approval workflows", desc: "Purchase and payment approvals routed by amount and owner, with a full audit trail of who approved what.", href: "/services/workflow-automation" },
  ],
  proof: {
    intro: "Our strongest proof sits here: a sync engine that cut manual data entry 70% across 12+ accounting and ERP platforms.",
    studies: ["unified-accounting"],
  },
  faqs: [
    { q: "Which accounting systems do you integrate with?", a: "We've shipped against QuickBooks, Xero, Sage, NetSuite, Business Central, Odoo, and more on the Unified Accounting project. Anything with a documented API is usually workable; we confirm your stack before quoting." },
    { q: "How do you handle financial data securely?", a: "NDA before discovery, role-based access, audit trails on every automated posting, and credentials that rotate automatically. Systems can run in your own cloud account." },
    { q: "Does anything post to the ledger without review?", a: "Only what you allow. Items that pass your validation rules can post automatically; anything else lands in a review queue. You choose the rules." },
    { q: "How long does it take?", a: "Most automations go live in 2 to 3 weeks. A multi-ledger integration takes 6 to 12 weeks. You get the timeline with the fixed price, before you commit." },
  ],
  ctaHeading: "Tell us what you retype every month.",
  ctaBody: "Book a 30-minute call. We'll look at your close process, tell you honestly what's worth automating, and give you a fixed price if it is.",
};

export default function FintechPage() {
  return <IndustryPage data={DATA} />;
}
