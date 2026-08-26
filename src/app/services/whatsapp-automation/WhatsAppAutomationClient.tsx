"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, ShieldCheck, Info, Clock3,
  Truck, Headset, ShoppingCart, UserPlus, Calendar, Receipt, Bell, RefreshCw,
  Globe, ShoppingBag, Users, LifeBuoy, MessageSquare, Workflow,
  Server, Package, CreditCard, Contact, TrendingUp, Cloud, LayoutGrid, PhoneCall,
  MessageCircle, Send, ListTodo, FileText, Grid3x3, Shuffle, GitBranch, Code2,
} from "lucide-react";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const LAST_REVIEWED = "24 August 2026";

const WHAT_WE_BUILD = [
  { title: "Order and delivery updates", desc: "Confirmations, dispatch notices, and tracking sent automatically from your store, with the customer able to reply in the same thread and reach a person if something's wrong.", icon: Truck },
  { title: "Support triage and replies", desc: "Incoming questions classified on arrival. Order status answered from your own data. Returns and refunds handled against your policy. Complaints escalated to a human immediately, with the account history attached.", icon: Headset },
  { title: "Abandoned cart and re-engagement", desc: "Recovery messages that respect opt-in and Meta's marketing category rules, sent through approved templates rather than the workarounds that get numbers restricted.", icon: ShoppingCart },
  { title: "Lead capture and qualification", desc: "Enquiries from Click-to-WhatsApp ads, website widgets, and QR codes captured, qualified through a short structured conversation, and logged straight to your CRM with the transcript attached.", icon: UserPlus },
  { title: "Appointment booking and reminders", desc: "Slots offered, booked into your calendar, confirmed, and reminded, with rescheduling handled in the thread instead of over three phone calls.", icon: Calendar },
  { title: "Payment and invoice notifications", desc: "Payment links, reminders, and receipts sent as utility messages, with status written back to your billing system.", icon: Receipt },
  { title: "Internal alerts and approvals", desc: "Escalations, stock alerts, and approval requests pushed to the people who need them, in the app they already have open.", icon: Bell },
  { title: "Two-way CRM and helpdesk sync", desc: "Every conversation logged against the right contact in HubSpot, Zoho, Salesforce, or your helpdesk, so WhatsApp stops being the one channel with no record.", icon: RefreshCw },
];

const RULES = [
  { title: "Opt-in is mandatory", desc: "You need documented consent before messaging someone. It can be collected at checkout, on a form, via a QR code, or through a Click-to-WhatsApp ad, but it has to exist and it has to be recorded. We build the capture and the audit trail as part of the project, not as an afterthought." },
  { title: "The 24-hour customer service window", desc: "When a customer messages you, a 24-hour window opens in which you can reply freely. Outside it, you can only reach them with a pre-approved template. This single rule shapes the entire design of a WhatsApp automation, and any vendor who hasn't mentioned it hasn't designed one." },
  { title: "Templates need approval, and category matters", desc: "Outbound messages use templates that Meta reviews. They fall into marketing, utility, and authentication categories, and the category drives both what's permitted and what it costs. Getting an order update classified as marketing rather than utility is an expensive mistake, repeated at volume." },
  { title: "Quality rating and messaging limits", desc: "Meta scores your number on how recipients react. Blocks and spam reports push the rating down, which caps how many people you can message per day. A campaign that annoys people doesn't just underperform, it reduces what you're allowed to do next month." },
  { title: "Business verification and display name", desc: "Sending at scale requires a verified Meta Business account, and your display name has to meet Meta's rules. The green verified badge is separate again, discretionary, and not something any vendor can promise you." },
  { title: "One number, one platform", desc: "A number connected to the Business API can't also be used in the consumer WhatsApp Business app. Deciding which number to migrate, and what happens to the history on it, is a decision to make deliberately, before anyone starts building." },
];

const COST_CATEGORIES = [
  { title: "Marketing", desc: "Promotions, broadcasts, cart recovery, win-backs. The most expensive category by a wide margin, and deliberately so. No volume discounts at any scale." },
  { title: "Utility", desc: "Order updates, shipping alerts, appointment reminders, payment confirmations. Far cheaper, with volume tiers that reduce the rate as you grow." },
  { title: "Authentication", desc: "One-time passcodes and verification. Tightly formatted, cheap, and rule-bound." },
  { title: "Service", desc: "Your free-form replies inside the 24-hour window. Free today. Not from October 2026." },
];

