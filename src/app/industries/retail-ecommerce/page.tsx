import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "E-commerce & DTC Automation and Custom Software | Spaciva AI";
const DESCRIPTION =
  "Inventory sync, order and support automation, and reporting for e-commerce and DTC brands. One stock number across every channel. Fixed price, you own the code.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/retail-ecommerce",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/retail-ecommerce",
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
  slug: "retail-ecommerce",
  name: "E-commerce & DTC",
  eyebrow: "For E-commerce & DTC Brands",
  h1: "Automation for DTC brands that outgrew their spreadsheets",
  intro:
    "Stock that's right in one channel and wrong in another. \"Where's my order?\" emails all day. A Monday report stitched together from the store, the ad accounts, and the marketplaces. We build the sync, support automation, and reporting that let a small team run a bigger store.",
  trustLine: "Fixed scope, fixed price · Most automations live in 2 to 3 weeks · You own the code",
  problemsHeading: "What breaks first as a store grows",
  problems: [
    { title: "Stock numbers disagree", desc: "The store, the marketplaces, and the warehouse each hold a different count, so you oversell one week and sit on dead stock the next." },
    { title: "Support is mostly order status", desc: "Most tickets ask the same few questions, and every one of them is answered by hand from the order system." },
    { title: "Reporting takes a morning", desc: "Revenue, ad spend, and margin live in different tools, so the weekly numbers are exported, pasted, and argued about." },
    { title: "Supplier paperwork is retyped", desc: "Supplier invoices, POs, and delivery notes keyed into the accounting system line by line." },
  ],
  offersHeading: "What we build for e-commerce teams",
  offersIntro: "Each is a fixed-price build that connects to the platforms you already sell on.",
  offers: [
    { title: "Inventory sync across channels", desc: "One accurate stock number across your store, marketplaces, and locations, with reorder alerts before you run out.", href: "/services/inventory-management" },
    { title: "AI support agent", desc: "A support agent that answers order, shipping, and returns questions from your own policies and order data, and hands off to a person when it's unsure.", href: "/services/rag-chatbot-development" },
    { title: "WhatsApp order updates and support", desc: "Order confirmations, shipping updates, and support conversations on the official WhatsApp Business API.", href: "/services/whatsapp-automation" },
    { title: "Store and ad-spend reporting", desc: "Store, ad platforms, and marketplaces in one dashboard that refreshes itself, so the weekly numbers are ready on Monday.", href: "/services/custom-dashboards" },
    { title: "Supplier invoice processing", desc: "Supplier invoices and POs read, matched, and posted into your accounting system, with mismatches flagged for review.", href: "/services/document-invoice-processing" },
    { title: "Support inbox triage", desc: "Customer emails sorted by intent and routed, with replies drafted from order data for a person to approve.", href: "/services/email-inbox-automation" },
  ],
  proof: {
    intro: "PartsFlow is the closest match: one distributor's 5,000+ SKU catalogue moved off spreadsheets onto validated imports and a live accounting sync.",
    studies: ["partsflow", "unified-accounting"],
  },
  faqs: [
    { q: "Which store platforms do you work with?", a: "We connect to the major store platforms and marketplaces through their APIs, along with your accounting system, warehouse or 3PL, and ad accounts. We confirm your exact stack on the first call before quoting." },
    { q: "Will an AI agent give customers wrong answers?", a: "It answers only from your policies and order data, cites what it used, and hands off to a person when it isn't confident. Accuracy is tested against real past tickets before launch, not after." },
    { q: "How long does it take?", a: "Most automations go live in 2 to 3 weeks. An inventory system or larger integration takes 6 to 12 weeks. You get the timeline with the fixed price, before you commit." },
    { q: "What happens during peak season?", a: "Every system ships with a monthly plan and a named engineer who knows your setup. Tell us when your peaks are and we'll check capacity and alerts ahead of them." },
  ],
  ctaHeading: "Tell us where your stock numbers stop matching.",
  ctaBody: "Book a 30-minute call. We'll look at your channels and workflows, tell you honestly what's worth automating, and give you a fixed price if it is.",
};

export default function RetailEcommercePage() {
  return <IndustryPage data={DATA} />;
}
