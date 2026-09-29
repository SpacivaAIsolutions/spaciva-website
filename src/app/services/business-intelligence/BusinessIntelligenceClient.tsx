"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, AlertTriangle,
  Sheet, PieChart, LayoutDashboard, Layers,
  Database, Ruler, Search, LineChart, ShieldCheck,
  Unlock, Server, GitBranch, Activity, FolderGit2, Code2, BarChart3, Workflow, Link2,
  Building2, Package, ClipboardList, TrendingUp,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const LADDER = [
  { rung: 1, title: "Spreadsheets", icon: Sheet, cant: "Anything that spans two systems, or anything about last year", tone: "muted" as const },
  { rung: 2, title: "Each tool's own reports", icon: PieChart, cant: "Anything the tool's data model doesn't already contain", tone: "muted" as const },
  { rung: 3, title: "Dashboards", icon: LayoutDashboard, cant: "Anything nobody thought of when the dashboard was specified", tone: "mid" as const },
  { rung: 4, title: "A modelled foundation", icon: Layers, cant: "Fewer and fewer things, and new questions cost hours, not weeks", tone: "accent" as const },
];

const MATURITY_GATE = [
  {
    n: "01",
    stage: "If you're on spreadsheets",
    symptom: "The numbers live in exports, and reporting means someone rebuilding a sheet on Monday.",
    verdictLabel: "Not yet, and probably not for a while.",
    verdict: "The bottleneck isn't analysis, it's that the source data isn't reliably captured anywhere. Fix that first. Usually the honest answer is a better process, an internal tool where the work actually gets recorded, or automation that stops the copy-paste. A warehouse built on data nobody maintains will publish the mess faster and more expensively.",
  },
  {
    n: "02",
    stage: "If you're using each tool's built-in reports",
    symptom: "Your CRM reports on the CRM, your store reports on the store, and any question spanning both needs a human.",
    verdictLabel: "Not yet, buy a dashboard, not a BI programme.",
    verdict: "If you have three or four specific questions and a known audience, one custom dashboard on a light pipeline answers them for a fraction of what BI costs and takes weeks, not months. Come back when you've built the third dashboard and noticed you're rebuilding the same joins each time.",
    link: { href: "/services/custom-dashboards", label: "custom dashboard" },
  },
  {
    n: "03",
    stage: "If you have dashboards and they've stopped keeping up",
    symptom: "Every new question is a ticket. Two departments' dashboards disagree and nobody can adjudicate. Someone maintains six pipelines that each do a slightly different version of the same transformation.",
    verdictLabel: "Yes, this is exactly the moment.",
    verdict: "The economics have flipped. You're now paying more to maintain fragmented pipelines than a shared foundation would cost, and the fifth, tenth, and twentieth question become nearly free once the modelling is done once.",
  },
  {
    n: "04",
    stage: "If you have a warehouse and it isn't trusted",
    symptom: "It exists, it's stale or contested, and people have quietly gone back to their own extracts.",
    verdictLabel: "Yes, but it's a rescue, not a build.",
    verdict: "We'll audit what's there and tell you honestly whether to fix the modelling and governance or restart. It's usually fix, a sound warehouse with poor definitions and no ownership is a much smaller job than it looks.",
  },
];

const WHAT_WE_BUILD = [
  { title: "The warehouse", icon: Database, desc: "One place where data from every system lands and stays, modelled properly. We'll pick whichever engine is cheapest for your volume, because we earn nothing on the choice.", bestFor: "everyone at rung three or above. This is the foundation the rest sits on.", linkPrefix: "Building the pipelines that land it there is its own scope, see ", link: { href: "/services/data-warehousing-etl", label: "data warehousing & ETL" }, linkSuffix: "." },
  { title: "The metric layer", icon: Ruler, desc: "Every metric defined once, in version-controlled code, with the definition visible to anyone reading a number. “Active customer,” “net revenue,” “churn,” agreed across departments and enforced by the system rather than by memory. Typically dbt or an equivalent.", bestFor: "any company where two teams have ever disagreed about a number in a meeting. So, any company." },
  { title: "Self-serve analytics", icon: Search, desc: "A BI tool your team can actually use, Metabase, Superset, Looker Studio, or Power BI if you already own the licences, connected to the modelled layer so people explore safely. Every answer comes from the same definitions, so self-serve doesn't mean self-invented.", bestFor: "teams where an analyst has become a queue." },
  { title: "Analysis and modelling", icon: LineChart, desc: "Cohorts, retention, margin by segment, inventory ageing, the questions that need modelling rather than a chart, not a forecast. Built into the warehouse as reusable models, not delivered as a one-off slide.", bestFor: "teams who've hit the ceiling of what a dashboard can express.", linkPrefix: "Estimating what happens next rather than describing what already did, forecasting, lifetime value, churn risk, is ", link: { href: "/services/predictive-analytics", label: "predictive analytics" }, linkSuffix: ", a different scope with a different error bar." },
  { title: "Governance and ownership", icon: ShieldCheck, desc: "Access control, data lineage, documented definitions, freshness monitoring, and a written answer to “who owns this metric.” Unglamorous, and it is the difference between a warehouse that's trusted in year two and one that isn't.", bestFor: "everyone, and it's the piece most often cut from a quote. We include it." },
];

