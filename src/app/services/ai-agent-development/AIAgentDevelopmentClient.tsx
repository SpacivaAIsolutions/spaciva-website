"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Headset, UserCheck, FileText, BarChart3,
  AlertTriangle, Database, Plug, Brain, ShieldAlert, GitBranch, KeyRound,
  Users, Briefcase, ShoppingBag, Rocket,
  Tag, Clock, Code2, RefreshCw, Wrench, ChevronDown,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const AGENTS_WE_BUILD = [
  {
    title: "Customer support agent",
    desc: "Trained on your help docs, product pages, and past tickets. Answers common questions across your website, WhatsApp, and email, and hands off to a human the moment it's out of depth, with the full conversation attached, so nobody starts from scratch.",
    bestFor: "DTC brands and SaaS teams where the same twenty questions consume most of the inbox.",
    icon: Headset,
  },
  {
    title: "Lead intake and qualification agent",
    desc: "Captures every inbound enquiry, enriches it, asks the qualifying questions you'd ask, scores it against your criteria, and routes it to the right person in your CRM or Slack, in under a minute, at 2am, on a Sunday.",
    bestFor: "Agencies and professional-services firms losing deals to slow first-response times.",
    icon: UserCheck,
  },
  {
    title: "Document and invoice agent",
    desc: "Reads invoices, contracts, forms, and scanned records. Extracts the fields you actually need, validates them against your rules, and files them into your accounting system or database. No re-keying, no copy-paste.",
    bestFor: "Accounting, legal, logistics, and any team where someone's week disappears into PDFs.",
    icon: FileText,
  },
  {
    title: "Internal ops and reporting agent",
    desc: "Pulls data from the tools you already use, assembles the report you build by hand every week, and delivers it to Slack or email on a schedule. Answers questions about your own data in plain language.",
    bestFor: "Agency owners rebuilding the same client report every Monday morning.",
    icon: BarChart3,
  },
];

const WHY_AGENTS_FAIL = [
  {
    title: "Nobody defined what \"working\" means",
    desc: "The agent answered ten test questions correctly, so it shipped. There's no measure of how often it gets things right in production, which means nobody notices when the rate starts falling. We define success criteria and a test set before we build, so \"working\" is a number, not an opinion.",
  },
  {
    title: "It was never really connected to anything",
    desc: "The agent produces an answer, and then a person copies that answer into the actual system. That's a demo with extra steps. An agent earns its cost only when its output triggers action: a record updated, a ticket closed, a task assigned.",
  },
  {
    title: "It was built once and never touched again",
    desc: "Your products change, your policies change, and the underlying models change underneath you. An agent that isn't monitored degrades slowly and invisibly until a customer complains. This is exactly why every build we do includes a monthly plan, not as an upsell, but because unmonitored agents fail.",
  },
  {
    title: "Nobody owns it after launch",
    desc: "The freelancer moved on, the agency finished the project, and there's no one to call when something breaks. You get named engineers who know your system, and full documentation and source code either way.",
  },
];

