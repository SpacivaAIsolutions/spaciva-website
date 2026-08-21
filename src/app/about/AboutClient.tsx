"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, Code2, ShieldCheck, Users, KeyRound, Clock, Tag, Wrench,
  FileCheck2, ChevronDown,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import AnimatedSection from "@/components/AnimatedSection";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

/**
 * Flags a fact from the source brief that only the client can supply. Kept visible so it isn't
 * shipped by accident. Currently only referenced inside the commented-out "Where We Are" section
 * below — restore that section's Fill() usages before deleting this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md border border-dashed border-amber-400 bg-amber-50 text-amber-700 text-[0.85em] font-semibold align-baseline whitespace-nowrap">
      {children}
    </span>
  );
}

const PARTNERS = [
  { name: "Siddhraj", logo: "/partnerslogo/siddhraj.jpeg", className: "h-14 md:h-16" },
  { name: "Unoloft", logo: "/partnerslogo/unoloft.webp", className: "h-7 md:h-8" },
  { name: "Kofeko", logo: "/partnerslogo/Kofeko.svg", className: "h-4 md:h-5" },

  { name: "3nStar", logo: "/partnerslogo/3nstar.png", className: "h-7 md:h-9" },
  { name: "Veda", logo: "/partnerslogo/veda.webp", className: "h-9 md:h-11" },
  { name: "Cerata", logo: "/partnerslogo/cerata.webp", className: "h-8 md:h-10" },
  { name: "Shubham", logo: "/partnerslogo/shubham.png", className: "h-8 md:h-10" },
  { name: "Consultup India", logo: "/partnerslogo/consultupindia.webp", className: "h-8 md:h-10" },
];

const WHAT_WE_DO = [
  {
    title: "AI automation and agents: our core work",
    desc: "Custom AI agents and automated workflows built on your own data and integrated with the tools you already use. Support agents, lead intake and routing, document and invoice processing, automated reporting, client onboarding. Built to run in production, monitored monthly.",
    icon: Bot,
    big: true,
  },
  {
    title: "Custom software and internal tools",
    desc: "CRMs, dashboards, portals, and web applications built on Next.js, React, and Node. This is the engineering layer that automation needs underneath it. Full code ownership, transferred on final payment.",
    icon: Code2,
  },
  {
    title: "Ongoing monitoring and maintenance",
    desc: "A monthly plan attached to every system we build: uptime monitoring, model and prompt tuning, dependency updates, small feature work, and a named engineer who knows your setup.",
    icon: ShieldCheck,
  },
];

const HOW_WE_WORK = [
  {
    step: "01",
    title: "We tell you if you don't need us",
    desc: "The first call is a feasibility conversation, not a pitch. If a Zapier scenario or a change in process solves your problem faster and cheaper than a custom build, we'll say so. We'd rather lose a $5,000 project than deliver one that shouldn't exist.",
  },
  {
    step: "02",
    title: "Fixed scope, fixed price",
    desc: "You get a written scope with a fixed price and a delivery date before any code is written. No open-ended hourly billing, no surprise change orders. If the scope moves, we re-quote in writing first.",
  },
  {
    step: "03",
    title: "Weekly updates you don't have to ask for",
    desc: "Every Friday you get a written progress note and a short Loom walkthrough of what moved. You'll never wonder what your offshore team did this week.",
  },
  {
    step: "04",
    title: "Deployed into your real environment",
    desc: "We integrate with your existing stack (your CRM, your Shopify store, your Slack, your database) so the output triggers action instead of sitting in a dashboard nobody opens.",
  },
  {
    step: "05",
    title: "We stay on",
    desc: "After launch we monitor accuracy and uptime, retrain and retune against drift, and extend the system as your workflows change. This is the part most vendors skip.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Senior engineers only",
    desc: "You work directly with the people writing the code. No account manager relaying requirements to a junior team you never meet.",
    icon: Users,
  },
  {
    title: "You own everything",
    desc: "Source code, models, deployment pipelines, and documentation transfer to you on final payment. No lock-in, no proprietary platform you can't leave.",
    icon: KeyRound,
  },
  {
    title: "Real overlap with your day",
    desc: "We work 5 hours of overlap with US Eastern and UK time, with a same-business-day response commitment on anything urgent.",
    icon: Clock,
  },
  {
    title: "Fixed prices, not timesheets",
    desc: "Our core offers are packaged with a stated price and timeline. You know the cost before you commit, and we carry the risk of our own estimates.",
    icon: Tag,
  },
  {
    title: "Built to be maintained",
    desc: "Documented, tested, and handed over properly, whether we keep running it or your own team takes it over later.",
    icon: Wrench,
  },
  {
    title: "NDAs and IP as standard",
    desc: "We sign NDAs before discovery, work under a standard MSA and SOW, and follow secure development practices for client data.",
    icon: FileCheck2,
  },
];

const FAQS = [
  {
    q: "How big is Spaciva?",
    a: "We're a team of 8 based in Ahmedabad, India. We deliberately stay small and senior rather than scaling headcount. It's why you work directly with the engineers building your system.",
  },
  {
    q: "Do you work with companies outside India?",
    a: "Yes. Most of our work is with clients in the US, UK, and UAE. We run fixed-scope contracts, weekly written updates, and 5 hours of daily overlap with US and UK working hours.",
  },
  {
    q: "Who owns the code and the models?",
    a: "You do. Source code, trained models, deployment pipelines, and documentation transfer to you on final payment, and we hand over documentation whether or not you keep us on a maintenance plan.",
  },
  {
    q: "How do you price work?",
    a: "Our core offers are fixed-scope packages with a stated setup price and a monthly plan for monitoring and maintenance. Larger or open-ended engagements are quoted as a monthly retainer. We don't bill hourly by default.",
  },
  {
    q: "What happens after a project launches?",
    a: "Every system we build comes with a monthly plan: monitoring, tuning, updates, and small feature work, with a named engineer who knows your setup. AI systems drift, and that's not a failure case. It's the nature of the technology, and it's why we scope for it upfront.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes, before discovery if you'd like. We work under a standard MSA and SOW with clear IP transfer and change-order terms.",
  },
];

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `about-faq-panel-${index}`;
  const buttonId = `about-faq-button-${index}`;

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-[#334155] leading-relaxed">{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

export default function AboutClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      {/* Background Dot Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[20%] right-[-10%] w-[40%] h-[40%] bg-[#4F46E5]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              About Spaciva
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[#0F172A]">
              We&apos;re the engineering team behind the automations your business runs on.
            </h1>

            <p className="text-lg md:text-xl text-[#334155] mb-10 leading-relaxed font-medium">
              Spaciva is an 8-person AI automation and software engineering team based in Ahmedabad, India, working with agencies, professional-services firms, and e-commerce brands across the US, UK, and UAE. We build the AI agents, internal tools, and automated workflows that take repetitive work off your team, and then we stay on to run them.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute discovery call" hoverLabel="Let's Talk" />
              <Link
                href="/case-studies/partsflow"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0F172A] border border-[#E2E8F0] font-bold text-center hover:bg-slate-50 hover:border-[#C4B5FD] transition-all flex items-center justify-center gap-2"
              >
                See our work
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Proof strip */}
        <section className="py-10 bg-slate-50 border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-center text-sm font-bold text-[#94A3B8] uppercase tracking-wider mb-8">
              Trusted by teams in India, the UK, the US, and the UAE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
              {PARTNERS.map((p) => (
                <img
                  key={p.name}
                  src={p.logo}
                  alt={p.name}
                  className={cn(p.className, "w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300")}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-[#0F172A]">
              Most automation projects die in the handover.
            </h2>
            <div className="text-lg md:text-xl text-[#334155] leading-relaxed space-y-6 font-medium">
              <p>
                A consultant maps your workflow. A developer builds something that works in a demo. Six months later the model has drifted, an API has changed, nobody owns it, and the team quietly goes back to the spreadsheet.
              </p>
              <p>
                We started Spaciva in 2023 because we kept being called in to fix exactly that: systems that were built correctly and then abandoned. The engineering was rarely the problem. The problem was that nobody had signed up for the part after launch.
              </p>
              <p>
                So we built the company around that part. Every system we ship comes with a monthly plan to monitor it, tune it, and extend it as your business changes. It&apos;s not an upsell at the end of a project. It&apos;s how the engagement is scoped from day one.
              </p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-xl md:text-2xl font-bold text-[#0F172A] leading-snug">
              We&apos;d rather run five automations that still work in two years than ship fifty that don&apos;t.
            </blockquote>
          </AnimatedSection>
        </section>

        {/* What We Actually Do */}
        <section className="bg-[#0E0E0C] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#7C3AED]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-[#7C3AED]/10 to-transparent pointer-events-none" />

          <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">What We Actually Do</h2>
              <p className="text-white/60 font-medium text-lg">
                We&apos;re not a full-service agency. We do three things, in this order.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {WHAT_WE_DO.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "group flex flex-col bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 border transition-all duration-500 overflow-hidden relative",
                    item.big
                      ? "md:col-span-2 border-[#7C3AED]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(124,58,237,0.15)]"
                      : "border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] hover:border-[#7C3AED]/40"
                  )}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#7C3AED]/30 group-hover:scale-150" />

                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="relative z-10">
                    <h3 className={cn("font-bold text-white mb-3", item.big ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl")}>
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0F172A]">How We Work</h2>
            <p className="text-[#334155] font-medium max-w-xl mx-auto">A fixed sequence, every time, with no surprises about what happens next.</p>
          </div>

          <div>
            {HOW_WE_WORK.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-4xl md:text-5xl font-light text-[#7C3AED] tabular-nums">{item.step}</span>
                  {index < HOW_WE_WORK.length - 1 && (
                    <div className="w-px flex-1 bg-[#E2E8F0] mt-4" />
                  )}
                </div>
                <div className="pt-2 md:pt-3">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0F172A]">{item.title}</h3>
                  <p className="text-[#334155] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Teams Choose Us */}
        <section className="bg-slate-50 py-16 md:py-24 border-y border-[#E2E8F0]">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0F172A]">Why Teams Choose Us</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#334155] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-20 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-[#0F172A]">The people you&apos;ll actually work with</h2>
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-12 shadow-sm">
            <p className="text-lg md:text-xl text-[#334155] leading-relaxed font-medium">
              Spaciva is a small, senior team of 8 engineers working out of Ahmedabad, India. Every project has a named lead who stays with it from discovery through to the monthly maintenance plan. You&apos;ll know exactly who is building your system and how to reach them.
            </p>
          </div>
        </section>

        {/* Where We Are — commented out until real address/email/phone are supplied; uncomment and fill in Fill() values before launch
        <section className="bg-slate-50 py-16 md:py-24 border-y border-[#E2E8F0]">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-[#0F172A]">
                  Ahmedabad, India: working with clients worldwide
                </h2>
                <p className="text-[#334155] leading-relaxed mb-8 font-medium">
                  We're headquartered in Ahmedabad, Gujarat, and most of our clients are in the US, UK, and UAE. Being offshore is how we can put senior engineers on projects that would cost three times as much onshore, and we've structured everything around making the distance a non-issue: fixed scopes, weekly written updates, real-time overlap hours, and video calls whenever you want one.
                </p>
                <div className="space-y-3 text-[#0F172A] font-bold">
                  <div><Fill>[Registered address]</Fill></div>
                  <div><Fill>[Professional email]</Fill></div>
                  <div><Fill>[Phone / WhatsApp]</Fill></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden md:flex flex-col items-center justify-center gap-3 h-[320px] lg:h-[400px] rounded-3xl border-2 border-dashed border-[#CBD5E1] bg-white text-[#94A3B8]"
              >
                <MapPin className="w-10 h-10" />
                <span className="font-semibold text-sm">Office photo: add before launch</span>
              </motion.div>
            </div>
          </div>
        </section>
        */}

        {/* FAQ */}
        <section className="px-6 md:px-12 max-w-3xl mx-auto pt-16 md:pt-24 pb-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0F172A]">Frequently Asked Questions</h2>
            <p className="text-[#334155] font-medium">Everything you need to know about working with us.</p>
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

        {/* Closing CTA */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24">
          <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
                Tell us what&apos;s eating your team&apos;s time.
              </h2>
              <p className="text-lg text-white/70 mb-10 font-medium">
                Book a 30-minute call. We&apos;ll look at your workflow, tell you honestly whether automation is worth building, and give you a fixed price if it is.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
