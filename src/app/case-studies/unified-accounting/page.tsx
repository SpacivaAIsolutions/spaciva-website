import type { Metadata } from "next";
import UnifiedAccountingClient from "./UnifiedAccountingClient";

export const metadata: Metadata = {
  title: "Unified Accounting Integration Case Study | Spaciva",
  description: "How Spaciva built a multi-platform accounting sync layer for 12+ ledgers — QuickBooks, Xero, Sage, NetSuite, Business Central, and more — cutting manual entry by 70%.",
  alternates: {
    canonical: "/case-studies/unified-accounting",
  },
};

export default function UnifiedAccountingPage() {
  return <UnifiedAccountingClient />;
}
