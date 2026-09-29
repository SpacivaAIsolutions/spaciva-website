"use client";

import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown,
  Database, Workflow, GitBranch, Boxes,
  ShoppingBag, LineChart, Cloud, Server, Eye, Repeat,
  ClipboardList, LayoutDashboard, Building2,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import SpecPanel from "@/components/SpecPanel";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const SPEC_ITEMS = [
  { section: "Stack", label: "Warehouses", value: "Postgres · BigQuery · ClickHouse · Snowflake" },
  { section: "Stack", label: "Ingestion", value: "Airbyte · Meltano · custom Python connectors · CDC" },
  { section: "Stack", label: "Orchestration", value: "Dagster · Airflow · n8n for lighter workloads" },
  { section: "Delivery", label: "First source landing", value: "Typically week one" },
  { section: "Delivery", label: "Hosting", value: "Your cloud, or ours with a documented exit path" },
  { section: "Ownership", label: "Ownership", value: "All code, infra-as-code, and credentials transfer on final payment" },
];

const DECISIONS = [
  { title: "Standard SaaS sources, modest volume", situation: "You need Shopify, HubSpot, Stripe, and Google Ads in one place, and none of them is enormous.", verdict: "Buy the connectors, don't build them.", body: "Airbyte or Fivetran will do this in an afternoon for less than we'd charge to reproduce it, and doing it well is genuinely somebody else's full-time job. What you may still want from us is the warehouse underneath and someone to own it, that's a much smaller scope than a pipeline build, and we'll quote it that way." },
  { title: "One system nobody supports", situation: "There's a connector for four of your sources and none for the fifth, a legacy ERP, a regional logistics provider, an internal database, a supplier who sends CSVs by email.", verdict: "This is the job.", body: "Unsupported sources are where custom engineering earns its money, and where most stacks quietly stall. We build the connector properly, incremental, idempotent, rate-limit-aware, with backfill, and it sits alongside your managed connectors rather than replacing them." },
  { title: "The bill grew and your volume didn't", situation: "Managed platforms price on rows synced, not on business value. One high-churn table can multiply a bill while your revenue sits still.", verdict: "Worth an hour of arithmetic before anything else.", body: "Sometimes the fix is a configuration change and you keep the platform. Sometimes two tables account for most of the bill and moving only those two onto owned pipelines pays for the build in months. We'll tell you which, and the first answer is common." },
  { title: "It works, but it's one person's cron job", situation: "The pipeline runs, on a VM someone set up, on a schedule nobody documented, and when it fails you find out because a client asks why a number looks wrong.", verdict: "This is a rescue, and it's usually cheaper than you think.", body: "We rarely rebuild these. We wrap what exists in orchestration, monitoring, and version control, document it, and take the pager. The engineering is sound more often than not, what's missing is everything around it." },
];

const WHAT_WE_BUILD = [
  { title: "Ingestion and connectors", desc: "Managed connectors where they exist, custom ones where they don't, REST and GraphQL APIs, SFTP drops, database replicas, change-data-capture off Postgres or MySQL, and the supplier who still emails a spreadsheet. Incremental by default, idempotent so a re-run can't double-count, and rate-limit-aware so you don't get throttled into a two-day backlog.", bestFor: "anyone with a source no platform supports. That's most people, once you get past the top ten SaaS tools." },
  { title: "The warehouse", desc: "One place where everything lands and stays, with history retained even where the source overwrites it, which is most of them. Raw and modelled layers kept separate so a transformation bug never destroys the original. Postgres, BigQuery, ClickHouse, or Snowflake depending on your volume and budget, and we'll pick the cheapest one that works, because we earn nothing on the choice.", bestFor: "everyone. This is the foundation, and it's the piece most often skipped in favour of syncing straight into a BI tool." },
  { title: "Orchestration and scheduling", desc: "Jobs with declared dependencies, retries with backoff, alerting that names the failed step, and a run history you can look at. Dagster or Airflow where the graph is real; something lighter where it isn't, because a four-source stack does not need a distributed scheduler and we won't sell you one.", bestFor: "anyone whose current answer to “what runs when?” is a cron file and a person's memory." },
  { title: "Data quality and observability", desc: "Freshness checks on every table, row-count anomaly detection, schema-drift handling that quarantines rather than crashes, and alerts that reach a human in Slack. Plus a last-updated timestamp visible wherever the data is consumed.", bestFor: "everyone, and it's the line most often cut from a competing quote." },
  { title: "Migration and backfill", desc: "Moving off a legacy warehouse, consolidating after an acquisition, or loading eight years of history into a new one. Reconciled row by row against the source, with a documented cutover and a rollback path, so you're never trusting a migration on the strength of a total that looked about right.", bestFor: "one-off projects with a hard deadline. Priced separately from ongoing pipeline work." },
];

