"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, Clock, Code2, Shield, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

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

const trustPoints = [
  { icon: Code2, label: "Full source code ownership" },
  { icon: Clock, label: "Reply within 24–48 hours" },
  { icon: Shield, label: "NDA signed on request" },
  { icon: CheckCircle, label: "Senior engineers, no middlemen" },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded-xl overflow-hidden transition-all duration-200"
      style={{ borderColor: "var(--border-subtle)", background: "var(--bg-card)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-[13px] font-semibold pr-4" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
        {open ? (
          <ChevronUp size={14} className="shrink-0" style={{ color: "var(--text-muted)" }} />
        ) : (
          <ChevronDown size={14} className="shrink-0" style={{ color: "var(--text-muted)" }} />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <p className="text-[12px] leading-relaxed pt-3" style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", service: "AI Solutions" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    border: "1px solid var(--border-subtle)",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
  };

  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--color-electric-blue)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.08)";
  };
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "var(--border-subtle)";
    e.currentTarget.style.boxShadow = "none";
  };

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
    <main className="min-h-screen pt-28 pb-24 relative" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[160px] opacity-40" style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3.5 inline-block" style={{ color: "var(--color-electric-blue)" }}>
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
              Start Your Project
            </h1>
            <p className="text-sm sm:text-base max-w-lg mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Tell us about your project requirements. We will review, scope, and reply within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Trust + FAQ */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection delay={0.05}>
              <div className="p-6 rounded-2xl border mb-6" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--bg-navy)" }}>
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Direct Email</p>
                    <a href="mailto:spacivaaisolution@gmail.com" className="text-[11px]" style={{ color: "var(--color-electric-blue)" }}>
                      spacivaaisolution@gmail.com
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {trustPoints.map((tp) => (
                    <div key={tp.label} className="flex items-center gap-2">
                      <tp.icon size={13} className="shrink-0" style={{ color: "var(--color-electric-blue)" }} />
                      <span className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>{tp.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider mb-3 px-1" style={{ color: "var(--text-muted)" }}>
                Common Questions
              </h3>
              <div className="space-y-2">
                {faqs.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-3xl border" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-md)" }}>
                <h3 className="text-base font-bold mb-6" style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                  Describe Your Requirements
                </h3>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-4" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                      <label className="block">
                        <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Your Name *</span>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all" style={inputStyle} onFocus={focusIn} onBlur={focusOut} placeholder="e.g. John Doe" />
                      </label>
                      <label className="block">
                        <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Your Email *</span>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all" style={inputStyle} onFocus={focusIn} onBlur={focusOut} placeholder="e.g. john@company.com" />
                      </label>
                      <label className="block">
                        <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Service Interest</span>
                        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all cursor-pointer" style={inputStyle} onFocus={focusIn} onBlur={focusOut}>
                          <option value="AI Solutions">AI Automation Agents</option>
                          <option value="CRM Development">Custom CRM Systems</option>
                          <option value="LMS Systems">Enterprise LMS Platforms</option>
                          <option value="Web Development">Custom Web Applications</option>
                          <option value="Technical SEO">Search Engine Optimization</option>
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Project Description *</span>
                        <textarea required rows={5} value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })} className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-all resize-none" style={inputStyle} onFocus={focusIn} onBlur={focusOut} placeholder="What features or business workflows does the system need to automate?" />
                      </label>
                      <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90" style={{ background: "var(--bg-navy)", boxShadow: "var(--shadow-sm)" }} onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")} onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}>
                        {isSubmitting ? "Sending…" : "Submit Request"}
                        <Send size={14} />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="text-center py-10">
                      <div className="inline-flex p-3 rounded-full mb-4" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>Request Sent!</h4>
                      <p className="text-sm max-w-sm mx-auto leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                        Thank you! Your requirements have been submitted. We will review and reply within 24 hours.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="px-5 py-2.5 text-sm font-medium rounded-xl border transition-colors" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-secondary)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
