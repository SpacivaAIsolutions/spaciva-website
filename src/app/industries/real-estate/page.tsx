import type { Metadata } from "next";
import RealEstateClient from "./RealEstateClient";

export const metadata: Metadata = {
  title: "Real Estate Software Development Company | PropTech & AI Solutions | Spaciva",
  description: "Spaciva develops custom real estate software, AI-powered PropTech solutions, property management systems, CRM platforms, real estate portals, and mobile applications for brokers, builders, and property developers.",
  alternates: {
    canonical: "/industries/real-estate",
  },
};

export default function RealEstatePage() {
  return <RealEstateClient />;
}
