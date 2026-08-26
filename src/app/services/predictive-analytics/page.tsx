import type { Metadata } from "next";
import PredictiveAnalyticsClient from "./PredictiveAnalyticsClient";

const TITLE = "Predictive Analytics & Forecasting Development | Spaciva AI";
const DESCRIPTION =
  "Churn, demand, and revenue forecasting built into your systems — with the baseline test first. If a simple model wins, we'll tell you and charge you less.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/predictive-analytics",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/predictive-analytics",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PredictiveAnalyticsPage() {
  return <PredictiveAnalyticsClient />;
}
