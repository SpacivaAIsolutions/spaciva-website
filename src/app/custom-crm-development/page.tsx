import type { Metadata } from "next";
import { ArrowRight, CheckCircle, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom CRM Development Company India | Sales Pipeline | SPACIVA",
  description: "SPACIVA builds tailored CRM systems with Kanban pipelines, automated WhatsApp & email follow-ups, and role-based dashboards — no per-seat licensing fees.",
};

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
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">CRM Engineering</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Tailored CRM <br />
            <span className="italic text-slate-400 font-serif">Dashboards.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We engineer custom CRM platforms that mirror your deal flow, automate follow-ups, and give your team live pipeline visibility — without per-seat licensing fees or features you'll never use.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Book a CRM Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">The Problem With Off-The-Shelf</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              Salesforce, HubSpot, and Zoho are built for the average business — not yours. You end up paying for dozens of features you don't need while missing the ones specific to your industry. Worse, you're locked into their recurring seat licensing fees forever.
            </p>
            <p>
              SPACIVA builds CRMs from scratch that match your exact pipeline stages, team structure, and reporting needs — at a one-time cost you own permanently. We connect your CRM to WhatsApp Business API, Gmail, Google Calendar, Stripe, and any third-party tools you already use.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-slate-400 w-4">0{i + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{c.title}</h3>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed pl-8">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Built For Specific Workflows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoThisIsFor.map((item) => (
              <div key={item.name} className="flex flex-col border-l border-slate-200 pl-6 py-2">
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{item.name}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-400 mb-8">Generic CRM <br/><span className="text-sm font-medium italic text-slate-300">Salesforce, HubSpot</span></h3>
              <ul className="space-y-6">
                {[
                  "Ongoing $50–$300/user/month seat license fees",
                  "Forced workflows that do not fit your sales process",
                  "Limited customization without expensive consultants",
                  "Vendor dependency and data portability concerns"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-slate-500 font-medium">
                    <X className="text-slate-300 shrink-0 mt-1" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">Custom CRM <br/><span className="text-sm font-medium italic text-slate-400">by SPACIVA</span></h3>
              <ul className="space-y-6">
                {[
                  "One-time build investment, zero recurring seat fees",
                  "100% tailored precisely to your exact deal flows",
                  "Full source code ownership — host on your servers",
                  "Direct collaboration with senior engineers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-slate-900 font-bold">
                    <CheckCircle className="text-slate-900 shrink-0 mt-1" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6">
                Build Your <br/><span className="italic text-slate-400 font-serif">Custom CRM.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Inquire about building a tailored sales ecosystem. We architect, code, and deploy to your spec with zero recurring seat fees.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Inquire About Custom CRM
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
