"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Headset, BookOpen, ShoppingBag, FileSearch,
  AlertTriangle, Layers, Search, SlidersHorizontal, Quote, HelpCircle, GitBranch,
  Scale, ChevronDown,
  Users, Briefcase, Rocket, Tag, Clock, Code2, KeyRound, RefreshCw,
  Globe, Database, ArrowLeftRight,
  AppWindow, MessageCircle, Hash, Video, LifeBuoy, Mail, HardDrive, FileText, FolderOpen,
  LayoutGrid, ShoppingCart, File, CircleHelp, MessageSquare, Contact, Inbox,
} from "lucide-react";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const WHAT_WE_BUILD = [
  {
    title: "Customer support chatbot",
    desc: "Trained on your help docs, policies, product pages, and resolved tickets. Answers on your website, WhatsApp, and email, and escalates to your team with the full conversation attached the moment it's out of depth. Nobody has to repeat themselves to a human afterwards.",
    bestFor: "DTC brands and SaaS teams where the same twenty questions consume most of the inbox.",
    icon: Headset,
  },
  {
    title: "Internal knowledge assistant",
    desc: "Your SOPs, HR policies, contracts, and process docs, made askable. Staff get an answer with a link to the source document in seconds instead of interrupting someone or digging through a shared drive nobody has organised since 2023.",
    bestFor: "Teams over 20 people where onboarding questions and “where is that document” are a daily tax.",
    icon: BookOpen,
  },
  {
    title: "Product and sales advisor",
    desc: "Answers detailed pre-purchase questions from your specs, sizing charts, compatibility tables, and shipping rules. Handles the questions that make people abandon a cart, and passes qualified conversations to your sales team with context.",
    bestFor: "E-commerce catalogues with technical products, and B2B sites with long specification pages.",
    icon: ShoppingBag,
  },
  {
    title: "Document Q&A chatbot",
    desc: "Point it at a contract set, a research library, a compliance manual, or years of reports, and ask questions in plain language. Every answer cites the document and section it came from, so it stands up to being checked.",
    bestFor: "Legal, accounting, consulting, and any team whose knowledge is locked inside PDFs.",
    icon: FileSearch,
  },
];

const WHY_CHATBOTS_FAIL = [
  {
    title: "The search underneath it isn't good enough",
    desc: "When a RAG chatbot gives a wrong answer, the model usually isn't the problem, it answered correctly from the wrong passage, because retrieval handed it the wrong passage. In our own project work, retrieval quality is consistently the thing that separates a chatbot that works from one that doesn't. Most builds skip straight to plugging in a model and never engineer the search.",
  },
  {
    title: "The documents were dumped in, not prepared",
    desc: "Content gets chopped into fixed-size fragments, so a policy gets split down the middle and neither half makes sense on its own. Tables in PDFs turn to noise. The chatbot retrieves half an answer and confidently completes the rest.",
  },
  {
    title: "Nobody defined what “working” means",
    desc: "It answered ten questions in the demo, so it shipped. There's no measure of how often it's right in production, which means nobody notices when it starts drifting, until a customer screenshots a wrong answer.",
  },
  {
    title: "The content moved and the index didn't",
    desc: "Prices changed, the returns policy was rewritten, three products were discontinued. The chatbot keeps answering from the version it was indexed on. Six months later it's confidently quoting a policy you no longer have. This is exactly why every build we ship comes with a monthly plan.",
  },
];

