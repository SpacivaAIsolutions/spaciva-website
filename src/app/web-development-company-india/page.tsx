"use client";

import { Code2, CheckCircle, ArrowRight, Globe, Zap, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Zap,
    title: "High-Performance Next.js Applications",
    desc: "Server-side rendered and statically generated web applications with Core Web Vitals scores above 95 — faster load times mean higher conversions.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: Globe,
    title: "Enterprise SaaS & Dashboard Platforms",
    desc: "Complex multi-tenant SaaS architectures, admin dashboards, data visualization platforms, and B2B portals with role-based access control.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Shield,
    title: "Secure API & Backend Architecture",
    desc: "RESTful and GraphQL APIs with JWT authentication, rate limiting, database optimization, and horizontal scaling capabilities on cloud infrastructure.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
];

const techStack = [
  "Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS",
  "PostgreSQL / MySQL", "Prisma ORM", "Redis Caching", "AWS / Vercel / Railway",
  "Stripe & Razorpay Payments", "Cloudflare CDN", "Docker Containers", "GitHub CI/CD",
];

export default function WebDevelopmentIndiaPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/2 right-1/4 w-[600px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA · Ahmedabad, India
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Web Development Company India <br />
              <span className="gradient-text font-black">Next.js Experts in Ahmedabad</span>
            </h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              SPACIVA is a premier web development company in India, specializing in high-performance Next.js applications, enterprise SaaS platforms, and custom web systems for global clients. Based in Ahmedabad with clients in USA, UK, UAE, and India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Start Your Web Project <ArrowRight size={15} />
              </a>
              <a href="/#portfolio" className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                View Our Portfolio →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Capabilities */}
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

        {/* Tech Stack */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              Our Modern Web Technology Stack
            </h2>
            <p className="text-xs mb-8" style={{ color: "var(--text-secondary)" }}>
              We use proven, production-grade technologies that ensure performance, security, and maintainability.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium px-3 py-1.5 rounded-full border"
                  style={{ background: "var(--bg-card-hover)", borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why India */}
        <AnimatedSection>
          <div
            className="p-8 sm:p-10 rounded-3xl border mb-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Why Hire a Web Development Company in India?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Cost Advantage Without Quality Compromise", body: "World-class Next.js and React development at 40–60% lower cost than UK or US agencies, with no compromise on code quality or delivery timelines." },
                { title: "IST to GMT/EST Overlap Hours", body: "Our Ahmedabad team overlaps with both US morning sessions (EST) and UK afternoon sessions (GMT) — async communication made seamless." },
                { title: "Experienced Senior Engineers Only", body: "You work directly with senior architects. No outsourcing, no juniors on critical paths, no account managers in between." },
                { title: "End-to-End Project Ownership", body: "From UX wireframes to production deployment and post-launch monitoring — we own the entire web development lifecycle." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-electric-blue shrink-0 mt-0.5" />
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
              { stat: "1.2s", label: "Average page load time for our deployments" },
              { stat: "98+", label: "Lighthouse performance score average" },
              { stat: "30+", label: "Web applications shipped globally" },
              { stat: "5★", label: "Average client satisfaction rating" },
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
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>Start Your Web Development Project</h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Share your project requirements and we will deliver a detailed technical proposal and fixed-price quote within 48 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get a Free Project Estimate <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
