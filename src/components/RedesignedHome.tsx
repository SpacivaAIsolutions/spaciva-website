"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Cloud,
  Globe,
  LayoutDashboard,
  Menu,
  X,
  Check,
  Mail,
  MapPin,
  ChevronRight,
  Sparkles,
  HeartPulse,
  Landmark,
  Users,
  Building2,
  PackageSearch,
  Clock,
  ExternalLink,
  HelpCircle,
  Lock,
  Calendar,
} from "lucide-react";

/* ─── Helpers ──────────────────────────────────────────────── */
function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

function useReveal(margin = "-60px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as any });
  return { ref, inView };
}

/* ─── Animated counter ─────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useReveal();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const id = setInterval(() => {
      start = Math.min(start + step, to);
      setVal(start);
      if (start >= to) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F6F2] pt-12">
      {/* Dot matrix background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,14,12,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Warm blob */}
      <div className="absolute right-0 top-0 w-[55vw] h-full bg-gradient-to-bl from-[#FF4D00]/10 via-[#FFB347]/6 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center pt-8 pb-20 lg:pt-10 lg:pb-28">
          {/* Left */}
          <div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.4rem,5.2vw,4.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0E0E0C] mb-7"
              style={{ fontFamily: J }}
            >
              Custom Software, AI & Web Solutions
              <br />
              <span className="italic font-light text-[#6B6A65]">That Help Businesses Operate Smarter</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-[#6B6A65] text-lg leading-relaxed max-w-xl mb-10"
              style={{ fontFamily: I }}
            >
              From modern websites to AI automation and custom business software,
              we create digital solutions that help businesses operate more efficiently
              and prepare for future growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-[#FF4D00] hover:bg-[#e54400] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-[15px]"
                style={{ fontFamily: J }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#solutions"
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-[#0E0E0C] bg-white border border-black/[0.1] hover:border-black/20 transition-all duration-200 text-[15px]"
                style={{ fontFamily: J }}
              >
                Explore Our Services
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-14 pt-10 border-t border-black/[0.07] flex flex-wrap gap-8"
            >
              {[
                { n: 12, s: "+", label: "Custom Solutions Delivered" },
                { n: 10, s: "+", label: "Businesses Supported" },
                { n: 100, s: "%", label: "Code Ownership" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-extrabold text-[#0E0E0C] tabular-nums"
                    style={{ fontFamily: J }}
                  >
                    <Counter to={stat.n} suffix={stat.s} />
                  </div>
                  <div className="text-xs text-[#6B6A65] mt-0.5" style={{ fontFamily: I }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating service cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-3"
          >
            {[
              { label: "Business Websites", sub: "Corporate · E-Commerce · Redesigns", color: "#FF4D00" },
              { label: "Custom Software", sub: "CRMs · ERPs · Operations Dashboards", color: "#0E0E0C" },
              { label: "AI Automation", sub: "Chatbots · WhatsApp · Workflows", color: "#7C3AED" },
              { label: "Mobile Apps", sub: "iOS & Android Applications", color: "#059669" },
              { label: "Ongoing Support", sub: "Maintenance & Technical Partner", color: "#3B82F6" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                className="flex items-center gap-4 px-5 py-4 bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: card.color + "14" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: card.color }} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#0E0E0C]" style={{ fontFamily: J }}>
                    {card.label}
                  </div>
                  <div className="text-[11px] text-[#6B6A65] mt-0.5" style={{ fontFamily: I }}>
                    {card.sub}
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#BBBBBA] ml-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee strip ────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "AI Agents", "LLM Fine-tuning", "RAG Pipelines", "Custom CRMs",
  "Next.js Apps", "Cloud DevOps", "Enterprise LMS", "SaaS Products",
  "AI Agents", "LLM Fine-tuning", "RAG Pipelines", "Custom CRMs",
  "Next.js Apps", "Cloud DevOps", "Enterprise LMS", "SaaS Products",
];

function Marquee() {
  return (
    <div className="bg-[#0E0E0C] py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -50 + "%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        className="flex gap-0 whitespace-nowrap"
        style={{ width: "200%" }}
      >
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-[13px] font-medium text-white/60"
            style={{ fontFamily: I }}
          >
            <span className="w-1 h-1 rounded-full bg-[#FF4D00]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Solutions by Business Needs ──────────────────────────── */
const SERVICES = [
  {
    num: "01",
    icon: Globe,
    title: "Establish Your Digital Presence",
    tagline: "For businesses starting or upgrading online.",
    desc: "Corporate websites, business landing pages, e-commerce stores, and full-scale website redesigns built for high speed, premium styling, and conversion optimization.",
    stack: ["Business Websites", "Corporate Websites", "Landing Pages", "E-commerce", "Website Redesign"],
  },
  {
    num: "02",
    icon: LayoutDashboard,
    title: "Streamline Operations",
    tagline: "Custom internal software built to simplify workflows.",
    desc: "Custom management systems, ERP systems, role-based dashboards, inventory trackers, HR tools, and scheduling calendars that automate your day-to-day operations.",
    stack: ["CRM & ERP", "Dashboards", "Inventory Systems", "HR Systems", "Booking Systems"],
  },
  {
    num: "03",
    icon: Brain,
    title: "Automate Repetitive Work",
    tagline: "Save hundreds of hours by eliminating manual tasks.",
    desc: "AI chatbots, automated document processing, custom workflow triggers, WhatsApp and email automated responses, and specialized AI virtual assistants.",
    stack: ["AI Chatbots", "Workflow Automation", "WhatsApp Automation", "Document Processing", "AI Assistants"],
  },
  {
    num: "04",
    icon: PackageSearch,
    title: "Build Custom Products",
    tagline: "Unique software products designed for scale and growth.",
    desc: "SaaS platform engineering, white-label client portals, custom mobile apps, bespoke developer APIs, and integrations connecting your existing business tools.",
    stack: ["SaaS Platforms", "Customer Portals", "Mobile Apps", "Internal Tools", "APIs"],
  },
];

function ServiceRow({
  s,
  i,
  isOpen,
  onToggle,
}: {
  s: typeof SERVICES[0];
  i: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, inView } = useReveal();
  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="border-b border-black/[0.07]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 py-7 text-left group"
      >
        <span
          className="text-xs font-semibold text-[#BBBBBA] w-8 flex-shrink-0"
          style={{ fontFamily: I }}
        >
          {s.num}
        </span>
        <div
          className="w-10 h-10 rounded-xl bg-[#EEECEA] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4D00]/10 transition-colors duration-200"
        >
          <Icon className="w-4.5 h-4.5 text-[#6B6A65] group-hover:text-[#FF4D00] transition-colors duration-200" size={18} />
        </div>
        <span
          className="text-lg font-bold text-[#0E0E0C] flex-1"
          style={{ fontFamily: J }}
        >
          {s.title}
        </span>
        <div className="flex flex-wrap gap-1.5 mr-6 hidden sm:flex">
          {s.stack.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-[#EEECEA] text-[#6B6A65]"
              style={{ fontFamily: I }}
            >
              {t}
            </span>
          ))}
        </div>
        <ChevronRight
          className={cn(
            "w-4 h-4 text-[#BBBBBA] flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-90"
          )}
        />
      </button>

      {/* Expanded detail */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-7 pl-[88px] pr-6 flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="text-xs font-semibold text-[#FF4D00] mb-2" style={{ fontFamily: I }}>{s.tagline}</p>
            <p
              className="text-[#6B6A65] text-sm leading-relaxed"
              style={{ fontFamily: I }}
            >
              {s.desc}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:max-w-[240px] pt-1">
            {s.stack.map((t) => (
              <span
                key={t}
                className="text-[11px] px-3 py-1.5 rounded-full bg-[#EEECEA] border border-black/[0.06] text-[#6B6A65] font-medium"
                style={{ fontFamily: I }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="solutions" className="py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 mb-16 items-end">
          <div>
            <span
              className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
              style={{ fontFamily: I }}
            >
              Solutions
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0E0E0C]"
              style={{ fontFamily: J }}
            >
              Organized around
              <br />
              your business needs.
            </h2>
          </div>
          <p className="text-[#6B6A65] text-base leading-relaxed" style={{ fontFamily: I }}>
            Instead of pushing trends, we build high-performance digital systems to solve your specific operational challenges.
          </p>
        </div>

        {/* Service rows */}
        <div className="border-t border-black/[0.07]">
          {SERVICES.map((s, i) => (
            <ServiceRow
              key={s.num}
              s={s}
              i={i}
              isOpen={expanded === i}
              onToggle={() => setExpanded(expanded === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What We Build ────────────────────────────────────────── */
const CAPABILITIES = [
  {
    title: "Business Websites",
    desc: "Professional websites built for speed, scalability, and a strong customer experience.",
    icon: Globe,
  },
  {
    title: "AI Automation",
    desc: "Automate repetitive tasks and improve productivity with AI-powered workflows.",
    icon: Brain,
  },
  {
    title: "Custom Software",
    desc: "Software designed around your business processes—not generic templates.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile Applications",
    desc: "Apps that keep your business connected with customers and teams.",
    icon: PackageSearch,
  },
  {
    title: "System Integrations",
    desc: "Connect your existing tools so information flows automatically.",
    icon: Cloud,
  },
];

function CapabilityCard({ cap, i }: { cap: typeof CAPABILITIES[0]; i: number }) {
  const { ref, inView } = useReveal();
  const Icon = cap.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="p-8 bg-[#F7F6F2] rounded-3xl border border-black/[0.06] hover:border-[#FF4D00]/20 hover:bg-[#FFF8F6] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-black/[0.04]">
        <Icon className="w-5 h-5 text-[#FF4D00]" />
      </div>
      <h3
        className="text-lg font-bold text-[#0E0E0C] mb-3"
        style={{ fontFamily: J }}
      >
        {cap.title}
      </h3>
      <p
        className="text-sm text-[#6B6A65] leading-relaxed"
        style={{ fontFamily: I }}
      >
        {cap.desc}
      </p>
    </motion.div>
  );
}

function WhatWeBuild() {
  return (
    <section className="py-28 bg-white border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="mb-16">
          <span
            className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
            style={{ fontFamily: I }}
          >
            Capabilities
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0E0E0C]"
            style={{ fontFamily: J }}
          >
            What We Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Who We Work With ─────────────────────────────────────── */
const SECTORS = [
  { icon: Building2, label: "Manufacturing" },
  { icon: Landmark, label: "Hospitality" },
  { icon: Globe, label: "Real Estate" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Sparkles, label: "Startups" },
  { icon: Users, label: "Professional Services" },
];

function SectorCard({ s, i }: { s: typeof SECTORS[0]; i: number }) {
  const { ref, inView } = useReveal();
  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.35, delay: i * 0.07 }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-black/[0.06] hover:border-[#FF4D00]/40 hover:bg-[#FFF8F6] transition-all duration-200 group shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
    >
      <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] flex items-center justify-center mb-4 group-hover:bg-[#FF4D00]/10 transition-colors duration-200">
        <Icon className="w-5 h-5 text-[#6B6A65] group-hover:text-[#FF4D00] transition-colors" />
      </div>
      <span
        className="text-xs font-bold text-[#0E0E0C]"
        style={{ fontFamily: J }}
      >
        {s.label}
      </span>
    </motion.div>
  );
}

function WhoWeWorkWith() {
  return (
    <section id="industries" className="py-28 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 mb-16 items-end">
          <div>
            <span
              className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
              style={{ fontFamily: I }}
            >
              Who We Work With
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0E0E0C]"
              style={{ fontFamily: J }}
            >
              Technology tailored to your workflows.
            </h2>
          </div>
          <p className="text-[#6B6A65] text-base leading-relaxed" style={{ fontFamily: I }}>
            We work with growing businesses that need technology tailored to their workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SECTORS.map((s, i) => (
            <SectorCard key={s.label} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Spaciva ──────────────────────────────────────────── */
const BENEFITS = [
  {
    title: "Solutions built specifically for your business",
    desc: "No forced templates or rigid workflows. Everything is engineered from scratch around your actual operational needs.",
  },
  {
    title: "Transparent communication",
    desc: "Direct communication with engineers, predictable project roadmaps, and weekly progress demonstrations.",
  },
  {
    title: "Scalable architecture for growth",
    desc: "Built on high-performance frameworks like Next.js, Node, and SQL to handle rising user traffic without slowdowns.",
  },
  {
    title: "Modern technologies & practices",
    desc: "We use modern coding standards, automated tests, and deployment pipelines to keep your software stable.",
  },
  {
    title: "Long-term technical support",
    desc: "We don't drop the files and leave. We provide ongoing support, updates, and maintenance after launch.",
  },
  {
    title: "Security & speed from day one",
    desc: "Baked-in SSL, granular permissions, database optimization, and sub-second average page load times.",
  },
];

function BenefitCard({ b, i }: { b: typeof BENEFITS[0]; i: number }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="p-8 rounded-3xl border border-black/[0.07] bg-[#F7F6F2] hover:bg-[#FFF8F6] hover:border-[#FF4D00]/20 transition-all duration-300"
    >
      <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mb-6">
        <Check className="w-4 h-4 text-[#FF4D00]" />
      </div>
      <h3
        className="text-base font-bold text-[#0E0E0C] mb-3"
        style={{ fontFamily: J }}
      >
        {b.title}
      </h3>
      <p
        className="text-sm text-[#6B6A65] leading-relaxed"
        style={{ fontFamily: I }}
      >
        {b.desc}
      </p>
    </motion.div>
  );
}

function WhySpaciva() {
  return (
    <section id="why-custom" className="py-28 bg-white border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span
            className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
            style={{ fontFamily: I }}
          >
            Why Spaciva
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0E0E0C]"
            style={{ fontFamily: J }}
          >
            We build technology that fits the way your business works.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <BenefitCard key={b.title} b={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ──────────────────────────────────────────────── */
const STEPS = [
  { n: "01", title: "Discover", desc: "We analyze your current operations, bottleneck processes, and goals to map out exact specifications." },
  { n: "02", title: "Plan", desc: "We outline the system scope, choose the target technologies, and define clear predictable milestones." },
  { n: "03", title: "Design", desc: "We craft modern user interfaces and structure database/API definitions tailored to your workflows." },
  { n: "04", title: "Develop", desc: "We write clean, high-performance code in agile sprints with weekly live demonstrations." },
  { n: "05", title: "Launch", desc: "We handle production setup, carry out stability checks, and assist with staff onboarding." },
  { n: "06", title: "Support", desc: "We provide ongoing maintenance, feature updates, and tech support as your business scales." },
];

function ProcessStep({ s, i }: { s: typeof STEPS[0]; i: number }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="flex gap-8 py-8 border-b border-white/[0.06] last:border-none group cursor-default"
    >
      <div className="flex-shrink-0 flex flex-col items-center gap-0">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.04] group-hover:bg-[#FF4D00]/10 group-hover:border-[#FF4D00]/30 transition-all duration-200">
          <span
            className="text-[11px] font-bold text-white/40 group-hover:text-[#FF4D00] transition-colors duration-200"
            style={{ fontFamily: I }}
          >
            {s.n}
          </span>
        </div>
        {i < STEPS.length - 1 && (
          <div className="w-px flex-1 bg-white/[0.06] mt-3 min-h-[32px]" />
        )}
      </div>
      <div className="pb-2">
        <h3
          className="text-xl font-bold text-white mb-2"
          style={{ fontFamily: J }}
        >
          {s.title}
        </h3>
        <p
          className="text-white/40 text-sm leading-relaxed"
          style={{ fontFamily: I }}
        >
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}

function Process() {
  return (
    <section id="process" className="py-28 bg-[#0E0E0C]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-72 flex-shrink-0 lg:sticky lg:top-28">
            <span
              className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
              style={{ fontFamily: I }}
            >
              Our Process
            </span>
            <h2
              className="text-4xl font-extrabold leading-tight text-white"
              style={{ fontFamily: J }}
            >
              Predictable
              <br />
              collaboration.
            </h2>
            <p
              className="text-white/40 text-sm leading-relaxed mt-4"
              style={{ fontFamily: I }}
            >
              A structured, predictable development roadmap designed to remove surprises.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-0">
            {STEPS.map((s, i) => (
              <ProcessStep key={s.n} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Case Studies ─────────────────────────────────────────── */
const CASE_STUDIES = [
  {
    name: "Wildmind AI",
    cat: "AI Mental Wellness",
    industry: "Healthcare & Mental Wellness",
    timeline: "8 Weeks",
    teamSize: "3 Specialists",
    tech: ["Next.js", "LangChain", "OpenAI API", "Python"],
    challenge: "The client needed a conversational coaching platform that could support context-aware, multi-session wellness chats without generic API lag.",
    solution: "Engineered a custom AI coaching agent using advanced LLM pipelines, RAG context retrieval, and low-latency API integration.",
    outcome: "A production-ready wellness product that remembers user history, provides personalized support, and runs securely.",
    demoLink: "https://wildmind.ai",
    img: "photo-1620712943543-bcc4688e7485",
  },
  {
    name: "Siddhraj",
    cat: "B2B CRM",
    industry: "Real Estate Enterprise",
    timeline: "12 Weeks",
    teamSize: "4 Developers",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    challenge: "A real estate enterprise was losing leads and time due to rigid off-the-shelf CRMs and manual document handling.",
    solution: "Developed a custom multi-tenant B2B CRM with integrated sales automation, automatic property tracking, and role-based permissions.",
    outcome: "Streamlined sales pipeline with 100% data control and zero monthly subscription costs per seat.",
    demoLink: "#",
    img: "photo-1486325212027-8081e485255e",
  },
  {
    name: "Vachnamrut",
    cat: "Enterprise LMS",
    industry: "Education & E-learning",
    timeline: "10 Weeks",
    teamSize: "3 Specialists",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    challenge: "An education platform needed a scalable course delivery portal with automatic grading for diverse quiz formats.",
    solution: "Designed a bespoke LMS with an auto-grading engine, custom quiz builders, and highly optimized content caching.",
    outcome: "Improved administrator efficiency, faster course completion rates, and reliable performance during peak exam hours.",
    demoLink: "#",
    img: "photo-1501504905252-473c47e087f8",
  },
  {
    name: "Unoloft",
    cat: "SEO & Growth",
    industry: "Real Estate Portal",
    timeline: "6 Weeks",
    teamSize: "2 Specialists",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Search Console API"],
    challenge: "An established web portal was struggling with slow load times, poor Google Search rankings, and drop-offs.",
    solution: "Re-engineered front-end code with Next.js static site generation, optimized image assets, and performed technical SEO tuning.",
    outcome: "Tripled organic search traffic in 90 days and achieved perfect Google Lighthouse performance scores.",
    demoLink: "#",
    img: "photo-1460925895917-afdab827c52f",
  },
];

function CaseStudyCard({ p, i }: { p: typeof CASE_STUDIES[0]; i: number }) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
      className="group relative rounded-3xl overflow-hidden bg-[#F7F6F2] border border-black/[0.06] flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div>
        {/* Image */}
        <div className="relative overflow-hidden bg-[#E0DED9] h-72">
          <img
            src={`https://images.unsplash.com/${p.img}?w=800&h=400&fit=crop&auto=format`}
            alt={p.name}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.02] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F6F2]/80 to-transparent" />
          <div className="absolute top-4 left-4">
            <span
              className="text-[11px] px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#6B6A65] font-medium border border-black/[0.06]"
              style={{ fontFamily: I }}
            >
              {p.cat}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-xs text-[#6B6A65]">
            <span className="flex items-center gap-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-[#FF4D00]" />
              {p.industry}
            </span>
            <span className="w-1 h-1 rounded-full bg-black/10 hidden sm:inline" />
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#FF4D00]" />
              {p.timeline}
            </span>
            <span className="w-1 h-1 rounded-full bg-black/10 hidden sm:inline" />
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-3.5 h-3.5 text-[#FF4D00]" />
              {p.teamSize}
            </span>
          </div>

          <h3
            className="text-2xl font-extrabold text-[#0E0E0C] mb-6"
            style={{ fontFamily: J }}
          >
            {p.name}
          </h3>

          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#FF4D00] uppercase tracking-wider block mb-1" style={{ fontFamily: I }}>Business Challenge</span>
              <p className="text-sm text-[#6B6A65] leading-relaxed" style={{ fontFamily: I }}>{p.challenge}</p>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#FF4D00] uppercase tracking-wider block mb-1" style={{ fontFamily: I }}>Business Outcome</span>
              <p className="text-sm text-[#0E0E0C] font-semibold leading-relaxed" style={{ fontFamily: I }}>{p.outcome}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pb-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/[0.05]">
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-[#EEECEA] text-[#6B6A65]"
              style={{ fontFamily: I }}
            >
              {t}
            </span>
          ))}
        </div>
        {p.demoLink && p.demoLink !== "#" && (
          <a
            href={p.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF4D00] hover:text-[#e54400] transition-colors"
            style={{ fontFamily: J }}
          >
            Live Demo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function CaseStudies() {
  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span
              className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-3 block"
              style={{ fontFamily: I }}
            >
              Case Studies
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0E0E0C]"
              style={{ fontFamily: J }}
            >
              Projects that ship.
            </h2>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-[#0E0E0C] hover:text-[#FF4D00] transition-colors duration-150"
            style={{ fontFamily: J }}
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((p, i) => (
            <CaseStudyCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing Philosophy ───────────────────────────────────── */
function PricingPhilosophy() {
  const { ref, inView } = useReveal();
  const criteria = [
    { title: "Business Goals", desc: "Aligning technical outcomes directly to business target KPIs (efficiency, hours saved, scalability)." },
    { title: "Required Functionality", desc: "Custom database schema, user permissions, automated flows, and bespoke UI screens." },
    { title: "Integrations & APIs", desc: "Seamless middleware connections to your existing CRMs, ERPs, or payment gateways." },
    { title: "Future Scalability", desc: "Built on optimized production stacks to handle increased customer traffic without slowdowns." },
  ];

  return (
    <section id="pricing" className="py-28 bg-[#F7F6F2] border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_450px] gap-16 mb-16 items-start">
          <div>
            <span
              className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
              style={{ fontFamily: I }}
            >
              Pricing Philosophy
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#0E0E0C]"
              style={{ fontFamily: J }}
            >
              Every project is different.
            </h2>
            <p className="text-base text-[#6B6A65] mt-6 leading-relaxed max-w-xl" style={{ fontFamily: I }}>
              We scope every project based on business goals, required functionality, integrations, and future scalability. This removes financial uncertainty and guarantees a fixed project scope.
            </p>
          </div>

          <div className="p-8 bg-white border border-black/[0.06] rounded-3xl shadow-[0_1px_4px_rgba(0,0,0,0.03)] lg:mt-6">
            <h3 className="text-lg font-bold text-[#0E0E0C] mb-3" style={{ fontFamily: J }}>Fixed Scope. Zero Surprises.</h3>
            <p className="text-sm text-[#6B6A65] leading-relaxed mb-4" style={{ fontFamily: I }}>
              We don&apos;t put generic price tags on custom engineering. By scoping precisely, we ensure you only pay for what your business actually needs.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FF4D00]" style={{ fontFamily: J }}>
              <Lock className="w-3.5 h-3.5" />
              Fully customized fixed-price proposals
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((c, i) => (
            <motion.div
              ref={ref}
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 bg-white rounded-2xl border border-black/[0.05] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <h4 className="text-[15px] font-bold text-[#0E0E0C] mb-2" style={{ fontFamily: J }}>{c.title}</h4>
              <p className="text-xs text-[#6B6A65] leading-relaxed" style={{ fontFamily: I }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Discovery Call Roadmap ───────────────────────────────── */
function DiscoveryCall() {
  const { ref, inView } = useReveal();
  const steps = [
    { n: "1", title: "30-Minute Discovery Call", desc: "A brief, no-pressure chat to introduce ourselves and discuss your initial goals." },
    { n: "2", title: "Understand Your Goals", desc: "We map out your current workflows, bottlenecks, and the problems you want solved." },
    { n: "3", title: "Discuss Possible Solutions", desc: "We outline high-level technical architecture, API pathways, and automation routes." },
    { n: "4", title: "Receive a Proposal & Timeline", desc: "You get a line-by-line breakdown of project milestones, deliverables, and a fixed cost." },
    { n: "5", title: "Decide Whether to Move Forward", desc: "Review the proposal. There is absolutely zero obligation to proceed." },
  ];

  return (
    <section className="py-28 bg-[#0E0E0C] text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span
            className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
            style={{ fontFamily: I }}
          >
            How We Work
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-6"
            style={{ fontFamily: J }}
          >
            What happens after you book?
          </h2>
          <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: I }}>
            We want to make starting a project as clear and low-friction as possible. Here is our step-by-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-px bg-white/[0.08] z-0" />

          {steps.map((s, i) => (
            <motion.div
              ref={ref}
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF4D00]/10 group-hover:border-[#FF4D00]/40 transition-all duration-200">
                <span className="text-base font-bold text-white group-hover:text-[#FF4D00] transition-colors" style={{ fontFamily: J }}>
                  0{s.n}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: J }}>{s.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed max-w-[200px] lg:max-w-none" style={{ fontFamily: I }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQs ─────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How long does a project take?",
    a: "Typical custom solutions range from 4 to 12 weeks depending on the complexity, features, and third-party systems involved. We outline exact phase durations and launch milestones in our initial proposal."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We respect your intellectual property and workflow strategies. We sign standard Non-Disclosure Agreements before starting any deep scoping sessions or business discussions."
  },
  {
    q: "Who owns the source code?",
    a: "You do. Once the final milestone is completed and paid, we transfer 100% of the custom codebase, graphics assets, and database architecture directly to your team under full code ownership."
  },
  {
    q: "Can you work with our existing software?",
    a: "Yes. We specialize in engineering middleware, custom APIs, and connectors to link new dashboards, custom portals, or database automations directly with your legacy software."
  },
  {
    q: "Do you redesign existing systems?",
    a: "Yes. We help companies modernize slow or outdated web applications and websites, moving them to fast, mobile-friendly frameworks (like Next.js) while preserving existing customer data and rankings."
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. We offer flexible post-launch support plans that cover security updates, database backups, performance optimization, and incremental feature updates to keep your systems running smoothly."
  },
  {
    q: "Can you build AI features into our current software?",
    a: "Yes, we can. We design and integrate conversational AI interfaces, automated document extraction modules, and custom database chatbots directly into your existing CRM, website, or cloud infrastructure."
  },
  {
    q: "Can you integrate third-party APIs?",
    a: "Yes. We have integrated hundreds of external services including Stripe, PayPal, Twilio, HubSpot, WhatsApp Business APIs, Google Maps, shipping carriers, and regional banking interfaces."
  }
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="border-b border-black/[0.08]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[15px] sm:text-base font-bold text-[#0E0E0C] pr-4 group-hover:text-[#FF4D00] transition-colors" style={{ fontFamily: J }}>
          {q}
        </span>
        <div className="w-6 h-6 rounded-full border border-black/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF4D00]/30 transition-all duration-200">
          <ChevronRight
            className={cn(
              "w-3 h-3 text-[#6B6A65] transition-transform duration-300",
              open && "rotate-90 text-[#FF4D00]"
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm text-[#6B6A65] leading-relaxed max-w-2xl" style={{ fontFamily: I }}>
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

function FAQ() {
  return (
    <section className="py-28 bg-white border-t border-black/[0.05]">
      <div className="max-w-3xl mx-auto px-5 lg:px-0">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em] mb-4 block"
            style={{ fontFamily: I }}
          >
            FAQs
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#0E0E0C]"
            style={{ fontFamily: J }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="border-t border-black/[0.08]">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA split section ────────────────────────────────────── */
function CTA() {
  return (
    <section className="bg-[#FF4D00] py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[1.06] tracking-tight text-white mb-6"
              style={{ fontFamily: J }}
            >
              Technology Built Around
              <br />
              Your Business.
            </h2>
            <p
              className="text-white/70 text-lg leading-relaxed"
              style={{ fontFamily: I }}
            >
              We build custom digital solutions that fit the way your business works. Let&apos;s scope your project and start building.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:spacivaaisolution@gmail.com"
              className="flex items-center justify-between px-7 py-5 rounded-2xl bg-white text-[#0E0E0C] hover:bg-[#FFF8F6] transition-colors duration-200 group"
            >
              <div>
                <div className="text-sm font-semibold" style={{ fontFamily: J }}>Send us a brief</div>
                <div className="text-xs text-[#6B6A65] mt-0.5" style={{ fontFamily: I }}>spacivaaisolution@gmail.com</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#BBBBBA] group-hover:text-[#FF4D00] transition-colors" />
            </a>
            <a
              href="/contact"
              className="flex items-center justify-between px-7 py-5 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors duration-200 group"
            >
              <div>
                <div className="text-sm font-semibold" style={{ fontFamily: J }}>Schedule a call</div>
                <div className="text-xs text-white/50 mt-0.5" style={{ fontFamily: I }}>30-min discovery · No obligation</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </a>

            <div
              className="flex items-center gap-2 mt-2 text-white/50 text-xs"
              style={{ fontFamily: I }}
            >
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Ahmedabad, India · Serving India, UAE, UK, USA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─── Main Redesigned Home Wrapper ─────────────────────────── */
export default function RedesignedHome() {
  return (
    <div className="theme-redesign min-h-screen overflow-x-hidden" style={{ fontFamily: I }}>
      <Hero />
      <Marquee />
      <Services />
      <WhatWeBuild />
      <WhoWeWorkWith />
      <WhySpaciva />
      <Process />
      <CaseStudies />
      <PricingPhilosophy />
      <DiscoveryCall />
      <FAQ />
      <CTA />
    </div>
  );
}
