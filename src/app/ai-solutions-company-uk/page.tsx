import type { Metadata } from "next";
import { CheckCircle, ArrowRight, ShieldCheck, CreditCard, Clock, GraduationCap, Bot, FileText, LayoutGrid, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Solutions Company UK | Custom AI Agents & Enterprise Software | SPACIVA",
  description: "SPACIVA delivers custom AI automation, CRM development, and LMS platforms for UK businesses. India-based engineering team, UK-market expertise, GDPR-ready architectures.",
  keywords: [
    "AI solutions company UK",
    "AI automation UK",
    "custom CRM development UK",
    "LMS development UK",
    "enterprise software UK",
    "AI agency UK",
    "offshore AI development UK"
  ],
};

const valueProps = [
  {
    icon: ShieldCheck,
    title: "GDPR-Ready by Design",
    desc: "All systems we build include GDPR compliance architecture: data residency controls (mapping eu-west-2 region rules), right-to-erasure workflows, audit logging, and consent management.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: CreditCard,
    title: "Significant Cost Advantage",
    desc: "London agencies typically charge £150–£300/hour. SPACIVA delivers high-performance Next.js engineering, LLM development, and CRM architecture at a fraction of that cost.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Clock,
    title: "UK Business Hours Support",
    desc: "Our team coordinates across IST/GMT time zones with structured morning and afternoon sync windows. UK clients get same-day responses and weekly video calls.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: GraduationCap,
    title: "Sector Compliance Expertise",
    desc: "We have delivered compliant projects incorporating healthcare NHS-adjacent protocols, fintech FCA considerations, and education Ofsted-adjacent structures.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const deliverables = [
  { title: "AI Document Processing", desc: "Automated pipelines for law firms, legal tech, and accountancies." },
  { title: "Custom CRMs", desc: "Pipeline and lead management systems for UK estate agents and brokerages." },
  { title: "CPD Tracking LMS", desc: "Corporate LMS platforms with Continued Professional Development (CPD) tracking." },
  { title: "SEO & Growth Systems", desc: "Content marketing and lead generation funnels optimized for UK SMEs." },
  { title: "MVP SaaS Builds", desc: "Full-stack SaaS development and API integrations for UK-based startups." },
];

export default function UKAISolutionPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA United Kingdom
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Enterprise AI & Software Solutions <br className="hidden sm:inline" />
              Built for <span className="gradient-text">UK Businesses</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              UK companies partner with SPACIVA to build custom AI automation systems, CRM platforms, and web applications — at a fraction of London agency rates, with no compromise on quality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Schedule a UK Consultation <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                View Case Studies →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Why UK Businesses Choose Us */}
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

        {/* What We Build for UK Clients */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>What We Build for UK Clients</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Tailored systems mapping precise business needs across the UK.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {deliverables.map((item) => (
              <div key={item.title} className="p-5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Engagement Info */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20 text-center" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h3 className="text-base sm:text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>Our UK Engagement Model</h3>
            <p className="text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              All UK projects begin with a no-obligation scoping call. We produce a detailed technical scope document within 48 hours, agree on fixed-price milestones, and provide a dedicated Slack channel for daily syncs. Invoices are issued in GBP.
            </p>
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Accelerate Your Workflow Efficiency</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Hire SPACIVA to deliver production-ready software solutions with full source code ownership.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Free UK Consultation <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
