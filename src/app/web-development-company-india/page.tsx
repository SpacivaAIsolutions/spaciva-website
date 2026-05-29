import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Code2, Globe, Shield, Terminal, LayoutGrid, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Web Development Company India | Next.js & React Experts | SPACIVA Ahmedabad",
  description: "SPACIVA builds high-performance Next.js web applications, dashboards, and portals from Ahmedabad, India. Server-side rendering, CI/CD pipelines, and mobile-first design. Serving India, UAE, UK & USA.",
  keywords: [
    "web development company India",
    "Next.js development agency India",
    "React web application development",
    "web app development Ahmedabad",
    "enterprise web development India",
    "custom web portal development"
  ],
};

const capabilities = [
  {
    icon: Code2,
    title: "Custom Web Application Development",
    desc: "From complex SaaS dashboards to multi-role portals, we build full-stack web applications tailored to your business logic. No templates — pure custom engineering with clean, documented code.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Globe,
    title: "Next.js & React Development",
    desc: "We specialize in Next.js App Router with server-side rendering (SSR) and static site generation (SSG) for lightning-fast page loads and top Core Web Vitals scores. Our React components are accessible, responsive, and tested.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Shield,
    title: "API Development & Integrations",
    desc: "We build secure REST and GraphQL APIs optimized for low latency. We integrate with payment gateways (Stripe, Razorpay), communication tools (WhatsApp, Twilio), analytics platforms, and any third-party service your business needs.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: LayoutGrid,
    title: "Dashboard & Admin Panel Development",
    desc: "Data-rich dashboards with live charts, filterable tables, role-based access, and exportable reports. Built for internal teams who need clarity and speed in their daily operations.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: Heart,
    title: "Mobile-First Responsive Design",
    desc: "Every interface we build is designed mobile-first and tested across devices and screen sizes. Your users get a flawless experience whether on a smartphone in Mumbai or a desktop in London.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
  {
    icon: Terminal,
    title: "DevOps & Deployment",
    desc: "We set up CI/CD pipelines with GitHub Actions, Docker containerization, and cloud deployment on AWS, Vercel, or Netlify. Automated testing ensures every deployment is stable.",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "FastAPI (Python)", "REST & GraphQL APIs", "WebSockets"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "pgvector"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda)", "Vercel", "Netlify", "Docker", "GitHub Actions"] },
];

export default function WebDevelopmentIndiaPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/2 right-1/4 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA · Ahmedabad, India
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Web Applications That Load Fast, <br className="hidden sm:inline" />
              Scale Easily, <span className="gradient-text">and Convert Visitors</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We build custom web apps and portals using Next.js 15, React 19, and serverless cloud infrastructure — engineered for speed, reliability, and measurable business outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Start Your Project <ArrowRight size={15} />
              </a>
              <a
                href="/#portfolio"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                View Our Work →
              </a>
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

        {/* Modern Web Tech Stack */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Our Modern Web Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((stack) => (
                <div key={stack.category} className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-electric-blue">{stack.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-subtle)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us FAQ */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: "var(--text-primary)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { q: "Do we get the source code?", a: "Yes — always. Full source code ownership is non-negotiable at SPACIVA. You receive the complete GitHub repository with detailed technical documentation on delivery." },
                { q: "How do you ensure the website is fast?", a: "We optimize strictly for Core Web Vitals: server-side rendering for fast initial loads, strict image formatting, CSS/JS minification, globally distributed Edge CDNs, and lazy loading. Most of our sites score 90+ on Google PageSpeed." },
                { q: "Can you take over a project built by another agency?", a: "Yes. We frequently inherit codebases from other developers. We will audit the existing codebase, document what is there, and continue development or refactor as required." },
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
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Start Your Web Application Project</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Let&apos;s build an incredibly fast Next.js system tailored to your custom business logic.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Inquire About Web Development <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
