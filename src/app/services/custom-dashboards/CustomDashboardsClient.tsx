"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown,
  Database, Workflow, Archive, LayoutDashboard,
  Bot, Home, Cloud, ClipboardList, Building2, Boxes, LineChart,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import SpecPanel from "@/components/SpecPanel";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const HERO_LAYERS = [
  { label: "Sources", icon: Database, chips: ["CRM", "Shopify", "Postgres", "Ad platforms", "Sheets"] },
  { label: "Pipeline", icon: Workflow, chips: ["Scheduled sync", "Validation", "Deduplication", "Error alerting"] },
  { label: "Warehouse", icon: Archive, chips: ["One modelled source of truth", "Historical snapshots"] },
  { label: "Dashboard", icon: LayoutDashboard, chips: ["Role-based views", "Alerts", "Export", "Embedded"] },
];

const WHAT_WE_BUILD = [
  { title: "Executive and business overview", bestFor: "founders and leadership teams making decisions from a spreadsheet someone rebuilds by hand.", desc: "Revenue, pipeline, cash position, delivery load, and headcount utilisation on one screen, reconciled across your accounting system, CRM, and project tool. The number everyone argues about becomes one number with a definition attached." },
  { title: "Client reporting dashboards", bestFor: "agencies losing two to three hours per client, per month, to report assembly.", desc: "A live, branded dashboard per client, pulling from ad platforms, analytics, and your project tool, replacing the deck your team rebuilds every month. Clients log in whenever they want instead of emailing to ask. You keep the monthly call for the commentary that actually needs a human." },
  { title: "Operations and fulfilment dashboards", bestFor: "e-commerce and logistics teams who find out about problems from customers.", desc: "Orders, inventory, exceptions, SLA breaches, and queue depth in real time, with the flagged items surfaced rather than buried. Built so the first screen shows what needs a person, not what happened last quarter." },
  { title: "Sales and pipeline dashboards", bestFor: "teams whose CRM reporting can't answer the question the sales meeting keeps asking.", desc: "Pipeline by stage, source, and owner, with conversion and cycle-time tracked over real history rather than whatever your CRM's built-in report happens to expose. Forecast against your own definitions, not the vendor's." },
  { title: "Financial and AP dashboards", bestFor: "finance teams closing the month from a position they can't see until it's over.", desc: "Cash flow, ageing, spend by vendor and category, margin by client or product, assembled from your accounting system and the documents feeding it.", link: { href: "/services/document-invoice-processing", label: "document and invoice processing" }, linkSuffix: ", which is where the clean data comes from in the first place." },
  { title: "Embedded customer-facing dashboards", bestFor: "SaaS and platform businesses where “can we see our own data?” is now a sales objection.", desc: "Analytics inside your own product or client portal, under your brand, with per-tenant data isolation and role-based access. Built as a product feature, with the security model designed before the charts." },
];

// Trimmed to three bands covering what a single dashboard needs. Reconciliation, warehouse
// modelling, and version-controlled metric definitions are the shared-foundation argument —
// that's Business Intelligence's pitch, not this page's, so it's linked rather than argued here.
const DATA_LAYER_BANDS = [
  { n: "01", title: "Connectors that survive contact with reality", desc: "We pull from each source through its API on a schedule you set, with retry logic, rate-limit handling, and alerting when a connection fails. The failure mode of most dashboards is silent: an integration breaks, the chart keeps rendering yesterday's data, and nobody notices for three weeks. Every pipeline we build tells us it broke before it tells you." },
  { n: "02", title: "Access that matches your org chart", desc: "Role-based access down to the row where you need it: an account manager sees their clients, a client sees only themselves, leadership sees everything. For embedded dashboards, tenant isolation is designed and tested before a single chart is styled." },
  { n: "03", title: "Alerts, so nobody has to remember to look", desc: "The dashboard nobody opens is worth nothing. Thresholds you define push to Slack, Teams, or email when something crosses them, so the dashboard becomes the place you go to investigate rather than the place you were supposed to check." },
];

