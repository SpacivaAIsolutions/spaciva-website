import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agent Development Company | Autonomous LLM Workflows | SPACIVA",
  description: "SPACIVA engineers custom autonomous AI agents, multi-agent orchestration systems, and intelligent workflow pipelines.",
  alternates: {
    canonical: "/ai-agent-development",
  },
};

const J = "'Cabinet Grotesk', sans-serif";
const I = "'Geist Sans', sans-serif";

const capabilities = [
  {
    title: "Autonomous Execution Agents",
    desc: "Deploy agents that plan and execute multi-step tasks independently: monitor mailboxes, parse payloads, research competitors, structure reports, and call third-party APIs.",
  },
  {
    title: "Multi-Agent Orchestration",
    desc: "Build groups of collaborative agents (using LangGraph or CrewAI) that act as a virtual department. Agents pass structured contexts to each other, self-correct errors, and coordinate deliverables.",
  },
  {
    title: "Dynamic Knowledge Integration",
    desc: "Connect your agents to corporate knowledge bases, vector databases (Pinecone, PGVector), and internal system wikis so they act with full context and zero hallucinations.",
  },
  {
    title: "Conversational Copilots",
    desc: "Bespoke assistant bots designed for your internal operations or customer interfaces. Support full stateful conversational history, smart task escalations, and leads qualification.",
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
    <main className="theme-redesign relative min-h-screen pt-36 pb-24 bg-[#F7F6F2] px-5 lg:px-10 text-[#0E0E0C]" style={{ fontFamily: I }}>
      {/* Dot matrix background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,14,12,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="mb-24 max-w-4xl pt-12">
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-xs font-semibold text-[#FF4D00] uppercase tracking-[0.14em]" style={{ fontFamily: I }}>
              Agentic AI Workflows
            </span>
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#0E0E0C] mb-8" style={{ fontFamily: J }}>
            Autonomous Agents <br />
            <span className="italic font-light text-[#6B6A65]">Engineered to Execute.</span>
          </h1>
          <p className="text-[#6B6A65] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ fontFamily: I }}>
            We build specialized AI agents and multi-agent orchestration systems that coordinate, execute, and scale complex operational workflows. Accelerate execution speeds while cutting overhead.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide"
            style={{ fontFamily: J }}
          >
            Inquire About AI Agents
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-28 border-t border-black/[0.07] pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>Workflows Over Scripts</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#6B6A65]" style={{ fontFamily: I }}>
            <p>
              Static automation breaks when formats change. SPACIVA builds cognitive AI agents powered by OpenAI, Claude, and LLaMA that reason through exceptions, learn from data corrections, and operate dynamically within your system rules.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-[#FF4D00] w-4" style={{ fontFamily: I }}>0{i + 1}</span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0E0E0C]" style={{ fontFamily: J }}>{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#6B6A65] pl-8" style={{ fontFamily: I }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Applications */}
        <div className="mb-28 border-t border-black/[0.07] pt-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0E0E0C] mb-16" style={{ fontFamily: J }}>Agent Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflows.map((item) => (
              <div key={item.name} className="flex flex-col border-l border-black/[0.08] pl-6 py-1">
                <h3 className="text-base font-bold text-[#0E0E0C] mb-2 tracking-tight" style={{ fontFamily: J }}>{item.name}</h3>
                <p className="text-xs text-[#6B6A65] leading-relaxed" style={{ fontFamily: I }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-black/[0.07] pt-20 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0E0E0C] mb-6 leading-tight" style={{ fontFamily: J }}>
                Hire a Senior <br /><span className="italic font-light text-[#6B6A65]">AI Agent Architect.</span>
              </h2>
              <p className="text-[#6B6A65] text-sm leading-relaxed max-w-xl" style={{ fontFamily: I }}>
                We scope your autonomous pipeline workflows, map token budgets, and design secure human-in-the-loop triggers before code kickoff.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#0E0E0C] text-[#F7F6F2] hover:bg-[#FF4D00] transition-colors rounded-full text-xs font-semibold tracking-wide shrink-0"
              style={{ fontFamily: J }}
            >
              Book an Agent Scoping Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
