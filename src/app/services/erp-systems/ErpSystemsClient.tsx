"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, AlertTriangle,
  Building2, ShoppingBag, Users, Landmark, Truck, BarChart3, FileText,
  Link2, Puzzle, Boxes,
  ClipboardCheck, Target, Fingerprint, AlertOctagon, Gauge, GitCompare,
  Home, ClipboardList, LayoutDashboard, Workflow, Code2,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const HERO_SPOKES = [
  { label: "E-commerce store", icon: ShoppingBag },
  { label: "CRM", icon: Users },
  { label: "Bank and payments", icon: Landmark },
  { label: "Warehouse and 3PL", icon: Truck },
  { label: "Reporting and BI", icon: BarChart3 },
  { label: "Document intake", icon: FileText },
];

const WE_DO = [
  { title: "Integrate the ERP you already run", desc: "With your store, CRM, bank feeds, warehouse, reporting, and document intake, so data moves without anyone retyping it." },
  { title: "Extend it", desc: "With the screens, workflows, and reports it can't give you, built alongside the ERP rather than inside its core." },
  { title: "Build lightweight ERP", desc: "For teams who've outgrown spreadsheets and basic accounting software but are genuinely not ready for NetSuite, inventory, orders, purchasing, and costing in one system that fits how you actually work." },
  { title: "Take over stalled integration work", desc: "From a previous vendor, audit it, and tell you honestly whether to salvage or restart." },
];

const WE_DONT = [
  { title: "Enterprise ERP implementation", desc: "SAP, Oracle, or Dynamics rollouts are multi-year programmes needing a large team and a partner certification. That isn't us, and a firm our size telling you otherwise should worry you." },
  { title: "ERP selection consulting on its own", desc: "We'll give you an honest opinion on the call for free. We won't bill you for a three-month evaluation, and we have no reseller commission steering the answer." },
  { title: "Modification of ERP core code", desc: "It's the most common way an ERP becomes unupgradeable. We build alongside through supported APIs and extension points, see Section 6." },
  { title: "Anything we can't finish", desc: "If your requirement genuinely needs a Tier 1 ERP and a large implementation partner, we'll say so on the first call and point you at the right kind of firm. We'd rather lose the project than take one we'd deliver badly." },
];

const WHAT_WE_BUILD = [
  {
    title: "ERP integration",
    icon: Link2,
    desc: "Your ERP connected to the systems around it, store, CRM, bank feed, warehouse or 3PL, payment processor, reporting layer, with mapping, validation, error handling, and alerting that tells us it broke before it tells you. Bidirectional where it needs to be, one-way where that's safer.",
    bestFor: "teams whose ERP is fine and whose problem is that nothing else can reach it. This is most enquiries.",
  },
  {
    title: "ERP extension and custom modules",
    icon: Puzzle,
    desc: "The things your ERP won't do: an approval flow that matches your actual sign-off chain, a costing rule specific to your business, a screen your warehouse team can use on a phone, a report the built-in reporting can't express. Built alongside the ERP through supported extension points, so upgrades don't break it.",
    bestFor: "teams told “the ERP can't do that” about something the business genuinely needs.",
  },
  {
    title: "Lightweight custom ERP",
    icon: Boxes,
    desc: "Orders, purchasing, costing, and basic financial reporting in one system, shaped around your process. For businesses running on spreadsheets plus QuickBooks or Xero, where a full ERP would cost more in licences and implementation than the problem is worth.",
    linkPrefix: "Stock accuracy itself is its own scope, covered on ",
    link: { href: "/services/inventory-management", label: "inventory management" },
    linkSuffix: ".",
    bestFor: "SMBs at the point where spreadsheets have broken but NetSuite is two sizes too big.",
  },
];

