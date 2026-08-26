"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Cloud, Grid3x3, TrendingUp, CheckCircle2,
  CreditCard, Receipt, Calculator, ShoppingCart, Package, ShoppingBag,
  LifeBuoy, Headset, MessageSquare, MessageCircle, Hash, Mail, Inbox as InboxIcon,
  Megaphone, Target, FileText, ListTodo, Database, HardDrive, Sheet, BarChart3,
  Workflow, Shuffle, GitBranch, Code2, Users, LayoutGrid,
} from "lucide-react";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const RAIL = [
  { id: "what-we-automate", label: "What we automate" },
  { id: "before-after", label: "Before & after" },
  { id: "fix-the-data", label: "Fix the data first" },
  { id: "how-it-works", label: "How it works" },
  { id: "integrations", label: "Integrations" },
  { id: "questions", label: "Questions" },
];

const TABS = [
  {
    label: "HubSpot",
    icon: Sparkles,
    items: [
      { title: "Workflows beyond what the builder reaches", desc: "Lead routing on logic the native builder can't express, multi-object updates, and custom-coded actions where a standard workflow step runs out of road." },
      { title: "Data quality and enrichment", desc: "Deduplication rules, field normalisation, and enrichment on record creation, so a new contact arrives complete rather than as a name and an email." },
      { title: "Two-way sync with the systems HubSpot doesn't natively reach", desc: "Your billing platform, your product database, your operational tools. Custom objects and properties designed properly rather than bolted on as text fields nobody fills." },
      { title: "Reporting your team actually trusts", desc: "Pipeline and attribution reporting built on data that's complete, with the gaps that make forecasts unreliable closed at the source." },
    ],
    note: "HubSpot's own AI agents (Breeze) cover a lot of standard ground, and some of them consume credits, so the running cost is usage-based rather than fixed. We'll tell you where Breeze is the cheaper answer.",
  },
  {
    label: "Salesforce",
    icon: Cloud,
    items: [
      { title: "Flow and Apex work", desc: "Automation past the point where declarative tools become unmanageable, built to be maintained rather than as a Flow with forty elements nobody dares touch." },
      { title: "Data model and object design", desc: "Custom objects, relationships, validation rules, and record types designed for how your business actually works, not inherited from a previous admin's assumptions." },
      { title: "Integration and middleware", desc: "Connections to ERP, billing, and operational systems, with error handling and retry logic rather than a nightly sync that fails silently." },
      { title: "Cleanup and technical debt", desc: "Duplicate resolution, dead fields, unused automation, and the accumulated layers of half-finished configuration that make every new change risky." },
    ],
    note: "Salesforce's agent layer (Agentforce) is powerful and enterprise-priced, and it works best on a clean data foundation. If your data isn't there yet, that's the work to do first.",
  },
  {
    label: "Zoho CRM",
    icon: Grid3x3,
    items: [
      { title: "Blueprint, workflow, and Deluge automation", desc: "Process enforcement, custom functions, and the logic that Zoho's standard rules can't express." },
      { title: "Zoho ecosystem integration", desc: "Books, Desk, Campaigns, Creator, and Inventory connected properly, so the suite behaves like one system instead of six that share a login." },
      { title: "Non-Zoho integration", desc: "Shopify, Stripe, WhatsApp, and your own database wired in through the API, with proper error handling." },
      { title: "Migration and cleanup", desc: "Moving in from spreadsheets or another CRM without importing a decade of duplicates along with it." },
    ],
  },
  {
    label: "Pipedrive and lighter CRMs",
    icon: TrendingUp,
    items: [
      { title: "Automation past the built-in limits", desc: "Routing, sequencing, and multi-step logic that the native automation builder tops out on." },
      { title: "Data completeness", desc: "Enrichment, deduplication, and required-field enforcement that doesn't rely on reps remembering." },
      { title: "Connecting the rest of the stack", desc: "Your proposal tool, your billing system, your project tool, and your inbox all writing back to the deal record." },
      { title: "Knowing when to move", desc: "If you've outgrown the platform, we'll say so, and migrating badly is worse than staying. That's a real conversation, not a sales one." },
    ],
  },
];

