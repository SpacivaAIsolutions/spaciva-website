"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users, Truck, Handshake, IdCard, Briefcase,
  Lock, KeyRound, RefreshCw, MousePointerClick, Bell, Paintbrush,
  Building2, ShoppingBag, Cloud, Database, ShieldCheck, Code2,
  LayoutDashboard, Workflow, Repeat, ClipboardList,
  type LucideIcon,
} from "lucide-react";

type PortalCapability = {
  title: string;
  desc: string;
  link?: { href: string; label: string };
  linkPrefix?: string;
  linkSuffix?: string;
};

type PortalTab = {
  label: string;
  icon: LucideIcon;
  bestFor: string;
  note?: boolean;
  items: PortalCapability[];
};
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const RAIL = [
  { id: "what-we-build", label: "What we build" },
  { id: "before-after", label: "Before & after" },
  { id: "what-it-takes", label: "What it takes" },
  { id: "how-it-works", label: "How it works" },
  { id: "systems", label: "Systems" },
  { id: "questions", label: "Questions" },
];

const LEDGER = [
  { asked: "“What's the status of our project?”", instead: "Their dashboard" },
  { asked: "“Can you resend last month's invoice?”", instead: "Their billing page" },
  { asked: "“Which version of the file is current?”", instead: "Their documents page" },
  { asked: "“Has our order shipped?”", instead: "Their order page" },
  { asked: "“Can you add my colleague to updates?”", instead: "Their team settings" },
  { asked: "“When's our next renewal?”", instead: "Their account page" },
  { asked: "“Did you get the form we sent?”", instead: "Their submissions page" },
  { asked: "“Can we get a copy of the report?”", instead: "Their downloads page" },
];

const TABS: PortalTab[] = [
  {
    label: "Client portals",
    icon: Users,
    bestFor: "agencies, professional-services firms, and anyone whose account managers have become a helpdesk by accident.",
    items: [
      { title: "Status and progress", desc: "Where each project, order, or case stands, updated from your CRM or project tool automatically rather than by someone remembering to post an update." },
      { title: "Documents and deliverables", desc: "Versioned, current, with a clear “this is the latest” rather than an email thread with four attachments." },
      { title: "Invoices and payments", desc: "Issue history, what's outstanding, and the ability to pay, pulled from your accounting system.", link: { href: "/services/document-invoice-processing", label: "document and invoice processing" }, linkPrefix: "Pairs with ", linkSuffix: " on the intake side." },
      { title: "Requests and approvals", desc: "A structured way to ask for something or sign off on it, with a history both sides can see." },
    ],
  },
  {
    label: "Vendor & supplier portals",
    icon: Truck,
    bestFor: "any business where accounts payable is fielding calls about when invoices will be paid.",
    items: [
      { title: "Purchase orders and acknowledgement", desc: "Vendors see what's been ordered and confirm it in the portal instead of by email." },
      { title: "Invoice submission", desc: "Submitted against a PO and validated at the point of upload, so mismatches surface immediately rather than at month-end." },
      { title: "Payment status", desc: "The single most common vendor phone call, answered by a page. This one frequently justifies the build on its own." },
      { title: "Onboarding and compliance documents", desc: "Insurance certificates, tax forms, and certifications collected, tracked, and chased automatically before they expire." },
    ],
  },
  {
    label: "Partner & franchise portals",
    icon: Handshake,
    bestFor: "channel businesses, franchises, and distributor networks running on email and shared drives.",
    items: [
      { title: "Deal registration and pipeline", desc: "Partners register opportunities and see status, without a spreadsheet emailed back and forth." },
      { title: "Marketing assets and brand controls", desc: "Current approved materials, sometimes customisable within limits you set, so nobody is using last year's logo." },
      { title: "Performance and commission visibility", desc: "Partners see their own numbers, which removes both the monthly report and the argument about it." },
      { title: "Training and certification tracking", desc: "Who's completed what, and what's expiring." },
    ],
  },
  {
    label: "Member portals",
    icon: IdCard,
    bestFor: "associations, trade bodies, professional institutes, and membership organisations.",
    items: [
      { title: "Membership status and renewals", desc: "Current standing, renewal dates, and self-serve payment." },
      { title: "Resources and member-only content", desc: "Gated properly by membership tier." },
      { title: "Events and registration", desc: "Booking, attendance history, and materials." },
      { title: "Directory and profiles", desc: "Where members maintain their own details instead of emailing changes to an administrator." },
    ],
  },
  {
    label: "Employee self-service",
    icon: Briefcase,
    bestFor: "growing teams where HR and ops have become an inbox.",
    note: true,
    items: [
      { title: "Documents and requests", desc: "Payslips, policies, leave, expenses, and equipment requests routed properly rather than through a manager's inbox." },
      { title: "Onboarding", desc: "A tracked pipeline for new starters showing what's collected and what's outstanding." },
      { title: "Directory and org information", desc: "Who's who, who owns what, and how to reach them." },
    ],
  },
];

