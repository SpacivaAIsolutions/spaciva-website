import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Spaciva — The AI Automation Team Behind Agencies & DTC Brands",
  description:
    "Spaciva is an AI automation and software engineering team in Ahmedabad, India, building custom AI agents, internal tools, and automations for agencies, professional-services firms, and e-commerce brands in the US and UK.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
