"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, Send, ArrowDown,
  Users, Gauge, TrendingUp, PenLine, LifeBuoy, BarChart3,
  ShieldCheck, Eye, EyeOff, Bot,
  Hash, Video, AppWindow, Puzzle, Mail,
  Sparkles, MessageCircle,
  FileText, Grid3x3, Cloud, Layers, FolderOpen, ListTodo, Bug, CircleDot,
  Headset, CreditCard, Receipt, Calculator, ShoppingCart, Database, HardDrive, Code2,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

// Organised by function, not by department — one assistant usually serves several teams.
const WHAT_WE_BUILD = [
  {
    title: "Account and client assistant",
    desc: "Ask about any client and get the real picture, contract terms, open tickets, last invoice, recent activity, who owns it, assembled from your CRM, billing, and support desk instead of from four browser tabs.",
    icon: Users,
  },
  {
    title: "Operations assistant",
    desc: "“What’s blocked this week?” “Which projects are over budget?” “Who’s unassigned?” Answered from your project and time-tracking data, on demand, without anyone building a report.",
    icon: Gauge,
  },
  {
    title: "Sales assistant",
    desc: "Call prep in one message: history, open deals, past objections, what was promised. Follow-ups drafted with the context already in them. Notes filed back where they belong.",
    icon: TrendingUp,
  },
  {
    title: "Research and drafting assistant",
    desc: "Proposals, briefs, and reports drafted against your own past work, your templates, and your tone, so the first draft starts from your standards rather than from a blank page.",
    icon: PenLine,
  },
  {
    title: "Onboarding and internal help assistant",
    desc: "“How do I request time off?” “What’s our refund policy?” “Where’s the template for this?” Answered from your own documentation, with the source cited so people can verify it.",
    icon: LifeBuoy,
  },
  {
    title: "Data and reporting assistant",
    desc: "Questions asked in plain language against your database or warehouse, returning a real answer with the query shown, so an analyst isn’t the bottleneck on every routine number.",
    icon: BarChart3,
  },
];

const BLOCKERS = [
  {
    title: "It doesn’t know your context",
    desc: "Ask it about a client and it knows nothing, not the contract terms, not the open tickets, not what was agreed on the call in March. Your people become the integration layer, pasting background in before every useful question. That’s the friction that kills adoption.",
  },
  {
    title: "It can’t act on your systems",
    desc: "It can draft an email; it can’t check whether the invoice was paid. It can summarise a document you upload; it can’t find the document.",
  },
  {
    title: "It has no memory of your work",
    desc: "Every conversation starts from zero. Nothing accumulates.",
  },
  {
    title: "It answers everyone identically",
    desc: "No sense of who’s asking, what they’re allowed to see, or what their job actually is.",
  },
];

const PERMISSION_RULES = [
  {
    title: "Permissions mirror your existing ones",
    desc: "The assistant checks who’s asking and respects the access they already have in the underlying system. If a person can’t open the document, the assistant won’t summarise it for them.",
  },
  {
    title: "Sources are scoped deliberately",
    desc: "We agree what’s in and what’s out before building, per source and per group. HR and finance are usually a separate assistant with a separate audience, not a filter on a shared one.",
  },
  {
    title: "Answers cite where they came from",
    desc: "Every response points at its source so a person can verify it. An assistant that can’t show its working gets trusted for exactly as long as it takes to be wrong once.",
  },
  {
    title: "Everything is logged",
    desc: "What was asked, what was retrieved, what came back. If a question ever needs auditing, the record exists.",
  },
  {
    title: "Your data isn’t training anything",
    desc: "We use API tiers with training disabled, or self-hosted models where the data can’t leave your environment.",
  },
];

const CHANNELS = [
  { title: "Slack", desc: "A DM, or a bot in the channels where the work already happens.", icon: Hash },
  { title: "Microsoft Teams", desc: "Same, for Microsoft-based teams.", icon: Video },
  { title: "Your own app or internal tool", desc: "Embedded where your staff already work.", icon: AppWindow },
  { title: "Browser extension", desc: "Context-aware help alongside whatever they’re looking at.", icon: Puzzle },
  { title: "Email and WhatsApp", desc: "For people who won’t adopt a new interface, and there’s always someone.", icon: Mail },
];

