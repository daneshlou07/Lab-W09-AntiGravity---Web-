import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLAIM READY — Free Warranty Claim Checklist | Curated by Danesh Lou",
  description:
    "A free, factual checklist for anyone about to file a warranty claim. Decided on records: keep yours, and ask for theirs in writing. Curated by Danesh Lou.",
  keywords: [
    "warranty claim",
    "consumer rights",
    "warranty checklist",
    "appliance warranty",
    "electronics repair",
    "claim ready",
  ],
  authors: [{ name: "Danesh Lou" }],
  openGraph: {
    title: "CLAIM READY — Free Warranty Claim Checklist",
    description:
      "A free, factual checklist for anyone about to file a warranty claim. Curated by Danesh Lou.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
