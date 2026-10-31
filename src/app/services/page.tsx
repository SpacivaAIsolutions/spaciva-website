import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import CaseStudyCards from "@/components/CaseStudyCards";
import { SERVICE_GROUPS } from "@/lib/navigation";

const TITLE = "AI Automation & Software Development Services | Spaciva AI";
const DESCRIPTION =
  "Every service Spaciva offers, in one place: AI agents and automation, custom software and internal tools, web and SaaS products, and cloud and data work. Fixed price, you own the code.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spaciva.tech/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.spaciva.tech/services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Spaciva AI services",
    itemListElement: SERVICE_GROUPS.flatMap((g) => g.items).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      url: `https://www.spaciva.tech${item.href}`,
    })),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      {SCHEMAS.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="relative pt-28 pb-12 md:pt-40 md:pb-16 bg-slate-50 overflow-hidden">
        <div className="absolute top-20 right-0 w-[260px] h-[260px] md:w-[600px] md:h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              What we build
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              We&apos;re not a full-service agency. AI automation comes first; the custom software, product, and data work is the engineering layer it runs on. Every build is fixed price, you own the code, and it&apos;s monitored monthly after launch.
            </p>
            <nav aria-label="Service groups" className="flex flex-wrap gap-3">
              {SERVICE_GROUPS.map((g, i) => (
                <a key={g.title} href={`#group-${i}`} className="px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-sm font-bold hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                  {g.shortTitle}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {SERVICE_GROUPS.map((group, i) => (
        <section key={group.title} id={`group-${i}`} className={`py-16 md:py-20 scroll-mt-24 ${i % 2 ? "bg-slate-50 border-y border-[#E2E8F0]" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-slate-900">{group.title}</h2>
              <p className="text-lg text-slate-600">{group.blurb}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#C4B5FD] transition-all"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#7C3AED] transition-colors">{item.label}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                  <ArrowRight className="mt-auto w-4 h-4 text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CaseStudyCards intro="Two production systems, with the numbers our clients measured." sectionClassName="py-16 md:py-24 bg-white" />

      <section className="px-5 lg:px-10 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">Not sure which one you need?</h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call and we&apos;ll point you at the right one, or tell you honestly that you don&apos;t need any of them yet.
            </p>
            <div className="flex flex-col items-center justify-center gap-6">
              <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
              <Link href="/services/discovery-sprint" className="text-white/70 font-medium underline decoration-white/30 underline-offset-4 hover:text-white transition-colors">
                Or start with a paid scoping sprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
