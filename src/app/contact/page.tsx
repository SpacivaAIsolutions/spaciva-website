"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const faqs = [
  {
    q: "How does the engagement process start?",
    a: "We start with a 30-minute scoping call to map out your software requirements, database needs, or AI integration goals. Following this, we deliver a technical roadmap and MVP specification document.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes. We respect intellectual property. We sign standard NDAs before discussing custom project databases, API architectures, or private client systems.",
  },
  {
    q: "Do we own the custom source code?",
    a: "Yes. Unlike generic SaaS portals, you receive 100% full codebase ownership of the custom CRM, LMS, or web portals we build, allowing you to scale or host without recurring seat license fees.",
  },
  {
    q: "What is your typical development cycle?",
    a: "A custom landing page or SEO setup typically takes 2–3 weeks. More complex AI pipelines, corporate training LMS interfaces, or sales CRM modules take 4–8 weeks to deliver a verified, fully operational build.",
  },
];

function FAQItem({ faq, idx }: { faq: { q: string; a: string }, idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between group text-left transition-colors hover:text-[#FF4D00]"
      >
        <div className="flex items-center gap-6">
          <span className="text-xs font-semibold text-[#6B6A65] w-4" style={{ fontFamily: I }}>
            0{idx + 1}
          </span>
          <span className="text-base sm:text-lg font-bold tracking-tight text-[#0E0E0C] group-hover:text-[#FF4D00] transition-colors" style={{ fontFamily: J }}>
            {faq.q}
          </span>
        </div>
        <div className="w-6 h-6 rounded-full border border-black/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF4D00]/30 transition-all duration-200">
          <ChevronRight
            className={`w-3 h-3 text-[#6B6A65] transition-transform duration-300 ${open ? 'rotate-90 text-[#FF4D00]' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 pr-4 max-w-2xl text-[#6B6A65] text-sm leading-relaxed" style={{ fontFamily: I }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", service: "AI Solutions" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [website, setWebsite] = useState("");

  const inputClass = "w-full border-b border-black/[0.15] py-4 bg-transparent outline-none text-[#0E0E0C] placeholder-[#BBBBBA] focus:border-[#FF4D00] transition-colors text-[15px]";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website, // Honeypot
          message: `Service Interest: ${formData.service}\n\nProject Description:\n${formData.project}`,
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok && data?.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", project: "", service: "AI Solutions" });
      } else {
        alert(data?.error || "Failed to submit request. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="theme-redesign min-h-screen pt-28 pb-24 bg-[#F7F6F2] px-5 lg:px-10 text-[#0E0E0C]" style={{ fontFamily: I }}>
      <div className="max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-16 lg:gap-24">

          {/* Left Panel: Intro & FAQs */}
          <div>
            <span className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              <span
                className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em]"
                style={{ fontFamily: I }}
              >
                Get in Touch
              </span>
            </span>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
              Start Your <br />
              <span className="italic font-light text-[#6B6A65]">Project.</span>
            </h1>
            <p className="text-[#6B6A65] text-base leading-relaxed mb-12 max-w-md" style={{ fontFamily: I }}>
              Tell us about your project requirements. We will review, scope, and reply within 24 hours.
            </p>

            <div className="mb-16">
              <span className="text-[11px] font-bold text-[#6B6A65] uppercase tracking-wider block mb-2" style={{ fontFamily: I }}>Direct Email</span>
              <a
                href="mailto:spacivaaisolution@gmail.com"
                className="text-xl sm:text-2xl font-bold text-[#0E0E0C] hover:text-[#FF4D00] transition-colors"
                style={{ fontFamily: J }}
              >
                spacivaaisolution@gmail.com
              </a>
            </div>

            <div className="mt-16 border-t border-black/[0.08]">
              <h3 className="text-xl font-bold text-[#0E0E0C] mt-16 mb-8 tracking-tight" style={{ fontFamily: J }}>Common Questions</h3>
              <div className="border-t border-black/[0.08]">
                {faqs.map((faq, idx) => <FAQItem key={faq.q} faq={faq} idx={idx} />)}
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="pt-4 lg:pt-16">
            {submitted ? (
              <div className="py-12 bg-white rounded-3xl p-8 text-center border border-black/[0.06] shadow-sm">
                <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0E0E0C] mb-2" style={{ fontFamily: J }}>Request Sent!</h4>
                <p className="text-[#6B6A65] text-sm mb-8 max-w-sm mx-auto" style={{ fontFamily: I }}>Thank you! Your requirements have been submitted. We will review and reply within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#FF4D00] border-b border-[#FF4D00]/40 pb-0.5 hover:text-[#e54400] hover:border-[#e54400] transition-all"
                  style={{ fontFamily: J }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 bg-white border border-black/[0.06] rounded-3xl shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your Name *"
                  style={{ fontFamily: I }}
                />

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="Email Address *"
                  style={{ fontFamily: I }}
                />

                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`${inputClass} cursor-pointer appearance-none bg-white`}
                  style={{ fontFamily: I }}
                >
                  <option value="AI Solutions">AI Automation Agents</option>
                  <option value="CRM Development">Custom CRM Systems</option>
                  <option value="LMS Systems">Enterprise LMS Platforms</option>
                  <option value="Web Development">Custom Web Applications</option>
                  <option value="Technical SEO">Search Engine Optimization</option>
                </select>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>

                <textarea
                  required
                  rows={5}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Project Description *"
                  style={{ fontFamily: I }}
                />

                <div className="mt-4 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-[#FF4D00] hover:bg-[#e54400] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed w-full justify-center text-[15px]"
                    style={{ fontFamily: J }}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