const WHY_FAIL = [
  {
    title: "The business changed itself to fit the software",
    desc: "The system arrives with an opinion about how you should operate, and rather than being told which of your practices are genuinely differentiating and which are just habit, everything gets bent to fit the tool. Six months later people are running the real process in spreadsheets alongside the ERP, which is the worst of both.",
    control: "map the process before the software, and mark each step as keep (it's why you win), drop (it only exists because of an old tool), or conform (the standard way is fine). We do that in the first phase and you get the map whether or not you hire us.",
  },
  {
    title: "Everything went live at once",
    desc: "The big-bang cutover is the classic. Every module, every department, one weekend. When something goes wrong, and something always goes wrong, there's nothing to fall back to and the business can't ship.",
    control: "phased rollout, one process at a time, with the old system running in parallel until the new one has been reconciled against it. Slower on paper, and the only version that doesn't risk a quarter.",
  },
  {
    title: "The data was migrated before it was cleaned",
    desc: "Twelve years of duplicate customers, discontinued SKUs, half-filled fields, and three spellings of the same supplier get carried straight across. Now nobody trusts the new system either, and the migration gets blamed for problems that predate it by a decade.",
    control: "audit and cleanse before migration, with the rules agreed in writing, and validate the migrated data against the source before anything is switched off. This is dull and it is the difference between adoption and rejection.",
  },
  {
    title: "The core was customised",
    desc: "The ERP couldn't do something, so someone modified its core code. It worked. Then the vendor shipped an upgrade, the customisation broke, and the upgrade got postponed, permanently. Now you're running an unsupported version and every future change costs more.",
    control: "build alongside, never inside. Supported APIs, extension frameworks, and separate services that the ERP doesn't know about. If a requirement genuinely can't be met that way, that's a scope conversation, not a reason to touch the core.",
  },
  {
    title: "Nobody owned it after go-live",
    desc: "The implementation partner finished and left. The integrations weren't monitored, an API changed, a sync failed silently, and three weeks of orders didn't reach the warehouse. There was no one to call and no documentation to read.",
    control: "monitoring and alerting on every integration from day one, plus a monthly plan with a named engineer who knows your setup. This is how every engagement here is scoped, not as an upsell at handover.",
  },
];

const TRUST_REQUIREMENTS = [
  { title: "Field mapping agreed in writing", icon: ClipboardCheck, desc: "Every field, both directions, with the transformation rules named, currency, tax treatment, units, date handling, what happens to a field the other system doesn't have. Agreed before we build." },
  { title: "One source of truth per field", icon: Target, desc: "For each piece of data, exactly one system wins. Bidirectional syncs that let both sides be authoritative are how records start overwriting each other silently." },
  { title: "Idempotency and duplicate control", icon: Fingerprint, desc: "A retried message must not create a second order. Every record carries a stable identifier and every write checks before it inserts." },
  { title: "Error queues, not silent failure", icon: AlertOctagon, desc: "Anything that can't be processed goes to a visible queue with the reason attached and the original payload retained, so someone can fix and reprocess it." },
  { title: "Rate limits and volume handled properly", icon: Gauge, desc: "ERP and accounting APIs throttle aggressively, and batch operations at month-end look nothing like a Tuesday afternoon. Backoff, batching, and queueing are designed in." },
  { title: "Reconciliation you can run", icon: GitCompare, desc: "A report that compares both systems on demand and shows exactly what doesn't agree. Trust in an integration comes from being able to check it." },
];

const PROCESS = [
  { step: "01", title: "Process and systems audit", duration: "3–5 days", desc: "We map how the process runs today, what each system holds, what's genuinely authoritative, and where the manual bridges are. Each step gets marked keep, drop, or conform. You get that written map whether or not you hire us, for a lot of teams it's the first time the process exists on paper." },
  { step: "02", title: "Fixed scope and quote", duration: "2–3 days", desc: "A written scope, a fixed price, and a delivery date before any code is written, with the phases explicitly separated so you can see what ships first and what waits. If scope moves, we re-quote in writing first." },
  { step: "03", title: "Build and validate against real data", duration: "scoped per project", desc: "Built in a sandbox against your actual records, not sample data, with field mapping and reconciliation reporting from the start. Written update every Friday plus a short Loom walkthrough of what moved." },
  { step: "04", title: "Parallel run, then phase live", duration: "1–2 weeks per phase", desc: "The new path runs alongside the existing one, and you compare the two before switching anything off. Then it goes live one process at a time, never everything at once. If a phase doesn't reconcile, it doesn't ship." },
  { step: "05", title: "Monitor, reconcile, extend", duration: "ongoing", desc: "Every integration alerts on failure, so we know before you do. Monthly: reviewing error queues, re-running reconciliation, handling API changes from vendors who don't warn you, and extending as the business changes." },
];

