"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, RotateCw,
  Table2, Blocks, Code2,
  Hammer, Users, Sliders, Send,
  Link2, Cloud, Database,
  Bot, Home, Workflow, LayoutDashboard, ClipboardList, Building2, Boxes,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import SpecPanel from "@/components/SpecPanel";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const LADDER = [
  { rung: 1, title: "A shared spreadsheet", icon: Table2, breaks: "Two people edit at once · no permissions · no history · one wrong paste and it's gone", accent: false },
  { rung: 2, title: "A no-code app", icon: Blocks, breaks: "Per-seat cost climbs · logic outgrows the builder · one person owns it · you can't leave", accent: false },
  { rung: 3, title: "A built tool", icon: Code2, breaks: "Yours. Permissions, audit trail, integrations, and documentation, and nothing to outgrow", accent: true },
];

const WHAT_WE_BUILD = [
  { title: "Employee and internal portals", bestFor: "growing teams where HR, IT, or ops requests arrive over Slack and get lost.", desc: "A branded login for your own staff, leave and expense requests, equipment asks, policy documents, and a directory of who owns what, in one place instead of a manager's inbox. For anything client, vendor, or partner-facing, that's", link: { href: "/services/client-portals", label: "client portals" }, linkSuffix: ", a different access model entirely." },
  { title: "Admin panels and back offices", bestFor: "any team where “can you just update this in the database?” is a real sentence.", desc: "The internal screen behind your product or operation: search records, fix data, issue refunds, override a status, resolve an exception. Built with roles and an audit trail, so support can act without database access." },
  { title: "Approval and request systems", bestFor: "teams where approvals stall invisibly and nobody can say where.", desc: "Purchase requests, discounts, leave, expenses, and content sign-off routed to the right approver, escalated when they sit too long, and logged when resolved. The chain lives in the tool rather than in a mail thread nobody can find." },
  { title: "Inventory and asset trackers", bestFor: "distributors, field teams, and anyone reconciling two spreadsheets monthly.", desc: "Stock, equipment, or assets tracked with movement history, thresholds, and alerts. Who has it, where it went, what's running low, and when it was last checked." },
  { title: "Project and job trackers", bestFor: "teams bending a generic PM tool badly out of shape.", desc: "When Asana or ClickUp doesn't fit how your work actually runs, because yours has stages, dependencies, or costing rules the tool can't express, a tracker shaped around your process rather than someone's default template." },
  { title: "Order and fulfilment tools", bestFor: "e-commerce operations run out of a store admin that was never designed for it.", desc: "The operational screen between your store and your warehouse: exceptions surfaced, batches actioned, statuses written back to the store and the customer automatically." },
  { title: "Quoting and pricing tools", bestFor: "businesses where the pricing logic lives in one person's head.", desc: "Complex pricing, tiers, volume breaks, configurations, regional rules, encoded once so quotes come out right without anyone rebuilding a spreadsheet per deal, with a version history of what was quoted to whom." },
  { title: "Onboarding and intake systems", bestFor: "anyone maintaining an onboarding checklist manually.", desc: "Client, employee, or vendor onboarding as a tracked pipeline: what's been collected, what's outstanding, what's chasing itself.", link: { href: "/services/document-invoice-processing", label: "document and invoice processing" }, linkSuffix: ", which reads the documents as they land." },
  { title: "Compliance and audit registers", bestFor: "regulated firms currently relying on a calendar reminder and good luck.", desc: "Renewals, certifications, filing dates, and policy acknowledgements tracked with escalating reminders and an evidence trail that stands up when someone asks for it." },
  { title: "Internal knowledge and SOP tools", bestFor: "teams where the answer lives in one person and stops when they're away.", desc: "Your processes, policies, and runbooks in one searchable place, versioned, with ownership assigned.", link: { href: "/services/rag-chatbot-development", label: "RAG chatbot" }, linkSuffix: " layered on top, and often a smaller build, if the ask is “let people ask questions of it in plain language.”" },
  { title: "Field and mobile tools", bestFor: "installers, inspectors, delivery teams, and site staff filling in paper forms.", desc: "A phone-first screen for people who aren't at a desk: jobs, checklists, photos, signatures, and offline capture that syncs when there's signal again." },
  { title: "Data cleanup and reconciliation tools", bestFor: "any business running two systems that both claim to hold the truth.", desc: "The unglamorous one, and often the highest-value: a screen that surfaces where two systems disagree and lets someone resolve it in a click, instead of a monthly reconciliation nobody enjoys." },
];