const CONNECTED_TOOLS = [
  { name: "HubSpot", icon: Sparkles },
  { name: "Salesforce", icon: Cloud },
  { name: "Zoho", icon: Grid3x3 },
  { name: "Pipedrive", icon: TrendingUp },
  { name: "Notion", icon: FileText },
  { name: "Google Workspace", icon: AppWindow },
  { name: "Microsoft 365", icon: Layers },
  { name: "SharePoint", icon: FolderOpen },
  { name: "Asana", icon: ListTodo },
  { name: "ClickUp", icon: ListTodo },
  { name: "Jira", icon: Bug },
  { name: "Linear", icon: CircleDot },
  { name: "Zendesk", icon: LifeBuoy },
  { name: "Freshdesk", icon: Headset },
  { name: "Intercom", icon: MessageCircle },
  { name: "Stripe", icon: CreditCard },
  { name: "QuickBooks", icon: Receipt },
  { name: "Xero", icon: Calculator },
  { name: "Shopify", icon: ShoppingCart },
  { name: "Postgres", icon: Database },
  { name: "MySQL", icon: HardDrive },
  { name: "BigQuery", icon: BarChart3 },
  { name: "Your own API", icon: Code2 },
];

const PROCESS = [
  {
    step: "01",
    title: "Find the question worth answering",
    duration: "2 days",
    desc: "We look at what your team asks each other repeatedly, and how long each answer currently takes to assemble. The best first assistant is almost always obvious from a week of Slack history. You get that shortlist whether or not you hire us.",
  },
  {
    step: "02",
    title: "Scope the sources and the permissions",
    duration: "2 days",
    desc: "Which systems it reads, who can ask what, what’s deliberately excluded. Agreed in writing before anything is connected.",
  },
  {
    step: "03",
    title: "Build and connect",
    duration: "1–2 weeks",
    desc: "Integrations, retrieval, permission checks, and the interface it lives in. Tested against real questions from your real data.",
  },
  {
    step: "04",
    title: "Pilot with a small group",
    duration: "1 week",
    desc: "Live to five or ten people first. We watch what they ask, what it gets wrong, and what they stop asking it. Bad answers at ten users are cheap. The same answers at a hundred users lose you the rollout permanently.",
  },
  {
    step: "05",
    title: "Expand, then tune",
    duration: "ongoing",
    desc: "Sources added, gaps closed, and the questions it can’t answer tracked as a coverage list rather than ignored. Monthly review of what got asked and what failed. Models change, your data changes, and an assistant nobody tunes gets quietly worse.",
  },
];

const COMPARISON = [
  {
    label: "Chatbot",
    icon: MessageCircle,
    lead: "A chatbot answers.",
    desc: "Ask a question, get an answer from a defined body of content. One job, done reliably, usually customer-facing.",
    href: "/services/rag-chatbot-development",
    linkLabel: "RAG-powered chatbots",
  },
  {
    label: "Assistant",
    icon: Sparkles,
    lead: "An assistant prepares.",
    desc: "Multi-turn, conversational, connected to your systems, working alongside a person who reviews and acts. It drafts the email, assembles the brief, pulls the numbers, and a human decides what to do. Internal, usually.",
    current: true,
  },
  {
    label: "Agent",
    icon: Bot,
    lead: "An agent acts.",
    desc: "It completes the task end to end without waiting for a person: reads the invoice, validates it, posts it, files it. More capable, more expensive, and it needs far more testing, because a mistake becomes an action rather than a suggestion.",
    href: "/services/ai-agent-development",
    linkLabel: "AI agent development",
  },
];

const ABANDON_REASONS = [
  {
    title: "It was wrong once, early",
    desc: "Trust is asymmetric. One confidently wrong answer in week one costs more than fifty good ones earn. Pilot small, cite sources, and let it say it doesn’t know.",
  },
  {
    title: "It lives somewhere nobody goes",
    desc: "A brilliant assistant behind a link on the intranet gets used twice. The channel isn’t a detail, it’s most of whether this works.",
  },
  {
    title: "It can’t do the specific thing people wanted",
    desc: "Teams have one or two questions they actually want answered. If those two aren’t covered, general capability doesn’t compensate. Find the real questions first.",
  },
  {
    title: "Nobody owned it after launch",
    desc: "Sources go stale, systems change, coverage gaps never get closed, and it degrades until people stop bothering. This is the part most vendors skip and it’s why we scope the monthly plan from day one.",
  },
];

