"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, CheckCircle2, RotateCw,
  Layout, Cog, Database, ShieldCheck, Link2, Cloud,
  Rocket, GitBranch, LifeBuoy, Gauge,
  FolderGit2, Server, FileText, FileSignature,
  Hammer, Users, Sliders, Send, Clock,
  ClipboardList, LayoutDashboard, Home, Building2, Boxes, Workflow, LineChart, Repeat,
  Lock, Cpu, Sparkles, Layers, Check, Terminal, Shield, Zap
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import SpecPanel from "@/components/SpecPanel";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const SPEC_ITEMS = [
  { section: "Stack", label: "Frontend", value: "Next.js · React · TypeScript · Tailwind CSS" },
  { section: "Stack", label: "Backend", value: "Node.js · Python · Go · REST & GraphQL" },
  { section: "Stack", label: "Data Layer", value: "PostgreSQL · Redis · MySQL · Supabase" },
  { section: "Stack", label: "Security & Auth", value: "SSO · OAuth2 · Role & Row-Level Security · Audit Logs" },
  { section: "Delivery", label: "Pricing Model", value: "Fixed-scope quote with written milestone commitments" },
  { section: "Delivery", label: "Sprint Cadence", value: "Shipped in 2-week loops on a working staging build" },
  { section: "Delivery", label: "Team Location", value: "Ahmedabad, India · 2–3 hr daily US & UK live overlap" },
  { section: "Ownership", label: "Code & IP", value: "100% full ownership of source code, repo & DB from day one" },
  { section: "Ownership", label: "Cloud Accounts", value: "Deployed in your AWS, GCP, or Azure account directly" },
  { section: "After Launch", label: "Maintenance", value: "Optional monthly monitoring, tuning, and small-feature retainer" },
];

const WHAT_WE_BUILD = [
  {
    title: "Enterprise Web Applications & Portals",
    desc: "Mission-critical web applications with custom business logic, multi-role authentication, interactive dashboards, and tight integrations with your existing core data.",
    badge: "Full-Stack Web",
    href: "/services/web-applications",
    icon: Layout,
  },
  {
    title: "Custom CRMs & Backoffice Systems",
    desc: "When HubSpot or Salesforce forces your business into someone else's rigid data model. Built around your exact records, pipelines, approvals, and permissions.",
    badge: "Operations",
    href: "/services/crm-development",
    icon: Users,
  },
  {
    title: "Tailored ERP & Inventory Platforms",
    desc: "End-to-end operational software connecting order management, warehouse workflows, logistics tracking, multi-vendor coordination, and automated reconciliation.",
    badge: "Supply Chain",
    href: "/services/erp-systems",
    icon: Boxes,
  },
  {
    title: "Internal Business Tools & Dashboards",
    desc: "The software your internal operators rely on daily: approval workflows, custom admin panels, billing reconciliations, and real-time executive reporting.",
    badge: "Internal Ops",
    href: "/services/internal-business-tools",
    icon: LayoutDashboard,
  },
  {
    title: "B2B SaaS MVPs & Multi-Tenant Products",
    desc: "From architecture and tenancy separation to Stripe billing, team hierarchies, and automated onboarding. Ready to scale without taking on tech debt early.",
    badge: "Product Engineering",
    href: "/services/saas-platforms",
    icon: Rocket,
  },
  {
    title: "AI Agents & Workflow Automations",
    desc: "Intelligent document processing, custom RAG search, autonomous internal agents, and email/CRM automation layered directly into your custom software.",
    badge: "AI Engineering",
    href: "/services/ai-agent-development",
    icon: Cpu,
  },
];

