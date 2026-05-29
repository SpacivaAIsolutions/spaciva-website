"use client";

import React from "react";
import {
  Bot,
  Users,
  GraduationCap,
  Code2,
  Search,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// ── SERVICES DEFINITION ──
const servicesList = [
  {
    id: "ai",
    icon: Bot,
    title: "AI Solutions & Automation",
    shortDesc: "Custom AI agents, LLM integrations, and pipeline automation to accelerate operation speeds.",
    color: "from-blue-500 to-cyan-400",
    href: "/ai-automation-solutions",
  },
  {
    id: "crm",
    icon: Users,
    title: "Custom CRM Systems",
    shortDesc: "Tailored relationship management platforms to sync teams, track deals, and score leads.",
    color: "from-indigo-500 to-purple-500",
    href: "/custom-crm-development",
  },
  {
    id: "lms",
    icon: GraduationCap,
    title: "LMS Platforms",
    shortDesc: "Interactive learning management systems with custom courses, progress charts, and quiz modules.",
    color: "from-emerald-500 to-teal-400",
    href: "/lms-development-company",
  },
  {
    id: "web",
    icon: Code2,
    title: "Web & App Development",
    shortDesc: "High-performance React/Next.js platforms and dashboards with responsive grid layouts.",
    color: "from-amber-500 to-orange-500",
    href: "/web-development-company-india",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Growth Marketing",
    shortDesc: "Strategic search engine optimization, content roadmaps, and local authority ranking.",
    color: "from-rose-500 to-pink-500",
    href: "/seo-services-india",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(ellipse at center, var(--gradient-orb-1), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--color-electric-blue)" }}>
            Capabilities
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Intelligent business solutions
          </h2>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto text-center mb-16 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We engineer high-performance systems and intelligent automation. Explore our core services below to see how we can transform your workflows.
          </p>
        </AnimatedSection>

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {servicesList.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.05}>
              <a
                href={service.href}
                className="group p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between cursor-pointer hover:-translate-y-1 block"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-linear-to-br ${service.color} text-white mb-6 shadow-md`}
                  >
                    <service.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[15px] font-bold mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
                  <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {service.shortDesc}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1 text-[11px] font-semibold transition-colors"
                  style={{ color: "var(--color-electric-blue)" }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