const COST_LEVERS = [
  { title: "Get the category right", desc: "Order and shipping updates belong in utility, not marketing. Misclassification is the most common and most expensive error we see." },
  { title: "Design for fewer, better messages", desc: "One complete reply instead of three fragments. Post-October, message count is the bill." },
  { title: "Use inbound entry points", desc: "Conversations started from a Click-to-WhatsApp ad or a Page CTA button open a 72-hour entry-point window with free delivery, which survives the October change." },
  { title: "Don't broadcast to people who won't engage", desc: "Blocks and spam reports cost you rate limits as well as goodwill, and you still pay for a delivered message someone reports." },
];

const PROCESS = [
  { step: "01", title: "Feasibility and cost model", duration: "2–3 days", desc: "We map the conversations you want to automate, check them against Meta's category and policy rules, and build the running-cost estimate. You get that model whether or not you hire us." },
  { step: "02", title: "Account, number, and verification", duration: "Depends on Meta", desc: "Business verification, choosing and migrating the number, and BSP setup. We handle the submissions; the review timeline belongs to Meta and we won't pretend otherwise." },
  { step: "03", title: "Templates and opt-in", duration: "3–4 days", desc: "Templates written, categorised correctly, and submitted for approval. Opt-in capture built into your checkout, forms, or ads, with the consent record stored properly." },
  { step: "04", title: "Build and integrate", duration: "1–2 weeks", desc: "The conversation flows, the routing logic, the escalation rules, and the connections to your store, CRM, and helpdesk. Tested against real scenarios in a sandbox before a customer ever sees it." },
  { step: "05", title: "Launch on a limited audience", duration: "3–5 days", desc: "Live to a small segment first, watching quality rating, delivery, and how people actually reply. Problems at 200 recipients are cheap. The same problems at 20,000 cost you your messaging limits." },
  { step: "06", title: "Monitor, tune, and re-cost", duration: "Ongoing", desc: "Delivery and read rates, quality rating, escalation rates, and spend per category tracked monthly. Templates revised as they underperform, and the cost model revisited when Meta changes its rates, which it does roughly quarterly." },
];

