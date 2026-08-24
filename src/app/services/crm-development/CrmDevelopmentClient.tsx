"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home, Users, Percent,
  ShieldCheck, Cloud,
  Lock, FolderGit2,
} from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import SpecPanel from "@/components/SpecPanel";

const SPEC_ITEMS = [
  { section: "Stack", label: "Frontend", value: "Next.js · React · TypeScript" },
  { section: "Stack", label: "Backend", value: "Node · Python · REST and GraphQL APIs" },
  { section: "Stack", label: "Data", value: "PostgreSQL · MySQL · Redis" },
  { section: "Stack", label: "Auth", value: "Role-based access, SSO, audit logging" },
  { section: "Delivery", label: "Hosting", value: "Your cloud account, your region" },
  { section: "Delivery", label: "Integrations", value: "Email, calendar, billing, telephony, WhatsApp, e-signature" },
  { section: "Delivery", label: "Typical first release", value: "Scoped once we've seen your data model" },
  { section: "Delivery", label: "Engagement", value: "Fixed scope, retainer, or embedded team" },
  { section: "Delivery", label: "Base", value: "Ahmedabad, India · overlaps US and UK working hours" },
  { section: "Ownership", label: "You own", value: "Source code, database, deployment pipeline, documentation" },
];

const TESTS = [
  {
    n: "01",
    title: "Your core object isn’t a contact, a company, or a deal",
    desc: "Standard CRMs are built around people and opportunities. If the thing your business actually revolves around is a property, a shipment, a candidate placement, a matter, a vessel, a production run, or a patient episode, you’ll spend forever bending custom objects into a shape they resist, and every report, permission, and automation inherits that distortion.",
  },
  {
    n: "02",
    title: "Your process has real structural complexity",
    desc: "Not “we have a lot of steps”, everyone does, and workflow builders handle that. Structural complexity means multi-party relationships where several sides of a transaction each need their own view, dependencies between records that must stay consistent, rules that vary by jurisdiction or contract, or stages that can run concurrently rather than in sequence. This is where configuration stops and engineering starts.",
  },
  {
    n: "03",
    title: "Per-seat licensing has stopped making sense",
    desc: "If you need to give access to a hundred field staff, a network of contractors, or your own clients, per-seat pricing scales badly against you fast. At that point the licence cost over a few years exceeds the build cost, and you own nothing at the end of it. This is the most common reason we’re brought in, and it’s a spreadsheet question rather than a technical one.",
  },
  {
    n: "04",
    title: "The CRM is part of your product",
    desc: "If your clients log in to it, if it’s white-labelled, or if it’s a feature of what you sell rather than a tool you use internally, you can’t build it on someone else’s platform and pricing. That’s product engineering, and it needs to be owned.",
  },
];

const REAL_ESTATE_ITEMS = [
  "Properties as first-class records rather than notes on a contact",
  "Listings, viewings, offers, and chains tracked as related entities",
  "Buyer and seller sides of the same transaction, with separate views and separate permissions",
  "Commission splits calculated rather than typed",
  "Portal feeds, e-signature, and document packs handled inside the system instead of alongside it",
];

const PROCESS = [
  { step: "01", title: "Data model and discovery", duration: "1–2 weeks", desc: "The most important stage, and the one most vendors rush. We map your entities, relationships, states, and rules before anything is designed. A CRM built on the wrong data model can be redesigned visually but not structurally, and that’s the mistake that can’t be fixed cheaply later." },
  { step: "02", title: "Fixed scope and price", duration: "3–5 days", desc: "A written specification, a fixed price, a delivery date, and an explicit list of what’s out of scope for the first release. Approved before any code is written." },
  { step: "03", title: "Core build", duration: "scoped per project", desc: "The data layer, permissions, and core workflows first. You see working software on your own data early rather than a design mockup that becomes something else." },
  { step: "04", title: "Integrations", duration: "concurrent", desc: "Email, calendar, billing, telephony, e-signature, WhatsApp, and your existing systems, with proper error handling rather than a nightly sync that fails silently." },
  { step: "05", title: "Migration and rollout", duration: "1–2 weeks", desc: "Covered in detail below. It’s the stage that most often decides whether the project succeeds." },
  { step: "06", title: "Live, then maintained", duration: "ongoing", desc: "Monitoring, backups, dependency and security updates, and new feature work on a monthly plan with a named engineer. A custom CRM is a long-term commitment, not a delivery." },
];

