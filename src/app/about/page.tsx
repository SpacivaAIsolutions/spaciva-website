import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const TITLE = "About Spaciva AI — AI Automation & Software Engineers";
const DESCRIPTION =
  "Spaciva is an AI automation and software engineering team in Ahmedabad, India, building custom AI agents, internal tools, and automations for agencies, professional-services firms, and e-commerce brands in the US and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/about",
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

export default function AboutPage() {
  return <AboutClient />;
}