const WHY_FAIL = [
  { title: "The source changed and nobody was told", desc: "A vendor renames a field, adds a required parameter, or deprecates a version. Your loader either errors out or, worse, keeps running and writes nulls into a column that used to hold revenue.", control: "schema contracts on every source. Unexpected changes quarantine the affected rows and alert, rather than failing the whole run or silently accepting the new shape. Additive changes flow through; breaking ones stop at the gate." },
  { title: "The job failed and the dashboard kept rendering", desc: "The load didn't run. The charts drew perfectly, using yesterday's data. Nobody noticed for three weeks, and after that nothing in the warehouse was trusted again, including everything that was still correct.", control: "freshness monitoring on every table with an expected-arrival window, and a visible last-updated timestamp everywhere the data is consumed. Trust is lost once and regained slowly. The monitoring costs almost nothing by comparison." },
  { title: "A re-run doubled the numbers", desc: "Something failed halfway. Someone re-ran it. The load wasn't idempotent, so half the rows landed twice, and the fix was a manual delete against production that nobody wants to talk about.", control: "every load is idempotent and keyed. Re-running any window produces the same result as running it once, which means recovery is a button rather than a judgement call." },
  { title: "It was built for the volume you had", desc: "It worked at 50,000 rows. At two million it takes six hours, overlaps the next scheduled run, and the warehouse bill is now a line item somebody's asking about.", control: "incremental loading from day one, even where a full refresh would be simpler at current volume. Partitioning and clustering decided at build time, not retrofitted under pressure." },
  { title: "The person who built it left", desc: "The credentials were in someone's environment. The transformation logic was in a notebook. There was no repository, no documentation, and no second person who had ever looked at it.", control: "everything in version control, infrastructure as code, credentials in a managed secret store, and a written runbook covering the failure modes above. Handed over whether or not you keep us on afterwards." },
];

const STACK_TABS = [
  { label: "Sources", icon: ShoppingBag, items: "Shopify · Amazon Seller Central · WooCommerce · HubSpot · Salesforce · Pipedrive · Stripe · QuickBooks · Xero · NetSuite · Zoho · Google Ads · Meta Ads · Google Analytics 4 · Postgres · MySQL · MongoDB · SFTP and CSV drops · anything with an API, and several things without one" },
  { label: "Ingestion", icon: Repeat, items: "Airbyte · Meltano · Singer taps · Debezium for change data capture · custom Python connectors where nothing else fits" },
  { label: "Warehouse", icon: Database, items: "Postgres · BigQuery · ClickHouse · Snowflake · DuckDB for smaller analytical workloads that don't justify a cloud warehouse" },
  { label: "Orchestration", icon: Workflow, items: "Dagster · Airflow · Prefect · n8n where the graph is simple enough that a full scheduler is overhead" },
  { label: "Quality & observability", icon: Eye, items: "Freshness and volume checks · schema contracts · dbt tests where dbt is in play · Slack and PagerDuty alerting · run-history dashboards" },
  { label: "Consumption", icon: LayoutDashboard, items: "Metabase · Superset · Looker Studio · Power BI · direct SQL access · reverse ETL back into your operational tools" },
];

