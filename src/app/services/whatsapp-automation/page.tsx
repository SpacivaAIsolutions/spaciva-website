import type { Metadata } from "next";
import WhatsAppAutomationClient from "./WhatsAppAutomationClient";

export const metadata: Metadata = {
  title: "WhatsApp Automation & Business API Development | Spaciva AI",
  description:
    "WhatsApp support, order updates, and lead capture built on the official Business API: compliant, integrated with your systems, and costed before you commit.",
  alternates: {
    canonical: "/services/whatsapp-automation",
  },
};

export default function WhatsAppAutomationPage() {
  return <WhatsAppAutomationClient />;
}
