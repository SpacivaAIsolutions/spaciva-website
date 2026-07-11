import type { Metadata } from "next";
import RedesignedHome from "@/components/RedesignedHome";

export const metadata: Metadata = {
  title: "Spaciva Ai",
  description: "SPACIVA is an AI product engineering company specializing in Generative AI, Enterprise Software, and Scalable SaaS Platforms.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SPACIVA AI",
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
            "logo": "https://spaciva.tech/spaciva-logo.png",
            "description": "Custom AI automation agents, CRM platforms, LMS systems, and web applications for businesses in India, UAE, UK & USA.",
            "email": "spacivaaisolution@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "areaServed": ["IN", "AE", "GB", "US"],
            "sameAs": [],
            "foundingDate": "2023",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "5-15" }
          }),
        }}
      />

      <RedesignedHome />
    </main>
  );
}
