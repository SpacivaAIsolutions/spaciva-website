"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Users,
  GraduationCap,
  Code2,
  Search,
  Check,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Terminal,
  Play,
  RefreshCw,
  Plus,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// ── SERVICES DEFINITION ──
const servicesList = [
  {
    id: "ai",
    icon: Bot,
    title: "AI Solutions & Automation",
    shortDesc: "Custom AI agents, LLM integrations, and pipeline automation to accelerate operation speeds.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "crm",
    icon: Users,
    title: "Custom CRM Systems",
    shortDesc: "Tailored relationship management platforms to sync teams, track deals, and score leads.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "lms",
    icon: GraduationCap,
    title: "LMS Platforms",
    shortDesc: "Interactive learning management systems with custom courses, progress charts, and quiz modules.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "web",
    icon: Code2,
    title: "Web & App Development",
    shortDesc: "High-performance React/Next.js platforms and dashboards with responsive grid layouts.",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Growth Marketing",
    shortDesc: "Strategic search engine optimization, content roadmaps, and local authority ranking.",
    color: "from-rose-500 to-pink-500",
  },
];

// ── CUSTOM TYPES ──
type AIResponseTemplate = {
  prompt: string;
  response: string;
  steps: string[];
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("ai");
  const explorerRef = useRef<HTMLDivElement>(null);

  const scrollToExplorer = (tabId: string) => {
    setActiveTab(tabId);
    if (explorerRef.current) {
      explorerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(ellipse at center, var(--gradient-orb-1), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--color-electric-blue)" }}>
            Capabilities
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Intelligent business solutions
          </h2>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto text-center mb-16 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We engineer high-performance systems and intelligent automation. Explore our core services below and test them in our interactive workspace.
          </p>
        </AnimatedSection>

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {servicesList.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.05}>
              <div
                onClick={() => scrollToExplorer(service.id)}
                className="group p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  borderColor: activeTab === service.id ? "var(--color-electric-blue)" : "var(--border-subtle)",
                  boxShadow: activeTab === service.id ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== service.id) {
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== service.id) {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }
                }}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-linear-to-br ${service.color} text-white mb-6 shadow-md`}
                  >
                    <service.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[15px] font-bold mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                    {service.shortDesc}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1 text-[11px] font-medium transition-colors"
                  style={{ color: activeTab === service.id ? "var(--color-electric-blue)" : "var(--text-muted)" }}
                >
                  <span>Test Simulator</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── INTERACTIVE EXPLORER WORKSPACE ── */}
        <div ref={explorerRef} className="pt-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider border border-electric-blue/10 bg-electric-blue/5 mb-3 font-semibold text-electric-blue">
                <Sparkles size={11} /> Live Playground
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Interactive Solution Explorer
              </h3>
              <p className="text-xs max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
                Click through the tabs below to test live, functional mini-dashboards demonstrating how our systems function.
              </p>
            </div>
          </AnimatedSection>

          <div
            className="rounded-3xl border overflow-hidden transition-all duration-300"
            style={{
              borderColor: "var(--border-subtle)",
              background: "var(--bg-card)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Explorer Nav Tab Bar */}
            <div
              className="flex overflow-x-auto border-b"
              style={{
                borderColor: "var(--border-subtle)",
                background: "var(--bg-secondary)",
                scrollbarWidth: "none",
              }}
            >
              {servicesList.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex-1 min-w-[140px] px-6 py-4.5 flex items-center justify-center gap-2.5 text-xs font-semibold relative transition-all cursor-pointer whitespace-nowrap"
                    style={{
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      background: isActive ? "var(--bg-primary)" : "transparent",
                    }}
                  >
                    <tab.icon
                      size={15}
                      className="transition-transform duration-300"
                      style={{
                        color: isActive ? "var(--color-electric-blue)" : "var(--text-muted)",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                    <span>{tab.title.split(" ")[0]} {tab.title.split(" ")[1] === "Solutions" ? "AI" : tab.title.split(" ")[1]}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-explorer-bar"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{
                          background: "linear-gradient(90deg, var(--color-electric-blue), var(--color-violet))",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Live Panel Content */}
            <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="w-full flex-1"
                >
                  {activeTab === "ai" && <AISimulator />}
                  {activeTab === "crm" && <CRMSimulator />}
                  {activeTab === "lms" && <LMSSimulator />}
                  {activeTab === "web" && <WebSimulator />}
                  {activeTab === "seo" && <SEOSimulator />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 1. AI SOLUTIONS SIMULATOR ──
const aiTemplates: AIResponseTemplate[] = [
  {
    prompt: "Extract structured data from PDF invoice #INV-492",
    response: `{
  "invoiceNumber": "INV-492",
  "issuer": "GlobalTech Corp",
  "date": "2026-05-18",
  "items": [
    { "desc": "Custom LMS Portal Setup", "qty": 1, "total": 12000.00 },
    { "desc": "Cloud Maintenance", "qty": 1, "total": 850.00 }
  ],
  "taxAmount": 1028.00,
  "grandTotal": 13878.00,
  "paymentStatus": "UNPAID"
}`,
    steps: ["Read invoice document file bytes", "Parsed OCR text blocks", "Extracted document fields using LLM schema matching", "Validated math checksums", "Formatted JSON output"],
  },
  {
    prompt: "Draft customized follow-up email for warm lead",
    response: `Subject: Re: Next steps for CRM integration - SPACIVA

