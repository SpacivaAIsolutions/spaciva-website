import type { Metadata } from "next";
import FintechClient from "./FintechClient";

export const metadata: Metadata = {
  title: "FinTech Software Development Company | Banking, Payments & AI Solutions | Spaciva",
  description: "Spaciva develops secure FinTech software including payment platforms, digital banking, accounting integrations, lending systems, wealth management solutions, AI-powered financial automation, and embedded finance applications.",
  alternates: {
    canonical: "/industries/fintech",
  },
};

export default function FintechPage() {
  return <FintechClient />;
}