const RETRIEVAL_PILLARS = [
  {
    title: "Documents prepared, not dumped",
    desc: "We split your content on its real structure: sections, headings, clauses, table rows, so each retrievable piece makes sense on its own. Scanned PDFs get OCR, tables get handled as tables. Most retrieval failures are created here, before a single query is ever run.",
    icon: Layers,
  },
  {
    title: "Hybrid search, not just vectors",
    desc: "We run semantic search alongside keyword search and fuse the results. Vector search alone misses exact terms, SKUs, product codes, policy numbers, names, which is precisely what customers type. Hybrid retrieval is the production default for good reason.",
    icon: Search,
  },
  {
    title: "A reranking pass",
    desc: "We retrieve a wide candidate set, then rescore it with a cross-encoder reranker so the strongest passages reach the model. It's the single highest-leverage precision improvement available in a RAG pipeline, and it's the step most builds skip because the demo works without it.",
    icon: SlidersHorizontal,
  },
  {
    title: "Answers with sources attached",
    desc: "Every answer links back to the document and section it came from. Your team can audit any response in seconds, and customers can check it themselves. This is also what makes the chatbot defensible when someone disputes what it said.",
    icon: Quote,
  },
  {
    title: "It's allowed to say “I don't know”",
    desc: "We set a confidence threshold and instruct the system to escalate rather than answer below it. A chatbot that says “let me get a human” ten percent of the time is worth more than one that's confidently wrong two percent of the time.",
    icon: HelpCircle,
  },
  {
    title: "Logging on every conversation",
    desc: "Every answer is traceable to the passages and the query that produced it. When something goes wrong you can see exactly why in minutes instead of guessing at a prompt.",
    icon: GitBranch,
  },
];

const ACCURACY_STEPS = [
  {
    title: "We build a test set from your real questions",
    desc: "Before development starts, we assemble a set of real questions, from your ticket history, your sales inbox, your team, with the correct answer and the document it should come from. This is agreed with you and it becomes the standard the build is held to.",
  },
  {
    title: "We score three separate things",
    desc: "Whether retrieval surfaced the right source. Whether the answer is actually supported by that source, with nothing added. Whether it answered the question that was asked. These fail independently, and lumping them into one “accuracy” number hides which part is broken.",
  },
  {
    title: "We test the awkward cases deliberately",
    desc: "Questions with no answer in your content, questions that span two documents, ambiguous phrasing, and questions it shouldn't answer at all. Refusing correctly is a pass, not a failure.",
  },
  {
    title: "You see the numbers before launch",
    desc: "You get the scores and the failure cases in writing before the chatbot is live. If it's not good enough, we fix retrieval, that's what the fixed price covers.",
  },
  {
    title: "We keep scoring after launch",
    desc: "The test set becomes a regression suite. Every time your content changes or we tune the system, we re-run it, so an improvement in one area doesn't quietly break another.",
  },
];

const COMPLIANCE = [
  {
    title: "Your customers have to be told it's a chatbot",
    desc: "Under Article 50 of the EU AI Act, in force since 2 August 2026, anyone putting a chatbot in front of people in the EU must make clear they're interacting with an AI system unless it's already obvious. It applies to the business deploying the chatbot, not only to the model provider, and it reaches UK and US companies serving EU users. We build that disclosure into the interface by default rather than treating it as a legal afterthought.",
  },
  {
    title: "Your content isn't training anyone's model",
    desc: "Your documents are indexed for retrieval, not used to train a public model. We work with providers under business terms that exclude your data from model training, and we'll show you exactly which providers are in the pipeline before you sign anything.",
  },
  {
    title: "Scoped access and retention you control",
    desc: "The chatbot reaches only the content its job requires. You decide what's indexed, what's excluded, how long conversation logs are kept, and where they're stored, including EU or US hosting where residency matters.",
  },
  {
    title: "Deployable in your own environment",
    desc: "Where policy requires it, we deploy inside your infrastructure or run open-weight models in a private environment. It costs more to run and we'll be honest about the accuracy trade-off before you choose it.",
  },
];

const COMPARISON = [
  { want: "Answer questions from your documents and policies", need: "RAG chatbot", why: "Your content changes constantly. RAG reads the current version at query time", link: null },
  { want: "Sound consistently like your brand, in a specific format", need: "Fine-tuning, usually with RAG", why: "Fine-tuning teaches style and structure, not facts", link: null },
  { want: "Actually do things: update the CRM, issue the refund, book the slot", need: "An AI agent", why: "A chatbot answers. An agent acts. Different build, different risk profile", link: "/services/ai-agent-development" },
  { want: "Run a process end to end with nobody asking it anything", need: "Workflow automation", why: "If there's no conversation, you don't need a chatbot at all", link: "/services/workflow-automation" },
  { want: "Answer questions about one long document, occasionally", need: "Probably nothing custom", why: "Paste it into an off-the-shelf tool. We'll tell you when this is the answer", link: null },
];