const LIFECYCLE = [
  { n: "01", title: "Someone improvises", desc: "A spreadsheet, a form, a shared doc. This stage is genuinely good: it's the cheapest possible way to discover what the process actually needs to be. If you're here and it's working, stay here.", failure: false },
  { n: "02", title: "It gets adopted", desc: "Other people start depending on it. Now it has users it was never designed for, edits it can't track, and a structure that assumed one person. It stops being a personal tool and becomes infrastructure without anyone deciding that it should.", failure: false },
  { n: "03", title: "It gets patched", desc: "Extra tabs. A second sheet that reconciles the first. A no-code app bolted on. Someone becomes the unofficial owner. Every patch is individually reasonable and collectively the thing that makes it unmaintainable.", failure: false },
  { n: "04", title: "It breaks quietly", desc: "Two people overwrite each other and nobody notices for a week. A number in a report turns out to have been wrong for two months. The person who owned it leaves, and it turns out no one else fully understood it. This is the stage almost every team is in when they call us.", failure: true },
  { n: "05", title: "It becomes a system, or it doesn't", desc: "Either it gets rebuilt as something with permissions, history, and documentation, owned by the business rather than by a person, or the patching continues and the cost keeps compounding invisibly.", failure: false },
];

const SPEC_ITEMS = [
  { section: "Stack", label: "Frontend", value: "React · Next.js · TypeScript · Tailwind" },
  { section: "Stack", label: "Backend", value: "Node · Python · REST and GraphQL APIs" },
  { section: "Stack", label: "Data", value: "Postgres · MySQL · Redis" },
  { section: "Stack", label: "Auth", value: "SSO · Google Workspace · Microsoft Entra ID · role and row-level permissions" },
  { section: "Delivery", label: "Typical duration", value: "Scoped after the process audit, in the run-in phase" },
  { section: "Delivery", label: "Integrations", value: "Your CRM, store, accounting system, and comms tools" },
  { section: "Delivery", label: "Hosting", value: "Your AWS, GCP, or Azure account, or ours if you'd rather" },
  { section: "Ownership", label: "Ownership", value: "Source code, database, and documentation on final payment" },
  { section: "Ownership", label: "After launch", value: "Monthly monitoring, updates, and small feature work" },
];

const RUN_IN = [
  { n: "01", title: "Process audit", duration: "3–5 days", desc: "We sit with the people who actually use the current setup, map what it does including the undocumented rules, and identify what data is worth migrating. You get that written map whether or not you hire us. It is regularly the first time the process exists on paper anywhere." },
  { n: "02", title: "Fixed scope and quote", duration: "2–3 days", desc: "A written scope, a fixed price, and a delivery date before any code is written. Explicitly separated into what ships in the first version and what waits. If scope moves later, we re-quote in writing first." },
];

const LOOP = [
  { title: "Build", icon: Hammer, desc: "A working slice of the tool, against your real data, in a staging environment. Written update every Friday plus a short Loom walkthrough of what moved." },
  { title: "You use it", icon: Users, desc: "Your team works in it on real tasks. Not a demo, not a click-through. This is the step that surfaces the requirements nobody could have articulated in a workshop." },
  { title: "We adjust", icon: Sliders, desc: "What came back gets fixed and folded into the next slice." },
  { title: "Ship", icon: Send, desc: "The slice goes live, or waits with the others, depending on what makes sense for your team. Deployed with monitoring, documentation, and handover notes from the first release." },
];

const STACK_TABS = [
  { label: "Application", icon: Code2, items: "React · Next.js · TypeScript · Node · Python · Tailwind · REST and GraphQL APIs · responsive and mobile-first builds · offline-capable field tools" },
  { label: "Data and auth", icon: Database, items: "Postgres · MySQL · Redis · S3 and object storage · SSO via Google Workspace or Microsoft Entra ID · role-based and row-level permissions · full audit logging" },
  { label: "Integrations", icon: Link2, items: "HubSpot · Salesforce · Pipedrive · Zoho · Shopify · WooCommerce · Stripe · QuickBooks · Xero · Slack · Teams · Google Workspace · Microsoft 365 · Notion · Airtable · n8n · Zapier" },
  { label: "Hosting and delivery", icon: Cloud, items: "AWS · GCP · Azure · Vercel · Docker · CI/CD pipelines · automated backups · staging and production environments · regional hosting where data residency (EU or UK) is required" },
];