const WEEK_MOMENTS = [
  {
    day: "Monday — the lead arrives",
    before: "A form submission lands in an inbox. Someone copies it into the CRM when they get round to it, or doesn't. The company field says whatever the prospect typed. Nobody's checked whether this contact already exists.",
    after: "Created on submission, enriched with company data, checked against existing records, scored, assigned by territory and workload, and acknowledged within a minute.",
  },
  {
    day: "Wednesday — the conversation happens",
    before: "Two emails, a WhatsApp exchange, and a call. None of it logged, because logging it means switching tabs and typing a summary. The record still shows Monday's status.",
    after: "Email and calendar activity logged automatically. The WhatsApp thread attached to the contact. A call summary written and filed. The record reflects what actually happened without anyone maintaining it.",
  },
  {
    day: "Friday — the pipeline review",
    before: "Half the deals show stages that are days or weeks stale, so the review becomes a verbal update meeting and the CRM report is background decoration. The forecast is somebody's instinct with a number attached.",
    after: "Stages move when the underlying work moves. Stalled deals surface themselves. The review starts from the data instead of correcting it.",
  },
];

const DATA_PROBLEMS = [
  { title: "Duplicates", desc: "mean your automation fires twice, your reporting double-counts, and two reps call the same person in the same week." },
  { title: "Missing fields", desc: "mean routing rules silently fall through to a default nobody watches, and segmentation quietly excludes a chunk of your list." },
  { title: "Stale records", desc: "mean automation acts on a state that stopped being true weeks ago, chasing a deal that closed, nurturing a customer who churned." },
  { title: "Inconsistent values", desc: "mean “United Kingdom,” “UK,” and “U.K.” are three territories as far as your routing rule is concerned." },
];

const PROCESS = [
  { step: "01", title: "Audit", duration: "3 days", desc: "We measure the state of your data and map what your team currently updates by hand. You get the numbers, duplicate rate, completeness on the fields that matter, how stale the average record is, whether or not you hire us." },
  { step: "02", title: "Fixed scope and price", duration: "1 day", desc: "A written list of what gets cleaned, what gets connected, and what gets automated, with a price and a date. Approved before anything is built." },
  { step: "03", title: "Clean, connect, automate", duration: "1–3 weeks", desc: "Deduplication and normalisation first, run on a sandbox copy so you see the result before it touches production. Then integrations, then automation, then testing on real records." },
  { step: "04", title: "Live, then monitored", duration: "ongoing", desc: "Switched on with alerting on failed syncs and a monthly data-quality report, so degradation is visible rather than discovered six months later. The monthly plan covers fixes, tuning, and new automation as your process changes." },
];

