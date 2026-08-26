"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, ClipboardList, LayoutDashboard, Workflow, Repeat, Building2, Code2 } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const QUESTIONS = [
  "Who exactly uses this, and what are they doing instead today?",
  "Which single step, if it stopped being manual, would justify the whole project?",
  "What has to be in version one, and what are you calling version one that isn't?",
  "Which systems does it read from, and does each of them actually have a usable API?",
  "How clean is the data you'd be migrating, and who has looked?",
  "What happens in the cases nobody mentions, errors, exceptions, someone doing it wrong?",
  "Who inside your business has to agree, and have they seen this yet?",
  "How will you know in six months whether it worked?",
];

const IS_ITEMS = [
  { title: "Fixed fee, fixed duration", desc: "One to two weeks, one price, agreed before it starts. The same commercial model as everything else we do." },
  { title: "It produces an artifact", desc: "A written specification: scope, user flows, integration requirements, data findings, risks, and a realistic cost and timeline range. Not a deck, not a set of recommendations, a document a developer can build from." },
  { title: "It's yours", desc: "You own it and you can take it to any firm, including ones that aren't us. We'd genuinely rather run sprints that go elsewhere than have you suspect the recommendation was shaped by wanting the build." },
  { title: "It usually shrinks the project", desc: "The most common outcome is a smaller, cheaper, faster version one than the one you arrived with. That's the return on the fee, and it typically exceeds it several times over." },
];

const ISNT_ITEMS = [
  { title: "Retained advisory", desc: "We're not available by the day or the month to think alongside you. That's a role for someone inside your business." },
  { title: "Vendor or software selection", desc: "We won't run a three-month evaluation of ERP or CRM products for you. We'll give you an honest opinion on a call for free, and we hold no reseller relationships that would shape it." },
  { title: "Product management", desc: "We won't own your roadmap, run your backlog, or sit in your strategy meetings. Our horizon is this build; yours is the business." },
  { title: "A commitment to hire us", desc: "Roughly the point of the whole thing. If the sprint concludes you shouldn't build, or shouldn't build with us, that's a successful sprint." },
];

const WHAT_HAPPENS = [
  { title: "We talk to the people who do the work", desc: "Not only the people commissioning the project. That gap is where most bad specifications come from, the person who signs off describes the process as designed, and the person doing it describes the process as it survived contact with reality." },
  { title: "We look at your actual systems", desc: "Not a list of what you use, we connect to each one and check what's genuinely available through its API, how far back the history goes, and how clean the data is. Roughly half of all scoping surprises live here, and they're all findable in an afternoon." },
  { title: "We map the flow including the exceptions", desc: "What happens when data's missing, when someone does it wrong, when two people act at once. Exceptions are most of real software and they're what quotes miss." },
  { title: "We argue with you about scope", desc: "Explicitly, and it's the most valuable hour. Everything gets sorted into version one, later, or never, and “never” is a real category we'll push for." },
];

const WHAT_YOU_GET = [
  { title: "A written specification", desc: "Scope, user flows, screens, integration requirements, data findings, and the decisions made with the reasoning attached." },
  { title: "A risk list", desc: "What could make this cost more, ranked, with what would resolve each one." },
  { title: "A realistic cost and timeline range", desc: "With the assumptions behind it written down so you can see what would move it." },
  { title: "A build-or-don't recommendation", desc: "Sometimes the answer is that an off-the-shelf tool does this, or that the process should be fixed before software touches it, or that a smaller automation solves eighty percent of it. You'll get that answer straight." },
];

