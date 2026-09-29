"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ChevronDown, AlertTriangle,
  Repeat, Rocket, LifeBuoy, Gauge,
  Lock, CreditCard, UserCheck, History, Key, Activity,
  Code2, Database, ShieldCheck, Cloud,
  ClipboardList, LayoutDashboard, Workflow, Users,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const PLANNED_V1 = [
  "Signup", "SSO", "Team invites", "Roles", "Billing", "Admin panel",
  "Analytics dashboard", "Notifications", "API", "Integrations", "Mobile app", "White labelling",
];

const ACTUAL_V1 = [
  "The one thing customers pay for",
  "Multi-tenancy done right",
  "Billing that works",
  "Onboarding they complete alone",
];

const WHO_FOR = [
  { n: "01", title: "Services businesses turning a process into software", forThis: true, desc: "You already run the process for clients. You know the domain better than any founder building it from the outside, you have customers who'd pay for a self-serve version, and you have revenue funding the build. This is the best-fit engagement on this page, the risk that usually kills SaaS, not knowing whether anyone wants it, is largely already answered in your case." },
  { n: "02", title: "Funded or revenue-backed early-stage teams", forThis: true, desc: "You have money allocated, a clear idea of the first customer, and you need engineering rather than a co-founder. We'll push you toward a smaller version one than you're planning, and that's the value, not an inconvenience." },
  { n: "03", title: "Existing SaaS companies needing a rebuild, rescue, or scale", forThis: true, desc: "You have customers and a platform that's become the constraint, unmaintainable, slow at your current volume, or abandoned by a previous team. We audit honestly and give you a fixed price for either fixing or rebuilding." },
  { n: "04", title: "If you're pre-revenue, unfunded, and looking for a technical partner", forThis: false, desc: "We're the wrong firm, and we'd rather say so now than after three calls. We don't take equity, we don't defer payment against future funding, and we don't act as a technical co-founder. Those arrangements need someone whose incentives are tied to the outcome for years, that's a CTO or a technical co-founder, not an agency. If you're at that stage, the honest advice is usually: get to a paying customer with no-code first. Bubble, Softr, Airtable, and a Stripe payment link have carried more early SaaS products to first revenue than any custom build. Come back when you have customers and something to protect, we'll still be here and the project will be better." },
];

const WHAT_WE_BUILD = [
  { title: "Productisation builds", icon: Repeat, desc: "Turning a service you already deliver into software your clients use themselves. The domain logic already exists in how your team works, the job is encoding it, wrapping it in multi-tenancy and billing, and making it usable without you in the room.", bestFor: "agencies, consultancies, and professional-services firms with a repeatable process and clients who'd pay for self-serve." },
  { title: "MVP builds", icon: Rocket, desc: "The smallest version a real customer will pay for. Multi-tenancy, billing, and onboarding built properly from day one because retrofitting them is expensive; everything else deferred until customers tell you which parts matter.", bestFor: "funded teams with a clear first customer and the discipline to ship small." },
  { title: "Rebuilds and rescues", icon: LifeBuoy, desc: "An existing platform that's become the constraint, or one a previous team abandoned. We audit the codebase, architecture, security, and tenancy model, then give you a written assessment and a fixed price for salvaging or rebuilding, and you can take that assessment elsewhere.", bestFor: "you have paying customers and a codebase you're afraid of." },
  { title: "Scale and platform work", icon: Gauge, desc: "A working platform straining at current volume: slow queries, ballooning infrastructure bills, noisy-neighbour problems between tenants, or an architecture that assumed ten customers and now has four hundred.", bestFor: "growth has outpaced the original architecture." },
];