const SHELFWARE = [
  {
    title: "The tool was bought before the data was ready",
    desc: "Licences signed, a consultant connects it to four sources, and it surfaces four systems' worth of disagreement with no layer to reconcile them. People conclude the tool is wrong. The tool was fine.",
    decision: "foundation first, tool last. We build the warehouse and metric layer before recommending a BI tool, and by then the choice matters far less than anyone expected, which is why we can be indifferent about it.",
  },
  {
    title: "Nobody agreed what the numbers meant",
    desc: "Finance and sales define revenue differently, both legitimately. The dashboard picks one, the other team rejects it, and both go back to their own extracts. The disagreement was never technical, but it kills the system just the same.",
    decision: "definitions are agreed in a workshop before modelling, written into version-controlled code, and displayed next to every number. Contested definitions get both versions, named distinctly, rather than a silent winner.",
  },
  {
    title: "It required an analyst for every question",
    desc: "Self-serve was the promise; in practice the model was too complex to explore safely, so everything routed through one person. They became a queue, the queue got long, and people stopped asking.",
    decision: "model for the question, not for the source. Tables shaped around how the business thinks, named in business language, with the joins already resolved. Enablement is scoped in, we train your team on your own data, not on a demo dataset.",
  },
  {
    title: "It went stale and nobody noticed",
    desc: "A pipeline broke. Charts kept rendering the last successful load. Someone spotted a number that hadn't moved in three weeks, and from that day nothing in the warehouse was trusted again, including everything that was still correct.",
    decision: "freshness monitoring and alerting on every model from day one, plus a visible last-updated timestamp on every dashboard. Trust is lost once and regained slowly; the monitoring costs almost nothing by comparison.",
  },
];

const STACK_CHOICES = [
  { title: "Open source unless you need otherwise", icon: Unlock, desc: "Metabase, Superset, and dbt cover what most mid-market teams need at a fraction of per-seat BI licensing. We have no reseller relationship with any vendor, so nothing about our recommendation is commission-driven. If you already own Power BI licences, we'll build to those instead, that's usually the cheapest correct answer." },
  { title: "The smallest warehouse that works", icon: Server, desc: "Postgres handles far more than people expect and costs a fraction of a cloud warehouse. We'll start there unless your volume genuinely requires BigQuery or ClickHouse, and we'll tell you where that threshold is for your data rather than defaulting upward." },
  { title: "Definitions in version control", icon: GitBranch, desc: "Metrics live as code, reviewed like code, with history. When a definition changes you can see who changed it, when, and why, and every number that used it changes with it." },
  { title: "Modelled for the question", icon: Layers, desc: "Tables shaped around how the business thinks, not around how the source system stores. Named in business language, joins pre-resolved, so exploring doesn't require knowing your CRM's schema." },
  { title: "Freshness visible everywhere", icon: Activity, desc: "Every model monitored, every dashboard stamped with when its data last loaded. A stale number that announces itself is survivable; a stale number that doesn't is what kills trust permanently." },
  { title: "Built to be handed over", icon: FolderGit2, desc: "Standard tools, documented, in your repository, running in your accounts. Your own analyst or a future hire can pick it up. Nothing proprietary and nothing requiring us specifically." },
];

