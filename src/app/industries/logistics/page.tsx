import type { Metadata } from "next";
import LogisticsClient from "./LogisticsClient";

export const metadata: Metadata = {
  title: "Logistics Software Development Company | Supply Chain & Fleet Management Solutions | Spaciva",
  description: "Spaciva develops custom logistics software, transportation management systems (TMS), warehouse management software (WMS), fleet management platforms, AI-powered logistics solutions, and supply chain applications for logistics businesses.",
  alternates: {
    canonical: "/industries/logistics",
  },
};

export default function LogisticsPage() {
  return <LogisticsClient />;
}
