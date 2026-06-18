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
    <main className="min-h-screen pt-36 pb-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-6 inline-block">
            SPACIVA United States
          </span>
          <h1 className="text-[3rem] sm:text-5xl md:text-6xl font-bold tracking-tightest leading-[1.05] mb-8 text-[#0f172a]">
            Custom AI & Enterprise Software — <br className="hidden sm:inline" />
            <span className="text-blue-600">At a Fraction of US Rates</span>
          </h1>
          <p className="text-lg sm:text-[22px] max-w-3xl mx-auto mb-10 leading-relaxed text-slate-600 font-medium tracking-tight">
            American companies partner with SPACIVA to build production-grade AI systems, CRM platforms, and web applications — with US-standard quality, documentation, and communication.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-bold text-white bg-[#0f172a] rounded-full hover:bg-blue-600 transition-colors w-full sm:w-auto"
            >
              Let's Connect <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Pillars / Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {valueProps.map((p, i) => (
             <div key={p.title} className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 group-hover:bg-blue-50 transition-colors">
                 <p.icon size={28} className="text-slate-900 group-hover:text-blue-600 transition-colors" />
               </div>
               <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{p.title}</h3>
               <p className="text-slate-600 leading-relaxed text-lg">{p.desc}</p>
             </div>
          ))}
        </div>

        {/* Sectors Grid */}
        <div className="mb-24">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">US Sectors We Serve</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Engineering compliant business systems for high-growth American markets.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {sectors.map((item) => (
               <div key={item.name} className="bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.name}</h3>
                 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Engagement Model */}
        <div className="bg-[#0f172a] rounded-[32px] p-10 md:p-16 mb-24 relative overflow-hidden shadow-2xl text-center">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-bold mb-6 text-white">Our US Engagement Model</h3>
             <p className="text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto">
               We work on clear fixed-price milestones with bi-weekly sprint demos. Contracts are written in USD, invoiced via Stripe or international wire, and governed under clear written agreements. Full source code is pushed to your GitHub repository at each milestone with a final technical handover call.
             </p>
           </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#0f172a]">Launch Your Custom Software Project</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Partner with SPACIVA to achieve Silicon Valley quality engineering at a fraction of standard domestic rates.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-300 w-full sm:w-auto min-w-[200px]"
          >
            Let's Connect <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}
