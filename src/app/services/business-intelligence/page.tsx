import type { Metadata } from "next";
import BusinessIntelligenceClient from "./BusinessIntelligenceClient";

const TITLE = "Business Intelligence & Analytics Development | Spaciva AI";
const DESCRIPTION =
  "We build the metric layer and self-serve analytics on top of your data — modelled, version-controlled, and governed. No reseller commissions. Fixed price, and you own the whole stack.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/business-intelligence",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/business-intelligence",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function BusinessIntelligencePage() {
  return <BusinessIntelligenceClient />;
}
