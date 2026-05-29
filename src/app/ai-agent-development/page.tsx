import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Bot, Zap, MessageSquare, Database, Sparkles, Workflow } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Agent Development Company | Autonomous LLM Workflows | SPACIVA",
  description: "SPACIVA engineers custom autonomous AI agents, multi-agent orchestration systems, and intelligent workflow pipelines that automate up to 92% of repetitive tasks.",
  keywords: [
    "AI agent development company",
    "autonomous AI agents India",
    "custom LLM agent builder",
    "multi-agent orchestration systems",
    "AI automation workflows",
    "crewAI agent development"
  ],
};

const capabilities = [
  {
    icon: Bot,
    title: "Autonomous Execution Agents",
    desc: "Deploy agents that plan and execute multi-step tasks independently: monitor mailboxes, parse payloads, research competitors, structure reports, and call third-party APIs.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Orchestration",
    desc: "Build groups of collaborative agents (using LangGraph or CrewAI) that act as an virtual department. Agents pass structured contexts to each other, self-correct errors, and coordinate deliverables.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: Database,
    title: "Dynamic Knowledge Integration (RAG)",
    desc: "Connect your agents to corporate knowledge bases, vector databases (Pinecone, PGVector), and internal system wikis so they act with full context and zero hallucinations.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: MessageSquare,
    title: "Conversational Copilots",
    desc: "Bespoke assistant bots designed for your internal operations or customer interfaces. Support full stateful conversational history, smart task escalations, and leads qualification.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
];

const workflows = [
  { name: "Automated Customer Support", desc: "First-line agents that answer FAQs, fetch order statuses, schedule appointments, and hand off only complex support tickets." },
  { name: "Intelligent Sales Development", desc: "Agents that scour public lead directories, score prospects, draft highly personalized initial reaches, and schedule meetings." },
  { name: "Compliance & Document QA", desc: "Autonomous pipelines that review signed agreements, match terms against regional laws, highlight discrepancies, and request edits." },
  { name: "Administrative Data Dispatch", desc: "Move data seamlessly between PDFs, legacy ERP tables, CRM pipelines, and spreadsheets without human data entry error." },
];

export default function AIAgentDevelopmentPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle at center, var(--gradient-orb-1), transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs text-electric-blue tracking-widest uppercase font-semibold mb-3.5 inline-block">
              SPACIVA Agentic AI
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Custom Autonomous <span className="gradient-text">AI Agent Development</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We build specialized AI agents and multi-agent orchestration systems that coordinate, execute, and scale complex operational workflows. Accelerate execution speeds while cutting overhead.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Inquire About AI Agents <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                See Core Capabilities →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Agentic Workflows Over Static Scripts</h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Static automation breaks when formats change. SPACIVA builds cognitive AI agents powered by OpenAI, Claude, and LLaMA that reason through exceptions, learn from data corrections, and operate dynamically within your system rules.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.05}>
              <div
                className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-0.5 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 ${c.color}`}>
                  <c.icon size={18} />
                </div>
                <h3 className="text-sm font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Agentic Use Cases */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Standard Agent Deliverables</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>How we deploy autonomous workflows to drive direct operations value.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-20">
            {workflows.map((item) => (
              <div key={item.name} className="p-6 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-2 uppercase text-electric-blue tracking-widest">{item.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call To Action */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Hire a Senior AI Agent Architect</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              We scope your autonomous pipeline workflows, map token budgets, and design secure human-in-the-loop triggers before code kickoff.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book an Agent Scoping Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
