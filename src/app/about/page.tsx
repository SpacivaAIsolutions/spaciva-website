"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Hourglass, HelpCircle, CheckCircle, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "We build secure systems with strict data protection, audit logs, and compliance standards (HIPAA/GDPR readiness) built into our custom CRM and database architectures.",
  },
  {
    icon: Cpu,
    title: "Engineering Excellence",
    desc: "We leverage robust frameworks like Next.js, FastAPIs, Python, and cloud infrastructure (AWS/Vercel) to deliver high-performance, optimized systems that scale with ease.",
  },
  {
    icon: Hourglass,
    title: "Iterative Agile Delivery",
    desc: "We prioritize velocity and transparency. We ship code weekly, maintain open channels, and build testable MVPs early so clients see progress and iterate fast.",
  },
  {
    icon: Users,
    title: "Dedicated Partner Support",
    desc: "We function as an extension of your technical team, offering direct communication lines with software architects, codebase documentation, and maintenance agreements.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              Our Agency
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineered for Enterprise <br />
              <span className="gradient-text font-black">Quality & Trust</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              SPACIVA builds advanced technical solutions that solve complex operations challenges. We combine AI engineering with robust software ecosystems to deliver measurable impact.
            </p>
          </div>
        </AnimatedSection>

        {/* Company Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <AnimatedSection delay={0.05}>
            <div
              className="p-8 rounded-2xl border h-full flex flex-col justify-between"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Core Mission</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  We bridge the gap between complex artificial intelligence capabilities and day-to-day business systems. Our goal is to replace manual overhead, optimize database operations, and build custom customer portals that streamline workflows.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle size={14} />
                <span>Custom deliverables built with production-ready standards.</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              className="p-8 rounded-2xl border h-full flex flex-col justify-between"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Quality Guarantee</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  We do not use cookie-cutter website templates or generic software layers. Everything we build—from LLM prompt models to full-stack dashboard structures—is coded custom from scratch, fully documented, and verified under production loads.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <CheckCircle size={14} />
                <span>100% custom-engineered code ownership for clients.</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Core Values Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>How We Build Trust</h2>
            <p className="text-xs max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              We hold our development processes to rigorous technical standards to guarantee reliability.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {coreValues.map((val, i) => (
            <AnimatedSection key={val.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl border flex items-start gap-4 transition-all duration-300 hover:shadow-md"
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
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-electric-blue border border-blue-500/20 shrink-0">
                  <val.icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold mb-2" style={{ color: "var(--text-primary)" }}>{val.title}</h4>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {val.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing CTA */}
        <AnimatedSection>
          <div
            className="p-10 rounded-3xl border text-center relative overflow-hidden"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Ready to Discuss Your Project?</h3>
            <p className="text-xs max-w-md mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Connect with our solutions architects to map out custom dashboards, CRM integration layers, or AI workflow systems.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              Talk to Our Team
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
