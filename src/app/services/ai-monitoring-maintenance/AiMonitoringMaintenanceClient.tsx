"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar, TrendingDown, WifiOff, Eye,
  Bot, Workflow, Database, Code2,
  CheckCircle2, Clock,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const RAIL = [
  { id: "why", label: "Why this isn't optional" },
  { id: "quiet-month", label: "A quiet month" },
  { id: "by-system", label: "By system type" },
  { id: "difference", label: "The difference" },
  { id: "rescue", label: "Rescue & takeover" },
  { id: "plans", label: "Plans" },
];

const STATUS_PANEL = [
  { name: "Support agent — chatbot", status: "Healthy", detail: "Checked 4 minutes ago", tone: "ok" as const },
  { name: "Invoice pipeline", status: "Healthy", detail: "Checked 12 minutes ago", tone: "ok" as const },
  { name: "CRM integration", status: "Handled", detail: "Schema change handled — no action needed", tone: "amber" as const },
  { name: "Customer portal", status: "Healthy", detail: "Checked 2 minutes ago", tone: "ok" as const },
  { name: "Lead-scoring model", status: "Healthy", detail: "Checked 1 hour ago", tone: "ok" as const },
];

const WHY_DIFFERENT = [
  { icon: Calendar, title: "The model you built on has a retirement date", body: "Every major provider retires model versions on a published schedule. When yours is retired, your system stops working on a date somebody else chose. Moving to the replacement isn't a switch, outputs shift, prompts behave differently, and the whole thing needs re-testing against your actual cases. This is a calendar event, not a risk, and it's exactly the kind of thing a maintenance plan exists to track.", emphasis: true },
  { icon: TrendingDown, title: "Accuracy drifts because your business does", body: "The model was tuned on the documents, tickets, and products you had at launch. You've since added a product line, changed your pricing page, and started serving a different customer. Nothing broke. The answers just got worse, gradually, in a way nobody notices until a customer points it out. This is what a monitoring plan is built to catch, regular review against real outcomes, not a one-time launch check." },
  { icon: WifiOff, title: "The systems around it change without telling you", body: "Your CRM ships an update. A vendor changes an API response. A source adds a required field. Integrations are the most common failure point in any AI system and they fail on somebody else's release schedule, not yours." },
  { icon: Eye, title: "Failure is silent by default", body: "A crashed server pages someone. A drifted model returns a confident, plausible, wrong answer and logs a success. Without monitoring built specifically for it, the failure mode of an AI system is looking fine." },
];

const QUIET_MONTH = [
  "A source system added a required field. The connector was updated before the next scheduled run.",
  "An API key was approaching its rotation deadline. Rotated ahead of time, nothing interrupted.",
  "The provider announced a deprecation date for a model version you're running. Diarised, migration scheduled with room to spare.",
  "Three dependency updates applied, one of them a security patch.",
  "A load failed overnight on a rate limit. Retried automatically, then the retry window was widened so it wouldn't recur.",
  "Someone on your team asked for an extra field on a report. Done inside the plan.",
  "Monthly note sent: what ran, what was fixed, what's coming, and what we'd suggest next.",
];

type SystemTabLink = { prefix: string; href: string; label: string; suffix?: string; midHref?: string; midLabel?: string };
type SystemTab = { label: string; icon: typeof Bot; monitored: string; attention: string; note?: SystemTabLink };

