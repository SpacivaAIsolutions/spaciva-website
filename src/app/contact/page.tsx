"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Plus, Minus } from "lucide-react";

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
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between group text-left cursor-pointer transition-colors hover:text-blue-600"
      >
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-slate-400 group-hover:text-blue-400 w-4">
            0{idx + 1}
          </span>
          <span className={`text-xl font-bold tracking-tight transition-colors ${open ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
            {faq.q}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors shrink-0 ${open ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-slate-200 text-slate-400 group-hover:border-blue-200 group-hover:text-blue-500'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
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
            <div className="pb-8 pl-14 pr-4 max-w-2xl text-slate-500 text-base leading-relaxed font-medium">
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

  const inputClass = "w-full border-b border-slate-300 py-4 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors text-lg";

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
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Left Panel: Intro & FAQs */}
          <div>
            <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">Get in Touch</span>
            <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
              Start Your <br /><span className="italic text-slate-400 font-serif">Project.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium mb-16 max-w-md leading-relaxed">
              Tell us about your project requirements. We will review, scope, and reply within 24 hours.
            </p>

            <div className="mb-16">
              <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Direct Email</span>
              <a
                href="mailto:spacivaaisolution@gmail.com"
                className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                spacivaaisolution@gmail.com
              </a>
            </div>

            <div className="mt-16 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8 tracking-tight">Common Questions</h3>
              <div>
                {faqs.map((faq, idx) => <FAQItem key={faq.q} faq={faq} idx={idx} />)}
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="pt-4 lg:pt-16">
            {submitted ? (
              <div className="py-12 bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
                <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h4>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Thank you! Your requirements have been submitted. We will review and reply within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your Name *"
                />

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="Email Address *"
                />

                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`${inputClass} cursor-pointer appearance-none`}
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
                />

                <div className="mt-8 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
