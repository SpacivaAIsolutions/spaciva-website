"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowDown, Users, Briefcase, ShoppingBag, Settings,
  Zap, Bot, CheckCircle2, Circle, XCircle, Bell,
  MessageSquare, FolderKanban, Database,
  Workflow, Shuffle, GitBranch, Code2, Contact, TrendingUp, Cloud, LayoutGrid, PhoneCall,
  Hash, Mail, Inbox, MessageCircle, FileText, CheckSquare, ListTodo, Calendar, Grid3x3, AppWindow,
  ShoppingCart, Package, CreditCard, Receipt, Calculator, Server, HardDrive, Sheet, BarChart3,
} from "lucide-react";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const BEFORE_STEPS = [
  "Someone checks the inbox",
  "Copies details into the CRM",
  "Assigns an owner",
  "Writes a welcome email",
  "Creates the project folder",
  "Adds tasks",
];

const RAIL = [
  { id: "what-we-automate", label: "What we automate" },
  { id: "manual-vs-automated", label: "Manual vs automated" },
  { id: "how-it-works", label: "How it works" },
  { id: "tools", label: "Tools we use" },
  { id: "questions", label: "Questions" },
];

const TABS = [
  {
    label: "Agencies",
    icon: Users,
    items: [
      { title: "Client onboarding", desc: "A signed proposal creates the client record, the project folder, the kickoff tasks, the Slack channel, and the welcome sequence. What took most of an afternoon happens before you've closed the tab." },
      { title: "Client reporting", desc: "Data pulls from your ad platforms, analytics, and project tools on a schedule, assembles into your template, and lands in the client's inbox on the first of the month. Nobody rebuilds it by hand." },
      { title: "Lead intake and routing", desc: "Every enquiry from every source arrives in one place, enriched and scored, routed to the right person with a first response sent inside a minute." },
      { title: "Time and invoice prep", desc: "Tracked hours assemble into draft invoices against each client's rate card, ready for review instead of ready to be built from scratch." },
    ],
  },
  {
    label: "Professional services",
    icon: Briefcase,
    items: [
      { title: "Client intake and document collection", desc: "Intake forms trigger engagement letters, chase missing documents automatically, and file what arrives into the right client folder." },
      { title: "Document data extraction", desc: "Invoices, contracts, and forms read, the fields you need extracted and validated, then pushed into your practice management or accounting system." },
      { title: "Deadline and compliance tracking", desc: "Filing dates, renewals, and review dates monitored automatically with escalating reminders before anything slips." },
      { title: "Follow-up sequences", desc: "Proposals, outstanding invoices, and dormant clients chased on a schedule, in your voice, without anyone having to remember." },
    ],
  },
  {
    label: "E-commerce and DTC",
    icon: ShoppingBag,
    items: [
      { title: "Order and fulfilment updates", desc: "Order events trigger customer notifications, warehouse alerts, and internal flags on exceptions, so the only orders anyone looks at are the ones that need a human." },
      { title: "Returns and exchange processing", desc: "Requests validated against your policy, labels issued, inventory adjusted, refund queued. Manual only where policy genuinely requires judgement." },
      { title: "Inventory and supplier alerts", desc: "Stock thresholds trigger reorder drafts and supplier emails before you find out you're out of your best seller." },
      { title: "Review and post-purchase flows", desc: "Review requests, replenishment reminders, and win-back sequences firing on real behaviour rather than a fixed calendar." },
    ],
  },
  {
    label: "Internal ops",
    icon: Settings,
    items: [
      { title: "Data sync between tools", desc: "Your CRM, spreadsheets, billing system, and project tool stop disagreeing with each other, because one becomes the source of truth and the rest follow automatically." },
      { title: "Recurring reports", desc: "Any report someone rebuilds weekly gets built once and delivered on schedule." },
      { title: "Approval routing", desc: "Requests routed to the right approver, escalated when they sit too long, logged when resolved." },
      { title: "Employee onboarding", desc: "Accounts, access, equipment requests, and first-week tasks all triggered by one form." },
    ],
  },
];

