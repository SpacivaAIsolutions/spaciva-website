import type { Metadata } from "next";
import CrmDevelopmentClient from "./CrmDevelopmentClient";

const TITLE = "Custom CRM Development Services | Spaciva AI";
const DESCRIPTION =
  "When your process doesn't fit HubSpot or Salesforce, we build the CRM that does — your data model, your workflow, your code, fully owned by you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/crm-development",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/crm-development",
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

export default function CrmDevelopmentPage() {
  return <CrmDevelopmentClient />;
}
