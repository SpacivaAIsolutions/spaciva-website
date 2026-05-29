"use client";

import { Users, CheckCircle, ArrowRight, BarChart2, Bell, Lock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: BarChart2,
    title: "Visual Deal Pipeline Boards",
    desc: "Drag-and-drop Kanban stages customized to your exact sales process — from first contact to closed deal — with real-time analytics and conversion metrics.",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  },
  {
    icon: Bell,
    title: "Automated Follow-Up Sequences",
    desc: "Time-based and behavior-triggered email, WhatsApp, and SMS follow-ups that keep leads warm without manual intervention from your sales team.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Lock,
    title: "Role-Based Access & Audit Logs",
    desc: "Granular permissions for multi-team environments — sales reps, managers, and executives each see exactly what they need with full activity logging.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
];

const capabilities = [
  "Custom contact and company database schemas",
  "Lead scoring models based on behavioral signals",
  "Integrated email tracking and open-rate analytics",
  "Native API integrations with Stripe, Twilio, and HubSpot",
  "Multi-currency and multi-language support",
  "Automated PDF contract and proposal generation",
  "Sales forecasting with AI-powered win probability",
  "Mobile-responsive progressive web app delivery",
];

export default function CustomCRMDevelopmentPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/4 right-1/3 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA CRM Development
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Custom CRM Development <br />
              <span className="gradient-text font-black">Built for Your Sales Process</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Stop forcing your team into generic CRM templates. SPACIVA builds custom CRM systems tailored precisely to your sales workflow, data structure, and team hierarchy — no per-seat licensing fees, ever.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Get a CRM Quote <ArrowRight size={15} />
              </a>
              <a href="/solutions" className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                See Our Work →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Features */}
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

        {/* Capabilities Checklist */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              Everything Your Custom CRM Can Include
            </h2>
            <p className="text-xs mb-8" style={{ color: "var(--text-secondary)" }}>
              Every feature is built to spec — nothing generic, nothing bloated.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{cap}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Vs Comparison */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="p-6 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
              <h3 className="text-sm font-bold mb-4" style={{ color: "var(--text-secondary)" }}>Generic CRM (Salesforce, HubSpot)</h3>
              <ul className="space-y-3">
                {["$50–$300/user/month license fees", "Forced workflows that don't fit your process", "Limited customization without expensive developers", "Vendor dependency and data portability concerns"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--text-muted)" }}>
                    <span className="text-rose-400 mt-0.5">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-electric-blue/20" style={{ background: "rgba(59,130,246,0.03)" }}>
              <h3 className="text-sm font-bold mb-4 text-electric-blue">Custom CRM by SPACIVA</h3>
              <ul className="space-y-3">
                {["One-time build cost, zero per-seat recurring fees", "100% tailored to your exact sales workflow", "Full source code ownership — deploy anywhere", "Direct engineer support and unlimited iterations"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Build Your Custom CRM Today</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Share your sales process and team size. We will scope a custom CRM solution and provide a fixed-price proposal within 48 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Request a Free CRM Proposal <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
