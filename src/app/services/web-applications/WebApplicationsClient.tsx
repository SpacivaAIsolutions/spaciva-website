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
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import SpecPanel from "@/components/SpecPanel";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const ANATOMY = [
  { label: "Interface", desc: "React, responsive, accessible", icon: Layout },
  { label: "Business logic", desc: "Your rules, tested", icon: Cog },
  { label: "Data layer", desc: "Postgres, modelled properly", icon: Database },
  { label: "Auth & permissions", desc: "SSO, role and row level", icon: ShieldCheck },
  { label: "Integrations", desc: "Your existing stack", icon: Link2 },
  { label: "Deployment & monitoring", desc: "Your cloud, alerting on", icon: Cloud },
];

const WE_BUILD = [
  { title: "Custom applications with real logic", desc: "Internal systems, client portals, operational tools, data-heavy interfaces, admin platforms. Things with permissions, workflows, and integrations rather than pages." },
  { title: "Rebuilds and migrations", desc: "Legacy applications moved to Next.js and React, WordPress or PHP systems replaced when they've become the constraint, older React apps modernised." },
  { title: "Rescues", desc: "Taking over a project from a previous developer or agency, auditing it honestly, and telling you whether to salvage or restart." },
  { title: "Performance and scale work", desc: "Applications that work but have become slow, expensive to run, or fragile under load." },
];

const WE_DONT_BUILD = [
  { title: "Marketing websites and brochure sites", desc: "If what you need is five pages and a contact form, a good Webflow or WordPress developer will do it faster and for a fraction of what we'd charge. We'd be a poor use of your money and we'll say so on the call." },
  { title: "Native mobile apps", desc: "We build responsive and progressive web applications that work properly on phones. If you specifically need App Store and Play Store native builds, you want a mobile specialist." },
  { title: "Staff augmentation", desc: "We don't place developers into your team on a monthly rate. We take defined scopes at fixed prices and carry the delivery risk ourselves, that's the whole model, and it doesn't bend." },
  { title: "Standalone visual design and branding projects", desc: "We design what we build, and we build well from designs you bring. Logos, brand identity, and marketing sites aren't our field.", linkPrefix: "For product design and UX audits, that's ", link: { href: "/guides/ux-for-internal-software", label: "UI/UX design" }, linkSuffix: "." },
];

const ENGAGEMENT_SHAPES = [
  { title: "New application builds", icon: Rocket, bestFor: "teams who know what they need and want it built once, properly.", desc: "Something that doesn't exist yet: an internal platform, a client portal, an operational system, a product. Scoped into a version one that ships and a roadmap that follows, because the most common way these overrun is that everything gets called version one." },
  { title: "Rebuilds and migrations", icon: GitBranch, bestFor: "“it works, but every change takes three weeks and we're scared of it.”", desc: "A working application that's become the constraint: slow, unmaintainable, stuck on a framework nobody wants to touch, or built on WordPress and PHP long past where that made sense. Migrated incrementally where possible, so you're not offline and not betting a quarter on a cutover." },
  { title: "Project rescues", icon: LifeBuoy, bestFor: "you're mid-project, the developer is gone, and you need a straight answer this week.", desc: "A previous developer or agency left, and you have a half-finished codebase, no documentation, and a deadline. We audit what exists, tell you honestly whether to salvage or restart, and give you a fixed price for either path. We take these often and we don't editorialise about the last team, it's rarely useful and you already know how you feel about it." },
  { title: "Performance and scale work", icon: Gauge, bestFor: "teams where the complaint is “it's slow” and nobody has measured what's actually slow.", desc: "An application that works and has stopped working well. Slow queries, ballooning cloud bills, poor Core Web Vitals, failures under load. Measured first, fixed second, with a written baseline so the improvement is provable rather than asserted." },
];

