"use client";

import { CheckCircle, ArrowRight, Zap, Brain, Workflow } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Brain,
    title: "Custom LLM Agents",
    desc: "GPT-4, Claude, and Gemini-powered agents trained on your business data to handle customer queries, internal workflows, and data extraction automatically.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Workflow,
    title: "End-to-End Pipeline Automation",
    desc: "Connect CRMs, ERPs, spreadsheets, and SaaS tools through intelligent orchestration layers. Eliminate manual data entry and repetitive task bottlenecks.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Zap,
    title: "Real-Time Event Triggers",
    desc: "Build event-driven automation that reacts to form submissions, payment events, support tickets, and IoT signals — all under 300ms average latency.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const useCases = [
  "Automated invoice extraction and accounting reconciliation",
  "AI-powered customer support and lead qualification agents",
  "Internal HR onboarding and training workflow automation",
  "Real-time inventory alerts and reorder trigger systems",
  "Email and WhatsApp campaign orchestration pipelines",
  "Multi-source data aggregation and reporting dashboards",
];

export default function AIAutomationSolutionsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA AI Services
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AI Automation Solutions <br />
              <span className="gradient-text font-black">for Modern Businesses</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              SPACIVA engineers intelligent AI automation solutions that reduce operational costs by up to 92%, eliminate repetitive manual tasks, and scale your business workflows without scaling headcount.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Start Your Automation Project <ArrowRight size={15} />
              </a>
              <a href="/solutions" className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                View All Solutions →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div
                className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.background = "var(--bg-card)"; }}
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${f.color}`}>
                  <f.icon size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Use Cases */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              Common AI Automation Use Cases We Build
            </h2>
            <p className="text-xs mb-8" style={{ color: "var(--text-secondary)" }}>
              Trusted by startups and enterprises across India, UAE, UK, and USA.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <div key={uc} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{uc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
            {[
              { stat: "92%", label: "Average cost reduction per automated workflow" },
              { stat: "210ms", label: "Average LLM agent response latency" },
              { stat: "40+", label: "Enterprise automation pipelines delivered" },
              { stat: "24 hrs", label: "Typical MVP prototype deployment time" },
            ].map((item) => (
              <div key={item.stat} className="text-center p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
                <p className="text-2xl font-extrabold gradient-text mb-1">{item.stat}</p>
                <p className="text-[10px] leading-tight" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Why SPACIVA */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Why Choose SPACIVA for AI Automation?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Full Source Code Ownership", body: "You receive the complete codebase — no vendor lock-in, no monthly per-seat fees." },
                { title: "Technology-Agnostic Approach", body: "We integrate with your existing tools: Slack, Notion, HubSpot, Salesforce, custom ERPs, and more." },
                { title: "Production-Grade Security", body: "SOC2-aligned practices, encrypted data pipelines, and role-based access control on every deployment." },
                { title: "Ongoing Maintenance Plans", body: "Optional retainer packages for monitoring, model updates, and feature expansions post-launch." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-electric-blue shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{item.title}:</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Ready to Automate Your Business?</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Tell us your workflow challenge. We scope, design, and deploy your AI automation solution end-to-end.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Free Discovery Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
