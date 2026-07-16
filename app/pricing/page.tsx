import React from "react";
import type { Metadata } from "next";
import StandalonePricingPage from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Bespoke digital architecture and micro-SaaS engineering pricing. Secure an unfair market advantage with our custom-built systems.",
  alternates: {
    canonical: "/pricing"
  }
};

export default function PricingPage() {
  return <StandalonePricingPage />;
}
