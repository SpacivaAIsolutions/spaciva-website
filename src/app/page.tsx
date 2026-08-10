import type { Metadata } from "next";
import CreativeLandingPage from "@/components/CreativeLandingPage";

export const metadata: Metadata = {
  title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
  description: "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
    description: "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
    url: "https://spaciva.tech",
    siteName: "Spaciva AI",
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
            "name": "Spaciva AI",
            "url": "https://spaciva.tech",
            "logo": "https://spaciva.tech/logos/darklogo.svg",
            "description": "AI automation and software engineering for agencies, professional-services firms, and DTC brands. Custom AI agents, internal tools, and monthly-monitored automations, based in Ahmedabad, India.",
            "email": "hello@spaciva.tech",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "areaServed": ["IN", "AE", "GB", "US"],
            "sameAs": [
              "https://www.linkedin.com/company/spaciva-ai/",
              "https://www.instagram.com/spaciva.tech/"
            ],
            "foundingDate": "2023",
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": "5-15" }
          }),
        }}
      />

      <CreativeLandingPage />
    </main>
  );
}
