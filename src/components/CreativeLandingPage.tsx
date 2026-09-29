"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import {
  ArrowRight, Sparkles, Code2, Cpu, ShieldCheck,
  CheckCircle2, ChevronDown, Building2, Factory,
  ShoppingBag, Rocket, Briefcase,
} from "lucide-react";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

// --- DATA ---

const WHAT_WE_DO = [
  {
    title: "AI Automation & Agents",
    body: "Support agents trained on your own docs. Lead intake, qualification and routing. Invoice and document processing. Automated client reporting. Built to run in production and monitored monthly.",
    // TODO: client to confirm a real starting price. Per spec, if unavailable, render "Live in 3 weeks" alone.
    priceLine: "Live in 3 weeks",
    tags: ["LLMs", "AI Agents", "RAG", "n8n"],
    icon: Cpu,
    color: "#7C3AED",
    href: "/services/ai-agent-development",
  },
  {
    title: "Custom Software & Internal Tools",
    body: "CRMs, dashboards, portals, and web apps, the engineering layer automation needs underneath it. Full code ownership on final payment.",
    tags: ["React", "Next.js", "Node.js", "Postgres"],
    icon: Code2,
    color: "#4F46E5",
  },
  {
    title: "Monitoring & Maintenance",
    body: "A monthly plan on every system we build: uptime monitoring, model and prompt tuning, updates, and small feature work, with a named engineer who knows your setup.",
    tags: ["AWS", "Monitoring", "CI/CD"],
    icon: ShieldCheck,
    color: "#334155",
  },
];

const HERO_SERVICES = [
  { title: "AI Automation", desc: "Support agents · Lead routing · Invoice processing", color: "#7C3AED", bg: "#F5F3FF" },
  { title: "Custom Software", desc: "CRMs · Internal tools · Ops dashboards", color: "#0F172A", bg: "#F1F5F9" },
  { title: "Ongoing Support", desc: "Monthly monitoring, tuning & maintenance", color: "#3B82F6", bg: "#EFF6FF", href: "/services/ai-monitoring-maintenance" },
];

const WHY_CHOOSE_US = [
  "You work with the engineers, not an account manager",
  "Full code and model ownership on final payment",
  "Most automations are live in 3 weeks",
  // TODO: client to confirm real US/UK daily-overlap hours; using the spec's stated fallback until then.
  "Video calls in your working hours, not ours",
  "NDA before discovery, standard MSA and SOW",
  "Every build includes monthly monitoring and tuning",
];

