"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function USAISolutionPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA United States
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AI Solutions Company in the USA <br />
              <span className="gradient-text font-black">SPACIVA AI & Software Engineering</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Partner with a premier AI solutions company in the USA. We develop custom CRM lead systems, HIPAA-compliant digital databases, and automated AI pipelines.
            </p>
          </div>
        </AnimatedSection>

        {/* Localized Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <AnimatedSection delay={0.05}>
            <div
              className="p-6 rounded-2xl border h-full"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-electric-blue border border-blue-500/20 w-fit mb-4">
                <Shield size={18} />
              </div>
              <h3 className="text-xs font-bold text-white mb-2">HIPAA Compliance Setup</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Data security standards, custom database encryption, and audit parameters built directly for US digital health software modules.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              className="p-6 rounded-2xl border h-full"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit mb-4">
                <Award size={18} />
              </div>
              <h3 className="text-xs font-bold text-white mb-2">CRM Sales Pipeline Boards</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Drag-and-drop lead pipelines, automated outreach sequences, and local integrations with Stripe and HubSpot with zero license markup.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="p-6 rounded-2xl border h-full"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet border border-violet/20 w-fit mb-4">
                <Bot size={18} />
              </div>
              <h3 className="text-xs font-bold text-white mb-2">Autonomous AI Integration</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Semantic search nodes, auto email responder pipelines, and custom corporate LMS quiz systems.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Why US Businesses Choose Us */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <h2 className="text-xl font-bold text-white mb-6">Why Partner with SPACIVA USA?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Full Source Code Ownership:</strong> Host on your preferred cloud container, avoiding seat subscription overheads.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">U.S. Integrations Ready:</strong> Integrated structures for Stripe, Plaid, HubSpot, Salesforce, and Twilio gateways.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Ultra-Fast Next.js Loads:</strong> Optimized loading times under 1.5 seconds to maximize visitor actions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Architect Advisory Syncs:</strong> Direct access channels with our software architects and ML developers.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-4">Start Your Scoping Phase</h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <span>Connect with Our Architects</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
