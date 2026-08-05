import type { Metadata } from "next";
import PartsFlowClient from "./PartsFlowClient";

export const metadata: Metadata = {
  title: "PartsFlow Case Study | Spaciva",
  description: "How Spaciva built PartsFlow: a spare-parts inventory platform managing 5,000+ SKUs with bulk Excel/CSV imports and real-time QuickBooks reconciliation.",
  alternates: {
    canonical: "/case-studies/partsflow",
  },
};

export default function PartsFlowPage() {
  return <PartsFlowClient />;
}