const FAQS = [
  {
    q: "We already pay for ChatGPT or Copilot. Why would we need this?",
    a: "Keep them, they’re good at general work. What they can’t do is answer questions about your clients, your projects, and your data without someone pasting the context in first. We build the layer that closes that gap, and it usually costs less than adding enterprise seats for everyone.",
  },
  {
    q: "What’s the difference between an assistant and an agent?",
    a: "An assistant prepares work and a person acts on it. An agent completes the task itself. Assistants are cheaper, faster to build, and safe by construction because a human approves everything. Most teams should start there.",
  },
  {
    q: "Can it see things people shouldn’t?",
    a: "Not if it’s built properly. Permissions mirror the access people already have in the underlying systems, sources are scoped deliberately before we build, and sensitive areas like HR and finance are usually a separate assistant with a separate audience rather than a filter on a shared one.",
  },
  {
    q: "Is our data used to train AI models?",
    a: "No. We use API tiers with training disabled, or self-hosted models where the data needs to stay inside your environment.",
  },
  {
    q: "How accurate is it?",
    a: "It answers from your own sources and cites them, so people can verify rather than trust blindly. It’s built to say it doesn’t know rather than guess, an assistant that admits gaps gets used, and one that invents answers gets abandoned after the first bad week.",
  },
  {
    q: "Where does it live?",
    a: "Slack or Teams for most teams, since that’s where the work already happens. It can also sit in your own app, a browser extension, email, or WhatsApp.",
  },
  {
    q: "How long does it take?",
    a: "Three to four weeks for a first assistant with two or three sources. Five to seven for a deeper multi-system build.",
  },
  {
    q: "What does it cost to run?",
    a: "Model usage is billed on how much your team uses it, separately from the build. We estimate it with you upfront so there are no surprises, and for most teams it’s well below the cost of enterprise assistant seats across the company.",
  },
  {
    q: "What if we change AI models later?",
    a: "We build the integration layer separately from the model, increasingly on the Model Context Protocol, so switching models doesn’t mean rebuilding the connections. This field moves fast enough that designing for it is just sensible.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Code, prompts, integrations, and documentation transfer to you on final payment. It runs in your accounts. If you stop working with us, it keeps running.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We’re in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Assistant Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom internal AI assistants connected to your CRM, project, billing, and document systems, living in Slack, Teams, or your own tools. Fixed price, owned by you.",
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
    { "@type": "ListItem", position: 3, name: "AI Assistants", item: "https://spaciva.tech/services/ai-assistants" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `assistants-faq-panel-${index}`;
  const buttonId = `assistants-faq-button-${index}`;

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

export default function AIAssistantsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, two column. Right side is a Slack-thread mockup built in HTML/CSS in the
          site's own colours, not a screenshot — and per the source spec, the point of the mockup
          is that a person is in the thread using it, not an AI talking to itself. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                AI Assistants
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                An assistant that knows your business, not just the internet
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Generic AI is good at everything except the thing you actually need, your clients, your data, your process, your last six months of decisions. We build assistants that sit inside Slack, Teams, or your own tools, connected to the systems your team already works in, so the answer comes back with your context in it.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  See what we build
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                Live in 3–4 weeks · Runs on your data, in your tools, owned by you
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
            >
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-4 sm:p-5">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <Hash className="w-4.5 h-4.5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">account-questions</p>
                    <p className="text-xs text-slate-400">Slack · internal assistant</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-200 shrink-0 flex items-center justify-center text-[11px] font-bold text-slate-600">MP</div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p className="text-sm text-slate-700">what&apos;s the status on the Marlow &amp; Co renewal?</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#7C3AED] shrink-0 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-[#7C3AED] text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm leading-relaxed mb-2">Contract renews 14 Sept · last invoice paid 3 Aug · one open support ticket (#2291, waiting on us) · account owner is Priya.</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-white/70">
                        <Send className="w-2.5 h-2.5" /> Sources: CRM, billing, helpdesk
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-200 shrink-0 flex items-center justify-center text-[11px] font-bold text-slate-600">MP</div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p className="text-sm text-slate-700">closing #2291 now, then I&apos;ll call Priya about the renewal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* "We already pay for ChatGPT" — the signature section, placed high on purpose, dark and
          heavier than what surrounds it. Framed as agreement, not an attack on the incumbents. */}
      <section className="py-16 md:py-28 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#7C3AED]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Good. Keep it. This is the part it can&apos;t do.
            </h2>
          </div>

          <div className="text-white/70 text-lg leading-relaxed space-y-5 mb-12 max-w-[720px] mx-auto">
            <p>We&apos;re not going to tell you the assistant you&apos;re already paying for is bad. ChatGPT, Claude, Copilot, and Gemini are genuinely excellent, and if your team is getting value from them, that&apos;s money well spent.</p>
            <p>But there&apos;s a pattern worth naming: across the industry, enterprise assistant seats get bought widely and used thinly. Licences go out to the whole company and a fraction of people open them weekly. Analysts have been unusually blunt about it, value from these deployments is not something the licence guarantees.</p>
            <p>The reason isn&apos;t the model. It&apos;s that a generic assistant doesn&apos;t know anything about your business until someone types it in, every single time.</p>
          </div>

          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-white/50 mb-6">What actually blocks it</h3>
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {BLOCKERS.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-2xl p-6 md:p-8 mb-10">
            <h3 className="font-bold text-white mb-2">What we build instead</h3>
            <p className="text-white/70 leading-relaxed">
              An assistant with your systems already connected, CRM, project tool, billing,{" "}
              <Link href="/services/document-invoice-processing" className="font-bold text-white hover:underline">documents</Link>, support desk, that knows who&apos;s asking and what they&apos;re permitted to see, remembers your organisation&apos;s context, and lives where your team already works instead of in another tab.
            </p>
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-white/5 rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-white leading-snug max-w-[720px] mx-auto">
            The gap in 2026 isn&apos;t access to a good model. Everyone has one. The gap is that the good model doesn&apos;t know anything about you, and nobody has time to keep telling it.
          </blockquote>
        </div>
      </section>

      {/* What we build — light, 3-col card grid, organised by function not department */}
      <section id="what-we-build" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Assistants that earn their place</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[680px]">
            Most clients start with one, aimed at whatever question their team asks each other most often. That question is usually obvious once you look at a week of Slack.
          </p>
        </div>
      </section>

      {/* What it can see — the second heavy section, tinted band, permissions diagram */}
      <section className="py-16 md:py-28 bg-[#F5F3FF] border-y border-[#7C3AED]/10">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
              The assistant should not know more than the person asking
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The fastest way to create a problem is to connect an assistant to everything and let it answer everyone identically. Someone asks an innocent question and gets back a number from a document they were never meant to open.
            </p>
          </div>

          {/* Permissions diagram — one assistant, three people, three different views of the
              same underlying data, since permission-aware answers are the whole point of this
              section and a plain paragraph undersells it. */}
          <div
            className="mb-16"
            role="img"
            aria-label="Diagram: one assistant answers three different people who ask the same question. A manager with full access gets the complete answer. A teammate with partial access gets a partial answer with the restricted parts noted as not visible to them. Someone with no access to that source is told the assistant can't answer that for them. The assistant's answer always matches what the person asking is already allowed to see in the underlying system."
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-6 py-4 shadow-sm">
                <Bot className="w-5 h-5 text-slate-500" />
                <span className="font-bold text-slate-900">One assistant, same question asked by three people</span>
              </div>
              <ArrowDown className="w-5 h-5 text-slate-300 my-3" aria-hidden="true" />
              <div className="grid sm:grid-cols-3 gap-5 w-full">
                <div className="flex flex-col items-center text-center bg-white border-2 border-[#7C3AED]/30 rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7C3AED] mb-1.5">Full access</span>
                  <p className="font-bold text-slate-900 text-sm">Gets the complete answer</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border-2 border-amber-300 rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-1.5">Partial access</span>
                  <p className="font-bold text-slate-900 text-sm">Gets a partial answer, restricted parts marked as not visible to them</p>
                </div>
                <div className="flex flex-col items-center text-center bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                    <EyeOff className="w-6 h-6 text-slate-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1.5">No access</span>
                  <p className="font-bold text-slate-900 text-sm">Told it can&apos;t answer that for them</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {PERMISSION_RULES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 shadow-sm"
              >
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-[720px] mx-auto text-center">
            Say no to a source rather than filter it later. A narrower assistant that people trust completely beats a broader one that legal is nervous about.
          </blockquote>
        </div>
      </section>

      {/* Where it lives — light and short by design, sits between two heavy sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">In the tool your team already has open</h2>
            <p className="text-lg text-slate-600">An assistant in another tab is an assistant people forget. The channel matters as much as the capability.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {CHANNELS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Connected to</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {CONNECTED_TOOLS.map((tool) => (
              <span key={tool.name} className="inline-flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">
                <span className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <tool.icon className="w-3 h-3 text-[#7C3AED]" />
                </span>
                {tool.name}
              </span>
            ))}
          </div>

          <p className="text-slate-500 text-sm max-w-[680px]">
            Tool integrations are increasingly built on the Model Context Protocol, which is becoming the standard way assistants connect to business systems. Where a system supports it, we use it, fewer bespoke connectors to maintain, and less work if you change models later.
          </p>
        </div>
      </section>

      {/* How it works — light, vertical timeline, shared Template A component */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">From one question to something your team uses daily</h2>
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

      {/* Assistant, chatbot, or agent — the highest-leverage section on the page: the
          disambiguation, the internal linking, and a plain-text answer to a real comparison
          query. Kept out of any accordion so it's fully crawlable on load. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">AI assistant vs AI agent vs chatbot, what&apos;s the actual difference?</h2>
            <p className="text-lg text-slate-600">The terms get used interchangeably by vendors, which is convenient for them and expensive for you. Here&apos;s the distinction that matters when you&apos;re deciding what to build.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {COMPARISON.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col rounded-3xl border-2 p-6 md:p-8",
                  item.current ? "border-[#7C3AED] bg-[#F5F3FF] shadow-lg shadow-[#7C3AED]/10" : "border-[#E2E8F0] bg-slate-50"
                )}
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", item.current ? "bg-[#7C3AED] text-white" : "bg-white text-[#7C3AED] shadow-sm")}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{item.label}</h3>
                <p className="font-bold text-[#7C3AED] text-sm mb-3">{item.lead}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{item.desc}</p>
                {item.href ? (
                  <Link href={item.href} className="mt-auto inline-flex items-center gap-1.5 font-bold text-[#7C3AED] hover:underline text-sm">
                    {item.linkLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="mt-auto text-xs font-bold uppercase tracking-wide text-[#7C3AED]/60">This page</span>
                )}
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed max-w-3xl mb-8">
            <span className="font-bold text-slate-900">The practical difference is where the human sits.</span> With an assistant, the person is the last step. With an agent, the person is the exception handler. That one design choice drives cost, build time, testing burden, and risk more than any other decision you&apos;ll make.
          </p>

          <blockquote className="border-l-4 border-[#7C3AED] bg-slate-50 rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-slate-800 leading-relaxed max-w-3xl">
            <span className="font-bold text-slate-900">Honest answer:</span> we start most clients on an assistant. It&apos;s cheaper, it&apos;s safe by construction because a person approves everything, and after a month of use you can see exactly which requests are so repetitive and so low-judgement that they should become an agent. That&apos;s a far better basis for the decision than guessing upfront, and it&apos;s why the assistant usually pays for the agent.
          </blockquote>

          <p className="mt-6 text-slate-500 text-sm">
            All three run on the same underlying layer, model selection, retrieval, evaluation, guardrails.{" "}
            <Link href="/services/generative-ai-custom-llms" className="font-bold text-[#7C3AED] hover:underline">
              Generative AI &amp; Custom LLMs
            </Link>{" "}
            covers that engineering foundation directly.
          </p>
        </div>
      </section>

      {/* Why assistants get abandoned — deliberately lighter than the agent page's failure
          section: this failure mode is adoption, not engineering. Plain two-column list, no
          icons, tight. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Four reasons nobody uses the assistant you built</h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {ABANDON_REASONS.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — light, accordion, first item open by default (the ChatGPT question, since
          that's what people arrive with) */}
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
              What does your team keep asking each other?
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll find the question your team assembles by hand most often, tell you what it would take to answer it automatically, and give you a fixed price. If a tool you already pay for would do it, we&apos;ll tell you that instead.
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
