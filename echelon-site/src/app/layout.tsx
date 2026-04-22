import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echelon International — Integrated Advisory for Hospitality & Real Estate",
  description:
    "Echelon International is an integrated advisory firm specializing in hotels, wellness & spa destinations, and real estate development — from strategy and feasibility to capital and commercialization.",
  keywords: [
    "hospitality advisory",
    "wellness development",
    "real estate strategy",
    "hotel consulting",
    "medical spa development",
    "investment advisory",
  ],
  openGraph: {
    title: "Echelon International",
    description: "Hotels. Wellness. Real Estate. One Integrated Strategic System.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