const MANIFEST = [
  {
    category: "The code",
    icon: FolderGit2,
    items: [
      { name: "A repository you own from day one", desc: "Not transferred at the end. You have access from the first commit, so you can see the work as it happens and you're never waiting on a handover to have your own software." },
      { name: "Conventional, unexciting technology", desc: "Next.js, React, TypeScript, Node, Postgres. Chosen so any competent developer can pick it up, and so hiring for it later means hiring for skills people actually have." },
      { name: "No proprietary framework of ours", desc: "Nothing you'd need us specifically to maintain. We don't build on an in-house platform and we won't put your business-critical application somewhere only we can reach." },
      { name: "Tests on the logic that matters", desc: "The business rules, the calculations, the permission checks. Not a coverage percentage chased for its own sake, but the parts where a silent regression would cost you." },
    ],
  },
  {
    category: "The infrastructure",
    icon: Server,
    items: [
      { name: "Running in your own cloud accounts", desc: "Your AWS, GCP, Azure, or Vercel, billed to you, controlled by you. If our relationship ends tomorrow, nothing switches off." },
      { name: "Infrastructure as code", desc: "The environment reproducible from the repository rather than assembled by hand and remembered by one person." },
      { name: "CI/CD pipelines", desc: "Automated build, test, and deploy, so releasing doesn't depend on a specific human's laptop." },
      { name: "Staging and production environments", desc: "With a documented promotion path between them." },
      { name: "Monitoring and alerting configured", desc: "Uptime, errors, and performance, wired to reach someone. Not installed and left unrouted." },
    ],
  },
  {
    category: "The documentation",
    icon: FileText,
    items: [
      { name: "A README that gets a new developer running locally", desc: "Actually tested by someone who hadn't seen the project, because the ones that haven't been tested never work." },
      { name: "Architecture notes", desc: "Covering the decisions and why they were made. The reasoning is what future maintainers need; the code already tells them the what." },
      { name: "API documentation", desc: "For anything other systems talk to." },
      { name: "A runbook", desc: "For deployment, rollback, common failures, and what to check first when something breaks." },
      { name: "Written access inventory", desc: "Every service, credential location, and third-party account the application depends on. This is the thing people discover is missing at the worst possible moment." },
    ],
  },
  {
    category: "The terms",
    icon: FileSignature,
    items: [
      { name: "Full IP transfer on final payment", desc: "Source code, designs, infrastructure configuration, and documentation. In writing, in the SOW, before work starts." },
      { name: "No lock-in of any kind", desc: "No proprietary dependency, no hosting you can't leave, no licence that expires." },
      { name: "A handover call and a Loom walkthrough", desc: "If your own team is taking over, plus a period of questions answered afterwards, whether or not you're on a monthly plan." },
    ],
  },
];

const RUN_IN = { title: "Scope and fixed quote", duration: "3–5 days", desc: "We work out what version one has to do and, more usefully, what it doesn't. You get a written scope, a fixed price, and a delivery date before any code is written, with version one separated from everything after it. If scope moves, we re-quote in writing first." };

const LOOP = [
  { title: "Build", icon: Hammer, desc: "A working slice, deployed to staging. Written update every Friday plus a short Loom walkthrough of what moved.", marker: "First clickable build: end of week one" },
  { title: "You use it", icon: Users, desc: "Not a demo, not a click-through prototype. Your team opens the real thing on real data and forms an opinion. This is what surfaces the requirements nobody could articulate in a scoping call." },
  { title: "We adjust", icon: Sliders, desc: "What came back gets fixed and folded into the next slice." },
  { title: "Ship", icon: Send, desc: "Live, or held with the others, depending on what makes sense for you." },
];

const SPEC_ITEMS = [
  { section: "Delivery", label: "First clickable build", value: "End of week one" },
  { section: "Delivery", label: "Typical version one", value: "Scoped and quoted after the run-in" },
  { section: "Delivery", label: "Hosting", value: "Your AWS, GCP, Azure, or Vercel account" },
  { section: "Stack", label: "Frontend", value: "Next.js · React · TypeScript · Tailwind" },
  { section: "Stack", label: "Backend", value: "Node · Python · REST and GraphQL" },
  { section: "Stack", label: "Data", value: "Postgres · MySQL · Redis" },
  { section: "Stack", label: "Auth", value: "SSO · Google Workspace · Microsoft Entra ID · role and row-level permissions" },
  { section: "Stack", label: "Testing", value: "Vitest · Jest · Playwright" },
  { section: "Ownership", label: "Ownership", value: "Repository access from day one, full IP transfer on final payment" },
  { section: "Ownership", label: "After launch", value: "Monthly monitoring, updates, and feature work" },
];