const MIGRATION_PRINCIPLES = [
  { title: "Migrate the data, not the mess", desc: "A migration is the one moment you can leave a decade of duplicates, dead fields, and inconsistent values behind. Cleaning during migration costs a fraction of cleaning afterwards, and importing dirty data into a clean system is just relocating the problem." },
  { title: "Run in parallel before switching", desc: "The old system stays live while the new one is used alongside it for real work. It costs a few extra weeks and it’s the difference between a rollout and an incident." },
  { title: "Migrate history, not just current state", desc: "A CRM without last year’s context is a CRM your team doesn’t trust and quietly works around. Closed deals, old notes, and past correspondence matter more to adoption than any feature." },
  { title: "Train on the real thing", desc: "People learn a system on their own accounts and their own records, not on demo data. Sessions by role, plus written documentation they can actually search afterwards." },
  { title: "Expect a dip", desc: "Productivity drops for a fortnight after any CRM change. Planning for it beats being surprised by it, and it’s why we don’t recommend going live in your busiest month." },
];

const OWNERSHIP_BLOCKS = [
  { title: "Source code and database", desc: "Everything, in your repository, on final payment. No proprietary framework, no runtime licence, no component that stops working if we do.", icon: FolderGit2 },
  { title: "Your infrastructure", desc: "It runs in your cloud account, in your chosen region, on your billing. You can revoke our access at any point and it keeps running.", icon: Cloud },
  { title: "Documentation built for a stranger", desc: "Architecture, data model, deployment, and runbooks written so a developer who has never met us can take it over. That's the test, not whether documentation exists, but whether someone else can use it.", icon: ShieldCheck },
  { title: "No lock-in by design", desc: "If you move to another agency or hire in-house, that's a normal outcome, not a failure. We'd rather be kept because the work is good.", icon: Lock },
];

const ENGAGEMENT_MODELS = [
  { label: "Fixed scope", bestFor: "A defined first release", commitment: "Per project", youGet: "Written spec, fixed price, fixed date", typical: "Core CRM build, migration", from: "Scoped and quoted after we've seen your data model" },
  { label: "Monthly retainer", bestFor: "Continuous development after launch", commitment: "Rolling monthly", youGet: "Set capacity each month, reprioritised as you need", typical: "Feature work, integrations, scaling", from: "Sized to your capacity needs" },
  { label: "Embedded team", bestFor: "Extending your own engineering team", commitment: "Rolling monthly", youGet: "Named engineers in your process and tooling", typical: "Long-running product development", from: "Sized to your team" },
];