// Per the source spec, only platforms Spaciva has genuinely built on are named as CRM platforms
// (matches the tabs above); the other integration categories are general connectivity, not
// platform-experience claims, so they're listed as given.
const TOOL_GROUPS = [
  {
    category: "CRM platforms", icon: Users, items: [
      { name: "HubSpot", icon: Sparkles },
      { name: "Salesforce", icon: Cloud },
      { name: "Zoho CRM", icon: Grid3x3 },
      { name: "Pipedrive", icon: TrendingUp },
    ],
  },
  {
    category: "Billing and finance", icon: CreditCard, items: [
      { name: "Stripe", icon: CreditCard },
      { name: "QuickBooks", icon: Receipt },
      { name: "Xero", icon: Calculator },
      { name: "Zoho Books", icon: LayoutGrid },
      { name: "Razorpay", icon: CreditCard },
      { name: "Chargebee", icon: Receipt },
    ],
  },
  {
    category: "Commerce", icon: ShoppingBag, items: [
      { name: "Shopify", icon: ShoppingCart },
      { name: "WooCommerce", icon: Package },
      { name: "Magento", icon: ShoppingBag },
    ],
  },
  {
    category: "Comms", icon: MessageSquare, items: [
      { name: "Gmail and Google Workspace", icon: Mail },
      { name: "Outlook and Microsoft 365", icon: InboxIcon },
      { name: "Slack", icon: Hash },
      { name: "WhatsApp Business", icon: MessageCircle },
    ],
  },
  {
    category: "Support", icon: LifeBuoy, items: [
      { name: "Zendesk", icon: LifeBuoy },
      { name: "Freshdesk", icon: Headset },
      { name: "Intercom", icon: MessageSquare },
      { name: "Help Scout", icon: LifeBuoy },
      { name: "Front", icon: MessageCircle },
    ],
  },
  {
    category: "Marketing", icon: Megaphone, items: [
      { name: "Mailchimp", icon: Mail },
      { name: "Klaviyo", icon: Megaphone },
      { name: "Google Ads", icon: Target },
      { name: "Meta Ads", icon: Target },
      { name: "LinkedIn Ads", icon: Target },
    ],
  },
  {
    category: "Ops and data", icon: Database, items: [
      { name: "Notion", icon: FileText },
      { name: "Airtable", icon: Grid3x3 },
      { name: "Asana", icon: ListTodo },
      { name: "ClickUp", icon: ListTodo },
      { name: "Postgres", icon: Database },
      { name: "MySQL", icon: HardDrive },
      { name: "Google Sheets", icon: Sheet },
      { name: "BigQuery", icon: BarChart3 },
    ],
  },
  {
    category: "Automation layer", icon: Workflow, items: [
      { name: "n8n", icon: Workflow },
      { name: "Make", icon: Shuffle },
      { name: "Zapier", icon: GitBranch },
      { name: "Custom Python & Node services", icon: Code2 },
    ],
  },
];

const WHERE_WRONG = [
  { title: "Automating around the adoption problem", desc: "If reps aren't updating the CRM, more automation on top doesn't fix that, it just widens the gap between what the system says and what's true. The fix is removing the manual entry, not adding workflows that assume it happened." },
  { title: "Building automation nobody can maintain", desc: "A Flow with forty elements or a chain of workflows built by someone who's left is a system your team is afraid to change. We document what we build and design it to be modified by someone who wasn't us." },
  { title: "Buying capability you already own", desc: "Plenty of what teams ask us to build is sitting unused in a tier they're already paying for. We check that first, and we'll tell you when the answer is “turn on the feature you have” rather than “hire us.”" },
  { title: "Cleaning once and never again", desc: "A one-off cleanup degrades back within a year without validation and enrichment holding the line. Cleanup without enforcement is a temporary result at a permanent price." },
];

const FAQS = [
  {
    q: "Which CRMs do you work with?",
    a: "HubSpot, Salesforce, Zoho CRM, and Pipedrive. If yours has an API, we can generally work with it, and if we haven't built on it before, we'll say so rather than learning on your budget.",
  },
  {
    q: "Can't our CRM already do this?",
    a: "Often, yes, and we check that first. Native builders handle standard automation well, and all the major platforms now ship AI agents too. We're worth hiring when the logic exceeds what the builder can express, the data underneath is unreliable, or you need to connect something your CRM has no native integration with.",
  },
  {
    q: "Our CRM data is a mess. Do we have to fix it before we start?",
    a: "No, that's usually the first thing we do. We measure duplicate rate, field completeness, and record staleness, then clean and put validation in place so it doesn't degrade back. Automating on top of unreliable data is how projects fail expensively.",
  },
  {
    q: "Will this stop our team having to update the CRM?",
    a: "Most of it. Anything a system can know, email and calendar activity, payment status, order state, stage changes tied to real events, should be captured automatically. What genuinely needs a human's judgement, like qualification notes, stays with the human.",
  },
  {
    q: "How long does it take?",
    a: "Data cleanup is typically two weeks. An automation build is three to four. Doing both usually runs four to six, depending on how many systems we're connecting.",
  },
  {
    q: "Do you do CRM migrations?",
    a: "Yes, and the cleanup matters more here than anywhere else, a migration is the one moment you can avoid carrying a decade of duplicates into a new system. Migrating dirty data is just relocating the problem.",
  },
  {
    q: "Will our data leave our CRM?",
    a: "Cleanup and testing happen in a sandbox or a copy, and production changes are made through your CRM's own API. We don't need to export your customer database to a third-party platform, and we work under NDA with access limited to the engineers on your project.",
  },
  {
    q: "What happens if something breaks?",
    a: "Integrations ship with alerting on failed syncs, so we usually know before you do. Fixes to anything we built are covered by the monthly plan.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. It runs inside your own CRM instance and your own accounts, with documentation handed over. If you stop working with us, everything keeps running and your team or another consultant can maintain it.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough.",
  },
  // TODO: client to confirm real pricing ($X cleanup/audit, $Y automation build, $Z/month partner
  // plan) and restore the "What does it cost?" FAQ and the pricing section (Section 8) once
  // confirmed. Per the source spec: delete rather than publish ranges that can't be honoured.
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM Automation",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "CRM data cleanup, integration, and automation for HubSpot, Salesforce, Zoho CRM, and Pipedrive, connecting the systems a CRM can't reach on its own.",
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
    { "@type": "ListItem", position: 3, name: "CRM Automation", item: "https://spaciva.tech/services/crm-automation" },
  ],
};

function TabbedExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (active + 1) % TABS.length : (active - 1 + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Pick your CRM" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`tabpanel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"
                : "bg-white text-slate-600 border-[#E2E8F0] hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/*
        All four panels render on load and stay in the DOM at all times, so this platform-by-
        platform keyword surface stays crawlable. Inactive panels are stacked on the same grid
        cell and faded out with CSS rather than unmounted.
      */}
      <div className="grid">
        {TABS.map((tab, i) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`tabpanel-${i}`}
            aria-labelledby={`tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {tab.items.map((item) => (
                <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#C4B5FD] hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            {tab.note && (
              <p className="text-sm text-slate-500 leading-relaxed bg-white border border-dashed border-slate-200 rounded-xl px-4 py-3">
                {tab.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CrmAutomationClient() {
  const [activeRail, setActiveRail] = useState(RAIL[0].id);

  useEffect(() => {
    const sections = RAIL.map((r) => document.getElementById(r.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveRail(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — centred, single column, before/after strip: two deal records, built in HTML/CSS
          in the site's own colours rather than a screenshot of a real CRM. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[780px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              CRM Automation
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              A CRM nobody updates is an expensive spreadsheet
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Most CRMs are half-empty, half-wrong, and half-trusted, because keeping them current is manual work that always loses to actual selling. We fix the data, connect the systems your CRM can&apos;t reach on its own, and automate the updating so the record is right without anyone maintaining it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-automate" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See what we automate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-12">
              Most builds live in 2–4 weeks · HubSpot · Salesforce · Zoho · Pipedrive
            </p>
          </motion.div>

          {/* Before/after strip — two deal records */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4 text-left"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">Before</span>
              <div className="flex flex-col gap-2 mb-4 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Stage updated</span><span className="font-semibold text-slate-500">34 days ago</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Owner</span><span className="font-semibold text-slate-500">None</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Company</span><span className="font-semibold text-slate-500">Blank</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Records</span><span className="font-semibold text-amber-600">Duplicate found</span></div>
              </div>
              <p className="text-xs font-semibold text-slate-400">A forecast built on this is a guess.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F5F3FF] to-white border-2 border-[#7C3AED]/30 rounded-2xl p-5 sm:p-6 shadow-lg shadow-[#7C3AED]/10">
              <span className="inline-block text-xs font-bold uppercase tracking-wide text-[#7C3AED] mb-3">After</span>
              <div className="flex flex-col gap-2 mb-4 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Stage updated</span><span className="font-semibold text-[#7C3AED]">Moves with the work</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Activity</span><span className="font-semibold text-[#7C3AED]">Logged automatically</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Company</span><span className="font-semibold text-[#7C3AED]">Enriched on creation</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Records</span><span className="font-semibold text-[#7C3AED]">Merged on arrival</span></div>
              </div>
              <p className="text-xs font-semibold text-[#7C3AED]/70">A forecast built on this is a forecast.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Sticky left rail — desktop only, same track-and-dot pattern shared with the other
              Template B pages. */}
          <nav aria-label="Page sections" className="hidden lg:block">
            <div className="sticky top-32 py-16">
              <div className="relative flex flex-col gap-7">
                <span className="absolute left-[7px] top-[7px] bottom-[7px] w-px bg-slate-200" aria-hidden="true" />
                {RAIL.map((item) => {
                  const isActive = activeRail === item.id;
                  return (
                    <a key={item.id} href={`#${item.id}`} className="group relative flex items-center gap-3">
                      <span
                        className={cn(
                          "relative z-10 w-[15px] h-[15px] rounded-full border-2 shrink-0 transition-all duration-300",
                          isActive
                            ? "bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_0_4px_rgba(124,58,237,0.15)]"
                            : "bg-white border-slate-300 group-hover:border-[#C4B5FD]"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm font-semibold leading-snug transition-colors duration-300",
                          isActive ? "text-[#7C3AED]" : "text-slate-400 group-hover:text-slate-600"
                        )}
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="min-w-0">
            {/* What we automate — tabbed explorer, by platform */}
            <section id="what-we-automate" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  What We Automate
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Pick your CRM</h2>
              </div>
              <TabbedExplorer />
            </section>

            {/* Before and after — signature section. One deal through one week. */}
            <section id="before-after" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">One deal, one week</h2>
              </div>

              <div className="flex flex-col gap-6">
                {WEEK_MOMENTS.map((row) => (
                  <motion.div
                    key={row.day}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-[#E2E8F0] overflow-hidden"
                  >
                    <h3 className="font-bold text-slate-900 text-lg px-6 pt-6 pb-4">{row.day}</h3>
                    <div className="grid md:grid-cols-2 md:divide-x divide-[#E2E8F0]">
                      <div className="p-6 bg-slate-50">
                        <span className="inline-block text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Before</span>
                        <p className="text-slate-500 text-sm leading-relaxed">{row.before}</p>
                      </div>
                      <div className="p-6 bg-[#F5F3FF]">
                        <span className="inline-block text-xs font-bold uppercase tracking-wide text-[#7C3AED] mb-2">After</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{row.after}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-[680px]">
                Nobody resists using a CRM because they don&apos;t understand it. They resist because it asks them to type things a system could already know.
              </blockquote>
            </section>

            {/* Fix the data first — tight bordered panel, no icons, high importance */}
            <section id="fix-the-data" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="rounded-3xl border-2 border-[#7C3AED]/20 bg-[#F5F3FF] p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-slate-900">Automating on bad data just makes the bad data move faster</h2>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-[680px]">
                  Almost every CRM automation project we&apos;re brought into starts as a request for workflows and turns out to be a data problem wearing a workflow costume.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {DATA_PROBLEMS.map((item) => (
                    <div key={item.title}>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        <span className="font-bold text-slate-900">{item.title}</span> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 max-w-[680px] border-t border-[#7C3AED]/15 pt-6">
                  So the first thing we do is measure it: duplicate rate, field completeness on the fields that actually drive decisions, record staleness, and value consistency. You get that assessment whether or not you hire us, and it usually reframes the conversation. Then we clean, then we enforce, validation and automated enrichment so the data can&apos;t degrade back, and only then do we automate.
                </p>

                <p className="text-slate-700 font-semibold leading-relaxed max-w-[680px]">
                  It&apos;s a less exciting first month than &quot;we built you twelve workflows,&quot; and it&apos;s the difference between automation that compounds and automation that quietly does the wrong thing at scale.
                </p>
              </div>
            </section>

            {/* How it works — horizontal step rail, shared with the other Template B pages */}
            <section id="how-it-works" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four steps, two to four weeks</h2>
              </div>

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
                            <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[#C4B5FD] to-[#E2E8F0] ml-2" />
                          )}
                        </div>
                      </div>
                      <div className="lg:mt-4 lg:pr-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {idx < PROCESS.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* What it connects to — the longest logo list on the site */}
            <section id="integrations" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Your CRM should know what the rest of your stack knows</h2>
                <p className="text-lg text-slate-600">Most CRM problems are integration problems. The record is wrong because the truth lives somewhere the CRM can&apos;t see.</p>
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
                    <div className="flex flex-col gap-1">
                      {group.items.map((item) => (
                        <div key={item.name} className="flex items-center gap-2.5 py-1">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                            <item.icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm font-medium text-slate-600">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-slate-600 max-w-[680px]">
                Using something else? If it has an API, we can connect it. If it doesn&apos;t, and some older industry-specific systems genuinely don&apos;t, we&apos;ll tell you before you commit and propose a scheduled file exchange instead of pretending otherwise.
              </p>
            </section>

            {/*
              Pricing section intentionally omitted: the source spec puts an open three-column
              pricing table here, but explicitly says to delete the section rather than publish
              figures that aren't confirmed yet. TODO: client to confirm cleanup/audit, automation
              build, and monthly-partner pricing, then restore this section and the matching FAQ.
            */}

            {/* Where it goes wrong — plain, tight, no icons */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">Four ways CRM projects waste money</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl">
                {WHERE_WRONG.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Do you need us, or your CRM's own tools? */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Your CRM can already do a lot of this</h2>
                <p className="text-lg text-slate-600">Worth saying plainly, because the alternative is you discovering it after signing.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Use what you already have when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your requirement fits the native builder, your data is in decent shape, and you have someone in-house who&apos;ll own it. HubSpot, Salesforce, Zoho, and Pipedrive all ship capable automation, and all now ship AI agents, Breeze, Agentforce, Zia, that handle a lot of standard sales and support tasks well. If that&apos;s your situation, hiring us would be paying for something you&apos;re already licensed for.
                  </p>
                </div>

                <div className="p-6 md:p-8 rounded-3xl border-2 border-[#7C3AED]/30 bg-[#F5F3FF]">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Bring us in when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The logic exceeds what the builder can express, the data underneath is unreliable, you need to connect a system your CRM has no native integration with, previous automation has become too tangled to safely change, or you have nobody in-house who owns any of it. Native AI agents are often usage-billed or gated behind a higher tier, so &quot;it&apos;s included&quot; sometimes isn&apos;t, worth checking your actual plan before assuming.
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[680px] mb-8">
                <span className="font-bold text-slate-900">Honest answer:</span> the first thing we do on a call is ask what tier you&apos;re on and what&apos;s already switched on. We&apos;ve told people to go and use a feature they were already paying for more than once. It&apos;s a bad way to close that deal and a good way to be the first call when the next one comes up.
              </p>

              <p className="text-slate-600 leading-relaxed max-w-[680px] border-t border-[#E2E8F0] pt-8">
                If the real problem is elsewhere: data moving between tools is{" "}
                <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>. Mail piling up is{" "}
                <Link href="/services/email-inbox-automation" className="font-bold text-[#7C3AED] hover:underline">email and inbox automation</Link>. Conversations that need judgement rather than rules are{" "}
                <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent development</Link>.
              </p>

              <p className="text-slate-600 leading-relaxed max-w-[680px] mt-4">
                And if the honest answer is that no CRM on the market fits how your business actually works, that&apos;s a different page entirely:{" "}
                <Link href="/services/crm-development" className="font-bold text-[#7C3AED] hover:underline">CRM development</Link>. This page is for &quot;why doesn&apos;t our CRM work properly&quot;. That one is for &quot;should we build our own&quot;, and it&apos;s a much bigger commitment.
              </p>
            </section>

            {/* FAQ — two-column plain list, no accordion, everything visible on load */}
            <section id="questions" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {FAQS.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-500 text-sm max-w-[680px]">
                <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">See what the monthly plan actually covers</Link>, the tuning and monitoring work that keeps a sync from quietly drifting.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Closing CTA — light bordered panel, not a dark band (Template B closes light) */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <CheckCircle2 className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Find out what state your CRM data is actually in.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll audit your duplicate rate, field completeness, and how stale the average record is, and tell you what&apos;s worth cleaning, connecting, or automating. If the answer is a feature you&apos;re already paying for, we&apos;ll tell you that instead.
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