const DECIDED_ON = [
  { title: "ETL vs ELT", question: "ETL transforms data before it lands. ELT lands it raw and transforms it inside the warehouse.", verdict: "ELT, almost always, for the companies we work with.", body: "Storage is cheap, warehouse compute is fast, and keeping the raw layer means a transformation bug is a re-run rather than a re-extraction. ETL still wins in two cases: when you're legally not allowed to land the raw data, and when the source volume is large enough that filtering before load saves real money. Both are rarer than the internet suggests." },
  { title: "Data warehouse vs data lake", question: "A warehouse stores structured, modelled data for querying. A lake stores raw files of any shape, cheaply, for processing later.", verdict: "You almost certainly want a warehouse.", body: "Lakes solve a problem, unstructured data at volume, machine-learning workloads on raw files, that most mid-market companies don't have. A lake bought without that problem becomes a folder of files nobody queries. If your data is rows and columns from business systems, a warehouse is the answer and the lakehouse conversation is a distraction." },
  { title: "One-off migration vs ongoing pipeline", question: "Moving history once and syncing continuously are different projects, and quoting them together is how scopes get confused.", verdict: "Separate them, and do the migration second.", body: "Build the ongoing pipeline first, confirm it's landing correctly, then backfill history through the same code path. Migrating first with a separate script means you've written the logic twice and reconciled it never. Migration is priced as its own fixed scope." },
];

const PROCESS = [
  { step: "01", title: "Source audit", duration: "0.5–2 days", desc: "We list every system, what's in it, how it can be reached, and what it costs to extract. This is also where we tell you which sources aren't worth pulling yet. You get the list whether or not you go ahead." },
  { step: "02", title: "First source, end to end", duration: "typically week one", desc: "One source, ingested, landed, modelled, and visible, with monitoring attached. It proves the architecture and gives you something to look at before most of the budget is committed.", marker: "First source lands here" },
  { step: "03", title: "Remaining sources", duration: "scoped per project", desc: "The rest, in the order you'll actually use them rather than easiest-first. Each one gets freshness checks, schema contracts, and a documented failure mode as it lands." },
  { step: "04", title: "History and reconciliation", duration: "scoped per project", desc: "Backfill through the same code path as the live pipeline, then reconcile against the source system row by row. You get the reconciliation output, not a summary of it." },
  { step: "05", title: "Handover, and then we run it", duration: "ongoing", desc: "Repository, infrastructure as code, runbook, and a walkthrough with whoever will own it on your side. Then the monthly plan starts and the alerts route to us." },
];

const ONGOING = [
  { title: "We get the alert first", icon: Eye, desc: "Freshness and failure alerts route to us, not to your team. You hear about a broken load from us alongside what we've already done about it." },
  { title: "Source changes handled", icon: GitBranch, desc: "Vendors change APIs. When one does, adapting the connector is inside the plan, not a change order." },
  { title: "Backfills on request", icon: Repeat, desc: "A source was down, a field was wrong, a correction landed late. Re-running a window is routine work and it's covered." },
  { title: "Cost review", icon: Cloud, desc: "Warehouse and connector spend reviewed monthly. If a table is costing more than it's worth, we'll say so, including when the saving comes out of our own scope." },
  { title: "Small additions included", icon: Boxes, desc: "A new field, a new table, a tweak to a transformation. Anything under the agreed threshold gets done without a quote." },
  { title: "A named engineer", icon: Server, desc: "The same person, who knows your stack. Not a queue and not a rotating ticket." },
];

