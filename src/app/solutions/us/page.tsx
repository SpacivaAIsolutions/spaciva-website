"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function USSolutionsPage() {
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
              Enterprise AI Engineering & <br />
              <span className="gradient-text font-black">Custom CRM/LMS Platforms US</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Engineering custom artificial intelligence systems, HIPAA-compliant databases, and custom sales pipeline CRMs for high-growth US businesses.
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
                Secure data storage configurations, encryption standards, and compliance layouts for healthcare and digital health software modules.
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
              <h3 className="text-xs font-bold text-white mb-2">CRM Lead Pipeline Boards</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Drag-and-drop Kanban deal sheets, automated follow-up sequences, and CRM integrations (Stripe, HubSpot API) with zero markup seat costs.
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
                Semantic invoice search engines, automated customer ticketing responders, and customized corporate LMS quiz interfaces.
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
            <h2 className="text-xl font-bold text-white mb-6">Why Partner with SPACIVA US?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Full Source Code Ownership:</strong> Host locally or in your private AWS US-East account, avoiding vendor lock-in.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">High-Speed API Interfaces:</strong> Serverless Next.js structures delivering dynamic content speeds under 1.5 seconds.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">U.S. Integrations Ready:</strong> Complete integration structures for Stripe, Plaid, Twilio, HubSpot, and Salesforce.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Architect Advisory Syncs:</strong> Direct Slack and scoping channels with senior software and ML developers.
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
