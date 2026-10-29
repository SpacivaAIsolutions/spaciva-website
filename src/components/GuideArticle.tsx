import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import { GUIDES } from "@/lib/navigation";

export type GuideData = {
  slug: string;
  headline: string;
  description: string;
  intro: string;
  published: string;
  updated?: string;
  sections: { heading: string; body: ReactNode }[];
  // The service page this guide expands on; linked in a callout and from the closing CTA.
  service: { label: string; href: string; pitch: string };
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
};

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// Shared shell for long-form guides: visible publish date, Article + FAQ + breadcrumb schema,
// a link back to the service page the guide supports, and links to the other guides.
export default function GuideArticle({ data }: { data: GuideData }) {
  const url = `https://www.spaciva.tech/guides/${data.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.headline,
      description: data.description,
      author: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
      publisher: { "@type": "Organization", name: "Spaciva AI", url: "https://www.spaciva.tech" },
      datePublished: data.published,
      dateModified: data.updated ?? data.published,
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spaciva.tech/" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.spaciva.tech/guides" },
        { "@type": "ListItem", position: 3, name: data.headline, item: url },
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
  const otherGuides = GUIDES.filter((g) => g.href !== `/guides/${data.slug}`);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-slate-50 border-b border-[#E2E8F0]">
        <div className="max-w-[820px] mx-auto px-5 lg:px-10">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500 mb-6">
            <Link href="/guides" className="hover:text-[#7C3AED] transition-colors">Guides</Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">{data.headline}</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">{data.intro}</p>
          <p className="text-sm text-slate-500">
            By the Spaciva AI team · Published <time dateTime={data.published}>{formatDate(data.published)}</time>
            {data.updated && (
              <> · Updated <time dateTime={data.updated}>{formatDate(data.updated)}</time></>
            )}
          </p>
        </div>
      </section>

      <article className="max-w-[820px] mx-auto px-5 lg:px-10 py-12 md:py-16 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_p]:mb-5 [&_li]:text-slate-700 [&_li]:leading-relaxed [&_a]:font-bold [&_a]:text-[#7C3AED] [&_a:hover]:underline">
        {data.sections.map((s) => (
          <section key={s.heading} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5 text-slate-900">{s.heading}</h2>
            {s.body}
          </section>
        ))}

        <aside className="rounded-3xl border border-[#7C3AED]/30 bg-gradient-to-br from-[#F5F3FF] to-white p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] !mb-2">Related service</p>
          <p className="!text-slate-900 font-bold text-xl !mb-2">{data.service.label}</p>
          <p className="!mb-4">{data.service.pitch}</p>
          <Link href={data.service.href} className="inline-flex items-center gap-1.5">
            Read about {data.service.label.toLowerCase()}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </aside>
      </article>

      <section className="max-w-[820px] mx-auto px-5 lg:px-10 pb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-slate-900">Common questions</h2>
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

      <section className="bg-slate-50 border-y border-[#E2E8F0] py-12">
        <div className="max-w-[820px] mx-auto px-5 lg:px-10">
          <h2 className="text-lg font-bold mb-6 text-slate-900">More guides</h2>
          <ul className="space-y-4">
            {otherGuides.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="font-bold text-slate-900 hover:text-[#7C3AED] transition-colors">{g.title}</Link>
                <p className="text-sm text-slate-500">{g.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">{data.ctaHeading}</h2>
            <p className="text-lg text-white/70 mb-10 font-medium">{data.ctaBody}</p>
            <AnimatedCtaButton href="/contact" label="Book a 30-minute call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
