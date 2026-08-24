"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Users, Briefcase, ShoppingBag, Settings,
  CheckCircle2, Mail, Inbox as InboxIcon, Bell,
  Calendar, LifeBuoy, Headset, MessageSquare, Contact, TrendingUp, Cloud, LayoutGrid, PhoneCall,
  Hash, Video, FileText, CheckSquare, ListTodo, Grid3x3,
  ShoppingCart, Package, CreditCard, Receipt, Calculator,
  Workflow, Shuffle, GitBranch, Code2,
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
  { id: "drafts-or-sends", label: "Drafts or sends" },
  { id: "how-it-works", label: "How it works" },
  { id: "tools", label: "Tools" },
  { id: "questions", label: "Questions" },
];

const TABS = [
  {
    label: "Agencies and consultancies",
    icon: Users,
    items: [
      { title: "Enquiry capture and routing", desc: "New business emails identified the moment they arrive, enriched, logged to the CRM as a lead, and routed to whoever owns that service line, with a first acknowledgement sent inside a minute instead of whenever someone next opens the inbox." },
      { title: "Client request triage", desc: "Client mail sorted by account and urgency, with the ones that reference a deadline, a complaint, or a scope change pushed to the top and flagged in Slack." },
      { title: "Approval and feedback chasing", desc: "Sent work that hasn't been replied to gets followed up automatically on your schedule, in your voice, until someone responds, so nobody has to keep a mental list of who owes you an answer." },
      { title: "Status replies that write themselves", desc: "“Where are we on X?” arrives, the system pulls the current state from your project tool and drafts the answer for a two-second review." },
    ],
  },
  {
    label: "Professional services",
    icon: Briefcase,
    items: [
      { title: "Client intake from email", desc: "Enquiries parsed into a structured record, conflict-check triggered, engagement letter queued, and the client filed into the right matter or job folder from the first message." },
      { title: "Document chasing", desc: null, node: (
        <>Missing items tracked per client and chased automatically with escalating reminders, and when documents arrive, they&apos;re filed and read rather than sitting as an attachment somebody has to open. That extraction step is{" "}
          <Link href="/services/document-invoice-processing" className="font-bold text-[#7C3AED] hover:underline">document and invoice processing</Link>.
        </>
      ) },
      { title: "Deadline-aware sorting", desc: "Mail mentioning filing dates, renewals, or statutory deadlines surfaced against your calendar rather than treated like everything else." },
      { title: "Compliance-safe archiving", desc: "Every client email logged to the right matter automatically, so the record is complete without anyone remembering to file it." },
    ],
  },
  {
    label: "E-commerce and DTC",
    icon: ShoppingBag,
    items: [
      { title: "Support inbox triage", desc: "“Where is my order,” returns, exchanges, and complaints classified on arrival. Order-status questions answered automatically from your store data. Complaints escalated to a human immediately rather than queued behind them." },
      { title: "Order and supplier mail", desc: "Confirmations, shipping notifications, and supplier correspondence parsed and pushed into your systems instead of being read by a person and retyped." },
      { title: "Returns and refund requests", desc: "Validated against your policy, with the straightforward ones drafted for one-click approval and the judgement calls routed to a person with the order history attached." },
      { title: "Review and escalation detection", desc: "Angry mail spotted by tone and flagged in Slack within seconds, because the cost of a two-day reply to that email is not the same as the cost of a two-day reply to any other email." },
    ],
  },
  {
    label: "Sales and internal ops",
    icon: Settings,
    items: [
      { title: "Lead qualification and follow-up", desc: "Inbound replies scored, logged, and sequenced. Out-of-office and bounce replies detected and handled instead of counting as engagement." },
      { title: "Meeting and calendar handling", desc: "Scheduling threads resolved, invites created, notes and action items filed to the right record after the call." },
      { title: "Internal request inboxes", desc: "it@, hr@, finance@: requests classified, ticketed, routed, and acknowledged, with the repetitive ones answered from your own documentation." },
      { title: "Recruitment inbox", desc: "Applications parsed, CVs filed against the right role, acknowledgements sent, and shortlisting queues built without anyone opening 200 attachments." },
    ],
  },
];