const STACK_TABS = [
  { label: "Frontend", icon: Layout, items: "Next.js (App Router and Pages) · React · TypeScript · Tailwind CSS · shadcn/ui · Radix · TanStack Query · React Hook Form · Recharts and D3 for data-heavy interfaces" },
  { label: "Backend & data", icon: Database, items: "Node · Express and Fastify · Python and FastAPI where the work is data or ML adjacent · REST and GraphQL APIs · Postgres · MySQL · Redis · Prisma and Drizzle · background job queues" },
  { label: "Auth & security", icon: ShieldCheck, items: "NextAuth and Auth.js · Clerk · Auth0 · SSO via Google Workspace and Microsoft Entra ID · role-based and row-level permissions · audit logging · OWASP-aligned practices · secrets management" },
  { label: "Testing & quality", icon: CheckCircle2, items: "TypeScript in strict mode · Vitest and Jest · Playwright for end-to-end · ESLint and Prettier · pre-commit hooks · pull request review on every change" },
  { label: "Infrastructure", icon: Cloud, items: "AWS · GCP · Azure · Vercel · Docker · GitHub Actions · infrastructure as code · staging and production environments · Sentry and uptime monitoring · regional hosting where data residency (EU or UK) is required" },
];

const DONT_BUILD_WHEN = "It's a marketing site, Webflow or WordPress, faster and cheaper. Your process still fits a no-code tool and is still changing shape monthly, stay on Airtable or Retool until it stops. An off-the-shelf product exists that does 80% of what you need and the remaining 20% is preference rather than necessity, buy it. You need something in two weeks, no custom build meets that, and anyone who says otherwise is quoting version one of something else.";

const BUILD_CUSTOM_WHEN = "Per-seat or per-record pricing has stopped making sense at your scale. The logic has outgrown what a builder can express. You need permissions matching your org rather than a platform's model. You need deep integration with systems no platform reaches. Performance has degraded as your data grew. Or the data can't sit on someone else's platform.";

const BUY_TABLE = [
  { label: "Time to first version", nocode: "Days to weeks", custom: "Scoped and quoted after the run-in" },
  { label: "Upfront cost", nocode: "Low", custom: "Higher, fixed and quoted in writing" },
  { label: "Ongoing cost", nocode: "Per-seat, grows with you", custom: "Hosting plus a monthly plan" },
  { label: "Changing it yourself", nocode: "Easy, within limits", custom: "Needs a developer" },
  { label: "Complex logic", nocode: "Constrained by the builder", custom: "Whatever your process is" },
  { label: "Permissions", nocode: "Platform's model", custom: "Modelled to your org" },
  { label: "Performance at volume", nocode: "Degrades, tier upgrades", custom: "Designed for your scale" },
  { label: "Customer-facing use", nocode: "Usually limited or licensed", custom: "Built as your product" },
  { label: "Ownership", nocode: "You rent it", custom: "Code and infrastructure are yours" },
];

const OFFSHORE_ITEMS = [
  { title: "You have the repository from day one", icon: FolderGit2, desc: "Not on handover. From the first commit. You can see the work as it happens, and you're never in a position where your software exists only somewhere you can't reach." },
  { title: "Written updates you don't have to chase", icon: Send, desc: "Every Friday: what moved, what's next, what's blocked, in writing, plus a short Loom walkthrough. You'll never have to ask what happened this week." },
  { title: "Real overlap, committed in writing", icon: Clock, desc: "2–3 hours of daily overlap with US Eastern and UK working hours, with a same-business-day response commitment on anything urgent." },
  { title: "Fixed price, so the risk is ours", icon: ShieldCheck, desc: "No hourly billing and no change orders you didn't agree to. If we estimate badly, that's our problem to absorb, which is the correct incentive and the reason we scope carefully." },
  { title: "Senior engineers, directly", icon: Users, desc: "You talk to the people writing the code. No account manager relaying requirements to a team you never meet." },
  { title: "NDA, MSA, and SOW as standard", icon: FileSignature, desc: "NDA before discovery if you want one. Standard MSA and SOW with explicit IP transfer and change-order terms. Nothing about the commercial arrangement is improvised." },
];