const AGENT_REQUIREMENTS = [
  {
    title: "Grounded in your data",
    desc: "The agent answers from your documents, policies, and records rather than guessing from general training. If it doesn't know, it says so and escalates instead of inventing an answer.",
    icon: Database,
  },
  {
    title: "Connected to your tools",
    desc: "Real read and write access to your CRM, helpdesk, store, database, or spreadsheets, with typed, validated inputs so actions are predictable.",
    icon: Plug,
  },
  {
    title: "Memory that doesn't run away",
    desc: "It remembers the conversation and the relevant context, without dragging every past interaction into every request and quietly tripling your monthly token bill.",
    icon: Brain,
  },
  {
    title: "Boundaries on what it can do",
    desc: "Hard limits on actions it's allowed to take, and approval checkpoints before anything irreversible: refunds, deletions, outbound messages to customers.",
    icon: ShieldAlert,
  },
  {
    title: "A trace for every decision",
    desc: "Every answer is logged back to the inputs and tool calls that produced it, so when something goes wrong you can see exactly why in minutes.",
    icon: GitBranch,
  },
  {
    title: "Scoped access",
    desc: "The agent's credentials cover only what its job requires, with audit logging on every write. It can't reach what it doesn't need.",
    icon: KeyRound,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Workflow discovery",
    duration: "2–3 days",
    desc: "We map the workflow as it runs today, including the manual handoffs nobody documented. If a simpler automation solves it faster and cheaper than an agent, we'll tell you, we'd rather lose the project than build something that shouldn't exist.",
  },
  {
    step: "02",
    title: "Scope and fixed quote",
    duration: "2 days",
    desc: "You get a written scope, a fixed price, and a delivery date before any code is written. If the scope changes later, we re-quote in writing first. No hourly billing, no surprise invoices.",
  },
  {
    step: "03",
    title: "Build and connect",
    duration: "1–2 weeks",
    desc: "We build the agent against your real data and connect it to your actual stack in a staging environment. You get a written update every Friday plus a short Loom walkthrough of what moved.",
  },
  {
    step: "04",
    title: "Test against reality",
    duration: "2–3 days",
    desc: "We run it against real historical cases and the awkward edge cases, not a clean demo script. You see the accuracy numbers before it touches a live customer.",
  },
  {
    step: "05",
    title: "Go live with monitoring",
    duration: "2–3 days",
    desc: "Deployed with logging and monitoring from day one, so every decision is traceable from the first real conversation.",
  },
  {
    step: "06",
    title: "Monthly tuning",
    duration: "ongoing",
    desc: "Real usage shows what we couldn't predict. We tune prompts, improve retrieval, and extend the agent as your business changes. A named engineer stays on it.",
  },
];

// Matches the homepage's industry set exactly, four of its six verticals, so this page doesn't
// introduce a new vertical the rest of the site doesn't already stand behind. Only Startups has a
// live page today; the rest render as non-interactive cards rather than linking to a 404.
const INDUSTRIES = [
  {
    title: "Marketing and creative agencies",
    desc: "Client onboarding, reporting, and lead intake agents, built to run under your brand for your clients, or internally for your own team.",
    icon: Users,
    href: undefined,
  },
  {
    title: "Professional services",
    desc: "Intake, document processing, and follow-up agents for consulting, legal, accounting, and recruiting firms where billable hours are lost to admin.",
    icon: Briefcase,
    href: undefined,
  },
  {
    title: "E-commerce and DTC",
    desc: "Support and returns agents trained on your policies, connected into Shopify, your helpdesk, and WhatsApp.",
    icon: ShoppingBag,
    href: undefined,
  },
  {
    title: "Startups and SaaS",
    desc: "Support deflection and internal ops agents for teams shipping fast without headcount to spare.",
    icon: Rocket,
    href: "/industries/startups",
  },
];

const WHY_SPACIVA = [
  {
    title: "You know the price before you commit",
    desc: "Fixed scope, fixed price, quoted in writing before work starts. We carry the risk of our own estimates.",
    icon: Tag,
  },
  {
    title: "Live in weeks, not quarters",
    desc: "A single production agent typically goes live in three weeks. Enterprise vendors quote three months because they have three months of process.",
    icon: Clock,
  },
  {
    title: "You work with the engineers",
    desc: "No account manager relaying requirements to a team you never meet. You talk to the people writing the code.",
    icon: Code2,
  },
  {
    title: "You own all of it",
    desc: "Source code, prompts, evaluation sets, and documentation transfer to you on final payment. No proprietary platform you can't leave, no per-seat licence.",
    icon: KeyRound,
  },
  {
    title: "We stay on",
    desc: "Every build includes a monthly plan: monitoring, tuning, updates, and small feature work. It's how we scope from day one, not an upsell at handover.",
    icon: RefreshCw,
  },
  {
    title: "We take over stalled builds",
    desc: "If you have a half-finished agent from a previous vendor, we'll audit it and tell you honestly whether to salvage or restart. Sometimes the answer is salvage.",
    icon: Wrench,
  },
];

const CASE_STUDIES = [
  {
    num: "80%",
    metric: "Faster data entry",
    title: "PartsFlow",
    desc: "A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced the row-by-row spreadsheet work across a 5,000+ SKU catalog.",
    href: "/case-studies/partsflow",
  },
  {
    num: "70%",
    metric: "Less manual data entry",
    title: "Unified Accounting",
    desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.",
    href: "/case-studies/unified-accounting",
  },
];

