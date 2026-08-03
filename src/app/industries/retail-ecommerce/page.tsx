import type { Metadata } from "next";
import RetailEcommerceClient from "./RetailEcommerceClient";

export const metadata: Metadata = {
  title: "Retail & E-commerce Software Development Company | AI Commerce Solutions | Spaciva",
  description: "Spaciva builds custom retail and e-commerce software, AI shopping assistants, omnichannel platforms, inventory management systems, POS software, and digital commerce solutions for modern businesses.",
  alternates: {
    canonical: "/industries/retail-ecommerce",
  },
};

export default function RetailEcommercePage() {
  return <RetailEcommerceClient />;
}
