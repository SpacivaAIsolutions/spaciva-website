"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function DubaiAISolutionPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Middle East
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              AI Company in Dubai <br />
              <span className="gradient-text font-black">SPACIVA AI & Web Solutions</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Partner with a leading AI company in Dubai. We engineer custom artificial intelligence systems, bilingual CRM databases, and enterprise LMS platforms.
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
                <Globe size={18} />
              </div>
              <h3 className="text-xs font-bold text-white mb-2">Bilingual AI Assistants</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We build intelligent automation agents that process queries in both Arabic and English, streamlining Middle East sales and user interactions.
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
                <Shield size={18} />
              </div>
              <h3 className="text-xs font-bold text-white mb-2">Enterprise CRM & Database</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Custom pipeline structures and tracking databases optimized for Dubai real estate, retail, and logistics sectors with zero seat-license fees.
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
              <h3 className="text-xs font-bold text-white mb-2">Web Application Blueprint</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Responsive, ultra-fast Next.js interfaces delivering premium web capabilities and rapid loads for international visitors.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Why Dubai Businesses Choose Us */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <h2 className="text-xl font-bold text-white mb-6">Why Partner with SPACIVA Dubai?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Full Source Code Ownership:</strong> Host locally or in your private regional cloud, avoiding vendor dependencies.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Local Integration Ready:</strong> Integrate SMS gateway nodes, payment layers, and local CRM database backups.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">High-Speed Performance:</strong> Next.js-driven design providing quick load times under 1.5 seconds.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  <strong className="text-white">Experienced Engineers:</strong> Direct communication with senior software architects and ML developers.
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