const OUTCOMES = [
  { title: "The project gets smaller", desc: "Most common by some distance. The version one you arrived with contained three projects, and one of them delivers most of the value. You leave with a build that's cheaper and faster than the one you were budgeting for." },
  { title: "It turns out to be a different project", desc: "You came for a custom system and the actual problem is that two tools don't talk to each other, which is workflow automation at a fraction of the cost. Or you came for one thing and the data underneath it needs fixing first. This happens often enough that we'd be embarrassed to charge build prices before checking.", link: { href: "/services/workflow-automation", label: "workflow automation" } },
  { title: "It's confirmed, and now it's specified", desc: "Sometimes the answer is that yes, this needs building roughly as you thought. You now have a document that lets any firm quote it accurately, including ones that aren't us. That's a better position than you were in, and it's worth the fee on its own." },
  { title: "Don't build it", desc: "Least common, most valuable when it happens. The tool exists off the shelf, or the process problem underneath won't be fixed by software, or the case doesn't hold up once someone has written the numbers down. We'll say so, and we'd rather lose the build than deliver one that shouldn't exist." },
];

const ROUTING = [
  { title: "Web applications", desc: "A custom system. The most common destination, and where process, pricing, and handover terms live.", icon: Code2, href: "/services/web-applications" },
  { title: "Internal business tools", desc: "A screen where a specific piece of work happens.", icon: ClipboardList, href: "/services/internal-business-tools" },
  { title: "Workflow automation", desc: "Something happening without anyone opening anything. Frequently the cheaper answer a sprint uncovers.", icon: Workflow, href: "/services/workflow-automation" },
  { title: "Custom dashboards", desc: "Visibility rather than a system to work in.", icon: LayoutDashboard, href: "/services/custom-dashboards" },
  { title: "SaaS platforms", desc: "Software that's your product rather than your operation.", icon: Repeat, href: "/services/saas-platforms" },
  { title: "ERP systems", desc: "Integration or extension of a system of record.", icon: Building2, href: "/services/erp-systems" },
];

const FAQS = [
  { q: "Why would I pay for scoping when other firms do it free?", a: "Because free scoping isn't free, it's priced into the quote, and it's done fast enough to win the work rather than thoroughly enough to be accurate. A firm doing unpaid discovery is incentivised to reach a number that closes the deal. One doing paid discovery is incentivised to reach a number that's right, and to tell you if the answer is not to build." },
  { q: "What if the sprint says we shouldn't build anything?", a: "Then it saved you the build budget and did its job. It's the least common outcome and the most valuable one. You keep the specification and the reasoning either way." },
  { q: "Can we take the spec to other developers?", a: "Yes, and we'd encourage getting comparable quotes with it. Three firms pricing the same written specification will give you numbers you can actually compare, which is impossible when each is guessing at a different thing." },
  { q: "How much does custom software cost?", a: "Honestly: nobody can tell you without doing the work above, and any firm giving you a confident number from a first conversation is either padding it or will revise it later. What a sprint gives you is a range with the assumptions written down, so you can see what would move it and decide whether it's worth proceeding." },
  { q: "How long does a sprint take?", a: "One to two weeks, depending on how many systems are involved and how many people need to be spoken to. It's deliberately short, discovery that runs for months has become consulting, which is a different thing and not one we sell." },
  { q: "Who do you need to talk to?", a: "The people who actually do the work, and whoever has to sign off. Two or three hours of their time in total, spread across the sprint. The people doing the work matter most, they know the exceptions." },
  { q: "Is this the same as a requirements document?", a: "It includes one, and adds the parts a requirements document usually leaves out: what was checked in your actual systems, what the risks are, what was deliberately excluded, and why. A requirements list tells a developer what to build. A specification tells them enough to price it." },
  { q: "Do you do product strategy more broadly, roadmaps, positioning, pricing?", a: "No. Our horizon is a build; yours is the business, and holding years of product context is a role for someone inside it. If you need that, you need a hire or a specialist consultancy, an agency offering it is describing a dependency rather than a service." },
  { q: "What does it cost, and does it come off the build?", a: "$1,200, and yes, if you build with us, the fee comes off. If you don't, you keep the specification and we've been paid fairly for the work." },
  { q: "How do you work with clients abroad?", a: "We're in Ahmedabad, India, and stay available for calls in your US Eastern or UK working hours. The sprint runs on calls and written work, so distance genuinely doesn't affect it." },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nobody can quote your project. Including us.",
  description: "Before anyone can quote your build honestly, someone has to scope it. A fixed-fee discovery sprint that ends in a specification you own — and can take anywhere.",
  author: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  mainEntityOfPage: "https://spaciva.tech/services/discovery-sprint",
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Discovery Sprint",
  description: "A one-to-two-week fixed-fee discovery sprint producing a written specification: scope, user flows, integration requirements, data findings, a ranked risk list, and a costed range.",
  price: "1200",
  priceCurrency: "USD",
  url: "https://spaciva.tech/services/discovery-sprint",
  availability: "https://schema.org/InStock",
  seller: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
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
    { "@type": "ListItem", position: 2, name: "Discovery Sprint", item: "https://spaciva.tech/services/discovery-sprint" },
  ],
};

