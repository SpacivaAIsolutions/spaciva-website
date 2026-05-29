import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Search, FileText, Globe, Settings, MapPin, Code2, LineChart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Technical SEO Services India | Search Ranking & Organic Growth | SPACIVA",
  description: "SPACIVA delivers data-driven SEO strategies: Core Web Vitals optimization, structured data markup, keyword mapping, and content roadmaps that drive consistent organic growth. India-based.",
  keywords: [
    "SEO services India",
    "technical SEO company India",
    "SEO agency Ahmedabad",
    "organic search growth India",
    "local SEO India",
    "Core Web Vitals optimization",
    "search engine optimization company"
  ],
};

const capabilities = [
  {
    icon: Settings,
    title: "Technical SEO Audit & Fixes",
    desc: "We start with a comprehensive technical audit: crawlability, indexation, Core Web Vitals (LCP, FID, CLS), site architecture, duplicate content, broken links, and mobile usability. Then we fix every issue — not just report them.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Search,
    title: "Keyword Research & Mapping",
    desc: "Competitor gap analysis plus intent-based keyword research to identify the exact terms your target customers search. We map keywords to landing pages and create a clear content hierarchy.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Code2,
    title: "On-Page Optimisation",
    desc: "Meta titles, meta descriptions, heading structures, internal linking, schema markup (JSON-LD), image alt text, and page speed — optimised for both search engines and human readers.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: FileText,
    title: "Content Strategy & Creation",
    desc: "A 3–6 month content calendar targeting informational, navigational, and transactional keywords. We write SEO-optimised blog posts, service pages, and location pages that rank and convert.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    desc: "For India-based businesses, we optimise your Google Business Profile, build local citations, and create location-specific landing pages to dominate search in your city and region.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
  {
    icon: Globe,
    title: "Structured Data & Rich Results",
    desc: "We implement JSON-LD schema markup for FAQs, reviews, services, and local business — unlocking rich snippets in Google results that dramatically improve click-through rates.",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
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
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/3 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA SEO Services · India
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Dominate Search Results and Turn Google <br className="hidden sm:inline" />
              Into Your <span className="gradient-text">Best Sales Channel</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We combine technical SEO precision with strategic content mapping to build sustainable organic visibility — not short-lived ranking tricks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Get a Free SEO Audit <ArrowRight size={15} />
              </a>
              <a
                href="/#portfolio"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                See SEO Case Studies →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

        {/* Results We've Delivered */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: "var(--text-primary)" }}>
              Results We Have Delivered
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {results.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Reporting Block */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 rounded-full bg-violet-500/10 text-violet border border-violet-500/20 shrink-0">
                <LineChart size={32} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold mb-1" style={{ color: "var(--text-primary)" }}>Monthly Analytics & Reporting</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Get clear monthly reports showing keyword ranking movements, organic traffic, click-through rates, and conversion data from Google Search Console and Analytics — with plain-English commentary on what&apos;s working.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: "var(--text-primary)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "How long before we see SEO results?", a: "Technical fixes and on-page changes can show results in 4–8 weeks. Competitive keyword rankings typically take 3–6 months of consistent effort. We show progress every month with transparent reporting." },
                { q: "Do you use white-hat SEO techniques only?", a: "Always. We follow Google's Webmaster Guidelines strictly. No black-hat tactics, private blog networks, or link schemes that could get your site penalised." },
                { q: "Can you handle SEO for multiple locations?", a: "Yes. We build location-specific landing pages, manage multiple Google Business Profiles, and create city-level content strategies for businesses operating across India or internationally." },
              ].map((item) => (
                <div key={item.q} className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-bold" style={{ color: "var(--text-primary)" }}>{item.q}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Ready to Dominate Search Rankings?</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Partner with SPACIVA to implement a highly precise search engine campaign that drives actual sales.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Request a Technical SEO Audit <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
