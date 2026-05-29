import type { Metadata } from "next";
import { CheckCircle, ArrowRight, ShieldCheck, CreditCard, Clock, FileText, Bot, Layers, GraduationCap, LayoutGrid } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Solutions Company USA | Custom AI Agents & Software Development | SPACIVA",
  description: "SPACIVA builds custom AI automation systems, CRM platforms, and LMS solutions for US businesses — at offshore rates with Silicon Valley quality. HIPAA-ready architectures available.",
  keywords: [
    "AI solutions company USA",
    "AI automation United States",
    "custom CRM development USA",
    "LMS platform USA",
    "offshore software development USA",
    "AI agency America",
    "custom software development company USA"
  ],
};

const valueProps = [
  {
    icon: ShieldCheck,
    title: "HIPAA-Ready Architectures",
    desc: "For US healthcare clients, we design systems with HIPAA compliance in mind: encrypted data at rest and in transit, role-based access controls, audit logs, BAA agreement support, and PHI protocols.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: CreditCard,
    title: "60–70% Cost Savings",
    desc: "US agencies typically charge $150–$350/hour for senior engineering work. SPACIVA delivers outstanding Next.js and LLM development at significantly lower rates — making enterprise-grade AI highly accessible.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Clock,
    title: "US Timezone Availability",
    desc: "We maintain overlap hours with EST, CST, and PST time zones. US clients get morning video calls, same-day Slack responses, and structured bi-weekly sprint reviews.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: FileText,
    title: "US-Standard Documentation",
    desc: "Every project is documented to US enterprise standards: technical specifications, API documentation, deployment runbooks, and clear guides — all in plain, actionable English.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const sectors = [
  { name: "Healthcare & Medtech", desc: "AI intake systems, patient communication bots, HIPAA data handling" },
  { name: "Real Estate", desc: "Lead qualification agents, custom CRM platforms for brokerages" },
  { name: "Legal & Professional", desc: "Document processing AI, contract review and compliance pipelines" },
  { name: "EdTech", desc: "LMS platforms, AI tutoring agents, course marketplace development" },
  { name: "SaaS Startups", desc: "MVP development, backend API architecture, AI feature integration" },
  { name: "E-commerce", desc: "Personalization engines, inventory automation, support bots" },
];

export default function USAISolutionPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA United States
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Custom AI & Enterprise Software — <span className="gradient-text">At a Fraction of US Rates</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              American companies partner with SPACIVA to build production-grade AI systems, CRM platforms, and web applications — with US-standard quality, documentation, and communication.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Book a US Consultation <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Download Our Portfolio →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Why US Companies Choose us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {valueProps.map((p, i) => (
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

        {/* US Sectors We Serve */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>US Sectors We Serve</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Engineering compliant business systems for high-growth American markets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {sectors.map((item) => (
              <div key={item.name} className="p-5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                <p className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* US Engagement Info */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20 text-center" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h3 className="text-base sm:text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>Our US Engagement Model</h3>
            <p className="text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We work on clear fixed-price milestones with bi-weekly sprint demos. Contracts are written in USD, invoiced via Stripe or international wire, and governed under clear written agreements. Full source code is pushed to your GitHub repository at each milestone with a final technical handover call.
            </p>
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Launch Your Custom Software Project</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Partner with SPACIVA to achieve Silicon Valley quality engineering at a fraction of standard domestic rates.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book a US Consultation <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
