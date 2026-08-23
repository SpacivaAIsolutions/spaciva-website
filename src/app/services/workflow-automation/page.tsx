import type { Metadata } from "next";
import WorkflowAutomationClient from "./WorkflowAutomationClient";

export const metadata: Metadata = {
  title: "Workflow Automation Services for Growing Teams | Spaciva AI",
  description:
    "We automate the repetitive work eating your team's week: onboarding, reporting, data entry, follow-ups. Fixed price, live in 2 weeks, monitored monthly.",
  alternates: {
    canonical: "/services/workflow-automation",
  },
};

export default function WorkflowAutomationPage() {
  return <WorkflowAutomationClient />;
}
