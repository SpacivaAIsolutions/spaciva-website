import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Services India | Search Ranking | SPACIVA",
  description: "SPACIVA delivers data-driven SEO strategies: Core Web Vitals optimization, structured data markup, keyword mapping, and content roadmaps.",
  alternates: {
    canonical: "/seo-services-india",
  },
};

const capabilities = [
  {
    title: "Technical SEO Audit & Fixes",
    desc: "We start with a comprehensive technical audit: crawlability, indexation, Core Web Vitals (LCP, FID, CLS), site architecture, and mobile usability. Then we fix every issue — not just report them.",
  },
  {
    title: "Keyword Research & Mapping",
    desc: "Competitor gap analysis plus intent-based keyword research to identify the exact terms your target customers search. We map keywords to landing pages and create a clear content hierarchy.",
  },
  {
    title: "On-Page Optimisation",
    desc: "Meta titles, descriptions, heading structures, internal linking, schema markup (JSON-LD), image alt text, and page speed — optimised for both search engines and human readers.",
  },
  {
    title: "Content Strategy & Creation",
    desc: "A 3–6 month content calendar targeting informational, navigational, and transactional keywords. We write SEO-optimised content that ranks and converts.",
  },
  {
    title: "Local SEO & Business Profile",
    desc: "We optimise your Google Business Profile, build local citations, and create location-specific landing pages to dominate search in your city and region.",
  },
  {
    title: "Structured Data & Rich Results",
    desc: "We implement JSON-LD schema markup for FAQs, reviews, services, and local business — unlocking rich snippets in Google results that dramatically improve CTR.",
  },
];

const results = [
  "3× organic traffic growth for Unoloft within 4 months",
  "First-page rankings for 40+ target keywords across client portfolios",
  "Core Web Vitals scores improved from failing to 90+ in 3 weeks",
  "Local map pack inclusion for 5 India-based businesses within 8 weeks",
];

export default function SEOServicesIndiaPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">Technical SEO</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Dominate Search <br />
            <span className="italic text-slate-400 font-serif">Results.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We combine technical SEO precision with strategic content mapping to build sustainable organic visibility — not short-lived ranking tricks.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Get a Free SEO Audit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">Data-Driven Growth</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              Stop guessing what Google wants. We reverse-engineer search intent, fix technical bottlenecks at the codebase level, and structure your website's data to command authority in your niche.
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

        {/* Results */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((r, idx) => (
              <div key={idx} className="flex items-start gap-4 border-l border-slate-200 pl-6 py-2">
                <CheckCircle className="text-slate-400 shrink-0 mt-1" size={24} />
                <p className="text-xl text-slate-900 font-bold leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6">
                Turn Google Into Your <br/><span className="italic text-slate-400 font-serif">Best Sales Channel.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                Partner with SPACIVA to implement a highly precise search engine campaign that drives actual sales.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Request an Audit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
