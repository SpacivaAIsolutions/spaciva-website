import type { Metadata } from "next";
import CrmAutomationClient from "./CrmAutomationClient";

const TITLE = "CRM Automation & Data Cleanup Services | Spaciva AI";
const DESCRIPTION =
  "We clean up your CRM data, connect it to the systems it can't reach, and automate what your team still does by hand. Fixed price, live in weeks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/crm-automation",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/crm-automation",
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

export default function CrmAutomationPage() {
  return <CrmAutomationClient />;
}