// Order matters: the first three are the primary niches and must render first at every breakpoint.
// Agencies / Professional Services / E-Commerce link out to dedicated industry pages that don't exist
// yet, so those three render as non-interactive until the pages ship (per spec: don't link to a 404,
// don't create stub pages). The other three already have live pages, so they link through.
const INDUSTRIES = [
  { name: "Agencies", icon: Rocket, href: undefined },
  { name: "Professional Services", icon: Briefcase, href: undefined },
  { name: "E-Commerce", icon: ShoppingBag, href: undefined },
  { name: "Startups & SaaS", icon: Sparkles, href: "/industries/startups" },
  { name: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
  { name: "Real Estate", icon: Building2, href: "/industries/real-estate" },
];

const FAQS = [
  {
    q: "How does your pricing work?",
    a: "Our core offers are fixed-scope packages with a stated price and timeline, so you know the cost before you commit. Ongoing work is billed as a simple monthly plan. We don't bill hourly by default.",
  },
  // TODO: client to confirm real starting prices ($X setup, $Y/month) and add a "How much does a
  // typical project cost?" FAQ here once pricing is confirmed (spec: omit the question entirely
  // rather than answer vaguely — a non-answer is worse than silence).
  {
    q: "How do you work with clients in different time zones?",
    a: "We're based in Ahmedabad, India, and stay available for video calls in your US Eastern or UK working hours, not ours. You get a written update every Friday plus a short Loom walkthrough of what moved.",
  },
  {
    q: "What happens after a project launches?",
    a: "Every system we build includes a monthly plan: uptime monitoring, model and prompt tuning, dependency updates, and small feature work, with a named engineer who knows your setup. AI systems drift over time, and that's the nature of the technology, so we scope for it upfront rather than treating it as an afterthought.",
  },
  { q: "What is your typical timeline?", a: "Most MVPs and core web applications are delivered within 6 to 12 weeks. Complex enterprise or AI solutions may take 3 to 6 months depending on the scope." },
  { q: "Who owns the code?", a: "You do. Upon project completion and final payment, 100% of the intellectual property and source code is transferred to your company." },
  { q: "Do you sign NDAs?", a: "Absolutely. We are happy to sign a Non-Disclosure Agreement before any initial discovery calls or code audits to protect your ideas." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer long-term maintenance and technical support contracts to ensure your application scales securely over time." },
];

// --- COMPONENTS ---

function HeroSection() {
  return (
    <section className="px-5 sm:px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-16 sm:pb-24 lg:pt-32 lg:pb-32 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] font-extrabold tracking-tight mb-6 text-[#0F172A]">
            AI automation that runs <span className="text-[#7C3AED]">your busywork</span>
          </h1>
          <p className="text-lg md:text-xl text-[#334155] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
            We build custom AI agents and automations for agencies, professional-services firms, and DTC brands in the US and UK, integrated with the tools you already use, and monitored by us every month.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <AnimatedCtaButton
              href="/contact"
              label="Book a 30-minute call"
              hoverLabel="Let's Talk"
            />
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 font-bold text-[#0F172A] hover:text-[#7C3AED] transition-colors"
            >
              See how it works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          {/* TODO: client to confirm a real "systems live" count. Per spec, omit the proof line
              entirely rather than approximate one, so it stays out until that number exists. */}
        </motion.div>

        {/* Creative Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 mx-auto lg:mx-0 w-full max-w-2xl"
        >
          {/* Weekly written updates + Loom walkthrough */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
            </div>
            <span className="text-[#0F172A] font-bold text-[13px] tracking-wide">Weekly written updates + Loom walkthrough</span>
          </div>

          {/* Fixed scope, fixed price */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span className="text-[#0F172A] font-bold text-[13px] tracking-wide">Fixed scope, fixed price</span>
          </div>

          {/* You own the code */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>
            </div>
            <span className="text-[#0F172A] font-bold text-[13px] tracking-wide">You own the code</span>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
        <div className="flex flex-col gap-5 relative z-10 pl-0 lg:pl-12">
          {HERO_SERVICES.map((service, index) => {
            const content = (
              <>
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: service.bg }}
                  >
                    <div
                      className="w-4 h-4 rounded-full shadow-sm"
                      style={{ backgroundColor: service.color }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#0F172A] text-base sm:text-lg mb-0.5">{service.title}</h3>
                    <p className="text-xs sm:text-sm font-medium text-[#334155]">{service.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 shrink-0 ml-3 text-[#94A3B8] group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
              </>
            );
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#C4B5FD] transition-all duration-300 group transform ${index % 2 === 0 ? 'lg:-translate-x-4' : 'lg:translate-x-4'}`}
              >
                {service.href ? (
                  <Link href={service.href} className="flex items-center justify-between p-5 cursor-pointer">
                    {content}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between p-5 cursor-default">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <>
      <TrustStrip
        sectionClassName="py-10 bg-white border-t border-[#E2E8F0] shadow-sm"
        containerClassName="max-w-7xl mx-auto px-6 md:px-12"
        fadeFrom="white"
      />
      {/*
        TODO: client to supply a testimonial that contains a specific number (hours saved,
        percentage reduction, time-to-completion). Per spec, do not ship this block with a vague
        quote ("great to work with") — that occupies proof real estate without providing proof.
        Uncomment and fill in once a real quote is available, directly beneath the trust strip.

      <div className="mt-14 max-w-[680px] mx-auto text-center">
        <p className="text-xl md:text-2xl font-medium text-[#0F172A] leading-relaxed">
          "[Testimonial quote, must contain a specific number, e.g. hours saved per week,
          percentage reduction, or time-to-completion.]"
        </p>
        <p className="mt-4 text-sm font-bold text-[#334155]">
          [Full name], [Job title] — [Company]
        </p>
      </div>
      */}
    </>
  );
}

function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="bg-[#0E0E0C] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#7C3AED]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-[#7C3AED]/10 to-transparent pointer-events-none" />

      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">What We Do</h2>
          <p className="text-white/60 font-medium max-w-2xl mx-auto text-lg">We&apos;re not a full-service agency. We do three things, in this order.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WHAT_WE_DO.map((service, index) => {
            const big = index === 0;
            const href = "href" in service ? service.href : undefined;

            const cardInner = (
              <>
                {/* Decorative glowing orb inside the card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#7C3AED]/30 group-hover:scale-150" />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <div className="relative z-10">
                  <h3 className={`font-bold text-white mb-4 ${big ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}`}>{service.title}</h3>
                  <p className={`text-white/60 leading-relaxed ${big ? "max-w-2xl" : ""}`}>{service.body}</p>

                  {"priceLine" in service && service.priceLine && (
                    <span className="inline-flex items-center mt-5 px-4 py-1.5 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 text-[#C4B5FD] font-bold text-sm">
                      {service.priceLine}
                    </span>
                  )}

                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/50 border border-white/10 group-hover:border-white/20 group-hover:text-white/70 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 border transition-all duration-500 overflow-hidden relative ${big
                  ? "md:col-span-2 border-[#7C3AED]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(124,58,237,0.15)]"
                  : "border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] hover:border-[#7C3AED]/40"
                  }`}
              >
                {href ? <Link href={href} className="contents">{cardInner}</Link> : cardInner}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 relative overflow-hidden border-y border-[#E2E8F0]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7C3AED]/5 to-transparent pointer-events-none" />
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0E0E0C]">Why Choose Us</h2>
          <p className="text-[#334155] font-medium max-w-2xl mx-auto">We focus on measurable outcomes and technical excellence.</p>
        </div>

        {/*
          The dashboard mockup image previously here (/dashboard-mockup.png) has visible
          design-template placeholder text baked into the image itself ("Feature Section",
          "Minimal typography: Inter") plus garbled fake data. Per the rewrite spec, priority
          is to ship without it: removed and the section now runs single-column across the
          full width until a real product screenshot exists.
        */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {WHY_CHOOSE_US.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <span className="font-bold text-[#0F172A] text-base sm:text-lg leading-snug">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0F172A]">Industries We Serve</h2>
        <p className="text-[#334155] font-medium max-w-2xl mx-auto">We build deepest where visual, repetitive, and manual workflows are the bottleneck.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {INDUSTRIES.map((industry, index) => {
          const chipClass = cn(
            "flex items-center gap-3 bg-white border border-[#E2E8F0] shadow-sm rounded-full px-6 py-3 transition-all duration-300",
            industry.href ? "hover:border-[#7C3AED] hover:shadow-md cursor-pointer" : "cursor-default"
          );
          const content = (
            <>
              <industry.icon className="w-5 h-5 text-[#7C3AED]" />
              <span className="font-bold text-[#0F172A] text-sm">{industry.name}</span>
            </>
          );

          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {industry.href ? (
                <Link href={industry.href} className={chipClass}>{content}</Link>
              ) : (
                <div className={chipClass}>{content}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }: { faq: typeof FAQS[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:border-[#C4B5FD] transition-colors">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-[#0F172A]">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-[#7C3AED] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-[#334155] leading-relaxed">
              {faq.a}
            </div>
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-12 max-w-3xl mx-auto pt-8 pb-16 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#0F172A]">Common Questions</h2>
        <p className="text-[#334155] font-medium">Everything you need to know about working with us.</p>
      </div>

      <div>
        {FAQS.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24">
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
            <AnimatedCtaButton
              href="/contact"
              label="Book a discovery call"
              hoverLabel="Let's Talk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MAIN LAYOUT ---

import Footer from "@/components/Footer";

export default function CreativeLandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {/* Background Dot Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <main className="relative z-10">
        <HeroSection />
        <WhatWeDoSection />
        <PartnersSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <FAQSection />
        <CTASection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