const FAQS = [
  {
    q: "Should we build a custom CRM or use HubSpot or Salesforce?",
    a: "Use the platform unless your core object isn’t a contact or a deal, your process has real structural complexity, per-seat licensing has stopped scaling for you, or the CRM is part of what you sell. If none of those apply, configuring what you have will cost less and serve you better.",
  },
  {
    q: "What does custom CRM development cost?",
    a: "It scales with the number of entities, integrations, and user roles, so we won’t quote a figure before seeing your data model, the gap between a four-entity CRM and a twelve-entity multi-party system is enormous. You get a fixed price in writing before any code is written. The number that matters more is the five-year comparison against licence costs at your projected headcount, we’ll run it with you.",
  },
  {
    q: "How long does it take?",
    a: "It depends on entity count and integrations, the same variable that drives cost. Data model and discovery is the first one to two weeks regardless of size. We release core functionality early and add to it rather than disappearing for months.",
  },
  {
    q: "Can we migrate our existing data?",
    a: "Yes, including history, closed deals, old notes, past correspondence. History matters more to adoption than most people expect. Migration is also the one moment you can leave duplicates and dead fields behind rather than importing them.",
  },
  {
    q: "What happens if we stop working with you?",
    a: "Everything runs in your accounts on your infrastructure, with source code and documentation written so a developer who's never met us can take over. You can revoke our access and nothing stops.",
  },
  {
    q: "Who maintains it afterwards?",
    a: "Us on a monthly plan, or your own team. Either way you get documentation built for handover. What you shouldn't do is treat a custom CRM as a one-off cost, it needs a permanent maintenance line, and any vendor not saying that upfront is leaving it for you to discover.",
  },
  {
    q: "Can it integrate with the tools we already use?",
    a: "Yes, email, calendar, billing, telephony, e-signature, WhatsApp, accounting, and your existing systems. Custom builds are usually easier to integrate than platforms, because you're not limited to what a marketplace happens to offer.",
  },
  {
    q: "Can you add AI features?",
    a: "Yes, and it's easier in a custom system because we control the data model. Assistants, document extraction, lead scoring, and drafting can be built in, see our work on AI assistants and the model layer underneath them. We'd usually ship the CRM first and add them once real data is in it, AI on an empty system demos well and does nothing.",
  },
  {
    q: "What technology do you use?",
    a: "Next.js, React, and TypeScript on the front end; Node or Python with PostgreSQL behind it. Mainstream, well-documented, and easy to hire for, which matters more than novelty when you're the one who owns the code.",
  },
  {
    q: "Can you take over a stalled build?",
    a: "Yes, and it's a common way clients start with us. We'd begin with an assessment of what exists, including telling you honestly if rebuilding is cheaper than continuing.",
  },
  // TODO: client to confirm real US/UK daily-overlap hours; rephrased to avoid an unverified
  // number, consistent with how the same fact is handled on the other service pages.
  {
    q: "How do you work with clients abroad?",
    a: "We're in Ahmedabad, India, and stay available for video calls in your US and UK working hours, not ours. A written update every Friday plus a short Loom walkthrough.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom CRM Development",
  provider: {
    "@type": "Organization",
    name: "Spaciva AI",
    url: "https://spaciva.tech",
  },
  areaServed: ["US", "GB", "IN", "AE"],
  description:
    "Custom CRM software built on your own data model for businesses whose process doesn't fit HubSpot, Salesforce, or Zoho. Full source code ownership.",
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
    { "@type": "ListItem", position: 3, name: "CRM Development", item: "https://spaciva.tech/services/crm-development" },
  ],
};

// Five-year cost comparison, built as inline SVG per the source spec's performance note (no
// charting library for one static graphic). Deliberately illustrative, not data-driven: the
// source spec explicitly says not to publish competitor per-seat prices, so this shows the
// shape of the crossover rather than invented dollar figures. The underlying claim is restated
// as plain text immediately below for screen readers and search, per the accessibility note.
function CostChart() {
  const years = [1, 2, 3, 4, 5];
  const licenceY = [172, 148, 118, 82, 40];
  const buildY = [130, 108, 98, 92, 88];
  const toPoints = (ys: number[]) => ys.map((y, i) => `${40 + i * 90},${y}`).join(" ");

  return (
    <div>
      <svg
        viewBox="0 0 480 200"
        className="w-full h-auto"
        role="img"
        aria-label="Line chart, illustrative not measured: over five years, off-the-shelf per-seat licence cost climbs steadily as headcount grows, while custom build cost starts higher in year one, then flattens because additional users mainly affect hosting rather than licensing. The two lines cross partway through the five-year period, with the exact point depending on headcount."
      >
        <line x1="40" y1="10" x2="40" y2="180" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="40" y1="180" x2="460" y2="180" stroke="#E2E8F0" strokeWidth="1" />
        <polyline points={toPoints(licenceY)} fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={toPoints(buildY)} fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {years.map((yr, i) => (
          <text key={yr} x={40 + i * 90} y="196" fontSize="11" fill="#94A3B8" textAnchor="middle">Yr {yr}</text>
        ))}
      </svg>
      <div className="flex flex-wrap gap-5 mt-2">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> Off-the-shelf, per-seat licence
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="w-3 h-3 rounded-full bg-[#7C3AED] inline-block" /> Custom build plus maintenance
        </span>
      </div>
      <p className="text-xs text-slate-400 mt-2">Illustrative shape, not measured data. Run your own numbers with the method below.</p>
    </div>
  );
}

