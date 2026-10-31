import type { Metadata } from "next";
import IndustryPage, { type IndustryData } from "@/components/IndustryPage";

const TITLE = "Real Estate Lead Routing & CRM Automation | Spaciva AI";
const DESCRIPTION =
  "Lead intake, routing, and CRM automation for real-estate teams, plus client portals and document processing. Fixed price, live in weeks, monitored monthly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/industries/real-estate",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/industries/real-estate",
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
  slug: "real-estate",
  name: "Real Estate",
  eyebrow: "For Real Estate Teams",
  h1: "Lead routing and CRM automation for real-estate teams",
  intro:
    "Enquiries arrive from portals, the website, WhatsApp, and the phone, and the fastest reply wins the viewing. We build the intake, routing, and follow-up automation that gets every lead to the right agent in minutes, and keeps the CRM current without anyone typing.",
  trustLine: "Fixed scope, fixed price · Most automations live in 2 to 3 weeks · You own the code",
  problemsHeading: "Where real-estate leads go cold",
  problems: [
    { title: "Leads from five places", desc: "Portal enquiries, web forms, WhatsApp messages, and calls land in different inboxes, and some never reach the CRM." },
    { title: "Slow first replies", desc: "A lead waits until an agent is free, by which time they've booked a viewing with someone else." },
    { title: "Follow-ups depend on memory", desc: "Nurture sequences and viewing reminders happen when someone remembers, not when the lead is ready." },
    { title: "Paperwork by email", desc: "Owners and tenants email documents back and forth, and someone retypes the details into the system." },
  ],
  offersHeading: "What we build for real-estate teams",
  offersIntro: "Each is a fixed-price build, connected to the CRM you already use.",
  offers: [
    { title: "Lead intake and routing", desc: "Enquiries from every source captured, de-duplicated, and routed to the right agent in your CRM, with an instant first reply.", href: "/services/crm-automation" },
    { title: "Automated follow-ups", desc: "Viewing reminders, nurture sequences, and status updates triggered by what the lead actually does.", href: "/services/workflow-automation" },
    { title: "WhatsApp enquiries", desc: "Enquiries and viewing bookings handled on the official WhatsApp Business API and logged straight to the CRM.", href: "/services/whatsapp-automation" },
    { title: "Owner and tenant portals", desc: "One place for owners and tenants to upload documents, see status, and get updates instead of emailing your team.", href: "/services/client-portals" },
    { title: "Document processing", desc: "Leases, ID documents, and invoices read and posted into your systems, with anything uncertain sent for review.", href: "/services/document-invoice-processing" },
  ],
  proof: {
    heading: "The closest work we've published",
    intro: "We haven't published a real-estate case study yet. These two projects are the same kind of work: getting data out of several systems and into one reliable place without manual entry.",
    studies: ["unified-accounting", "partsflow"],
  },
  faqs: [
    { q: "Which CRMs do you work with?", a: "Off-the-shelf CRMs with an API, including HubSpot, Salesforce, Pipedrive, and Zoho, as well as property-specific systems that expose one. We confirm your stack on the first call. If your process doesn't fit any CRM, we can build one." },
    { q: "Can it reply to leads automatically?", a: "Yes, within rules you set: an instant acknowledgement and booking link for every lead, and anything that needs judgment routed to an agent." },
    { q: "How long does it take?", a: "Most automations go live in 2 to 3 weeks. A portal or larger integration takes 6 to 12 weeks. You get the timeline with the fixed price, before you commit." },
    { q: "What happens after launch?", a: "Every system includes a monthly plan: monitoring, tuning, updates, and small changes, with a named engineer who knows your setup." },
  ],
  ctaHeading: "Tell us how long your first reply takes.",
  ctaBody: "Book a 30-minute call. We'll map where your leads come from, tell you honestly what's worth automating, and give you a fixed price if it is.",
};

export default function RealEstatePage() {
  return <IndustryPage data={DATA} />;
}
