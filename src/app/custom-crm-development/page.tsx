import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom CRM Development Company India | Sales Pipeline | SPACIVA",
  description: "SPACIVA builds tailored CRM systems with Kanban pipelines, automated WhatsApp & email follow-ups, and role-based dashboards — no per-seat licensing fees.",
  alternates: {
    canonical: "/custom-crm-development",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const capabilities = [
  {
    title: "Kanban Deal Boards",
    desc: "Visualize every deal across custom pipeline stages. Move cards with a click, add notes, attach documents, and set reminders — all in one place designed for your workflow.",
  },
  {
    title: "Automated Follow-Up Sequences",
    desc: "Set rules that automatically send WhatsApp messages, emails, or SMS when a lead reaches a specific stage, goes cold for X days, or meets custom criteria.",
  },
  {
    title: "Role-Based Access",
    desc: "Assign leads to agents, set viewing permissions by role, and track individual and team performance. Managers see everything; agents see only their accounts.",
  },
  {
    title: "Lead Scoring",
    desc: "Define scoring rules based on lead source, engagement, company size, or any custom field. Automatically surface your hottest prospects so your team focuses where it matters.",
  },
  {
    title: "Reporting & Analytics",
    desc: "Live dashboards showing conversion rates by stage, agent performance, pipeline value, and monthly trends. Export to CSV or PDF for board presentations.",
  },
];

const whoThisIsFor = [
  { name: "Real Estate Agencies", desc: "Managing dozens of property inquiries simultaneously" },
  { name: "B2B Sales Teams", desc: "Navigating complex multi-stage deal cycles" },
  { name: "Financial Advisors", desc: "Needing a compliant, auditable client record system" },
  { name: "Marketing Agencies", desc: "Managing multiple client accounts and active campaigns" },
  { name: "Healthcare Providers", desc: "Tracking patient pipelines, appointments, and referrals" },
];

export default function CustomCRMDevelopmentPage() {
  return (
    <main className="theme-redesign relative min-h-screen pt-36 pb-24 bg-[#F7F6F2] px-5 lg:px-10 text-[#0E0E0C]" style={{ fontFamily: I }}>
      {/* Dot matrix background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,14,12,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="mb-24 max-w-4xl pt-12">
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em]" style={{ fontFamily: I }}>
              CRM Engineering
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            Tailored CRM <br />
            <span className="italic font-light text-[#6B6A65]">Dashboards.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ fontFamily: I }}>
            We engineer custom CRM platforms that mirror your deal flow, automate follow-ups, and give your team live pipeline visibility — without per-seat licensing fees or features you'll never use.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide"
            style={{ fontFamily: J }}
          >
            Book a CRM Demo
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>The Problem With Off-The-Shelf</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              Salesforce, HubSpot, and Zoho are built for the average business — not yours. You end up paying for dozens of features you don't need while missing the ones specific to your industry. Worse, you're locked into their recurring seat licensing fees forever.
            </p>
            <p>
              SPACIVA builds CRMs from scratch that match your exact pipeline stages, team structure, and reporting needs — at a one-time cost you own permanently. We connect your CRM to WhatsApp Business API, Gmail, Google Calendar, Stripe, and any third-party tools you already use.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-[#FF4D00] w-4" style={{ fontFamily: I }}>0{i + 1}</span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#6B6A65] pl-8" style={{ fontFamily: I }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Built For Specific Workflows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoThisIsFor.map((item) => (
              <div key={item.name} className="flex flex-col border-l border-black/[0.08] pl-6 py-1">
                <h3 className="text-base font-bold text-[#0E0E0C] mb-2 tracking-tight" style={{ fontFamily: J }}>{item.name}</h3>
                <p className="text-xs text-[#6B6A65] leading-relaxed" style={{ fontFamily: I }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#6B6A65] mb-6" style={{ fontFamily: J }}>Generic CRM <br /><span className="text-xs font-semibold italic text-[#BBBBBA]">Salesforce, HubSpot</span></h3>
              <ul className="space-y-4">
                {[
                  "Ongoing $50–$300/user/month seat license fees",
                  "Forced workflows that do not fit your sales process",
                  "Limited customization without expensive consultants",
                  "Vendor dependency and data portability concerns"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#6B6A65]" style={{ fontFamily: I }}>
                    <X className="text-[#BBBBBA] shrink-0 mt-0.5" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#0E0E0C] mb-6" style={{ fontFamily: J }}>Custom CRM <br /><span className="text-xs font-semibold italic text-[#FF4D00]">by SPACIVA</span></h3>
              <ul className="space-y-4">
                {[
                  "One-time build investment, zero recurring seat fees",
                  "100% tailored precisely to your exact deal flows",
                  "Full source code ownership — host on your servers",
                  "Direct collaboration with senior engineers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#0E0E0C] font-semibold" style={{ fontFamily: I }}>
                    <CheckCircle2 className="text-[#FF4D00] shrink-0 mt-0.5" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/[0.07] pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E0E0C] mb-6 leading-tight" style={{ fontFamily: J }}>
                Build Your <br /><span className="italic font-light text-[#6B6A65]">Custom CRM.</span>
              </h2>
              <p className="text-[#6B6A65] text-sm leading-relaxed max-w-xl" style={{ fontFamily: I }}>
                Inquire about building a tailored sales ecosystem. We architect, code, and deploy to your spec with zero recurring seat fees.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide shrink-0"
              style={{ fontFamily: J }}
            >
              Inquire About Custom CRM
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
