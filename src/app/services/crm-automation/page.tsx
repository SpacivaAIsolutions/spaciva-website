import type { Metadata } from "next";
import CrmAutomationClient from "./CrmAutomationClient";

export const metadata: Metadata = {
  title: "CRM Automation & Data Cleanup Services | Spaciva AI",
  description:
    "We clean up your CRM data, connect it to the systems it can't reach, and automate what your team still does by hand. Fixed price, live in weeks.",
  alternates: {
    canonical: "/services/crm-automation",
  },
};

export default function CrmAutomationPage() {
  return <CrmAutomationClient />;
}
