"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Info,
  Server, Cpu, Database, Workflow, ShieldCheck, AppWindow,
  Bot, MessageCircle, Sparkles, FileText,
  Lock, TrendingDown, Anchor,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import SpecPanel from "@/components/SpecPanel";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const LAST_REVIEWED = "24 August 2026";

// Bottom to top, matching how the stack actually runs. "Application" is greyed and links down
// to Section 9 — this page owns everything under it, not the application layer itself.
const STACK_LAYERS = [
  { label: "Infrastructure", desc: "Your cloud, your region, or on-premise", icon: Server, covered: true },
  { label: "Model", desc: "Commercial APIs and open-weight models", icon: Cpu, covered: true },
  { label: "Retrieval & context", desc: "Vector and hybrid search, chunking, reranking", icon: Database, covered: true },
  { label: "Orchestration & tools", desc: "Function calling, multi-step flows, MCP", icon: Workflow, covered: true },
  { label: "Evaluation & guardrails", desc: "Test sets, regression suites, drift monitoring", icon: ShieldCheck, covered: true },
  { label: "Application", desc: "Agents, chatbots, assistants — see Section 9", icon: AppWindow, covered: false, href: "#what-we-build-on-top" },
];

const SPEC_ITEMS = [
  { section: "Capability", label: "Model layer", value: "Commercial APIs and open-weight models, self-hosted or managed" },
  { section: "Capability", label: "Retrieval", value: "Vector and hybrid search, chunking, reranking, evaluation" },
  { section: "Capability", label: "Orchestration", value: "Tool use, function calling, Model Context Protocol" },
  { section: "Capability", label: "Evaluation", value: "Test sets, regression suites, drift monitoring" },
  { section: "Delivery", label: "Infrastructure", value: "Your cloud, your region, or on-premise" },
  { section: "Delivery", label: "Engagement", value: "Fixed scope, monthly retainer, or embedded team" },
  { section: "Delivery", label: "Base", value: "Ahmedabad, India · overlaps US and UK working hours" },
  { section: "Ownership", label: "You own", value: "Weights, code, prompts, pipelines, documentation" },
  { section: "Ownership", label: "Data", value: "Never used for model training" },
];

const APPROACHES = [
  { approach: "1. Prompt and context engineering", solves: "The model has the capability but not the instruction", cost: "Lowest", when: "Almost always try first. A surprising share of “we need a custom model” problems are solved here." },
  { approach: "2. Retrieval (RAG)", solves: "The model doesn’t know your information", cost: "Low–moderate", when: "The default answer for anything involving your documents, policies, or records." },
  { approach: "3. Tool use and orchestration", solves: "The model needs to look things up or take action", cost: "Moderate", when: "When the answer lives in a live system rather than a document." },
  { approach: "4. Fine-tuning", solves: "The model knows the facts but not the form, your tone, format, or a specialised task", cost: "Moderate–high", when: "Consistency of output, narrow classification, or reducing cost by moving work to a smaller model." },
  { approach: "5. Training from scratch", solves: "Almost nothing you will encounter", cost: "Very high", when: "Effectively never for a business application. If someone proposes it, ask what problem the previous four failed to solve." },
];