const PROCESS = [
  { step: "01", title: "Question and definition workshop", duration: "3–5 days", desc: "Not “what data do you have”, what decisions are being made badly for lack of a number. We work backwards from decisions to metrics to sources, and we settle the contested definitions in the room. You get the written definition set whether or not you hire us; for many teams it's the first time these exist on paper." },
  { step: "02", title: "Source audit and fixed quote", duration: "2–3 days", desc: "We connect to each system and check what's genuinely available, how clean it is, and how far back history goes. Then a written scope, a fixed price, and a date. If a source can't support a metric you need, you find out here." },
  { step: "03", title: "Warehouse and first metrics live", duration: "2 weeks", marker: "first real number", desc: "Warehouse stood up, the highest-value three or four metrics modelled and live. Deliberately early: you validate against numbers you already know are right, and you see value before the bulk of the spend. Written update every Friday plus a short Loom walkthrough." },
  { step: "04", title: "Full modelling and self-serve rollout", duration: "scoped per project", desc: "The rest of the metric layer, the BI tool connected, access and governance configured, and your team trained on your own data. Enablement is scoped in, not an optional add-on, an untrained team is the shelfware mechanism." },
  { step: "05", title: "Monitor, extend, hand over", duration: "ongoing", desc: "Freshness monitoring and alerting, source API changes handled, new metrics added as the questions change, and documentation kept current. A named engineer stays on it. If you hire an internal analyst later, we hand over properly rather than leaving them to reverse-engineer it." },
];

// Per confirmation, all listed tools including the enterprise-tier items (Snowflake, Redshift,
// Fivetran, CDC) are genuine, evidenced experience.
const TOOL_GROUPS = [
  {
    category: "Warehouse and storage", icon: Database, items: [
      "Postgres", "BigQuery", "ClickHouse", "Snowflake", "Redshift", "S3 and object storage",
    ],
  },
  {
    category: "Modelling and transformation", icon: Code2, items: [
      "dbt", "SQL", "Python", "Custom transformation services", "Version-controlled metric definitions",
    ],
  },
  {
    category: "BI and visualisation", icon: BarChart3, items: [
      "Metabase", "Apache Superset", "Looker Studio", "Power BI", "Grafana", "Custom React front ends",
    ],
  },
  {
    category: "Ingestion", icon: Workflow, items: [
      "Airbyte", "Fivetran", "n8n", "Custom Python and Node connectors", "CDC",
    ],
  },
  {
    category: "Sources", icon: Link2, items: [
      "HubSpot", "Salesforce", "Pipedrive", "Zoho", "Shopify", "WooCommerce", "Stripe", "QuickBooks",
      "Xero", "NetSuite", "Odoo", "Google Analytics", "Google Ads", "Meta Ads", "Postgres", "MySQL",
      "MongoDB", "Airtable", "Google Sheets",
    ],
  },
];

