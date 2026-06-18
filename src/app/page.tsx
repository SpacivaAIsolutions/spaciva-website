import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InteractiveComparison from "@/components/InteractiveComparison";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import Portfolio from "@/components/Portfolio";
import CTASection from "@/components/CTASection";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & AI Product Engineering Company | SPACIVA",
  description: "SPACIVA is a technology and AI product engineering company specializing in Generative AI, Healthcare Technology, FinTech Solutions, Enterprise Software, and Scalable SaaS Platforms.",
  openGraph: {
    title: "SPACIVA — Technology & AI Product Engineering Company",
    description: "We design and build custom Generative AI, Healthcare Tech, FinTech, Enterprise Software, and Scalable SaaS Platforms engineered for your growth.",
    url: "https://spaciva.tech",
    siteName: "SPACIVA",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      {/* Organisation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SPACIVA",
            "url": "https://spaciva.tech",
            "logo": "https://spaciva.tech/spaciva-nav-dark.png",
            "description": "Custom AI automation agents, CRM platforms, LMS systems, and web applications for businesses in India, UAE, UK & USA.",
            "email": "spacivaaisolution@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "areaServed": ["IN","AE","GB","US"],
            "sameAs": [],
            "foundingDate": "2023",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "5-15" }
          }),
        }}
      />

      <Hero />

      {/* INFINITE LOGO TICKER */}
      <section className="py-12 border-y border-slate-100 bg-white overflow-hidden relative">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center justify-around min-w-full gap-16 px-8">
              {['OpenAI', 'Anthropic', 'LangChain', 'AWS', 'Vercel', 'Next.js', 'Google Cloud', 'Stripe'].map((tech) => (
                <div key={`${group}-${tech}`} className="flex items-center gap-2 text-2xl font-bold text-slate-800 tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
                   {tech}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* DSTUDIO-STYLE INTRO STATEMENT */}
      <section className="py-24 sm:py-36 bg-[var(--bg-primary)] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest leading-[1.15] text-[#0f172a]">
            At Spaciva, we craft exceptional <span className="italic text-slate-500 font-serif">digital ecosystems</span> with expertise in <span className="italic text-slate-500 font-serif">AI automation, UI/UX design, and scalable enterprise software.</span>
          </h2>
        </div>
      </section>

      <InteractiveComparison />
      
      <ExpertiseGrid />

      <Portfolio />

      <CTASection />
    </main>
  );
}
