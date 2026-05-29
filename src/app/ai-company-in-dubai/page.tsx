import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Bot, Shield, Globe, Award, Layers, CreditCard } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Solutions Company in Dubai | Custom AI Agents & CRM | SPACIVA",
  description: "SPACIVA provides enterprise AI automation, custom CRM platforms, and LMS development for businesses in Dubai and the UAE. India-based engineering, UAE market expertise.",
  keywords: [
    "AI company Dubai",
    "AI solutions UAE",
    "custom AI development Dubai",
    "CRM development Dubai",
    "AI automation UAE",
    "enterprise software company Dubai",
    "LMS platform UAE"
  ],
};

const pillars = [
  {
    icon: Bot,
    title: "AI Automation for UAE Enterprises",
    desc: "From real estate lead qualification agents (built for the unique Dubai property market) to Arabic-English bilingual chatbots for customer service, we engineer AI systems that understand the UAE context.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Layers,
    title: "Custom CRM for Dubai Real Estate",
    desc: "Dubai's real estate and trading sectors have unique pipeline requirements. Our CRMs handle multi-currency deals, Arabic-English contact records, WhatsApp-first communication workflows, and UAE VAT-compliant invoice generation.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Award,
    title: "LMS for UAE Corporate Training",
    desc: "We build bilingual (Arabic/English) corporate training platforms with compliance tracking suited to UAE labour law requirements and KHDA/ADEK educational standards.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: Globe,
    title: "Web Development for Dubai Businesses",
    desc: "High-performance, mobile-first web applications designed for Dubai's market — supporting Arabic RTL layouts, regional platform APIs (noon, Careem), and local CDN delivery.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const reasons = [
  { title: "Bilingual Ready", body: "Arabic & English context integration built natively into bots and UI systems." },
  { title: "UAE Timezone Friendly", body: "Our engineering cycles coordinate seamlessly with UAE Gulf Standard Time (GST)." },
  { title: "VAT Compliant Structures", body: "Automatic tax math and documentation designed around Federal Tax Authority (FTA) guidelines." },
  { title: "Regional Gateways Integration", body: "Connect seamlessly with PayTabs, Telr, Stripe MENA, noon, and Careem APIs." },
];

const industries = [
  "Real Estate & Property Management",
  "Trading & Import/Export",
  "Healthcare & Wellness Centres",
  "Hospitality & Luxury Retail",
  "Financial Services & Fintech",
  "Logistics & Supply Chain",
];

export default function DubaiAISolutionPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Middle East
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              AI & Enterprise Software Solutions <br className="hidden sm:inline" />
              for Dubai&apos;s <span className="gradient-text">Fastest-Growing Businesses</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              SPACIVA engineers custom AI automation systems, CRM platforms, and web applications for UAE companies — combining world-class technical expertise with deep understanding of the Dubai market.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Book a Dubai Consultation <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                View Our Work →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-center" style={{ color: "var(--text-primary)" }}>Why Dubai Businesses Choose SPACIVA</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Dubai&apos;s business environment moves fast. Your technology should too. We deliver custom AI and software systems built for the specific demands of UAE companies — multilingual support, GDPR-adjacent data compliance, and integration with regional platforms like noon, Careem, and UAE government APIs.
            </p>
          </div>
        </AnimatedSection>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-0.5 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${p.color}`}>
                  <p.icon size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Dubai Industries */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Dubai Industries We Serve</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Engineering systems for localized business vectors across the Middle East.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-20">
            {industries.map((ind) => (
              <div key={ind} className="p-4 rounded-xl border text-center font-bold text-xs bg-[var(--bg-card)] border-[var(--border-subtle)]" style={{ color: "var(--text-primary)" }}>
                {ind}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Feature/Trust Points */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Engineered Around UAE Regional Requirements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{item.title}:</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Engagement Info */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20 text-center" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h3 className="text-base sm:text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>Our UAE Engagement Model</h3>
            <p className="text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We work with UAE clients remotely through a streamlined flow: discovery scoping video calls (GST friendly), signed Non-Disclosure Agreements (NDA), clear fixed-price milestones, weekly demonstration check-ins, and source code transfer with final technical documentation. Invoices can be issued in AED.
            </p>
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Start Your Dubai Business Expansion</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Hire SPACIVA to design and deploy custom bilingual AI systems and high-converting web applications.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Request a Scoping Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
