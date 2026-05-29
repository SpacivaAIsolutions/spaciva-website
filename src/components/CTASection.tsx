"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Code2, Clock, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const valueProps = [
  { icon: Code2, text: "Full source code ownership on delivery" },
  { icon: Clock, text: "48-hour response guarantee" },
  { icon: Shield, text: "Fixed-price scoping, no hidden costs" },
  { icon: CheckCircle, text: "Senior engineers — direct communication" },
];

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

  const inputStyle = {
    border: "1px solid var(--border-subtle)",
    background: "var(--bg-secondary)",
    color: "var(--text-primary)",
  };

  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--color-electric-blue)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.08)";
  };
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--border-subtle)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div
            className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden border"
            style={{ borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-lg)" }}
          >
            {/* ── Left Navy Panel ── */}
            <div
              className="lg:col-span-2 p-10 sm:p-12 flex flex-col justify-between"
              style={{ background: "var(--bg-navy)" }}
            >
              <div>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase mb-5 inline-block"
                  style={{ color: "rgba(147,197,253,0.85)" }}
                >
                  Start a Project
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4 leading-tight text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Let&apos;s build something that moves your business forward
                </h2>
                <p className="text-sm mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  We scope, design, and ship AI automation, custom CRM, LMS platforms, and web applications — end-to-end with full source ownership.
                </p>

                <div className="space-y-4">
                  {valueProps.map((vp) => (
                    <div key={vp.text} className="flex items-start gap-3">
                      <vp.icon size={14} className="mt-0.5 shrink-0" style={{ color: "rgba(110,231,183,0.9)" }} />
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.62)" }}>{vp.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <a
                  href="mailto:spacivaaisolution@gmail.com"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  <Mail size={14} />
                  spacivaaisolution@gmail.com
                </a>
              </div>
            </div>

            {/* ── Right Form Panel ── */}
            <div
              className="lg:col-span-3 p-10 sm:p-12"
              style={{ background: "var(--bg-primary)", borderLeft: "1px solid var(--border-subtle)" }}
            >
              <h3
                className="text-lg font-bold mb-7"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
              >
                Tell us about your project
              </h3>

              {status === "success" ? (
                <div className="py-10 text-center">
                  <div
                    className="inline-flex p-3 rounded-full mb-4"
                    style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}
                  >
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>Message sent!</h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    We will review and reply within 24–48 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium px-5 py-2.5 rounded-xl border transition-colors"
                    style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-secondary)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Full Name *</span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={inputStyle}
                        onFocus={focusIn}
                        onBlur={focusOut}
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Email Address *</span>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={inputStyle}
                        onFocus={focusIn}
                        onBlur={focusOut}
                        autoComplete="email"
                        required
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Company (optional)</span>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={inputStyle}
                      onFocus={focusIn}
                      onBlur={focusOut}
                      autoComplete="organization"
                    />
                  </label>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>

                  <label className="block">
                    <span className="text-[11px] font-semibold block mb-1.5" style={{ color: "var(--text-muted)" }}>Project Description *</span>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      style={inputStyle}
                      onFocus={focusIn}
                      onBlur={focusOut}
                      required
                      placeholder="What are you building? What problem does it solve?"
                    />
                  </label>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.97]"
                      style={{ background: "var(--bg-navy)", boxShadow: "var(--shadow-sm)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
                    >
                      {status === "sending" ? "Sending…" : "Send Message"}
                      <ArrowRight size={15} />
                    </button>

                    {status === "error" && (
                      <p className="text-xs" style={{ color: "#EF4444" }} aria-live="polite">
                        {errorMessage}
                      </p>
                    )}
                    {status === "idle" && (
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        We reply within 24–48 hours.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