const BUY_TABLE = [
  { label: "Time to first version", tool: "Days", custom: "Weeks, scoped after the audit" },
  { label: "Upfront cost", tool: "Low", custom: "Higher, fixed and quoted in writing" },
  { label: "Ongoing cost", tool: "Per-seat or per-record, grows with you", custom: "Hosting plus a monthly plan" },
  { label: "Changing it yourself", tool: "Easy, within the platform's limits", custom: "Needs a developer" },
  { label: "Complex or conditional logic", tool: "Constrained by the builder", custom: "Whatever your process actually is" },
  { label: "Permissions and row-level access", tool: "Platform's model", custom: "Modelled to your org" },
  { label: "Audit trail", tool: "Varies, often limited", custom: "Built in, designed for scrutiny" },
  { label: "Deep integrations", tool: "What the platform offers", custom: "Anything with an API" },
  { label: "Performance at volume", tool: "Degrades on large datasets", custom: "Designed for your scale" },
  { label: "Ownership", tool: "You rent it", custom: "Code, database, and docs are yours" },
  { label: "Leaving", tool: "Export what the platform allows", custom: "Nothing to leave" },
];

const WHERE_WRONG = [
  { title: "Everything was version one", desc: "Every request from every stakeholder gets accepted into the first release, so the project doubles in scope before anything ships and confidence drains away. We separate version one from later work in writing, at quote stage, and we'll push back on your own scope creep as well as our own." },
  { title: "It was rebuilt exactly as it was", desc: "The spreadsheet's quirks get faithfully reproduced in software, including the workarounds that only existed because it was a spreadsheet. The audit phase is where those get identified and dropped, some of what your process does today exists only because the tool couldn't do it properly." },
  { title: "Nobody used it", desc: "A tool built from a requirements document, without the people who do the work touching it until launch, gets rejected in week one, usually over something small that nobody thought to mention. That's the entire reason we ship in two-week loops with your team using real slices." },
  { title: "It became one person's dependency again", desc: "Undocumented, unmonitored, and understood by one developer who has moved on. Everything we build is documented and handed over, runs in your accounts, and is monitored under a monthly plan you can end at any time while keeping the code." },
];

