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
  alternates: {
    canonical: "/ai-solutions-company-uk",
  },
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
    <main className="min-h-screen pt-36 pb-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-6 inline-block">
            SPACIVA United Kingdom
          </span>
          <h1 className="text-[3rem] sm:text-5xl md:text-6xl font-bold tracking-tightest leading-[1.05] mb-8 text-[#0f172a]">
            Enterprise AI & Software Solutions <br className="hidden sm:inline" />
            Built for <span className="text-blue-600">UK Businesses</span>
          </h1>
          <p className="text-lg sm:text-[22px] max-w-3xl mx-auto mb-10 leading-relaxed text-slate-600 font-medium tracking-tight">
            UK companies partner with SPACIVA to build custom AI automation systems, CRM platforms, and web applications — at a fraction of London agency rates, with no compromise on quality.
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

        {/* Deliverables Grid */}
        <div className="mb-24">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">What We Build for UK Clients</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Tailored systems mapping precise business needs across the UK.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {deliverables.map((item) => (
               <div key={item.title} className="bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Engagement Model */}
        <div className="bg-[#0f172a] rounded-[32px] p-10 md:p-16 mb-24 relative overflow-hidden shadow-2xl text-center">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-bold mb-6 text-white">Our UK Engagement Model</h3>
             <p className="text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto">
               All UK projects begin with a no-obligation scoping call. We produce a detailed technical scope document within 48 hours, agree on fixed-price milestones, and provide a dedicated Slack channel for daily syncs. Invoices are issued in GBP.
             </p>
           </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#0f172a]">Accelerate Your Workflow Efficiency</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Hire SPACIVA to deliver production-ready software solutions with full source code ownership.
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