const SIX_THINGS = [
  { title: "Tenancy isolation, decided once", icon: Lock, desc: "How customer data is separated, row-level, schema-level, or database-level, is an architectural decision, not a setting. Changing it later means migrating every customer's data while they're using the system. We make this decision explicitly with you, in writing, before anything is built." },
  { title: "Billing that reflects your actual plans", icon: CreditCard, desc: "Subscriptions, tiers, seats, usage metering, trials, proration, upgrades, downgrades, failed payments, and dunning. Most billing pain comes from a model that assumed one flat plan. Build the shape of your pricing now, even if you launch with one tier." },
  { title: "Onboarding a customer completes alone", icon: UserCheck, desc: "If a human has to set up each account, you don't have SaaS, you have a service with a login. Self-serve signup, sensible defaults, and a first-run experience that reaches value without a call. This is the single most common gap in an otherwise finished platform." },
  { title: "An audit trail from the first commit", icon: History, desc: "Who did what, when, in which tenant. Your customers' security reviews will ask, enterprise deals will require it, and reconstructing history retroactively is impossible, the data was never captured." },
  { title: "Roles and permissions modelled properly", icon: Key, desc: "Owner, admin, member, read-only, and whatever your domain needs. Bolting a permission model onto an application that assumed everyone can do everything is one of the most expensive retrofits there is." },
  { title: "Observability before you need it", icon: Activity, desc: "Error tracking, performance monitoring, and per-tenant logging from day one. When a customer reports something broken, the difference between a fix in an hour and a fix in a week is entirely whether you can see what happened." },
];

const WHY_FAIL = [
  { title: "Too much was built before anyone paid", desc: "Eighteen months of development, a feature list built from assumptions, and a launch to an audience that turns out to want something adjacent. The money is gone and the learning hasn't started.", prevents: "a version one scoped to the single thing a named first customer will pay for, shipped in weeks, with everything else on a roadmap built against real usage. We will argue with you about scope, and that argument is most of the value." },
  { title: "Multi-tenancy was an afterthought", desc: "Built as a single-customer application, then adapted when the second customer arrived. Now tenant data separation depends on every query being written correctly, and one missed filter is a breach that ends the company.", prevents: "the isolation model is decided and documented before the first line of application code, and enforced at the data layer rather than by developer discipline." },
  { title: "Billing didn't match the business", desc: "A flat subscription hard-coded, then the pricing changes, as it always does, and every plan change, upgrade, proration, and failed payment becomes manual work. Revenue leaks quietly and nobody notices for two quarters.", prevents: "billing built around the shape of your pricing rather than today's single tier, with plan changes, metering, and dunning handled by the system from the start." },
  { title: "Onboarding needed a human", desc: "Signup works, and then a founder personally configures every new account. It feels fine at ten customers, it caps growth at fifty, and it makes the unit economics look nothing like SaaS.", prevents: "treating first-run as a feature with the same weight as anything else, and testing it with someone who has never seen the product and gets no help." },
  { title: "The team that built it left", desc: "The agency finished and moved on, or the contractor stopped replying. No documentation, no handover, undocumented infrastructure, and a codebase nobody can safely change while paying customers depend on it.", prevents: "repository access from day one rather than on handover, documentation and runbooks as deliverables rather than promises, everything running in your own cloud accounts, and a monthly plan you can end at any time while keeping all of it. The point isn't that we'll never leave, it's that our leaving shouldn't be an event." },
];

const STACK_GROUPS = [
  { category: "Application", icon: Code2, items: ["Next.js", "React", "TypeScript", "Node", "Python", "Tailwind", "REST APIs", "GraphQL APIs"] },
  { category: "Data and multi-tenancy", icon: Database, items: ["Postgres with row-level security", "Schema-per-tenant", "Database-per-tenant", "Redis", "Background job queues", "Per-tenant backup and restore"] },
  { category: "Auth and access", icon: ShieldCheck, items: ["Auth.js", "Clerk", "Auth0", "SSO and SAML", "Team and organisation models", "Role-based permissions", "Audit logging"] },
  { category: "Billing and subscriptions", icon: CreditCard, items: ["Stripe Billing", "Paddle", "Plans and seats", "Usage metering", "Trials", "Proration", "Dunning", "Webhook-driven state"] },
  { category: "Infrastructure and observability", icon: Cloud, items: ["AWS", "GCP", "Azure", "Vercel", "Docker", "CI/CD", "Infrastructure as code", "Sentry", "Per-tenant logging", "Regional hosting (EU/UK)"] },
];