const ROUTING = [
  { title: "Internal business tools", desc: "Your team needs a place to do the work: enter it, track it, approve it, look it up.", icon: ClipboardList, current: true },
  { title: "Custom dashboards", desc: "You need to see the state of things, read-only, from data that already lives elsewhere. If nobody would enter anything, you want a dashboard.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "CRM development", desc: "An internal tool whose subject is specifically customers, deals, and pipeline. Same engineering, a well-understood shape.", icon: Home, href: "/services/crm-development" },
  { title: "ERP systems", desc: "The financial and operational system of record. Often the reason a tool is needed is that the ERP can't reach somewhere.", icon: Building2, href: "/services/erp-systems" },
  { title: "Inventory management", desc: "One team needing a receiving app or a returns desk tool is an internal tool. The stock number being wrong everywhere is a sync problem, not a screen.", icon: Boxes, href: "/services/inventory-management" },
  { title: "Workflow automation", desc: "You need something to happen without anyone opening anything. If the steps are known in advance and nobody needs a screen, this is cheaper and faster.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "AI agents", desc: "Judgement is required where the next step isn't fixed in advance. Most tools don't need one; a few need one in exactly one step.", icon: Bot, href: "/services/ai-agent-development" },
  { title: "Web applications", desc: "The engineering underneath all of these. If you're evaluating who can build custom software at all, not just this shape of it.", icon: Code2, href: "/services/web-applications" },
];

const ENGAGEMENT_MODELS = [
  { label: "Single tool", bestFor: "Replacing the one spreadsheet everybody complains about", includes: "One tool: audited, scoped, built, and launched, including data migration from your current setup and the first month of monitoring", from: "Scoped and quoted after the process audit" },
  { label: "Connected tool suite", bestFor: "Teams where three or four processes have all hit stage four at once", includes: "Several tools sharing one data model, one login, and one permission structure, so the second and third cost a fraction of the first", from: "Priced once we know how many tools and how they connect" },
  { label: "Ongoing product partner", bestFor: "Teams whose tools are now business-critical and keep evolving, most clients end up here", includes: "Monitoring, dependency and security updates, and a set amount of new feature work each month against a roadmap you set", from: "A monthly plan sized to your roadmap" },
];

const CASE_STUDIES = [
  { num: "80%", metric: "Faster data entry", title: "PartsFlow", desc: "A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.", href: "/case-studies/partsflow" },
  { num: "70%", metric: "Less manual data entry", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.", href: "/case-studies/unified-accounting" },
];

const FAQS = [
  { q: "How long does an internal tool take to build?", a: "It depends on how tangled the current setup is, not how many screens you want, that's what the audit measures before you get a date. We ship in two-week slices your team uses on real work, so you're not waiting until the end to see it. Bigger suites run longer." },
  { q: "Why not just use Airtable, Retool, or Notion?", a: "Often you should, and we'll say so on the call. Those platforms are excellent while your process is still changing shape and your team is small. A custom build earns its cost when per-seat pricing stops making sense, when the logic outgrows what the builder can express, when you need permissions and audit trails matching your org rather than the platform's model, or when the data can't sit on someone else's platform." },
  { q: "Can you migrate our existing spreadsheet or app?", a: "Yes, and it's a standard part of the project. We audit what's actually in there first, including the rules that only exist as habits, and agree what's worth carrying over. Not everything usually is, some of what a spreadsheet does exists only because it's a spreadsheet." },
  { q: "What happens to our data during the switch?", a: "It's migrated into the new system and validated against the original before anything is switched off, and you keep your existing setup running until you're satisfied. We don't do cutovers that depend on everything being right first time." },
  { q: "Who can see what?", a: "Whatever your org chart requires, role-based access down to row level where needed, with SSO through Google Workspace or Microsoft Entra ID so people use the login they already have, and audit logging on changes." },
  { q: "Will it work on phones?", a: "Yes. For field tools we build mobile-first, including offline capture that syncs when there's signal. For desk tools we make the mobile view work for the two or three things people genuinely do away from a laptop rather than shrinking the whole interface." },
  { q: "Who owns the code and the data?", a: "You do. Source code, database, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts on your infrastructure, so if you stop working with us, it keeps running." },
  { q: "Can our own developer maintain it later?", a: "That's what it's built for. Standard React, Node, and Postgres, documented, tested, in your repository, nothing proprietary and nothing that requires hiring for an unusual skill set. We hand over properly rather than leaving someone to reverse-engineer it." },
  { q: "What if we need changes after launch?", a: "Businesses change, so tools do. The monthly plan covers monitoring, dependency and security updates, and a set amount of feature work each month. You can end it whenever you like and keep everything." },
  { q: "Can you take over a tool someone else built?", a: "Yes, regularly. We'll audit what exists and tell you honestly whether to fix or rebuild, with a fixed price for either path. Sometimes the answer is fix, a tool with sound data underneath and a poor interface is a much smaller job than it looks." },
  { q: "What does it cost?", a: "It scales with the number of tools, integrations, and user roles, so we won't quote a figure before the process audit. You get a fixed price in writing before any work starts, and we carry the risk of our own estimates." },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough of what moved." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Internal Business Tools Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom internal tools, portals, admin panels, trackers, and approval systems, replacing spreadsheets and outgrown no-code apps. Fixed price, full ownership.",
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: WHAT_WE_BUILD.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.title,
    description: item.desc,
  })),
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
    { "@type": "ListItem", position: 3, name: "Internal Business Tools", item: "https://spaciva.tech/services/internal-business-tools" },
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
      <div role="tablist" aria-label="What we build it on" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {STACK_TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`ibt-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`ibt-tabpanel-${i}`}
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
            id={`ibt-tabpanel-${i}`}
            aria-labelledby={`ibt-tab-${i}`}
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
  const panelId = `ibt-faq-panel-${index}`;
  const buttonId = `ibt-faq-button-${index}`;

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

export default function InternalBusinessToolsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — dark base. Hero visual is a three-rung escalation ladder, deliberately not the
          Custom Dashboards page's four-layer architecture diagram, per the source spec's
          insistence that C-pages stay visually distinguishable at a glance. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/15 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                Internal Business Tools
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                The spreadsheet worked until it didn&apos;t
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Every growing team runs on something improvised: a shared sheet, a folder of forms, a no-code app one person maintains. It works, right up to the point where three people need it at once and nobody&apos;s sure which version is current. We build the tool that replaces it, properly, in your accounts, owned by you.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  See what we build
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-white/50">
                Runs on your infrastructure · You own the code, the data, and the documentation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
              role="img"
              aria-label="Diagram: a three-rung escalation ladder. Rung one, a shared spreadsheet, breaks when two people edit at once, with no permissions and no history. Rung two, a no-code app, breaks as per-seat cost climbs and the logic outgrows the builder. Rung three, a built tool, is owned outright with permissions, an audit trail, integrations, and documentation, and nothing to outgrow. Most teams call Spaciva somewhere between rung two and rung three."
            >
              <div className="flex flex-col-reverse gap-3">
                {LADDER.map((item) => (
                  <div
                    key={item.rung}
                    className={cn(
                      "rounded-2xl p-4 border transition-all",
                      item.accent
                        ? "bg-[#7C3AED] border-[#7C3AED] shadow-lg shadow-[#7C3AED]/25 ml-8 sm:ml-12"
                        : item.rung === 2
                        ? "bg-white/[0.06] border-white/10 ml-4 sm:ml-6"
                        : "bg-white/[0.03] border-white/10"
                    )}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs", item.accent ? "bg-white/20 text-white" : "bg-white/10 text-white/50")}>
                        {item.rung}
                      </span>
                      <item.icon className={cn("w-4 h-4", item.accent ? "text-white" : "text-white/50")} />
                      <span className={cn("font-bold text-sm", item.accent ? "text-white" : "text-white/80")}>{item.title}</span>
                    </div>
                    <p className={cn("text-xs leading-relaxed", item.accent ? "text-white/80" : "text-white/40")}>{item.breaks}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 mt-4 text-center">Most teams call us somewhere between rung two and rung three. A few should stay on rung two, and we&apos;ll say so.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip — genuine white band on the dark base, matching the fix used on the
          Custom Dashboards page: the shared component's fade gradients and mix-blend-darken
          logos are built for a light background. */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-white/10" containerClassName="max-w-7xl mx-auto px-5 lg:px-10" fadeFrom="white" />

      {/* The problem — prose, centred, no cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-white">Nobody decided to run the business this way</h2>
          <div className="text-white/70 text-lg leading-relaxed text-left space-y-5 mb-10">
            <p>No one sat down and chose to manage client onboarding in a spreadsheet, approvals over email, and inventory in a second spreadsheet that has to be reconciled against the first. It accumulated. Someone needed to track something on a Tuesday, made a sheet, and four years later eleven people depend on it.</p>
            <p>The cost isn&apos;t the tool. It&apos;s everything the tool can&apos;t do. There&apos;s no record of who changed the number or when. There&apos;s no way to give the new hire access to their part without handing over all of it. Two people edit the same row and one edit silently wins. The process that exists in one person&apos;s head has never been written down, so when they&apos;re on leave the work stops.</p>
            <p>And the real tax is invisible: the work everyone does <em>around</em> the tool. Re-keying the same data into a second system. Checking whether this version is the current one. Chasing an approval by email because the sheet can&apos;t ask for one. Nobody logs those minutes, so nobody sees the number, so it never gets fixed.</p>
          </div>
          <blockquote className="border-l-4 border-[#7C3AED] bg-white/5 rounded-r-2xl px-6 py-6 text-lg font-bold text-white leading-snug text-left">
            A spreadsheet is a brilliant way to figure out what a process should be. It&apos;s a poor way to run one once you know.
          </blockquote>
        </div>
      </section>

      {/* What we build — twelve light cards on dark base, no icons, ItemList schema */}
      <section id="what-we-build" className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 scroll-mt-24">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-4">
            What We Build
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Twelve tools teams actually ask us for</h2>
          <p className="text-lg text-white/60">Not categories. The specific things that get built, over and over, because every growing business hits the same walls.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_WE_BUILD.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.04 }}
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
          Not on the list? Most internal tools are a variation on three or four of these. Describe what your team does by hand every week and we&apos;ll tell you on the call which shape it is, and whether it&apos;s worth building at all.
        </p>
      </section>

      {/* Main content + sticky spec panel — stretches to the main column's height (no
          items-start), so the sticky child can track scroll across the lifecycle, the loop,
          and the stack tabs. */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">
            {/* The lifecycle — signature section, C-2's distinct treatment: horizontal five-stage
                sequence with stage 4 marked as the failure point, not the six vertical bands
                used on Custom Dashboards. The failure point is marked by a text label and a
                broken connecting line, not by colour alone. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">Every internal tool goes through five stages. Most vendors quote you for three.</h2>

              <div
                className="my-10"
                role="img"
                aria-label="Diagram: a five-stage sequence. Stage one, someone improvises. Stage two, it gets adopted. Stage three, it gets patched. Stage four, marked as the failure point, it breaks quietly. Stage five, it becomes a system, or it doesn't. A visible break in the connecting line falls before stage four."
              >
                <div className="hidden md:flex items-center">
                  {LIFECYCLE.map((stage, idx) => (
                    <div key={stage.n} className="flex items-center flex-1 last:flex-none">
                      <span className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border-2",
                        stage.failure ? "bg-amber-500 border-amber-500 text-white" : "bg-[#7C3AED] border-[#7C3AED] text-white"
                      )}>
                        {stage.n}
                      </span>
                      {idx < LIFECYCLE.length - 1 && (
                        <span className={cn("flex-1 h-px mx-1", LIFECYCLE[idx + 1].failure || stage.failure ? "border-t-2 border-dashed border-amber-400" : "bg-slate-200")} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-5 gap-6 mt-6">
                  {LIFECYCLE.map((stage) => (
                    <div key={stage.n} className="md:contents">
                      <div className="flex items-start gap-3 md:block">
                        <span className={cn("md:hidden w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 border-2", stage.failure ? "bg-amber-500 border-amber-500 text-white" : "bg-[#7C3AED] border-[#7C3AED] text-white")}>
                          {stage.n}
                        </span>
                        <div>
                          <h3 className={cn("font-bold mb-1.5", stage.failure ? "text-amber-700" : "text-slate-900")}>
                            {stage.title}
                            {stage.failure && <span className="block text-[11px] font-bold uppercase tracking-wide text-amber-600 mt-0.5">The failure point</span>}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{stage.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8 max-w-[760px]">
                <p className="text-slate-600 leading-relaxed">
                  Stage four is why our first phase is an audit, not a build. Before we quote, we work out what the current setup genuinely does, including the rules that only exist as habits, and what data is worth carrying over. Skipping that is how a rebuild ends up missing the one edge case the whole business quietly depends on.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Plenty of stage-four processes shouldn&apos;t become software at all. If what&apos;s really needed is for a sequence to run without anyone opening anything, that&apos;s{" "}
                  <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>, cheaper, faster, and frequently the honest answer.
                </p>
              </div>

              <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-900 font-bold leading-snug">
                The tool isn&apos;t the deliverable. Somebody other than one person being able to run the process is the deliverable.
              </blockquote>
            </section>

            {/* How the build runs — C-2's distinct process treatment: a short linear run-in,
                then a repeating two-week loop, not Custom Dashboards' linear five-phase band. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">An audit, a fixed quote, then two-week loops</h2>

              <div className="flex flex-col gap-6 mb-12 max-w-[760px]">
                {RUN_IN.map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <span className="text-2xl font-light text-slate-300 tabular-nums shrink-0 w-8">{item.n}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">{item.duration}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-6">
                <RotateCw className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Then, repeating every two weeks</span>
              </div>

              <div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
                role="img"
                aria-label="Diagram: a repeating two-week loop of four steps. Build, then you use it, then we adjust, then ship, then the loop returns to build again."
              >
                {LOOP.map((item, idx) => (
                  <div key={item.title} className="relative bg-slate-50 border border-slate-100 rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    {idx < LOOP.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 text-slate-300" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-10">
                <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
                Ship loops back to Build for the next slice
              </p>

              <p className="text-slate-600 leading-relaxed max-w-[760px]">
                <span className="font-bold text-slate-900">After launch</span> — a monthly plan: monitoring, dependency and security updates, small feature work, and a named engineer who knows your setup. Internal tools change because businesses change; the ones that get abandoned are the ones nobody was resourced to change.
              </p>
            </section>

            {/* Stack — tabbed technology breakdown, all panels in the DOM on load */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="mb-10">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">What we build it on</h2>
                <p className="text-slate-600">Boring, well-supported technology chosen so your own team, or any competent developer, can pick it up later. Nothing proprietary, nothing you&apos;d have to hire specifically for.</p>
              </div>
              <StackTabs />
              <p className="mt-8 text-slate-500 text-sm border-t border-slate-100 pt-6">
                We don&apos;t build on a proprietary platform of our own, and we won&apos;t put your business-critical tool somewhere only we can maintain. If a no-code platform is genuinely the better fit for your case, we&apos;ll say so before you commit, see below.
              </p>
            </section>

            {/* Build or buy — two equal-weight cards + comparison table */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">You may not need us for this</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">An off-the-shelf or no-code platform is the right answer more often than any agency page admits. Here&apos;s the honest version.</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">Stay on a no-code platform when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your process is still changing shape month to month, your team is small enough that per-seat pricing doesn&apos;t sting, the logic fits inside what the builder can express, and nothing about the data is so sensitive that platform hosting is a problem. Airtable, Retool, Notion, or Softr will be live in days for a fraction of a custom build, and one of your own team can maintain it.{" "}
                    <span className="font-bold text-slate-900">We&apos;ll tell you this on the call and we won&apos;t quote you for something you don&apos;t need.</span>
                  </p>
                </div>
                <div className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">A custom build makes sense when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Per-seat or per-record pricing has stopped making sense at your headcount, the logic has outgrown what the builder can express, you need permissions that match your org chart rather than the platform&apos;s model, you need an audit trail that stands up to scrutiny, the tool has to integrate deeply with systems the platform can&apos;t reach, performance has degraded as records piled up, or the data can&apos;t sit on someone else&apos;s platform. You also own it outright, which matters the day the platform changes its pricing, and platforms do.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-8">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">No-code platform</th>
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
                <span className="font-bold text-slate-900">Honest answer:</span> a real share of the teams who call us should stay where they are for another year, and we say so. The clearest signal it&apos;s time to build is not frustration with the current tool, it&apos;s when the workarounds <em>around</em> it have become their own process, and someone is spending hours a week keeping two things in agreement.
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

      {/* Where internal tool projects go wrong — plain two-column list, supporting evidence */}
      <section className="max-w-5xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-10 text-white">Four ways a rebuild goes wrong</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {WHERE_WRONG.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool, dashboard, or automation — plain routing block, five cards */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-white">Is a tool actually what you need?</h2>

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

        <p className="text-white/60 max-w-[720px]">
          <span className="font-bold text-white">Honest answer:</span> the best internal tools are usually all four. A screen where the work happens, automation running underneath it, a dashboard reading out of it, and occasionally one AI step where a human judgement call used to sit. We scope it in that order, because the screen is what your team adopts and everything else attaches to it.
        </p>
      </section>

      {/* Engagement models — no fabricated figures: the source spec explicitly says to publish
          this section without numbers rather than invent a range. */}
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
          Every build includes monitoring for the first month. After that it&apos;s a monthly fee,{" "}
          <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">see what that covers</Link>, and you can stop any time, you keep the code, the database, and the documentation either way. If your own team takes it over, we hand over properly rather than leaving them to reverse-engineer it.
        </p>
      </section>

      {/* Case studies — matching the AI Agent page's card treatment, as light cards on dark */}
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

      {/* Closing CTA — dark bordered accent panel */}
      <section className="max-w-4xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="rounded-[2rem] sm:rounded-[3rem] border-2 border-[#7C3AED]/30 bg-white/[0.03] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-white">
            Tell us which spreadsheet your team is afraid of losing.
          </h2>
          <p className="relative text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll map what it actually does, tell you honestly whether a no-code tool would do the job, and give you a fixed price if building is genuinely the right answer.
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