const MANUAL_VS_AUTOMATED = [
  {
    title: "Client onboarding",
    manual: "Someone spots the signed contract. Opens the CRM, types the details. Creates the folder. Copies the task template. Writes the welcome email. Adds them to billing. Tells the team.",
    manualStat: "≈40 min",
    manualCaption: "Steps get missed when it's busy.",
    automated: "The signature triggers all of it. The team gets a Slack message once the client is fully set up.",
    automatedStat: "<30 sec",
    automatedCaption: "Nothing is ever missed.",
  },
  {
    title: "Monthly client reporting",
    manual: "Export from four platforms. Paste into the template. Fix the formatting. Write the commentary. Send. Repeat per client.",
    manualStat: "2–3 hrs",
    manualCaption: "Per client, per month.",
    automated: "Data assembles into your template on the first, ready for the commentary that actually needs a human.",
    automatedStat: "10 min",
    automatedCaption: "Of judgement, not assembly.",
  },
  {
    title: "Invoice processing",
    manual: "Open the PDF. Read the figures. Type them into the accounting system. Check them. File the document.",
    manualStat: "5–8 min",
    manualCaption: "Per invoice, error-prone at volume.",
    automated: "Invoices read on arrival, fields extracted and validated against your rules, flagged only when something doesn't reconcile.",
    automatedStat: "Seconds",
    automatedCaption: "A human reviews exceptions only.",
  },
];

const STEPS = [
  { step: "01", title: "We watch how you work now", duration: "2 days", desc: "A short call per workflow. We map what actually happens, including the steps nobody documented, and count what it costs in hours. You get that number whether or not you hire us." },
  { step: "02", title: "Fixed scope and price", duration: "1 day", desc: "A written list of exactly which workflows we'll automate, what each will do, the price, and the date. Approved before anything is built." },
  { step: "03", title: "Build and test", duration: "1 week", desc: "Built against your real tools and run on real cases in staging. You see it work on your own data before it touches anything live." },
  { step: "04", title: "Live, then monitored", duration: "ongoing", desc: "Switched on with alerting, so if an integration breaks we know before you do. The monthly plan covers fixes, tuning, and new steps as your process changes." },
];

const TOOL_GROUPS = [
  {
    category: "Automation platforms", icon: Zap, tools: [
      { name: "n8n", icon: Workflow },
      { name: "Make", icon: Shuffle },
      { name: "Zapier", icon: GitBranch },
      { name: "Custom Python & Node services", icon: Code2 },
    ],
  },
  {
    category: "CRM and sales", icon: Users, tools: [
      { name: "HubSpot", icon: Contact },
      { name: "Pipedrive", icon: TrendingUp },
      { name: "Salesforce", icon: Cloud },
      { name: "Zoho", icon: LayoutGrid },
      { name: "Close", icon: PhoneCall },
    ],
  },
  {
    category: "Comms", icon: MessageSquare, tools: [
      { name: "Slack", icon: Hash },
      { name: "Gmail", icon: Mail },
      { name: "Outlook", icon: Inbox },
      { name: "WhatsApp Business", icon: MessageCircle },
    ],
  },
  {
    category: "Project and docs", icon: FolderKanban, tools: [
      { name: "Notion", icon: FileText },
      { name: "Asana", icon: CheckSquare },
      { name: "ClickUp", icon: ListTodo },
      { name: "Monday", icon: Calendar },
      { name: "Airtable", icon: Grid3x3 },
      { name: "Google Workspace", icon: AppWindow },
    ],
  },
  {
    category: "Commerce and billing", icon: ShoppingBag, tools: [
      { name: "Shopify", icon: ShoppingCart },
      { name: "WooCommerce", icon: Package },
      { name: "Stripe", icon: CreditCard },
      { name: "QuickBooks", icon: Receipt },
      { name: "Xero", icon: Calculator },
    ],
  },
  {
    category: "Data", icon: Database, tools: [
      { name: "Postgres", icon: Server },
      { name: "MySQL", icon: HardDrive },
      { name: "Google Sheets", icon: Sheet },
      { name: "BigQuery", icon: BarChart3 },
    ],
  },
];

const WHERE_WRONG = [
  { title: "Automating a broken process", desc: "If the workflow doesn't make sense manually, automating it just makes the mess happen faster. Sometimes the honest answer is to fix the process first and automate less of it. We'll say so." },
  { title: "Building it where nobody can maintain it", desc: "An automation living in one person's personal account, undocumented, becomes a liability the day they leave. Everything we build sits in your accounts, documented, owned by you." },
  { title: "Nobody watching it", desc: "APIs change and integrations break silently. An automation nobody monitors fails quietly for weeks before someone notices the reports stopped arriving. Monitoring isn't an upsell here, it's the difference between an asset and a time bomb." },
];

