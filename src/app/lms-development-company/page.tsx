import type { Metadata } from "next";
import { CheckCircle, ArrowRight, GraduationCap, LayoutGrid, BookOpen, Award, BarChart2, ShieldCheck, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Custom LMS Development Company India | E-Learning Platform Builder | SPACIVA",
  description: "SPACIVA builds enterprise learning management systems with video courses, auto-grading quizzes, PDF certification, and admin dashboards. 94% course completion rate. India-based.",
  keywords: [
    "LMS development company India",
    "custom LMS platform",
    "e-learning software development",
    "corporate training portal India",
    "learning management system developer",
    "SCORM LMS India"
  ],
};

const capabilities = [
  {
    icon: BookOpen,
    title: "Course Library & Module System",
    desc: "Structured course builders with drag-and-drop lesson ordering, video embedding, downloadable resources, and prerequisite logic. Employees progress at their own pace with progress tracked automatically.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: LayoutGrid,
    title: "Randomized Quiz Engine",
    desc: "Create question banks of any size. Our engine pulls randomized subsets for each attempt, preventing answer-sharing. Supports multiple choice, true/false, and short answer with auto-grading.",
    color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
  },
  {
    icon: Award,
    title: "Automated PDF Certification",
    desc: "When a learner completes a course and passes the assessment, a branded PDF certificate is generated and emailed instantly — with unique IDs for verification.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: BarChart2,
    title: "Admin Compliance Dashboard",
    desc: "Track every employee's progress, quiz scores, completion dates, and certification status from a single dashboard. Export reports for audits or HR reviews.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    desc: "Serve multiple departments, branches, or client organizations from a single platform with isolated data, custom branding per tenant, and centralized admin control.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
  {
    icon: ShieldCheck,
    title: "SCORM & xAPI Support",
    desc: "Import existing SCORM-compliant course packages from third-party content providers. Our platform integrates with industry-standard learning content seamlessly.",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  },
];

const useCases = [
  { name: "Corporate onboarding", desc: "New hire training with mandatory compliance and culture modules." },
  { name: "Healthcare training", desc: "Staff certification on updated clinical protocols and safety procedures." },
  { name: "Financial services", desc: "Regulatory compliance training with robust, auditable trail tracking." },
  { name: "Religious & cultural education", desc: "Structured curriculum delivery with step-by-step progress tracking." },
  { name: "Customer training", desc: "Onboard clients to your SaaS product with guided interactive learning paths." },
  { name: "Franchise training", desc: "Standardize operations training across hundreds of global franchise locations." },
];

const techStack = [
  { title: "Next.js App Router", body: "Server-side rendered course catalogs and fast-load modules optimized for SEO." },
  { title: "Bilingual and Custom Domains", body: "Fully white-labeled with custom domains, custom logos, and local translation options." },
  { title: "Scalable Cloud Hosting", body: "AWS & Vercel serverless configurations designed to scale horizontally as user traffic surges." },
  { title: "Stripe Payment Gateways", body: "Add digital commerce tools, tiered course subscriptions, and scheduled drip scheduling easily." },
];

export default function LMSDevelopmentCompanyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA LMS Development
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Build a Learning Platform Your <br className="hidden sm:inline" />
              Employees <span className="gradient-text">Actually Complete</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We engineer custom LMS platforms with interactive video courses, randomized quizzes, automated PDF certificates, and compliance dashboards — achieving 94% average course completion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Get a Custom Quote <ArrowRight size={15} />
              </a>
              <a
                href="/#portfolio"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                See LMS Demo →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>What We Build</h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We build fully white-labeled e-learning and corporate portals. Host on your domain with your brand colors, logotype structures, and email delivery templates. We can also integrate payments for commercial LMS models.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
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

        {/* Use Cases */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>LMS Use Cases</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>E-learning systems crafted for secure onboarding and structured progress reporting.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {useCases.map((item) => (
              <div key={item.name} className="p-5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                <p className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Core LMS Architecture Details */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Custom Built Features Your LMS Can Include
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techStack.map((item) => (
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

        {/* Stats Row */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20">
            {[
              { stat: "94%", label: "Average course completion rate" },
              { stat: "100%", label: "Custom and white-labeled" },
              { stat: "AWS/Vercel", label: "Horizontally scalable hosting" },
              { stat: "Zero", label: "Recurring seat subscription charges" },
            ].map((item) => (
              <div key={item.label} className="text-center p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <p className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{item.stat}</p>
                <p className="text-[10px] sm:text-[11px] leading-tight font-medium" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Ready to Scale Your Educational Program?</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Partner with SPACIVA to build an interactive, compliant learning environment that learners actually finish.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get a Custom LMS Quote <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
