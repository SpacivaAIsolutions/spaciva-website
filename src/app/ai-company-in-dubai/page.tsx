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
    <main className="min-h-screen pt-36 pb-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-6 inline-block">
            SPACIVA Middle East
          </span>
          <h1 className="text-[3rem] sm:text-5xl md:text-6xl font-bold tracking-tightest leading-[1.05] mb-8 text-[#0f172a]">
            AI & Enterprise Software Solutions <br className="hidden sm:inline" />
            for Dubai's <span className="text-blue-600">Fastest-Growing Businesses</span>
          </h1>
          <p className="text-lg sm:text-[22px] max-w-3xl mx-auto mb-10 leading-relaxed text-slate-600 font-medium tracking-tight">
            SPACIVA engineers custom AI automation systems, CRM platforms, and web applications for UAE companies — combining world-class technical expertise with deep understanding of the Dubai market.
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

        {/* Intro */}
        <div className="bg-white rounded-[32px] p-10 md:p-14 border border-slate-200 shadow-xl mb-24 text-center">
           <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0f172a]">Why Dubai Businesses Choose SPACIVA</h2>
           <p className="text-lg leading-relaxed text-slate-600 max-w-4xl mx-auto">
             Dubai's business environment moves fast. Your technology should too. We deliver custom AI and software systems built for the specific demands of UAE companies — multilingual support, GDPR-adjacent data compliance, and integration with regional platforms like noon, Careem, and UAE government APIs.
           </p>
        </div>

        {/* Pillars / Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {pillars.map((p, i) => (
             <div key={p.title} className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 group-hover:bg-blue-50 transition-colors">
                 <p.icon size={28} className="text-slate-900 group-hover:text-blue-600 transition-colors" />
               </div>
               <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{p.title}</h3>
               <p className="text-slate-600 leading-relaxed text-lg">{p.desc}</p>
             </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-24">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">Dubai Industries We Serve</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Engineering systems for localized business vectors across the Middle East.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {industries.map((ind) => (
               <div key={ind} className="bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center min-h-[120px]">
                 <h3 className="text-lg font-bold text-[#0f172a]">{ind}</h3>
               </div>
             ))}
           </div>
        </div>

        {/* Engineered Around / Engagement Info */}
        <div className="bg-[#0f172a] rounded-[32px] p-10 md:p-16 mb-24 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-12 text-white text-center">Engineered Around UAE Regional Requirements</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               {reasons.map((item) => (
                 <div key={item.title} className="flex flex-col gap-3">
                   <div className="flex items-center gap-3 text-xl font-bold text-white">
                     <CheckCircle size={24} className="text-blue-400 shrink-0" /> {item.title}
                   </div>
                   <p className="text-slate-400 leading-relaxed text-lg pl-9">{item.body}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>
        
        {/* Engagement Model */}
        <div className="bg-white rounded-[32px] p-10 md:p-14 border border-slate-200 shadow-xl mb-24 text-center">
           <h3 className="text-3xl font-bold mb-6 text-[#0f172a]">Our UAE Engagement Model</h3>
           <p className="text-lg leading-relaxed text-slate-600 max-w-4xl mx-auto">
             We work with UAE clients remotely through a streamlined flow: discovery scoping video calls (GST friendly), signed Non-Disclosure Agreements (NDA), clear fixed-price milestones, weekly demonstration check-ins, and source code transfer with final technical documentation. Invoices can be issued in AED.
           </p>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#0f172a]">Start Your Dubai Business Expansion</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Hire SPACIVA to design and deploy custom bilingual AI systems and high-converting web applications.
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
