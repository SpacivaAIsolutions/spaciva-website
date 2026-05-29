import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "SPACIVA Blog | Insights on Custom CRM, LMS & AI Solutions",
  description: "Stay ahead with guides, case studies, and engineering strategies for custom CRM development, corporate LMS platforms, Next.js web systems, and AI automation.",
};

const blogPosts = [
  {
    title: "How Much Does Custom CRM Development Cost in India? (2026 Guide)",
    desc: "A detailed breakdown of pricing, scoping timelines, and development frameworks for building a custom CRM vs paying Salesforce/HubSpot recurring seat licenses.",
    category: "CRM Development",
    readTime: "6 min read",
    date: "May 25, 2026",
    href: "/contact",
  },
  {
    title: "Custom AI Agent vs. ChatGPT: What's the Difference for Your Business?",
    desc: "Learn why off-the-shelf chatbots fail at multi-step enterprise workflows and how bespoke agentic pipelines securely leverage private company databases.",
    category: "AI Solutions",
    readTime: "8 min read",
    date: "May 18, 2026",
    href: "/contact",
  },
  {
    title: "Top 5 Signs Your Business Needs a Custom LMS (Not Udemy or Thinkific)",
    desc: "If your corporate completion rate is stuck at 15%, learn how custom lesson builders, randomized quiz engines, and automated certs can double employee compliance.",
    category: "LMS Systems",
    readTime: "5 min read",
    date: "May 12, 2026",
    href: "/contact",
  },
  {
    title: "Why Indian Businesses Are Replacing HubSpot With Custom CRM Systems",
    desc: "How regional teams bypass high exchange rates and seat constraints to gain full source code ownership of tailored deal boards and auto WhatsApp dispatch setups.",
    category: "CRM Development",
    readTime: "7 min read",
    date: "May 04, 2026",
    href: "/contact",
  },
  {
    title: "How We Tripled Unoloft's Organic Traffic in 4 Months (SEO Case Study)",
    desc: "A walk-through of technical audits, Core Web Vitals optimization, and schema markup maps that turned Unoloft's organic sitemap into a high-intent client channel.",
    category: "Technical SEO",
    readTime: "9 min read",
    date: "April 26, 2026",
    href: "/contact",
  },
  {
    title: "Next.js vs WordPress: Which Is Right for Your Business Website in 2026?",
    desc: "Compare speed, maintenance costs, security parameters, and Core Web Vitals between React-based headless stacks and legacy templates.",
    category: "Web Development",
    readTime: "6 min read",
    date: "April 15, 2026",
    href: "/contact",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Blog
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Tech Insights &amp; <span className="gradient-text">Engineering Guides</span>
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Deep dives on AI integrations, custom software scoping, search engine optimizations, and case studies to help your business automate workflows.
            </p>
          </div>
        </AnimatedSection>

        {/* Blog Post List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-3xl border h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-semibold text-[var(--text-muted)] mb-4">
                    <span className="flex items-center gap-1"><Tag size={11} className="text-electric-blue" /> {post.category}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <h2 className="text-sm sm:text-base font-bold mb-3 leading-snug" style={{ color: "var(--text-primary)" }}>{post.title}</h2>
                  <p className="text-[11px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{post.desc}</p>
                </div>
                
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>{post.date}</span>
                  <a href={post.href} className="text-[11px] font-bold text-electric-blue hover:underline inline-flex items-center gap-0.5">
                    Read article <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border text-center bg-[var(--bg-card)] border-[var(--border-subtle)]">
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>Looking for a Custom Engineering Team?</h3>
            <p className="text-xs sm:text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              We build custom AI agents, CRM dashboards, and LMS portals from scratch. Zero licensing fees, full source code ownership.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Inquire About a Project <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
