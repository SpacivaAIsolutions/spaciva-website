"use client";

import { motion } from "framer-motion";
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
    description: "An AI-powered mental wellness application featuring conversational coaching agent workflows, context memory state retention, and mood logs.",
  },
  {
    name: "Siddhraj",
    type: "AI-Powered B2B CRM",
    imageSrc: "/SIDHARAJ.png",
    imageAlt: "ApexCRM AI",
    url: null,
    description: "A custom multi-tenant CRM dashboard automating sales email follow-ups, pipeline analytics, and agent task scheduling.",
  },
  {
    name: "Vachnamrut",
    type: "Enterprise LMS Space",
    imageSrc: "/vachnamrut.png",
    imageAlt: "EduSphere LMS",
    url: null,
    description: "A scalable staff education portal built with responsive course libraries, auto-grading quiz structures, and automated PDF certification hooks.",
  },
  {
    name: "Unoloft",
    type: "SEO & Growth Strategy",
    imageSrc: "/UNOLOFT.png",
    imageAlt: "Unoloft",
    url: "http://unoloft.com/",
    description: "A search optimization pipeline featuring technical performance tuning, keyword directory mappings, and targeted content calendars.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background ambient highlights */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-xs text-electric-blue tracking-widest uppercase mb-3 text-center font-semibold">
            Showcase
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured projects
          </h2>
          <p
            className="text-sm max-w-2xl mx-auto text-center mb-16 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore our engineering work across custom artificial intelligence agents, LMS portals, CRM dashboards, and SEO pipelines.
          </p>
        </AnimatedSection>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.name} delay={i * 0.06}>
              <div
                className="group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.background = "var(--bg-card-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                <div>
                  {/* Aspect Video Image Container */}
                  <div
                    className="relative aspect-video w-full overflow-hidden border-b flex items-center justify-center bg-black/15"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.03]"
                      style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: "16px 16px",
                      }}
                    />
                    <div
                      className="absolute -inset-16 blur-3xl opacity-30 group-hover:scale-105 transition-transform duration-500"
                      style={{
                        background:
                          "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%), radial-gradient(circle at center, var(--gradient-orb-2), transparent 70%)",
                      }}
                    />
                    <div className="relative w-full h-full p-6 transition-transform duration-500 group-hover:scale-[1.03]">
                      <Image
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <span
                      className="inline-flex items-center text-[9px] tracking-wider uppercase font-bold mb-3.5 px-2.5 py-0.5 rounded-full border bg-white/5"
                      style={{
                        color: "var(--text-secondary)",
                        borderColor: "var(--border-subtle)",
                      }}
                    >
                      {study.type}
                    </span>
                    <h3
                      className="text-base font-bold text-white mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {study.name}
                    </h3>
                    <p
                      className="text-[12px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {study.description}
                    </p>
                  </div>
                </div>

                {/* Optional CTA Footer */}
                {study.url && (
                  <div className="px-6 pb-6 pt-1">
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-electric-blue hover:text-blue-400 transition-colors"
                    >
                      <span>Visit live website</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
