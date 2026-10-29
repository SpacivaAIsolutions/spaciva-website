import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "AI Automation for Professional Services Firms | Spaciva AI";
const DESCRIPTION =
  "Document and invoice processing, client intake, and client portals for accounting, legal, and consulting firms. Fixed price, you own the code, monitored monthly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/professional-services",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/professional-services",
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
  slug: "professional-services",
  name: "Professional Services",
  eyebrow: "For Professional Services",
  h1: "Automation for accounting, legal, and consulting firms",
  intro:
    "Your people bill for judgment, then spend hours retyping invoices, chasing documents, and answering \"where are we on this?\" emails. We automate the document and intake work around the billable hours, with a review step wherever a professional needs to sign off.",
  trustLine: "NDA before discovery · Fixed scope, fixed price · You own the code",
  problemsHeading: "The unbillable work behind every engagement",
  problems: [
    { title: "Documents retyped by hand", desc: "Invoices, receipts, statements, and contracts keyed into accounting or practice software one field at a time." },
    { title: "Intake is a chase", desc: "Engagement letters, ID checks, and missing documents requested and re-requested over email before work can start." },
    { title: "Clients ask for status", desc: "Every \"any update?\" email interrupts someone billable, because the client has nowhere to look it up themselves." },
    { title: "Client data lives in several ledgers", desc: "Client books spread across QuickBooks, Xero, Sage, and others, reconciled by hand whenever numbers need to line up." },
  ],
  offersHeading: "What we automate for professional-services firms",
  offersIntro: "Each is a fixed-price build, scoped around the review steps your firm already relies on.",
  offers: [
    { title: "Document and invoice processing", desc: "Invoices, receipts, and contracts read, checked against your rules, and posted into your systems, with anything uncertain sent to a person for review.", href: "/services/document-invoice-processing" },
    { title: "Client intake and onboarding", desc: "Engagement letters, document requests, and reminders sent automatically, so an engagement starts when the paperwork is complete, not when someone chases it.", href: "/services/workflow-automation" },
    { title: "Secure client portals", desc: "Clients upload documents, see status, and sign off in one place instead of over email, with access scoped per client.", href: "/services/client-portals" },
    { title: "Ledger and ERP integration", desc: "Sync between QuickBooks, Xero, Sage, NetSuite, and Business Central so the same client data isn't keyed in twice.", href: "/services/erp-systems" },
    { title: "Answers from your own knowledge", desc: "An internal assistant that answers from your precedents, policies, and procedures, and cites the document it used.", href: "/services/rag-chatbot-development" },
    { title: "Inbox triage", desc: "Shared client inboxes sorted and routed, with replies drafted for review rather than sent on their own.", href: "/services/email-inbox-automation" },
  ],
  proof: {
    heading: "The closest work we've published",
    intro: "A sync layer that keeps vendors, invoices, and payments aligned across 12+ accounting platforms, the same plumbing a firm needs to stop rekeying client data.",
    studies: ["unified-accounting"],
  },
  faqs: [
    { q: "How do you handle confidential client data?", a: "We sign an NDA before discovery, build with role-based access and audit trails, and can run AI models inside your own cloud account so documents don't leave your environment. If your firm has specific regulatory requirements, we scope them on the first call, before any price is agreed." },
    { q: "Does a professional still review the output?", a: "Wherever you want one. Extraction runs against confidence thresholds: items that clear them post automatically, anything below goes to a review queue. You decide where the thresholds sit." },
    { q: "Which systems do you work with?", a: "Accounting platforms including QuickBooks, Xero, Sage, NetSuite, and Business Central, plus practice-management, document, and CRM tools that expose an API. We confirm your specific stack before quoting." },
    { q: "How long does it take?", a: "Most automations go live in 2 to 3 weeks. A client portal or larger integration takes 6 to 12 weeks. You get the timeline with the fixed price, before you commit." },
  ],
  ctaHeading: "Tell us which document your team retypes most.",
  ctaBody: "Book a 30-minute call. We'll look at the workflow, tell you honestly whether it's worth automating, and give you a fixed price if it is.",
};

export default function ProfessionalServicesPage() {
  return <IndustryPage data={DATA} />;
}
