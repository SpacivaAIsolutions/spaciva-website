"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, MapPin, Calendar, MessageSquare, Lightbulb, HelpCircle, ExternalLink } from "lucide-react";
import Script from "next/script";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [website, setWebsite] = useState("");

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
          message: `Project Description:\n${formData.project}`,
        }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok && data?.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", project: "" });
      } else {
        alert(data?.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      alert("An error occurred. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] flex flex-col font-sans relative">
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Background Dot Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft gradient blobs for visual interest */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[20%] right-[-10%] w-[40%] h-[40%] bg-[#4F46E5]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <main className="flex-1 w-full pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 flex flex-col gap-12">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0F172A]">
            Tell Us the Problem. We&apos;ll Design the <span className="text-[#7C3AED]">Solution.</span>
          </h1>
          <p className="text-lg text-[#334155] font-medium leading-relaxed max-w-2xl mx-auto">
            Forget the buzzwords. AI, apps, automation, or software—we'll recommend what actually fits your business.
          </p>
        </motion.div>

        {/* Two Column Layout: Call & Message Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mt-4">

          {/* Left Column: Call Card & Contact Info */}
          <div className="flex flex-col gap-8">
            {/* Priority 1: Meeting Button Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full relative"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] rounded-[32px] blur opacity-20 pointer-events-none" />

              <div className="relative bg-white/80 backdrop-blur-xl border border-[#E2E8F0] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl shadow-[#7C3AED]/10 flex flex-col items-center text-center gap-4 h-full">
                <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-2">
                  <Calendar className="w-8 h-8 text-[#7C3AED]" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#0F172A] mb-2">Schedule Your Discovery Call</h2>
                  <p className="text-[#334155] font-medium text-sm max-w-md mx-auto">
                    Find a time that works best for you. We'll jump on a quick 30-minute chat to discuss your business needs and how we can help.
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof window !== 'undefined' && (window as any).Calendly) {
                      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/spacivasolution/30min' });
                    }
                  }}
                  className="mt-2 w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-[#7C3AED] text-white font-bold text-base hover:bg-[#6D28D9] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#7C3AED]/30 flex items-center gap-2 group"
                >
                  Let&apos;s Talk Business
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </motion.div>

            {/* Alternate CTAs Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-md border border-[#E2E8F0] rounded-3xl p-5 sm:p-8 flex flex-col gap-4 shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-bold mb-2 text-[#0F172A]">How can we help?</h3>

              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full group bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-2xl p-4 flex items-center justify-between transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5F3FF] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <span className="font-bold text-[#0F172A] group-hover:text-[#7C3AED] transition-colors">Let's Talk</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
              </button>

              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full group bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-2xl p-4 flex items-center justify-between transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-bold text-[#0F172A] group-hover:text-indigo-600 transition-colors">Discuss Ideas</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Form & Info */}
          <div className="flex flex-col gap-8">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-md border border-[#E2E8F0] rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-xl shadow-slate-200/50 flex-1 flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-3xl font-bold mb-2 text-[#0F172A]">Or Drop Us a Message</h2>
              <p className="text-[#334155] mb-8 font-medium">Prefer writing? Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F5F3FF] border border-[#7C3AED]/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-16 h-16 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#0F172A]">Request Received!</h3>
                  <p className="text-[#334155]">Thank you for reaching out. We will review your project details and respond shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-2 rounded-full border border-[#E2E8F0] text-[#0F172A] hover:bg-gray-50 transition-colors font-medium text-sm bg-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#334155]">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none text-[#0F172A] placeholder-gray-400 focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#334155]">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none text-[#0F172A] placeholder-gray-400 focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#334155]">Project Details</label>
                    <textarea
                      required
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      placeholder="Tell us about your challenges, goals, and what you're looking to build..."
                      rows={4}
                      className="w-full bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none text-[#0F172A] placeholder-gray-400 focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full h-[60px] rounded-full bg-[#7C3AED] text-white font-bold text-lg hover:bg-[#6D28D9] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-[#7C3AED]/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-md border border-[#E2E8F0] rounded-3xl p-5 sm:p-8 flex flex-col gap-6 shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-bold text-[#0F172A]">Direct Contact</h3>

              <div className="flex flex-col sm:flex-row gap-6 justify-between">
                <a href="mailto:spacivaaisolution@gmail.com" className="flex items-center gap-4 group min-w-0">
                  <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center shrink-0 group-hover:bg-[#F5F3FF] transition-colors">
                    <Mail className="w-5 h-5 text-gray-500 group-hover:text-[#7C3AED] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#0F172A] font-medium break-all">spacivaaisolution@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}
