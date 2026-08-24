import type { Metadata } from "next";
import CrmDevelopmentClient from "./CrmDevelopmentClient";

export const metadata: Metadata = {
  title: "Custom CRM Development for Businesses That Don't Fit | Spaciva",
  description:
    "When your process doesn't fit HubSpot or Salesforce, we build the CRM that does — your data model, your workflow, your code, fully owned by you.",
  alternates: {
    canonical: "/services/crm-development",
  },
};

export default function CrmDevelopmentPage() {
  return <CrmDevelopmentClient />;
}