// Per confirmation, all ten named ERP/accounting systems are genuine delivery experience, six
// evidenced directly by the Unified Accounting case study and four confirmed separately.
const SYSTEM_GROUPS = [
  {
    category: "ERP and accounting", icon: Building2, items: [
      "NetSuite", "Odoo", "SAP Business One", "Microsoft Dynamics 365 Business Central", "Sage",
      "Zoho Books and Zoho Inventory", "TallyPrime", "QuickBooks", "Xero", "ERPNext",
    ],
  },
  {
    category: "E-commerce and marketplaces", icon: ShoppingBag, items: ["Shopify", "WooCommerce", "Magento", "Amazon", "eBay"],
  },
  {
    category: "CRM and sales", icon: Users, items: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Close"],
  },
  {
    category: "Warehouse, logistics, and payments", icon: Truck, items: ["3PL and WMS APIs", "Shipping carriers", "Stripe", "Razorpay", "Bank feeds"],
  },
  {
    category: "Data and integration layer", icon: Link2, items: ["Postgres", "MySQL", "BigQuery", "n8n", "Custom Python and Node services", "REST", "GraphQL", "SOAP", "SFTP and file-based exchange"],
  },
];

const ROUTING = [
  { title: "ERP systems", desc: "The financial and operational system of record, purchasing, costing, and ledgers, and everything that has to connect to it.", icon: Building2, current: true },
  { title: "Inventory management", desc: "The stock number being right, everywhere, all the time. A data accuracy and sync problem, not a system-of-record one. Start here if the pain is overselling, not month-end.", icon: Boxes, href: "/services/inventory-management" },
  { title: "CRM development", desc: "The system of record for customers, deals, and pipeline. Different subject, same engineering discipline.", icon: Home, href: "/services/crm-development" },
  { title: "Internal business tools", desc: "A place your team does one specific piece of work that no system of record covers. Frequently the right answer when the complaint is “the ERP can't do X.”", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Custom dashboards", desc: "Read-only visibility across the ERP and everything around it, without touching the ERP itself.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "Workflow automation", desc: "Something happens without anyone opening anything. Plenty of “ERP integration” enquiries are this, at a fraction of the cost.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Document & invoice processing", desc: "Getting supplier documents into the ERP without anyone retyping them. The most common thing an ERP buyer actually needs next.", icon: FileText, href: "/services/document-invoice-processing" },
  { title: "Web applications", desc: "The engineering underneath all of these. If you're evaluating who can build custom software at all, not just this shape of it.", icon: Code2, href: "/services/web-applications" },
];

const ENGAGEMENT_MODELS = [
  { label: "Single integration", bestFor: "Proving the approach on the connection that's costing you the most time", includes: "One connection built properly: mapping, validation, error queues, reconciliation reporting, monitoring, and the first month of support", from: "Scoped and quoted after the systems audit" },
  { label: "Integration or extension package", bestFor: "Most teams, this is where the manual bridges actually disappear", includes: "Several connections or custom modules scoped together, phased so each goes live and is reconciled before the next begins", from: "Priced once we know how many systems and how they connect" },
  { label: "Lightweight custom ERP", bestFor: "SMBs where spreadsheets have broken and a Tier 1 ERP is two sizes too big", includes: "Orders, purchasing, and costing built as one system, migrated from your current spreadsheets and accounting software, phased over several weeks. Stock accuracy is scoped separately, through inventory management", from: "Priced after the process and systems audit" },
];

