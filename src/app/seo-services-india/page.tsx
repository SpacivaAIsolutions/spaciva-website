"use client";

import { Search, CheckCircle, ArrowRight, TrendingUp, FileText, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: TrendingUp,
    title: "Technical SEO Audits",
    desc: "Comprehensive crawl analysis, Core Web Vitals optimization, structured data implementation, and site architecture improvements for maximum crawlability.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
  {
    icon: FileText,
    title: "Content Strategy & Authority Building",
    desc: "Keyword-targeted content calendars, long-form pillar pages, cluster topic mapping, and entity optimization to establish topical authority in your niche.",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  },
  {
    icon: Globe,
    title: "Local & International SEO",
    desc: "Google Business Profile optimization, local citation building, hreflang implementation, and geo-targeted landing page strategies for multi-market visibility.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
];

const deliverables = [
  "Full technical SEO audit with prioritized fix roadmap",
  "Keyword research across informational, commercial, and transactional intent",
  "On-page optimization for existing and new content",
  "Core Web Vitals improvement (LCP, FID, CLS)",
  "Schema markup for products, services, FAQs, and reviews",
  "Backlink acquisition from high-authority industry sources",
  "Monthly ranking report with keyword position tracking",
  "Google Search Console and GA4 performance dashboards",
];

export default function SEOServicesIndiaPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 right-1/3 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA SEO Services · India
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SEO Services India <br />
              <span className="gradient-text font-black">Data-Driven Search Growth Engine</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              SPACIVA is a technical SEO agency in India delivering measurable organic growth through data-backed keyword strategy, content authority building, and Core Web Vitals optimization. We turn search engines into your most reliable lead source.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Get a Free SEO Audit <ArrowRight size={15} />
              </a>
              <a href="/#portfolio" className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                See SEO Case Studies →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Services */}
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

        {/* Deliverables */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              What Our SEO Retainer Includes
            </h2>
            <p className="text-xs mb-8" style={{ color: "var(--text-secondary)" }}>
              Transparent deliverables, measurable KPIs, and monthly performance reports — no vanity metrics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
            {[
              { stat: "3.5×", label: "Average organic traffic growth in 6 months" },
              { stat: "85+", label: "Top-10 keyword positions delivered" },
              { stat: "40%", label: "Average reduction in cost per lead" },
              { stat: "48hrs", label: "SEO audit turnaround time" },
            ].map((item) => (
              <div key={item.stat} className="text-center p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
                <p className="text-2xl font-extrabold gradient-text mb-1">{item.stat}</p>
                <p className="text-[10px] leading-tight" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Why SPACIVA SEO */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Why SPACIVA for SEO in India?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Technical + Content Combined", body: "Most agencies do one or the other. We pair technical site health with content strategy for compounding organic results." },
                { title: "Developer-Level Technical SEO", body: "Our team writes the fixes directly — no back-and-forth with separate dev teams. Faster implementation means faster ranking gains." },
                { title: "Industry-Specific Keyword Intelligence", body: "We research your competitive landscape, SERP features, and search intent before writing a single piece of content." },
                { title: "Transparent Monthly Reporting", body: "Live Search Console dashboards, position tracking reports, and monthly strategy calls — you always know exactly what is happening." },
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
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Start Ranking Higher on Google</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Request a free technical SEO audit. We will analyze your site, identify quick wins, and present a growth roadmap with projected traffic estimates.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get My Free SEO Audit <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
