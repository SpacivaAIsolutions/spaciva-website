import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Bot, Database, FileText, MessageSquare, LineChart, Cpu } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "AI Automation Solutions & Custom LLM Agents | SPACIVA India",
  description: "SPACIVA builds custom AI automation agents, LLM pipelines, and intelligent workflow systems that cut operational costs by up to 92%. Based in Ahmedabad, serving India, UAE, UK & USA.",
  keywords: [
    "AI automation solutions India",
    "custom AI agents",
    "LLM pipeline development",
    "AI workflow automation",
    "intelligent automation company India",
    "OpenAI API developer",
    "LangChain developer India"
  ],
};

const capabilities = [
  {
    icon: Bot,
    title: "Custom LLM Agents",
    desc: "We build autonomous agents powered by OpenAI GPT-4o, Claude, or open-source models (Mistral, LLaMA) that execute multi-step tasks: read emails, draft replies, update records, and escalate exceptions — all without human input.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation (RAG)",
    desc: "Connect your company's internal knowledge base — policy docs, contracts, product manuals — to an AI that retrieves and answers employee or customer questions accurately. No hallucinations, no missed context.",
    color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  },
  {
    icon: FileText,
    title: "Document Processing Pipelines",
    desc: "Automate extraction from PDFs, invoices, purchase orders, and scanned forms. Our pipelines classify, validate, and push structured data directly into your ERP or database — eliminating hours of manual data entry.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Chatbots",
    desc: "Deploy AI assistants across WhatsApp, your website, or internal portals. Our bots maintain conversation memory, handle FAQs, qualify leads, and hand off to human agents only when truly needed.",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: LineChart,
    title: "Sentiment & Behaviour Analysis",
    desc: "Understand how customers feel about your brand at scale. We build models that process support tickets, reviews, and chat logs — surfacing actionable insights for product and marketing teams.",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  },
];

const industries = [
  { name: "Real Estate", desc: "Automated lead follow-up, property matching agents" },
  { name: "Healthcare", desc: "Appointment scheduling bots, patient intake automation" },
  { name: "Education", desc: "Student query agents, grading assistants, content summarizers" },
  { name: "Finance", desc: "Invoice extraction, compliance document parsing" },
  { name: "E-commerce", desc: "Order status bots, returns processing automation" },
  { name: "HR & Staffing", desc: "Resume screening agents, onboarding workflow automation" },
];

const whyChooseUs = [
  { title: "100% custom-built", desc: "No generic SaaS wrappers or drag-and-drop tools." },
  { title: "Full source code ownership", desc: "Delivered directly with no ongoing license fees." },
  { title: "Secure integrations", desc: "Connects seamlessly with REST APIs, SQL, WhatsApp, Gmail, and CRMs." },
  { title: "HIPAA/GDPR-ready", desc: "Architectures designed to meet rigorous regional data protection compliance." },
  { title: "Senior engineers only", desc: "Direct collaboration with technical architects — no outsourced layers." },
  { title: "Fixed-price scoping", desc: "Know exact deliverables and investments upfront with zero hidden costs." },
];

const results = [
  { stat: "92%", label: "Reduction in manual processing time" },
  { stat: "3.2x", label: "Average ROI within 6 months of deployment" },
  { stat: "48h", label: "Turnaround on first working prototype" },
  { stat: "Zero", label: "Recurring SaaS fees — you own the system completely" },
];

export default function AIAutomationSolutionsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Soft gradient background orb */}
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
              SPACIVA AI Services
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              Automate 92% of Your Repetitive <br className="hidden sm:inline" />
              Work With <span className="gradient-text">Custom AI Agents</span>
            </h1>
            <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We engineer bespoke LLM pipelines, autonomous execution agents, and intelligent document processing systems — so your team focuses on growth, not manual tasks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg hover:shadow-violet/30 hover:scale-[1.02] transition-all duration-300"
              >
                Get a Free AI Audit <ArrowRight size={15} />
              </a>
              <a
                href="/solutions"
                className="text-sm font-semibold transition-colors duration-200 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                See How It Works →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Introduction Panel */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>What We Build</h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                SPACIVA designs and deploys production-grade AI systems tailored to your exact business process. Unlike off-the-shelf tools, our agents integrate directly with your databases, CRMs, and internal APIs — with no vendor lock-in.
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

        {/* Industries We Serve */}
        <AnimatedSection>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Industries We Serve</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Transforming operations with custom agentic models across diverse sectors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {industries.map((ind) => (
              <div key={ind.name} className="p-5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <h3 className="text-xs font-bold mb-1" style={{ color: "var(--text-primary)" }}>{ind.name}</h3>
                <p className="text-[11px] leading-snug" style={{ color: "var(--text-secondary)" }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Choose SPACIVA for AI Automation */}
        <AnimatedSection>
          <div className="p-8 sm:p-10 rounded-3xl border mb-20" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
              Why Choose SPACIVA for AI Automation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Results Metrics */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20">
            {results.map((item) => (
              <div key={item.label} className="text-center p-5 rounded-2xl border bg-[var(--bg-card)] border-[var(--border-subtle)]">
                <p className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">{item.stat}</p>
                <p className="text-[10px] sm:text-[11px] leading-tight font-medium" style={{ color: "var(--text-secondary)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact/CTA */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Ready to Automate Your Business?</h3>
            <p className="text-sm max-w-xl mx-auto mb-6" style={{ color: "var(--text-secondary)" }}>
              Tell us your workflow challenge. We scope, design, and deploy your AI automation solution end-to-end.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full bg-linear-to-r from-electric-blue to-violet hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Free Discovery Call <ArrowRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
