import type { Metadata } from "next";
import InventoryManagementClient from "./InventoryManagementClient";

const TITLE = "Custom Inventory Management Software & Sync | Spaciva AI";
const DESCRIPTION =
  "We build inventory systems that keep one accurate stock number across every channel and location — sync, reorder logic, barcode scanning. Fixed price, you own it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/services/inventory-management",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://spaciva.tech/services/inventory-management",
    siteName: "Spaciva AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function InventoryManagementPage() {
  return <InventoryManagementClient />;
}