const SYSTEM_TABS: SystemTab[] = [
  {
    label: "AI agents and chatbots", icon: Bot,
    monitored: "Response latency, escalation and fallback rates, cost per conversation, retrieval quality where a knowledge base is involved, and periodic review of answers against real conversations.",
    attention: "Prompt tuning as your content changes, re-indexing when documents are added or revised, help migrating to a replacement when a model version is retired, and tightening a fallback that fires too often or not often enough.",
    note: { prefix: "If we haven't built it yet, that's ", href: "/services/ai-agent-development", label: "AI agent development", midHref: "/services/rag-chatbot-development", midLabel: "RAG chatbot development", suffix: ", this covers what happens after launch." },
  },
  {
    label: "Automations and integrations", icon: Workflow,
    monitored: "Run success rates, queue depth, error patterns, third-party API health and deprecation notices.",
    attention: "Connector updates when a vendor changes an endpoint, retry and rate-limit tuning, error-queue review so failed items get resolved instead of accumulating, credential and token rotation.",
    note: { prefix: "If we haven't built it yet, that's ", href: "/services/workflow-automation", label: "workflow automation", suffix: ", this covers what happens after launch." },
  },
  {
    label: "Data pipelines and warehouses", icon: Database,
    monitored: "Freshness against expected arrival windows, row-count anomalies, schema drift, warehouse and connector spend.",
    attention: "Schema changes at source, backfills after an outage or a correction, query and cost optimisation, adding sources as they appear.",
    note: { prefix: "If we haven't built it yet, that's ", href: "/services/data-warehousing-etl", label: "data warehousing and ETL", suffix: ", this covers what happens after launch." },
  },
  {
    label: "Custom applications and internal tools", icon: Code2,
    monitored: "Uptime, error rates, performance, dependency and security advisories, backup integrity.",
    attention: "Dependency and framework updates, security patches, small feature requests, and the ordinary accumulation of “can it also do this.”",
  },
];

const WITHOUT_PLAN = [
  { when: "Tuesday", what: "A vendor changes a response field. Your integration keeps running and starts writing blanks." },
  { when: "Following weeks", what: "Reports look slightly off. Someone assumes it's a reporting bug." },
  { when: "Week four", what: "A client asks why a number is wrong. Nobody can say how long it's been wrong." },
  { when: "Week four", what: "Your original developer is on another project, or unreachable, or gone. Finding someone who can read the code takes days." },
  { when: "Week five", what: "Fixed. Then the real work starts: identifying every record affected and correcting a month of downstream data." },
];

const ON_PLAN = [
  { when: "Tuesday", what: "The field-level check fails on the first run after the change. Alert reaches us, not you." },
  { when: "Tuesday", what: "Connector updated. Affected rows re-processed from the last good run." },
  { when: "Tuesday", what: "Logged." },
  { when: "Month end", what: "It appears as one line in your monthly note." },
];

const PLANS = [
  { label: "Essentials", price: "$249", desc: "Monitoring and alerting, uptime and error tracking, dependency and security updates, failure response, and a monthly written note.", bestFor: "one system, stable, low change rate." },
  { label: "Standard", price: "$599", desc: "Everything in Essentials, plus periodic accuracy review with tuning where needed, help migrating when a model version is retired, connector updates when vendors change APIs, backfills and error-queue review, and a day or two of small feature work each month. A named engineer.", bestFor: "most clients, most systems." },
  { label: "Partner", price: "$1,499", desc: "Everything in Standard, plus a larger monthly allowance, priority response, quarterly review of the whole stack including cost, and a roadmap conversation rather than a ticket queue.", bestFor: "several systems, or one that's central to how the business runs." },
];

const RESPONSE_TABLE = [
  { row: "System down", values: ["4 hours", "4 hours", "4 hours"] },
  { row: "Degraded or producing wrong output", values: ["Next business day", "Next business day", "Next business day"] },
  { row: "Everything else", values: ["2 business days", "2 business days", "2 business days"] },
  { row: "Overlap hours with US Eastern and UK", values: ["2–3 hours daily", "2–3 hours daily", "2–3 hours daily"] },
];

const INCLUDED = "Monitoring and alerting · failure diagnosis and fixes · periodic accuracy review and tuning where needed · help migrating when a model version is retired · connector and integration updates when third parties change · dependency and security updates · backfills and reprocessing · small feature work up to the monthly allowance · a named engineer and a monthly written note.";
const NOT_INCLUDED = "New systems or new integrations · significant new features beyond the allowance · redesigns · data-entry or manual operational work · your third-party licences, API usage, or hosting costs, which stay in your name and are billed to you directly · support for systems we haven't audited.";

