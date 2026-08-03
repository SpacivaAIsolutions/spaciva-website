import type { Metadata } from "next";
import EnergyUtilitiesClient from "./EnergyUtilitiesClient";

export const metadata: Metadata = {
  title: "Energy & Utilities Software Development Company | Smart Grid & AI Solutions | Spaciva",
  description: "Spaciva develops custom software for energy and utility companies, including smart grid platforms, renewable energy management systems, utility billing software, IoT monitoring, AI-powered analytics, and operational dashboards.",
  alternates: {
    canonical: "/industries/energy-utilities",
  },
};

export default function EnergyUtilitiesPage() {
  return <EnergyUtilitiesClient />;
}
