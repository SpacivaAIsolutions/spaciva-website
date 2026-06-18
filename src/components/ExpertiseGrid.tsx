"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const industries = [
  {
    title: "AI & Generative AI",
    desc: "We build custom LLM applications, retrieval-augmented generation (RAG) systems, autonomous knowledge assistants, and scalable AI SaaS platforms tailored to your specific operational needs.",
  },
  {
    title: "Healthcare Technology",
    desc: "Developing secure Quality Management Systems (QMS), CAPA platforms, and regulatory compliance tools that meet strict industry standards for healthcare and life sciences.",
  },
  {
    title: "FinTech Solutions",
    desc: "Engineering highly secure lending platforms, custom loan management software, and payment processing integrations engineered for reliability and scale.",
  },
  {
    title: "HR & Workforce",
    desc: "Automating human resources with AI-driven HRMS, streamlined payroll tools, and intelligent hiring portals that reduce administrative overhead.",
  },
  {
    title: "Enterprise Systems",
    desc: "Architecting complex multi-tenant CRMs, workflow automation pipelines, and dynamic business intelligence dashboards that unify your data.",
  },
  {
    title: "SaaS Product Development",
    desc: "Taking your idea from zero to one. We handle everything from high-fidelity prototyping and MVPs to full-scale cloud architectures.",
  },
];

export default function ExpertiseGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-[var(--bg-primary)] px-6 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6">
            Design Capabilities
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl">
            We provide end-to-end product engineering. From the initial architecture design to the final deployment, our expertise covers every phase of digital product development.
          </p>
        </div>

        <div className="flex flex-col border-t border-slate-200">
          {industries.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-slate-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 md:py-8 flex items-center justify-between group text-left cursor-pointer transition-colors hover:text-blue-600"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-sm font-bold text-slate-400 group-hover:text-blue-400 w-6">
                      0{idx + 1}
                    </span>
                    <h3 className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-slate-200 text-slate-400 group-hover:border-blue-200 group-hover:text-blue-500'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 md:pl-[4.5rem] pr-4 max-w-2xl text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                        {item.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