const FAQS = [
  {
    q: "What does an AI agent development project include?",
    a: "Workflow discovery, architecture, building the agent against your data, connecting it to your existing tools, testing against real cases, deployment with monitoring, and a monthly plan for tuning and maintenance. You get the source code, prompts, and documentation.",
  },
  {
    q: "How long does it take?",
    a: "A single production agent typically goes live in about three weeks from kickoff. Builds spanning several workflows or systems usually run five to eight weeks, depending on how ready your data is and how many tools we're connecting.",
  },
  {
    q: "How much data do we need?",
    a: "Less than most people expect. If you have existing help docs, past tickets, policies, or product information, that's usually enough to ground a support or intake agent. We'll tell you in the discovery call if there's a genuine gap, and what the cheapest way to fill it is.",
  },
  {
    q: "Can you connect it to the tools we already use?",
    a: "Yes. We integrate with CRMs, helpdesks, Shopify, Slack, databases, spreadsheets, and custom applications through secure APIs. If a tool has an API, we can usually reach it; if it doesn't, we'll tell you before you commit.",
  },
  {
    q: "Can you take over an agent someone else built?",
    a: "Yes, and we do it regularly. We'll audit what exists, tell you honestly whether it's worth salvaging or faster to rebuild, and give you a fixed price for either path.",
  },
  {
    q: "Who owns the code and the models?",
    a: "You do. Source code, prompts, evaluation datasets, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified number
  // in the meantime, consistent with how the same fact is handled on the homepage FAQ.
  {
    q: "How do you work across time zones?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. You get a written update every Friday plus a Loom walkthrough of what moved.",
  },
  // TODO: client to confirm real pricing ($X single-agent, $Y/month, $Z multi-workflow) and add a
  // "How much does an AI agent cost?" FAQ here once confirmed. Per the source spec: omit the
  // question entirely rather than answer vaguely, since a fabricated number is worse than a gap.
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Agent Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom AI agents built on your own data, connected to your existing tools, and monitored monthly. Fixed scope, fixed price.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spaciva.tech/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://spaciva.tech/#what-we-do" },
    { "@type": "ListItem", position: 3, name: "AI Agent Development", item: "https://spaciva.tech/services/ai-agent-development" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `agent-faq-panel-${index}`;
  const buttonId = `agent-faq-button-${index}`;

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
      {/*
        The answer stays mounted in the DOM at all times (only its height animates), rather than
        being conditionally rendered on click. Per the source spec, collapsed answers that only
        exist after a JS event are invisible to crawlers and to AI search, and this FAQ block is
        meant to be the page's strongest GEO asset.
      */}
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

export default function AIAgentDevelopmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[260px] h-[260px] md:w-[400px] md:h-[400px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[620px]"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              AI Agent Development
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              AI agents that do the work, not just the demo
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Most AI agents look great in a sales call and quietly break in week three. We build agents that run in production: trained on your own data, connected to the tools you already use, and monitored by us every month so they keep working when your business changes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#case-studies" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See what we&apos;ve built
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="mt-6 text-sm font-semibold text-slate-500">
              Live in 3 weeks · You own the code
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust strip — muted */}
      <TrustStrip sectionClassName="py-10 bg-slate-50 border-y border-[#E2E8F0]" fadeFrom="slate-50" />

      {/* What we build — light */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">The four agents that pay for themselves fastest</h2>
            <p className="text-lg text-slate-600">We don&apos;t build science projects. These four solve problems you can measure on day one, and they&apos;re where nearly every engagement starts.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {AGENTS_WE_BUILD.map((agent, idx) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm shrink-0">
                  <agent.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{agent.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{agent.desc}</p>
                <p className="mt-auto pt-5 border-t border-slate-200 text-sm font-semibold text-slate-500">
                  Best for: {agent.bestFor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link — honest steer toward the cheaper option when it's the right one */}
      <section className="py-10 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-slate-600">
            Not every problem needs judgement calls. If the steps are known in advance, plain{" "}
            <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">
              workflow automation
            </Link>{" "}
            is cheaper and faster to build, and it&apos;s where we start most clients.
          </p>
        </div>
      </section>

      {/* Mid-page CTA — dark, short */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Not sure an agent is the right answer?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            That&apos;s the first thing we&apos;ll tell you. Book a call and we&apos;ll look at the workflow honestly, sometimes a simple automation solves it for a tenth of the cost, and we&apos;d rather say so upfront.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* Why agents fail — light, credibility section, no imagery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Why most AI agents quietly stop working</h2>
            <p className="text-lg text-slate-600">We get called in to fix other people&apos;s agents often enough to see the same four causes. None of them are about the model.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {WHY_AGENTS_FAIL.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <h3 className="flex items-start gap-3 text-lg md:text-xl font-bold mb-3 text-amber-700">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-1" />
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What a production agent needs — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">What separates a real agent from a chatbot</h2>
            <p className="text-lg text-slate-600">A demo needs a model and a prompt. Something you can trust with live customers needs six things underneath it.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENT_REQUIREMENTS.map((item, idx) => (
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
        </div>
      </section>

      {/* Cross-link — an agent acts; a chatbot answers; document processing just reads and files. */}
      <section className="py-10 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-slate-600">
            An agent on this page acts end to end, unattended. If you&apos;d rather a person stayed the
            last step, reviewing and approving instead of the system acting alone, that&apos;s an{" "}
            <Link href="/services/ai-assistants" className="font-bold text-[#7C3AED] hover:underline">
              AI assistant
            </Link>
            , cheaper, faster to build, and where most clients should start. Just need it to answer questions from your docs, with sources, and hand off when it can&apos;t?
            That&apos;s a{" "}
            <Link href="/services/rag-chatbot-development" className="font-bold text-[#7C3AED] hover:underline">
              RAG chatbot
            </Link>
            , a simpler, cheaper build than a full agent. If the job is just reading invoices
            or contracts and posting the fields, that&apos;s{" "}
            <Link href="/services/document-invoice-processing" className="font-bold text-[#7C3AED] hover:underline">
              document processing
            </Link>
            . And if it&apos;s just sorting and drafting replies to mail that arrives, that&apos;s{" "}
            <Link href="/services/email-inbox-automation" className="font-bold text-[#7C3AED] hover:underline">
              email and inbox automation
            </Link>
            , no judgement calls required. Any of these can run on{" "}
            <Link href="/services/whatsapp-automation" className="font-bold text-[#7C3AED] hover:underline">
              WhatsApp
            </Link>{" "}
            too, it&apos;s a channel, not a different job. And if the actual problem is that your{" "}
            <Link href="/services/crm-automation" className="font-bold text-[#7C3AED] hover:underline">
              CRM
            </Link>{" "}
            is half-empty and nobody trusts the data in it, that&apos;s worth fixing before anything gets built on top of it.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Curious about the model, retrieval, and evaluation layer underneath any of this?{" "}
            <Link href="/services/generative-ai-custom-llms" className="font-bold text-[#7C3AED] hover:underline">
              Generative AI &amp; Custom LLMs
            </Link>{" "}
            covers the engineering foundation directly. And if the actual ask is just to{" "}
            <Link href="/services/custom-dashboards" className="font-bold text-[#7C3AED] hover:underline">
              see the state of the business
            </Link>{" "}
            rather than have something act on it, that&apos;s a dashboard, not an agent.
          </p>
        </div>
      </section>

      {/* Process — light, vertical timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">How the build actually runs</h2>
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
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-4 text-slate-500 font-semibold">
            Typical total: 3 weeks from kickoff to live for a single agent. Multi-workflow builds run 5–8 weeks.
          </p>
        </div>
      </section>

      {/* Industries — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Where our agents run</h2>
            <p className="text-lg text-slate-600">The architecture barely changes by industry. What changes is the data, the tools it plugs into, and the decisions a human still needs to sign off.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind, idx) => {
              const cardClass = "flex flex-col bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm transition-all";
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                    <ind.icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{ind.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{ind.desc}</p>
                </>
              );
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  {ind.href ? (
                    <Link href={ind.href} className={cn(cardClass, "hover:shadow-md hover:border-[#C4B5FD]")}>{content}</Link>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Spaciva — light */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Why teams pick us over a bigger agency</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_SPACIVA.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies — muted */}
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

      {/* FAQ — light */}
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

      {/* Closing CTA — dark, full-bleed */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Tell us what&apos;s eating your team&apos;s time.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll look at the workflow, tell you honestly whether an agent is worth building, and give you a fixed price if it is.
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