Hi Sarah,

It was great discussing your team's Salesforce challenges yesterday. Based on your current workflow bottlenecks, we can deploy a custom middleware connector to bridge your regional branches in under two weeks.

I have attached our detailed pricing options here. Let me know if tomorrow at 10 AM works for a brief screen share demo.

Best regards,
Anya (AI Sales Assistant)`,
    steps: ["Read lead history from database CRM profile", "Checked email history sentiment (positive)", "Determined custom integration value hook", "Generated draft utilizing professional corporate tone"],
  },
  {
    prompt: "Analyze user reviews for App store sentiment",
    response: `{
  "sentiment": "POSITIVE",
  "score": 0.88,
  "keywords": ["speed", "minimalism", "clean UI", "quick onboarding"],
  "issuesIdentified": [
    "Landscape rotation bug in iPadOS (2 reports)"
  ],
  "suggestedReply": "Thank you for the amazing feedback! We are pushing a fix for the iPadOS rotation bug in release v2.4.1 tonight."
}`,
    steps: ["Fetched latest 50 app reviews", "Cleaned raw text inputs", "Executed multi-class sentiment token analysis", "Extracted semantic keyword entities", "Created auto-reply suggestion based on bug records"],
  },
];

function AISimulator() {
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>("");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simSteps, setSimSteps] = useState<string[]>([]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const runSimulation = (idx: number) => {
    if (isTyping) return;
    setSelectedPrompt(idx);
    setIsTyping(true);
    setTypedText("");
    setActiveStep(0);
    setSimSteps([]);

    const item = aiTemplates[idx];
    const steps = item.steps;

    // Step-by-step console logging animation
    let stepIdx = 0;
    const stepInterval = setInterval(() => {
      if (stepIdx < steps.length) {
        setSimSteps((prev) => [...prev, `[system] ${steps[stepIdx]}`]);
        setActiveStep(stepIdx);
        stepIdx++;
      } else {
        clearInterval(stepInterval);
        // Start streaming JSON response
        let charIdx = 0;
        const textToType = item.response;
        const typeInterval = setInterval(() => {
          if (charIdx < textToType.length) {
            setTypedText((prev) => prev + textToType.charAt(charIdx));
            charIdx += 4; // Fast-typing streaming
          } else {
            setTypedText(textToType); // Ensure absolute completion
            clearInterval(typeInterval);
            setIsTyping(false);
          }
        }, 15);
      }
    }, 400);
  };

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [simSteps, typedText]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold mb-2 flex items-center gap-2">
            <Bot size={18} className="text-electric-blue" />
            AI Workflow Agent
          </h4>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Select an operational workflow template. Our AI agent will dynamically coordinate database schemas, parse files, and draft outputs.
          </p>

          <div className="space-y-2">
            {aiTemplates.map((item, idx) => (
              <button
                key={idx}
                onClick={() => runSimulation(idx)}
                disabled={isTyping}
                className="w-full text-left p-3.5 rounded-xl border text-xs font-medium transition-all flex items-center justify-between cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: selectedPrompt === idx ? "var(--bg-primary)" : "transparent",
                  borderColor: selectedPrompt === idx ? "var(--color-electric-blue)" : "var(--border-subtle)",
                  color: selectedPrompt === idx ? "var(--text-primary)" : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  if (selectedPrompt !== idx) e.currentTarget.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  if (selectedPrompt !== idx) e.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                <span>{item.prompt}</span>
                <Play size={12} className={selectedPrompt === idx ? "text-electric-blue" : "text-muted"} />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex gap-4">
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>LLM Agility</p>
              <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                Latency average: 210ms
              </p>
            </div>
            <div className="w-px h-8 bg-border-subtle" style={{ background: "var(--border-subtle)" }} />
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Cost Saved</p>
              <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                ~92% per manual run
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col h-[320px] rounded-2xl border overflow-hidden font-mono text-[11px]" style={{ borderColor: "var(--border-subtle)", background: "rgba(10, 15, 26, 0.85)" }}>
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.05)", background: "rgba(255, 255, 255, 0.02)" }}>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
            spaciva-agent-session.log
          </span>
          <Terminal size={12} style={{ color: "var(--text-muted)" }} />
        </div>

        {/* Terminal logs area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 select-text scrollbar-thin">
          {selectedPrompt === null && (
            <div className="h-full flex flex-col items-center justify-center text-center text-muted" style={{ color: "var(--text-muted)" }}>
              <Bot size={28} className="mb-2 animate-pulse" />
              <p>System Idle.</p>
              <p className="text-[10px] mt-1">Select a workflow prompt on the left to start execution.</p>
            </div>
          )}

          {selectedPrompt !== null && (
            <>
              <p className="text-electric-blue">
                $ run-agent --workflow &quot;{aiTemplates[selectedPrompt].prompt}&quot;
              </p>

              {simSteps.map((step, idx) => (
                <p key={idx} className={idx === activeStep && isTyping ? "text-emerald-400" : "text-white/60"}>
                  {step}
                </p>
              ))}

              {isTyping && typedText.length === 0 && (
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <RefreshCw size={11} className="animate-spin" />
                  <span>Synthesizing output format...</span>
                </div>
              )}

              {typedText.length > 0 && (
                <div className="mt-4 p-3 rounded-lg border bg-black/40 text-cyan-300 border-cyan-500/10 whitespace-pre-wrap">
                  {typedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </div>
              )}

              {!isTyping && typedText.length > 0 && (
                <p className="text-emerald-400 font-bold flex items-center gap-1 mt-2">
                  <Check size={12} /> Execution successful. Output logged.
                </p>
              )}

              <div ref={terminalBottomRef} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── 2. CUSTOM CRM SIMULATOR ──
type CRMDeal = {
  id: string;
  company: string;
  stage: "leads" | "in_progress" | "closed_won";
  amount: number;
};

function CRMSimulator() {
  const [deals, setDeals] = useState<CRMDeal[]>([
    { id: "1", company: "Apex Retail", stage: "leads", amount: 4800 },
    { id: "2", company: "Zeta Logistics", stage: "in_progress", amount: 15500 },
    { id: "3", company: "Horizon Media", stage: "in_progress", amount: 8200 },
    { id: "4", company: "Quantum Labs", stage: "closed_won", amount: 24000 },
    { id: "5", company: "Alpha Health", stage: "leads", amount: 6200 },
  ]);

  const advanceStage = (id: string) => {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id !== id) return deal;
        const nextStage: Record<string, "leads" | "in_progress" | "closed_won"> = {
          leads: "in_progress",
          in_progress: "closed_won",
          closed_won: "leads",
        };
        return { ...deal, stage: nextStage[deal.stage] };
      })
    );
  };

  const addNewDeal = () => {
    const names = ["Nova Labs", "Vibe Tech", "Pioneer Co", "Enigma Ltd", "ByteCorp"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAmount = Math.floor(Math.random() * 15 + 3) * 1000;
    const newDeal: CRMDeal = {
      id: Date.now().toString(),
      company: `${randomName} (${deals.length + 1})`,
      stage: "leads",
      amount: randomAmount,
    };
    setDeals((prev) => [...prev, newDeal]);
  };

  const stats = useMemo(() => {
    const pipelineTotal = deals.reduce((acc, curr) => acc + curr.amount, 0);
    const wonTotal = deals
      .filter((d) => d.stage === "closed_won")
      .reduce((acc, curr) => acc + curr.amount, 0);
    const inProgressCount = deals.filter((d) => d.stage === "in_progress").length;
    return { pipelineTotal, wonTotal, inProgressCount };
  }, [deals]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-4 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold mb-2 flex items-center gap-2">
            <Users size={18} className="text-indigo-400" />
            CRM Lead Management
          </h4>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Custom built pipelines with secure cloud architecture. Click on any card in the sandbox columns to advance the lead stage.
          </p>

          <button
            onClick={addNewDeal}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border text-xs font-semibold hover:bg-indigo-500/5 hover:border-indigo-400/40 transition-all cursor-pointer"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <Plus size={14} className="text-indigo-400" />
            Add Simulated Deal
          </button>
        </div>

        {/* CRM KPI Metrics */}
        <div className="mt-8 pt-4 border-t space-y-3" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex justify-between items-center text-xs">
            <span style={{ color: "var(--text-secondary)" }}>Active Pipeline:</span>
            <span className="font-bold" style={{ color: "var(--text-primary)" }}>${stats.pipelineTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span style={{ color: "var(--text-secondary)" }}>Closed Won:</span>
            <span className="font-bold text-emerald-400">${stats.wonTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span style={{ color: "var(--text-secondary)" }}>In Progress Deals:</span>
            <span className="font-bold text-indigo-400">{stats.inProgressCount}</span>
          </div>
        </div>
      </div>

      {/* CRM Sandbox Board */}
      <div className="lg:col-span-8 grid grid-cols-3 gap-3 min-h-[300px]">
        {/* LEADS COLUMN */}
        <div className="rounded-xl p-3 border flex flex-col" style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.1)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted" style={{ color: "var(--text-secondary)" }}>
              Leads
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--bg-card-hover)", color: "var(--text-secondary)" }}>
              {deals.filter((d) => d.stage === "leads").length}
            </span>
          </div>
          <div className="space-y-2 overflow-y-auto flex-1 max-h-[250px] scrollbar-none">
            {deals
              .filter((d) => d.stage === "leads")
              .map((deal) => (
                <CRMCard key={deal.id} deal={deal} onClick={() => advanceStage(deal.id)} />
              ))}
          </div>
        </div>

        {/* IN PROGRESS COLUMN */}
        <div className="rounded-xl p-3 border flex flex-col" style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.1)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
              Meeting Set
            </span>
            <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded">
              {deals.filter((d) => d.stage === "in_progress").length}
            </span>
          </div>
          <div className="space-y-2 overflow-y-auto flex-1 max-h-[250px] scrollbar-none">
            {deals
              .filter((d) => d.stage === "in_progress")
              .map((deal) => (
                <CRMCard key={deal.id} deal={deal} onClick={() => advanceStage(deal.id)} />
              ))}
          </div>
        </div>

        {/* CLOSED WON COLUMN */}
        <div className="rounded-xl p-3 border flex flex-col" style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.1)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              Won
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">
              {deals.filter((d) => d.stage === "closed_won").length}
            </span>
          </div>
          <div className="space-y-2 overflow-y-auto flex-1 max-h-[250px] scrollbar-none">
            {deals
              .filter((d) => d.stage === "closed_won")
              .map((deal) => (
                <CRMCard key={deal.id} deal={deal} onClick={() => advanceStage(deal.id)} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMCard({ deal, onClick }: { deal: CRMDeal; onClick: () => void }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="p-3 rounded-lg border text-left cursor-pointer transition-all hover:border-white/20 relative overflow-hidden select-none"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border-subtle)",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <p className="text-[11px] font-bold truncate" style={{ color: "var(--text-primary)" }}>{deal.company}</p>
      <p className="text-[10px] mt-1 font-mono" style={{ color: "var(--text-secondary)" }}>
        ${deal.amount.toLocaleString()}
      </p>

      {deal.stage === "closed_won" && (
        <div className="absolute top-1 right-1 text-emerald-400">
          <Check size={12} strokeWidth={3} />
        </div>
      )}
    </motion.div>
  );
}

// ── 3. LMS PLATFORMS SIMULATOR ──
type QuizQuestion = {
  text: string;
  options: string[];
  correct: number;
};

const quizQuestions: QuizQuestion[] = [
  {
    text: "Which model deployment reduces latency in client browsers?",
    options: ["Edge API Streaming", "Cold-boot microservices", "Scheduled cron processes"],
    correct: 0,
  },
  {
    text: "In LMS structure, what does SCORM stand for?",
    options: ["Secure Core Object Resource Mode", "Sharable Content Object Reference Model", "Secondary Course Output Revision Matrix"],
    correct: 1,
  },
];

function LMSSimulator() {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [progress, setProgress] = useState<number>(50); // Starts at 50%
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);

    const isCorrect = selectedOption === quizQuestions[activeQuestion].correct;
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
    }

    // Progress updates
    if (activeQuestion === 0) {
      setProgress(75);
    } else if (activeQuestion === 1) {
      setProgress(isCorrect && correctCount === 1 ? 100 : 90);
    }
  };

  const handleNext = () => {
    if (activeQuestion < quizQuestions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowCertificate(true);
      setProgress(100);
    }
  };

  const resetQuiz = () => {
    setActiveQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setProgress(50);
    setShowCertificate(false);
  };

  const currentQ = quizQuestions[activeQuestion];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-4 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold mb-2 flex items-center gap-2">
            <GraduationCap size={18} className="text-emerald-400" />
            LMS Interactive Quiz
          </h4>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Custom corporate training setups featuring auto-grading modules. Take the sample course quiz below to review certification hooks.
          </p>

          {/* Progress Tracker */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-semibold">
              <span style={{ color: "var(--text-secondary)" }}>Course Completion:</span>
              <span className="text-emerald-400">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-emerald-500 to-teal-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-xs flex justify-between items-center" style={{ borderColor: "var(--border-subtle)" }}>
          <span style={{ color: "var(--text-secondary)" }}>LMS Stack:</span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: "var(--text-primary)", background: "var(--bg-card-hover)" }}>
            React Server Components
          </span>
        </div>
      </div>

      {/* LMS Active Board */}
      <div className="lg:col-span-8 flex flex-col justify-center min-h-[300px]">
        <AnimatePresence mode="wait">
          {!showCertificate ? (
            <motion.div
              key={activeQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-6 rounded-2xl border text-left flex flex-col justify-between h-full"
              style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.15)" }}
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-muted mb-4" style={{ color: "var(--text-muted)" }}>
                  <span>MODULE 4: ENTERPRISE DEPLOYMENT</span>
                  <span>QUESTION {activeQuestion + 1} OF 2</span>
                </div>
                <h5 className="text-sm font-bold mb-4" style={{ color: "var(--text-primary)" }}>{currentQ.text}</h5>

                <div className="space-y-2">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = selectedOption === oIdx;
                    const isCorr = oIdx === currentQ.correct;
                    let bColor = "var(--border-subtle)";
                    let bgColor = "transparent";

                    if (isAnswered) {
                      if (isCorr) {
                        bColor = "rgba(16, 185, 129, 0.4)";
                        bgColor = "rgba(16, 185, 129, 0.05)";
                      } else if (isSelected) {
                        bColor = "rgba(239, 68, 68, 0.4)";
                        bgColor = "rgba(239, 68, 68, 0.05)";
                      }
                    } else if (isSelected) {
                      bColor = "var(--color-electric-blue)";
                      bgColor = "rgba(59, 130, 246, 0.05)";
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        disabled={isAnswered}
                        className="w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer disabled:cursor-default"
                        style={{ borderColor: bColor, background: bgColor, color: isSelected || (isAnswered && isCorr) ? "var(--text-primary)" : "var(--text-secondary)" }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                {!isAnswered ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-linear-to-r from-electric-blue to-violet text-white transition-all disabled:opacity-50 cursor-pointer"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all cursor-pointer"
                  >
                    {activeQuestion < quizQuestions.length - 1 ? "Next Question" : "View Results"}
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 sm:p-8 rounded-2xl border text-center flex flex-col items-center justify-center relative overflow-hidden"
              style={{ borderColor: "rgba(16, 185, 129, 0.2)", background: "rgba(16, 185, 129, 0.03)" }}
            >
              {/* Certificate Design */}
              <GraduationCap size={48} className="text-emerald-400 mb-4 animate-bounce" />
              <h5 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>Simulated Module Cleared!</h5>
              <p className="text-xs max-w-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                Congratulations, you scored {correctCount}/2 on the training assessment module. Custom workflows can triggers system events, webhook payloads, and update HR databases.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer"
                  style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  <RefreshCw size={12} /> Reset Quiz
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl text-[11px] font-semibold bg-emerald-500 text-white transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  Discuss Custom LMS
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── 4. WEB SOLUTIONS SIMULATOR ──
type WebLayoutOption = {
  id: string;
  name: string;
  desc: string;
};

const layoutOptions: WebLayoutOption[] = [
  { id: "saas", name: "SaaS Workspace", desc: "Complex dashboard grids containing charts, filters, and notification menus." },
  { id: "store", name: "E-Commerce System", desc: "Catalog modules with product grids, filters, and shopping bag states." },
  { id: "portal", name: "Client Admin Center", desc: "Account profiles, permissions lists, and database query tables." },
];

function WebSimulator() {
  const [selectedLayout, setSelectedLayout] = useState<string>("saas");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-4 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold mb-2 flex items-center gap-2">
            <Code2 size={18} className="text-amber-400" />
            System Blueprint Designer
          </h4>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            Select system components. Our reactive visual blueprint engine renders real-time structural layout modules instantly.
          </p>

          <div className="space-y-2">
            {layoutOptions.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedLayout(item.id)}
                className="w-full text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer"
                style={{
                  background: selectedLayout === item.id ? "var(--bg-primary)" : "transparent",
                  borderColor: selectedLayout === item.id ? "var(--color-electric-blue)" : "var(--border-subtle)",
                  color: selectedLayout === item.id ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-xs flex justify-between items-center" style={{ borderColor: "var(--border-subtle)" }}>
          <span style={{ color: "var(--text-secondary)" }}>Architecture:</span>
          <span className="font-mono text-[9px]" style={{ color: "var(--text-primary)" }}>Next.js + Clean Arch</span>
        </div>
      </div>

      {/* Web Rendering Display */}
      <div className="lg:col-span-8 flex flex-col justify-center min-h-[300px]">
        <div className="p-4 rounded-2xl border flex flex-col h-[280px] overflow-hidden" style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.15)" }}>
          {/* Mock Browser URL Bar */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 bg-black/30 border" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[9px] font-mono text-muted text-left" style={{ color: "var(--text-muted)" }}>
              https://spaciva.dev/blueprint/{selectedLayout}
            </span>
          </div>

          {/* Dynamic Mock Interface */}
          <div className="flex-1 rounded-lg border p-3 flex gap-3 overflow-hidden bg-black/10" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
            <AnimatePresence mode="wait">
              {selectedLayout === "saas" && (
                <motion.div
                  key="saas"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex gap-3"
                >
                  {/* Sidebar */}
                  <div className="w-12 h-full rounded bg-white/5 border flex flex-col gap-2 p-1" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <div className="w-full h-4 rounded bg-white/10" />
                    <div className="w-full h-3 rounded bg-white/5" />
                    <div className="w-full h-3 rounded bg-white/5" />
                  </div>
                  {/* Grid Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-4 w-20 rounded bg-white/10" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-indigo-500/10 border border-indigo-500/20" />
                      <div className="h-10 rounded bg-violet-500/10 border border-violet-500/20" />
                      <div className="h-10 rounded bg-cyan-500/10 border border-cyan-500/20" />
                    </div>
                    <div className="flex-1 rounded border bg-white/5 flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <span className="text-[9px] text-muted" style={{ color: "var(--text-muted)" }}>Analytics Schema Renders</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedLayout === "store" && (
                <motion.div
                  key="store"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center h-4">
                    <div className="h-3 w-16 rounded bg-white/10" />
                    <div className="h-3 w-8 rounded bg-amber-500/20 border border-amber-500/30" />
                  </div>
                  <div className="grid grid-cols-4 gap-2 flex-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="rounded border bg-white/5 p-1 flex flex-col justify-between" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                        <div className="h-16 rounded bg-white/10" />
                        <div className="h-2 w-8 rounded bg-white/10 mt-1" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedLayout === "portal" && (
                <motion.div
                  key="portal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/15" />
                    <div className="flex flex-col gap-1">
                      <span className="w-16 h-2 rounded bg-white/10" />
                      <span className="w-8 h-1.5 rounded bg-white/5" />
                    </div>
                  </div>
                  <div className="flex-1 border rounded bg-white/5 flex flex-col overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <div className="h-4 border-b bg-white/5 flex items-center px-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <span className="text-[8px] text-white/40">Query User ID Database List</span>
                    </div>
                    <div className="p-2 space-y-1.5">
                      <div className="flex justify-between"><span className="w-16 h-2 rounded bg-white/10" /><span className="w-8 h-2 rounded bg-emerald-500/20" /></div>
                      <div className="flex justify-between"><span className="w-20 h-2 rounded bg-white/5" /><span className="w-8 h-2 rounded bg-emerald-500/20" /></div>
                      <div className="flex justify-between"><span className="w-12 h-2 rounded bg-white/5" /><span className="w-8 h-2 rounded bg-rose-500/20" /></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 5. SEO & GROWTH SIMULATOR ──
function SEOSimulator() {
  const [sliderVal, setSliderVal] = useState<number>(4); // Default to 4 articles/month

  const computedStats = useMemo(() => {
    // 0 to 20 articles/month scaling curves
    const traffic = Math.round(1800 + sliderVal * 1600 + Math.pow(sliderVal, 1.8) * 110);
    const keywords = Math.round(25 + sliderVal * 28);
    const leads = Math.round(5 + sliderVal * 3.8 + Math.pow(sliderVal, 1.2) * 1.5);
    return { traffic, keywords, leads };
  }, [sliderVal]);

  // SVG Chart points calculation based on current slider value
  const chartPoints = useMemo(() => {
    const startY = 110;
    const endY = 110 - (sliderVal * 4.5) - (Math.pow(sliderVal, 1.3) * 1.2);
    const midY = startY - (startY - endY) * 0.45;
    return `M 10,110 C 60,${startY - 5} 120,${midY} 280,${Math.max(15, endY)}`;
  }, [sliderVal]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold mb-2 flex items-center gap-2">
            <Search size={18} className="text-rose-400" />
            SEO Traffic Estimator
          </h4>
          <p className="text-[12px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            High frequency content mapping. Drag the slider to forecast potential client organic traffic, ranking counts, and customer pipeline leads.
          </p>

          {/* Slider input */}
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-semibold">
              <span style={{ color: "var(--text-secondary)" }}>Monthly SEO Campaigns:</span>
              <span className="text-rose-400 font-bold">{sliderVal} Content Modules</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-hidden"
              style={{
                background: "var(--border-subtle)",
                backgroundImage: "linear-gradient(90deg, var(--color-electric-blue), var(--color-violet))",
                backgroundSize: `${(sliderVal / 20) * 100}% 100%`,
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex justify-between text-[9px] tracking-wider" style={{ color: "var(--text-muted)" }}>
              <span>BASE SEO</span>
              <span>10 ARTICLES</span>
              <span>20 ARTICLES</span>
            </div>
          </div>
        </div>

        {/* Calculated Stats */}
        <div className="mt-8 pt-4 border-t grid grid-cols-3 gap-2" style={{ borderColor: "var(--border-subtle)" }}>
          <div>
            <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>Organic Traffic</p>
            <p className="text-sm font-bold text-white font-mono">{computedStats.traffic.toLocaleString()}/mo</p>
          </div>
          <div>
            <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>Top Keywords</p>
            <p className="text-sm font-bold text-white font-mono">{computedStats.keywords}</p>
          </div>
          <div>
            <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>Est. Leads</p>
            <p className="text-sm font-bold text-emerald-400 font-mono">{computedStats.leads}</p>
          </div>
        </div>
      </div>

      {/* SVG Growth Graph */}
      <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px]">
        <div className="p-4 rounded-2xl border flex flex-col h-[280px]" style={{ borderColor: "var(--border-subtle)", background: "rgba(0,0,0,0.15)" }}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
              <TrendingUp size={12} /> Projected 6-Month Organic Growth
            </span>
            <span className="text-[9px] font-mono" style={{ color: "var(--text-secondary)" }}>
              Baseline starting traffic: 1,800
            </span>
          </div>

          <div className="flex-1 relative border rounded-lg bg-black/20 overflow-hidden flex items-end" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-[0.03]">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-white" />
              ))}
            </div>

            {/* SVG Plot */}
            <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="seo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Shaded Area under curve */}
              <motion.path
                d={`${chartPoints} L 280,110 L 10,110 Z`}
                fill="url(#seo-grad)"
                transition={{ type: "spring", stiffness: 90 }}
              />
              {/* Curve Line */}
              <motion.path
                d={chartPoints}
                fill="none"
                stroke="url(#line-glow-grad)"
                strokeWidth="2.5"
                transition={{ type: "spring", stiffness: 90 }}
              />
              <linearGradient id="line-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </svg>

            {/* Simulated Dot at Peak */}
            <motion.div
              className="absolute w-3.5 h-3.5 rounded-full border-2 border-white bg-violet shadow-[0_0_8px_var(--color-violet)] z-20 cursor-help"
              style={{
                left: "calc(93.3% - 7px)",
                bottom: `calc(${100 - (100 - (sliderVal * 3.75) - (Math.pow(sliderVal, 1.3) * 1))}% - 7px)`,
              }}
              layout
              title={`Forecasted traffic peak: ${computedStats.traffic.toLocaleString()} visits/mo`}
            />

            {/* Chart Labels */}
            <div className="absolute inset-x-0 bottom-1.5 flex justify-between px-3 text-[8px] tracking-wider" style={{ color: "var(--text-muted)" }}>
              <span>Month 1</span>
              <span>Month 2</span>
              <span>Month 3</span>
              <span>Month 4</span>
              <span>Month 5</span>
              <span>Month 6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