function FAQItem({ faq }: { faq: typeof FAQS[0] }) {
  return (
    <div>
      <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
    </div>
  );
}

export default function DiscoverySprintClient() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFER_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero + the eight questions — D-3's hero device: recognition through discomfort,
          plain numbered list, no icons, real semantic markup. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[780px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Discovery &amp; Scoping
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Nobody can quote your project. Including us.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-[680px] mx-auto">
              Not honestly, not from a conversation and a document. Every fixed price you&apos;ve been given for custom software was either padded to cover what the vendor didn&apos;t know, or it was a number that will move later. The difference between the two is whether anyone did the work of finding out first.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <ol className="bg-white border border-slate-200 rounded-[1.5rem] shadow-lg p-6 sm:p-8 text-left flex flex-col gap-5">
              {QUESTIONS.map((q, idx) => (
                <li key={q} className={cn("flex gap-4", idx > 0 && "pt-5 border-t border-slate-100")}>
                  <span className="text-xl font-light text-[#7C3AED] tabular-nums shrink-0 w-7">{idx + 1}</span>
                  <span className="font-bold text-slate-900 leading-snug">{q}</span>
                </li>
              ))}
            </ol>
          </motion.div>
          <p className="mt-6 text-sm text-slate-500 max-w-[600px] mx-auto">
            Most projects can answer two or three. A quote produced without answers to the rest is a guess wearing a number.
          </p>

          <div className="mt-8">
            <AnimatedCtaButton href="/contact" label="Book a discovery sprint — $1,200" hoverLabel="Let's Talk" size="lg" />
          </div>
        </div>
      </section>

      {/* What this is, and isn't — equal weight, load-bearing for site-wide consistency
          with the ERP and SaaS pages' declined-work statements */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Let&apos;s be precise, because we&apos;ve said elsewhere that we don&apos;t sell consulting</h2>
            <p className="text-lg text-slate-600">We don&apos;t, and this isn&apos;t that. It&apos;s a fixed-scope piece of work with a defined deliverable and an end date.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What a discovery sprint is</h3>
              <div className="flex flex-col gap-7">
                {IS_ITEMS.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What it isn&apos;t</h3>
              <div className="flex flex-col gap-7">
                {ISNT_ITEMS.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl">
            We sell defined work with a deliverable at the end. A discovery sprint is that. Open-ended thinking isn&apos;t, and we&apos;d be bad at it.
          </blockquote>
        </div>
      </section>

      {/* Why nobody will give you a real number — the landing target for the highest-volume
          query this page can win */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-slate-900">What you&apos;re actually being quoted</h2>
          <div className="text-slate-600 text-lg leading-relaxed text-left space-y-5 mb-10">
            <p>Ask three firms to price the same custom software and you&apos;ll get three numbers that don&apos;t overlap. That isn&apos;t because two of them are wrong. It&apos;s because none of you has defined the same thing.</p>
            <p>You described what you want in a call and a document. Each firm filled the gaps with assumptions, about how many integrations, how clean the data is, how many exceptions the workflow has, how many people need to sign off. Those assumptions are where the entire cost variance lives, and none of them were written down.</p>
            <p>So the number you get is one of two things. Either it&apos;s padded, because a firm that&apos;s been burned before prices the risk of what it doesn&apos;t know. Or it&apos;s optimistic and it will move, through change orders, once the unknowns surface in week five. The cheapest-looking quote is very often the one with the least discovery behind it, which is exactly why it looked cheapest.</p>
            <p>There&apos;s a third thing that happens, and it&apos;s worse: the project goes ahead on the optimistic number, hits the first real unknown, and stops. Half-built, over budget, with nobody willing to own the next decision. Every firm that does rescue work, including us, sees this monthly, and it&apos;s almost never a technical failure.</p>
          </div>
          <blockquote className="border-l-4 border-[#7C3AED] bg-white rounded-r-2xl px-6 py-6 text-lg font-bold text-slate-900 leading-snug text-left">
            You can pay for discovery before the build, or you can pay for it during the build at a much worse rate and call it change orders.
          </blockquote>
        </div>
      </section>

      {/* The sprint — the page's centrepiece and primary CTA, D-3's departure from D-1/D-2 */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="rounded-[2rem] border-2 border-[#7C3AED]/30 bg-white shadow-xl p-8 sm:p-10 md:p-12">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">A discovery sprint</h2>
              <span className="text-2xl font-extrabold text-[#7C3AED]">$1,200</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">One to two weeks</span>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">What happens</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {WHAT_HAPPENS.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">What you get</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {WHAT_YOU_GET.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-2">What you&apos;re not committing to</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[680px]">
                <strong className="text-slate-900">Nothing.</strong> The specification is yours. Take it to us, to three other firms for comparable quotes, or to nobody. If you take it elsewhere, you&apos;ll get better quotes than you would have without it, which is the point, and it&apos;s why the fee is what it is rather than free.
              </p>
            </div>

            <div className="pt-2">
              <AnimatedCtaButton href="/contact" label="Book a discovery sprint" hoverLabel="Let's Talk" size="lg" />
            </div>
            <p className="mt-4 text-sm text-slate-500">If you build with us, the sprint fee comes off the build.</p>
          </div>
        </div>
      </section>

      {/* What usually comes out of it — honest outcomes, deliberately unglamorous */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">The four outcomes, in rough order of frequency</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {OUTCOMES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="p-6 rounded-2xl border border-slate-200 bg-white"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.link ? (
                    <>
                      {item.desc.split(item.link.label)[0]}
                      <Link href={item.link.href} className="font-bold text-[#7C3AED] hover:underline">{item.link.label}</Link>
                      {item.desc.split(item.link.label)[1]}
                    </>
                  ) : item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where the spec ends up pointing — routing block, all six siblings now live */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">What a spec usually turns into</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {ROUTING.map((item) => (
              <Link key={item.title} href={item.href} className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#C4B5FD] transition-all">
                <span className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 mb-3">
                  <item.icon className="w-4.5 h-4.5 text-[#7C3AED]" />
                </span>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>

          <p className="text-slate-600 max-w-[720px]">
            <span className="font-bold text-slate-900">A sprint that ends in &quot;buy this off-the-shelf tool instead&quot; is not a failed sprint.</span> It&apos;s the cheapest possible outcome, and it happens more often than an agency page usually admits.
          </p>
        </div>
      </section>

      {/* FAQ — plain two-column list, matching D-1 and D-2 */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-slate-900">Common questions</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — light bordered panel. Primary CTA is the offer itself, D-3's
          departure from D-1/D-2; secondary text link to Web Applications. */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <FileSearch className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Stop guessing at the number.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            One to two weeks, a fixed fee, and a written specification you own, whether you build with us, build with someone else, or decide not to build at all.
          </p>
          <div className="flex flex-col items-center gap-4">
            <AnimatedCtaButton href="/contact" label="Book a discovery sprint — $1,200" hoverLabel="Let's Talk" size="lg" />
            <Link href="/services/web-applications" className="text-sm font-semibold text-slate-500 hover:text-[#7C3AED] transition-colors">
              Already have a spec and want it priced? See how we build web applications.
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
