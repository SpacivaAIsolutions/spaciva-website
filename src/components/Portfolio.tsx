"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    description: "An AI-powered mental wellness application featuring conversational coaching agent workflows.",
  },
  {
    name: "Siddhraj",
    type: "AI-Powered B2B CRM",
    imageSrc: "/SIDHARAJ.png",
    imageAlt: "Siddhraj CRM",
    url: null,
    description: "A custom multi-tenant CRM dashboard automating sales pipelines for real-estate teams.",
  },
  {
    name: "Vachnamrut",
    type: "Enterprise LMS Platform",
    imageSrc: "/vachnamrut.png",
    imageAlt: "Vachnamrut LMS",
    url: null,
    description: "A scalable staff education portal built with responsive course libraries and auto-grading.",
  },
  {
    name: "Unoloft",
    type: "SEO & Growth Strategy",
    imageSrc: "/UNOLOFT.png",
    imageAlt: "Unoloft",
    url: "https://unoloft.com/",
    description: "A search optimization pipeline featuring technical performance tuning that tripled organic traffic.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[var(--bg-primary)] px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-4">
              Selected Works
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-xl">
              A collection of our most recent engineering work across AI agents, enterprise CRMs, and high-performance digital platforms.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            View all projects <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={study.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col ${i % 2 !== 0 ? 'md:mt-24' : ''}`} // Staggered layout like Dstudio
            >
              <div className="relative aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 mb-6">
                <div className="absolute inset-0 bg-slate-200/50 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src={study.imageSrc}
                  alt={study.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* View Project Floating CTA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-xs font-bold tracking-widest text-slate-900 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] z-20 shadow-xl pointer-events-none">
                  VIEW
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                    {study.type}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                  {study.name}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