const SPEC_ITEMS = [
  { section: "Stack", label: "Frontend", value: "React · Next.js · Recharts / D3 / ECharts" },
  { section: "Stack", label: "Backend", value: "Node · Python · REST and GraphQL APIs" },
  { section: "Stack", label: "Data", value: "Postgres · MySQL · BigQuery · ClickHouse · dbt-style modelling" },
  { section: "Stack", label: "Pipeline", value: "Airbyte · n8n · custom Python services" },
  { section: "Stack", label: "BI layer (where it fits)", value: "Metabase · Superset · Grafana · Looker Studio" },
  { section: "Delivery", label: "Typical duration", value: "Scoped after the source audit, in phase 02" },
  { section: "Delivery", label: "Hosting", value: "Your AWS, GCP, or Azure account, or ours if you'd rather" },
  { section: "Ownership", label: "Ownership", value: "Source code, pipeline, data model, and documentation on final payment" },
  { section: "Ownership", label: "After launch", value: "Monthly monitoring, tuning, and new metrics" },
];

const PHASES = [
  { step: "01", title: "Metric definition workshop", duration: "2–3 days", desc: "Before anything technical, we agree what the dashboard has to answer and what each metric means. Half of this session is usually the first time two departments discover they define the same word differently. You get the written definition set whether or not you hire us." },
  { step: "02", title: "Source audit and fixed quote", duration: "2–3 days", desc: "We connect to each source and check what's actually available through its API, how clean it is, and how far back the history goes. Only then do you get a written scope, a fixed price, and a date. If a source genuinely can't provide what the dashboard needs, you find out here, before you've committed anything." },
  { step: "03", title: "Pipeline and data model", duration: "1–2 weeks", desc: "Connectors, sync scheduling, reconciliation rules, and the modelled layer. You get a written update every Friday plus a short Loom walkthrough of what moved. This is the phase where a project is won or lost and it's the phase most vendors compress in the quote." },
  { step: "04", title: "Dashboard build and review", duration: "1–2 weeks", desc: "Charts, filters, drill-downs, roles, and alerting, built against your real data rather than sample data. You review it against numbers you already know are correct, that reconciliation against a source you trust is a scheduled step, not a favour." },
  { step: "05", title: "Launch and monthly plan", duration: "ongoing", desc: "Deployed with pipeline monitoring from day one. Then a monthly plan: watching the syncs, adding metrics as the questions change, and adjusting when a source system changes its API, which they do, without asking you first." },
];

const STACK_TABS = [
  { label: "Data sources", icon: Database, items: "HubSpot · Salesforce · Pipedrive · Zoho · Shopify · WooCommerce · Stripe · QuickBooks · Xero · NetSuite · Google Analytics · Google Ads · Meta Ads · LinkedIn Ads · Postgres · MySQL · MongoDB · Airtable · Google Sheets · Notion · Asana · ClickUp · Jira" },
  { label: "Pipeline and storage", icon: Workflow, items: "Custom Python and Node services · n8n · Airbyte · Postgres · BigQuery · ClickHouse · scheduled and event-driven syncs · warehouse-style modelling" },
  { label: "Dashboard layer", icon: LayoutDashboard, items: "React and Next.js front ends · Recharts · D3 · ECharts · Metabase · Superset · Grafana · embedded analytics with per-tenant isolation" },
  { label: "Hosting and delivery", icon: Cloud, items: "AWS · GCP · Azure · Vercel · Docker · CI/CD pipelines · regional hosting where data residency (EU or UK) is a requirement" },
];

const BUY_TABLE = [
  { label: "Time to first version", tool: "Days", custom: "Weeks, scoped after the source audit" },
  { label: "Upfront cost", tool: "Low", custom: "Higher, fixed and quoted in writing" },
  { label: "Ongoing cost", tool: "Per-seat licence, grows with headcount", custom: "Hosting plus a monthly plan" },
  { label: "Data across many systems", tool: "Possible, usually fragile", custom: "Designed for it" },
  { label: "Custom metric definitions", tool: "Constrained by the tool", custom: "Whatever your business actually means" },
  { label: "Historical snapshots", tool: "Only what sources retain", custom: "Kept from day one" },
  { label: "Embedding in your product", tool: "Limited, and licensed accordingly", custom: "Built as a product feature" },
  { label: "Row-level access control", tool: "Tool-dependent", custom: "Modelled to your org" },
  { label: "Ownership", tool: "You rent it", custom: "Code, pipeline, and model are yours" },
];