const ROUTING = [
  { title: "SaaS platforms", desc: "The application is customer-facing, sold to many customers on subscription, not used by your own organisation. Multi-tenancy and billing change the engineering.", icon: Repeat, href: "/services/saas-platforms" },
  { title: "Internal business tools", desc: "A place your team does a specific piece of work. Portals, admin panels, trackers, approval systems.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Custom dashboards", desc: "Read-only visibility across systems that don't currently talk to each other.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "CRM development", desc: "When the subject is specifically customers, deals, and pipeline.", icon: Home, href: "/services/crm-development" },
  { title: "ERP systems", desc: "The financial and operational system of record, and everything that connects to it.", icon: Building2, href: "/services/erp-systems" },
  { title: "Inventory management", desc: "One accurate stock number across channels and locations.", icon: Boxes, href: "/services/inventory-management" },
  { title: "Workflow automation", desc: "Something happens without anyone opening anything. If nobody needs a screen, this is cheaper and faster.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Business intelligence", desc: "The warehouse and metric layer underneath several dashboards, not one application.", icon: LineChart, href: "/services/business-intelligence" },
  { title: "Client portals", desc: "The application is for people outside your organisation, clients, vendors, partners, or members, self-serving rather than being served by your team.", icon: Users, href: "/services/client-portals" },
];

const ENGAGEMENT_MODELS = [
  { label: "Version one build", bestFor: "you know what you need and want it built once, properly.", includes: "A defined application scoped, built, deployed, and handed over with everything in the handover manifest above. Includes the first month of monitoring.", from: "Fixed price, quoted after the scoping run-in" },
  { label: "Rescue or audit", bestFor: "the previous developer left and you need a straight answer this week.", includes: "We take over an existing codebase, audit it against the handover manifest, and give you a written assessment plus a fixed price for either salvaging or restarting. The audit stands alone, you're welcome to take it elsewhere.", from: "Fixed price after a short audit" },
  { label: "Ongoing product partner", bestFor: "teams whose application is now business-critical and keeps evolving, most clients end up here.", includes: "Monitoring, dependency and security updates, and a set amount of feature work each month against a roadmap you set.", from: "A monthly plan sized to your application" },
];

const CASE_STUDIES = [
  { num: "80%", metric: "Faster data entry", title: "PartsFlow", desc: "A spare-parts distributor's warehouse team was hand-keying inventory movements into QuickBooks. Bulk validated imports and a live sync replaced row-by-row spreadsheet work across a 5,000+ SKU catalogue.", href: "/case-studies/partsflow" },
  { num: "70%", metric: "Less manual data entry", title: "Unified Accounting", desc: "Vendors, invoices, and payments moved through automated pipelines instead of copy-paste between accounting UIs, across QuickBooks, Xero, NetSuite, Sage, Business Central, and Odoo.", href: "/case-studies/unified-accounting" },
];

const FAQS = [
  { q: "Why Next.js and React specifically?", a: "Because they're conventional. Both have enormous ecosystems, deep documentation, and a large hiring pool, so when you want to bring development in-house or move to another firm, you can. A less common framework might suit a given project marginally better and would leave you with a much smaller set of people able to maintain it. That trade is rarely worth it." },
  { q: "Do you build mobile apps?", a: "We build responsive and progressive web applications that work properly on phones, including offline-capable ones for field use. If you specifically need native App Store and Play Store builds, you want a mobile specialist and we'll say so." },
  { q: "Can you take over a project someone else started?", a: "Yes, often. We audit what exists, code quality, test coverage, documentation, infrastructure, security, and give you a written assessment plus a fixed price for salvaging or restarting. It's more often salvage than people expect. The audit stands alone and you're welcome to take it elsewhere." },
  { q: "How long does a custom application take?", a: "You'll have something clickable at the end of week one, and version one is scoped and quoted in writing once we've agreed what it actually needs to do. The largest variable is scope discipline, not technical complexity, the most common cause of overruns is that everything gets classified as version one, which is why we separate it in writing at quote stage." },
  { q: "Do you offer hourly or dedicated developer arrangements?", a: "No. We take defined scopes at fixed prices and carry the delivery risk ourselves. Hourly billing puts the risk of a bad estimate on you and removes our incentive to be efficient. If you specifically want developers embedded in your team on a monthly rate, we're the wrong firm and there are good ones for that." },
  { q: "Who owns the code?", a: "You do, and you have the repository from day one rather than on handover. Full IP transfer, code, designs, infrastructure configuration, documentation, on final payment, written into the SOW before work starts." },
  { q: "Where is it hosted?", a: "Your own AWS, GCP, Azure, or Vercel account, billed to you. Regional hosting where data residency in the EU or UK is required. If our relationship ends, nothing switches off." },
  { q: "Can our own developers maintain it afterwards?", a: "That's what it's built for. Standard Next.js, React, TypeScript, Node, and Postgres, nothing proprietary, documented, with a README a new developer can actually follow and a runbook for deployment and failures. We do a handover call and a Loom walkthrough, and answer questions afterwards whether or not you're on a plan." },
  { q: "What happens after launch?", a: "A monthly plan: uptime and error monitoring, dependency and security updates, small feature work, and a named engineer who knows your setup. Dependencies age and security advisories arrive whether or not anyone is watching, an unmaintained application is a slowly accumulating liability." },
  { q: "What if we're not happy with how it's going?", a: "You'll know within two weeks, not two months, because you're using real builds throughout. Fixed scope means no runaway budget, and you have the repository from day one, so at any point you can take what exists and go elsewhere. That's deliberate, it keeps the incentive on us to keep earning the next loop." },
  { q: "What does it cost?", a: "Version one builds, rescue audits, and ongoing plans are all fixed price, quoted in writing before any work starts, and scaled to what your application actually needs, we won't quote a figure before we've seen the scope. We carry the risk of our own estimates rather than passing it to you as change orders." },
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, with 2–3 hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment on anything urgent. A written update every Friday plus a short Loom walkthrough. NDA before discovery if you'd like one." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Application Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom web applications in Next.js, React, and Node, built to a fixed price, shipped in two-week loops, handed over with tests and docs. You own everything.",
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
    { "@type": "ListItem", position: 3, name: "Web Applications", item: "https://spaciva.tech/services/web-applications" },
  ],
};

