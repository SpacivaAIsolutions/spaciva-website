"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Users, GraduationCap, MapPin } from "lucide-react";

const stats = [
  { value: "40+", label: "Enterprise Projects" },
  { value: "3.2x", label: "Avg. ROI Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "6+", label: "Countries Served" },
];

const solutionCards = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Custom LLM agents, pipeline automation, and intelligent workflow systems.",
    badge: "92% Cost Saved",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-100",
    iconBg: "bg-blue-600",
    href: "/ai-automation-solutions",
  },
  {
    icon: Users,
    title: "Custom CRM",
    desc: "Deal pipelines, lead tracking, auto follow-ups — built to your process.",
    badge: "3.5× Conversion",
    badgeClass: "bg-violet-50 text-violet-700 border-violet-100",
    iconBg: "bg-violet-600",
    href: "/custom-crm-development",
  },
  {
    icon: GraduationCap,
    title: "LMS Platforms",
    desc: "Corporate training portals, quizzes, and PDF certification engines.",
    badge: "94% Completion",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-600",
    href: "/lms-development-company",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-24">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.5,
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 80%)",
        }}
      />

      {/* Soft gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] rounded-full blur-[180px] opacity-60 animate-float" style={{ background: "var(--gradient-orb-1)" }} />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[180px] opacity-60 animate-float-delay" style={{ background: "var(--gradient-orb-2)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex-1 flex flex-col justify-center items-center w-full">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold tracking-tight leading-[1.06] mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          Next-Gen AI Solutions
          <br />
          <span className="gradient-text font-black">& Digital Ecosystems</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We engineers custom AI automation agents, CRM platforms, LMS systems, and high-performance web applications that scale your operations and drive measurable growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="/contact"
            className="group flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "var(--bg-navy)", boxShadow: "var(--shadow-md)" }}
          >
            Get a Free Consultation
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border transition-all duration-300 hover:scale-[1.02]"
            style={{ color: "var(--text-primary)", borderColor: "var(--border-subtle)", background: "var(--bg-card)", boxShadow: "var(--shadow-sm)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16 w-full max-w-2xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-4 px-3 rounded-2xl border text-center"
              style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
            >
              <p className="text-2xl font-extrabold mb-0.5" style={{ color: "var(--color-electric-blue)" }}>{stat.value}</p>
              <p className="text-[10px] leading-snug font-medium" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Solution preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left w-full max-w-4xl"
        >
          {solutionCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                boxShadow: "var(--shadow-sm)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-xl ${card.iconBg} text-white shrink-0`}>
                  <card.icon size={16} strokeWidth={2} />
                </div>
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border ${card.badgeClass}`}>
                  {card.badge}
                </span>
              </div>
              <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{card.title}</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{card.desc}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
