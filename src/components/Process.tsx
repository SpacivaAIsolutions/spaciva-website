"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We deep-dive into your business goals, target market, and technical landscape to define the perfect solution scope — no fluff, just clarity.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Our architects craft a data-backed roadmap with clear milestones, technology decisions, and measurable success metrics unique to your industry.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Agile development sprints with weekly demos, continuous feedback integration, and transparent progress tracking until your platform goes live.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "Post-launch performance monitoring, iterative optimization, and feature expansions — we stay with you as your business grows.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--color-electric-blue)" }}>
            Our Process
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            How we deliver results
          </h2>
          <p className="text-sm max-w-xl mx-auto text-center mb-16 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A proven four-step process refined across 30+ projects — from initial scoping to production launch and beyond.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 h-px"
            style={{
              left: "calc(12.5% + 28px)",
              right: "calc(12.5% + 28px)",
              background: "var(--border-subtle)",
            }}
          />

          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="relative">
                {/* Number box */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 shrink-0"
                  style={{ background: "var(--bg-navy)", boxShadow: "var(--shadow-md)" }}
                >
                  <span className="text-base font-extrabold text-white font-mono tracking-tight">{step.num}</span>
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
