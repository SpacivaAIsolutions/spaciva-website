"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Send, CheckCircle } from "lucide-react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", service: "AI Solutions" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.project) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              Get in Touch
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start Your Project Build
            </h1>
            <p
              className="text-xs sm:text-sm max-w-lg mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Reach out to review scoping details, check developer rates, or request a custom CRM/LMS architecture draft.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection delay={0.05}>
              <div
                className="p-6 rounded-2xl border"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <h3 className="text-sm font-bold text-white mb-6">Contact Channels</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:spacivaaisolution@gmail.com"
                    className="flex items-center gap-3.5 text-xs text-[var(--text-secondary)] hover:text-white transition-colors group"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-electric-blue border border-blue-500/20 group-hover:scale-105 transition-transform duration-350 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">Direct Email</p>
                      <p className="text-[11px]">spacivaaisolution@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Trust Building FAQ */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white px-2">scoping & trust faq</h3>
              {faqs.map((faq, i) => (
                <AnimatedSection key={faq.q} delay={i * 0.05 + 0.1}>
                  <div
                    className="p-5 rounded-2xl border"
                    style={{
                      background: "var(--bg-card)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <h4 className="text-[11px] font-bold text-white mb-1.5">{faq.q}</h4>
                    <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {faq.a}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Column: Scoping Form */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1}>
              <div
                className="p-8 rounded-3xl border relative"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <h3 className="text-base font-bold text-white mb-6">Describe Your Requirements</h3>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border outline-hidden transition-colors"
                          style={{
                            background: "rgba(0,0,0,0.15)",
                            borderColor: "var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                          placeholder="e.g. John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border outline-hidden transition-colors"
                          style={{
                            background: "rgba(0,0,0,0.15)",
                            borderColor: "var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                          placeholder="e.g. john@domain.com"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                          Select Service Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border outline-hidden transition-colors cursor-pointer"
                          style={{
                            background: "rgba(0,0,0,0.15)",
                            borderColor: "var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                        >
                          <option value="AI Solutions" className="bg-slate-900 text-white">AI Automation Agents</option>
                          <option value="CRM Development" className="bg-slate-900 text-white">Custom CRM Systems</option>
                          <option value="LMS Systems" className="bg-slate-900 text-white">Enterprise LMS Platforms</option>
                          <option value="Web Development" className="bg-slate-900 text-white">Custom Web Applications</option>
                          <option value="Technical SEO" className="bg-slate-900 text-white">Search Engine Optimization</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                          Project Description
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.project}
                          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border outline-hidden transition-colors resize-none"
                          style={{
                            background: "rgba(0,0,0,0.15)",
                            borderColor: "var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                          placeholder="What features or business workflows does the system need to automate?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending Scoping Details...</span>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <Send size={13} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-10"
                    >
                      <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 animate-bounce">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">Scoping Request Sent</h4>
                      <p className="text-xs max-w-sm mx-auto leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                        Thank you! Your requirements have been submitted to our software team. We will review them and reply back within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 text-xs font-semibold text-white rounded-full border hover:bg-white/5 transition-colors"
                        style={{ borderColor: "var(--border-subtle)" }}
                      >
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
