import type { Metadata } from "next";
import AiMonitoringMaintenanceClient from "./AiMonitoringMaintenanceClient";

const TITLE = "AI Monitoring & Maintenance Retainer | Spaciva AI";
const DESCRIPTION =
  "Monitoring, tuning, model updates and fixes on AI systems and automations — ours or someone else's. Monthly, no lock-in, a named engineer who knows it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/ai-monitoring-maintenance",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/ai-monitoring-maintenance",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AiMonitoringMaintenancePage() {
  return <AiMonitoringMaintenanceClient />;
}