const WEEK_NOW = [
  { day: "Monday", desc: "Four status emails before 10am. Someone opens the project tool and retypes what's in it." },
  { day: "Tuesday", desc: "A client asks for an invoice copy. Someone finds it in the accounting system and forwards it." },
  { day: "Wednesday", desc: "A vendor calls about payment timing. Accounts payable checks and calls back." },
  { day: "Thursday", desc: "A document goes out. It's the wrong version. Nobody realises for a week." },
  { day: "Friday", desc: "Someone builds the monthly client report by hand from three systems." },
  { day: "Renewal", desc: "A client says they didn't feel looked after. Nobody can point to what was delivered." },
];

const WEEK_AFTER = [
  { day: "Monday", desc: "Those four clients checked their own dashboards over the weekend." },
  { day: "Tuesday", desc: "The invoice was already on their billing page, with the payment link." },
  { day: "Wednesday", desc: "The vendor checked payment status themselves at 6am their time." },
  { day: "Thursday", desc: "There's one current version and it's the one on the page." },
  { day: "Friday", desc: "The report is live and always has been. The call is about the commentary." },
  { day: "Renewal", desc: "Every deliverable, date, and approval is visible with a timestamp." },
];

const SIX_THINGS = [
  { title: "Access modelled to reality", icon: Lock, desc: "Not one login per company. Real organisations, real teams, real roles, a client's finance person sees invoices, their project lead sees deliverables, and neither sees another client's anything. Row-level isolation enforced at the data layer, not by remembering to filter a query." },
  { title: "Login that isn't a barrier", icon: KeyRound, desc: "SSO where your users have it, magic links where they don't, and SAML for the ones whose IT department requires it. Every password reset is a person who nearly emailed you instead." },
  { title: "Populated automatically", icon: RefreshCw, desc: "A portal that needs your team to post updates has moved the work rather than removed it. Status, documents, and invoices flow in from your CRM, project tool, and accounting system on their own." },
  { title: "Obvious without training", icon: MousePointerClick, desc: "Your users didn't ask for this and won't attend a session about it. If the first screen doesn't make the next action obvious, they'll email, and after two of those, they won't come back." },
  { title: "Notifications that pull people in", icon: Bell, desc: "Nobody remembers to check a portal. Something changed, here's a link, one click to the exact page. The notification is as much the product as the portal is." },
  { title: "Branded as yours", icon: Paintbrush, desc: "It sits in front of your clients, so it should look like you, your domain, your identity, your language. A portal that looks like generic vendor software undercuts the impression it was bought to improve." },
];

const PROCESS = [
  { step: "01", title: "Audience and access mapping", duration: "3–5 days", desc: "Who logs in, what each role sees, and, the part that matters most, what they must never see. We map organisations, teams, and roles, and we baseline the inbound requests your team currently fields so the outcome is measurable. You get the access model in writing whether or not you hire us." },
  { step: "02", title: "Fixed scope and quote", duration: "2–3 days", desc: "Written scope, fixed price, and a delivery date before any code is written, phased so you can see what launches first. If scope moves, we re-quote in writing first." },
  { step: "03", title: "Build and pilot with real users", duration: "scoped per project", desc: "Built against your real data, then piloted with a handful of actual clients or vendors, not internal staff pretending. Written update every Friday plus a short Loom walkthrough. Pilot feedback is where portals are saved, because the confusions that kill adoption are never the ones your own team predicts." },
  { step: "04", title: "Roll out by group, then monitor", duration: "ongoing", desc: "Launched to one group at a time with the old channel still open, so nobody is stranded. Then: monitoring, tracking which pages actually get used, and cutting the ones that don't. Portals accumulate unused screens faster than any other kind of software, and pruning is part of the monthly plan." },
];