export default function CrmDevelopmentClient() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-[#7C3AED]/30 selection:text-white font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero — dark base, data-model diagram as the hero element. Built from the one industry
          shape confirmed as genuine delivery experience: property, connected to viewings,
          offers, and a deal with separate buyer/seller sides. */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7C3AED]/15 via-[#0F172A] to-[#0F172A] -z-10" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[620px]">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C4B5FD] text-xs font-bold uppercase tracking-widest mb-6">
                CRM Development
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
                When your business doesn&apos;t fit the CRM, build the CRM around the business
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
                Some companies run a process no off-the-shelf CRM was designed for. We build custom CRMs on your actual data model, your entities, your stages, your rules, integrated with the systems you already run, and handed over as code you own outright.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <AnimatedCtaButton href="/contact" label="Book a technical call" hoverLabel="Let's Talk" />
                <a href="#four-tests" className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C4B5FD] transition-colors">
                  Should you build one?
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm font-semibold text-white/50">
                Fixed scope or retainer · Full source code ownership · Built to be maintained
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
              role="img"
              aria-label="Diagram: a data model for a property CRM. Property is the central record. It connects to Viewings and Offers, and to a Deal record. The Deal splits into a Buyer side and a Seller side, each with its own view and permissions, plus a calculated commission split. This is not the standard contact-company-deal shape a platform like HubSpot ships with."
            >
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 sm:p-7 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2.5 bg-[#7C3AED] text-white rounded-xl px-4 py-3 shadow-lg shadow-[#7C3AED]/25 w-full max-w-[220px] justify-center">
                    <Home className="w-4 h-4" />
                    <span className="font-bold text-sm">Property</span>
                  </div>
                  <span className="w-px h-6 bg-white/20" aria-hidden="true" />
                  <div className="grid grid-cols-3 gap-2 w-full mb-2">
                    {["Viewings", "Offers", "Deal"].map((label) => (
                      <div key={label} className="flex flex-col items-center gap-1.5">
                        <span className="w-px h-3 bg-white/20" aria-hidden="true" />
                        <div className="bg-white/[0.07] border border-white/10 rounded-lg px-2 py-2.5 text-center w-full">
                          <span className="font-bold text-xs text-white/90">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <span className="w-px h-5 bg-white/20 ml-auto mr-[16.5%]" aria-hidden="true" />
                  <div className="grid grid-cols-2 gap-2 w-2/3 ml-auto">
                    <div className="bg-white/[0.07] border border-white/10 rounded-lg px-2.5 py-2 flex items-center gap-1.5 justify-center">
                      <Users className="w-3 h-3 text-[#C4B5FD]" />
                      <span className="font-semibold text-[11px] text-white/70">Buyer side</span>
                    </div>
                    <div className="bg-white/[0.07] border border-white/10 rounded-lg px-2.5 py-2 flex items-center gap-1.5 justify-center">
                      <Users className="w-3 h-3 text-[#C4B5FD]" />
                      <span className="font-semibold text-[11px] text-white/70">Seller side</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 text-white/40">
                    <Percent className="w-3 h-3" />
                    <span className="text-[11px] font-semibold">Commission split, calculated</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content column + sticky spec panel — stretches to the height of the main column
          (no items-start), so the sticky child inside has room to track scroll across sections
          3 through 9, then releases naturally once the column ends. */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 md:py-20">
        <div className="min-[1200px]:grid min-[1200px]:grid-cols-[1fr_300px] min-[1200px]:gap-14">
          <div className="flex flex-col gap-16 md:gap-24 min-w-0">
            {/* Should you actually build one — the signature section, framed as a self-test */}
            <section id="four-tests" className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl scroll-mt-24">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Four tests. If you fail all four, don&apos;t build one.</h2>
              <p className="text-slate-600 leading-relaxed mb-3 max-w-[720px]">
                Most businesses asking about custom CRM development are better served by configuring an off-the-shelf platform properly. HubSpot, Salesforce, and Zoho are enormously capable, and a custom build that merely reproduces what they already do is an expensive way to own a worse product.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">
                But some businesses genuinely don&apos;t fit, and it&apos;s usually for one of four structural reasons. <span className="font-bold text-slate-900">If one or more of these describes you, a custom build is a real conversation.</span>
              </p>

              <div className="flex flex-col gap-8 mb-10">
                {TESTS.map((test) => (
                  <div key={test.n} className="flex gap-5">
                    <span className="text-3xl font-light text-[#7C3AED] tabular-nums shrink-0">{test.n}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{test.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{test.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-800 leading-relaxed">
                <span className="font-bold text-slate-900">Failed all four?</span> Then you probably want your existing CRM configured and connected properly rather than replaced, that&apos;s{" "}
                <Link href="/services/crm-automation" className="font-bold text-[#7C3AED] hover:underline">CRM automation</Link>, it costs a fraction of this, and it&apos;s a genuinely better outcome. We&apos;ll tell you that on the call rather than after the proposal.
              </blockquote>
            </section>

            {/* What we build — single genuine industry shape, not a multi-tab component, since
                only one sector was confirmed as real delivery experience. A tabbed component
                implying five verticals when only one is backed up would be exactly the liability
                the source spec warns against. */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-4">
                What We Build
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">The shape that doesn&apos;t fit a standard CRM</h2>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 md:p-8 mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-[#7C3AED]" />
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg">Real estate and property</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {REAL_ESTATE_ITEMS.map((item) => (
                    <li key={item} className="text-slate-600 text-sm leading-relaxed flex gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-600 max-w-[680px]">
                Not in property? The shape matters more than the sector. If the tests above describe your business, the industry is a detail, bring us your data model and we&apos;ll tell you within a week whether a custom build is justified.
              </p>
            </section>

            {/* How we build it — six stages, tighter than a full timeline since the detail that
                matters (migration, ownership) gets its own sections */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">Six stages to a first release</h2>

              <div className="flex flex-col gap-7">
                {PROCESS.map((item, idx) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white font-bold flex items-center justify-center text-xs shadow-md shadow-[#7C3AED]/25">
                        {item.step}
                      </span>
                      {idx < PROCESS.length - 1 && <span className="w-px flex-1 bg-slate-200 mt-2" />}
                    </div>
                    <div className="pb-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide">{item.duration}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-[640px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Migration — prominent, two columns, not tucked near the FAQ per the source spec */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">The stage that decides whether anyone uses it</h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-[720px]">
                More custom CRM projects fail at migration and adoption than at engineering. The software works; the rollout doesn&apos;t.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {MIGRATION_PRINCIPLES.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What it actually costs — second heavy section: the honest comparison, the
                five-year chart, then the ongoing-cost warning */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Build versus licence, over five years</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[720px]">
                The comparison people make is build cost versus annual licence, and it makes custom builds look expensive. The comparison that matters runs over the life of the system.
              </p>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 mb-8">
                <CostChart />
              </div>

              <div className="flex flex-col gap-5 mb-8 max-w-[720px]">
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900">Off-the-shelf costs</span> scale with headcount: per-seat licences, higher tiers to unlock features you need, paid add-ons, connector subscriptions, and implementation or consultancy. The number goes up as you grow, and you own nothing at the end of any of it.</p>
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900">A custom build costs</span> more upfront and then flattens: development, hosting, and ongoing maintenance. Adding a hundred users changes your hosting bill, not your licence bill. You own the asset.</p>
                <p className="text-slate-600 leading-relaxed"><span className="font-bold text-slate-900">Where the crossover lands</span> depends almost entirely on user count. At ten users, off-the-shelf wins decisively and you shouldn&apos;t be reading this page. At two hundred users on a mid-tier plan, the licence cost over five years is frequently several times a custom build. Somewhere between those, it flips.</p>
              </div>

              <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 text-slate-800 leading-relaxed mb-10">
                Run your own version of this before you talk to anyone. Take your current per-user cost, multiply by your realistic headcount in three years, multiply by sixty months, and add your add-ons and implementation fees. That&apos;s the number to compare against. We&apos;ll do it with you on the call, but the arithmetic doesn&apos;t need us.
              </blockquote>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="font-bold text-slate-900 text-lg mb-3">The cost most people forget</h3>
                <p className="text-slate-600 leading-relaxed max-w-[720px] mb-4">
                  Custom software needs maintenance. Dependencies get security updates, browsers change, integrations break when a provider changes an API, and your business will need features you can&apos;t currently anticipate.
                </p>
                <p className="text-slate-700 font-semibold leading-relaxed max-w-[720px]">
                  Budget for it as a permanent line item, not a contingency. Anyone who quotes you a custom CRM as a one-off build cost is either not planning to be there afterwards or hasn&apos;t told you yet. Our monthly plan is scoped in from day one for exactly that reason, and if you&apos;d rather your own team maintains it, we&apos;ll hand over documentation built for that.
                </p>
              </div>
            </section>

            {/* What you own — tight, four blocks, between two heavy sections */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-slate-900">The whole thing, and the ability to leave</h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-[680px]">The reason to build rather than licence is ownership. Ownership you can&apos;t exercise isn&apos;t ownership.</p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {OWNERSHIP_BLOCKS.map((item) => (
                  <div key={item.title} className="flex gap-3.5">
                    <span className="w-9 h-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4.5 h-4.5 text-[#7C3AED]" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How we work together — engagement-model table, same component and styling as
                the Generative AI page. No fabricated pricing: the "Pricing" row states how it's
                set rather than a number, since none is confirmed. */}
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
                Hosting and third-party services are billed directly to you by your providers. We estimate them before you commit and flag any design decision with a significant cost consequence.
              </p>
            </section>

            {/* Or fix the one you have — required routing section, reciprocal to the CRM
                Automation page's own link back to this one */}
            <section className="bg-white text-[#0F172A] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">Most people who land here should fix their CRM, not replace it</h2>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 leading-relaxed">
                    If you got here through the four tests and didn&apos;t pass any of them, the honest answer is that a custom build would cost you more and serve you worse.
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <span className="font-bold text-slate-900">What usually solves it instead:</span> the data cleaned up so people trust it, the systems your CRM can&apos;t reach natively connected properly, and the manual updating automated so the record stays current without anyone maintaining it. That&apos;s{" "}
                    <Link href="/services/crm-automation" className="font-bold text-[#7C3AED] hover:underline">CRM automation</Link>, weeks rather than months, a fraction of the cost, and it keeps you on a platform someone else maintains.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-900">Come back here when</span> you&apos;ve done that and you&apos;re still fighting the platform rather than the process. That&apos;s a real signal, and it&apos;s a much better basis for a build decision than frustration.
                  </p>
                </div>
              </div>
            </section>

            {/* Mobile/tablet spec panel — collapses here (above the FAQ) below 1200px rather
                than disappearing */}
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

      {/* FAQ — plain two-column list directly on the dark base, matching the Generative AI
          page. Not an accordion. */}
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
        <p className="mt-4 text-white/40 text-sm max-w-[680px]">
          Want AI built into the CRM itself?{" "}
          <Link href="/services/ai-assistants" className="font-bold text-[#C4B5FD] hover:underline">AI assistants</Link>{" "}
          and{" "}
          <Link href="/services/generative-ai-custom-llms" className="font-bold text-[#C4B5FD] hover:underline">Generative AI &amp; Custom LLMs</Link>{" "}
          cover that layer directly.
        </p>
      </section>

      {/* Closing CTA — light bordered card on the dark base, matching the Generative AI page */}
      <section className="max-w-4xl mx-auto px-5 lg:px-10 py-16 md:py-24">
        <div className="bg-white text-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Bring us your data model, not your feature list.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            Book a technical call. Walk us through how your business actually works and we&apos;ll tell you whether it fits an existing platform, and if it doesn&apos;t, what building it properly would cost over five years. If configuring what you already have is the better answer, we&apos;ll say so.
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
