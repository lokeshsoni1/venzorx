import React from "react";
import type { Metadata } from "next";
import StandaloneFAQPage from "./faq-client";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Get unfiltered answers about our bespoke development process, pricing, timelines, code ownership, and support models.",
  alternates: {
    canonical: "/faq"
  }
};

export default function FAQPage() {
  return <StandaloneFAQPage />;
}