const DAY_MOMENTS = [
  {
    time: "9:00am",
    before: "60 new messages overnight. Fifteen minutes spent reading everything once just to work out what's actually urgent, and the sales enquiry from 11pm is on the third screen down.",
    after: "Six things in the lane marked for you. Everything else is filed, logged, or already acknowledged. The 11pm enquiry got a reply at 11:01pm and is sitting in the CRM.",
  },
  {
    time: "2:00pm",
    before: "An invoice, three newsletters, a supplier update, and a client complaint arrive in the same ten minutes and all look identical in the list.",
    after: "The invoice is extracted and posted. The newsletters are archived. The supplier update is filed. The complaint is in Slack with the account history attached, because that one couldn't wait until you next checked.",
  },
  {
    time: "6:00pm",
    before: "Four threads still unanswered because they needed information from another system and nobody had time to go and get it.",
    after: "Drafted with that information already pulled in, waiting for a read and a send.",
  },
];

const SEND_SETTINGS = [
  { title: "Auto-send", desc: "Suits mail where being wrong is nearly impossible and being slow is costly: acknowledgements, order status pulled from your own store data, out-of-office handling, internal routing confirmations." },
  { title: "Draft for review", desc: "Suits everything with judgement in it. The reply is written, with the relevant context already pulled from your CRM or project tool, sitting in the thread waiting for a read. Five seconds instead of five minutes, and a human still pressed send." },
  { title: "Never touched", desc: "A valid setting, and some clients keep it on their most sensitive accounts permanently. Sorting, routing, and logging still happen, the replies just stay human." },
];

const STEPS = [
  { step: "01", title: "We read your last month of mail", duration: "2 days", desc: "With your permission and under NDA, we look at what actually arrives: the categories, the volumes, and the replies your team writes over and over. You get that breakdown whether or not you hire us, and it usually surprises people." },
  { step: "02", title: "Rules, routing, and tone", duration: "2 days", desc: "A written map of every category, where it goes, who owns it, and which ones may reply on their own. Your existing replies become the tone reference, so drafts sound like your team rather than like a chatbot." },
  { step: "03", title: "Build and shadow-run", duration: "1 week", desc: "We build it, then run it silently alongside your real inbox without sending anything. You compare what it would have done against what your team actually did. Nothing goes live until that comparison looks right to you." },
  { step: "04", title: "Live, then tuned", duration: "ongoing", desc: "Switched on category by category, starting with the safest. Misroutes get corrected and the rules tighten over the first few weeks. The monthly plan covers that tuning, plus new categories as your mail changes." },
];

