"use client";

import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

type CaseStudy = {
  name: string;
  type: string;
  imageSrc: string;
  imageAlt: string;
  url?: string | null;
  description: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Wildmind AI",
    type: "AI Mental Wellness Solution",
    imageSrc: "/WILDMIND.png",
    imageAlt: "Wildmind AI",
    url: null,
    description:
      "An AI-powered mental wellness application featuring conversational coaching agent workflows, context memory state retention, and mood logs.",
  },
  {
    name: "Siddhraj",
    type: "AI-Powered B2B CRM",
    imageSrc: "/SIDHARAJ.png",
    imageAlt: "Siddhraj CRM",
    url: null,
    description:
      "A custom multi-tenant CRM dashboard automating sales email follow-ups, pipeline analytics, and agent task scheduling for real-estate teams.",
  },
  {
    name: "Vachnamrut",
    type: "Enterprise LMS Platform",
    imageSrc: "/vachnamrut.png",
    imageAlt: "Vachnamrut LMS",
    url: null,
    description:
      "A scalable staff education portal built with responsive course libraries, auto-grading quiz structures, and automated PDF certification hooks.",
  },
  {
    name: "Unoloft",
    type: "SEO & Growth Strategy",
    imageSrc: "/UNOLOFT.png",
    imageAlt: "Unoloft",
    url: "https://unoloft.com/",
    description:
      "A search optimization pipeline featuring technical performance tuning, keyword directory mappings, and targeted content calendars that tripled organic traffic.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--color-electric-blue)" }}>
            Showcase
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Featured projects
          </h2>
          <p className="text-sm max-w-2xl mx-auto text-center mb-16 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Explore our engineering work across custom AI agents, LMS portals, CRM dashboards, and SEO growth pipelines.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.name} delay={i * 0.07}>
              <div
                className="group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                {/* Image container */}
                <div
                  className="relative aspect-video w-full overflow-hidden border-b"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-secondary)" }}
                >
                  {/* Subtle gradient orb behind logo */}
                  <div
                    className="absolute -inset-16 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%), radial-gradient(circle at 60% 40%, var(--gradient-orb-2), transparent 70%)",
                    }}
                  />
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.04]">
                    <Image
                      src={study.imageSrc}
                      alt={study.imageAlt}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="inline-flex items-center text-[9px] tracking-wider uppercase font-bold mb-3.5 px-2.5 py-1 rounded-full border"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border-subtle)",
                      background: "var(--bg-secondary)",
                    }}
                  >
                    {study.type}
                  </span>

                  <h3
                    className="text-base font-bold mb-2 tracking-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                  >
                    {study.name}
                  </h3>
                  <p className="text-[12px] leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                    {study.description}
                  </p>

                  {study.url && (
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold transition-colors"
                        style={{ color: "var(--color-electric-blue)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-electric-blue)")}
                      >
                        <span>Visit live website</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