const PROCESS = [
  { step: "01", title: "Scoping and question audit", duration: "2–3 days", desc: "We look at your real questions, tickets, sales emails, whatever your team keeps getting asked, and your existing content. You find out here whether your documentation is good enough to ground a chatbot, and if it isn't, what the cheapest fix is. If the honest answer is that you don't need this, we'll say so." },
  { step: "02", title: "Fixed scope and quote", duration: "2 days", desc: "A written scope, a fixed price, a delivery date, and the agreed test set, all before any code is written. If the scope moves, we re-quote in writing first." },
  { step: "03", title: "Ingestion and retrieval build", duration: "1–2 weeks", desc: "We prepare your content, build the retrieval pipeline, and tune it against the test set. You get a written update every Friday and a short Loom walkthrough of what moved." },
  { step: "04", title: "Accuracy testing", duration: "2–3 days", desc: "We score it against the full test set, including the questions it should refuse. You see the numbers and the failure cases before it meets a customer." },
  { step: "05", title: "Launch on your channels", duration: "2–3 days", desc: "Deployed to your website, WhatsApp, helpdesk, or Slack, with the AI disclosure in place, escalation routing live, and logging from the first conversation." },
  { step: "06", title: "Monthly tuning", duration: "ongoing", desc: "Real questions reveal what the test set couldn't. We review escalations, close coverage gaps, re-index changed content, and re-run the regression suite. A named engineer stays on it." },
];

const CHANNEL_GROUPS = [
  {
    category: "Channels", icon: Globe, items: [
      { name: "Your website", icon: AppWindow },
      { name: "WhatsApp", icon: MessageCircle },
      { name: "Slack", icon: Hash },
      { name: "Microsoft Teams", icon: Video },
      { name: "Your helpdesk", icon: LifeBuoy },
      { name: "Email", icon: Mail },
    ],
  },
  {
    category: "Content sources", icon: Database, items: [
      { name: "Google Drive", icon: HardDrive },
      { name: "Notion", icon: FileText },
      { name: "Confluence", icon: BookOpen },
      { name: "SharePoint", icon: FolderOpen },
      { name: "Your CMS", icon: LayoutGrid },
      { name: "Shopify", icon: ShoppingCart },
      { name: "PDFs", icon: File },
      { name: "Your help centre", icon: CircleHelp },
    ],
  },
  {
    category: "Handoff into", icon: ArrowLeftRight, items: [
      { name: "Zendesk", icon: LifeBuoy },
      { name: "Intercom", icon: MessageSquare },
      { name: "Freshdesk", icon: Headset },
      { name: "HubSpot", icon: Contact },
      { name: "Slack", icon: Hash },
      { name: "A shared inbox", icon: Inbox },
    ],
  },
];

// Matches the homepage's industry set exactly, the same four verticals used on the AI Agent page,
// so this page doesn't introduce a new vertical the rest of the site doesn't already stand behind.
const INDUSTRIES = [
  { title: "Marketing and creative agencies", desc: "Client-facing chatbots built under your brand for your clients, or internal assistants over your own process docs and account knowledge.", icon: Users, href: undefined },
  { title: "Professional services", desc: "Document Q&A over contracts, case files, and compliance manuals for consulting, legal, accounting, and recruiting firms.", icon: Briefcase, href: undefined },
  { title: "E-commerce and DTC", desc: "Support and pre-purchase chatbots grounded in your policies, specs, and shipping rules, connected to Shopify and your helpdesk.", icon: ShoppingBag, href: undefined },
  { title: "Startups and SaaS", desc: "Support deflection and internal knowledge assistants for teams shipping fast without the headcount to answer the same question forty times.", icon: Rocket, href: "/industries/startups" },
];

