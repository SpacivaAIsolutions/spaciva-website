import type { Metadata } from "next";
import WorkflowAutomationClient from "./WorkflowAutomationClient";

const TITLE = "Workflow Automation Services for Growing Teams | Spaciva AI";
const DESCRIPTION =
  "We automate the repetitive work eating your team's week: onboarding, reporting, data entry, follow-ups. Fixed price, a single workflow live in about 2 weeks, monitored monthly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/workflow-automation",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/workflow-automation",
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

export default function WorkflowAutomationPage() {
  return <WorkflowAutomationClient />;
}