const COMPARISON = [
  {
    feature: "Architecture & Data Model",
    offTheShelf: "Rigid, generic fields bent to fit your operation",
    noCode: "Tied to proprietary drag-and-drop constraints",
    customSpaciva: "Engineered 100% around your exact operational rules",
  },
  {
    feature: "Long-term Cost Scaling",
    offTheShelf: "Steep per-seat monthly tax as your headcount grows",
    noCode: "Heavy usage limits & tiered platform lock-in",
    customSpaciva: "Zero per-seat fees. You only pay for baseline cloud hosting",
  },
  {
    feature: "Code & IP Ownership",
    offTheShelf: "You rent access; you own zero software",
    noCode: "Proprietary runtime you cannot easily export",
    customSpaciva: "100% full IP & repository ownership in writing from day one",
  },
  {
    feature: "Integrations & APIs",
    offTheShelf: "Restricted to pre-built app marketplace connectors",
    noCode: "Fragile webhooks prone to silent breakages",
    customSpaciva: "Direct native API connections with full error queues and retries",
  },
  {
    feature: "Maintenance & Extensibility",
    offTheShelf: "Dependent on vendor roadmap priorities",
    noCode: "Breaks as complex conditional logic expands",
    customSpaciva: "Clean, documented, standard code your team or ours can extend",
  },
];

const DELIVERY_STEPS = [
  {
    n: "01",
    title: "Architecture & Data Model Blueprint",
    duration: "3–5 days",
    desc: "Before writing any code, we map your business entities, database schema, user permissions, and integrations. You receive a written technical specification and fixed-price quote with zero hidden assumptions.",
  },
  {
    n: "02",
    title: "Two-Week Iterative Sprints",
    duration: "Shipped bi-weekly",
    desc: "We build and deploy functional vertical slices directly to a private staging environment every two weeks. You test actual running software with real data, accompanied by a weekly Loom video walkthrough.",
  },
  {
    n: "03",
    title: "Rigorous Testing & Security Hardening",
    duration: "Continuous",
    desc: "Automated regression tests on mission-critical calculations, role-based permission assertions, API validation, and automated CI/CD deployments into your chosen cloud infrastructure.",
  },
  {
    n: "04",
    title: "Clean Production Handover & Support",
    duration: "Launch & beyond",
    desc: "Complete documentation, developer onboarding runbooks, and an open codebase handed over in your repository. Followed by optional monthly uptime monitoring and security maintenance.",
  },
];

const STACK_TABS = [
  {
    label: "Frontend",
    icon: Layout,
    items: "React 19 · Next.js App Router · TypeScript · Tailwind CSS · TanStack Query · Framer Motion · Radix UI accessible primitives",
    detail: "Fast, responsive web interfaces built for high operational throughput and intuitive user adoption across desktop and mobile devices.",
  },
  {
    label: "Backend & APIs",
    icon: Server,
    items: "Node.js · TypeScript · Python · FastAPI · Go · RESTful APIs · GraphQL · BullMQ message queues · WebSockets for real-time state",
    detail: "Stateless, horizontally scalable backend services engineered with typed contracts, defensive error handling, and robust audit trails.",
  },
  {
    label: "Databases & Caching",
    icon: Database,
    items: "PostgreSQL · Redis · MySQL · Supabase · pgvector · Prisma · Drizzle ORM · Automated point-in-time recovery",
    detail: "Properly normalised relational schemas with transactional integrity, foreign key constraints, and low-latency indexed caching.",
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    items: "AWS (ECS, RDS, S3, CloudFront) · Google Cloud Platform · Docker · Terraform · GitHub Actions CI/CD · CloudWatch monitoring",
    detail: "Infrastructure as Code provisioned inside your cloud accounts, with automated build, test, and release pipelines.",
  },
  {
    label: "AI & Integrations",
    icon: Sparkles,
    items: "OpenAI · Anthropic Claude · LangChain · LlamaIndex · Stripe · QuickBooks · HubSpot · Salesforce · Slack · WhatsApp Cloud API",
    detail: "Connecting bespoke software seamlessly to existing enterprise systems, CRM databases, payment gateways, and autonomous LLM agents.",
  },
];