const ROUTING = [
  { title: "SaaS platforms", desc: "Software that is your business: many customers, subscriptions, self-serve.", icon: Repeat, current: true },
  { title: "Web applications", desc: "Software for your business, used by your own organisation. Same engineers, different concerns, usually a smaller project.", icon: Code2, href: "/services/web-applications" },
  { title: "Internal business tools", desc: "One team, one job, one screen.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Custom dashboards", desc: "Read-only visibility, including embedded customer-facing analytics inside a platform you already have.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "Workflow automation", desc: "Something happens without anyone opening anything.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Client portals", desc: "People outside your organisation, clients, vendors, partners, self-serve. Different from SaaS: it's a service wrapper, not the product itself.", icon: Users, href: "/services/client-portals" },
];

const ENGAGEMENT_MODELS = [
  { label: "MVP or productisation build", bestFor: "the two best-fit buyers described above.", includes: "Version one scoped, built, and launched: multi-tenancy, billing, onboarding, and the core feature set. Includes the first month of monitoring.", from: "Fixed price, quoted after the scoping call" },
  { label: "Audit or rescue", bestFor: "you have customers and a platform you don't trust.", includes: "We assess an existing platform, codebase, architecture, tenancy model, security, infrastructure, and give you a written report plus a fixed price for fixing or rebuilding. The report stands alone and you're welcome to take it elsewhere.", from: "Fixed price after a short audit" },
  { label: "Ongoing product partner", bestFor: "post-launch, before your first engineering hire.", includes: "Monitoring, security and dependency updates, and a set amount of feature work each month against a roadmap you set. Ends whenever you like, and you keep everything.", from: "A monthly plan sized to your platform" },
];

const FAQS = [
  { q: "Do you take equity or work for a share of revenue?", a: "No. We build software for a fixed fee. Equity arrangements need someone whose incentives are tied to the outcome for years, and that's a technical co-founder, not an agency, any agency offering it is describing something they won't actually deliver. If you can't fund a build yet, get to a paying customer with no-code first. That's genuinely better advice than anything we'd sell you." },
  { q: "How long does an MVP take?", a: "You'll have something clickable at the end of week one, and version one is scoped to what a first customer will actually pay for and quoted in writing once we've agreed the scope. The main variable is scope discipline, not technical complexity, the most common cause of overruns is that everything gets classified as v1." },
  { q: "What should be in version one?", a: "Less than you're planning. The single thing customers pay for, plus multi-tenancy, billing, and onboarding, those three because they're expensive to retrofit and almost nothing else is. We'll go through your list on the first call and tell you what we'd cut." },
  { q: "How do you handle multi-tenancy?", a: "The isolation model, row-level, schema-per-tenant, or database-per-tenant, is decided with you explicitly and documented before any application code is written, then enforced at the data layer rather than by remembering to filter every query. It's the one architectural decision that's nearly impossible to change once you have customers." },
  { q: "Can you integrate Stripe billing?", a: "Yes, including plans, seats, usage metering, trials, proration, upgrades and downgrades, failed payments, and dunning. We'd encourage building the shape of your intended pricing even if you launch on one tier, most billing pain comes from a model that assumed a single flat plan." },
  { q: "We already have a platform and the developer disappeared. Can you take it over?", a: "Yes, and it's a common engagement. We audit the codebase, architecture, tenancy model, security, and infrastructure, then give you a written report and a fixed price for fixing or rebuilding. The report stands alone and you're welcome to take it elsewhere." },
  { q: "Will our platform be secure enough for enterprise customers?", a: "We build to the things enterprise security reviews actually ask about: tenant isolation enforced at the data layer, audit logging, role-based access, SSO and SAML, encryption in transit and at rest, and documented infrastructure. We're not a compliance consultancy, if you need SOC 2 or ISO 27001 certification, that's an auditor and a separate programme, and we'll build so it's achievable rather than claiming to deliver it." },
  { q: "Who owns the code and the infrastructure?", a: "You do, and you have the repository from day one rather than on handover. Full IP transfer on final payment, and everything runs in your own cloud accounts billed to you. If our relationship ends, nothing switches off." },
  { q: "What happens when we hire our own engineers?", a: "That's the intended outcome and we build for it. Conventional technology people can be recruited for, documentation written for someone who wasn't there, and architecture decisions recorded with the reasoning. We hand over properly and answer questions afterwards whether or not you're still on a plan." },
  { q: "Can you be our technical co-founder or CTO?", a: "No. We make technical decisions well within a defined scope. We can't hold years of product context, sit in your strategy conversations, or own hiring, and an agency claiming otherwise is offering you a dependency. We build so that hire is easy when you're ready." },
  { q: "What does it cost?", a: "MVP and productisation builds, audits, and ongoing plans are all fixed price, quoted in writing before any work starts, and scaled to what your platform actually needs, we won't quote a figure before we've seen the scope. We carry the risk of our own estimates rather than passing it to you as change orders." },
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, with 2–3 hours of daily overlap with US Eastern and UK working hours and a same-business-day response commitment on anything urgent. A written update every Friday plus a short Loom walkthrough. NDA before discovery if you'd like one." },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS Platform Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "We build B2B SaaS platforms, multi-tenancy, billing, onboarding, for funded teams and services businesses productising. Fixed price. We don't take equity.",
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
    { "@type": "ListItem", position: 3, name: "SaaS Platforms", item: "https://spaciva.tech/services/saas-platforms" },
  ],
};