const ROUTING = [
  { title: "Business intelligence", desc: "You need to answer questions you haven't thought of yet, repeatedly, without an analyst in the loop.", icon: LineChart, current: true },
  { title: "Predictive analytics", desc: "You want to know what's likely to happen next, not just what's true now, churn, demand, revenue, with an error bar attached.", icon: TrendingUp, href: "/services/predictive-analytics" },
  { title: "Custom dashboards", desc: "You need to see a known set of things for a known audience. If you can list your questions on one hand, buy a dashboard, not a warehouse.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "ERP systems", desc: "The financial and operational system of record. BI reads from it; it isn't BI.", icon: Building2, href: "/services/erp-systems" },
  { title: "Inventory management", desc: "The stock number being right across channels. An accuracy problem, not an analysis one.", icon: Package, href: "/services/inventory-management" },
  { title: "Internal business tools", desc: "A place work gets recorded. If your data is bad because nobody enters it consistently, this comes first.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Workflow automation", desc: "Something happens without anyone opening anything. If a number should trigger an action rather than be looked at, automate it.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Web applications", desc: "The engineering underneath all of these. If you're evaluating who can build custom software at all, not just this shape of it.", icon: Code2, href: "/services/web-applications" },
];

const ENGAGEMENT_MODELS = [
  { label: "Foundation build", bestFor: "Rung three, dashboards exist and every new question has become a project", includes: "Warehouse, ingestion from your core sources, the metric layer for your core definitions, one BI tool connected, and your team trained on it. Includes the first month of monitoring", from: "Scoped and quoted after the source audit" },
  { label: "Foundation plus analysis", bestFor: "Teams who've hit what a dashboard can express and need the questions modelled, not charted", includes: "Everything above plus the modelling work that needs actual analysis: cohorts, retention, margin by segment, inventory ageing, built as reusable models rather than one-off reports. Forecasting and lifetime value prediction are scoped separately, under predictive analytics", from: "Priced once we know the analysis you need" },
  { label: "Ongoing data partner", bestFor: "Teams without an internal data hire yet, and a cheaper way to find out what that hire would need to be", includes: "Freshness monitoring, source changes handled, new metrics and models as questions evolve, and a set amount of analysis work each month", from: "A monthly plan sized to your data" },
];

const CASE_STUDIES = [
  { num: "70%", metric: "Less manual data entry", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo. Six ledgers, one pipeline, the ingestion problem that sits underneath any reporting layer.", href: "/case-studies/unified-accounting" },
  { num: "80%", metric: "Faster data entry", title: "PartsFlow", desc: "A spare-parts distributor's inventory data moved through validated bulk imports and a live sync instead of row-by-row spreadsheet work across a 5,000+ SKU catalogue.", href: "/case-studies/partsflow" },
];

const FAQS = [
  { q: "How is this different from just building dashboards?", a: "A dashboard answers questions you've already thought of. This builds the foundation so new questions cost hours rather than a project. If you can list your questions on one hand and the audience is fixed, buy a dashboard, it's faster and much cheaper, and we'll tell you so on the call." },
  { q: "Do we need a data warehouse, or can we connect the BI tool straight to our systems?", a: "Direct connection works for one or two sources with simple questions. It breaks when you need to join systems that disagree, when you need history a source overwrites, or when your production database starts slowing down because a dashboard is querying it. Those three are the signals, and if none apply, skip the warehouse." },
  { q: "Which BI tool should we use?", a: "Usually whichever is cheapest that meets your needs, and once the modelling is right, that choice matters much less than people expect. Metabase covers most mid-market requirements at a fraction of per-seat licensing. If you already own Power BI, we'll build to it. We hold no reseller commission on any tool, so nothing about that answer is influenced by what we'd earn." },
  { q: "We already bought a BI tool and nobody used it. Why would this be different?", a: "That's the most common story we hear, and the tool was rarely the cause. It's usually one of four things: the data wasn't ready, nobody agreed what the numbers meant, every question still needed an analyst, or it went stale and lost trust. Each has a specific fix and all four are addressed in the build." },
  { q: "How long until we see something useful?", a: "Your first real metrics are live in about two weeks, deliberately early, so you validate against numbers you already know and see value before the bulk of the spend. Full modelling and rollout takes longer, depending on source count and data quality." },
  { q: "What if our data is messy?", a: "It is, and that's most of the work. We audit each source before quoting and agree cleaning and reconciliation rules in writing. Where a field is unreliable at source, we'll tell you rather than quietly modelling it, a metric built on a field people fill in when they remember is worse than no metric." },
  { q: "Can our team explore the data themselves?", a: "That's the point, and it's why modelling is done for the question rather than the source. Tables named in business language, joins pre-resolved, definitions attached. Training your team on your own data is scoped into the project, not sold as an extra, skipping it is how BI becomes shelfware." },
  { q: "Do we need to hire a data analyst?", a: "Eventually, probably. Not to start. The monthly plan covers monitoring and new models, which for most mid-market teams is cheaper than a hire and a better way to learn what that hire actually needs to be. When you do hire, everything is documented and standard, and we hand over to them properly." },
  { q: "Who owns the warehouse and the models?", a: "You do. The warehouse, the models, the metric definitions, and the documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts on your infrastructure." },
  { q: "Where is our data hosted?", a: "In your own AWS, GCP, or Azure account by default, with regional hosting where data residency, EU or UK, is a requirement. Confirmed in writing before anything moves." },
  { q: "Can you take over a warehouse someone else built?", a: "Yes, regularly. We'll audit it and tell you honestly whether to fix the modelling and governance or restart, with a fixed price for either path. It's usually fix, a sound warehouse with contested definitions and no ownership is a smaller job than it looks." },
  { q: "What does it cost?", a: "It scales with source count, metric complexity, and how much analysis work is involved, so we won't quote a figure before the source audit. Fixed price in writing before any work starts, and we carry the risk of our own estimates." },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Intelligence & Analytics Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Business intelligence foundations: version-controlled metric layer, self-serve analytics, and governance on top of a modelled warehouse. No reseller commissions, fixed price.",
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
    { "@type": "ListItem", position: 3, name: "Business Intelligence", item: "https://spaciva.tech/services/business-intelligence" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `bi-faq-panel-${index}`;
  const buttonId = `bi-faq-button-${index}`;

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

export default function BusinessIntelligenceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, two column. Right side is a data-maturity ladder: a self-location
          device, not an architecture diagram. Rungs 1-2 muted, rung 3 mid-tone, rung 4 accent,
          with the "most teams are here" annotation pointing at rung 3. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                Business Intelligence
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Your last BI tool didn&apos;t fail. The data underneath it did.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Most companies that abandoned a BI tool didn&apos;t have a tool problem. They had four systems that disagreed, no agreed definition of &quot;revenue,&quot; and an analyst who became a bottleneck. We build the foundation, a warehouse, a modelled metric layer, and definitions everyone accepts, so the tool on top becomes almost incidental.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#maturity-gate" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  Find out if you&apos;re ready
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                No reseller commissions · Open-source stack by default · You own the warehouse, the models, and the code
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
              role="img"
              aria-label="Diagram: a four-rung data maturity ladder. Rung one, spreadsheets, can't answer anything spanning two systems or anything about last year. Rung two, each tool's own reports, can't answer anything the tool's data model doesn't already contain. Rung three, dashboards, can't answer anything nobody thought of when the dashboard was specified. Rung four, a modelled foundation, can answer fewer and fewer things, with new questions costing hours rather than weeks. Most teams calling Spaciva are on rung three."
            >
              <div className="flex flex-col-reverse gap-3">
                {LADDER.map((item) => (
                  <div
                    key={item.rung}
                    className={cn(
                      "rounded-2xl p-4 border transition-all",
                      item.tone === "accent"
                        ? "bg-[#7C3AED] border-[#7C3AED] shadow-lg shadow-[#7C3AED]/25 ml-10 sm:ml-14"
                        : item.tone === "mid"
                        ? "bg-[#F5F3FF] border-[#7C3AED]/30 ml-5 sm:ml-7"
                        : "bg-white border-slate-200"
                    )}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs",
                        item.tone === "accent" ? "bg-white/20 text-white" : item.tone === "mid" ? "bg-[#7C3AED]/15 text-[#7C3AED]" : "bg-slate-100 text-slate-500"
                      )}>
                        {item.rung}
                      </span>
                      <item.icon className={cn("w-4 h-4", item.tone === "accent" ? "text-white" : "text-[#7C3AED]")} />
                      <span className={cn("font-bold text-sm", item.tone === "accent" ? "text-white" : "text-slate-900")}>{item.title}</span>
                    </div>
                    <p className={cn("text-xs leading-relaxed", item.tone === "accent" ? "text-white/80" : "text-slate-500")}>
                      Can&apos;t answer: {item.cant}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">Most teams calling us are on rung three.</p>
            </motion.div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-10 max-w-[600px] mx-auto">
            If you&apos;re on rung one or two, this page probably isn&apos;t what you need yet. Section three explains why.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* The maturity gate — the signature block of A-4, placed high on purpose. All four
          bands share identical visual weight: same background, same border, same type size.
          The "not yet" verdicts are not styled as warnings, disclaimers, or muted callouts —
          that equality is the entire persuasive mechanism. */}
      <section id="maturity-gate" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">You may not be ready for this, and we&apos;ll tell you</h2>
            <p className="text-lg text-slate-600">BI has a shelfware problem because it gets sold to companies at the wrong stage. Find yourself below.</p>
          </div>

          <div className="flex flex-col gap-6">
            {MATURITY_GATE.map((item) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#E2E8F0] bg-slate-50 p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="flex items-center gap-3 md:w-[280px] shrink-0">
                    <span className="text-2xl font-light text-[#7C3AED] tabular-nums">{item.n}</span>
                    <h3 className="font-bold text-slate-900 text-lg">{item.stage}</h3>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-600 leading-relaxed mb-3">
                      <span className="font-bold text-slate-900">The symptom: </span>{item.symptom}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900">The verdict: {item.verdictLabel} </span>
                      {item.link ? (
                        <>
                          {item.verdict.split(item.link.label)[0]}
                          <Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label}</Link>
                          {item.verdict.split(item.link.label)[1]}
                        </>
                      ) : (
                        item.verdict
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl">
            BI sold to a company on rung two is how BI got its reputation. The tool wasn&apos;t the problem and the next tool won&apos;t be either.
          </blockquote>
        </div>
      </section>

      {/* What we build — five cards, three across then two below, matching AI Agent
          Development's offer treatment. Sits after the maturity gate deliberately. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five pieces, and you don&apos;t need all of them</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Getting data into the warehouse on a schedule, from every source, reliably, is{" "}
            <Link href="/services/data-warehousing-etl" className="font-bold text-[#7C3AED] hover:underline">data warehousing &amp; ETL</Link>, and it&apos;s priced as its own scope. If your data is already centralised and clean, say so on the call, the project gets substantially smaller and we&apos;ll tell you so before you commit.
          </p>
        </div>
      </section>

      {/* Why BI becomes shelfware — Template A's persuasive engine. Four stacked, full-width
          blocks, each closing on a bolded named decision, semantic <strong>. Longest scroll on
          the page. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four ways BI becomes shelfware, and what prevents each</h2>
            <p className="text-lg text-slate-600">Abandoned BI tools have a small number of causes and they repeat almost exactly.</p>
          </div>

          <div className="flex flex-col">
            {SHELFWARE.map((item, idx) => (
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
                  <strong className="text-slate-900">The decision that prevents it: </strong>{item.decision}
                </p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug">
            Three of these four are decisions made before any code is written. None of them are about which BI tool you chose.
          </blockquote>
        </div>
      </section>

      {/* Mid-page CTA — dark, short, first of two dark bands */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Not sure whether you need a warehouse or just a dashboard?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            That&apos;s usually settled in one call. Tell us what questions you&apos;re trying to answer and how many places the data lives, and we&apos;ll tell you which rung you&apos;re on, including if the honest answer is that you&apos;re not ready and shouldn&apos;t spend anything yet.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* The stack, and why we have no opinion to sell — six-item technical credibility grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Six choices we make differently</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STACK_CHOICES.map((item, idx) => (
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
            If what you actually want is to ask questions of your data in plain language, that&apos;s closer to a{" "}
            <Link href="/services/rag-chatbot-development" className="font-bold text-[#7C3AED] hover:underline">RAG chatbot</Link>{" "}
            over a modelled layer than a BI tool, and it only works if the modelling underneath is right first. Where a step needs genuine judgement rather than a query, that&apos;s an{" "}
            <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent</Link>.
          </p>
        </div>
      </section>

      {/* How the work runs — vertical timeline, five steps, first real number marked at step
          three */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five phases, first real number in week two</h2>
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
                  <span className={cn("text-4xl md:text-5xl font-light tabular-nums", item.marker ? "text-[#7C3AED]" : "text-[#7C3AED]")}>{item.step}</span>
                  {idx < PROCESS.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-4" />}
                </div>
                <div className="pt-2 md:pt-3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white text-slate-500 text-xs font-bold uppercase tracking-wide">
                      {item.duration}
                    </span>
                    {item.marker && (
                      <span className="px-3 py-1 rounded-full bg-[#7C3AED] text-white text-xs font-bold uppercase tracking-wide">
                        {item.marker}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools we work with — grouped by category, real text names, the primary keyword
          surface for tool-name implementation queries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What we build it on</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOL_GROUPS.map((group, idx) => (
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
            We hold no reseller or partner commission on any tool listed here. If Looker Studio on a Postgres warehouse does what you need for a fraction of the cost, that&apos;s what we&apos;ll recommend, and we&apos;ll say so before you&apos;ve spent anything.
          </p>
        </div>
      </section>

      {/* BI, or something else — routing block, six cards, three-up then three-up */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Is BI actually what you need?</h2>
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
            <span className="font-bold text-slate-900">Honest answer:</span> a good share of BI enquiries are one dashboard and a fixed definition of two metrics. That&apos;s weeks and a fraction of the cost, and we&apos;d rather scope it that way in week one than sell a warehouse to a company that needs a chart.
          </p>
        </div>
      </section>

      {/* Engagement models — three columns, middle emphasised. No fabricated figures: the
          source spec explicitly says to publish without figures rather than invent a range. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">How engagements are structured</h2>
            <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. No hourly billing. In a category built on day rates and open-ended discovery, this is the point.</p>
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
            Every build includes monitoring for the first month. After that it&apos;s a monthly fee,{" "}
            <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">see what that covers</Link>, and you can stop any time, you keep the warehouse, the models, the definitions, and the documentation either way. If you hire an analyst, we hand over to them properly.
          </p>
        </div>
      </section>

      {/* Case studies — honestly framed as the ingestion layer underneath BI, not BI outcomes
          themselves, per the source spec's explicit note that this is the weakest-evidenced
          page in the set. Not dressed up as more than what they are. */}
      <section id="case-studies" className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">What we&apos;ve built</h2>
            <p className="text-slate-500 text-sm">These are ingestion and pipeline projects, the layer underneath a BI foundation, not warehouse-and-metrics case studies. We&apos;d rather say that plainly than imply otherwise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
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
              Tell us the question your team can&apos;t answer.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll work out which rung you&apos;re on, tell you honestly whether you need a warehouse or just a dashboard, and give you a fixed price if a foundation is genuinely the right answer.
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
