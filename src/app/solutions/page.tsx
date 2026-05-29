"use client";

import { motion } from "framer-motion";
import { Bot, Users, GraduationCap, Code2, Search, ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const servicesList = [
  {
    icon: Bot,
    title: "AI Solutions & Automation Agents",
    subtitle: "Embed custom artificial intelligence into your business workflow.",
    desc: "We build tailored LLM pipelines, autonomous execution agents, and conversational chatbot systems that integrate securely with your internal databases and APIs.",
    techStack: ["OpenAI API", "LangChain", "Python / FastAPI", "Vector Databases (Pinecone, pgvector)", "Hugging Face"],
    points: [
      "Autonomous email and message responder pipelines",
      "Semantic document ingestion & metadata extraction (PDF/invoices)",
      "Secure retrieval-augmented generation (RAG) for internal wikis",
      "Sentiment modeling and user behavior analysis models",
    ],
    color: "cyan",
  },
  {
    icon: Users,
    title: "Custom CRM & Lead Platforms",
    subtitle: "Align sales pipelines with specialized customer management dashboards.",
    desc: "We develop responsive CRM portals built around your specific deal flows, team structure, and third-party integrations (WhatsApp, Gmail, Stripe) without license-seat markups.",
    techStack: ["React / TypeScript", "Node.js / Express", "PostgreSQL", "Prisma ORM", "Stripe API", "Twilio / WhatsApp API"],
    points: [
      "Drag-and-drop Kanban deal boards and interactive customer lists",
      "Automated WhatsApp & email notifications triggered by pipeline changes",
      "Role-based secure permission structures for agents and management",
      "Live pipeline reporting charts and CSV/PDF data exports",
    ],
    color: "violet",
  },
  {
    icon: GraduationCap,
    title: "Enterprise Learning Systems (LMS)",
    subtitle: "Deliver scalable training platforms for staff compliance and onboarding.",
    desc: "We design and engineer enterprise-grade corporate training portals built for employee onboarding and education tracking with robust tracking metrics.",
    techStack: ["Next.js App Router", "Tailwind CSS", "MongoDB / PostgreSQL", "SCORM Integration", "React-PDF Generator"],
    points: [
      "Interactive course browsers, module lessons, and media streaming",
      "Randomized quiz question engines with automatic grading structures",
      "Auto-generated PDF compliance certificates on 100% course clearance",
      "Admin compliance dashboards showing user progress charts",
    ],
    color: "emerald",
  },
  {
    icon: Code2,
    title: "Custom Web Application Development",
    subtitle: "High-performance websites and web applications built from scratch.",
    desc: "We build responsive, ultra-fast web portals and systems leveraging the latest Next.js features and serverless deployments to maximize speed and reliability.",
    techStack: ["Next.js v15/v16", "React v19", "Tailwind CSS", "Docker", "AWS (EC2, S3)", "Vercel / Netlify"],
    points: [
      "Server-side pre-rendering (SSR) and static generation (SSG) for fast loads",
      "Secure REST and GraphQL API endpoints optimized for low latency",
      "Responsive wireframe layouts optimized for mobile-first visitors",
      "Continuous integration and automated deployment (CI/CD) pipelines",
    ],
    color: "blue",
  },
  {
    icon: Search,
    title: "Technical SEO & Search Dominance",
    subtitle: "Maximize organic search discoverability and inbound lead volumes.",
    desc: "We establish strong search visibility structures through page-speed optimization, clean semantic DOM structure, dynamic sitemap indexing, and local citation mappings.",
    techStack: ["Next.js Metadata API", "Google Search Console", "Screaming Frog", "Google Business Profile APIs"],
    points: [
      "Core Web Vitals tuning (LCP, FID, CLS scores under 1.5s)",
      "Dynamic XML sitemaps and automated robots.txt generation",
      "Structured JSON-LD schema markup for rich-search visibility",
      "Competitor keyword mapping and monthly search growth reports",
    ],
    color: "orange",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/3 left-1/2 w-[700px] h-[700px] rounded-full blur-[140px] -translate-x-1/2"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title Header */}
        <AnimatedSection>
          <div className="text-center mb-24">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              Core Capabilities
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Enterprise Software Solutions <br />
              <span className="gradient-text font-black">& Tech Integrations</span>
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Explore the tech stacks, functional features, and systems we build to automate administrative overhead and scale customer acquisition.
            </p>
          </div>
        </AnimatedSection>

        {/* Services List Stack */}
        <div className="space-y-16">
          {servicesList.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.05}>
              <div
                className="p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden hover:shadow-lg"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                {/* Visual Glow Indicator */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-45 bg-linear-to-r"
                  style={{
                    backgroundImage:
                      service.color === "cyan"
                        ? "linear-gradient(to right, #06b6d4, transparent)"
                        : service.color === "violet"
                        ? "linear-gradient(to right, #8b5cf6, transparent)"
                        : service.color === "emerald"
                        ? "linear-gradient(to right, #10b981, transparent)"
                        : service.color === "blue"
                        ? "linear-gradient(to right, #3b82f6, transparent)"
                        : "linear-gradient(to right, #f97316, transparent)",
                  }}
                />

                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left Column: Summary */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-blue-500/10 text-electric-blue border border-blue-500/20">
                        <service.icon size={20} strokeWidth={2} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                        Pillar {idx + 1}
                      </span>
                    </div>

                    <h2
                      className="text-xl sm:text-2xl font-bold mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-xs font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>
                      {service.subtitle}
                    </p>
                    <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {service.desc}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mb-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-primary)" }}>
                        Technologies We Use
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-semibold px-2.5 py-0.5 rounded-full border bg-white/5"
                            style={{
                              borderColor: "var(--border-subtle)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Features checklist */}
                  <div className="lg:w-[45%] flex flex-col justify-between self-stretch shrink-0">
                    <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--border-subtle)", background: "var(--bg-secondary)" }}>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider mb-4" style={{ color: "var(--text-primary)" }}>
                        Standard System Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {service.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5">
                            <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="/contact"
                      className="mt-6 flex items-center gap-1.5 text-xs font-bold text-electric-blue hover:text-blue-400 transition-colors self-start"
                    >
                      <span>Inquire about this solution</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
