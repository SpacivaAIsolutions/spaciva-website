import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle, ArrowRight, Bot, Database, FileText, Globe, Layers, Settings, Sparkles, Heart, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & AI Product Engineering Company | SPACIVA",
  description: "SPACIVA is a technology and AI product engineering company specializing in Generative AI, Healthcare Technology, FinTech Solutions, Enterprise Software, and Scalable SaaS Platforms.",
  openGraph: {
    title: "SPACIVA — Technology & AI Product Engineering Company",
    description: "We design and build custom Generative AI, Healthcare Tech, FinTech, Enterprise Software, and Scalable SaaS Platforms engineered for your growth.",
    url: "https://spaciva.tech",
    siteName: "SPACIVA",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      {/* Organisation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SPACIVA",
            "url": "https://spaciva.tech",
            "logo": "https://spaciva.tech/spaciva-nav-dark.png",
            "description": "Custom AI automation agents, CRM platforms, LMS systems, and web applications for businesses in India, UAE, UK & USA.",
            "email": "spacivaaisolution@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "areaServed": ["IN","AE","GB","US"],
            "sameAs": [],
            "foundingDate": "2023",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "5-15" }
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does SPACIVA do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SPACIVA is an AI software agency based in Ahmedabad, India. We build custom AI automation agents, CRM platforms, LMS systems, and high-performance web applications for businesses in India, UAE, UK, and USA."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to build a custom AI agent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom AI agent projects start from INR 80,000 depending on complexity. We provide fixed-price scoping so you know the full cost before work begins."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to deliver a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most projects are delivered in 2–10 weeks depending on scope. We ship weekly demos so you see progress throughout."
                }
              },
              {
                "@type": "Question",
                "name": "Do clients own the source code?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Full source code ownership is guaranteed on delivery. No recurring license fees, no vendor lock-in."
                }
              },
              {
                "@type": "Question",
                "name": "Does SPACIVA serve clients outside India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We serve clients in the UAE, United Kingdom, and United States. We coordinate across time zones with structured communication schedules."
                }
              }
            ]
          }),
        }}
      />

      <Hero />

      {/* SECTION 1 — TRUST / LOGO BAR */}
      <section className="py-10 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-widest uppercase font-semibold text-[var(--text-secondary)] mb-6">
            Powering teams across India, UAE, UK &amp; USA
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs font-bold text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-blue-500" /> OpenAI</span>
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-violet-500" /> Anthropic</span>
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-emerald-500" /> LangChain</span>
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-amber-500" /> AWS</span>
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-cyan-500" /> Vercel</span>
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-rose-500" /> Next.js</span>
            <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-indigo-500" /> Google Cloud</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM STATEMENT */}
      <section className="py-20 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
                  The Problem
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  Is Your Business Stuck With Software <br />
                  <span className="gradient-text">That Was Never Built For You?</span>
                </h2>
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <p>
                    Most growing businesses hit the same wall. You&apos;re paying monthly fees for tools that are 80% features you&apos;ll never use. Your team has built workarounds using spreadsheets and WhatsApp.
                  </p>
                  <p>
                    Your CRM doesn&apos;t match your sales process. Your training platform has a 20% completion rate. Your website is slow, invisible on Google, and built on a template everyone else uses.
                  </p>
                  <p className="font-semibold text-[var(--text-primary)]">
                    The problem isn&apos;t your team. It&apos;s the tools. Off-the-shelf software is built for the average business. You&apos;re not average.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 p-8 rounded-3xl border bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-blue-500/20 transition-all">
                <h3 className="text-base font-bold mb-3" style={{ color: "var(--text-primary)" }}>The SPACIVA Difference</h3>
                <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  We build from scratch — custom to your process, your team, your goals. No seat licenses. No features you&apos;ll never use. No compromises.
                </p>
                <a
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white rounded-xl bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all"
                >
                  See How We Work <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Services />

      {/* SECTION: INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
                Industry Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                Industries We <span className="gradient-text font-black">Serve &amp; Partner With</span>
              </h2>
              <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                As a specialized technology and AI product engineering company, we design and build secure, compliant, and high-performance digital solutions across key market verticals.
              </p>
            </div>
          </AnimatedSection>

          {/* Primary Verticals (Featured Niches) */}
          <div className="space-y-6 mb-12">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 px-1">Primary Market Focus (Tier 1)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vertical 1: AI & GenAI */}
              <AnimatedSection delay={0.05}>
                <div className="p-6 rounded-3xl border h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-blue-500/20 shadow-sm hover:shadow-md">
                  <div>
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 w-fit mb-5">
                      <Bot size={20} />
                    </div>
                    <h4 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>Artificial Intelligence &amp; Generative AI</h4>
                    <p className="text-[11px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      Building next-generation AI applications, intelligent workflows, autonomous agents, and generative AI platforms that help businesses automate operations and unlock new revenue opportunities.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500">Core Solutions</p>
                      <div className="flex flex-wrap gap-1">
                        {["AI Agents", "LLM Apps", "RAG Systems", "Knowledge Assistants", "AI SaaS Platforms", "Doc Processing"].map((s) => (
                          <span key={s} className="text-[9px] font-medium px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-secondary)" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] flex justify-between items-center text-[var(--text-muted)]">
                    <span>Target: AI Startups, SaaS, Enterprises</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vertical 2: Healthcare Tech */}
              <AnimatedSection delay={0.1}>
                <div className="p-6 rounded-3xl border h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-emerald-500/20 shadow-sm hover:shadow-md">
                  <div>
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 w-fit mb-5">
                      <Heart size={20} />
                    </div>
                    <h4 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>Healthcare &amp; Pharma Technology</h4>
                    <p className="text-[11px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      Developing secure, compliant, and scalable software solutions for healthcare organizations, pharmaceutical companies, quality teams, and regulated industries.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Core Solutions</p>
                      <div className="flex flex-wrap gap-1">
                        {["QMS", "CAPA Platforms", "Audit Management", "Regulatory Compliance", "LMS Onboarding", "Lab Workflows"].map((s) => (
                          <span key={s} className="text-[9px] font-medium px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-secondary)" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] flex justify-between items-center text-[var(--text-muted)]">
                    <span>Target: Pharma, Clinical, Healthcare Providers</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Vertical 3: FinTech */}
              <AnimatedSection delay={0.15}>
                <div className="p-6 rounded-3xl border h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-violet-500/20 shadow-sm hover:shadow-md">
                  <div>
                    <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-500 border border-violet-500/20 w-fit mb-5">
                      <DollarSign size={20} />
                    </div>
                    <h4 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>FinTech &amp; Financial Technology</h4>
                    <p className="text-[11px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      Building secure, scalable, and high-performance financial platforms for lending, payments, analytics, and financial operations.
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-violet-500">Core Solutions</p>
                      <div className="flex flex-wrap gap-1">
                        {["Lending Platforms", "Loan Mgmt", "Payment Processing", "Financial Dashboards", "Banking APIs", "Risk Assessments"].map((s) => (
                          <span key={s} className="text-[9px] font-medium px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-secondary)" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] flex justify-between items-center text-[var(--text-muted)]">
                    <span>Target: FinTech Startups, NBFCs, Finance Orgs</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Secondary Industry Verticals */}
          <div className="space-y-6 mb-16">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4 px-1">Expanded Verticals &amp; SaaS (Tier 2)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* HR Tech */}
              <div className="p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>HR Technology &amp; Workforce</h4>
                <p className="text-[10px] leading-snug mb-3" style={{ color: "var(--text-secondary)" }}>
                  Creating modern workforce platforms: AI HRMS, employee experience, payroll operations, performance metrics, and recruitment dashboards.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["AI HRMS", "Payroll Tools", "Self-Service", "Hiring Portals"].map((t) => (
                    <span key={t} className="text-[8px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">{t}</span>
                  ))}
                </div>
              </div>

              {/* Enterprise Software */}
              <div className="p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>Enterprise Digital Transformation</h4>
                <p className="text-[10px] leading-snug mb-3" style={{ color: "var(--text-secondary)" }}>
                  Building custom business applications, complex CRM, workflow automation systems, ERP integrations, and business intelligence.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["CRM", "ERP Pipelines", "BI Dashboards", "Workflow Systems"].map((t) => (
                    <span key={t} className="text-[8px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">{t}</span>
                  ))}
                </div>
              </div>

              {/* SaaS Product Dev */}
              <div className="p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h4 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>SaaS Product Development</h4>
                <p className="text-[10px] leading-snug mb-3" style={{ color: "var(--text-secondary)" }}>
                  Helping founders launch cloud MVPs with multi-tenant architectures, payment/subscription rails, and robust admin suites.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["SaaS MVPs", "Multi-Tenant", "Stripe Modules", "Platform Scaling"].map((t) => (
                    <span key={t} className="text-[8px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* IDEAL CLIENT PROFILES */}
          <div className="border rounded-3xl p-8 bg-[var(--bg-card)] border-[var(--border-subtle)]">
            <h3 className="text-base font-bold text-center mb-1" style={{ color: "var(--text-primary)" }}>Ideal Client Profiles</h3>
            <p className="text-xs text-center mb-8" style={{ color: "var(--text-secondary)" }}>Who we design and engineer scalable products for:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "Startups", needs: ["SaaS MVP Development", "AI Pipeline Integrations", "Full-Stack Web Architectures", "Reliable Tech Advisory"] },
                { type: "Growing Businesses", needs: ["Administrative Automation", "Custom Sales CRM Systems", "Internal Operations Tools", "B2B Dashboards & Reporting"] },
                { type: "Enterprises", needs: ["Regulated Healthcare Tech", "FinTech Lending & Transactional Tools", "SOC2/GDPR-Aligned Databases", "Scalable Enterprise Knowledge Hubs"] }
              ].map((profile, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-xs font-bold text-electric-blue uppercase tracking-widest">{profile.type}</div>
                  <ul className="space-y-2">
                    {profile.needs.map((need, nIdx) => (
                      <li key={nIdx} className="flex items-center gap-2 text-[11px]" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — CUSTOM vs OFF-THE-SHELF COMPARISON */}
      <section className="py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3 inline-block">
                Value Equation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                Custom-Built vs. Off-The-Shelf: <span className="gradient-text font-black">The Real Comparison</span>
              </h2>
              <p className="text-xs sm:text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                How a SPACIVA custom build fares against Salesforce, HubSpot, Zoho, Thinkific, and generic SaaS platforms.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="border rounded-2xl overflow-hidden shadow-sm" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.01)" }}>
                      <th className="p-4 font-bold" style={{ color: "var(--text-primary)" }}>Feature Comparison</th>
                      <th className="p-4 font-bold text-electric-blue" style={{ background: "rgba(59,130,246,0.02)" }}>SPACIVA Custom Build</th>
                      <th className="p-4 font-bold" style={{ color: "var(--text-muted)" }}>Generic Off-The-Shelf SaaS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-[var(--border-subtle)]">
                    {[
                      { f: "Ownership", custom: "Full source code yours forever", off: "Permanent rental, zero code access" },
                      { f: "Monthly Cost", custom: "Zero recurring fees after delivery", off: "Ongoing per-seat subscription licenses" },
                      { f: "Fits Your Process", custom: "100% — built around your exact workflow", off: "Rigid templates you must adapt to" },
                      { f: "Integration", custom: "Connects to any API or database you use", off: "Restricted and locked behind paywalls" },
                      { f: "Scalability", custom: "Engineered to grow dynamically with you", off: "Forces tier-upgrades as database expands" },
                      { f: "Support", custom: "Direct line to the engineers who built it", off: "Impersonal ticketing queues & bot replies" },
                      { f: "Time to Deliver", custom: "2–10 weeks for most projects", off: "Instant, but weeks spent on setup" },
                      { f: "Data Security", custom: "You control exactly where your data lives", off: "Data hosted in proprietary cloud hubs" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                        <td className="p-4 font-semibold" style={{ color: "var(--text-primary)" }}>{row.f}</td>
                        <td className="p-4 font-medium text-emerald-600" style={{ background: "rgba(59,130,246,0.02)" }}>{row.custom}</td>
                        <td className="p-4 text-[var(--text-secondary)]">{row.off}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all"
              >
                Get a Free Consultation <ArrowRight size={13} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Portfolio />

      {/* SECTION 4 — RESULTS / IMPACT NUMBERS */}
      <section className="py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3 inline-block">
                Impact Evidence
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                Real Results. <span className="gradient-text font-black">Real Businesses.</span>
              </h2>
              <p className="text-xs sm:text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Every metric below comes directly from a delivered client project — not marketing models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { val: "92%", title: "Cost Saved on Operations", desc: "A client's team was spending 6 hours daily on manual data entry and follow-ups. Our AI automation pipeline cut that to under 30 minutes." },
                { val: "3x", title: "Organic Traffic Growth", desc: "Unoloft went from 800 to 2,400+ monthly organic visitors in 4 months after our technical SEO and content strategy overhaul." },
                { val: "94%", title: "LMS Course Completion", desc: "Vachnamrut's staff education portal achieved 94% course completion — compared to the industry average of 15% for generic LMS platforms." },
                { val: "3.5x", title: "Conversion Rate Uplift", desc: "Siddhraj's sales team tripled deal conversions after switching from spreadsheets to our custom CRM with automated follow-up sequences." },
                { val: "48h", title: "First Working Prototype", desc: "We guarantee a working prototype within 48 hours of project kickoff — so you see real progress immediately, not just a slide deck." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all">
                  <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">{item.val}</p>
                  <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all"
              >
                See All Case Studies <ArrowRight size={13} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 — SECONDARY CTA BLOCK */}
      <section className="py-16 relative overflow-hidden" style={{ background: "var(--bg-navy)" }}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] bg-electric-blue" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Stop Paying for Software That Wasn&apos;t Built for You?
            </h2>
            <p className="text-xs sm:text-sm max-w-2xl mx-auto mb-8 text-white/70 leading-relaxed">
              Tell us what you need. We&apos;ll scope it, price it, and send you an action plan within 48 hours — completely free and with no commitment required.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-left max-w-2xl mx-auto">
              {[
                "Free consultation call",
                "Detailed scope doc in 48h",
                "Fixed-price proposal",
                "Senior engineer on call",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[10px] font-semibold text-white/90">
                  <CheckCircle size={12} className="text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white rounded-xl bg-electric-blue hover:bg-blue-600 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              >
                Book Your Free Consultation <ArrowRight size={13} />
              </a>
              <a
                href="/contact"
                className="text-xs font-bold text-white/80 hover:text-white transition-all underline decoration-white/20"
              >
                Inquire via email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — WHY SPACIVA / DIFFERENTIATORS */}
      <section className="py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3 inline-block">
                Our Differentiators
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                Why Businesses Choose SPACIVA <br className="hidden sm:inline" />
                <span className="gradient-text font-black">Over Other Agencies</span>
              </h2>
              <p className="text-xs sm:text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                How we work as a dedicated engineering partner to ensure reliable software architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Senior Engineers — No Middlemen", desc: "When you talk to SPACIVA, you talk directly to the engineers building your system. No account managers translating your requirements through layers. Direct communication means fewer misunderstandings and faster results." },
                { title: "Fixed Price — No Billing Surprises", desc: "We scope every project with a fixed-price proposal before writing a single line of code. You know exactly what you're paying for. If the scope changes, we tell you immediately — never after the invoice." },
                { title: "You Own Everything", desc: "Full source code. Full documentation. Full deployment access. We hand it all over on delivery. No ongoing retainer required, no platform lock-in, no paying us forever to keep the lights on." },
                { title: "Built for Your Industry, Not Just Tech", desc: "We've delivered AI systems for real estate, healthcare, education, and financial services. We understand that a CRM for a property developer has very different requirements than one for a staffing agency." },
                { title: "48-Hour Response Guarantee", desc: "Every project inquiry gets a detailed response — scope outline, timeline estimate, and technology recommendation — within 48 hours. Not a 'thanks, we'll be in touch.'" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all">
                  <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                    <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Process />

      {/* SECTION 6 — TECHNOLOGY STACK VISUAL */}
      <section className="py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3 inline-block">
                Technology Core
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                The Technology Behind <span className="gradient-text font-black">Your Solution</span>
              </h2>
              <p className="text-xs sm:text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                We use the same tools as the world&apos;s leading AI and software companies — proven in production at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { cat: "AI & Machine Learning", items: ["OpenAI GPT-4o", "Anthropic Claude", "LangChain", "LlamaIndex", "Hugging Face", "Pinecone", "pgvector", "Python", "FastAPI"] },
                { cat: "Web & Development", items: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "REST APIs", "WebSockets"] },
                { cat: "Databases & Storage", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "AWS S3", "Supabase"] },
                { cat: "Cloud & DevOps", items: ["AWS (EC2, Lambda)", "Vercel", "Docker", "GitHub Actions", "CI/CD Pipelines", "Netlify"] },
                { cat: "Integrations We Build", items: ["WhatsApp API", "Stripe Gateways", "Razorpay", "Twilio SMS", "Gmail API", "Google Calendar", "Salesforce API", "HubSpot", "Notion API"] },
              ].map((stack, idx) => (
                <div key={idx} className="p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)] space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-electric-blue">{stack.cat}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.items.map((item, i) => (
                      <span key={i} className="text-[9px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]" style={{ color: "var(--text-secondary)" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-center font-medium mt-8 text-[var(--text-muted)]">
              All code is documented, tested, and handed over with complete deployment guides.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Testimonials />

      {/* SECTION 7 — FAQ SECTION (homepage) */}
      <FAQSection />

      <CTASection />
    </main>
  );
}
