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
    url: "https://www.spaciva.tech",
    siteName: "Spaciva AI",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Agencies & DTC Brands | Spaciva AI",
    description: "Spaciva builds custom AI agents and automations for agencies, professional-services firms, and e-commerce brands in the US and UK. Fixed scope, fixed price, monitored monthly.",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      {/* Organisation + WebSite schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Spaciva AI",
            "url": "https://www.spaciva.tech",
            "logo": "https://www.spaciva.tech/logos/darklogo.svg",
            "description": "AI automation and software engineering for agencies, professional-services firms, and DTC brands. Custom AI agents, internal tools, and monthly-monitored automations, based in Ahmedabad, India.",
            "email": "connect@spaciva.tech",
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
            "numberOfEmployees": { "@type": "QuantitativeValue", "value": 8 }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Spaciva AI",
            "url": "https://www.spaciva.tech",
            "publisher": { "@type": "Organization", "name": "Spaciva AI", "url": "https://www.spaciva.tech" }
          }),
        }}
      />

      <CreativeLandingPage />
    </main>
  );
}