const OWNERSHIP_MANIFEST = [
  {
    title: "Git Repository Access from Day One",
    desc: "You are invited to the private GitHub repository from the very first commit. No waiting for a final handover milestone to review what is being built.",
    icon: FolderGit2,
  },
  {
    title: "Direct Deployment in Your Cloud",
    desc: "We deploy the application, database, and background workers directly into your own AWS, GCP, or Azure accounts billed directly to you.",
    icon: Server,
  },
  {
    title: "Standard, Non-Proprietary Code",
    desc: "We write clean, conventional TypeScript, React, and Node.js. No proprietary vendor runtimes, no obscure frameworks that trap you into hiring us forever.",
    icon: Terminal,
  },
  {
    title: "Written Runbooks & Full Handover",
    desc: "Every build ships with environmental documentation, local setup guides, API schemas, and architecture diagrams so any skilled engineer can take over.",
    icon: FileText,
  },
];

const INDUSTRIES = [
  { name: "Healthcare & Life Sciences", href: "/industries/healthcare", desc: "HIPAA-aligned patient portals, clinical trackers & EHR syncs" },
  { name: "Fintech & Financial Services", href: "/industries/fintech", desc: "Ledger systems, loan underwriting tools & compliance registers" },
  { name: "Logistics & Supply Chain", href: "/industries/logistics", desc: "Fleet management, order dispatch, track-and-trace portals" },
  { name: "Real Estate & PropTech", href: "/industries/real-estate", desc: "Property CRMs, transaction pipelines, investor dashboards" },
  { name: "Manufacturing & Utilities", href: "/industries/manufacturing", desc: "Factory telemetry, preventative maintenance, inventory ERPs" },
  { name: "SaaS & Tech Startups", href: "/industries/startups", desc: "Product discovery sprints, MVP builds & multi-tenant engines" },
];

