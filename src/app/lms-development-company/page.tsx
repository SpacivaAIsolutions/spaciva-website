"use client";

import { GraduationCap, CheckCircle, ArrowRight, BookOpen, Award, BarChart2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: BookOpen,
    title: "Custom Course Builder",
    desc: "Build structured learning paths with video lessons, PDFs, SCORM content, and interactive assignments — all organized into modules and chapters.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: Award,
    title: "Auto-Grading & Certification Engine",
    desc: "Quiz modules with weighted scoring, automated PDF certificate generation on completion, and integration with HR databases and email delivery systems.",
    color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
  },
  {
    icon: BarChart2,
    title: "Learner Analytics Dashboard",
    desc: "Real-time tracking of completion rates, quiz scores, time-on-course, and engagement patterns. Export reports to CSV or connect to your BI tools.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
];

const useCases = [
  { title: "Corporate Employee Training", desc: "Onboarding portals, compliance training, and skill development programs for distributed teams." },
  { title: "EdTech Startups", desc: "Fully white-labeled LMS platforms ready to launch paid courses and subscription memberships." },
  { title: "Religious & Community Education", desc: "Structured content portals for religious texts, language learning, and community courses." },
  { title: "Professional Certification Platforms", desc: "Multi-tier certification tracks with proctoring hooks, badge APIs, and LinkedIn integration." },
];

export default function LMSDevelopmentCompanyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA LMS Development
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              LMS Development Company <br />
              <span className="gradient-text font-black">Custom Learning Platforms Built to Scale</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              SPACIVA is a specialist LMS development company building custom learning management systems for corporates, EdTech startups, and community educators. Our platforms achieve 94% average course completion rates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Build My LMS Platform <ArrowRight size={15} />
              </a>
              <a href="/#portfolio" className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                View LMS Case Study →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div
                className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.background = "var(--bg-card)"; }}
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${f.color}`}>
                  <f.icon size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Use Cases */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Who We Build LMS Platforms For</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Every platform is built from the ground up to fit the learner experience you envision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {useCases.map((uc, i) => (
              <div key={uc.title} className="p-6 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{uc.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Our LMS Development Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Next.js 15 + React 19 Frontend", body: "Server-side rendered course pages for blazing-fast load times and excellent SEO for your course catalog." },
                { title: "SCORM & xAPI Compatible", body: "Import existing SCORM 1.2 and 2004 content packages, or build native xAPI-tracked interactive lessons." },
                { title: "Video Streaming & CDN", body: "Cloudflare Stream or AWS CloudFront integration for adaptive bitrate video delivery worldwide." },
                { title: "Automated PDF Certificates", body: "Dynamic certificate generation with learner name, completion date, score, and digital signature via Puppeteer." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{item.title}:</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
            {[
              { stat: "94%", label: "Average course completion rate" },
              { stat: "12+", label: "LMS platforms shipped" },
              { stat: "50k+", label: "Learner accounts managed" },
              { stat: "1.2s", label: "Average page load time" },
            ].map((item) => (
              <div key={item.stat} className="text-center p-5 rounded-2xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
                <p className="text-2xl font-extrabold gradient-text mb-1">{item.stat}</p>
                <p className="text-[10px] leading-tight" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Launch Your LMS Platform</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Tell us your learner count, content type, and timeline. We will send a detailed proposal and technical scope within 48 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get a Free LMS Proposal <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