const CASE_STUDIES = [
  { num: "70%", metric: "Less manual data entry", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo. Six ledgers, one pipeline.", href: "/case-studies/unified-accounting" },
  { num: "80%", metric: "Faster data entry", title: "PartsFlow", desc: "A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.", href: "/case-studies/partsflow" },
];

const FAQS = [
  { q: "Do you implement SAP, Oracle, or Dynamics?", a: "No. Full enterprise ERP rollouts need a large team and a partner certification, and a firm our size claiming otherwise should worry you. What we do is connect and extend the ERP you already run, including Business Central and SAP Business One, and build lightweight custom systems for teams who aren't Tier 1 candidates. If your requirement genuinely needs a large implementation partner, we'll tell you on the first call." },
  { q: "Can you connect our ERP to Shopify?", a: "Yes, and it's one of the most common projects we take. Orders, inventory levels, fulfilment status, customers, and refunds, with the direction of truth agreed per field so the two systems can't overwrite each other. The same applies to WooCommerce, Magento, Amazon, and eBay." },
  { q: "How long does an ERP integration take?", a: "It depends on how clean your data is and whether both systems have usable APIs, not how many records you have, that's what the audit measures before you get a date. A single well-defined connection includes validation and a parallel run. Multi-system packages are phased, with each phase going live and reconciled before the next starts." },
  { q: "What if our ERP doesn't have an API?", a: "Some older ERP and accounting software genuinely doesn't. We'll tell you before you commit and propose a database-level or file-based exchange instead of promising an integration that doesn't exist. It's less elegant and it works, but you should hear it upfront, not in week three." },
  { q: "Will you customise our ERP's core code?", a: "No, and you shouldn't let anyone else either. Core modifications break on the next vendor upgrade, which is how businesses end up stuck on unsupported versions. We build alongside through supported APIs and extension frameworks, so upgrades stay possible." },
  { q: "What happens to our data during migration?", a: "It's audited and cleansed before it moves, with the rules agreed in writing, then validated against the source before anything is switched off. Your existing system keeps running in parallel until the new one reconciles. We don't do cutovers that depend on everything being right first time." },
  { q: "Do we have to go live all at once?", a: "No, and we'd argue against it. Phased rollout, one process at a time, with the old path available until the new one has been reconciled. Big-bang cutovers are the single most cited cause of ERP disasters and the risk is entirely avoidable." },
  { q: "What happens when a vendor changes their API?", a: "They will, and usually without warning you. Every integration ships with alerting so we find out before you do, and fixes to anything we built are covered by the monthly plan. Unmonitored integrations failing silently is the most common way an ERP project unravels after go-live." },
  { q: "Can you take over an ERP integration someone else started?", a: "Yes, regularly. We'll audit what exists and tell you honestly whether it's worth salvaging or faster to rebuild, with a fixed price for either path. Sometimes the answer is salvage, a sound integration with no monitoring and no documentation is a much smaller job than it looks." },
  { q: "Should we build a custom ERP or buy one?", a: "Buy, in most cases. Off-the-shelf ERP encodes decades of accounting and inventory practice you don't want to re-derive. A lightweight custom build makes sense in a narrow band: you've outgrown spreadsheets and basic accounting software, your process has genuine specificity a standard system fights, and licence-plus-implementation cost for a Tier 1 ERP exceeds what the problem is worth. We'll tell you honestly which side you're on, and we have no reseller commission riding on the answer." },
  { q: "Who owns the code?", a: "You do. Source code, integration configuration, mapping documentation, and deployment pipelines transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts." },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Integration Services",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "ERP integration, extension, and lightweight custom ERP builds for mid-market teams, connecting the ERP you already run to your store, CRM, bank feeds, warehouse, and reporting.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spaciva.tech/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://spaciva.tech/#what-we-do" },
    { "@type": "ListItem", position: 3, name: "ERP Systems", item: "https://spaciva.tech/services/erp-systems" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `erp-faq-panel-${index}`;
  const buttonId = `erp-faq-button-${index}`;

  return (
    <div className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:border-[#C4B5FD] transition-colors">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-[#0F172A]">{faq.q}</span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 text-[#7C3AED] transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-[#334155] leading-relaxed">{faq.a}</div>
      </motion.div>
    </div>
  );
}

export default function ErpSystemsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, two column. Right side is a hub-and-spoke integration map, not a
          screenshot: the visual argument that this page sells the connections around an ERP,
          not the ERP itself. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                ERP Systems
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Most ERP problems aren&apos;t ERP problems
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                They&apos;re integration problems. The ERP holds the data correctly and nothing else can reach it, so someone re-keys orders from the store, exports a report to build a different report, and reconciles two systems by hand every month. We fix that layer, and where an ERP genuinely needs extending or building, we do that too, at a scope we&apos;ll actually finish.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#what-we-dont-do" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  See what we do and don&apos;t do
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500 mb-4">
                Integration · Extension · Lightweight custom builds, we don&apos;t sell enterprise rollouts
              </p>
              <p className="text-sm text-slate-500">
                We&apos;ve connected accounting and ERP systems across{" "}
                <Link href="/case-studies/unified-accounting" className="font-bold text-[#7C3AED] hover:underline">
                  QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo
                </Link>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-md mx-auto lg:max-w-none"
              role="img"
              aria-label="Diagram: a hub-and-spoke integration map. At the centre is your ERP. Six spokes run out to an e-commerce store, a CRM, bank and payments, warehouse and 3PL, reporting and BI, and document intake."
            >
              <div className="relative bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {HERO_SPOKES.slice(0, 2).map((spoke) => (
                    <div key={spoke.label} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col items-center text-center gap-2">
                      <span className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        <spoke.icon className="w-4 h-4 text-[#7C3AED]" />
                      </span>
                      <span className="text-xs font-bold text-slate-700 leading-snug">{spoke.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-1 h-px bg-slate-200" />
                  <div className="shrink-0 bg-[#7C3AED] rounded-2xl px-6 py-4 shadow-lg shadow-[#7C3AED]/25 flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-sm">Your ERP</span>
                  </div>
                  <span className="flex-1 h-px bg-slate-200" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {HERO_SPOKES.slice(2, 4).map((spoke) => (
                    <div key={spoke.label} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col items-center text-center gap-2">
                      <span className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        <spoke.icon className="w-4 h-4 text-[#7C3AED]" />
                      </span>
                      <span className="text-xs font-bold text-slate-700 leading-snug">{spoke.label}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {HERO_SPOKES.slice(4, 6).map((spoke) => (
                    <div key={spoke.label} className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col items-center text-center gap-2">
                      <span className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        <spoke.icon className="w-4 h-4 text-[#7C3AED]" />
                      </span>
                      <span className="text-xs font-bold text-slate-700 leading-snug">{spoke.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip — light */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* What we don't do — the signature block of A-3, placed high on purpose. Equal visual
          weight both columns, per the source spec's explicit accessibility and styling note. */}
      <section id="what-we-dont-do" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Let&apos;s be clear about scope before you read any further</h2>
            <p className="text-lg text-slate-600">ERP is a category where small teams routinely overpromise and mid-market buyers routinely get burned. So here&apos;s the boundary, upfront.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What we do</h3>
              <div className="flex flex-col gap-7">
                {WE_DO.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What we don&apos;t do</h3>
              <div className="flex flex-col gap-7">
                {WE_DONT.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl">
            A vendor who has never told you no has never told you the truth about scope.
          </blockquote>
        </div>
      </section>

      {/* What we build — three-card grid, matching AI Agent Development's offer treatment.
          Sits after the scope boundary deliberately. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Three ways we work on ERP</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {WHAT_WE_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex flex-col bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 shrink-0">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.desc}
                  {item.link && (
                    <>
                      {" "}{item.linkPrefix}
                      <Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label}</Link>
                      {item.linkSuffix}
                    </>
                  )}
                </p>
                <p className="mt-auto pt-5 border-t border-slate-200 text-xs font-semibold text-slate-500">
                  Best for: {item.bestFor}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[720px]">
            Two things frequently come with an ERP project and are worth separating in the quote: getting supplier documents into the system without retyping is{" "}
            <Link href="/services/document-invoice-processing" className="font-bold text-[#7C3AED] hover:underline">document and invoice processing</Link>, and moving data between systems on a schedule is{" "}
            <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>. Both are cheaper as their own scope than as a line item inside an ERP build, and we&apos;ll price them separately so you can see what you&apos;re paying for.
          </p>
        </div>
      </section>

      {/* Why ERP projects fail — the centrepiece of the page. Five stacked, full-width blocks,
          generous spacing, each closing on a bolded named control, semantic <strong> not a
          styled span. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five ways ERP projects go wrong, and what actually prevents each one</h2>
            <p className="text-lg text-slate-600">Everyone in this category has heard the horror stories. They&apos;re not mysterious, the failure patterns repeat, and each has a specific, unglamorous control.</p>
          </div>

          <div className="flex flex-col">
            {WHY_FAIL.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={cn("py-9", idx > 0 && "border-t border-slate-100")}
              >
                <h3 className="flex items-start gap-3 text-xl md:text-2xl font-bold mb-4 text-amber-700">
                  <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 max-w-[760px]">{item.desc}</p>
                <p className="text-slate-800 leading-relaxed max-w-[760px]">
                  <strong className="text-slate-900">The control: </strong>{item.control}
                </p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug">
            None of these five are technology failures. Four of them are decisions made before any code was written, and the fifth is a decision made after it shipped.
          </blockquote>
        </div>
      </section>

      {/* Mid-page CTA — dark, short, first of two dark bands */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Not sure whether you need integration, extension, or a new system?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            That&apos;s usually the first thing we can settle. Book a call, describe what&apos;s breaking, and we&apos;ll tell you which of the three it is, including if the honest answer is that your ERP is fine and the problem is a process nobody&apos;s fixed.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* What a connection you can trust needs — six-item technical credibility grid, matching
          AI Agent Development's and RAG Chatbot's shared treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">What a connection you can trust actually needs</h2>
            <p className="text-lg text-slate-600">An integration that works on a good day is a demo. Six things separate that from something your finance team can rely on at month-end.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_REQUIREMENTS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[720px]">
            Where a step genuinely needs judgement, reading a non-standard supplier document, deciding which of several paths applies, that&apos;s an{" "}
            <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent</Link>, and it&apos;s usually one step inside an otherwise deterministic integration. Most people overestimate how many of their steps need one.
          </p>
        </div>
      </section>

      {/* How the work runs — vertical timeline, five steps, phased-rollout framing */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five phases, phased on purpose</h2>
          </div>

          <div>
            {PROCESS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-4xl md:text-5xl font-light text-[#7C3AED] tabular-nums">{item.step}</span>
                  {idx < PROCESS.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-4" />}
                </div>
                <div className="pt-2 md:pt-3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white text-slate-500 text-xs font-bold uppercase tracking-wide">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems we work with — grouped by category, real text names, the primary keyword
          surface for the tool-name queries this page targets */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">The systems we connect and extend</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SYSTEM_GROUPS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                    <group.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((name) => (
                    <span key={name} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[720px]">
            Not listed? If it has an API, we can almost certainly connect it. Some older ERP and accounting software genuinely doesn&apos;t have one, in that case we&apos;ll tell you before you commit and propose a database-level or file-based exchange rather than promising an integration that doesn&apos;t exist.
          </p>
        </div>
      </section>

      {/* ERP, or something else — routing block, three-up then two-up (six cards) */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Is ERP work actually what you need?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {ROUTING.map((item) => {
              const inner = (
                <>
                  <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-white shadow-sm")}>
                    <item.icon className={cn("w-4.5 h-4.5", item.current ? "text-white" : "text-[#7C3AED]")} />
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}{item.current && <span className="text-slate-400 font-normal"> (this page)</span>}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </>
              );
              return item.href ? (
                <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
                  {inner}
                </Link>
              ) : (
                <div key={item.title} className="flex flex-col p-5 rounded-2xl bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30">
                  {inner}
                </div>
              );
            })}
          </div>

          <p className="text-slate-600 max-w-[720px]">
            <span className="font-bold text-slate-900">Honest answer:</span> a meaningful share of ERP enquiries we take turn out to be a workflow-automation project and a document-processing project standing next to each other. That combination is cheaper, faster, and lower-risk than anything with &quot;ERP&quot; in the title, and we&apos;d rather say so in week one than month four.
          </p>
        </div>
      </section>

      {/* Engagement models — light-styled version of the shared Template C table. No fabricated
          figures: the source spec explicitly says to publish without numbers rather than invent
          a range. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">How engagements are structured</h2>
            <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders. In a category famous for open-ended budgets, this is the point.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((m, idx) => (
              <div key={m.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-slate-50 border border-slate-100")}>
                <h3 className={cn("font-bold text-lg mb-3", idx === 1 ? "text-white" : "text-slate-900")}>{m.label}</h3>
                <p className={cn("text-sm leading-relaxed mb-4", idx === 1 ? "text-white/70" : "text-slate-600")}>{m.includes}</p>
                <p className={cn("text-sm font-bold mb-5", idx === 1 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{m.from}</p>
                <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Good for: {m.bestFor}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 max-w-[720px]">
            Every build includes monitoring for the first month. After that it&apos;s a monthly fee for monitoring, reconciliation review, vendor API changes, and small feature work,{" "}
            <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">see what that covers</Link>, and you can stop any time. You keep the source code, the integration configuration, and the documentation either way.
          </p>
        </div>
      </section>

      {/* Case studies — matching the AI Agent page's treatment exactly, Unified Accounting leads */}
      <section id="case-studies" className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">What we&apos;ve built</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  href={cs.href}
                  className="group flex flex-col h-full bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C4B5FD] transition-all"
                >
                  <span className="text-5xl md:text-6xl font-extrabold text-[#7C3AED] tracking-tight mb-2">{cs.num}</span>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">{cs.metric}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cs.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{cs.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-bold text-[#7C3AED]">
                    Read the case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — light, accordion */}
      <section className="py-16 md:py-24 px-5 lg:px-10 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Common questions</h2>
        </div>

        <div>
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Closing CTA — dark, full-bleed, second dark band */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Tell us what your team is reconciling by hand.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll map where the data actually lives, tell you whether this is an integration, an extension, or a new system, and if it needs a firm bigger than us, we&apos;ll tell you that too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
