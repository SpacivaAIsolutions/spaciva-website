"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Users, GraduationCap, Sparkles } from "lucide-react";

const solutionCards = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Custom LLM integrations, operational agents, and flow pipelines.",
    badge: "92% Cost Saved",
    color: "cyan",
    gradient: "from-blue-500/10 to-cyan-500/10 border-cyan-500/20 text-cyan-400",
    glow: "shadow-cyan-500/5",
  },
  {
    icon: Users,
    title: "Custom CRM",
    desc: "Interactive deal pipelines, customer logs, and auto follow-ups.",
    badge: "3.5x Conversion",
    color: "indigo",
    gradient: "from-indigo-500/10 to-violet-500/10 border-violet-500/20 text-violet-400",
    glow: "shadow-violet-500/5",
  },
  {
    icon: GraduationCap,
    title: "LMS Systems",
    desc: "Corporate training setups, course modules, and auto-grading quiz engines.",
    badge: "94% Completion",
    color: "emerald",
    gradient: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400",
    glow: "shadow-emerald-500/5",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Dot-matrix tech grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      {/* Floating gradient blur orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-[550px] h-[550px] rounded-full blur-[140px] animate-float opacity-70"
          style={{ background: "var(--gradient-orb-1)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full blur-[140px] animate-float-delay opacity-70"
          style={{ background: "var(--gradient-orb-2)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex-1 flex flex-col justify-center items-center">
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] mb-8 font-semibold tracking-wide border shadow-xs"
          style={{
            color: "var(--text-secondary)",
            background: "var(--bg-card)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Accepting new client projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight leading-[1.08] mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Next-gen AI solutions
          <br />
          <span className="gradient-text font-black">& digital ecosystems</span>
        </motion.h1>

        {/* Subhead Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We engineer custom AI automation, client CRM portals, corporate LMS spaces, and robust web applications. Scale your workflows with clean, intelligent digital architecture.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 text-xs font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
          >
            Get Started
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-6 py-3.5 text-xs font-semibold hover:text-white transition-colors duration-300 border border-transparent rounded-full hover:border-white/10 hover:bg-white/5"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* 3-Column Solution Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left w-full max-w-4xl"
        >
          {solutionCards.map((card, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${card.glow}`}
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl bg-linear-to-br ${card.gradient} flex items-center justify-center`}>
                    <card.icon size={16} strokeWidth={2} />
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border bg-white/5" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white mb-1.5">{card.title}</h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