const WHY_SPACIVA = [
  { title: "You see the accuracy before you launch", desc: "We agree a test set with you upfront and show you the scores before the chatbot meets a customer. Ask any other vendor what they measured.", icon: FileSearch },
  { title: "You know the price before you commit", desc: "Fixed scope, fixed price, in writing before work starts. We carry the risk of our own estimates.", icon: Tag },
  { title: "Live in weeks, not quarters", desc: "A single production chatbot typically goes live in about three weeks. Enterprise vendors quote three months because they have three months of process.", icon: Clock },
  { title: "You work with the engineers", desc: "No account manager relaying requirements to a team you never meet. You talk to the people building it.", icon: Code2 },
  { title: "You own all of it", desc: "Source code, prompts, the retrieval pipeline, the test set, and documentation transfer to you on final payment. No proprietary platform, no per-seat licence, no lock-in.", icon: KeyRound },
  { title: "We stay on", desc: "Every build includes a monthly plan: re-indexing, escalation review, coverage expansion, regression testing. It's scoped from day one, not sold to you at handover.", icon: RefreshCw },
];

const FAQS = [
  {
    q: "What is a RAG chatbot?",
    a: "A chatbot that searches your own documents before answering, then responds only from what it found, with the source attached. A standard chatbot answers from general training data and invents things it doesn't know. RAG gives it your content to read at the moment of the question.",
  },
  {
    q: "How long does it take?",
    a: "About three weeks from kickoff to live for a single chatbot on one content set. Multi-source, multi-channel, or multi-language builds usually run five to eight weeks, depending mostly on how ready your content is.",
  },
  {
    q: "How accurate is it?",
    a: "That depends on your content, which is why we measure rather than promise. We agree a test set of real questions upfront, score retrieval and answer quality against it, and show you the numbers before launch. Where it can't answer, it escalates instead of guessing.",
  },
  {
    q: "How much documentation do we need?",
    a: "Less than most people expect. Existing help docs, policies, past tickets, or product pages are usually enough. If there's a genuine gap, we'll find it in the scoping call and tell you the cheapest way to fill it, often a few hours of writing, not a documentation project.",
  },
  {
    q: "Will it make things up?",
    a: "It's constrained to answer from retrieved passages and to escalate below a confidence threshold, and every answer carries a source so anything wrong is caught immediately. No system is perfect, and anyone claiming zero hallucination is selling. Ours is designed to fail by saying “I don't know.”",
  },
  {
    q: "Do we need to disclose that it's an AI?",
    a: "If you serve users in the EU, yes: Article 50 of the EU AI Act has required it since 2 August 2026, and it applies to UK and US businesses with EU users. We build the disclosure in by default. Confirm the specifics with your own legal counsel.",
  },
  {
    q: "Who owns the code, the prompts, and the index?",
    a: "You do. Source code, prompts, retrieval configuration, test sets, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan.",
  },
  {
    q: "What happens when our content changes?",
    a: "That's what the monthly plan covers. We re-index changed content, review what got escalated, close coverage gaps, and re-run the regression suite. Content drift is the most common reason chatbots quietly stop being useful, so we scope for it upfront.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified number,
  // consistent with how the same fact is handled on the other two service pages.
  {
    q: "How do you work across time zones?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US Eastern and UK working hours, not ours. Written update every Friday plus a Loom walkthrough.",
  },
  // TODO: client to confirm real pricing ($X single chatbot, $Y multi-source, $Z/month plan, and a
  // typical running-cost range) and restore the pricing section (Section 13) and the "How much does
  // a RAG chatbot cost?" FAQ once confirmed. Per the source spec: a pricing section or answer with
  // vague ranges is worse than none, because it confirms the suspicion that pricing is negotiable.
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RAG Chatbot Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom RAG chatbots grounded in your own documents, with source citations, accuracy testing before launch, and monthly monitoring.",
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
    { "@type": "ListItem", position: 3, name: "RAG Chatbot Development", item: "https://spaciva.tech/services/rag-chatbot-development" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `rag-faq-panel-${index}`;
  const buttonId = `rag-faq-button-${index}`;

  return (
    <div className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:border-[#C4B5FD] transition-colors">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-[#0F172A]">{faq.q}</span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 text-[#7C3AED] transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      {/*
        The answer stays mounted in the DOM at all times (only its height animates), rather than
        being conditionally rendered on click, so this FAQ block stays crawlable and citable by AI
        search instead of depending on a JS click event to exist.
      */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-[#334155] leading-relaxed">{faq.a}</div>
      </motion.div>
    </div>
  );
}

export default function RagChatbotClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light. Single column: no real chatbot screenshot to show, and a stock illustration
          would undercut a page whose whole argument is "we ship real things." */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              AI Chatbots · RAG-Powered
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              A chatbot that answers from your data, not the internet
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Generic chatbots guess. We build RAG chatbots grounded in your own documents, policies, and product information, so every answer comes from your content, with the source attached. When it doesn&apos;t know, it says so and hands the conversation to a human instead of inventing something.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-rag-means" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500">
              Live in 3 weeks · Every answer traceable to a source
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust strip — muted */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* What RAG means — light, single column, larger body type, no diagram */}
      <section id="what-rag-means" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-[680px] mx-auto px-5 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">
              Your chatbot should be doing an open-book exam
            </h2>
            <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
              <p>A standard chatbot answers from memory: whatever it absorbed during training, which never included your refund policy or your product catalogue. When it doesn&apos;t know, it produces something fluent and wrong, which is worse than saying nothing.</p>
              <p>RAG, retrieval-augmented generation, changes the exam. Before the model answers anything, the system searches your own content, pulls the passages that actually relate to the question, and instructs the model to answer only from those. The answer comes back with the source attached, so anyone can check it.</p>
              <p>That&apos;s the whole idea. Everything else on this page is engineering in service of one thing: making sure the right passage gets retrieved, every time.</p>
            </div>
            <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              The hard part isn&apos;t the model. It&apos;s the retrieval.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* What we build — light, 4 cards 2x2 */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four chatbots, four different jobs</h2>
            <p className="text-lg text-slate-600">Same underlying architecture. What changes is whose questions it answers and what it&apos;s allowed to say.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {WHAT_WE_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm shrink-0">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{item.desc}</p>
                <p className="mt-auto pt-5 border-t border-slate-200 text-sm font-semibold text-slate-500">
                  Best for: {item.bestFor}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA — dark, short */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Not sure a chatbot is the right answer?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            We&apos;ll tell you on the first call. Sometimes the honest answer is better help docs, or a workflow automation at a tenth of the cost. We&apos;d rather say that than sell you a build.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* Why chatbots fail — light, credibility section, no imagery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four reasons chatbot projects quietly get switched off</h2>
            <p className="text-lg text-slate-600">We get called in to fix other people&apos;s chatbots often enough to see the same four causes. Only one of them is about the model.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {WHY_CHATBOTS_FAIL.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <h3 className="flex items-start gap-3 text-lg md:text-xl font-bold mb-3 text-amber-700">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-1" />
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we build retrieval — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">What&apos;s actually underneath a chatbot you can trust</h2>
            <p className="text-lg text-slate-600">A demo needs a model and a prompt. Something you can put in front of customers needs six things.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RETRIEVAL_PILLARS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accuracy — light, the page's signature section. Bordered, numbers-forward, no icons, no
          equivalent on the AI Agent or Workflow Automation pages. */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
              &quot;Accurate&quot; should be a number, not an adjective
            </h2>
            <p className="text-lg text-slate-600">Every chatbot vendor promises accuracy. Ask what they measured and the conversation usually ends. Here&apos;s what we measure, before your chatbot talks to anyone.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border-2 border-[#7C3AED]/20 bg-white shadow-xl shadow-[#7C3AED]/5 divide-y divide-[#E2E8F0] overflow-hidden"
          >
            {ACCURACY_STEPS.map((item, idx) => (
              <div key={item.title} className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 sm:p-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#7C3AED]/25 tabular-nums shrink-0 sm:w-16">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Escalation and handoff — muted. Single column: no real handoff screenshot to show, same
          fallback the hero uses rather than a stock illustration. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-[680px] mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">The handoff is a feature, not a failure</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-5">
            <p>The fastest way to make customers hate a chatbot is to trap them in it. We design the exit before we design the conversation.</p>
            <p>You choose what triggers a handoff: low confidence, a refund or billing question, a complaint, a named account, legal wording, or someone simply asking for a person. When it fires, the conversation moves to your team in Slack, your helpdesk, or email, with the full transcript, the customer&apos;s details, and what the chatbot already checked.</p>
            <p>Every escalation gets logged as a coverage gap. Once a month we look at what got escalated, decide what should have been answerable, and add it to the knowledge base and the test set. Coverage goes up over time instead of sitting where it launched.</p>
          </div>
        </div>
      </section>

      {/* Compliance and data handling — light, plain content blocks, no badge wall */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
              <Scale className="w-3.5 h-3.5" />
              Compliance
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">What you&apos;re required to disclose, and what happens to your data</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {COMPLIANCE.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table — muted, real <table>, horizontally scrollable on mobile */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Do you need RAG, fine-tuning, or something else entirely?</h2>
            <p className="text-lg text-slate-600">Most people arrive asking for one of these when they need another. Here&apos;s the honest version.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                  <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">You want it to</th>
                  <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900">What you need</th>
                  <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900">Why</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.want} className="border-b border-[#E2E8F0] last:border-0">
                    <td className="sticky left-0 bg-white px-5 py-4 text-sm text-slate-600 align-top">{row.want}</td>
                    <td className="px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">
                      {row.link ? (
                        <Link href={row.link} className="text-[#7C3AED] hover:underline">{row.need}</Link>
                      ) : (
                        row.need
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-slate-600 leading-relaxed max-w-[680px]">
            Fine-tuning on your own documents to &quot;teach it your business&quot; is the most common expensive mistake we see. It&apos;s slow, it goes stale the day your content changes, and it doesn&apos;t give you sources.
          </p>
        </div>
      </section>

      {/* Process — light, vertical timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">How the build runs</h2>
          </div>

          <div>
            {PROCESS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-4xl md:text-5xl font-light text-[#7C3AED] tabular-nums">{item.step}</span>
                  {idx < PROCESS.length - 1 && <div className="w-px flex-1 bg-[#E2E8F0] mt-4" />}
                </div>
                <div className="pt-2 md:pt-3">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-[680px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-4 text-slate-500 font-semibold">
            Typical total: about 3 weeks from kickoff to live for a single chatbot on one content set. Multi-source or multi-language builds run 5–8 weeks.
          </p>
        </div>
      </section>

      {/*
        Pricing section intentionally omitted: the source spec puts a three-card pricing table plus
        a running-cost note here, but explicitly says to delete the section (and drop the pricing
        FAQ answer) rather than publish figures that aren't confirmed yet. TODO: client to confirm
        single-chatbot, multi-source, and monthly-plan pricing, plus a typical running-cost range,
        then restore this section and the matching FAQ entry.
      */}

      {/* Channels and integrations — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Where it lives and what it connects to</h2>
            <p className="text-lg text-slate-600">The chatbot goes where your customers and staff already are, and reads from where your content already lives. Nobody should have to migrate a knowledge base to make this work.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHANNEL_GROUPS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                    <group.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-2.5 py-1">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <item.icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm font-medium text-slate-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — light */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Where our chatbots run</h2>
            <p className="text-lg text-slate-600">The architecture barely changes by industry. What changes is the content it reads and what a human still has to sign off.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind, idx) => {
              const cardClass = "flex flex-col bg-slate-50 p-6 rounded-2xl border border-[#E2E8F0] shadow-sm transition-all";
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                    <ind.icon className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{ind.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{ind.desc}</p>
                </>
              );
              return (
                <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
                  {ind.href ? (
                    <Link href={ind.href} className={cn(cardClass, "hover:shadow-md hover:border-[#C4B5FD]")}>{content}</Link>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Spaciva — muted */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Why teams pick us over a bigger agency</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_SPACIVA.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*
        Case studies section intentionally omitted: the source spec says to delete it without real
        published case studies with outcome numbers. The site's two existing case studies (PartsFlow,
        Unified Accounting) are real, but neither is a chatbot or RAG project, so presenting them here
        would misrepresent what they demonstrate on a page whose entire argument is groundedness and
        not overstating what's true.
      */}

      {/* FAQ — light, accordion, answers always in the DOM */}
      <section className="py-16 md:py-24 px-5 lg:px-10 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Common questions</h2>
        </div>

        <div>
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Closing CTA — dark, full-bleed */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Tell us what your team keeps getting asked.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll look at your questions and your content, tell you honestly whether a chatbot is worth building, and give you a fixed price if it is.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
