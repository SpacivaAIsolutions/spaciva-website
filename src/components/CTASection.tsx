"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const canSubmit = useMemo(
    () => status !== "sending" && name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0,
    [email, message, name, status]
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, website }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send message.");
      setStatus("success");
      setName(""); setEmail(""); setCompany(""); setMessage(""); setWebsite("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass = "w-full border-b border-slate-300 py-4 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 focus:border-slate-900 transition-colors text-lg";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Text Panel */}
          <div>
            <h2 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
              Let&apos;s build <br/>something <span className="italic text-slate-400 font-serif">great.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium mb-12 max-w-md leading-relaxed">
              We scope, design, and ship AI automation, custom CRM, and web applications — end-to-end with full source ownership.
            </p>
            <div className="space-y-6">
              <div>
                <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Email Us</span>
                <a
                  href="mailto:spacivaaisolution@gmail.com"
                  className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  spacivaaisolution@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="pt-4">
            {status === "success" ? (
              <div className="py-12 bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
                <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h4>
                <p className="text-slate-500 mb-8">We will review your inquiry and reply within 24–48 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-bold border-b border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Your Name *"
                  autoComplete="name"
                  required
                />
                
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={inputClass}
                  placeholder="Email Address *"
                  autoComplete="email"
                  required
                />
                
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                  placeholder="Company Name (optional)"
                  autoComplete="organization"
                />

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`${inputClass} resize-none`}
                  required
                  placeholder="Tell us about your project *"
                />

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] text-white text-sm font-bold rounded-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"
                  >
                    {status === "sending" ? "Sending..." : "Send Request"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-500 font-medium">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
