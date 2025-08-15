import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Hermes - Full Stack Developer",
  description:
    "Computer Science student and developer specializing in web applications, mobile development, and software engineering.",
  keywords:
    "Ryan Hermes, developer, software engineer, full stack, React, Next.js, TypeScript, web development",
  authors: [{ name: "Ryan Hermes" }],
  creator: "Ryan Hermes",
  openGraph: {
    title: "Ryan Hermes - Full Stack Developer",
    description:
      "Computer Science student and developer portfolio showcasing projects and experience",
    url: "https://ryanhermes.ca",
    siteName: "Ryan Hermes Portfolio",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Hermes - Full Stack Developer",
    description: "Computer Science student and developer portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ryanhermes.ca"),
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
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
