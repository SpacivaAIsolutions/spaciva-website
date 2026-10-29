import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";
import CaseStudyCards, { CASE_STUDIES } from "@/components/CaseStudyCards";

const TITLE = "Case Studies: AI Automation & Custom Software | Spaciva AI";
const DESCRIPTION =
  "Production systems Spaciva has built, with the numbers clients measured: 70% less manual data entry on a 12+ platform accounting sync, 80% faster data entry on a 5,000+ SKU inventory platform.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/case-studies",
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

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Spaciva AI case studies",
  itemListElement: Object.values(CASE_STUDIES).map((cs, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: cs.title,
    url: `https://www.spaciva.tech${cs.href}`,
  })),
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <section className="relative pt-28 pb-4 md:pt-40 md:pb-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">
              Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Systems we&apos;ve built, and what they changed
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Each study names the problem, what we built, and the number the client measured afterwards. More are on the way as clients approve them.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyCards heading="All case studies" sectionClassName="py-12 md:py-16 bg-slate-50" showTags />

      <section className="px-5 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="bg-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7C3AED]/30 via-[#0F172A]/0 to-[#0F172A]/0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">Want numbers like these?</h2>
            <p className="text-lg text-white/70 mb-10 font-medium">
              Book a 30-minute call. We&apos;ll look at your workflow and tell you honestly what&apos;s worth building.
            </p>
            <AnimatedCtaButton href="/contact" label="Book a discovery call" hoverLabel="Let's Talk" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
