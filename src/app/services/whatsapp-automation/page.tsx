import type { Metadata } from "next";
import WhatsAppAutomationClient from "./WhatsAppAutomationClient";

const TITLE = "WhatsApp Automation & Business API Development | Spaciva AI";
const DESCRIPTION =
  "WhatsApp support, order updates, and lead capture built on the official Business API: compliant, integrated with your systems, and costed before you commit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/whatsapp-automation",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.spaciva.tech/services/whatsapp-automation",
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

export default function WhatsAppAutomationPage() {
  return <WhatsAppAutomationClient />;
}