const FAQS = [
  {
    q: "How much does a custom software development company charge?",
    a: "Custom software projects typically range from $8,000 to $45,000+ depending on the complexity of your business logic, integrations, data migration requirements, and user roles. Rather than billing open-ended hourly rates that shift budget risk onto your shoulders, Spaciva quotes fixed prices with clear milestone deliveries after a structured discovery review.",
  },
  {
    q: "Why choose fixed-price custom software development over hourly billing?",
    a: "Hourly billing misaligns incentives: an agency makes more money the longer a project drags on or the messier the code is. With fixed-price milestone delivery, we carry the delivery risk. We define the exact scope, acceptance criteria, and timeline in writing before any code is written, ensuring you know your investment upfront.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of the intellectual property, source code, database architecture, and design assets from day one. Everything lives in your repository and your cloud accounts. Our contract contains explicit, unconditional IP assignment upon milestone completion.",
  },
  {
    q: "Can our in-house developers maintain the application after launch?",
    a: "Absolutely. We deliberately use conventional, widely adopted open-source technologies (Next.js, React, Node.js, TypeScript, PostgreSQL, Docker) with no proprietary agency libraries. We deliver clean codebases backed by automated tests, architecture documentation, and developer setup runbooks so any competent engineer can immediately take it over.",
  },
  {
    q: "How do you handle communication and time zone overlap with US and UK clients?",
    a: "Our engineering headquarters is based in Ahmedabad, India. We maintain 2–3 hours of direct live overlap every single day with US Eastern and UK working hours for standups and Slack messaging. Additionally, we provide weekly written summaries, short Loom video progress walkthroughs, and direct access to the software engineers building your product.",
  },
  {
    q: "How long does it take to develop custom software?",
    a: "Most version-one custom software platforms, internal tools, and client portals ship within 6 to 12 weeks. We break the engagement down into rapid 2-week iterations, meaning you have a clickable, running application on private staging within the very first sprint rather than waiting months for a big reveal.",
  },
  {
    q: "What ongoing maintenance or support is required after launch?",
    a: "Unlike off-the-shelf software where updates happen automatically, custom software requires ongoing security patching, dependency updates, and database maintenance. We offer flexible monthly maintenance retainers covering uptime monitoring, cloud alerts, performance tuning, and continuous small-feature enhancements with a dedicated engineer.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development Services",
  serviceType: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Spaciva is a custom software development company engineering production-ready web applications, enterprise portals, CRMs, ERPs, and cloud architecture at a fixed price with 100% code ownership.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description: "Fixed-price milestone engagement for custom software engineering and enterprise applications.",
  },
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
    { "@type": "ListItem", position: 3, name: "Custom Software Development", item: "https://spaciva.tech/services/custom-software-development" },
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
      <div role="tablist" aria-label="Our Core Technology Stack" className="flex flex-wrap gap-2 mb-6" onKeyDown={onKeyDown}>
        {STACK_TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`custom-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`custom-tabpanel-${i}`}
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
            id={`custom-tabpanel-${i}`}
            aria-labelledby={`custom-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
              <p className="text-sm font-bold text-[#7C3AED] uppercase tracking-wider mb-2">Technologies & Frameworks</p>
              <p className="text-slate-900 font-semibold text-base mb-3">{tab.items}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{tab.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `custom-faq-panel-${index}`;
  const buttonId = `custom-faq-button-${index}`;

  return (
    <div className="border border-white/10 bg-white/[0.04] rounded-2xl overflow-hidden mb-4 hover:border-[#7C3AED]/40 transition-colors">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-white">{faq.q}</span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 text-[#C4B5FD] transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-white/60 leading-relaxed text-sm sm:text-base">{faq.a}</div>
      </motion.div>
    </div>
  );
}

export default function CustomSoftwareDevelopmentClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/20 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[640px]">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                Custom Software Development Company
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                Software engineered for how your business actually runs
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                When generic SaaS limits your operational growth, Spaciva engineers custom web applications, internal tools, CRMs, ERPs, and automation platforms. Built to a fixed price, delivered in two-week working loops, and handed over with 100% full code ownership.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-min Technical Call" hoverLabel="Let's Talk" />
                <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-white/50">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7C3AED]" /> Fixed-Price Milestones</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7C3AED]" /> 100% IP & Repo Ownership</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7C3AED]" /> Working Build from Sprint 1</span>
              </div>
            </motion.div>

            {/* Architecture Ecosystem Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full"
            >
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-wider text-white/80 uppercase">Production Software Blueprint</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#C4B5FD] bg-[#7C3AED]/20 px-2.5 py-1 rounded-md border border-[#7C3AED]/30">
                    Next.js + Node + Postgres
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-3.5 flex items-center justify-between hover:border-[#7C3AED]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center shrink-0">
                        <Layout className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Client & Staff Interfaces</p>
                        <p className="text-xs text-white/50">React 19, responsive dashboards, role-based UI</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
                  </div>

                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-3.5 flex items-center justify-between hover:border-[#7C3AED]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#6366F1] flex items-center justify-center shrink-0">
                        <Cog className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Core Business Logic & API Layer</p>
                        <p className="text-xs text-white/50">Node.js, Python, typed contracts, background queues</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">REST/GraphQL</span>
                  </div>

                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-3.5 flex items-center justify-between hover:border-[#7C3AED]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center shrink-0">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Data Architecture & Storage</p>
                        <p className="text-xs text-white/50">PostgreSQL, Redis cache, audit-logging, zero data loss</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">ACID Compliant</span>
                  </div>

                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-3.5 flex items-center justify-between hover:border-[#7C3AED]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0EA5E9] flex items-center justify-center shrink-0">
                        <Cloud className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Cloud Infrastructure & CI/CD</p>
                        <p className="text-xs text-white/50">Deployed in your AWS or GCP account with automated testing</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Your Accounts</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                  <span>Zero Vendor Lock-in</span>
                  <span>100% Handover Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Trust Strip */}
      <TrustStrip label="Engineered for ambitious businesses across the US, UK, and India" />

      {/* Main Content Layout with Sticky Spec Panel */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-20">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">

            {/* Section 1: What We Build */}
            <section id="what-we-build" className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-24">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                Full-Stack Capabilities
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                What we engineer as a custom software development company
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">
                We don&apos;t build generic WordPress sites or cookie-cutter templates. We architect tailored software systems that solve operational bottlenecks, unify fragmented tools, and give companies complete control over their proprietary technology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {WHAT_WE_BUILD.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group border border-slate-200/90 rounded-2xl p-6 bg-slate-50/50 hover:bg-white hover:border-[#7C3AED]/50 hover:shadow-xl hover:shadow-[#7C3AED]/5 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-200/60 px-2.5 py-1 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#7C3AED] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] group-hover:translate-x-1 transition-transform">
                      Explore detailed specs <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 2: When to Commission Custom Software (Comparison) */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                Strategic Evaluation
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                Custom software vs. off-the-shelf vs. no-code
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">
                If your process fits cleanly into HubSpot, Shopify, or QuickBooks, you should buy them. A custom build only makes commercial sense when off-the-shelf tools distort your operations or when subscription seat taxes become unsustainable.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">Criteria</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">Off-the-Shelf SaaS</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400">No-Code Builders</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-[#7C3AED]/5 rounded-t-xl">Spaciva Custom</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {COMPARISON.map((row) => (
                      <tr key={row.feature} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-4 text-slate-500">{row.offTheShelf}</td>
                        <td className="py-4 px-4 text-slate-500">{row.noCode}</td>
                        <td className="py-4 px-4 font-semibold text-slate-800 bg-[#7C3AED]/5">{row.customSpaciva}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Engineering Methodology */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                The Delivery Loop
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                How we ship custom software without budget blowouts
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">
                The biggest risk in bespoke software is the &ldquo;big reveal&rdquo; trap: scoping for months, disappearing into development, and handing over something nobody wants to use. We prevent this by shipping working software every two weeks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {DELIVERY_STEPS.map((step) => (
                  <div key={step.n} className="border border-slate-200/90 rounded-2xl p-6 bg-slate-50/50">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-3xl font-extrabold text-[#7C3AED]">{step.n}</span>
                      <span className="text-xs font-bold uppercase text-slate-400 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: 100% Code Ownership & Zero Lock-in */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                IP Protection
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                100% code ownership. Zero vendor lock-in.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">
                Every line of custom software we write belongs to you. We believe clients should stay with us because the engineering is exceptional, not because their codebase is held hostage behind proprietary tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {OWNERSHIP_MANIFEST.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Modern Tech Stack */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                Engineering Stack
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                Built on battle-tested open standards
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">
                We choose technologies that have vast global talent pools, enterprise longevity, and first-class tooling. If you ever hire in-house developers or hand the project to another team, any competent engineer can immediately read and run it.
              </p>

              <StackTabs />
            </section>

            {/* Section 6: Industry Specializations */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                Domain Experience
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
                Custom software engineered across key verticals
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">
                Each industry has distinct compliance laws, data models, and workflow complexities. Explore how our custom software solutions serve different sectors:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#7C3AED] hover:shadow-md transition-all group"
                  >
                    <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#7C3AED] transition-colors flex items-center justify-between">
                      {ind.name}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-500">{ind.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Mobile/tablet spec panel collapses here */}
            <div className="min-[1200px]:hidden">
              <SpecPanel items={SPEC_ITEMS} title="Custom Software Specs" />
            </div>

            {/* Section 7: FAQs */}
            <section id="faqs" className="bg-[#0F172A] border border-white/10 rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-wider mb-4">
                Straight Answers
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-[720px]">
                Everything you need to know about commissioning custom software development with Spaciva.
              </p>

              <div>
                {FAQS.map((faq, index) => (
                  <FAQItem
                    key={faq.q}
                    faq={faq}
                    index={index}
                    isOpen={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                ))}
              </div>
            </section>

            {/* Final CTA Banner */}
            <section className="bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] rounded-[2rem] p-8 md:p-14 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
                  Ready to engineer software tailored to your business?
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                  Book a confidential 30-minute scoping call with an engineer. We will review your current systems, evaluate feasibility, and prepare a fixed-price proposal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <AnimatedCtaButton
                    href="/contact"
                    label="Schedule a Scope Review"
                    hoverLabel="Book Now"
                    size="lg"
                    className="bg-white text-[#7C3AED] hover:bg-slate-100 shadow-xl"
                  />
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    Learn More About Our Team
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* Persistent Sticky Spec Panel on Desktop */}
          <aside className="hidden min-[1200px]:block">
            <div className="sticky top-32">
              <SpecPanel items={SPEC_ITEMS} title="Custom Software Specs" />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

