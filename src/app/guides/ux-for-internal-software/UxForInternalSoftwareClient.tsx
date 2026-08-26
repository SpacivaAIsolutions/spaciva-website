"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

function cn(...c: (string | undefined | false)[]) {
  return c.filter(Boolean).join(" ");
}

const SYMPTOMS = [
  { seeing: "Your team went back to the spreadsheet", means: "The new system takes more steps than the old one for the task they do most" },
  { seeing: "Every new person needs a training session", means: "The interface encodes knowledge that should be visible on screen" },
  { seeing: "The same support question comes up weekly", means: "One screen is ambiguous, and nobody has fixed it because it's “just training”" },
  { seeing: "Nobody uses the feature you paid to build", means: "It's discoverable in the wrong place, or it solves a problem in a way people don't recognise" },
];

const WE_DO = [
  { title: "Product design inside builds", desc: "Every system we ship is designed, screens, flows, states, and the decisions about what goes where. It's part of the build, not a line item you can decline." },
  { title: "UX audits as a standalone piece of work", desc: "We assess an existing application against how people actually use it and give you a written report with prioritised, specific fixes. You can hand that report to any developer, including ones who aren't us." },
  { title: "Redesigns of software that works but isn't used", desc: "Where the logic is sound and the interface is why adoption failed." },
  { title: "Design that survives implementation", desc: "Because the same team builds it, nothing gets designed that can't be built, and nothing gets quietly simplified in development without a conversation." },
];

const WE_ARENT = [
  { title: "A visual design or branding studio", desc: "Logos, brand identity, marketing sites, illustration, motion design, not our field, and you should hire people whose whole practice is that." },
  { title: "A portfolio-led design agency", desc: "If you're choosing a partner based on visual craft and aesthetic range, there are studios far better suited than us and we'd rather you used one." },
  { title: "Available for design-only builds", desc: "We don't produce Figma files for someone else to implement. Design here is attached to systems we're building or auditing." },
  { title: "Interested in redesigning something that isn't broken", desc: "If your software is unattractive but your team uses it fluently, leave it alone. Cosmetic redesigns of functional systems are the least valuable work in this field." },
];

const WHY_AVOIDED = [
  { title: "It was designed from the requirements document", desc: "Every field the database has, laid out in the order the schema defines, with the same visual weight. The screen reflects how the data is stored rather than how the work is done, so the field someone fills in forty times a day sits between two they've never touched.", fixes: "designing from the task backwards. Watch someone do the job, find the sequence, and build the screen around that. Frequently used things get prominence; rarely used things get out of the way." },
  { title: "It optimised for the rare case", desc: "Someone in scoping said “but what if a customer has three billing addresses?”, and now every single order screen carries the complexity of a case that occurs twice a year. The exception got designed into the default path.", fixes: "designing the common path to be fast and putting the exception one deliberate click away. Most business software is slow because it's permanently prepared for something that rarely happens." },
  { title: "It has no opinion", desc: "Every option presented equally, no defaults, nothing pre-filled, nothing suggested. It feels neutral and it's exhausting, the user makes forty decisions to do one thing. Neutral interfaces push all the cognitive work onto the person.", fixes: "defaults that are right most of the time, and clear primary actions. An interface with an opinion is faster even when the opinion is occasionally wrong, because being wrong occasionally is cheaper than deciding constantly." },
  { title: "Nobody watched anyone use it", desc: "It was demoed, approved by people who won't use it daily, and shipped. The confusions that kill adoption are almost never the ones the people who commissioned it predicted, and they surface in the first ten minutes of watching one real user.", fixes: "watching actual users, before launch, doing real tasks with no help. It's the cheapest research there is and it's the step most consistently skipped." },
];

const DESIGN_IN_BUILD = [
  { title: "We design the flow before the screens", desc: "What happens in what order, including the failure cases, empty states, errors, partial data, someone doing it wrong. Those states are most of real software and they're what gets skipped in mockups." },
  { title: "You use real builds every two weeks", desc: "Not clickable prototypes. Prototypes tell you whether people understand a concept; real use tells you whether they can do the job, and only the second one predicts adoption." },
  { title: "Nothing is designed that can't be built", desc: "Same team, so the compromise conversation happens at design time rather than being made silently by a developer at 11pm." },
  { title: "Visual design is deliberately restrained", desc: "Business software should be legible, consistent, fast, and accessible. Ambitious visual concepts age badly and slow people down. If you want something visually distinctive, that's a studio engagement and we'll say so." },
];