const ROUTING = [
  { title: "Custom dashboards", desc: "You need to see the state of the business, from data that currently lives in five places.", icon: LayoutDashboard, current: true },
  { title: "Business intelligence", desc: "You need to answer questions you haven't thought of yet, repeatedly, not just the ones this dashboard was built for. The warehouse and metric layer underneath several dashboards, not one screen.", icon: LineChart, href: "/services/business-intelligence" },
  { title: "Internal business tools", desc: "You need a place to actually do the work, enter it, track it, approve it, not just read it out.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Workflow automation", desc: "You need something to happen when the data changes: a record updated, a person notified, a report sent.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "CRM development", desc: "You need a system people enter and manage data inside, not just read from.", icon: Home, href: "/services/crm-development" },
  { title: "ERP systems", desc: "The dashboard reads out of it, it doesn't replace it. If nothing's connecting your ERP to the rest of the business yet, that's the prior step.", icon: Building2, href: "/services/erp-systems" },
  { title: "Inventory management", desc: "If the actual problem is the stock number itself, sync and accuracy, not visibility, fix that first, then read it out here.", icon: Boxes, href: "/services/inventory-management" },
  { title: "AI agents", desc: "The next step depends on judgement rather than a rule, not a fixed report.", icon: Bot, href: "/services/ai-agent-development" },
];

const WHERE_WRONG = [
  { title: "Built once, never watched", desc: "The pipeline fails silently. The charts keep rendering the last successful sync. Three weeks later somebody notices a number hasn't moved, and from that day nobody trusts the dashboard again, including for the metrics that were still correct. This is why monitoring is scoped in from day one here rather than sold at handover." },
  { title: "Every question got its own chart", desc: "Forty widgets, no hierarchy, and the screen that was meant to answer “are we okay?” now takes ten minutes to read. We start from the decisions the dashboard has to support and refuse charts that don't support one. Fewer, better-placed numbers beat completeness every time." },
  { title: "The definitions were never agreed", desc: "Two departments define “active client” differently, so the dashboard shows a number neither of them accepts, and both go back to their own spreadsheet. Getting the definitions written down first isn't bureaucracy, it's the whole difference between a dashboard people use and one people argue about." },
  { title: "It was built on data nobody maintains", desc: "If a field is only filled in when someone remembers, a dashboard doesn't fix that; it publicises it. Sometimes the honest answer is to fix the process feeding the system first and build a smaller dashboard afterwards. We'll say so." },
];

const ENGAGEMENT_MODELS = [
  { label: "Single dashboard", bestFor: "Proving the data layer works before committing further", includes: "One dashboard: definitions, pipeline, model, build, and launch, plus the first month of monitoring", from: "Scoped and quoted after the source audit" },
  { label: "Data layer and dashboard suite", bestFor: "Most teams with data across four or more systems", includes: "The full pipeline plus multiple role-based dashboards reading from one modelled source of truth", from: "Priced once we know how many dashboards and sources" },
  { label: "Ongoing data partner", bestFor: "Teams where the reporting questions keep evolving, most clients end up here", includes: "Pipeline monitoring, source-change fixes, new metrics and views, plus a set amount of new build work each month", from: "A monthly plan sized to your pipeline" },
];

const CASE_STUDIES = [
  { num: "80%", metric: "Faster data entry", title: "PartsFlow", desc: "A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.", href: "/case-studies/partsflow" },
  { num: "70%", metric: "Less manual data entry", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.", href: "/case-studies/unified-accounting" },
];

const FAQS = [
  { q: "How long does a custom dashboard take to build?", a: "It depends on how many systems we're pulling from and how clean the data is, not how many charts you want, most of the time goes into the data pipeline rather than the charts. You get a fixed date as part of the written quote in phase two, after the source audit." },
  { q: "Why not just use Power BI, Tableau, or Looker Studio?", a: "Often you should, and we'll say so on the call. Those tools are excellent when your data sits in one or two systems they connect to natively and your metrics match how those systems already define them. A custom build earns its cost when data spans several disagreeing systems, when you need definitions or history the source tools can't give you, or when the dashboard has to be embedded in your own product." },
  { q: "Can it show real-time data?", a: "Yes, where the source system supports it and where it genuinely changes a decision. Real-time costs more to build and more to run, so we'll ask what you'd actually do differently with a live number versus a fifteen-minute or hourly refresh. For most business dashboards, hourly is indistinguishable in practice." },
  { q: "What if our data is messy?", a: "That's normal and it's most of the work. We audit each source before quoting, agree the reconciliation and deduplication rules with you in writing, and encode them once in the pipeline. Where a field is unreliable at source, we'll tell you rather than quietly charting it." },
  { q: "Can clients or customers log in and see only their own data?", a: "Yes. Role-based access is part of the model, down to row level where needed, and for embedded dashboards tenant isolation is designed and tested before the charts are built." },
  { q: "Does it work on mobile?", a: "The dashboards are responsive, and we design the mobile view around the two or three numbers people actually check on a phone rather than shrinking a desktop grid. If your team lives in Slack, threshold alerts there are often more useful than a mobile screen." },
  { q: "Who owns the code, the pipeline, and the data?", a: "You do. Source code, pipeline, data model, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts on your infrastructure, so if you stop working with us, it keeps running." },
  { q: "Where is our data hosted?", a: "In your own AWS, GCP, or Azure account by default. Regional hosting is available where data residency (for example EU or UK) is a requirement, and we confirm the exact setup in writing before anything moves." },
  { q: "What happens when one of our source systems changes its API?", a: "It will, and usually without telling you. Pipelines ship with alerting so we find out before you do, and fixes to anything we built are covered by the monthly plan. Unmonitored pipelines are the main reason dashboards quietly stop being trusted." },
  { q: "Can you take over a dashboard someone else built?", a: "Yes, regularly. We'll audit what exists, usually the pipeline is the problem and the front end is salvageable, and tell you honestly whether to fix or rebuild, with a fixed price for either path." },
  { q: "What does it cost?", a: "It scales with the number of sources, dashboards, and user roles, so we won't quote a figure before the source audit, the gap between a three-source single dashboard and a twelve-source multi-dashboard suite is enormous. You get a fixed price in writing before any work starts, and we carry the risk of our own estimates." },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Dashboard Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom dashboards built on a real data pipeline, connecting a CRM, store, database, and ad platforms into one modelled, refreshed, role-based view. Fixed price, full ownership.",
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
    { "@type": "ListItem", position: 3, name: "Custom Dashboards", item: "https://spaciva.tech/services/custom-dashboards" },
  ],
};

function StackTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (active + 1) % STACK_TABS.length : (active - 1 + STACK_TABS.length) % STACK_TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="What we connect and what we build it on" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {STACK_TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`dash-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`dash-tabpanel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/20"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {STACK_TABS.map((tab, i) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`dash-tabpanel-${i}`}
            aria-labelledby={`dash-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <p className="text-slate-600 leading-relaxed">{tab.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `dash-faq-panel-${index}`;
  const buttonId = `dash-faq-button-${index}`;

  return (
    <div className="border border-white/10 bg-white/[0.04] rounded-2xl overflow-hidden mb-4 hover:border-[#7C3AED]/40 transition-colors">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-white">{faq.q}</span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 text-[#C4B5FD] transition-transform duration-300", isOpen && "rotate-180")} />
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
        <div className="px-6 pb-5 text-white/60 leading-relaxed">{faq.a}</div>
      </motion.div>
    </div>
  );
}

export default function CustomDashboardsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — dark base, architecture diagram as the hero element: Sources → Pipeline →
          Warehouse → Dashboard, stacked bottom to top with connecting lines. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/15 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                Custom Dashboards
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                Dashboards fail at the data, not the charts
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Anyone can put a chart on a screen. The hard part is the layer underneath: pulling from your CRM, your store, your database, and your ad platforms; reconciling records that don&apos;t agree; and keeping it all current without somebody exporting a CSV every Monday. We build that layer, then the dashboard on top of it.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#data-layer" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  See how it&apos;s built
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-white/50">
                Runs on your infrastructure · You own the code and the pipeline
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
              role="img"
              aria-label="Diagram: four stacked layers, bottom to top. Sources: CRM, Shopify, Postgres, ad platforms, spreadsheets. Pipeline: scheduled sync, validation, deduplication, error alerting. Warehouse: one modelled source of truth with historical snapshots. Dashboard: role-based views, alerts, export, embedded. Most dashboard projects only build the top layer, which is why they stop being trusted."
            >
              <div className="flex flex-col-reverse gap-2.5">
                {HERO_LAYERS.map((layer) => (
                  <div key={layer.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center shrink-0">
                        <layer.icon className="w-4 h-4 text-white" />
                      </span>
                      <span className="font-bold text-sm text-white">{layer.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.chips.map((chip) => (
                        <span key={chip} className="px-2 py-1 rounded-md bg-white/[0.07] text-white/60 text-[11px] font-semibold">{chip}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 mt-3 text-center">Most dashboard projects only build the top layer. That&apos;s why they stop being trusted.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip — a genuine white band on the dark base, not a translucent overlay. The
          shared component's edge-fade gradients and two of its logos (mix-blend-darken) are
          built for a light background; keeping it unmodified (per the sitewide "identical
          everywhere" rule) means giving it a real light backdrop here rather than adapting the
          component itself. */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-white/10" containerClassName="max-w-7xl mx-auto px-5 lg:px-10" fadeFrom="white" />

      {/* The problem — prose, centred, no cards, on the dark base */}
      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-white">You don&apos;t have a reporting problem. You have five systems that disagree.</h2>
          <div className="text-white/70 text-lg leading-relaxed text-left space-y-5 mb-10">
            <p>Your revenue number lives in the accounting system. Your pipeline lives in the CRM. Your delivery status lives in a project tool, your ad spend lives in three ad accounts, and the number your leadership team actually looks at lives in a spreadsheet somebody rebuilds every Monday morning from all of the above.</p>
            <p>So every meeting starts with a discussion about whose figure is right. Someone rebuilds the export. A decision waits three days for a number that already existed in four places. And the report is always describing last week, because it takes until Wednesday to assemble.</p>
            <p>The built-in reporting in each of those tools can only ever show you its own slice. That&apos;s not a flaw in the tools, it&apos;s the definition of them. The view you actually need is the one that spans all of them, and no vendor is incentivised to build it for you.</p>
          </div>
          <blockquote className="border-l-4 border-[#7C3AED] bg-white/5 rounded-r-2xl px-6 py-6 text-lg font-bold text-white leading-snug text-left">
            A dashboard is only worth building when someone would make a different decision because of it. If nobody would act differently, you don&apos;t need a dashboard, you need a weekly email.
          </blockquote>
        </div>
      </section>

      {/* What we build — light cards on dark base, no icons: the inversion does the visual work */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-4">
            What We Build
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Six dashboards that earn their build cost</h2>
          <p className="text-lg text-white/60">Different jobs, same foundation. What changes is who&apos;s looking and what they&apos;re allowed to see.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_WE_BUILD.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col bg-white text-[#0F172A] p-6 rounded-2xl shadow-lg"
            >
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {item.desc}
                {item.link && (
                  <>
                    {" "}<Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label}</Link>{item.linkSuffix}
                  </>
                )}
              </p>
              <p className="mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">Best for: {item.bestFor}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-white/60 max-w-[720px]">
          Getting the data into place is often the larger half of a dashboard project, and it&apos;s{" "}
          <Link href="/services/workflow-automation" className="font-bold text-[#C4B5FD] hover:underline">workflow automation</Link>{" "}
          wearing a different hat. If your data is already clean and in one system, say so on the call, the project gets meaningfully cheaper and we&apos;ll tell you so before you commit.
        </p>
      </section>

      {/* Main content + sticky spec panel — stretches to the main column's height (no
          items-start), so the sticky child can track scroll across the data layer, the phase
          band, and the stack tabs. */}
      <div id="data-layer" className="max-w-7xl mx-auto px-5 lg:px-10 py-4 scroll-mt-24">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">
            {/* The data layer — signature section, trimmed to three bands covering what a
                single dashboard needs. The full warehouse, reconciliation, and metric-definition
                discussion now belongs to Business Intelligence, linked below rather than argued
                here, per the required edit that shipped alongside that page. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">What&apos;s actually underneath a dashboard you can trust</h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">The chart layer is a week of work. Everything below it is the reason dashboards succeed or get abandoned.</p>

              <div className="flex flex-col">
                {DATA_LAYER_BANDS.map((band, idx) => (
                  <div key={band.n} className={cn("py-7 flex gap-6", idx > 0 && "border-t border-slate-100")}>
                    <span className="text-3xl font-light text-[#7C3AED] tabular-nums shrink-0 w-12">{band.n}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{band.title}</h3>
                      <p className="text-slate-600 leading-relaxed max-w-[640px]">{band.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-900 font-bold leading-snug">
                The chart layer is a week. The data layer is the project. Any quote that doesn&apos;t distinguish between the two is a quote that will change later.
              </blockquote>

              <p className="mt-6 text-slate-600 leading-relaxed max-w-[680px]">
                This covers what one dashboard needs. Reconciling data across systems, a modelled warehouse, and metric definitions everyone agrees on, so the fifth and tenth dashboard cost almost nothing, is a bigger foundation with its own page:{" "}
                <Link href="/services/business-intelligence" className="font-bold text-[#7C3AED] hover:underline">business intelligence</Link>.
              </p>
            </section>

            {/* How the build runs — horizontal phase band, a third distinct process treatment */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Five phases to a working dashboard</h2>

              <div className="lg:flex lg:items-start lg:gap-4">
                {PHASES.map((item, idx) => (
                  <div key={item.step} className="lg:flex-1 relative">
                    <div className="flex lg:flex-col gap-4 lg:gap-0 pb-10 lg:pb-0">
                      <div className="flex lg:flex-col items-center lg:items-start gap-2 shrink-0">
                        <div className="flex items-center w-full">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-[#7C3AED]/25">
                            {item.step}
                          </span>
                          {idx < PHASES.length - 1 && (
                            <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[#C4B5FD] to-slate-200 ml-2" />
                          )}
                        </div>
                      </div>
                      <div className="lg:mt-4 lg:pr-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">{item.duration}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {idx < PHASES.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-slate-200" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Stack — tabbed technology breakdown, all panels in the DOM on load */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="mb-10">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  The Stack
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">What we connect and what we build it on</h2>
                <p className="text-slate-600">We don&apos;t ask you to migrate anything. The dashboard reads from where your data already lives.</p>
              </div>
              <StackTabs />
              <p className="mt-8 text-slate-500 text-sm border-t border-slate-100 pt-6">
                Not listed? If it has an API, we can almost certainly read from it. If it doesn&apos;t, and some older systems genuinely don&apos;t, we&apos;ll tell you before you commit and propose a file-based or database-level import instead of promising an integration that doesn&apos;t exist.
              </p>
            </section>

            {/* Build or buy — two equal-weight cards + comparison table, built for the
                comparison-intent keywords */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">You may not need us for this</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">An off-the-shelf BI tool is the right answer more often than any agency page will admit. Here&apos;s the honest version of the decision.</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">An off-the-shelf tool is probably right when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your data already lives in one or two systems that the tool connects to natively, your metrics match how those systems already define them, a daily refresh is fast enough, and the audience is your own team rather than your customers. Looker Studio, Metabase, or Power BI will be live in days and cost a fraction of a custom build.{" "}
                    <span className="font-bold text-slate-900">We&apos;ll tell you this on the call and we won&apos;t quote you for something you don&apos;t need.</span>
                  </p>
                </div>
                <div className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">A custom build makes sense when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your data spans four or more systems that disagree with each other, your metrics need definitions the source tools can&apos;t express, you need history a source system overwrites, the dashboard has to be embedded in your own product under your brand, you need row-level access rules that match your org chart, or per-seat licensing has stopped making sense at your headcount. You also own it outright, which matters once this becomes something the business runs on.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-8">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Off-the-shelf BI tool</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Custom build</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BUY_TABLE.map((row) => (
                      <tr key={row.label} className="border-b border-[#E2E8F0] last:border-0">
                        <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.label}</th>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.tool}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[720px]">
                <span className="font-bold text-slate-900">Honest answer:</span> a good number of clients should start with Metabase or Looker Studio rather than a full custom build, live in days and a fraction of the cost. The pipeline underneath is the part that has to be right, whichever chart layer sits on top of it. If that pipeline needs to serve several dashboards from one shared, modelled foundation rather than one dashboard on its own, that&apos;s a bigger piece of work with its own page:{" "}
                <Link href="/services/business-intelligence" className="font-bold text-[#7C3AED] hover:underline">business intelligence</Link>.
              </p>
            </section>

            {/* Mobile/tablet spec panel — collapses here above the FAQ below 1200px */}
            <div className="min-[1200px]:hidden">
              <SpecPanel items={SPEC_ITEMS} />
            </div>
          </div>

          <aside className="hidden min-[1200px]:block">
            <div className="sticky top-32">
              <SpecPanel items={SPEC_ITEMS} />
            </div>
          </aside>
        </div>
      </div>

      {/* Dashboard, or something else — plain routing block */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-white">Is a dashboard actually what you need?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ROUTING.map((item) => {
            const inner = (
              <>
                <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-white/10")}>
                  <item.icon className="w-4.5 h-4.5 text-white" />
                </span>
                <h3 className="font-bold text-white text-sm mb-1.5">{item.title}{item.current && <span className="text-white/40 font-normal"> (this page)</span>}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </>
            );
            return item.href ? (
              <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C3AED]/40 hover:bg-white/[0.07] transition-all">
                {inner}
              </Link>
            ) : (
              <div key={item.title} className="flex flex-col p-5 rounded-2xl bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30">
                {inner}
              </div>
            );
          })}
        </div>

        <p className="text-white/60 max-w-[720px] mb-4">
          <span className="font-bold text-white">Honest answer:</span> roughly half the dashboard enquiries we take turn out to be workflow-automation projects with a reporting screen at the end. That&apos;s a cheaper project and a better outcome, and we&apos;d rather say so in week one.
        </p>
        <p className="text-white/60 max-w-[720px]">
          And if the real request is &quot;let me ask questions about our own data in plain language,&quot; that&apos;s closer to a{" "}
          <Link href="/services/rag-chatbot-development" className="font-bold text-[#C4B5FD] hover:underline">RAG chatbot</Link>{" "}
          than a dashboard, and it&apos;s often a smaller build.
        </p>
      </section>

      {/* Where dashboard projects go wrong — plain two-column list, supporting evidence */}
      <section className="max-w-5xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10 text-white">Four reasons dashboards get abandoned</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {WHERE_WRONG.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement models — Template C's replacement for an open price table. No fabricated
          figures: kept structural per the source spec's explicit instruction to publish this
          section without numbers rather than invent a range. */}
      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">How engagements are structured</h2>
        <p className="text-white/60 mb-12 max-w-[720px]">Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders. If scope moves, we re-quote in writing first.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {ENGAGEMENT_MODELS.map((m, idx) => (
            <div key={m.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-white text-[#0F172A] shadow-2xl md:-translate-y-3" : "bg-white/[0.04] border border-white/10")}>
              <h3 className={cn("font-bold text-lg mb-3", idx === 1 ? "text-slate-900" : "text-white")}>{m.label}</h3>
              <p className={cn("text-sm leading-relaxed mb-4", idx === 1 ? "text-slate-600" : "text-white/60")}>{m.includes}</p>
              <p className={cn("text-sm font-bold mb-5", idx === 1 ? "text-[#7C3AED]" : "text-[#C4B5FD]")}>{m.from}</p>
              <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-slate-100 text-slate-500" : "border-white/10 text-white/40")}>Good for: {m.bestFor}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/50 text-sm max-w-[720px]">
          Every build includes monitoring for the first month. After that it&apos;s a monthly fee and you can stop any time, you keep the code, the pipeline, the data model, and the documentation either way.
        </p>
      </section>

      {/* Case studies — matching the AI Agent page's card treatment, adapted as light cards on
          the dark base */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-white">What we&apos;ve built</h2>

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
                className="group flex flex-col h-full bg-white text-[#0F172A] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
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
      </section>

      {/* FAQ — accordion, Template A's pattern reused deliberately here, first item open */}
      <section className="max-w-3xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-white text-center">Common questions</h2>
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

      {/* Closing CTA — dark bordered accent panel, the third distinct closing treatment */}
      <section className="max-w-4xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="rounded-[2rem] sm:rounded-[3rem] border-2 border-[#7C3AED]/30 bg-white/[0.03] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-white">
            Tell us the number your team keeps rebuilding by hand.
          </h2>
          <p className="relative text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll map where that number actually lives, tell you honestly whether an off-the-shelf tool would do the job, and give you a fixed price if a custom build is genuinely the right answer.
          </p>
          <div className="relative flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
