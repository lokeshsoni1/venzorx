import React from "react";
import type { Metadata } from "next";
import StandaloneContactMonolithPage from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Our Engineers",
  description: "Initiate system design consultation with VenzorX. Connect via secure email or direct WhatsApp integration to eliminate technical roadblocks.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return <StandaloneContactMonolithPage />;
}