const WHEN_NOT = [
  { title: "A three-step Zapier automation between two mainstream tools.", body: "If it breaks, it breaks loudly and someone can fix it in an afternoon. Pay for that afternoon when it happens." },
  { title: "A static site or a system with no AI, no integrations, and no data flowing through it.", body: "Very little decays. Check the dependencies twice a year." },
  { title: "A system your own team already owns properly.", body: "With monitoring, documentation, and someone whose job it is. That's the right end state. If you're there, we're overhead." },
];

const FAQS = [
  { q: "Do we have to keep paying to keep the system?", a: "No. You own the code, models, and documentation outright from final payment. The plan buys monitoring and maintenance, not access. Cancel any time with thirty days' notice and everything stays yours, documented." },
  { q: "Can you maintain something you didn't build?", a: "Yes, it's roughly a third of our maintenance work. It starts with a fixed-price two-week audit so we both know what we're taking on. The written assessment is yours regardless of what you decide next." },
  { q: "What actually happens when a model gets deprecated?", a: "We track announced retirement dates for every model in your systems. Before the deadline we migrate to the replacement, re-test against your real cases, adjust prompts where behaviour has shifted, and check outputs against real cases before calling it done. It's included on Standard and Partner plans." },
  { q: "How is this different from a normal software support contract?", a: "Traditional maintenance is mostly about keeping something running. AI maintenance adds keeping it correct, accuracy review, tuning, and model migrations. A system can be running perfectly and producing worse answers than it did in March, and only the second kind of attention catches that." },
  { q: "Who do we contact, and how fast will you respond?", a: "A named engineer who knows your setup, reachable on email and a shared Slack or WhatsApp channel. Response commitments are in the table above and they're in the contract, not just on this page." },
  { q: "Do you work in our time zone?", a: "We commit to 2–3 hours of daily overlap with US Eastern and UK working hours, with a same-business-day response on anything urgent." },
  { q: "What if nothing goes wrong for months?", a: "Then you've had the outcome you're paying for, and the monthly note will be short. If a system genuinely proves stable enough not to need the plan, we'll suggest moving you down a tier. It's happened." },
  { q: "Do you charge for the API and hosting costs?", a: "No. Provider and hosting accounts stay in your name and you're billed by them directly at their prices. We don't resell usage and don't take a margin on it, which is why we can tell you when a cheaper model or a smaller instance would do the same job." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Monitoring & Maintenance Retainer",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Monitoring, tuning, model updates and fixes on AI systems and automations, ours or someone else's. Monthly, no lock-in, a named engineer who knows it.",
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  lowPrice: "249",
  highPrice: "1499",
  priceCurrency: "USD",
  offerCount: "3",
  url: "https://spaciva.tech/services/ai-monitoring-maintenance",
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
    { "@type": "ListItem", position: 3, name: "Ongoing Maintenance & AI Monitoring", item: "https://spaciva.tech/services/ai-monitoring-maintenance" },
  ],
};