const TOOL_GROUPS = [
  {
    category: "Business Solution Providers", icon: Server, items: [
      { name: "Twilio", icon: Server },
      { name: "360dialog", icon: Globe },
      { name: "Gupshup", icon: MessageSquare },
      { name: "WATI", icon: MessageCircle },
      { name: "AiSensy", icon: Send },
      { name: "Interakt", icon: RefreshCw },
      { name: "Direct Cloud API", icon: Code2 },
    ],
  },
  {
    category: "Commerce", icon: ShoppingBag, items: [
      { name: "Shopify", icon: ShoppingCart },
      { name: "WooCommerce", icon: Package },
      { name: "Magento", icon: ShoppingBag },
      { name: "Stripe", icon: CreditCard },
      { name: "Razorpay", icon: CreditCard },
    ],
  },
  {
    category: "CRM and sales", icon: Users, items: [
      { name: "HubSpot", icon: Contact },
      { name: "Zoho", icon: LayoutGrid },
      { name: "Salesforce", icon: Cloud },
      { name: "Pipedrive", icon: TrendingUp },
      { name: "Close", icon: PhoneCall },
    ],
  },
  {
    category: "Helpdesk and shared inbox", icon: LifeBuoy, items: [
      { name: "Zendesk", icon: LifeBuoy },
      { name: "Freshdesk", icon: Headset },
      { name: "Intercom", icon: MessageSquare },
      { name: "Front", icon: MessageCircle },
      { name: "Help Scout", icon: LifeBuoy },
    ],
  },
  {
    category: "Ops and comms", icon: MessageSquare, items: [
      { name: "Slack", icon: MessageSquare },
      { name: "Teams", icon: Users },
      { name: "Notion", icon: FileText },
      { name: "Airtable", icon: Grid3x3 },
      { name: "Google Sheets", icon: ListTodo },
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
  { title: "Building on an unofficial library", desc: "It's cheaper, it works, and then the number is banned with no appeal. Every contact who saved that number now has a dead line to your business. The saving is real until the day it isn't." },
  { title: "Treating it as a broadcast channel", desc: "WhatsApp reaches people in a way email doesn't, which is exactly why misusing it is punished. Blocks and spam reports lower your quality rating and cut your daily messaging limit. The channel gets less useful the more you abuse it." },
  { title: "Automating the conversations that need a person", desc: "A polished automated reply to an angry customer is worse than a slow human one. We'll tell you which categories to leave alone, and we'd rather leave them alone than automate them badly." },
  { title: "Costing the build and not the run", desc: "A project quoted without a per-message model is a project whose real cost you'll discover in month three. This was survivable when service replies were free. From October it isn't." },
];

const FAQS = [
  {
    q: "Didn't Meta ban AI chatbots on WhatsApp?",
    a: "Meta banned general-purpose AI assistants from the Business API with effect from 15 January 2026, that's why ChatGPT and Copilot left the platform. Business automation for support, orders, bookings, and notifications remains explicitly permitted. Everything we build falls into the permitted category.",
  },
  {
    q: "What's changing on 1 October 2026?",
    a: "Service messages, your free-form replies inside the 24-hour customer service window, become chargeable per message, at the same rate as a utility template in that customer's country. Utility templates sent inside the window become chargeable too. If your WhatsApp volume is mostly inbound support, this is a real change to your running costs and it's worth modelling now.",
  },
  {
    q: "What does WhatsApp automation cost to run?",
    a: "Two separate costs: Meta's per-message fees, which depend on your volumes, categories, and destination countries, and our fixed build fee, quoted in writing before we start. We produce a running-cost model on the discovery call so you see both before committing.",
  },
  {
    q: "Do we need the official Business API?",
    a: "For anything at scale, yes. Unofficial libraries and browser-automation tools breach Meta's terms and risk a permanent ban on your number with no appeal. We don't build on them at any price.",
  },
  {
    q: "Can we message anyone, or do we need permission?",
    a: "You need documented opt-in before messaging someone, and outside the 24-hour window you can only reach them through a pre-approved template. We build the opt-in capture and the consent record as part of the project.",
  },
  {
    q: "How long does it take?",
    a: "Three to four weeks for a first use case, five to seven for a full build. The one variable outside our control is Meta's business verification and template approval timeline, and we'll tell you where a delay is theirs rather than ours.",
  },
  {
    q: "Do we have to give up our current WhatsApp number?",
    a: "A number on the Business API can't also run in the consumer WhatsApp Business app. Migrating an existing number is possible and often right, but it's a decision to make deliberately, we'll walk through the trade-off before anything is submitted.",
  },
  {
    q: "Can you get us the green verified badge?",
    a: "We'll prepare and submit the application, but the badge is at Meta's discretion and no vendor can promise it. Anyone who does is telling you something they can't deliver.",
  },
  {
    q: "Which BSP should we use?",
    a: "It depends on your volume, your destination countries, and how much markup you're willing to pay over Meta's base rate. We'll recommend one and explain why. You contract with them directly, so you're never locked into a provider through us.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Code, flows, templates, and documentation transfer to you on final payment. It runs in your accounts, on your BSP contract. If you stop working with us, it keeps running.",
  },
  // TODO: client to confirm real US/UK/Gulf daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US, UK, and Gulf working hours, not ours. A written update every Friday plus a short Loom walkthrough.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Automation",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["AE", "IN", "GB", "US"],
  description:
    "WhatsApp automation built on the official WhatsApp Business Platform: order updates, support replies, lead capture, and appointment reminders, connected to your existing systems.",
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
    { "@type": "ListItem", position: 3, name: "WhatsApp Automation", item: "https://spaciva.tech/services/whatsapp-automation" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `wa-faq-panel-${index}`;
  const buttonId = `wa-faq-button-${index}`;

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

function LastReviewed() {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
      <Info className="w-3.5 h-3.5" />
      Last reviewed {LAST_REVIEWED} against Meta&apos;s published terms
    </div>
  );
}

export default function WhatsAppAutomationClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, two column. The right side is a chat-thread mockup built in HTML/CSS using
          the site's own violet accent, not WhatsApp's green UI or a screenshot of Meta's product,
          per the source spec's trademark/brand-safety guidance. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                WhatsApp Automation
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Your customers are already on WhatsApp. Your systems aren&apos;t.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                We build WhatsApp automation on the official Business API: order updates, support replies, lead capture, appointment reminders, connected to your store, your CRM, and your helpdesk. Compliant with Meta&apos;s rules, costed before you commit, and monitored after launch.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  See what we build
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                Live in 3–4 weeks · Official Business API, no unofficial workarounds
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
                    <MessageCircle className="w-4.5 h-4.5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">Your Business</p>
                    <p className="text-xs text-slate-400">via WhatsApp Business Platform</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="self-start max-w-[85%] bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2.5">
                    <p className="text-sm text-slate-700">Hi, where&apos;s my order #4482?</p>
                  </div>

                  <div className="self-end max-w-[85%]">
                    <div className="bg-[#7C3AED] text-white rounded-2xl rounded-tr-sm px-4 py-2.5">
                      <p className="text-sm">Your order shipped yesterday and is on the way. Tracking: SPX-4482. Arriving Thursday.</p>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#7C3AED]/70">
                      <Send className="w-2.5 h-2.5" /> Automated
                    </span>
                  </div>

                  <div className="self-start max-w-[85%] bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2.5">
                    <p className="text-sm text-slate-700">It says delivered but I never got it. This is really frustrating.</p>
                  </div>

                  <div className="self-end max-w-[85%]">
                    <div className="bg-white border-2 border-[#7C3AED]/30 text-slate-800 rounded-2xl rounded-tr-sm px-4 py-2.5">
                      <p className="text-sm">I&apos;m really sorry about that. I&apos;ve flagged this to Priya on our support team, she&apos;ll message you within the hour.</p>
                    </div>
                    <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-amber-600">
                      <UserPlus className="w-2.5 h-2.5" /> Escalated to a human
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* "Didn't Meta ban AI on WhatsApp?" — the signature section, deliberately high, visually
          heavier than what surrounds it. */}
      <section className="py-16 md:py-28 bg-[#0E0E0C] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#7C3AED]/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 lg:px-10 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6">
              <Info className="w-3.5 h-3.5 mr-1.5 -ml-0.5" /> Last reviewed {LAST_REVIEWED} against Meta&apos;s published terms
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Meta banned general-purpose assistants. Business automation was never in scope.
            </h2>
          </div>

          <div className="text-white/70 text-lg leading-relaxed space-y-5 mb-10 max-w-[720px] mx-auto">
            <p>In October 2025 Meta updated the WhatsApp Business Solution terms to prohibit AI providers from using the platform where an open-ended AI assistant is the primary thing being offered. The clause took effect on <span className="font-bold text-white">15 January 2026</span>, and ChatGPT, Copilot, and Perplexity all left the platform on that date.</p>
            <p>Here&apos;s what got lost in the headlines: the restriction targets standalone assistants distributed through WhatsApp as a product. It does not touch a business automating its own customer conversations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">What is no longer allowed</h3>
              <p className="text-white/60 text-sm leading-relaxed">An open-domain chatbot that answers arbitrary questions, writes content, or acts as a general conversation companion, where that assistant is the product being delivered over WhatsApp. If someone offers you &quot;ChatGPT on WhatsApp&quot; as a service in 2026, they&apos;re selling you something Meta removed.</p>
            </div>
            <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">What is explicitly allowed</h3>
              <p className="text-white/60 text-sm leading-relaxed">Automation that serves your own customers as part of a real business relationship: order confirmations and shipping updates, support triage and replies, appointment booking and reminders, lead qualification, authentication codes, and AI used to understand and route those conversations.</p>
            </div>
          </div>

          <p className="text-white/60 leading-relaxed mb-10 max-w-[720px] mx-auto">
            And the unofficial route was never allowed, either. Reverse-engineered libraries and browser automation that drive a personal WhatsApp account have always breached Meta&apos;s terms. They&apos;re cheaper right up until the number is permanently banned, and you can&apos;t appeal your way back to a number your customers have saved. <span className="font-bold text-white">We only build on the official Business API.</span> If a cheaper quote you&apos;ve received doesn&apos;t say which BSP it runs through, that&apos;s the question to ask.
          </p>

          <blockquote className="border-l-4 border-[#7C3AED] bg-white/5 rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-white leading-snug max-w-[720px] mx-auto">
            The short version: if the AI is incidental to a genuine business service, you&apos;re fine. If the AI is the service, you&apos;re not. Everything on this page is the first kind.
          </blockquote>
        </div>
      </section>

      {/* What we build — light, 3-col card grid */}
      <section id="what-we-build" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">The conversations worth automating</h2>
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
            Not sure which of these applies? Bring us a month of your WhatsApp history and we&apos;ll tell you which conversations are automatable, which shouldn&apos;t be, and roughly what each would cost to run.
          </p>
        </div>
      </section>

      {/* The rules that actually govern this — muted, plain 2-col list, no icons */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Six constraints most vendors don&apos;t mention until after you&apos;ve signed</h2>
          <p className="text-lg text-slate-600 mb-10">WhatsApp is not an open channel you can broadcast on. Meta enforces these, and a build that ignores them gets rate-limited or banned rather than politely warned.</p>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {RULES.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it costs to run — the second heavy section */}
      <section id="cost-to-run" className="py-16 md:py-28 bg-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-4">
            <LastReviewed />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 text-center">
            Meta charges you separately, and that&apos;s changing on 1 October 2026
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Two bills run alongside each other: what Meta charges to deliver messages, and what we charge to build and run the automation. Most vendors quote the second and stay quiet about the first, which is how a project comes in on budget and then costs three times what anyone expected to operate.
          </p>

          <h3 className="font-bold text-slate-900 text-lg mb-2">How Meta bills today</h3>
          <p className="text-slate-600 mb-6">Since July 2025, billing is per message, not per conversation, and the rate depends on the recipient&apos;s country and the message category.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {COST_CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-slate-50 border border-[#E2E8F0] rounded-2xl p-5">
                <h4 className="font-bold text-slate-900 mb-1.5">{cat.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mb-12">
            Rates are set per country by the recipient&apos;s number, not your location, and Meta revises them roughly quarterly. Your Business Solution Provider adds a markup on top of Meta&apos;s rate. Current rates are published on{" "}
            <a href="https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing" target="_blank" rel="noreferrer" className="font-bold text-[#7C3AED] hover:underline">Meta&apos;s own pricing page</a>, which is where we check them rather than repeating figures here that would go stale.
          </p>

          {/* 24-hour window diagram */}
          <div
            className="bg-[#F5F3FF] border-2 border-[#7C3AED]/20 rounded-3xl p-6 md:p-8 mb-12"
            role="img"
            aria-label="Diagram of the 24-hour customer service window: when a customer messages you, a 24-hour window opens during which free-form replies are sent. Today those replies are free for the full window. From 1 October 2026, replies sent inside this window are billed per message."
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock3 className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">The 24-hour customer service window</span>
            </div>
            <div className="relative h-3 rounded-full bg-white border border-[#7C3AED]/20 overflow-hidden mb-3">
              <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-[#7C3AED]/40 to-[#7C3AED]/70" />
            </div>
            <div className="flex justify-between text-xs font-semibold text-slate-500 mb-6">
              <span>Customer messages you (0h)</span>
              <span>Window closes (24h)</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Today</p>
                <p className="font-bold text-slate-900 text-sm">Free-form replies inside the window are free.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-amber-300">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-600 mb-1">From 1 October 2026</p>
                <p className="font-bold text-slate-900 text-sm">Every reply inside the window is billed per message, at the utility-template rate for that country.</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-slate-900 text-lg mb-2">What changes on 1 October 2026</h3>
          <div className="text-slate-600 leading-relaxed space-y-4 mb-8">
            <p>Meta announced on 1 July 2026 that from 1 October 2026, service messages become billable. Every free-form reply your business sends inside the 24-hour window, whether typed by a person or generated by a third-party automation, is charged at the same per-message rate as a utility template in that customer&apos;s country. There&apos;s no volume discount. Utility templates sent inside the window become chargeable too. Meta committed to publishing the country rates by 1 September 2026.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <div className="bg-slate-50 rounded-2xl p-5 border border-[#E2E8F0]">
              <h4 className="font-bold text-slate-900 mb-1.5">Support-heavy businesses are hit hardest</h4>
              <p className="text-slate-600 text-sm leading-relaxed">If your WhatsApp volume is mostly inbound questions rather than outbound campaigns, almost all of it has been free since November 2024. From October, almost none of it is. Clinics, property managers, and delivery businesses should be modelling this now.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5 border border-[#E2E8F0]">
              <h4 className="font-bold text-slate-900 mb-1.5">Reply count becomes a cost, not just a habit</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Splitting an answer across four short messages used to be free and friendly. From October it costs four times what one message costs. Automation design changes accordingly.</p>
            </div>
          </div>

          <h3 className="font-bold text-slate-900 text-lg mb-4">The levers that actually reduce the bill</h3>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mb-10">
            {COST_LEVERS.map((lever) => (
              <div key={lever.title}>
                <h4 className="font-bold text-slate-900 mb-1">{lever.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{lever.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug">
            We model this with you before you commit. On the discovery call we take your realistic monthly volumes by category and destination country and produce a running-cost estimate alongside the build quote. If the numbers don&apos;t work, that&apos;s worth knowing in week one rather than month four.
          </blockquote>
        </div>
      </section>

      {/* How it works — light, vertical timeline */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">From approval to live</h2>
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
                    <span className="px-3 py-1 rounded-full bg-white text-slate-500 text-xs font-bold uppercase tracking-wide border border-[#E2E8F0]">
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

      {/* What it connects to — light */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">WhatsApp is the front door. Your systems are behind it.</h2>
            <p className="text-lg text-slate-600">A WhatsApp automation that can&apos;t see your order data is a chatbot with nothing to say. Everything we build is wired into what you already run.</p>
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
            No strong opinion on which BSP to use? We&apos;ll recommend one based on your volume, your destination countries, and your markup tolerance, and we&apos;ll tell you what each one adds on top of Meta&apos;s rate. You contract with them directly, not through us.
          </p>
        </div>
      </section>

      {/* Where these projects go wrong — muted, plain, no icons */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">Four ways WhatsApp projects burn money</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {WHERE_WRONG.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — two blocks. What Meta charges (factual, kept) and what we charge (omitted:
          no confirmed figures to publish). */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10 text-slate-900 text-center">What we charge, and what Meta charges</h2>

          <div className="bg-slate-50 border border-[#E2E8F0] rounded-3xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-slate-500" />
              <h3 className="font-bold text-slate-900">What Meta charges</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Meta&apos;s message fees are separate and go directly to your BSP, based on your volumes and destination countries. See{" "}
              <a href="#cost-to-run" className="font-bold text-[#7C3AED] hover:underline">
                what it costs to run
              </a>{" "}
              above for the categories, and we model your real numbers with you before you commit.
            </p>
          </div>

          {/*
            "What we charge" block intentionally omitted: the source spec explicitly says to
            delete it rather than publish figures that aren't confirmed yet. TODO: client to
            confirm starter, full-build, and monthly-partner pricing, then restore this block
            and the matching FAQ figure.
          */}
          <div className="rounded-3xl border-2 border-dashed border-slate-200 p-6 md:p-8 text-center">
            <p className="text-slate-500 text-sm">
              Our own pricing is fixed and quoted in writing before we start, no hourly billing. We&apos;ll walk you through it on the call.
            </p>
          </div>
        </div>
      </section>

      {/* Is WhatsApp the right channel? — muted, disambiguation */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Sometimes the honest answer is a different channel</h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
              <h3 className="font-bold text-slate-900 mb-2">WhatsApp is right when</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your customers already message you there, you&apos;re selling into markets where it&apos;s the default channel (the UAE, India, Latin America, much of MEA and Southeast Asia), and the conversations are transactional enough to survive Meta&apos;s rules.</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
              <h3 className="font-bold text-slate-900 mb-2">WhatsApp is questionable when</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your customers are mostly US-based and reach you by email, your volume is low enough that per-message fees never justify the build, or what you actually want is broadcast marketing to a cold list, which is precisely what Meta&apos;s pricing is designed to discourage.</p>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-[680px] mb-8">
            And sometimes the channel isn&apos;t the problem. If mail is piling up rather than messages, that&apos;s{" "}
            <Link href="/services/email-inbox-automation" className="font-bold text-[#7C3AED] hover:underline">email and inbox automation</Link>. If the bottleneck is what happens after the conversation, that&apos;s{" "}
            <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>, and if what&apos;s needed is judgement calls the steps can&apos;t predict in advance, that&apos;s{" "}
            <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent development</Link>. We&apos;ll say so on the call.
          </p>

          <blockquote className="border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug shadow-sm">
            Honest answer: WhatsApp is a front door. It&apos;s only worth building if there&apos;s something useful behind it, your order data, your CRM, your booking system. A WhatsApp bot connected to nothing is a slower way to answer questions your website already answers.
          </blockquote>
        </div>
      </section>

      {/* FAQ — light, accordion, answers always in the DOM. First item is the ban question. */}
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
        <p className="mt-6 text-slate-500 text-sm max-w-[680px] mx-auto text-center">
          <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">See what the monthly plan actually covers</Link>, the monitoring and re-costing work that keeps quality rating and spend from drifting.
        </p>
      </section>

      {/* Closing CTA — dark, full-bleed */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Find out what WhatsApp would actually cost you before October.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll map the conversations worth automating, check them against Meta&apos;s rules, and build you a running-cost model for your real volumes. If WhatsApp isn&apos;t the right channel for you, we&apos;ll tell you that instead.
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