// Application anatomy, the hero's signature diagram: six concerns arranged around a central
// application core, not a sequence, deliberately distinct from C-1's flow and C-2's ladder. Real
// <text> nodes per the accessibility note. A separate plain-grid rendering covers <1024px, since
// SVG text doesn't reflow the way the source spec's "two-column grid" requirement needs.
function AnatomyDiagram() {
  const top = ANATOMY.slice(0, 3);
  const bottom = ANATOMY.slice(3, 6);
  const boxW = 140;
  const boxH = 74;
  const xs = [20, 170, 320];

  return (
    <svg
      viewBox="0 0 480 300"
      className="w-full h-auto hidden lg:block"
      role="img"
      aria-label="Diagram: an application's anatomy, six concerns arranged around a central application core, not a sequence. Interface: React, responsive, accessible. Business logic: your rules, tested. Data layer: Postgres, modelled properly. Auth and permissions: SSO, role and row level. Integrations: your existing stack. Deployment and monitoring: your cloud, alerting on. Most quotes price the first one. The other five are where projects fail."
    >
      {top.map((item, i) => (
        <g key={item.label}>
          <rect x={xs[i]} y={20} width={boxW} height={boxH} rx={14} fill="#FFFFFF0D" stroke="#FFFFFF1A" strokeWidth={1} />
          <text x={xs[i] + boxW / 2} y={48} textAnchor="middle" fontSize={12.5} fontWeight={700} fill="#FFFFFF">{item.label}</text>
          <text x={xs[i] + boxW / 2} y={68} textAnchor="middle" fontSize={10} fill="#FFFFFF99">{item.desc}</text>
          <line x1={xs[i] + boxW / 2} y1={94} x2={xs[i] + boxW / 2} y2={112} stroke="#FFFFFF33" strokeWidth={1.5} />
        </g>
      ))}

      <rect x={20} y={112} width={440} height={50} rx={14} fill="#7C3AED" />
      <text x={240} y={133} textAnchor="middle" fontSize={13.5} fontWeight={800} fill="#FFFFFF" letterSpacing={1}>APPLICATION</text>
      <text x={240} y={150} textAnchor="middle" fontSize={9.5} fill="#FFFFFFCC">One codebase, six concerns, all of them priced</text>

      {bottom.map((item, i) => (
        <g key={item.label}>
          <line x1={xs[i] + boxW / 2} y1={162} x2={xs[i] + boxW / 2} y2={180} stroke="#FFFFFF33" strokeWidth={1.5} />
          <rect x={xs[i]} y={180} width={boxW} height={boxH} rx={14} fill="#FFFFFF0D" stroke="#FFFFFF1A" strokeWidth={1} />
          <text x={xs[i] + boxW / 2} y={208} textAnchor="middle" fontSize={12.5} fontWeight={700} fill="#FFFFFF">{item.label}</text>
          <text x={xs[i] + boxW / 2} y={228} textAnchor="middle" fontSize={10} fill="#FFFFFF99">{item.desc}</text>
        </g>
      ))}
    </svg>
  );
}

