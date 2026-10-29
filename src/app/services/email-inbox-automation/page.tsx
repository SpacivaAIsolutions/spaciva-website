import type { Metadata } from "next";
import EmailInboxClient from "./EmailInboxClient";

const TITLE = "Inbox & Email Automation for Busy Teams | Spaciva AI";
const DESCRIPTION =
  "We sort, route, and draft replies for the inboxes your team lives in. Nothing sends without your rules. Fixed price, live in 2 weeks, monitored monthly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/email-inbox-automation",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/email-inbox-automation",
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

export default function EmailInboxPage() {
  return <EmailInboxClient />;
}