function FAQItem({ faq, index, isOpen, onClick }: { faq: typeof FAQS[0]; index: number; isOpen: boolean; onClick: () => void }) {
  const panelId = `saas-faq-panel-${index}`;
  const buttonId = `saas-faq-button-${index}`;

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

export default function SaasPlatformsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — light, two column. Right side is a reduction device: a long muted list of
          what founders plan against a short accent list of what v1 actually needs. Semantic
          <ul> lists per the accessibility note, not SVG, for crawlability. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/8 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
                SaaS Platforms
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
                The version of your product that should actually ship first
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Most SaaS builds fail by being too big before anyone has paid for them. We build the smallest version that a real customer will pay for, multi-tenancy, billing, and onboarding done properly from day one, because those three are expensive to retrofit, and then we build the rest against what you learn.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
                <a href="#who-for" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                  See who this is for
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                Fixed scope, fixed price · We don&apos;t take equity · Your repo and your cloud, from day one
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 sm:p-8">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">What founders plan for v1</p>
                  <div className="relative max-h-[130px] overflow-hidden">
                    <ul className="flex flex-wrap gap-1.5">
                      {PLANNED_V1.map((item) => (
                        <li key={item} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-400 text-xs font-semibold">{item}</li>
                      ))}
                    </ul>
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-4">What v1 actually needs</p>
                  <ul className="flex flex-col gap-3">
                    {ACTUAL_V1.map((item) => (
                      <li key={item} className="flex items-center gap-3 bg-[#F5F3FF] rounded-xl px-4 py-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                        <span className="font-bold text-sm text-slate-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3 text-center">The right-hand list ships. The left-hand list is a roadmap, built against paying customers rather than assumptions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* Who this is for — the qualifier block, the commercially most important section on
          the page. Four bands, identical visual weight, the fourth is not styled as a
          disclaimer. Same pattern and same warning as the BI page's maturity gate. */}
      <section id="who-for" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Let&apos;s establish fit before either of us spends a call</h2>
            <p className="text-lg text-slate-600">SaaS attracts more mismatched enquiries than anything else we do. Here&apos;s who this page is written for.</p>
          </div>

          <div className="flex flex-col gap-6">
            {WHO_FOR.map((item) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#E2E8F0] bg-slate-50 p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="flex items-center gap-3 md:w-[320px] shrink-0">
                    <span className="text-2xl font-light text-[#7C3AED] tabular-nums">{item.n}</span>
                    <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="flex-1 min-w-0 text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl">
            We build software for a fixed fee. We&apos;re very good at that, and it isn&apos;t the same thing as being your technical co-founder.
          </blockquote>
        </div>
      </section>

      {/* What we build — four engagement shapes, two-up, matching the offer-card treatment
          used elsewhere on Template A. Sits after the qualifier deliberately. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
              What We Build
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four engagement shapes</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {WHAT_WE_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex flex-col bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 shrink-0">
                  <item.icon className="w-6 h-6 text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{item.desc}</p>
                <p className="mt-auto pt-5 border-t border-slate-200 text-xs font-semibold text-slate-500">Best for: {item.bestFor}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[720px]">
            If the software is for your own organisation rather than for sale to customers,{" "}
            <Link href="/services/web-applications" className="font-bold text-[#7C3AED] hover:underline">web applications</Link>{" "}
            is the better-fitting page, same engineers, same stack, different concerns and a different price.
          </p>
        </div>
      </section>

      {/* What v1 must get right — six-item technical credibility grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Six things that are cheap to build now and brutal to retrofit</h2>
            <p className="text-lg text-slate-600">Almost everything in a SaaS platform can be added later. These six can&apos;t, or can only be added at many times the cost.</p>
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

          <p className="mt-10 text-slate-600 max-w-[720px]">
            Where a feature genuinely needs judgement rather than rules, routing, classification, drafting, that&apos;s an{" "}
            <Link href="/services/ai-agent-development" className="font-bold text-[#7C3AED] hover:underline">AI agent</Link>{" "}
            inside one step. It&apos;s worth being sceptical of AI features in a v1: they&apos;re rarely the thing customers first pay for, and they&apos;re rarely the reason they leave.
          </p>
        </div>
      </section>

      {/* Mid-page CTA — dark, short, first of two dark bands */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-white">
            Not sure what belongs in version one?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            That&apos;s the most useful thing a first call can settle. Tell us what you&apos;re building and who the first customer is, and we&apos;ll tell you what we&apos;d cut, including if the honest answer is that you should validate with no-code before spending anything on engineering.
          </p>
          <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
        </div>
      </section>

      {/* Why SaaS builds fail — the centrepiece, five stacked blocks, bolded prevention lines */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Five ways SaaS builds fail, and what prevents each</h2>
            <p className="text-lg text-slate-600">These repeat with remarkable consistency, and only one of them is technical.</p>
          </div>

          <div className="flex flex-col">
            {WHY_FAIL.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={cn("py-9", idx > 0 && "border-t border-slate-100")}
              >
                <h3 className="flex items-start gap-3 text-xl md:text-2xl font-bold mb-4 text-amber-700">
                  <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 max-w-[760px]">{item.desc}</p>
                <p className="text-slate-800 leading-relaxed max-w-[760px]">
                  <strong className="text-slate-900">What prevents it: </strong>{item.prevents}
                </p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-4 border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug">
            Four of these five are decided before any code is written. The fifth is decided by what&apos;s in your repository, not by how the relationship ends.
          </blockquote>
        </div>
      </section>

      {/* The CTO gap — the section that makes A-5 distinct on the site. Prose, not cards,
          written to be read. Must survive review; it's the reason a serious buyer trusts
          the rest of the page. */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900 text-center">We&apos;re engineers, not your technical leadership</h2>
          <div className="text-slate-600 text-lg leading-relaxed space-y-5 mb-10">
            <p>Here&apos;s something most development agencies avoid saying to founders: <span className="font-bold text-slate-900">an agency cannot replace a CTO, and the gap between those two things is where a lot of SaaS money disappears.</span></p>
            <p>We can make technical decisions well. We&apos;ll choose the architecture, the tenancy model, the stack, and the trade-offs, and we&apos;ll explain each one in language you can act on. What we can&apos;t do is hold the accumulated context of your product across years, sit in your strategy conversations, own the hiring, or make the hundred small judgement calls a week that come from being inside the business.</p>
            <p>For a lot of engagements that gap doesn&apos;t matter. A productisation build for a services business with a clear process, or an MVP with a defined scope, works fine without technical leadership on your side, the scope is bounded and the decisions are ours to make within it.</p>
            <p>It starts to matter when the product becomes the business. At some point you need someone technical whose horizon is years rather than a scope, and whose incentives are yours. That&apos;s a hire, and it&apos;s a good sign when it happens.</p>
            <p><span className="font-bold text-slate-900">What we do about it:</span> we build so that hire is possible. Conventional technology anyone can be recruited for. Documentation written for someone who wasn&apos;t there. Infrastructure in your own accounts. Architecture decisions recorded with the reasoning, not just the outcome. When your first engineer or CTO arrives, they inherit something legible instead of something they&apos;ll want to rewrite, and if they do want to rewrite it, we&apos;d rather they told you honestly than that we&apos;d made it hard to leave.</p>
          </div>
          <blockquote className="border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug">
            Any agency positioning itself as your permanent technical leadership is describing a dependency, not a partnership. Build so you can hire.
          </blockquote>
        </div>
      </section>

      {/* Stack — grouped chip grid, real text names, matching the ERP page's treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What we build on</h2>
            <p className="text-lg text-slate-600">Conventional by design, so you can hire for it, and so a future CTO doesn&apos;t inherit something exotic.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STACK_GROUPS.map((group, idx) => (
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

          <p className="mt-10 text-slate-600 max-w-[720px]">
            Customer-facing analytics inside your product is its own piece of work, see{" "}
            <Link href="/services/custom-dashboards" className="font-bold text-[#7C3AED] hover:underline">custom dashboards</Link>{" "}
            for how embedded analytics with per-tenant isolation gets built.
          </p>
        </div>
      </section>

      {/* SaaS, or something else — routing block, five cards */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Is a SaaS platform actually what you&apos;re building?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {ROUTING.map((item) => {
              const inner = (
                <>
                  <span className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-3", item.current ? "bg-[#7C3AED]" : "bg-white shadow-sm")}>
                    <item.icon className={cn("w-4.5 h-4.5", item.current ? "text-white" : "text-[#7C3AED]")} />
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}{item.current && <span className="text-slate-400 font-normal"> (this page)</span>}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </>
              );
              return item.href ? (
                <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
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
            <span className="font-bold text-slate-900">Honest answer:</span> a fair number of &quot;we&apos;re building a SaaS&quot; conversations turn out to be an internal tool the client wants to eventually sell. Build the internal version first, run your own business on it for a year, and productise what survives. It&apos;s cheaper, lower-risk, and the resulting product is better because it was used in anger before it was sold.
          </p>
        </div>
      </section>

      {/* Engagement models — three columns, middle emphasised */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">How engagements are structured</h2>
            <p className="text-lg text-slate-600">Fixed price, quoted in writing before we start. No hourly billing, no equity, no deferred payment against future funding.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((m, idx) => (
              <div key={m.label} className={cn("flex flex-col rounded-3xl p-6 md:p-7", idx === 0 ? "bg-[#0F172A] text-white shadow-2xl md:-translate-y-3" : "bg-slate-50 border border-slate-100")}>
                <h3 className={cn("font-bold text-lg mb-3", idx === 0 ? "text-white" : "text-slate-900")}>{m.label}</h3>
                <p className={cn("text-sm leading-relaxed mb-4", idx === 0 ? "text-white/70" : "text-slate-600")}>{m.includes}</p>
                <p className={cn("text-sm font-bold mb-5", idx === 0 ? "text-[#C4B5FD]" : "text-[#7C3AED]")}>{m.from}</p>
                <p className={cn("mt-auto pt-4 border-t text-xs font-semibold", idx === 0 ? "border-white/10 text-white/50" : "border-slate-200 text-slate-500")}>Good for: {m.bestFor}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 max-w-[720px]">
            Every build includes monitoring for the first month. After that it&apos;s a monthly fee,{" "}
            <Link href="/services/ai-monitoring-maintenance" className="font-bold text-[#7C3AED] hover:underline">see what that covers</Link>, and you can stop any time, you keep the repository, the infrastructure configuration, and the documentation either way.
          </p>
        </div>
      </section>

      {/* FAQ — light, accordion, first item open */}
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

      {/* Closing CTA — dark, full-bleed, second dark band, single button, no secondary link */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Tell us what your first customer would pay for.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll tell you what belongs in version one, what we&apos;d cut, and give you a fixed price, or tell you honestly that you should validate it with no-code before spending anything on engineering.
            </p>
            <div className="flex justify-center">
              <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