function AnatomyGrid() {
  return (
    <div className="grid grid-cols-2 gap-2.5 lg:hidden">
      {ANATOMY.map((item) => (
        <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-3.5">
          <span className="w-7 h-7 rounded-lg bg-[#7C3AED] flex items-center justify-center mb-2.5">
            <item.icon className="w-3.5 h-3.5 text-white" />
          </span>
          <p className="font-bold text-xs text-white mb-0.5">{item.label}</p>
          <p className="text-white/50 text-[11px] leading-snug">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

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
      <div role="tablist" aria-label="What we build on" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {STACK_TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`web-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`web-tabpanel-${i}`}
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
            id={`web-tabpanel-${i}`}
            aria-labelledby={`web-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <p className="text-slate-600 leading-relaxed">{tab.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `web-faq-panel-${index}`;
  const buttonId = `web-faq-button-${index}`;

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
        <div className="px-6 pb-5 text-white/60 leading-relaxed">{faq.a}</div>
      </motion.div>
    </div>
  );
}

export default function WebApplicationsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — dark base, the application-anatomy diagram: six concerns around a central
          core, not a flow and not a stack, distinct from every other Template C hero. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/15 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                Web Applications
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                Applications built to be handed over
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Next.js, React, and Node, written the way you&apos;d want to inherit it. Tested, documented, running in your own accounts, in a repository you control from day one. Whether we keep running it or your own team takes it over next year, nothing about it depends on us still being here.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#manifest" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  See exactly what you receive
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-white/50">
                Fixed scope, fixed price · Shipping every two weeks · Your repo, your cloud, from day one
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 sm:p-7 backdrop-blur-sm">
                <AnatomyDiagram />
                <AnatomyGrid />
                <p className="text-xs text-white/40 mt-3 text-center">Most quotes price the first box. The other five are where projects fail.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip — genuine white band on the dark base */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-white/10" containerClassName="max-w-7xl mx-auto px-5 lg:px-10" fadeFrom="white" />

      {/* What we build / don't build — equal visual weight, no muted box on either side,
          matching the ERP page's treatment. Plain text columns, placed high, above the
          engagement shapes, deliberately disqualifying. */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Here&apos;s the boundary, before either of us wastes a call</h2>
            <p className="text-lg text-white/60">Web application development attracts an enormous range of enquiries, most of which we&apos;re the wrong firm for. Here&apos;s the scope, upfront.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-white">What we build</h3>
              <div className="flex flex-col gap-7">
                {WE_BUILD.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-white">What we don&apos;t build</h3>
              <div className="flex flex-col gap-7">
                {WE_DONT_BUILD.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                      {item.link && (
                        <>
                          {" "}{item.linkPrefix}
                          <Link href={item.link.href} className="font-bold text-[#C4B5FD] hover:underline">{item.link.label}</Link>
                          {item.linkSuffix}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-white/5 rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-white leading-snug max-w-3xl">
            Every hour we spend on a project we&apos;re wrong for is an hour off a project we&apos;re right for. Disqualifying early is a service, not a rejection.
          </blockquote>
        </div>
      </section>

      {/* What we build — four engagement shapes, light cards on dark base, heavier than a
          catalogue grid since these are shapes of engagement rather than a list of tools */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-4">
            What We Build
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Four shapes of engagement</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ENGAGEMENT_SHAPES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="flex flex-col bg-white text-[#0F172A] p-7 md:p-8 rounded-3xl shadow-xl"
            >
              <span className="w-11 h-11 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-[#7C3AED]" />
              </span>
              <h3 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-5">{item.desc}</p>
              <p className="mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">Best for: {item.bestFor}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-white/60 max-w-[760px]">
          If you arrived knowing what the application is for, there&apos;s probably a better-fitting page:{" "}
          <Link href="/services/internal-business-tools" className="font-bold text-[#C4B5FD] hover:underline">internal tools</Link>,{" "}
          <Link href="/services/custom-dashboards" className="font-bold text-[#C4B5FD] hover:underline">dashboards</Link>, or{" "}
          <Link href="/services/workflow-automation" className="font-bold text-[#C4B5FD] hover:underline">workflow automation</Link>{" "}
          if what you need is something to happen rather than a screen. Same engineers, same stack, those pages just answer the specific question faster.
        </p>
      </section>

      {/* Main content + sticky spec panel — stretches to the main column's height (no
          items-start), so the sticky child can track scroll across the manifest, the loop,
          the stack tabs, and the build-or-buy comparison. */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">
            {/* The handover manifest — signature section, styled as a plain itemised document
                rather than a feature grid, per the explicit "must not drift" build note. Real
                <ul>/<li> markup with <strong> item names for LLM/crawler structure. */}
            <section id="manifest" className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-24">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                Handover manifest
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Exactly what you receive on final payment</h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">
                The main risk in commissioning custom software from anyone, offshore or not, is being handed something nobody else can maintain. Adjectives don&apos;t answer that. Here&apos;s the itemised version.
              </p>

              <div className="flex flex-col">
                {MANIFEST.map((group, gi) => (
                  <div key={group.category} className={cn("py-7", gi > 0 && "border-t border-slate-100")}>
                    <div className="flex items-center gap-2.5 mb-5">
                      <group.icon className="w-4 h-4 text-slate-400" />
                      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">{String(gi + 1).padStart(2, "0")} — {group.category}</h3>
                    </div>
                    <ul className="flex flex-col gap-4">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" aria-hidden="true" />
                          <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="text-slate-900 font-bold">{item.name}</strong> — {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-900 font-bold leading-snug">
                If a vendor can&apos;t produce this list for a project they&apos;ve finished, the project isn&apos;t finished. Ask for it before you sign, from us and from anyone else you&apos;re considering.
              </blockquote>
              <p className="mt-6 text-slate-500 text-sm">
                Already have an application and the infrastructure is the problem?{" "}
                <Link href="/services/cloud-devops" className="font-bold text-[#7C3AED] hover:underline">See cloud &amp; DevOps</Link>.
              </p>
            </section>

            {/* How the work runs — a scope run-in, then a repeating two-week loop with the
                week-one clickable build flagged, distinct from C-2's loop which starts after
                an audit with no equivalent early-build marker. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Something you can click, from week one</h2>

              <div className="flex gap-4 mb-12 max-w-[760px]">
                <span className="text-2xl font-light text-slate-300 tabular-nums shrink-0 w-8">01</span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900">{RUN_IN.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">{RUN_IN.duration}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{RUN_IN.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <RotateCw className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Then, repeating every two weeks</span>
              </div>

              <div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
                role="img"
                aria-label="Diagram: a repeating two-week loop of four steps. Build, with the first clickable build ready at the end of week one, then you use it, then we adjust, then ship, then the loop returns to build again."
              >
                {LOOP.map((item, idx) => (
                  <div key={item.title} className={cn("relative rounded-2xl p-5", item.marker ? "bg-[#F5F3FF] border-2 border-[#7C3AED]/30" : "bg-slate-50 border border-slate-100")}>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    {item.marker && (
                      <span className="inline-block mt-3 px-2 py-1 rounded-full bg-[#7C3AED] text-white text-[10px] font-bold uppercase tracking-wide">{item.marker}</span>
                    )}
                    {idx < LOOP.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 text-slate-300" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-10">
                <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
                Ship loops back to Build for the next slice
              </p>

              <p className="text-slate-600 leading-relaxed max-w-[760px]">
                <span className="font-bold text-slate-900">After launch</span> — a monthly plan: uptime and error monitoring, dependency and security updates, small feature work, and a named engineer who knows your setup. Applications rot without this, and it&apos;s scoped from day one rather than sold at handover.
              </p>
            </section>

            {/* Stack — five-tab technology breakdown, all panels in the DOM on load, the
                richest keyword surface on the page */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="mb-10">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">What we build on, and why</h2>
                <p className="text-slate-600">Deliberately conventional. Every choice here is one your own team could hire for.</p>
              </div>
              <StackTabs />
              <p className="mt-8 text-slate-500 text-sm border-t border-slate-100 pt-6">
                Where an application needs a step that genuinely requires judgement rather than a rule, that&apos;s an{" "}
                <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent</Link>{" "}
                inside an otherwise deterministic system. Most applications don&apos;t need one. A few need one in exactly one place, and knowing which is which saves more money than it costs.
              </p>
            </section>

            {/* Next.js, or something simpler — equal-weight cards + comparison table, the
                build-or-buy researcher's landing point */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">You may not need a custom application</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">Custom engineering is the wrong answer more often than any development agency admits.</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">Don&apos;t build custom when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{DONT_BUILD_WHEN}</p>
                </div>
                <div className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 mb-2">Build custom when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{BUILD_CUSTOM_WHEN}</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-8">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">No-code / off-the-shelf</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Custom application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BUY_TABLE.map((row) => (
                      <tr key={row.label} className="border-b border-[#E2E8F0] last:border-0">
                        <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.label}</th>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.nocode}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[720px]">
                <span className="font-bold text-slate-900">Honest answer:</span> the clearest signal it&apos;s time to build isn&apos;t frustration with your current tool. It&apos;s when the workarounds around it have become their own process, someone spending hours a week keeping two things in agreement, or a step everyone knows to skip because the tool gets it wrong.
              </p>
            </section>

            {/* Mobile/tablet spec panel — collapses here above the routing block below 1200px */}
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

      {/* Working with an offshore team — six-item grid, placed late deliberately, closing
          the remaining objection after the manifest and stack have already been seen */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">The distance, addressed directly</h2>
        <p className="text-white/60 mb-12 max-w-[720px]">You&apos;re considering commissioning custom software from a team in Ahmedabad. Here&apos;s how each of the usual concerns is actually handled.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OFFSHORE_ITEMS.map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="w-9 h-9 rounded-lg bg-[#7C3AED]/15 flex items-center justify-center mb-4">
                <item.icon className="w-4.5 h-4.5 text-[#C4B5FD]" />
              </span>
              <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Which page do you actually need — the hub's structural purpose, every sibling now
          live so every card links out rather than rendering as disabled plain text */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">You may want a more specific page</h2>
        <p className="text-white/60 mb-10 max-w-[720px]">This page is the engineering. If you already know what the application is for, one of these will answer faster.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {ROUTING.map((item) => (
            <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7C3AED]/40 hover:bg-white/[0.07] transition-all">
              <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mb-3">
                <item.icon className="w-4.5 h-4.5 text-white" />
              </span>
              <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-white/60 max-w-[720px] mb-4">
          <span className="font-bold text-white">Honest answer:</span> plenty of &quot;we need a web app&quot; enquiries are an automation and a dashboard standing next to each other. That&apos;s a smaller, faster, lower-risk project, and we&apos;d rather say so on the first call than build you an application you didn&apos;t need.
        </p>
        <p className="text-white/60 max-w-[720px]">
          And if what you&apos;re actually building is sold to many customers on subscription rather than used inside your own organisation, that&apos;s{" "}
          <Link href="/services/saas-platforms" className="font-bold text-[#C4B5FD] hover:underline">SaaS platforms</Link>, a different set of engineering concerns, multi-tenancy and billing chief among them.
        </p>
      </section>

      {/* Engagement models — three-column commercial treatment, honest non-numeric pricing */}
      <section className="max-w-6xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">How engagements are structured</h2>
        <p className="text-white/60 mb-12 max-w-[720px]">Fixed price, quoted in writing before we start. No hourly billing, no staff augmentation, no surprise change orders.</p>

        <div className="grid md:grid-cols-3 gap-5">
          {ENGAGEMENT_MODELS.map((m, idx) => (
            <div key={m.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 0 ? "bg-white text-[#0F172A] shadow-2xl md:-translate-y-3" : "bg-white/[0.04] border border-white/10")}>
              <h3 className={cn("font-bold text-lg mb-3", idx === 0 ? "text-slate-900" : "text-white")}>{m.label}</h3>
              <p className={cn("text-sm leading-relaxed mb-4", idx === 0 ? "text-slate-600" : "text-white/60")}>{m.includes}</p>
              <p className={cn("text-sm font-bold mb-5", idx === 0 ? "text-[#7C3AED]" : "text-[#C4B5FD]")}>{m.from}</p>
              <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 0 ? "border-slate-100 text-slate-500" : "border-white/10 text-white/40")}>Good for: {m.bestFor}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/50 text-sm max-w-[720px]">
          Every build includes monitoring for the first month. After that it&apos;s a monthly fee,{" "}
          <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">see what that covers</Link>, and you can stop any time, you keep everything in the handover manifest either way. If your own team takes over, we hand over properly rather than leaving them to reverse-engineer it.
        </p>
      </section>

      {/* Case studies — honestly framed. Both are integration and pipeline stories standing
          in for application engineering, said plainly rather than implied otherwise, the
          same disclaimer pattern used on the Business Intelligence page. No fabricated
          screenshot or invented application case study. */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-24 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">What we&apos;ve built</h2>
        <p className="text-white/60 mb-12 max-w-[720px]">These are integration and pipeline projects, the engineering underneath an application rather than an application interface itself. We&apos;d rather say that plainly than imply otherwise.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link
                href={cs.href}
                className="group flex flex-col h-full bg-white text-[#0F172A] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
              >
                <span className="text-5xl md:text-6xl font-extrabold text-[#7C3AED] tracking-tight mb-2">{cs.num}</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">{cs.metric}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cs.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{cs.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 font-bold text-[#7C3AED]">
                  Read the case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ — accordion, first item open */}
      <section className="max-w-3xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-white text-center">Common questions</h2>
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

      {/* Closing CTA — dark bordered accent panel, single primary button, no secondary link */}
      <section className="max-w-4xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="rounded-[2rem] sm:rounded-[3rem] border-2 border-[#7C3AED]/30 bg-white/[0.03] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-white">
            Tell us what you&apos;re trying to build.
          </h2>
          <p className="relative text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll tell you honestly whether it needs custom engineering, whether a smaller project would do, and give you a fixed price if building is genuinely the right answer.
          </p>
          <div className="relative flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
