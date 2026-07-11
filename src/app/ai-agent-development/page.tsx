import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agent Development Company | Autonomous LLM Workflows | SPACIVA",
  description: "SPACIVA engineers custom autonomous AI agents, multi-agent orchestration systems, and intelligent workflow pipelines.",
  alternates: {
    canonical: "/ai-agent-development",
  },
};

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
    <main className="min-h-screen pt-36 pb-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Section */}
        <div className="mb-32 md:mb-48 max-w-5xl">
          <span className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">Agentic AI Workflows</span>
          <h1 className="text-5xl sm:text-7xl md:text-[80px] font-bold tracking-tightest leading-[1.05] text-[#0f172a] mb-8">
            Autonomous Agents <br />
            <span className="italic text-slate-400 font-serif">Engineered to Execute.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12">
            We build specialized AI agents and multi-agent orchestration systems that coordinate, execute, and scale complex operational workflows. Accelerate execution speeds while cutting overhead.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
          >
            Inquire About AI Agents
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-8">Workflows Over Scripts</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            <p>
              Static automation breaks when formats change. SPACIVA builds cognitive AI agents powered by OpenAI, Claude, and LLaMA that reason through exceptions, learn from data corrections, and operate dynamically within your system rules.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {capabilities.map((c, i) => (
              <div key={c.title} className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-slate-400 w-4">0{i + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{c.title}</h3>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed pl-8">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Applications */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-16">Agent Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflows.map((item) => (
              <div key={item.name} className="flex flex-col border-l border-slate-200 pl-6 py-2">
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{item.name}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tightest text-[#0f172a] mb-6">
                Hire a Senior <br /><span className="italic text-slate-400 font-serif">AI Agent Architect.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium max-w-xl">
                We scope your autonomous pipeline workflows, map token budgets, and design secure human-in-the-loop triggers before code kickoff.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0f172a] text-white text-[15px] font-bold rounded-sm transition-all hover:bg-slate-800 shrink-0"
            >
              Book an Agent Scoping Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