function StatusPanel() {
  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] shadow-lg p-5 sm:p-7">
      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">System status</p>
      <ul className="flex flex-col gap-3">
        {STATUS_PANEL.map((s) => (
          <li key={s.name} className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
            <span
              className={cn(
                "w-2.5 h-2.5 rounded-full shrink-0",
                s.tone === "ok" ? "bg-emerald-500" : "bg-amber-500"
              )}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="font-bold text-sm text-slate-900 truncate">{s.name}</p>
              <p className="text-xs text-slate-500">{s.detail}</p>
            </div>
            <span
              className={cn(
                "text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded-full shrink-0",
                s.tone === "ok" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
              )}
            >
              {s.status}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-slate-400 mt-4">Illustrative example, not a live client dashboard.</p>
    </div>
  );
}

function SystemTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" aria-label="What maintenance means by system type" className="flex flex-wrap gap-2 mb-8">
        {SYSTEM_TABS.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            id={`sys-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`sys-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              e.preventDefault();
              setActive(e.key === "ArrowRight" ? (i + 1) % SYSTEM_TABS.length : (i - 1 + SYSTEM_TABS.length) % SYSTEM_TABS.length);
            }}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/20"
                : "bg-white text-slate-600 border-slate-200 hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {SYSTEM_TABS.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`sys-panel-${i}`}
          aria-labelledby={`sys-tab-${i}`}
          hidden={active !== i}
          className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8"
        >
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong className="font-bold text-slate-900">Monitored: </strong>{tab.monitored}
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong className="font-bold text-slate-900">Typically needs attention: </strong>{tab.attention}
          </p>
          {tab.note && (
            <p className="text-slate-500 text-sm leading-relaxed mt-4 pt-4 border-t border-slate-100">
              {tab.note.prefix}
              <Link href={tab.note.href} className="font-bold text-[#7C3AED] hover:underline">{tab.note.label}</Link>
              {tab.note.midHref && tab.note.midLabel && (
                <>
                  {" "}or{" "}
                  <Link href={tab.note.midHref} className="font-bold text-[#7C3AED] hover:underline">{tab.note.midLabel}</Link>
                </>
              )}
              {tab.note.suffix}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AiMonitoringMaintenanceClient() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFER_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, two column. Right side is an illustrative system-status panel, not a
          live dashboard, chosen because "someone is watching this" is the entire product. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                Ongoing Maintenance &amp; AI Monitoring
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                AI systems don&apos;t break on launch day. They break in month seven.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                An API changes. A model version gets retired by the provider. Accuracy drifts as your inputs shift. None of it announces itself, the system keeps running and quietly starts being wrong. We monitor, tune, update, and fix the systems we build, and the ones we didn&apos;t, for a fixed monthly fee with a named engineer attached.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#plans" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  See what&apos;s included
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                From $249/month · Month-to-month, no lock-in · Documentation handed over whether you stay or go
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-lg mx-auto lg:max-w-none"
            >
              <StatusPanel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sticky left rail */}
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
            {/* Why this isn't optional — four blocks, block one emphasised */}
            <section id="why" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  Why This Isn&apos;t Optional
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Conventional software mostly keeps working. AI systems measurably don&apos;t.</h2>
                <p className="text-lg text-slate-600">If you leave a well-built web app alone, it will probably still work next year. That intuition is reasonable, it&apos;s why maintenance plans feel like an upsell, and it does not transfer to AI systems.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {WHY_DIFFERENT.map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "p-6 rounded-2xl",
                      item.emphasis ? "border-2 border-[#7C3AED]/30 bg-[#F5F3FF] sm:col-span-2" : "border border-slate-200 bg-white"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <item.icon className={cn("w-5 h-5 shrink-0 mt-0.5", item.emphasis ? "text-[#7C3AED]" : "text-slate-400")} />
                      <div>
                        <h3 className={cn("font-bold text-slate-900 mb-2", item.emphasis && "text-lg")}>{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What a quiet month looks like — the signature block, itemised, deliberately
                mundane. No incident-drama styling. */}
            <section id="quiet-month" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                What You&apos;re Paying For
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">A month where nothing happened, itemised</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-[680px]">This is roughly what a good month looks like on a plan. None of it would have reached you.</p>

              <ul className="flex flex-col">
                {QUIET_MONTH.map((item, idx) => (
                  <li key={idx} className={cn("flex gap-3 py-4", idx > 0 && "border-t border-slate-100")}>
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-slate-600 max-w-[680px]">Nothing on that list would have been an emergency this month. Two or three of them would have become one within a quarter, usually noticed by a customer, or by a number that was wrong for longer than anyone realised.</p>

              <blockquote className="mt-6 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug">
                You&apos;re not buying incident response. You&apos;re buying the month where the incident didn&apos;t happen.
              </blockquote>
            </section>

            {/* By system type — tabbed explorer, B-5's structural break from audience/platform
                tabbed B pages */}
            <section id="by-system" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-10">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  By System Type
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">The work isn&apos;t the same for every system</h2>
              </div>
              <SystemTabs />
            </section>

            {/* The same incident, twice — before/after, one incident run twice rather than
                manual vs automated. DOM order keeps "without" fully before "on a plan" so a
                screen reader reads linearly; CSS places them side by side at desktop. */}
            <section id="difference" className="py-16 md:py-24 border-t border-[#E2E8F0] bg-slate-50 scroll-mt-28">
              <div className="max-w-2xl mb-10">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  The Difference
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">One API change, two versions of the same month</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7">
                  <h3 className="font-bold text-slate-900 text-lg mb-5">Without a plan</h3>
                  <div className="flex flex-col">
                    {WITHOUT_PLAN.map((row, idx) => (
                      <div key={idx} className={cn("py-3", idx > 0 && "border-t border-slate-100")}>
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{row.when}</span>
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">{row.what}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 pt-4 border-t border-slate-200 text-sm">
                    <strong className="font-bold text-slate-900">Cost: </strong>
                    <span className="text-slate-600">the fix, the backfill, the client conversation, and a quiet loss of confidence in every other number the system produces.</span>
                  </p>
                </div>

                <div className="bg-[#0F172A] rounded-2xl p-6 md:p-7">
                  <h3 className="font-bold text-white text-lg mb-5">On a plan</h3>
                  <div className="flex flex-col">
                    {ON_PLAN.map((row, idx) => (
                      <div key={idx} className={cn("py-3", idx > 0 && "border-t border-white/10")}>
                        <span className="text-xs font-bold uppercase tracking-wide text-white/40">{row.when}</span>
                        <p className="text-white/70 text-sm leading-relaxed mt-1">{row.what}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 pt-4 border-t border-white/10 text-sm">
                    <strong className="font-bold text-white">Cost: </strong>
                    <span className="text-white/70">included.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Systems we didn't build — the acquisition section, real space, dedicated CTA */}
            <section id="rescue" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="rounded-[2rem] border-2 border-[#7C3AED]/30 bg-white shadow-xl p-6 sm:p-10 md:p-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  Rescue &amp; Takeover
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">We take on other people&apos;s systems, and it&apos;s a third of what we do</h2>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-[700px]">
                  Your developer went quiet. The agency that built it doesn&apos;t do maintenance. The person who owned it left and took the context with them. The automation has been broken for two weeks and nobody can find where it runs. That&apos;s a normal Monday and it&apos;s a normal engagement. Here&apos;s how it goes.
                </p>

                <div className="flex flex-col gap-5 mb-8">
                  <p className="text-slate-700 leading-relaxed max-w-[700px]">
                    <strong className="font-bold text-slate-900">A two-week audit, first, $349.</strong> We map what exists, what it depends on, where it runs, what&apos;s undocumented, and what&apos;s actually broken versus merely alarming. You get a written assessment and a recommendation. It&apos;s a fixed price and it&apos;s yours to keep whether or not you continue with us.
                  </p>
                  <p className="text-slate-700 leading-relaxed max-w-[700px]">
                    <strong className="font-bold text-slate-900">Then an honest verdict.</strong> Sometimes the answer is a rebuild. More often it isn&apos;t. The engineering is usually sound and what&apos;s missing is everything around it, no monitoring, no documentation, no version control, no owner. Wrapping a working system in those four things is a fraction of the cost of replacing it, and we&apos;ll tell you when that&apos;s the case even though the rebuild is the bigger invoice.
                  </p>
                  <p className="text-slate-700 leading-relaxed max-w-[700px]">
                    <strong className="font-bold text-slate-900">Then we take the pager.</strong> Once the audit is done and gaps are closed, it moves onto a standard plan and the alerts route to us.
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-[700px]">
                  <strong className="font-bold text-slate-900">What we&apos;ll need:</strong> repository access or the code itself, credentials or a path to reissuing them, and hosting access. If nobody has any of those, say so on the call, it&apos;s recoverable more often than you&apos;d expect, but it changes the shape of the first two weeks and we&apos;d rather plan for it than discover it.
                </p>

                <AnimatedCtaButton href="/contact" label="Book an audit call" hoverLabel="Let's Talk" size="lg" />
              </div>
            </section>

            {/* Plans — three columns, middle emphasised, plus the response-time table */}
            <section id="plans" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  Plans
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">Three plans, month to month</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-14">
                {PLANS.map((plan, idx) => (
                  <div key={plan.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-white border border-slate-200")}>
                    <h3 className={cn("font-bold text-lg mb-2", idx === 1 ? "text-white" : "text-slate-900")}>{plan.label}</h3>
                    <p className={cn("text-2xl font-extrabold mb-4", idx === 1 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{plan.price}<span className="text-sm font-semibold opacity-60">/month</span></p>
                    <p className={cn("text-sm leading-relaxed mb-5", idx === 1 ? "text-white/70" : "text-slate-600")}>{plan.desc}</p>
                    <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Best for: {plan.bestFor}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-slate-900 text-lg mb-1">Response commitments</h3>
                <p className="text-slate-500 text-sm">Partner&apos;s &quot;priority response&quot; means priority queuing within these same commitments, not a different published number, we&apos;d rather commit to a number we can honour on every tier.</p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900"></th>
                      {PLANS.map((p) => (
                        <th key={p.label} scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{p.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {RESPONSE_TABLE.map((row) => (
                      <tr key={row.row} className="border-b border-slate-100 last:border-0">
                        <th scope="row" className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">{row.row}</th>
                        {row.values.map((v, i) => (
                          <td key={i} className="px-5 py-4 text-sm text-slate-700 align-top">{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-slate-600 max-w-[720px]">
                Month to month. Thirty days&apos; notice, no minimum term, no exit fee. Documentation, code, and credentials are yours throughout and handed over cleanly whether you&apos;re leaving us or just taking it in-house. A plan you can cancel is the only kind worth selling, if we&apos;re not earning it, we&apos;d rather you stopped paying than stayed locked in.
              </p>
            </section>

            {/* What's not included — deliberately undesigned, reads as a contract clause */}
            <section className="py-16 border-t border-[#E2E8F0]">
              <h2 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">Where the plan stops</h2>
              <p className="text-sm text-slate-600 mb-6 max-w-[720px]">Being specific about this up front is how the plan survives contact with year two.</p>
              <div className="grid sm:grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="font-bold text-slate-900 mb-2">Included</p>
                  <p className="text-slate-600 leading-relaxed">{INCLUDED}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-2">Not included</p>
                  <p className="text-slate-600 leading-relaxed">{NOT_INCLUDED}</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-500 max-w-[720px]">
                On the last two, plainly: we don&apos;t resell infrastructure or model usage, you pay providers directly at their prices, so there&apos;s no margin for us in your usage going up. And we won&apos;t take responsibility for a system we haven&apos;t looked at, the audit above exists precisely so we&apos;re never guessing about what we&apos;ve agreed to keep alive.
              </p>
            </section>

            {/* When not to buy this — single centred, bordered block */}
            <section className="py-16 border-t border-[#E2E8F0] flex justify-center">
              <div className="max-w-[680px] border border-slate-200 rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-extrabold tracking-tight mb-5 text-slate-900 text-center">Some systems don&apos;t need a plan</h2>
                <div className="flex flex-col gap-4 mb-5">
                  {WHEN_NOT.map((item) => (
                    <p key={item.title} className="text-sm text-slate-600 leading-relaxed">
                      <strong className="font-bold text-slate-900">{item.title}</strong> {item.body}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-slate-700 font-semibold text-center">The plans exist for systems with moving parts. If yours doesn&apos;t have those, we&apos;ll say so on the call.</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* FAQ — two-column, no accordion, per Template B rules */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — light bordered panel, not a dark band, per Template B rules */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <Clock className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Tell us what&apos;s running, and who&apos;s watching it.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. Whether we built it or someone else did, we&apos;ll tell you what&apos;s likely to break first, what it would take to keep it healthy, and what that costs a month.
          </p>
          <div className="flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a call" hoverLabel="Let's Talk" size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
