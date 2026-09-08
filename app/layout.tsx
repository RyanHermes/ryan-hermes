import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
config.autoAddCss = false;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Hermes | Software Development Engineer at Amazon",
  description:
    "Ryan Hermes is a Software Development Engineer on Amazon’s Payment Products team in Vancouver. Explore his projects, engineering experience, and background.",
  alternates: { canonical: "https://www.ryanhermes.ca" },
  keywords:
    "Ryan Hermes, developer, software engineer, full stack, React, Next.js, TypeScript, web development",
  authors: [{ name: "Ryan Hermes" }],
  creator: "Ryan Hermes",
  openGraph: {
    title: "Ryan Hermes | Software Development Engineer at Amazon",
    description:
      "Software Development Engineer at Amazon in Vancouver. Selected projects, experience, and background.",
    url: "https://www.ryanhermes.ca",
    siteName: "Ryan Hermes Portfolio",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Hermes | Software Development Engineer at Amazon",
    description: "Software Development Engineer at Amazon in Vancouver.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.ryanhermes.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-black`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-neutral-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
