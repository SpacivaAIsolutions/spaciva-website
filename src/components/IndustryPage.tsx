import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import TrustStrip from "@/components/TrustStrip";
import CaseStudyCards, { type CaseStudySlug } from "@/components/CaseStudyCards";
import { INDUSTRY_LINKS, SERVICE_GROUPS } from "@/lib/navigation";

export type IndustryData = {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  intro: string;
  trustLine: string;
  problemsHeading: string;
  problems: { title: string; desc: string }[];
  offersHeading: string;
  offersIntro?: string;
  // Every offer maps to a live service page; the template links each one.
  offers: { title: string; desc: string; href: string }[];
  proof: { heading?: string; intro: string; studies: CaseStudySlug[] };
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
};

const STEPS = [
  { title: "30-minute call", desc: "We look at the workflow, tell you honestly whether it's worth automating, and what it would take." },
  { title: "Fixed scope and price", desc: "A written scope with a fixed price and timeline. NDA before discovery if you need one." },
  { title: "Build in short loops", desc: "Most automations go live in 2 to 3 weeks; custom applications take 6 to 12. A written update every Friday." },
  { title: "Monitored monthly", desc: "Every system ships with a monthly plan and a named engineer who knows your setup. You own the code." },
];

const serviceLabel = (href: string) =>
  SERVICE_GROUPS.flatMap((g) => g.items).find((item) => item.href === href)?.label.replace(/\s*\(.*\)$/, "") ?? href;

export default function IndustryPage({ data }: { data: IndustryData }) {
  const url = `https://www.spaciva.tech/industries/${data.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spaciva.tech/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.spaciva.tech/#industries" },
        { "@type": "ListItem", position: 3, name: data.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
  const relatedIndustries = INDUSTRY_LINKS.filter((i) => i.href !== `/industries/${data.slug}`);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              {data.eyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">{data.h1}</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">{data.intro}</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
              <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
              <a href="#what-we-build" className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">
                See what we build
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm font-semibold text-slate-500">{data.trustLine}</p>
          </div>
        </div>
      </section>

      <TrustStrip sectionClassName="py-10 bg-white border-y border-[#E2E8F0]" fadeFrom="white" />

      {/* Where the hours go */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-slate-900 max-w-3xl">{data.problemsHeading}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.problems.map((p) => (
              <div key={p.title} className="rounded-3xl border border-[#E2E8F0] bg-slate-50 p-6 md:p-8">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build — each card links to the service page that covers it */}
      <section id="what-we-build" className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">{data.offersHeading}</h2>
            {data.offersIntro && <p className="text-lg text-slate-600">{data.offersIntro}</p>}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.offers.map((o) => (
              <Link
                key={o.title}
                href={o.href}
                className="group flex flex-col bg-white p-6 md:p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C4B5FD] transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{o.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{o.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#7C3AED]">
                  {serviceLabel(o.href)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyCards
        studies={data.proof.studies}
        heading={data.proof.heading}
        intro={data.proof.intro}
        sectionClassName="py-16 md:py-24 bg-white"
        showTags
      />

      {/* How it runs */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-slate-900">How an engagement runs</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-white rounded-3xl border border-[#E2E8F0] p-6">
                <span className="text-2xl font-light text-[#7C3AED] tabular-nums">0{i + 1}</span>
                <h3 className="font-bold text-slate-900 text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-slate-600">
            Not sure what you need yet?{" "}
            <Link href="/services/discovery-sprint" className="font-bold text-[#7C3AED] hover:underline">
              Start with a paid scoping sprint
            </Link>{" "}
            and leave with a specification you own.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 lg:px-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-slate-900 text-center">Common questions</h2>
        {data.faqs.map((faq) => (
          <details key={faq.q} className="group border border-[#E2E8F0] bg-white rounded-2xl mb-4 shadow-sm hover:border-[#C4B5FD] transition-colors">
            <summary className="px-6 py-5 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="flex-1 min-w-0 pr-3 font-bold text-base sm:text-lg text-[#0F172A]">{faq.q}</span>
              <ChevronDown className="w-5 h-5 shrink-0 text-[#7C3AED] transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-5 text-[#334155] leading-relaxed">{faq.a}</div>
          </details>
        ))}
      </section>

      {/* Related */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-lg font-bold mb-6 text-slate-900">Services used for {data.name.toLowerCase()}</h2>
            <ul className="space-y-3">
              {data.offers.map((o) => (
                <li key={o.href}>
                  <Link href={o.href} className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">{serviceLabel(o.href)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6 text-slate-900">Other industries</h2>
            <ul className="space-y-3">
              {relatedIndustries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-slate-600 hover:text-[#7C3AED] transition-colors font-medium">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">{data.ctaHeading}</h2>
            <p className="text-lg text-white/70 mb-10 font-medium">{data.ctaBody}</p>
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