const AUDIT_GETS = [
  { title: "A prioritised list of specific problems", desc: "Each with the screen, what goes wrong, why, and roughly what it costs in time or errors. Not “improve information hierarchy,” the actual thing, on the actual screen." },
  { title: "Fixes sorted by effort and impact", desc: "So you can see which are an afternoon and which are a rebuild. Most lists are heavily weighted toward the afternoon end, which is the useful discovery." },
  { title: "A recorded walkthrough", desc: "Of the sessions, so the people who'll implement the fixes can see what happened rather than reading about it." },
  { title: "A straight answer on whether it's worth redesigning at all", desc: "Sometimes the interface is fine and the real problem is the process, the data quality, or that the system solves a problem people don't have. We'll say so, and that answer saves more money than the audit costs." },
];

const DESIGN_FOR = [
  { title: "Internal tools and admin panels", desc: "Used all day, by the same people, for the same tasks. Speed and muscle memory matter more than anything else here." },
  { title: "Client and vendor portals", desc: "Used occasionally, by people who won't be trained and won't try twice. Obviousness matters more than efficiency." },
  { title: "Dashboards and data interfaces", desc: "Where the hard part is hierarchy: what's on screen first, what's one click away, and what shouldn't be there at all.", link: { href: "/services/custom-dashboards", label: "Dashboards and data interfaces" } },
  { title: "Field and mobile tools", desc: "Used standing up, outdoors, in gloves, on old phones. Large targets, high contrast, minimal typing, and a design that assumes bad conditions rather than ideal ones." },
];

const FAQS = [
  { q: "Can we hire you for design only?", a: "Not for design-only builds, we don't produce Figma files for someone else to implement, because designs handed over without the team who'll build them tend to get quietly changed in development. The UX audit is genuinely standalone: you get a written report and you're free to take it anywhere." },
  { q: "Do you do branding and logos?", a: "No. That's a different discipline and you should hire a studio that does it properly. We work within a brand you already have, or with restrained defaults if you don't yet." },
  { q: "We have designs already. Will you build from them?", a: "Yes, and it's common. We'll flag anything that's expensive to build relative to its value or that misses a state, empty, error, loading, partial data, before we start, so the conversation happens at quote stage rather than mid-build." },
  { q: "How much does a UX audit cost?", a: "$399, and it takes about a week. That includes sessions with three to five of your real users, a prioritised written report, and a recorded walkthrough. If it leads to a build with us, the fee comes off the build." },
  { q: "Will a redesign fix our adoption problem?", a: "Sometimes. Sometimes the interface is fine and the problem is that the system solves something people don't actually need, or that the data in it isn't trusted. The audit is designed to tell you which, because spending a redesign budget on a non-design problem is a common and expensive mistake." },
  { q: "Do you do user research?", a: "Task-focused research as part of design and audits, watching people work, understanding the sequence, testing with real users. Not large-scale generative research, ethnographic studies, or survey programmes. Those need a dedicated research practice." },
  { q: "Is your design accessible?", a: "We build to WCAG AA, keyboard operation, contrast, focus states, screen reader semantics. For business software this isn't only compliance: the same choices that make an interface usable with a screen reader tend to make it faster for everyone." },
  { q: "What if we want something visually distinctive?", a: "Then engage a design studio and bring us the result, we build from external designs regularly and well. Our visual work is deliberately restrained because that's what business software should be, and it's an honest limit rather than a philosophy we'd defend in every context." },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Design for software people have to use, not software they chose",
  description: "Design for software people have to use, not choose. UX audits and product design built into every system we ship, so your team adopts it instead of avoiding it.",
  author: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
  publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://spaciva.tech" },
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  mainEntityOfPage: "https://spaciva.tech/guides/ux-for-internal-software",
};

