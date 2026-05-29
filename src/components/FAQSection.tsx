"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function FAQSection() {
  const [openIdx, setOpenOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = [
    { q: "What does SPACIVA build?", a: "We build custom AI automation agents, CRM platforms, LMS (learning management) systems, web applications, and SEO growth systems. Everything is engineered from scratch — no templates." },
    { q: "Who do you work with?", a: "We work with SMEs, startups, and enterprise teams across India, UAE, UK, and USA. Our clients range from real estate agencies and healthcare providers to edtech startups and financial services firms." },
    { q: "How much does a project cost?", a: "Project costs vary by scope. A custom AI agent starts from ₹80,000. A full CRM or LMS platform ranges from ₹2,00,000–₹8,00,000. We provide fixed-price scoping before any commitment — no hidden fees." },
    { q: "How long does a project take?", a: "Single AI agents and basic web projects: 2–4 weeks. Custom CRM and LMS platforms: 6–12 weeks. Enterprise multi-system integrations: 12–20 weeks. We ship weekly demos throughout." },
    { q: "Do we own the code?", a: "Yes — completely. You receive the full source code, documentation, and deployment access on final delivery. No recurring license. No dependency on SPACIVA to keep it running." },
    { q: "Do you work with clients outside India?", a: "Yes. We serve clients in the UAE, United Kingdom, and United States. We schedule video calls during your business hours and accept payment in INR, AED, GBP, and USD." },
    { q: "Can you take over a project another agency started?", a: "Yes. We regularly audit and continue development on inherited codebases. We'll review what exists, document it clearly, and pick up from where the previous team left off." },
    { q: "What makes SPACIVA different from a freelancer?", a: "A freelancer hands you code. SPACIVA delivers a production-ready system with documentation, deployment setup, testing, and a handover call. You also get senior engineering expertise — not a junior developer working nights." },
  ];

  return (
    <section className="py-20 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3 inline-block">
              Support Core
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
              Frequently Asked <span className="gradient-text font-black">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
              Answers to standard questions about our custom software development scoping and deployment.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="border rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between px-6 py-4.5 text-left cursor-pointer transition-colors hover:bg-slate-50/50"
                  >
                    <span className="text-xs sm:text-sm font-bold pr-4" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={16} className="shrink-0 text-electric-blue" />
                    ) : (
                      <ChevronDown size={16} className="shrink-0 text-[var(--text-muted)]" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
                      <p className="text-[12px] sm:text-xs leading-relaxed pt-4" style={{ color: "var(--text-secondary)" }}>
                        {faq.a.includes("CRM") ? (
                          <span>
                            We build custom CRM tools from scratch. Read more about{" "}
                            <a href="/custom-crm-development" className="text-electric-blue hover:underline font-semibold">CRM Development</a>.
                          </span>
                        ) : faq.a.includes("AI") ? (
                          <span>
                            We build autonomous agents trained on your business data. Read more about{" "}
                            <a href="/ai-automation-solutions" className="text-electric-blue hover:underline font-semibold">AI Automation Solutions</a>.
                          </span>
                        ) : (
                          faq.a
                        )}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
