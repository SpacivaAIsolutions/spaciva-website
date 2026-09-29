import type { Metadata } from "next";
import EmailInboxClient from "./EmailInboxClient";

export const metadata: Metadata = {
  title: "Inbox & Email Automation for Busy Teams | Spaciva AI",
  description:
    "We sort, route, and draft replies for the inboxes your team lives in. Nothing sends without your rules. Fixed price, live in 2 weeks, monitored monthly.",
  alternates: {
    canonical: "/services/email-inbox-automation",
  },
};

export default function EmailInboxPage() {
  return <EmailInboxClient />;
}