const BUY_TABLE = [
  { label: "Time to live", tool: "Weeks", custom: "Longer, scoped after the access-mapping phase" },
  { label: "Upfront cost", tool: "Low", custom: "Higher, fixed and quoted in writing" },
  { label: "Ongoing cost", tool: "Per-seat or per-client, grows with you", custom: "Hosting plus a monthly plan" },
  { label: "Standard documents and messaging", tool: "Excellent", custom: "Overkill" },
  { label: "Complex or nested access models", tool: "Product's model", custom: "Modelled to reality" },
  { label: "Live data from your own systems", tool: "What the product connects to", custom: "Anything with an API" },
  { label: "Branding", tool: "Vendor's, with your logo", custom: "Entirely yours" },
  { label: "Custom workflows", tool: "Limited", custom: "Whatever your process is" },
  { label: "Audit trail and data residency", tool: "Vendor-dependent", custom: "Yours to control" },
  { label: "Ownership", tool: "You rent it", custom: "Code and data are yours" },
];

const SYSTEM_GROUPS = [
  { category: "CRM and project", icon: Building2, items: ["HubSpot", "Salesforce", "Pipedrive", "Zoho", "Asana", "ClickUp", "Jira", "Monday", "Notion"] },
  { category: "Finance and billing", icon: ShoppingBag, items: ["QuickBooks", "Xero", "NetSuite", "Sage", "Business Central", "Odoo", "Stripe", "GoCardless"] },
  { category: "Documents and storage", icon: Cloud, items: ["Google Drive", "SharePoint", "Dropbox", "Box", "S3 and object storage"] },
  { category: "Identity", icon: ShieldCheck, items: ["Google Workspace", "Microsoft Entra ID", "Okta", "SAML and OIDC", "Magic links", "Auth.js and Clerk"] },
  { category: "Application layer", icon: Database, items: ["Next.js", "React", "TypeScript", "Node", "Postgres", "Row-level security", "Audit logging", "AWS, GCP, Azure, or Vercel", "Regional hosting (EU/UK)"] },
];

