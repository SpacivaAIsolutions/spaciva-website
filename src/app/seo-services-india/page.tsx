import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Services India | Search Ranking | SPACIVA",
  description: "SPACIVA delivers data-driven SEO strategies: Core Web Vitals optimization, structured data markup, keyword mapping, and content roadmaps.",
  alternates: {
    canonical: "/seo-services-india",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

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
              Technical SEO
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            Dominate Search <br />
            <span className="italic font-light text-[#6B6A65]">Results.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ fontFamily: I }}>
            We combine technical SEO precision with strategic content mapping to build sustainable organic visibility — not short-lived ranking tricks.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide"
            style={{ fontFamily: J }}
          >
            Get a Free SEO Audit
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>Data-Driven Growth</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              Stop guessing what Google wants. We reverse-engineer search intent, fix technical bottlenecks at the codebase level, and structure your website's data to command authority in your niche.
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

        {/* Results */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((r, idx) => (
              <div key={idx} className="flex items-start gap-4 border-l border-black/[0.08] pl-6 py-1">
                <CheckCircle2 className="text-[#FF4D00] shrink-0 mt-1.5" size={18} />
                <p className="text-base text-[#0E0E0C] font-semibold leading-relaxed" style={{ fontFamily: I }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/[0.07] pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E0E0C] mb-6 leading-tight" style={{ fontFamily: J }}>
                Turn Google Into Your <br /><span className="italic font-light text-[#6B6A65]">Best Sales Channel.</span>
              </h2>
              <p className="text-[#6B6A65] text-sm leading-relaxed max-w-xl" style={{ fontFamily: I }}>
                Partner with SPACIVA to implement a highly precise search engine campaign that drives actual sales.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide shrink-0"
              style={{ fontFamily: J }}
            >
              Request an Audit
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