const STACK_TABS = [
  {
    label: "Models",
    icon: Cpu,
    body: [
      "Commercial APIs and open-weight models, chosen per task rather than standardised across a project. Most production systems end up using more than one: a capable model where reasoning matters, a small fast one for classification and routing, and often an embedding model that has nothing to do with either.",
      "We build the model layer behind an abstraction so switching providers is a configuration change, not a rewrite. This field moves fast enough that designing for replaceability is basic engineering hygiene, not future-proofing.",
    ],
    note: "We deliberately don’t name specific model versions on this page, anything we listed would be stale within a quarter. On a call we’ll tell you exactly what we’d use for your task and why.",
  },
  {
    label: "Retrieval",
    icon: Database,
    body: [
      "Chunking strategy, embedding choice, vector and hybrid search, reranking, and metadata filtering so results respect permissions and recency.",
      "Retrieval quality, not model quality, is what determines whether a system built on your own data actually works. A capable model with poor retrieval produces confident answers from the wrong document, which is worse than no answer. Most “the AI is hallucinating” complaints are retrieval problems wearing a model costume.",
    ],
  },
  {
    label: "Orchestration",
    icon: Workflow,
    body: [
      "Function calling, tool definitions, multi-step flows, and error handling for when a tool call fails or returns something unexpected.",
    ],
    highlight: "Increasingly this is built on the Model Context Protocol, which is becoming the standard interface between models and business systems. Where a system supports it, we use it, fewer bespoke connectors to maintain, and far less rework when you change models.",
  },
  {
    label: "Evaluation",
    icon: ShieldCheck,
    body: [
      "Test sets built from your real cases, regression suites that run before anything ships, and monitoring for drift after launch.",
      "Guardrails on both sides: input validation and prompt-injection handling on the way in, output checking, grounding requirements, and refusal behaviour on the way out. A system that can’t say “I don’t know” will confidently make something up, and it only takes one visible instance to lose a rollout.",
    ],
  },
  {
    label: "Infrastructure",
    icon: Server,
    body: [
      "Your cloud account, your chosen region, or on-premise. Containerised, with inference serving, autoscaling, and cost monitoring.",
      "For self-hosted open-weight models: GPU sizing, quantisation trade-offs, batching, and an honest projection of what it costs to run at your volume, which is frequently more than clients expect, and occasionally far less.",
    ],
  },
];

const SELFHOST_REASONS = [
  { title: "Data residency and confidentiality", desc: "Some data legitimately cannot leave your infrastructure, regulated sectors, government work, contractual obligations to your own clients, or a jurisdiction with strict residency rules. This is the strongest reason and the one that decides it most often.", icon: Lock },
  { title: "Cost at sustained volume", desc: "Above a certain steady throughput, dedicated inference becomes cheaper than per-token API pricing. That crossover point is much higher than most people assume, and it moves every time providers cut prices, which they keep doing.", icon: TrendingDown },
  { title: "Control and stability", desc: "A self-hosted model doesn’t change underneath you. If you need output that’s identical in twelve months, you need a model that’s still there in twelve months.", icon: Anchor },
];

const ACCURACY_BLOCKS = [
  { title: "A test set from your real cases", desc: "Actual questions with agreed correct answers, built with your team, covering the normal cases and the awkward ones. This is the artefact everything else depends on." },
  { title: "Regression testing before every change", desc: "Prompt changes, retrieval changes, and model updates all get run against the test set first. Without this you’re changing a production system on instinct." },
  { title: "Monitoring after launch", desc: "Provider models get updated, your data changes, and your users ask things nobody anticipated. Accuracy drifts. Drift you can see is a maintenance task; drift you can’t see is a slow failure." },
  { title: "Coverage tracked as a list, not ignored", desc: "Every question the system couldn’t answer is logged. Once a month we decide what should have been answerable and close the gap. Coverage goes up over time rather than sitting where it launched." },
];

const COMPLIANCE_BUILD = [
  "Disclosure handled properly in the interface rather than buried in a footer.",
  "Decision logging so a system’s behaviour can be reconstructed after the fact.",
  "Documented data lineage, what the model saw, what it was trained or tuned on, where retrieval sourced from.",
  "Human oversight designed into the flow rather than added afterwards.",
  "Model and prompt versioning so you can say what was running on a given date.",
];

const ENGAGEMENT_MODELS = [
  { label: "Fixed scope", bestFor: "A defined build with clear boundaries", commitment: "Per project", youGet: "Written scope, fixed price, fixed date", typical: "Proof of concept, first production build, migration", from: "Scoped and quoted on a call" },
  { label: "Monthly retainer", bestFor: "Ongoing development on a system in production", commitment: "Rolling monthly", youGet: "A set capacity each month, reprioritised as you need", typical: "Evaluation, tuning, new sources, cost work", from: "Sized to your capacity needs" },
  { label: "Embedded team", bestFor: "Extending your own engineering team", commitment: "Rolling monthly", youGet: "Named engineers working in your process and tooling", typical: "Long-running AI programmes with in-house leadership", from: "Sized to your team" },
];