const OFFER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "UX Audit",
  description: "A one-week UX audit: sessions with three to five real users, a prioritised effort-and-impact report, and a recorded walkthrough.",
  price: "399",
  priceCurrency: "USD",
  url: "https://spaciva.tech/guides/ux-for-internal-software",
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
    { "@type": "ListItem", position: 2, name: "UI/UX Design", item: "https://spaciva.tech/guides/ux-for-internal-software" },
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

export default function UxForInternalSoftwareClient() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-clip selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFER_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* Hero + self-diagnosis — D-2's adaptation of D's decision-tool device: a scannable
          recognition list rather than an interactive tool, real semantic text throughout. */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 -z-10" />

        <div className="max-w-[820px] mx-auto px-5 lg:px-10 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              UI/UX Design
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Design for software people have to use, not software they chose
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-[680px] mx-auto">
              Consumer apps compete for attention. Business software doesn&apos;t, your team has to open it either way. That changes what design is for: not persuading anyone to come back, but making sure the person who has to do this fourteen times today can do it without thinking. Most internal software fails at that, and the symptoms are consistent.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="bg-white border border-slate-200 rounded-[1.5rem] shadow-lg overflow-hidden text-left">
              <table className="w-full border-collapse">
                <caption className="sr-only">Common symptoms of business software with a design problem, and what each usually means</caption>
                <thead>
                  <tr className="border-b border-slate-200">
                    <th scope="col" className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 text-left w-1/2">What you&apos;re seeing</th>
                    <th scope="col" className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#7C3AED] text-left w-1/2 border-l border-slate-100">What it usually means</th>
                  </tr>
                </thead>
                <tbody>
                  {SYMPTOMS.map((row, idx) => (
                    <tr key={row.seeing} className={idx > 0 ? "border-t border-slate-100" : ""}>
                      <td className="px-5 py-4 text-sm font-bold text-slate-900 align-top">{row.seeing}</td>
                      <td className="px-5 py-4 text-sm text-slate-600 align-top border-l border-slate-100">{row.means}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <p className="mt-6 text-sm text-slate-500 max-w-[600px] mx-auto">
            None of these are training problems, though they&apos;re usually treated as one. All four are design problems with specific, findable causes.
          </p>
        </div>
      </section>

      {/* What we're not — the credibility engine. Equal weight both columns, no icons,
          no muted styling on the right, per the explicit "must not drift" instruction. */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Let&apos;s be precise about what this is</h2>
            <p className="text-lg text-slate-600">Design agencies and development firms both say &quot;UI/UX.&quot; They usually mean different things, and it&apos;s worth being clear which one this is.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What we do</h3>
              <div className="flex flex-col gap-7">
                {WE_DO.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-6 text-slate-900">What we&apos;re not</h3>
              <div className="flex flex-col gap-7">
                {WE_ARENT.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#7C3AED] bg-[#F5F3FF] rounded-r-2xl px-6 py-6 md:px-8 md:py-8 text-lg md:text-xl font-bold text-slate-900 leading-snug max-w-3xl">
            We design business software so it&apos;s fast to use for people who use it every day. That&apos;s a narrower claim than &quot;UI/UX design&quot; and it&apos;s the one we can actually make.
          </blockquote>
        </div>
      </section>

      {/* Why business software gets avoided — the longest section, landing target for the
          symptom-phrased keyword cluster */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Four reasons a system nobody asked for gets abandoned</h2>
            <p className="text-lg text-slate-600">Software your team is required to use fails differently from software people choose. The failures are consistent enough to name.</p>
          </div>

          <div className="flex flex-col">
            {WHY_AVOIDED.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={cn("py-8", idx > 0 && "border-t border-slate-200")}
              >
                <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-[720px] mb-3">{item.desc}</p>
                <p className="text-slate-800 leading-relaxed max-w-[720px]">
                  <strong className="text-slate-900">What fixes it: </strong>{item.fixes}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-slate-600 max-w-[720px]">
            For <Link href="/services/internal-business-tools" className="font-bold text-[#7C3AED] hover:underline">internal tools</Link> and{" "}
            <Link href="/services/client-portals" className="font-bold text-[#7C3AED] hover:underline">portals</Link>, watching real users before launch is the difference between adoption and a quiet return to email.
          </p>
        </div>
      </section>

      {/* Design inside a build — compact, context rather than the offer, the pillar carries
          the weight */}
      <section className="py-16 md:py-24 border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-slate-900">How design works when it&apos;s part of the build</h2>
            <p className="text-lg text-slate-600">You don&apos;t commission this separately. It&apos;s how every system we ship gets made.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {DESIGN_IN_BUILD.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="p-6 rounded-2xl border border-slate-200 bg-white"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 max-w-[680px]">
            Process, stack, pricing, and what you receive on handover are all on{" "}
            <Link href="/services/web-applications" className="font-bold text-[#7C3AED] hover:underline">web applications</Link>, design isn&apos;t priced separately because it isn&apos;t optional.
          </p>
        </div>
      </section>

      {/* The UX audit — D-2's one permitted priced offer, real prominence, distinct treatment */}
      <section id="audit" className="py-16 md:py-24 bg-slate-50 border-t border-[#E2E8F0] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="rounded-[2rem] border-2 border-[#7C3AED]/30 bg-white shadow-xl p-8 sm:p-10 md:p-12">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">A UX audit</h2>
              <span className="text-2xl font-extrabold text-[#7C3AED]">$399</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">One week</span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-[680px]">
              You have an application. People use it reluctantly, or don&apos;t. You need to know why, specifically, before you spend anything on fixing it.
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-2">What we do</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[680px]">
                We work through the system doing the tasks your team actually does, then <strong className="text-slate-900">watch three to five of your real users</strong> do the same with no help. Not a heuristic review from a checklist, a checklist tells you what&apos;s unconventional, and watching people tells you what&apos;s costing them time.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">What you get</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {AUDIT_GETS.map((item) => (
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
                <strong className="text-slate-900">Nothing.</strong> The report is yours. Hand it to your own developers, another agency, or nobody. We&apos;d rather run audits that go elsewhere than have people assume the recommendation is shaped by wanting the follow-on work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <AnimatedCtaButton href="/contact" label="Book a UX audit" hoverLabel="Let's Talk" />
            </div>
            <p className="mt-4 text-sm text-slate-500">
              If the fixes point toward a rebuild,{" "}
              <Link href="/services/web-applications" className="font-bold text-[#7C3AED] hover:underline">web applications</Link>{" "}
              covers how that works, and the audit fee comes off the build.
            </p>
          </div>
        </div>
      </section>

      {/* What we design for — orientation, one line each */}
      <section className="py-16 md:py-20 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">The kinds of interfaces this applies to</h2>
          <div className="flex flex-col gap-5">
            {DESIGN_FOR.map((item) => (
              <p key={item.title} className="text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900">
                  {item.link ? (
                    <Link href={item.link.href} className="hover:text-[#7C3AED] hover:underline">{item.title}</Link>
                  ) : item.title}
                  {" "}&mdash;
                </span>{" "}
                {item.desc}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — plain two-column list, matching D-1 and the B pages */}
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

      {/* Closing CTA — light bordered panel. Primary to Web Applications, audit as the
          secondary path — D-2's one departure from D-1, both paths legitimate here. */}
      <section className="px-5 lg:px-10 max-w-4xl mx-auto py-16 md:py-24">
        <div className="relative rounded-[2rem] border-2 border-[#E2E8F0] bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/25">
            <Code2 className="w-7 h-7 text-white" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
            Building something? Design is already included.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            If you&apos;re considering a build, the design work is part of it, process, pricing, and what you receive are all on the web applications page.
          </p>
          <div className="flex flex-col items-center gap-4">
            <AnimatedCtaButton href="/services/web-applications" label="See how we build web applications" hoverLabel="Let's Talk" />
            <Link href="#audit" className="text-sm font-semibold text-slate-500 hover:text-[#7C3AED] transition-colors">
              Already have an application people avoid? Book a UX audit, $399, one week, and the report is yours regardless.
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