const ROUTING = [
  { title: "Client portals", desc: "People outside your organisation self-serve, clients, vendors, partners, or members.", icon: Repeat, current: true },
  { title: "Internal business tools", desc: "Your own team does the work. If everyone logging in is on your payroll, start there.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "SaaS platforms", desc: "Customers pay subscriptions and the software is your product, not a service wrapper around it.", icon: Repeat, href: "/services/saas-platforms" },
  { title: "Custom dashboards", desc: "Read-only visibility. If nobody needs to do anything, a dashboard is smaller and faster.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "Workflow automation", desc: "Something happens without anyone opening anything. If the goal is a status email that sends itself, you may not need a portal at all.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Web applications", desc: "The engineering underneath all of these.", icon: Code2, href: "/services/web-applications" },
];

const PRICING_TIERS = [
  { label: "Single-audience portal", desc: "One audience, clients, vendors, or partners, with access modelling, the core screens, identity, notifications, and integration to your primary system. Includes the first month of monitoring.", bestFor: "the audience generating the most inbound requests. This is most enquiries.", from: "Scoped and quoted after access mapping" },
  { label: "Multi-audience portal", desc: "Several audiences sharing one identity and permission model, so the second and third cost a fraction of the first.", bestFor: "businesses fielding requests from clients and vendors both.", from: "Priced once we know how many audiences" },
  { label: "Ongoing portal partner", desc: "Monitoring, usage review and screen pruning, new sections as needs change, and a set amount of feature work each month.", bestFor: "portals that have become the main client channel, most clients end up here.", from: "A monthly plan sized to your portal" },
];

const FAQS = [
  { q: "How is a portal different from just giving clients a login to our system?", a: "Access modelling, mostly. Your internal systems assume everyone using them works for you. A portal assumes the opposite, that a user should see exactly their own data and nothing else, enforced at the data layer rather than by a setting someone might get wrong. That difference is the whole project, and it's why “just give them a login” tends to end badly." },
  { q: "Will our clients actually use it?", a: "Only if it's populated automatically, obvious without training, and paired with notifications that link straight to the relevant page. Portals that require your team to post updates fail, because the work moved rather than disappeared. We pilot with real users before rollout, the confusions that kill adoption are never the ones your own team predicts." },
  { q: "Can different people at the same client see different things?", a: "Yes, and it's usually a requirement. Real organisations, teams, and roles, their finance contact sees invoices, their project lead sees deliverables, and access is enforced at the data layer rather than by hiding buttons." },
  { q: "Can we use SSO?", a: "Yes, Google Workspace, Microsoft Entra ID, Okta, SAML and OIDC for enterprise users, and magic links for people whose organisations don't have SSO. Every password reset is someone who nearly emailed your team instead, so login friction gets more attention here than it usually gets." },
  { q: "Does it pull live data from our CRM and accounting system?", a: "That's the point. Status from your CRM or project tool, invoices from your accounting system, documents from wherever they live. Where a system can't be reached live we'll say so upfront and propose a scheduled sync rather than promising real-time data that isn't available." },
  { q: "Can clients upload files and submit requests?", a: "Yes, uploads, structured forms, approvals, and requests, with a history both sides can see. That two-way history is often what actually reduces email, more than the read-only screens do." },
  { q: "Will it look like our brand?", a: "Entirely. Your domain, your identity, your language. A portal sitting in front of your clients that looks like generic vendor software undercuts the impression it was bought to create." },
  { q: "How long does it take?", a: "You'll have a working pilot with real users well before full rollout, and a single-audience portal is quoted in writing once we've mapped the access model. Multi-audience builds run longer and go live one group at a time. The main variable is how many systems it reads from, not how many screens it has." },
  { q: "What about security?", a: "Row-level isolation enforced at the data layer, audit logging on access and changes, SSO and SAML, encryption in transit and at rest, and regional hosting where EU or UK data residency is required. For a portal specifically, the isolation model is the thing to get right, a leak here is a client incident, not an internal inconvenience." },
  { q: "Why not use SharePoint, SuiteDash, or Copilot?", a: "Often you should, and we'll say so. They're good products and much cheaper for standard document-and-message portals. Build custom when your access model doesn't fit theirs, when you need live data from systems they don't connect to, when per-client pricing stops making sense, or when vendor branding in front of your clients is a problem." },
  { q: "Who owns the code and the data?", a: "You do. Source code, database, integration configuration, and documentation transfer to you on final payment, whether or not you keep us on a monthly plan. It runs in your accounts." },
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, with 2–3 hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment on anything urgent. A written update every Friday plus a short Loom walkthrough." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Client Portal Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom portals for clients, vendors, and partners, so they self-serve instead of emailing your team. SSO, granular access, your branding. Fixed price, you own it.",
};

const AUDIENCE_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: TABS.map((tab, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: tab.label,
    description: tab.items.map((i) => i.title).join(", "),
  })),
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
    { "@type": "ListItem", position: 3, name: "Client Portals", item: "https://spaciva.tech/services/client-portals" },
  ],
};

function AudienceExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (active + 1) % TABS.length : (active - 1 + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Portal types by audience" className="flex flex-wrap gap-2 mb-8" onKeyDown={onKeyDown}>
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = el; }}
            role="tab"
            id={`portal-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`portal-tabpanel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all border",
              active === i
                ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"
                : "bg-white text-slate-600 border-[#E2E8F0] hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {TABS.map((tab, i) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`portal-tabpanel-${i}`}
            aria-labelledby={`portal-tab-${i}`}
            aria-hidden={active !== i}
            className={cn(
              "[grid-area:1/1] transition-all duration-300 ease-out",
              active === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {tab.items.map((item) => (
                <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#C4B5FD] hover:bg-white hover:shadow-md transition-all">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.link ? (
                      <>
                        {item.desc} {item.linkPrefix}
                        <Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label}</Link>
                        {item.linkSuffix}
                      </>
                    ) : item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed bg-white border border-dashed border-slate-200 rounded-xl px-4 py-3">
              <span className="font-semibold text-slate-600">Best for:</span> {tab.bestFor}
              {tab.note && (
                <>
                  {" "}This is the one audience that&apos;s internal, if the portal is entirely for your own staff,{" "}
                  <Link href="/services/internal-business-tools" className="font-bold text-[#7C3AED] hover:underline">internal business tools</Link>{" "}
                  may be the better-fitting page.
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientPortalsClient() {
  const [activeRail, setActiveRail] = useState(RAIL[0].id);

  useEffect(() => {
    const sections = RAIL.map((r) => document.getElementById(r.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveRail(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(AUDIENCE_LIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, centred (Template B's signature). Beneath the copy: the inbound
          request ledger, real table markup, deliberately mundane, not an infographic. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[900px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Client Portals
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Every question your clients email you is a page they could have opened
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-[720px] mx-auto">
              &quot;What&apos;s the status?&quot; &quot;Can you resend the invoice?&quot; &quot;Which version is current?&quot; Every one of those is a person who&apos;d rather have looked it up themselves, interrupting someone who&apos;d rather not have been interrupted. We build the portal that answers them, for your clients, your vendors, your partners, or your members.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-500 mb-12">
              SSO and granular access · Your branding, your cloud, your code
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] shadow-lg overflow-hidden text-left">
              <table className="w-full border-collapse">
                <caption className="sr-only">What arrived in your inbox last week, and where it would have gone instead</caption>
                <thead>
                  <tr className="border-b border-slate-200">
                    <th scope="col" className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 text-left w-1/2">What arrived in your inbox last week</th>
                    <th scope="col" className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#7C3AED] text-left w-1/2 border-l border-slate-100">Where it would have gone instead</th>
                  </tr>
                </thead>
                <tbody>
                  {LEDGER.map((row, idx) => (
                    <tr key={row.asked} className={idx > 0 ? "border-t border-slate-100" : ""}>
                      <td className="px-5 py-3 text-sm text-slate-500">{row.asked}</td>
                      <td className="px-5 py-3 text-sm font-semibold text-slate-800 border-l border-slate-100">{row.instead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <p className="mt-4 text-sm text-slate-500">None of these needed a person. All of them got one.</p>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* The problem — prose, centred, targets the symptom-phrased keyword cluster */}
      <section className="py-16 md:py-24">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">The interruptions aren&apos;t the cost. The interruptions are the symptom.</h2>
          <div className="text-slate-600 text-lg leading-relaxed text-left space-y-5 mb-10">
            <p>An account manager loses an hour a day to questions that have answers. Not hard questions, status, invoices, files, dates. Things that exist, written down, somewhere the person asking can&apos;t reach.</p>
            <p>The obvious cost is the hour. The real cost sits underneath it. Every answer is a small act of retrieval and retyping, and each one is a chance to send the wrong version, quote a stale date, or forward something that shouldn&apos;t have left the building. The client who asks twice a week gets good service. The one who doesn&apos;t ask assumes the worst and doesn&apos;t mention it until renewal.</p>
            <p>And it caps you. Twenty clients at two interruptions a week is manageable. Two hundred isn&apos;t, not without hiring proportionally, which is the definition of a business that can&apos;t scale. The email inbox is a support channel you never chose, with no queue, no history the client can see, and no way to tell whether the same question is being asked forty times.</p>
          </div>
          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug text-left">
            A portal isn&apos;t a nicer way to communicate. It&apos;s the difference between service that scales with headcount and service that doesn&apos;t.
          </blockquote>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sticky left rail */}
          <nav aria-label="Page sections" className="hidden lg:block">
            <div className="sticky top-32 py-16">
              <div className="relative flex flex-col gap-7">
                <span className="absolute left-[7px] top-[7px] bottom-[7px] w-px bg-slate-200" aria-hidden="true" />
                {RAIL.map((item) => {
                  const isActive = activeRail === item.id;
                  return (
                    <a key={item.id} href={`#${item.id}`} className="group relative flex items-center gap-3">
                      <span
                        className={cn(
                          "relative z-10 w-[15px] h-[15px] rounded-full border-2 shrink-0 transition-all duration-300",
                          isActive
                            ? "bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_0_4px_rgba(124,58,237,0.15)]"
                            : "bg-white border-slate-300 group-hover:border-[#C4B5FD]"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm font-semibold leading-snug transition-colors duration-300",
                          isActive ? "text-[#7C3AED]" : "text-slate-400 group-hover:text-slate-600"
                        )}
                      >
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="min-w-0">
            {/* What we build — tabbed by audience, the B-5 distinction and the SEO structure */}
            <section id="what-we-build" className="py-16 md:py-24 scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                  What We Build
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Five portals, five very different audiences</h2>
                <p className="text-lg text-slate-600">Same engineering. What changes completely is who&apos;s on the other side and what they&apos;re allowed to see.</p>
              </div>
              <AudienceExplorer />
              <p className="mt-10 text-slate-600 max-w-[680px]">
                Most portals need automation underneath, a status that updates itself, a document that files itself, a reminder that sends itself. That&apos;s{" "}
                <Link href="/services/workflow-automation" className="font-bold text-[#7C3AED] hover:underline">workflow automation</Link>, it&apos;s cheaper as its own scope, and we&apos;ll price it separately so you can see what you&apos;re paying for.
              </p>
            </section>

            {/* Before and after — light throughout, a week day by day */}
            <section id="before-after" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What changes in your week</h2>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div>
                  <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-4">A week now</h3>
                  <div className="flex flex-col gap-4">
                    {WEEK_NOW.map((row) => (
                      <div key={row.day} className="bg-slate-50 rounded-2xl p-5">
                        <span className="font-bold text-slate-900 text-sm block mb-1">{row.day}</span>
                        <p className="text-slate-500 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 md:mt-0">
                  <h3 className="font-bold text-[#7C3AED] text-xs uppercase tracking-widest mb-4">A week after</h3>
                  <div className="flex flex-col gap-4">
                    {WEEK_AFTER.map((row) => (
                      <div key={row.day} className="bg-[#F5F3FF] rounded-2xl p-5">
                        <span className="font-bold text-slate-900 text-sm block mb-1">{row.day}</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-10 text-slate-600 max-w-[680px]">
                <span className="font-bold text-slate-900">The measurable outcome isn&apos;t hours saved, it&apos;s inbound requests that never arrive.</span> We baseline that in week one, which is what makes the improvement provable rather than asserted.
              </p>
            </section>

            {/* What it has to get right — six-item technical credibility grid */}
            <section id="what-it-takes" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Six things that decide whether it gets used</h2>
                <p className="text-lg text-slate-600">A portal nobody logs into is worse than no portal, because now you have both the emails and the maintenance.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SIX_THINGS.map((item, idx) => (
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

              <p className="mt-10 text-slate-600 max-w-[680px]">
                If your users want to <em>ask questions</em> of what&apos;s in the portal rather than navigate to it, that&apos;s a{" "}
                <Link href="/services/rag-chatbot-development" className="font-bold text-[#7C3AED] hover:underline">RAG chatbot</Link>{" "}
                over the same data, and it&apos;s often a smaller build than the extra screens people request.
              </p>
            </section>

            {/* How it works — horizontal step rail, four phases, access mapping first */}
            <section id="how-it-works" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four phases</h2>
              </div>

              <div className="lg:flex lg:items-start lg:gap-4">
                {PROCESS.map((item, idx) => (
                  <div key={item.step} className="lg:flex-1 relative">
                    <div className="flex lg:flex-col gap-4 lg:gap-0 pb-10 lg:pb-0">
                      <div className="flex lg:flex-col items-center lg:items-start gap-2 shrink-0">
                        <div className="flex items-center w-full">
                          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md shadow-[#7C3AED]/25">
                            {item.step}
                          </span>
                          {idx < PROCESS.length - 1 && (
                            <span className="hidden lg:block flex-1 h-px bg-gradient-to-r from-[#C4B5FD] to-[#E2E8F0] ml-2" />
                          )}
                        </div>
                      </div>
                      <div className="lg:mt-4 lg:pr-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {idx < PROCESS.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-[#E2E8F0]" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Build or buy — two equal-weight cards + comparison table */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">You may not need us for this</h2>
                <p className="text-lg text-slate-600">Portal products are good and getting better. Buying beats building more often than an agency page will say.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-white">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Buy an off-the-shelf portal when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your needs are close to standard, documents, messages, invoices, basic status, and you&apos;re happy for it to look mostly like the vendor&apos;s product. Client counts are modest enough that per-seat or per-client pricing works. SuiteDash, Copilot, Zendesk, HubSpot&apos;s portal, or SharePoint will be live in weeks for a fraction of a custom build.{" "}
                    <span className="font-bold text-slate-900">We&apos;ll tell you this on the call and we won&apos;t quote you for something you don&apos;t need.</span>
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-3xl border border-[#E2E8F0] bg-white">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">Build custom when</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Your access model doesn&apos;t fit the product&apos;s, nested organisations, unusual roles, or data that must be isolated in ways the tool can&apos;t express. Or the portal needs to pull live from systems no product connects to. Or per-client pricing has stopped making sense at your volume. Or it&apos;s client-facing enough that vendor branding is a problem. Or you need a workflow, approvals, submissions, registrations, the product can&apos;t run. Or you&apos;re in a regulated space and need audit trails and data residency you control.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] mb-8">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-100 border-b border-[#E2E8F0]">
                      <th scope="col" className="sticky left-0 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap"></th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Off-the-shelf portal</th>
                      <th scope="col" className="px-5 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">Custom build</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BUY_TABLE.map((row) => (
                      <tr key={row.label} className="border-b border-[#E2E8F0] last:border-0">
                        <th scope="row" className="sticky left-0 bg-white px-5 py-4 text-sm font-bold text-slate-900 align-top whitespace-nowrap">{row.label}</th>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.tool}</td>
                        <td className="px-5 py-4 text-sm text-slate-600 align-top">{row.custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-[720px]">
                <span className="font-bold text-slate-900">Honest answer:</span> the clearest signal to build is not dissatisfaction with a product&apos;s features. It&apos;s when the access model doesn&apos;t fit, when you find yourself creating duplicate accounts, or manually restricting things the tool can&apos;t restrict. Features can be lived without. A wrong permission model is a client incident waiting to happen.
              </p>
            </section>

            {/* Systems we connect — grouped by category, real text names */}
            <section id="systems" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What the portal reads from</h2>
                <p className="text-lg text-slate-600">A portal is only as useful as what&apos;s behind it. It shouldn&apos;t need anyone to post updates into it.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SYSTEM_GROUPS.map((group, idx) => (
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
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((name) => (
                        <span key={name} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-600">{name}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-slate-600 max-w-[680px]">
                Not listed? If it has an API, we can almost certainly read from it. Where a system genuinely can&apos;t be reached live, we&apos;ll say so before you commit and propose a scheduled sync rather than promising real-time data that isn&apos;t available.
              </p>
            </section>

            {/* Portal, or something else — routing block */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 text-slate-900">Is a portal actually what you need?</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {ROUTING.map((item) => {
                  const inner = (
                    <>
                      <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-slate-50")}>
                        <item.icon className={cn("w-4.5 h-4.5", item.current ? "text-white" : "text-[#7C3AED]")} />
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}{item.current && <span className="text-slate-400 font-normal"> (this page)</span>}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </>
                  );
                  return item.href ? (
                    <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
                      {inner}
                    </Link>
                  ) : (
                    <div key={item.title} className="flex flex-col p-5 rounded-2xl bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30">
                      {inner}
                    </div>
                  );
                })}
              </div>

              <p className="text-slate-600 max-w-[720px]">
                <span className="font-bold text-slate-900">Honest answer:</span> a good share of portal enquiries are solved by automated status notifications and a shared folder. That&apos;s weeks, not months, and it&apos;s a real answer, a portal only earns its cost when people need to look things up on their own schedule, not when they need to be told things on yours.
              </p>
            </section>

            {/* Pricing — Template B's open price table */}
            <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What it costs</h2>
                <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. No hourly billing, no surprise change orders.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {PRICING_TIERS.map((tier, idx) => (
                  <div key={tier.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 1 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-slate-50 border border-slate-100")}>
                    <h3 className={cn("font-bold text-lg mb-3", idx === 1 ? "text-white" : "text-slate-900")}>{tier.label}</h3>
                    <p className={cn("text-sm leading-relaxed mb-4", idx === 1 ? "text-white/70" : "text-slate-600")}>{tier.desc}</p>
                    <p className={cn("text-sm font-bold mb-5", idx === 1 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{tier.from}</p>
                    <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 1 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Good for: {tier.bestFor}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-slate-600 max-w-[680px]">
                Every build includes monitoring for the first month. After that it&apos;s a monthly fee,{" "}
                <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">see what that covers</Link>, and you can stop any time, you keep the source code, the data, and the documentation either way.
              </p>
            </section>

            {/* FAQ — two-column plain list, no accordion, Template B's signature */}
            <section id="questions" className="py-16 md:py-24 border-t border-[#E2E8F0] scroll-mt-28">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {FAQS.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Closing CTA — light bordered panel, Template B's signature, not a dark band */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <KeyRound className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Tell us the question your clients ask most.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a 30-minute call. We&apos;ll work out how many of your inbound requests a portal would actually absorb, tell you honestly whether an off-the-shelf product would do it, and give you a fixed price if building is the right answer.
          </p>
          <div className="flex justify-center">
            <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