const SPOKES = [
  { title: "AI agents", desc: "Systems that complete a task end to end without a person in the loop.", href: "/services/ai-agent-development", icon: Bot },
  { title: "RAG chatbots", desc: "Answering from your own documents, with sources cited, for customers or staff.", href: "/services/rag-chatbot-development", icon: MessageCircle },
  { title: "AI assistants", desc: "An assistant that prepares work for your team inside Slack, Teams, or your own tools.", href: "/services/ai-assistants", icon: Sparkles },
  { title: "Document and invoice processing", desc: "Turning files into clean, validated, posted data.", href: "/services/document-invoice-processing", icon: FileText },
];

const FAQS = [
  {
    q: "Should we fine-tune a model?",
    a: "Probably not yet. Fine-tuning changes behaviour and form, not knowledge, if the model needs to know your information, that’s retrieval. The strongest real case for fine-tuning is moving a task you’ve already proven onto a smaller, cheaper model at volume. We’ll tell you if you’re in that position.",
  },
  {
    q: "What’s the difference between RAG and fine-tuning?",
    a: "Retrieval gives the model access to your information at the moment it answers, and updating it means updating a document. Fine-tuning adjusts how the model behaves, and updating it means retraining. Most business problems are the first kind, and a lot of expensive projects have been the second kind applied to the first problem.",
  },
  {
    q: "Can we run a model on our own infrastructure?",
    a: "Yes, in your cloud, your region, or on-premise. It’s the right call when data genuinely can’t leave your environment, or when sustained volume makes dedicated inference cheaper than API pricing. We’ll model the crossover honestly, including the costs that don’t appear in a per-token comparison.",
  },
  {
    q: "Is our data used to train models?",
    a: "No. We use API tiers with training disabled, or self-hosted models where the data never leaves your environment.",
  },
  {
    q: "How do you know the system is accurate?",
    a: "A test set built from your real cases, regression tests run before every change, and drift monitoring after launch. If a vendor’s answer to this question is a demo, that’s a warning rather than an answer.",
  },
  {
    q: "Does the EU AI Act apply to us?",
    a: "If you serve EU customers, some of it likely does, the Act’s general application and the Article 50 transparency duties took effect on 2 August 2026. Whether your system is high-risk is a legal question about your use case, and the high-risk obligations were deferred to December 2027 and August 2028. We build the logging, documentation, and disclosure the framework expects, and we’d rather over-document from the start than retrofit.",
  },
  {
    q: "What happens when models get better or cheaper?",
    a: "That’s the normal case, not the exception. We build the model layer behind an abstraction so switching is configuration, not a rewrite, and reviewing it is part of the monthly plan. Anyone building a production system on a single hard-coded provider in 2026 is creating work for themselves.",
  },
  {
    q: "How much does it cost to run?",
    a: "It depends on volume, model choice, and how much context each request carries, and design decisions move it by an order of magnitude in either direction. We estimate it before you commit and flag the choices with big cost consequences.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Model weights where we’ve tuned them, code, prompts, pipelines, and documentation, transferred on final payment. It runs in your accounts.",
  },
  {
    q: "Can you take over a stalled build?",
    a: "Yes, and it’s a common way clients start with us. We’d begin with an assessment of what exists, including telling you honestly if the right move is to rebuild rather than continue.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We’re in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generative AI & Custom LLM Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Model selection, retrieval, fine-tuning, evaluation, guardrails, and self-hosted deployment, the engineering layer underneath production AI systems. Fixed scope or retainer.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spaciva.tech/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://spaciva.tech/#what-we-do" },
    { "@type": "ListItem", position: 3, name: "Generative AI & Custom LLMs", item: "https://spaciva.tech/services/generative-ai-custom-llms" },
  ],
};

function StackTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (active + 1) % STACK_TABS.length : (active - 1 + STACK_TABS.length) % STACK_TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="The stack, layer by layer" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {STACK_TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`stack-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`stack-tabpanel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/20"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {STACK_TABS.map((tab, i) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`stack-tabpanel-${i}`}
            aria-labelledby={`stack-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <div className="flex flex-col gap-4">
              {tab.body.map((p, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed">{p}</p>
              ))}
              {tab.highlight && (
                <p className="text-slate-700 leading-relaxed bg-[#F5F3FF] border border-[#7C3AED]/15 rounded-xl px-4 py-3">
                  {tab.highlight}
                </p>
              )}
              {tab.note && (
                <p className="text-sm text-slate-500 italic leading-relaxed border-t border-slate-100 pt-4">
                  {tab.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GenerativeAIClient() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — Template C's inverted base: dark page, and the hero element is a layered
          architecture diagram built from plain divs (crisp at every size, no rasterisation),
          not a screenshot. The "Application" layer is greyed and links down to Section 9. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/15 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                Generative AI &amp; Custom LLMs
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                The engineering layer under your AI
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Model selection, retrieval, fine-tuning, evaluation, guardrails, and deployment, including self-hosted, where your data can&apos;t leave your environment. This is the part that decides whether an AI system holds up in production or quietly degrades after launch.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a technical call" hoverLabel="Let's Talk" />
                <a href="#decision-framework" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  See the decision framework
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-white/50">
                Fixed scope or retainer · You own the weights, the code, and the pipeline
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
              role="img"
              aria-label="Diagram: a layered technology stack, bottom to top. Infrastructure, then the model layer, then retrieval and context, then orchestration and tools, then evaluation and guardrails. Spaciva builds and owns all five of those layers. The application layer sits on top, agents, chatbots, and assistants, and is covered by the other service pages this page links down to."
            >
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-4 sm:p-6 backdrop-blur-sm">
                <div className="flex flex-col-reverse gap-2">
                  {STACK_LAYERS.map((layer) => (
                    <div
                      key={layer.label}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 border",
                        layer.covered
                          ? "bg-white/[0.07] border-white/10"
                          : "bg-transparent border-dashed border-white/15"
                      )}
                    >
                      <span className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                        layer.covered ? "bg-[#7C3AED] text-white" : "bg-white/5 text-white/30"
                      )}>
                        <layer.icon className="w-4.5 h-4.5" />
                      </span>
                      <div className="min-w-0">
                        {layer.href ? (
                          <Link href={layer.href} className="font-bold text-sm text-white/40 hover:text-white/70 transition-colors">
                            {layer.label}
                          </Link>
                        ) : (
                          <p className="font-bold text-sm text-white">{layer.label}</p>
                        )}
                        <p className={cn("text-xs leading-snug truncate", layer.covered ? "text-white/50" : "text-white/25")}>{layer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content column + sticky spec panel — the panel runs from here through the
          engagement-model section, then stops (per the source spec: "below the hero to the
          pricing section"). Below 1200px it collapses into a plain card placed above the FAQ,
          rather than disappearing. */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-20">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">
            {/* Decision framework — the signature section, most linkable content on the page.
                Real HTML table, plain text, no accordion. */}
            <section id="decision-framework" className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-24">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">RAG vs fine-tuning vs prompting, which one does your problem need?</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">
                Almost every &quot;should we build a custom LLM?&quot; conversation is really this question, and it gets answered badly because most people answering it sell one specific option. There are five approaches. They&apos;re ordered by cost and complexity, and <span className="font-bold text-slate-900">the right answer is nearly always the first one that works.</span>
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-10">
                <table className="w-full text-left border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Approach</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900">Solves</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Typical cost</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900">When it&apos;s right</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APPROACHES.map((row) => (
                      <tr key={row.approach} className="border-b border-[#E2E8F0] last:border-0">
                        <td className="sticky left-0 bg-white px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.approach}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.solves}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top whitespace-nowrap">{row.cost}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-5">The three things most people get wrong</h3>
              <div className="flex flex-col gap-5 mb-8">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900">Fine-tuning does not teach a model your facts.</span> It teaches it a behaviour, a style, or a task. If the model needs to know your refund policy, retrieval is the answer, and fine-tuning it in makes the information harder to update rather than easier. This single misunderstanding is behind most wasted fine-tuning budgets.</p>
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900">Fine-tuning is often the cost answer, not the capability answer.</span> The strongest real case for it is taking a task a large model already does well and moving it to a smaller, cheaper, faster model that&apos;s been tuned for exactly that task. That&apos;s an economics decision, and it only makes sense once you have volume.</p>
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900">You need evaluation before you need any of them.</span> Without a test set, you can&apos;t tell whether the fine-tune helped, whether the retrieval change improved anything, or whether last month&apos;s model update broke something. Teams routinely skip this and then argue about whether the system is getting worse based on anecdotes.</p>
              </div>

              <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug">
                Our default position: prompting and retrieval solve the large majority of business problems. We&apos;ll propose fine-tuning when there&apos;s a specific reason, and we&apos;ll tell you what that reason is.
              </blockquote>
            </section>

            {/* What we work with — tabbed stack breakdown, all panels in the DOM on load */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="mb-10">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  The Stack
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">Layer by layer</h2>
              </div>
              <StackTabs />
            </section>

            {/* Self-hosting — two-column, reasons left, honest counterweight right */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">When running your own model is the right answer, and when it isn&apos;t</h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">
                Self-hosting an open-weight model is a serious commitment. There are three good reasons for it and a lot of bad ones.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-7">
                  {SELFHOST_REASONS.map((item) => (
                    <div key={item.title}>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-[#7C3AED]" />
                        </span>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-3">The honest counterweight</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Self-hosting means you own the GPU bill whether the system is busy or idle, you own the upgrade path, and you own the operational burden. The frontier commercial models generally remain more capable than what you can practically self-host, so on the hardest reasoning tasks you may be trading capability for control.
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed font-semibold border-t border-slate-200 pt-5">
                    Most clients who ask about self-hosting turn out to need one specific thing kept in-house, not everything. A hybrid, sensitive work on a self-hosted model, general work on an API, is usually cheaper and better than either extreme. That&apos;s a design decision worth making deliberately rather than defaulting to one side of it.
                  </p>
                </div>
              </div>
            </section>

            {/* How you know it works — tight, four short blocks, between two heavy sections */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-slate-900">Evaluation is the part everyone skips</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[680px]">Ask a vendor how they&apos;ll know the system is working and listen carefully to the answer. If it&apos;s a demo, that isn&apos;t an answer.</p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {ACCURACY_BLOCKS.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Compliance — EU AI Act. Verified against multiple independent sources on
                2026-08-24 (Gibson Dunn, DLA Piper, praxikon.com/aiactblog.nl, and the European
                Commission's own digital-strategy pages) before publishing. Visible "last
                reviewed" stamp per the source spec's build notes. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-6">
                <Info className="w-3.5 h-3.5 mr-1.5 -ml-0.5" /> Last reviewed {LAST_REVIEWED} · not legal advice
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">What the EU AI Act means for what we build</h2>
              <p className="text-sm text-slate-500 italic mb-8 max-w-[720px]">This is a summary of the engineering implications, not legal advice, take your own.</p>

              <div className="text-slate-600 leading-relaxed space-y-5 mb-8 max-w-[720px]">
                <p>If you serve UK or EU customers, this is live now rather than upcoming.</p>
                <p><span className="font-bold text-slate-900">Already in force.</span> Prohibited practices have applied since February 2025. Obligations on general-purpose AI model providers have applied since August 2025. The Act&apos;s general application, and the Article 50 transparency duties, took effect on <span className="font-bold text-slate-900">2 August 2026</span>. Article 50 is the one that catches ordinary business systems: it covers disclosure when a person is interacting with an AI, and the marking of synthetic content.</p>
                <p><span className="font-bold text-slate-900">Deferred, not cancelled.</span> The Digital Omnibus on AI, adopted as Regulation (EU) 2026/1744 and in force from 27 July 2026, pushed the high-risk obligations back: stand-alone high-risk systems under Annex III to <span className="font-bold text-slate-900">2 December 2027</span>, and high-risk AI embedded in already-regulated products under Annex I to <span className="font-bold text-slate-900">2 August 2028</span>. These are fixed dates, not conditional ones.</p>
                <p><span className="font-bold text-slate-900">The trap in that deferral.</span> High-risk documentation describes design decisions being made now. Reconstructing it in 2027 from a system already in production costs several times more than recording it as you build. If there&apos;s any prospect your system lands in a high-risk category, the cheap moment to start documenting is the moment you start building.</p>
              </div>

              <h3 className="font-bold text-slate-900 mb-4">What we build to support it</h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {COMPLIANCE_BUILD.map((item) => (
                  <li key={item} className="text-slate-600 text-sm leading-relaxed flex gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-800 leading-relaxed">
                Whether a specific system falls into a high-risk category is a legal question about your use case, not a technical one. We&apos;ll build to whatever standard your counsel sets, and we&apos;d rather build to the stricter interpretation from the start than retrofit.
              </blockquote>
            </section>

            {/* How we work together — engagement-model table, distinct from Template A/B's
                pricing tables since this describes how the relationship works, not a package
                price. No fabricated figures: the "From" row states how pricing is set instead
                of a number, since none is confirmed. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">Three ways to engage</h2>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
                <table className="w-full text-left border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                      {ENGAGEMENT_MODELS.map((m) => (
                        <th key={m.label} scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{m.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E2E8F0]">
                      <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Best for</th>
                      {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm text-slate-600 align-top">{m.bestFor}</td>)}
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Commitment</th>
                      {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm text-slate-600 align-top">{m.commitment}</td>)}
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">You get</th>
                      {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm text-slate-600 align-top">{m.youGet}</td>)}
                    </tr>
                    <tr className="border-b border-[#E2E8F0]">
                      <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Typical use</th>
                      {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm text-slate-600 align-top">{m.typical}</td>)}
                    </tr>
                    <tr>
                      <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500 align-top whitespace-nowrap">Pricing</th>
                      {ENGAGEMENT_MODELS.map((m) => <td key={m.label} className="px-5 py-4 text-sm font-bold text-[#7C3AED] align-top">{m.from}</td>)}
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-slate-600 leading-relaxed max-w-[720px]">
                Model and infrastructure costs are yours and billed by your provider. We estimate them with you before you commit and we&apos;ll tell you when a design decision has a big cost consequence, because at this layer, most of them do.
              </p>
            </section>

            {/* Mobile/tablet spec panel — collapses here (above the FAQ) below 1200px rather
                than disappearing, per the source spec. */}
            <div className="min-[1200px]:hidden">
              <SpecPanel items={SPEC_ITEMS} />
            </div>
          </div>

          <aside className="hidden min-[1200px]:block">
            <div className="sticky top-32">
              <SpecPanel items={SPEC_ITEMS} />
            </div>
          </aside>
        </div>
      </div>

      {/* What we build on top — the hub-to-spoke routing section, structurally the most
          important on the page. Equal-weight cards, real routes (not the source doc's guessed
          /services/ai-chatbots-rag, which isn't the live URL for that page). */}
      <section id="what-we-build-on-top" className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 scroll-mt-24">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">This is the foundation. Here&apos;s what usually sits on it.</h2>
          <p className="text-lg text-white/60">Most people arriving here have a problem rather than a model requirement. If one of these is yours, the specific page will be more useful than this one.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SPOKES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <Link
                href={item.href}
                className="group flex flex-col h-full bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#7C3AED]/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#C4B5FD]" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{item.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 font-bold text-[#C4B5FD] text-sm">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-white/60 max-w-[680px]">
          If you&apos;re not sure which, that&apos;s a good first call. The layer described on this page is the same underneath all four, so the question is only which application actually solves your problem, and that&apos;s usually clear within twenty minutes.
        </p>
      </section>

      {/* FAQ — plain two-column list directly on the dark base, not an accordion. Template C
          deliberately doesn't reuse Template A's accordion pattern, per the source spec. */}
      <section className="max-w-5xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-white">Common questions</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-white/40 text-sm max-w-[680px] mx-auto text-center">
          <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#C4B5FD] hover:underline">See what the monthly plan actually covers</Link> once a model is in production.
        </p>
      </section>

      {/* Closing CTA — Template C's third distinct treatment: a light bordered card on the
          dark base, rather than Template A's full-bleed dark band or Template B's tinted panel. */}
      <section className="max-w-4xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="bg-white text-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Bring us the problem, not the architecture.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a technical call. Tell us what you&apos;re trying to build and we&apos;ll tell you which of the five approaches it actually needs, roughly what it costs to build and to run, and where the hard parts are. If prompting and retrieval solve it, we&apos;ll say so rather than proposing something larger.
          </p>
          <div className="flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a technical call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