const FAQS = [
  {
    q: "How long does one automation take to build?",
    a: "Most single workflows go from kickoff to live in about two weeks. A package of three to five connected workflows usually takes three to four weeks, depending on how many tools we're connecting and how clean your data is.",
  },
  {
    q: "Can't we just use Zapier ourselves?",
    a: "Often, yes, and if your workflow is simple enough for that, we'll tell you on the call. People usually come to us when the process branches, needs data cleanup, requires error handling, or spans more tools than a simple chain manages well. Cost matters too: at volume, per-task pricing on hosted platforms frequently exceeds the cost of running a proper automation on your own infrastructure.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. It runs in your accounts, on your platforms, with documentation handed over. If you stop working with us, everything keeps running and your team can maintain it.",
  },
  {
    q: "What if something breaks?",
    a: "Everything ships with alerting, so we usually know before you do. Fixes to anything we built are covered by the monthly plan.",
  },
  {
    q: "Do we need to change the tools we use?",
    a: "No. The point is to connect what you already run. We'd only suggest a change if a tool genuinely can't do what you need, and we'd explain why before you commit to anything.",
  },
  {
    q: "What's the smallest project you'll take?",
    a: "A single workflow. Plenty of clients start with one, see the time it gives back, and expand from there. We'd rather start small and be right than sell you a package you're unsure about.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified number,
  // consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. Written update every Friday plus a short Loom walkthrough.",
  },
  // TODO: client to confirm real pricing ($X single workflow, $Y package, $Z/month partner plan)
  // and restore the "What does it cost?" FAQ and the open pricing table (Section 7) once
  // confirmed. Per the source spec: delete rather than publish ranges that can't be honoured.
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Workflow Automation",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Automation of repetitive business workflows, connected to your existing tools, fixed price, monitored monthly.",
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
    { "@type": "ListItem", position: 3, name: "Workflow Automation", item: "https://spaciva.tech/services/workflow-automation" },
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
      <div role="tablist" aria-label="Who this is for" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
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
        All four panels render on load and stay in the DOM at all times, so the richest keyword
        content on the page stays crawlable and doesn't rely on JS to exist. Inactive panels are
        stacked on the same grid cell and faded out with CSS rather than unmounted, which is what
        makes the switch feel like a transition instead of an instant swap.
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
            <div className="grid sm:grid-cols-2 gap-5">
              {tab.items.map((item) => (
                <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#C4B5FD] hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkflowAutomationClient() {
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

      {/* Hero — centred, single column, before/after strip. Deliberately not the two-column
          screenshot hero used on the AI Agent page, per the Template B spec. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[780px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Workflow Automation
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Your team is doing work a system should be doing
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Every business runs on a set of repetitive steps somebody does by hand: copying data between tools, chasing updates, rebuilding the same report every week. We find those, automate them properly, and keep them running.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-automate" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See what we automate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-12">
              Most automations live in 2 weeks · You own everything we build
            </p>
          </motion.div>

          {/* Before/after strip — the page's signature element, in the first viewport.
              Density itself does the persuading: a cluttered chain of manual steps against one
              calm automated card, so the contrast reads before anyone reads a word. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative grid sm:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-3 items-center text-left"
          >
            {/* Before — a visibly busy chain of hand-offs */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Before</span>
                <span className="text-2xl font-extrabold text-slate-700 tabular-nums">≈40<span className="text-sm font-bold text-slate-400 ml-1">min</span></span>
              </div>
              <div className="flex items-start gap-2.5 mb-2.5">
                <Circle className="w-3.5 h-3.5 mt-0.5 shrink-0 fill-slate-300 text-slate-300" />
                <span className="text-sm text-slate-500 leading-snug">Form submitted</span>
              </div>
              {BEFORE_STEPS.map((step) => (
                <div key={step} className="flex items-start gap-2.5 mb-2.5 ml-[6.5px] pl-[6.5px] border-l border-dashed border-slate-300">
                  <Circle className="w-3 h-3 -ml-[7.5px] mt-0.5 shrink-0 fill-slate-200 text-slate-300" />
                  <span className="text-sm text-slate-500 leading-snug">{step}</span>
                </div>
              ))}
              <p className="mt-3 text-xs font-semibold text-slate-400">Seven hand-offs, and steps get missed when it&apos;s busy.</p>
            </div>

            {/* Transformation arrow — desktop only between the two panels */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#7C3AED]" />
              </div>
            </div>
            <div className="sm:hidden flex justify-center">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <ArrowDown className="w-4 h-4 text-[#7C3AED]" />
              </div>
            </div>

            {/* After — one calm, automated outcome */}
            <div className="relative bg-gradient-to-br from-[#F5F3FF] to-white border-2 border-[#7C3AED]/30 rounded-2xl p-5 sm:p-6 shadow-lg shadow-[#7C3AED]/10">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide text-[#7C3AED]">After</span>
                <span className="text-2xl font-extrabold text-[#7C3AED] tabular-nums">&lt;30<span className="text-sm font-bold text-[#7C3AED]/60 ml-1">sec</span></span>
              </div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <Circle className="w-3.5 h-3.5 shrink-0 fill-slate-300 text-slate-300" />
                <span className="text-sm text-slate-500 leading-snug">Form submitted</span>
              </div>
              <div className="flex items-center gap-3 my-3 bg-white rounded-xl border border-[#7C3AED]/20 px-4 py-3.5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-900 leading-snug">Everything above, automatically</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Bell className="w-3.5 h-3.5 shrink-0 text-[#7C3AED]" />
                <span className="text-sm text-slate-600 leading-snug">Team notified in Slack</span>
              </div>
              <p className="mt-3 text-xs font-semibold text-[#7C3AED]/70">Unattended, and nothing is ever missed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Sticky left rail — desktop only (≥1024px). A track-and-dot progress read, echoing
              the numbered step rail further down the page rather than a plain bordered link list. */}
          <nav aria-label="Page sections" className="hidden lg:block">
            <div className="sticky top-32 py-16">
              <div className="relative flex flex-col gap-7">
                <span className="absolute left-[7px] top-[7px] bottom-[7px] w-px bg-slate-200" aria-hidden="true" />
                {RAIL.map((item) => {
                  const isActive = activeRail === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group relative flex items-center gap-3"
                    >
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
            {/* What we automate — tabbed explorer */}
            <section id="what-we-automate" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  What We Automate
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Pick the version of this that sounds like your week</h2>
              </div>
              <TabbedExplorer />
            </section>

            {/* Manual vs automated — signature section */}
            <section id="manual-vs-automated" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">The same process, two ways</h2>
              </div>

              <div className="flex flex-col gap-6">
                {MANUAL_VS_AUTOMATED.map((row) => (
                  <motion.div
                    key={row.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm"
                  >
                    <h3 className="font-bold text-slate-900 text-lg px-6 pt-6 pb-4">{row.title}</h3>
                    <div className="grid md:grid-cols-2 md:divide-x divide-[#E2E8F0]">
                      <div className="p-6 bg-slate-50">
                        <div className="flex items-center gap-2 mb-3">
                          <XCircle className="w-4 h-4 text-slate-400" />
                          <span className="text-xs font-bold uppercase tracking-wide text-slate-400">By hand</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{row.manual}</p>
                        <p className="text-2xl font-extrabold text-slate-600 tracking-tight">{row.manualStat}</p>
                        <p className="text-xs font-semibold text-slate-400 mt-0.5">{row.manualCaption}</p>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-[#F5F3FF] to-white">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                          <span className="text-xs font-bold uppercase tracking-wide text-[#7C3AED]">Automated</span>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed mb-4">{row.automated}</p>
                        <p className="text-2xl font-extrabold text-[#7C3AED] tracking-tight">{row.automatedStat}</p>
                        <p className="text-xs font-semibold text-[#7C3AED]/70 mt-0.5">{row.automatedCaption}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-[680px]">
                None of this is exotic. It&apos;s the work your team already knows is a waste of their time, the only reason it hasn&apos;t been automated is that nobody&apos;s had a spare week to sit down and do it properly.
              </blockquote>
            </section>

            {/* How it works — horizontal step rail (vertical timeline was used on the AI Agent page) */}
            <section id="how-it-works" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four steps, about two weeks</h2>
              </div>

              <div className="lg:flex lg:items-start lg:gap-4">
                {STEPS.map((item, idx) => (
                  <div key={item.step} className="lg:flex-1 relative">
                    <div className="flex lg:flex-col gap-4 lg:gap-0 pb-10 lg:pb-0">
                      <div className="flex lg:flex-col items-center lg:items-start gap-2 shrink-0">
                        <div className="flex items-center w-full">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-[#7C3AED]/25">
                            {item.step}
                          </span>
                          {idx < STEPS.length - 1 && (
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
                    {/* vertical connecting line for the stacked mobile/tablet layout */}
                    {idx < STEPS.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section id="tools" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">We work with what you already use</h2>
                <p className="text-lg text-slate-600">We don&apos;t ask you to move to a new platform. We connect what you&apos;re running today.</p>
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
                      {group.tools.map((tool) => (
                        <div key={tool.name} className="flex items-center gap-2.5 py-1">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                            <tool.icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-sm font-medium text-slate-600">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-sm text-slate-500 max-w-[680px]">
                Not listed? If it has an API, we can almost certainly connect it. If it doesn&apos;t, we&apos;ll tell you before you commit rather than after.
              </p>
            </section>

            {/*
              Pricing table intentionally omitted: the source spec puts an open three-column
              pricing table here, but explicitly says to delete the section rather than publish
              ranges that aren't confirmed yet. TODO: client to confirm single-workflow, package,
              and monthly-partner pricing, then restore this section (and the matching FAQ entry).
            */}

            {/* Where it goes wrong — plain, tight, no icons */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">Three ways automation projects waste money</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl">
                {WHERE_WRONG.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Automation or an agent? */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Do you need automation, or an AI agent?</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-slate-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-sm flex items-center justify-center mb-5">
                    <Zap className="w-6 h-6 text-slate-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Workflow automation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The steps are known in advance. If the form says X, do Y. Cheaper, faster, more predictable, easier to maintain. Most business processes are this, and most people over-estimate how much judgement theirs really needs.
                  </p>
                </div>

                <Link
                  href="/services/ai-agent-development"
                  className="group p-6 md:p-8 rounded-3xl border border-[#7C3AED]/30 bg-gradient-to-br from-[#F5F3FF] to-white hover:border-[#7C3AED] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#7C3AED]/20 shadow-sm flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Bot className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    AI agents
                    <ArrowRight className="w-4 h-4 text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    The right next step depends on judgement: understanding an unusual customer message, reading a non-standard document, deciding which of six paths applies. More capable, more expensive, needs ongoing tuning.
                  </p>
                  <span className="font-bold text-[#7C3AED] text-sm">Read about AI agent development →</span>
                </Link>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[680px]">
                <span className="font-bold text-slate-900">Honest answer:</span> we start most clients on automation. It&apos;s cheaper, it works immediately, and it usually reveals which one or two steps genuinely need an agent, a much better basis for that decision than guessing upfront.
              </p>
              <p className="text-slate-600 leading-relaxed max-w-[680px] mt-3">
                Need it to answer questions instead of run a process? That&apos;s a{" "}
                <Link href="/services/rag-chatbot-development" className="font-bold text-[#7C3AED] hover:underline">
                  RAG chatbot
                </Link>. And if what you actually need is invoices and contracts read and posted
                rather than a workflow triggered, that&apos;s{" "}
                <Link href="/services/document-invoice-processing" className="font-bold text-[#7C3AED] hover:underline">
                  document processing
                </Link>. And if the problem is really just the inbox, sorting and drafting mail
                as it arrives, that&apos;s{" "}
                <Link href="/services/email-inbox-automation" className="font-bold text-[#7C3AED] hover:underline">
                  email and inbox automation
                </Link>. And if your customers already message you on{" "}
                <Link href="/services/whatsapp-automation" className="font-bold text-[#7C3AED] hover:underline">
                  WhatsApp
                </Link>, the same logic just runs there instead.
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
            Tell us what your team does every week that it shouldn&apos;t have to.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll map one workflow with you, tell you what it&apos;s costing in hours, and give you a fixed price to automate it. If it isn&apos;t worth automating, we&apos;ll tell you that too.
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
