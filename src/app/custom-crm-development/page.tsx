import type { Metadata } from "next";
import { CheckCircle, ArrowRight, LayoutGrid, Zap, Users, ShieldAlert, BadgeCheck, LineChart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Custom CRM Development Company India | Sales Pipeline & Lead Tracking | SPACIVA",
  description: "SPACIVA builds tailored CRM systems with Kanban pipelines, automated WhatsApp & email follow-ups, and role-based dashboards — no per-seat licensing fees. Ahmedabad, India.",
  keywords: [
    "custom CRM development India",
    "CRM software company Ahmedabad",
    "sales pipeline CRM",
    "lead tracking software India",
    "WhatsApp CRM integration",
    "custom CRM developer"
  ],
};

const capabilities = [
  {
    icon: LayoutGrid,
    title: "Drag-and-Drop Kanban Deal Boards",
    desc: "Visualize every deal across custom pipeline stages. Move cards with a click, add notes, attach documents, and set reminders — all in one place designed for your workflow.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Zap,
    title: "Automated Follow-Up Sequences",
    desc: "Set rules that automatically send WhatsApp messages, emails, or SMS when a lead reaches a specific stage, goes cold for X days, or meets custom criteria. Never let a hot lead slip again.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Users,
    title: "Role-Based Access & Team Management",
    desc: "Assign leads to agents, set viewing permissions by role, and track individual and team performance. Managers see everything; agents see only their accounts.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: ShieldAlert,
    title: "Lead Scoring & Qualification",
    desc: "Define scoring rules based on lead source, engagement, company size, or any custom field. Automatically surface your hottest prospects so your team focuses where it matters.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    desc: "Live dashboards showing conversion rates by stage, agent performance, pipeline value, and monthly trends. Export to CSV or PDF for board presentations.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
];

const whoThisIsFor = [
  { name: "Real estate agencies", desc: "Managing dozens of property inquiries simultaneously" },
  { name: "B2B sales teams", desc: "Navigating complex multi-stage deal cycles" },
  { name: "Financial advisors", desc: "Needing a compliant, auditable client record system" },
  { name: "Marketing agencies", desc: "Managing multiple client accounts and active campaigns" },
  { name: "Healthcare providers", desc: "Tracking patient pipelines, appointments, and referrals" },
];

export default function CustomCRMDevelopmentPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/4 right-1/3 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA CRM Development
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              A CRM Built Around Your Sales <br className="hidden sm:inline" />
              Process — <span className="gradient-text">Not the Other Way Around</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We engineer custom CRM platforms that mirror your deal flow, automate follow-ups, and give your team live pipeline visibility — without per-seat licensing fees or features you&apos;ll never use.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Book a CRM Demo <ArrowRight size={15} />
              </a>
              <a
                href="/#portfolio"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                View Our CRM Projects →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Problem Description Panel */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center" style={{ color: "var(--text-primary)" }}>The Problem With Off-The-Shelf CRMs</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-center max-w-3xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
              Salesforce, HubSpot, and Zoho are built for the average business — not yours. You end up paying for dozens of features you don&apos;t need while missing the ones specific to your industry. Worse, you&apos;re locked into their recurring seat licensing fees forever.
            </p>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed text-center max-w-3xl mx-auto" style={{ color: "var(--color-electric-blue)" }}>
              SPACIVA builds CRMs from scratch that match your exact pipeline stages, team structure, and reporting needs — at a one-time cost you own permanently. We connect your CRM to WhatsApp Business API, Gmail, Google Calendar, Stripe, and any third-party tools you already use.
            </p>
          </div>
        </AnimatedSection>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-0.5 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${c.color}`}>
                  <c.icon size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Who This Is For */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Who This Is For</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Tailored customer relationships engineered for specific sector workflows.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {whoThisIsFor.map((item) => (
              <div key={item.name} className="p-5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                <p className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Comparison Board */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
              <h3 className="text-sm font-bold mb-4" style={{ color: "var(--text-secondary)" }}>Generic CRM (Salesforce, HubSpot)</h3>
              <ul className="space-y-3">
                {[
                  "Ongoing $50–$300/user/month seat license fees",
                  "Forced workflows that do not fit your sales process",
                  "Limited customization without hiring expensive platform consultants",
                  "Permanent vendor dependency and restricted data portability concerns"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--text-muted)" }}>
                    <span className="text-rose-400 mt-0.5 font-bold">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-electric-blue/20" style={{ background: "rgba(59,130,246,0.03)" }}>
              <h3 className="text-sm font-bold mb-4 text-electric-blue">Custom CRM by SPACIVA</h3>
              <ul className="space-y-3">
                {[
                  "One-time build investment, zero recurring per-seat fees",
                  "100% tailored precisely to your exact sales pipeline and deal flows",
                  "Full source code ownership — host in your secure server environment",
                  "Direct collaboration with senior engineers, no outsourcing runarounds"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[11px]" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Build Your Custom CRM Today</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Inquire about building a tailored sales ecosystem. We architect, code, and deploy to your spec with zero recurring seat fees.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Inquire About Custom CRM <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