const TOOL_GROUPS = [
  {
    category: "Email and calendar", icon: Mail, items: [
      { name: "Gmail and Google Workspace", icon: Mail },
      { name: "Outlook and Microsoft 365", icon: InboxIcon },
      { name: "IMAP", icon: Mail },
      { name: "Google and Outlook Calendar", icon: Calendar },
    ],
  },
  {
    category: "Shared inbox and helpdesk", icon: LifeBuoy, items: [
      { name: "Front", icon: InboxIcon },
      { name: "Help Scout", icon: LifeBuoy },
      { name: "Zendesk", icon: LifeBuoy },
      { name: "Freshdesk", icon: Headset },
      { name: "Intercom", icon: MessageSquare },
      { name: "Missive", icon: InboxIcon },
    ],
  },
  {
    category: "CRM and sales", icon: Users, items: [
      { name: "HubSpot", icon: Contact },
      { name: "Pipedrive", icon: TrendingUp },
      { name: "Salesforce", icon: Cloud },
      { name: "Zoho", icon: LayoutGrid },
      { name: "Close", icon: PhoneCall },
    ],
  },
  {
    category: "Comms and tasks", icon: MessageSquare, items: [
      { name: "Slack", icon: Hash },
      { name: "Teams", icon: Video },
      { name: "Notion", icon: FileText },
      { name: "Asana", icon: CheckSquare },
      { name: "ClickUp", icon: ListTodo },
      { name: "Monday", icon: Calendar },
      { name: "Airtable", icon: Grid3x3 },
    ],
  },
  {
    category: "Commerce and billing", icon: ShoppingBag, items: [
      { name: "Shopify", icon: ShoppingCart },
      { name: "WooCommerce", icon: Package },
      { name: "Stripe", icon: CreditCard },
      { name: "QuickBooks", icon: Receipt },
      { name: "Xero", icon: Calculator },
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
  { title: "Letting it send too early", desc: "The fastest way to lose confidence in a system is one embarrassing auto-reply in week one. Shadow-running first and switching on category by category costs a few extra days and prevents exactly that." },
  { title: "Rules nobody revisits", desc: "Mail changes. A new supplier, a new product, a new type of complaint, and suddenly a category that worked perfectly is misrouting a quarter of the time, silently, because misrouted mail doesn't complain. Tuning isn't an upsell here, it's what keeps the thing accurate." },
  { title: "Automating a reply that should be a conversation", desc: "Some emails deserve a person, and drafting a polished reply to a genuinely upset customer in four seconds is worse than taking an hour. We'll tell you which categories those are, and we'd rather leave them alone than automate them badly." },
];

const FAQS = [
  { q: "Will it send emails without me seeing them?", a: "Only for the categories you explicitly switch on, and every build starts with all of them off. Most clients auto-send acknowledgements and status replies, and keep everything with judgement in it as a draft." },
  { q: "Do you read our email?", a: "During the two-day assessment, with your permission and under NDA, we look at categories and volumes to design the rules. We don't need to keep a copy, and the running system processes mail inside your own accounts rather than exporting it somewhere." },
  { q: "Will the replies sound like us?", a: "They're built from your existing replies, not from a generic template. Tone is part of what gets tuned in the first few weeks, and it's part of what the monthly plan covers afterwards." },
  { q: "What happens when it misroutes something?", a: "Misroutes surface in the review lane and get corrected. Each correction tightens the rules. Expect the first two weeks to need more corrections than the two months after that, which is exactly why we shadow-run before switching anything on." },
  { q: "How long does it take?", a: "A single inbox is typically about two weeks from kickoff to live. Multi-inbox setups with routing and escalation run three to four." },
  { q: "Does this replace our helpdesk?", a: "No. If you run Zendesk, Front, or Help Scout, this works inside it, classifying, routing, and drafting rather than replacing the tool your team already knows." },
  { q: "Can't Gmail filters do this?", a: "For simple, keyword-based sorting, yes, and if that's all you need we'll tell you on the call. People come to us when the sorting needs to understand what the message actually means, pull context from another system, draft a reply, or log to a CRM, which is where rules-based filters stop." },
  { q: "Is our email used to train AI models?", a: "No. We use API tiers with training disabled, or self-hosted models where the data needs to stay inside your environment." },
  { q: "Who owns what you build?", a: "You do. It runs in your accounts, on your platforms, with documentation handed over. If you stop working with us, it keeps running and your team can maintain it." },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified number,
  // consistent with how the same fact is handled on the other service pages.
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough." },
  // TODO: client to confirm real pricing ($X single inbox, $Y multi-inbox, $Z/month partner plan)
  // and restore the "What does it cost?" FAQ and the pricing section (Section 8) once confirmed.
  // Per the source spec: delete rather than publish ranges that can't be honoured.
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Email & Inbox Automation",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Sorting, routing, drafting, and logging for the inboxes teams work in every day, with nothing sending without explicit rules.",
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
    { "@type": "ListItem", position: 3, name: "Email & Inbox Automation", item: "https://spaciva.tech/services/email-inbox-automation" },
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
        stacked on the same grid cell and faded out with CSS rather than unmounted.
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
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc ?? item.node}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EmailInboxClient() {
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

      {/* Hero — centred, single column, before/after strip. No real (anonymised) inbox screenshot
          exists to build the exact visual the spec calls for, and a mockup with placeholder sender
          names ("John Smith · Re: Meeting") is exactly the fake-looking trap the spec warns
          against, so this is an honestly abstract diagram instead: undifferentiated rows for
          "before," labelled lanes for "after." Same fallback approach as the Workflow Automation
          hero, for the same reason. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[780px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Email & Inbox Automation
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Your inbox is a queue nobody is managing
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Enquiries, orders, invoices, support requests, and internal noise all landing in the same place, sorted by nothing except when they arrived. We build the layer that reads what comes in, files it, routes it to the right person, drafts the replies that are obvious, and logs it where it belongs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-automate" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See what we automate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-12">
              Most builds live in 2 weeks · Nothing sends without your rules
            </p>
          </motion.div>

          {/* Before/after strip — abstract inbox diagram, the page's signature first-viewport element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-4 text-left"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Before</span>
                <span className="text-2xl font-extrabold text-slate-700 tabular-nums">214</span>
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                    <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    <div className={cn("h-2 rounded-full bg-slate-200", i % 3 === 0 ? "w-3/4" : i % 3 === 1 ? "w-1/2" : "w-2/3")} />
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-400">Everything looks urgent.</p>
            </div>

            <div className="bg-gradient-to-br from-[#F5F3FF] to-white border-2 border-[#7C3AED]/30 rounded-2xl p-5 sm:p-6 shadow-lg shadow-[#7C3AED]/10">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide text-[#7C3AED]">After</span>
                <span className="text-2xl font-extrabold text-[#7C3AED] tabular-nums">6</span>
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                {[
                  { label: "Needs you", count: 6, tone: "bg-[#7C3AED] text-white" },
                  { label: "Routed & logged to CRM", count: 12, tone: "bg-white text-slate-600 border border-slate-200" },
                  { label: "Invoices filed", count: 9, tone: "bg-white text-slate-600 border border-slate-200" },
                  { label: "Newsletters archived", count: 187, tone: "bg-white text-slate-600 border border-slate-200" },
                ].map((lane) => (
                  <div key={lane.label} className={cn("flex items-center justify-between rounded-lg px-3 py-2", lane.tone)}>
                    <span className="text-xs font-bold">{lane.label}</span>
                    <span className="text-xs font-bold tabular-nums opacity-70">{lane.count}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold text-[#7C3AED]/70">6 items actually need you.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Sticky left rail — desktop only (≥1024px), same track-and-dot pattern as the Workflow
              Automation page, reused exactly rather than restyled. */}
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
            {/* What we automate — tabbed explorer */}
            <section id="what-we-automate" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  What We Automate
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Pick the inbox that sounds like yours</h2>
              </div>
              <TabbedExplorer />
            </section>

            {/* Before and after — signature section. One inbox at three moments of the day, rather
                than three separate processes like the Workflow Automation page, so the two pages
                share a component without reading as clones. */}
            <section id="before-after" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">One inbox, one day</h2>
              </div>

              <div className="flex flex-col gap-6">
                {DAY_MOMENTS.map((row) => (
                  <motion.div
                    key={row.time}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-[#E2E8F0] overflow-hidden"
                  >
                    <h3 className="font-bold text-slate-900 text-lg px-6 pt-6 pb-4">{row.time}</h3>
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
                Nothing here is exotic. It&apos;s the sorting your team already does in their head, thirty times a day, the only reason it hasn&apos;t been automated is that nobody&apos;s had a spare week to write the rules down properly.
              </blockquote>
            </section>

            {/* Does it send, or does it draft? — tight bordered panel, no icons, high importance */}
            <section id="drafts-or-sends" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="rounded-3xl border-2 border-[#7C3AED]/20 bg-[#F5F3FF] p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-slate-900">You decide what sends itself. We default to nothing.</h2>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-[680px]">
                  The fear is reasonable: an automation replying to a client in your name, confidently and wrongly. So the send permission is a setting per message type, and every build starts with all of them off.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  {SEND_SETTINGS.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-700 font-semibold leading-relaxed max-w-[680px] border-t border-[#7C3AED]/15 pt-6">
                  Every automated message is logged, and you can see exactly what went out, when, and why the system classified it that way. An automation you can&apos;t audit isn&apos;t a time saving, it&apos;s a liability.
                </p>
              </div>
            </section>

            {/* How it works — horizontal step rail, shared with the Workflow Automation page */}
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
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">It works inside the inbox you already use</h2>
                <p className="text-lg text-slate-600">No new platform, no migration, no asking your team to check somewhere else.</p>
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
                Using something else? If it has an API, we can almost certainly connect it. If it doesn&apos;t, we&apos;ll tell you before you commit rather than after.
              </p>
            </section>

            {/*
              Pricing section intentionally omitted: the source spec puts an open three-column
              pricing table here, but explicitly says to delete the section rather than publish
              figures that aren't confirmed yet. TODO: client to confirm single-inbox, multi-inbox,
              and monthly-partner pricing, then restore this section and the matching FAQ entry.
            */}

            {/* Where it goes wrong — plain, tight, no icons */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">Three ways inbox automation goes bad</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl">
                {WHERE_WRONG.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Which service do you need? — disambiguates from marketing email, points elsewhere honestly */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">This isn&apos;t marketing email</h2>
                <p className="text-lg text-slate-600">To be clear about what this page is and isn&apos;t.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-6 md:p-8 rounded-3xl border-2 border-[#7C3AED]/30 bg-[#F5F3FF]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#7C3AED]/20 flex items-center justify-center mb-5">
                    <InboxIcon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Email and inbox automation (this page)</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Mail that arrives. Sorting, routing, drafting, logging, chasing. The inbox your team works in every day.
                  </p>
                </div>

                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-slate-50">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                    <Bell className="w-6 h-6 text-slate-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Marketing email</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Campaigns, newsletters, and drip sequences to a list. That&apos;s a different discipline with different tools, and it isn&apos;t what we do. If that&apos;s what you&apos;re after, a marketing agency or your ESP will serve you better than we will.
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[680px] mb-8">
                <span className="font-bold text-slate-900">Honest answer:</span> for a lot of teams, the inbox is a symptom. The mail piles up because the process behind it is manual. We&apos;ll say so on the call if that&apos;s what we see, automating the queue for a process that shouldn&apos;t exist just makes it tidier.
              </p>

              <p className="text-slate-600 leading-relaxed max-w-[680px] border-t border-[#E2E8F0] pt-8">
                <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">Workflow automation</Link>{" "}
                moves data between tools once the steps are known.{" "}
                <Link href="/services/document-invoice-processing" className="font-bold text-[#7C3AED] hover:underline">Document processing</Link>{" "}
                turns attachments into clean, checked data.{" "}
                <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agents</Link>{" "}
                make judgement calls where the next step isn&apos;t fixed in advance. Email and inbox automation, on this page, handles mail that arrives: sorting, routing, drafting, logging. If your customers reach you on{" "}
                <Link href="/services/whatsapp-automation" className="font-bold text-[#7C3AED] hover:underline">WhatsApp</Link>{" "}
                instead of email, the same sorting and drafting logic applies there too.
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
            Tell us what&apos;s in your inbox that shouldn&apos;t need a person.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll look at a month of your real mail, show you what share of it is automatable, and give you a fixed price. If the honest answer is that your inbox is fine and the process behind it isn&apos;t, we&apos;ll tell you that instead.
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
