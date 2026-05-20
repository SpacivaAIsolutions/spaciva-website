"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function UKSolutionsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA United Kingdom
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AI Software Engineering & <br />
              <span className="gradient-text font-black">Custom CRM/LMS in the UK</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Building secure custom database architectures, GDPR-compliant AI workflows, and bespoke corporate training portals for UK companies.
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
              <h3 className="text-xs font-bold text-white mb-2">GDPR & Data Compliance</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Data isolation, strict access logs, and encrypted user tracking profiles built in line with UK Data Protection regulations.
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
              <h3 className="text-xs font-bold text-white mb-2">Workforce LMS Platforms</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Custom learning systems containing randomized quiz engines, automated grading, and compliance certificates for professional services.
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
              <h3 className="text-xs font-bold text-white mb-2">Workflow Automation Agents</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Automate invoicing extractions, client follow-up sequences, and customer request parsing to reduce operational overhead.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Why UK Businesses Choose Us */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <h2 className="text-xl font-bold text-white mb-6">Why Partner with SPACIVA UK?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Full Source Code Ownership:</strong> Host on your cloud account, avoiding recurring license margins.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">GDPR Compliant Infrastructures:</strong> Encrypted data residency options on AWS London (eu-west-2).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Next.js Speed Performance:</strong> Page speed load times optimized under 1.5 seconds for higher conversions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Direct Advisory Support:</strong> Direct syncs with software architects and technical leads.
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