const ROUTING = [
  { title: "Business intelligence", desc: "You need to agree what the numbers mean and let people explore them.", icon: LineChart, href: "/services/business-intelligence" },
  { title: "Custom dashboards", desc: "You need one screen answering a known set of questions.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "Workflow automation", desc: "You need something to happen automatically when data changes.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Inventory management", desc: "You need the stock number to be right across channels.", icon: Boxes, href: "/services/inventory-management" },
  { title: "ERP systems", desc: "You need a single financial and operational system of record.", icon: Building2, href: "/services/erp-systems" },
  { title: "Internal business tools", desc: "You need a screen where a specific piece of work gets done.", icon: ClipboardList, href: "/services/internal-business-tools" },
];

const ENGAGEMENT_MODELS = [
  { label: "Pipeline build", bestFor: "a defined set of sources, warehoused and monitored, once.", includes: "Fixed scope, fixed price. Source audit, warehouse setup, agreed source list, monitoring, documentation, handover. Migration and backfill quoted separately.", from: "Scoped and quoted after the source audit" },
  { label: "Migration project", bestFor: "moving a legacy warehouse or loading history into an existing one.", includes: "A defined move, with reconciliation output and a documented cutover included. Priced on source count and history depth, not on hours.", from: "Priced once we know source count and history depth" },
  { label: "Data partner", bestFor: "systems that need ongoing eyes, most clients end up here.", includes: "Monitoring, alerting, source-change handling, backfills, cost review, and small additions, with a named engineer. Available on systems we built and on systems we didn't, the second case starts with a two-week audit before we take the pager.", from: "A monthly plan sized to your pipeline" },
];

const CASE_STUDIES = [
  { num: "6", metric: "Systems, one pipeline", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo. Six sources landing on a schedule into one reconciled layer, not six exports assembled by hand.", href: "/case-studies/unified-accounting" },
  { num: "5,000+", metric: "SKU catalogue synced", title: "PartsFlow", desc: "A spare-parts distributor's inventory data moved through validated bulk imports and a live sync instead of row-by-row spreadsheet work. The data layer underneath the number, not the screen on top of it.", href: "/case-studies/partsflow" },
];

const FAQS = [
  { q: "How long does a pipeline build take?", a: "The first source is usually landing inside week one. A full build across several sources typically runs a few weeks, depending on how many sources have no existing connector and how much history needs backfilling. You get the fixed price and the date before any code is written." },
  { q: "Do we have to move off Fivetran or Airbyte Cloud?", a: "No, and often you shouldn't. Managed connectors are good value for standard sources at moderate volume. We commonly build custom pipelines for the two or three sources nothing supports and leave the rest exactly where they are." },
  { q: "Which warehouse should we use?", a: "Whichever is cheapest for your volume, frequently Postgres, which handles far more analytical load than people expect. BigQuery or ClickHouse when volume justifies it, Snowflake if you already own it. We take no reseller commission on any of them, so the recommendation costs us nothing either way." },
  { q: "What happens when a source API changes?", a: "Schema contracts catch it. Unexpected changes quarantine the affected rows and alert rather than failing silently or writing bad data. Adapting the connector is covered inside the monthly plan." },
  { q: "Who owns the pipelines and the infrastructure?", a: "You do. Code, infrastructure-as-code, credentials, and documentation transfer on final payment, and we hand over the runbook whether or not you keep us on a monthly plan. Everything runs on your cloud account by default." },
  { q: "Can you take over pipelines someone else built?", a: "Yes, and it's a meaningful share of our work. It starts with a two-week audit: what exists, what's undocumented, what's actually broken. We'll tell you honestly whether to keep it or rebuild it, and keeping it is the more common answer." },
  { q: "Do you handle real-time data?", a: "Where it's genuinely needed, change data capture off a production database, event streams into the warehouse. But most requests for real-time turn out to need fifteen-minute freshness, which is dramatically cheaper to build and run. We'll ask what decision depends on the latency before quoting for it." },
  { q: "What about data privacy and compliance?", a: "NDA before discovery, data stays in the region you specify, credentials in a managed secret store, and access scoped per-source. If you have GDPR obligations or handle payment or health data, raise it on the first call so it shapes the architecture rather than getting bolted on." },
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, with 2–3 hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment on anything urgent. A written update every Friday plus a short Loom walkthrough." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Warehousing & ETL Pipeline Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "We build and run the pipelines behind your data — ingestion, warehouse, orchestration, monitoring. Fixed price, no reseller commissions, you own it all.",
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
    { "@type": "ListItem", position: 3, name: "Data Warehousing & ETL", item: "https://spaciva.tech/services/data-warehousing-etl" },
  ],
};

const TECH_ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "ETL vs ELT, warehouse vs lake, one-off migration vs ongoing pipeline",
  description:
    "Three technical decisions in data engineering explained with a direct verdict for each: ETL vs ELT, data warehouse vs data lake, and one-off migration vs ongoing pipeline.",
  author: { "@type": "Organization", name: "Spaciva AI" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
  mainEntityOfPage: "https://spaciva.tech/services/data-warehousing-etl#decisions",
};

// Cost crossover, inline SVG per the source spec's explicit "do not fabricate invented axis
// numbers" instruction — illustrative shape only, restated as plain text below for screen
// readers and search, matching the CRM Development page's CostChart pattern.
function CrossoverChart() {
  const months = [1, 6, 12, 18, 24];
  const managedY = [40, 70, 100, 132, 165];
  const customY = [150, 130, 118, 110, 105];
  const toPoints = (ys: number[]) => ys.map((y, i) => `${40 + i * 100},${190 - y}`).join(" ");

  return (
    <div>
      <svg
        viewBox="0 0 480 200"
        className="w-full h-auto"
        role="img"
        aria-label="Line chart, illustrative not measured: a managed connector's cost rises with row volume over time, while a custom pipeline's cost starts higher then flattens, since additional volume mostly affects compute rather than a per-row fee. The two lines cross at a point that depends on your actual row volume and churn, not on a fixed timeline."
      >
        <line x1="40" y1="10" x2="40" y2="190" stroke="#334155" strokeWidth="1" />
        <line x1="40" y1="190" x2="460" y2="190" stroke="#334155" strokeWidth="1" />
        <polyline points={toPoints(managedY)} fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={toPoints(customY)} fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {months.map((m, i) => (
          <text key={m} x={40 + i * 100} y="204" fontSize="11" fill="#94A3B8" textAnchor="middle">Month {m}</text>
        ))}
      </svg>
      <div className="flex flex-wrap gap-5 mt-2">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> Managed connector, priced on rows synced
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
          <span className="w-3 h-3 rounded-full bg-[#7C3AED] inline-block" /> Custom pipeline, priced once then flat
        </span>
      </div>
      <p className="text-xs text-white/40 mt-2">Illustrative shape, not measured data. The crossover depends on your row volume and churn, not on a fixed timeline.</p>
    </div>
  );
}

function PipelineDiagram() {
  const stages = [
    { label: "Sources", sub: "CRM · store · ads · DB" },
    { label: "Ingest", sub: "" },
    { label: "Raw / landing", sub: "" },
    { label: "Transform", sub: "" },
    { label: "Warehouse", sub: "" },
  ];
  const fanOut = ["BI", "Dashboards", "Ops tools", "Finance"];

  return (
    <div
      role="img"
      aria-label="Diagram: a data pipeline flowing left to right. Sources, including a CRM, an online store, ad platforms, and a database, feed into Ingest, then Raw and landing storage, then Transform, then the Warehouse. From the warehouse, four consumers fan out: BI, Dashboards, Ops tools, and Finance."
    >
      <div className="flex items-center gap-1 sm:gap-1.5">
        {stages.map((s, i) => (
          <Fragment key={s.label}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-1 sm:px-1.5 py-2.5 sm:py-3 text-center"
            >
              <p className="font-bold text-[9px] sm:text-[10.5px] text-white leading-tight">{s.label}</p>
              {s.sub && <p className="text-[8px] sm:text-[9px] text-white/40 mt-1 leading-tight">{s.sub}</p>}
            </motion.div>
            {i < stages.length - 1 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/25 shrink-0" aria-hidden="true" />}
          </Fragment>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 pl-2">
        <span className="w-6 h-px bg-white/20" aria-hidden="true" />
        <div className="flex flex-wrap gap-2">
          {fanOut.map((f, i) => (
            <motion.span
              key={f}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="px-2.5 py-1 rounded-full bg-[#7C3AED]/15 text-[#C4B5FD] text-[11px] font-bold"
            >
              {f}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      <div role="tablist" aria-label="What we build it on" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {STACK_TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`etl-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`etl-tabpanel-${i}`}
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
            id={`etl-tabpanel-${i}`}
            aria-labelledby={`etl-tab-${i}`}
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
  const panelId = `etl-faq-panel-${index}`;
  const buttonId = `etl-faq-button-${index}`;

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

export default function DataWarehousingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TECH_ARTICLE_SCHEMA) }} />

      {/* Hero — dark base, left-to-right pipeline flow diagram, distinct from every other
          Template C hero shape (layer stack, ladder, object model, application anatomy). */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/15 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                Data Warehousing &amp; ETL Pipelines
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                Moving the data once is a week&apos;s work. Keeping it right is the job.
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                We build the ingestion, warehouse, and orchestration layer that everything else on your data stack sits on, then we run it. Sources land on a schedule, schema changes get handled before they break anything downstream, and when a load fails, we know before you do.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute technical call" hoverLabel="Let's Talk" />
                <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  See what we build
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-white/50">
                No reseller commissions · You own the code, the infra, and the warehouse
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 sm:p-7 backdrop-blur-sm">
                <PipelineDiagram />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-white/10" fadeFrom="white" />

      {/* Main content column + sticky spec panel */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-20">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">
            {/* Build or buy — the signature block, placed high, 2x2 decision cards + cost
                crossover band. Two of four verdicts say don't hire us, same visual weight. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                Before You Buy Anything
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">You may not need a custom pipeline. Here&apos;s how to tell.</h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">Managed connectors are very good and getting cheaper. Most companies should use them for most sources. Find your situation below.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {DECISIONS.map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.situation}</p>
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold text-slate-900">Verdict: {item.verdict}</span>{" "}
                      <span className="text-slate-600">{item.body}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#0F172A] rounded-2xl p-6 md:p-8">
                <CrossoverChart />
                <blockquote className="mt-6 text-white leading-relaxed">
                  A managed connector costs you money every month and costs you nothing to run. A custom pipeline costs money once and then costs attention forever.{" "}
                  <strong className="font-bold">The crossover isn&apos;t a row count, it&apos;s whether anyone on your side is willing to own the thing at 3am.</strong>{" "}
                  If the answer is nobody, buy the connector or buy our monthly plan. Don&apos;t build a pipeline you&apos;re planning to ignore.
                </blockquote>
              </div>
            </section>

            {/* What we build — five cards, equal weight */}
            <section id="what-we-build" className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-24">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                What We Build
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">Five layers, and you probably don&apos;t need all of them</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {WHAT_WE_BUILD.map((item) => (
                  <div key={item.title} className="flex flex-col p-6 rounded-2xl border border-slate-100 bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <p className="mt-auto pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">Best for: {item.bestFor}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-slate-600 max-w-[720px]">
                We stop at the modelled warehouse. Deciding what the numbers <em>mean</em>, agreed metric definitions, a semantic layer, self-serve exploration, is{" "}
                <Link href="/services/business-intelligence" className="font-bold text-[#7C3AED] hover:underline">business intelligence</Link>, and it&apos;s a different scope with a different conversation. If you just need one screen answering a known set of questions, that&apos;s a{" "}
                <Link href="/services/custom-dashboards" className="font-bold text-[#7C3AED] hover:underline">custom dashboard</Link>{" "}
                and it&apos;s smaller than either.
              </p>
            </section>

            {/* Why pipelines fail — the persuasive engine, five stacked blocks */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                Failure Modes
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Five ways a pipeline fails, and the control that prevents each</h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">Pipelines rarely fail loudly. That&apos;s the whole problem, a crash gets fixed on Tuesday, and silent wrongness gets discovered in a board meeting.</p>

              <div className="flex flex-col">
                {WHY_FAIL.map((item, idx) => (
                  <div key={item.title} className={cn("py-7", idx > 0 && "border-t border-slate-100")}>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-3 max-w-[720px]">{item.desc}</p>
                    <p className="text-slate-800 leading-relaxed max-w-[720px]">
                      <strong className="text-slate-900">The control: </strong>{item.control}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-900 font-bold leading-snug">
                Four of these five are decisions made before any data moves. None of them are about which warehouse you picked.
              </blockquote>
            </section>

            {/* The stack — six tabs, the primary SEO surface for the source-plus-destination
                long tail */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="mb-10">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">What we build it on</h2>
              </div>
              <StackTabs />
              <p className="mt-8 text-slate-600 border-t border-slate-100 pt-6 max-w-[720px]">
                We hold no reseller relationship with any vendor on this list and take no commission on any of it. That&apos;s unusual in this category and it&apos;s the reason we can tell you a $50/month Postgres instance is enough.
              </p>
            </section>

            {/* The decisions people get stuck on — comparison queries, self-contained answers.
                TechArticle-eligible: each block stands alone with a stated verdict, per the
                doc's explicit instruction to keep these quotable without surrounding context. */}
            <section id="decisions" className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-24">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">ETL or ELT, warehouse or lake, one-off or ongoing</h2>
              <div className="flex flex-col gap-8">
                {DECIDED_ON.map((item, idx) => (
                  <div key={item.title} className={cn("pb-8", idx < DECIDED_ON.length - 1 && "border-b border-slate-100")}>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.question}</p>
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold text-slate-900">Verdict: {item.verdict}</span>{" "}
                      <span className="text-slate-600">{item.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mobile/tablet spec panel */}
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

      {/* Mid-page CTA — Template C's dark-base inversion: full-bleed light band */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-slate-900">
            Not sure whether to build, buy, or just fix what you have?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Send us your source list and roughly what you&apos;re paying today. We&apos;ll tell you which sources are worth owning, which to leave on a managed connector, and whether the honest answer is that your current setup needs monitoring rather than replacing.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a 30-minute technical call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* How the work runs — horizontal phase band, phase two marked */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-white">Five phases, first source landing in week one</h2>

        <div className="lg:flex lg:items-start lg:gap-4">
          {PROCESS.map((item, idx) => (
            <div key={item.step} className="lg:flex-1 relative">
              <div className="flex lg:flex-col gap-4 lg:gap-0 pb-10 lg:pb-0">
                <div className="flex lg:flex-col items-center lg:items-start gap-2 shrink-0">
                  <div className="flex items-center w-full">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-[#7C3AED]/25">
                      {item.step}
                    </span>
                    {idx < PROCESS.length - 1 && (
                      <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[#C4B5FD] to-white/10 ml-2" />
                    )}
                  </div>
                </div>
                <div className="lg:mt-4 lg:pr-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 text-xs font-bold uppercase tracking-wide">{item.duration}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[640px]">{item.desc}</p>
                  {item.marker && (
                    <span className="inline-block mt-3 px-2.5 py-1 rounded-full bg-[#7C3AED] text-white text-[10px] font-bold uppercase tracking-wide">{item.marker}</span>
                  )}
                </div>
              </div>
              {idx < PROCESS.length - 1 && (
                <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What ongoing actually means — the commercial centre of the page */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">The monthly plan, stated specifically</h2>
          <p className="text-white/60">Most vendors say &quot;ongoing support&quot; and mean &quot;email us.&quot; Here&apos;s what ours covers.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ONGOING.map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="w-9 h-9 rounded-lg bg-[#7C3AED]/15 flex items-center justify-center mb-4">
                <item.icon className="w-4.5 h-4.5 text-[#C4B5FD]" />
              </span>
              <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/50 text-sm max-w-[680px]">
          This is data-specific ongoing work. For general software maintenance across everything else you run,{" "}
          <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#C4B5FD] hover:underline">see infrastructure &amp; monitoring</Link>.
        </p>
      </section>

      {/* Is this the page you need — routing */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">Data work comes in six shapes. This is one of them.</h2>
        <p className="text-white/60 mb-10 max-w-[720px]">You need data out of several systems and into one place, reliably. If that&apos;s not quite it, one of these is closer:</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {ROUTING.map((item) => (
            <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C3AED]/40 hover:bg-white/[0.07] transition-all">
              <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mb-3">
                <item.icon className="w-4.5 h-4.5 text-white" />
              </span>
              <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-white/60 max-w-[720px]">
          If you&apos;re not sure, the discovery call sorts it in twenty minutes and we&apos;d rather route you correctly than sell you the wrong scope.
        </p>
      </section>

      {/* Engagement models */}
      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-white">How engagements are structured</h2>

        <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                {ENGAGEMENT_MODELS.map((m) => (
                  <th key={m.label} scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{m.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E2E8F0]">
                <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Best for</th>
                {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm text-slate-600 align-top">{m.bestFor}</td>)}
              </tr>
              <tr className="border-b border-[#E2E8F0]">
                <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Includes</th>
                {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm text-slate-600 align-top">{m.includes}</td>)}
              </tr>
              <tr>
                <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Pricing</th>
                {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm font-bold text-[#7C3AED] align-top">{m.from}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Case studies — Unified Accounting leads, this is the page that case study
          actually describes */}
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
                <span className="text-4xl md:text-5xl font-extrabold text-[#7C3AED] tracking-tight mb-2">{cs.num}</span>
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

      {/* FAQ — accordion, first item open */}
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

      {/* Closing CTA — second light band on the dark base */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Tell us where your data currently lives.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. Bring your source list. We&apos;ll tell you what&apos;s worth owning, what to leave alone, and give you a fixed price for the part that&apos;s worth building.
          </p>
          <div className="flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
