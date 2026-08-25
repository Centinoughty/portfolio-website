import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://nadeemsiyam.com"),
  title: "Nadeem M Siyam | Full Stack Developer",
  description:
    "Portfolio of Nadeem M Siyam - Full Stack Developer, AI/ML enthusiast, DevOps practitioner, and cybersecurity learner. View my projects, blog, and contributions.",
  keywords: [
    "Nadeem M Siyam",
    "Full Stack Developer",
    "Software Engineer",
    "AI ML Engineer",
    "Web Developer Portfolio from Kottayam",
    "DevOps Engineer",
    "Cybersecurity",
    "React Developer",
    "Next.js Portfolio",
  ],
  icons: {
    icon: "favicon.ico",
  },
  creator: "Nadeem M Siyam",
  authors: [{ name: "Nadeem M Siyam", url: "https://nadeemsiyam.com" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "FucCzmuCzs8dQQrVB-P_g0CIprT8LjT1eUFSwO4on2M",
  },
  alternates: {
    canonical: "https://nadeemsiyam.com",
  },
  openGraph: {
    title: "Nadeem M Siyam | Full Stack & Software Engineer",
    description:
      "Explore Nadeem's work in Full Stack, AI/ML, DevOps and cybersecurity. Built using cutting-edge technologies.",
    url: "https://nadeemsiyam.com",
    siteName: "Nadeem M Siyam",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://nadeemsiyam.com/nadeem.jpeg",
        width: 1200,
        height: 630,
        alt: "Nadeem M Siyam Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeem M Siyam Portfolio",
    description:
      "Full Stack Developer, AI/ML and DevOps Enthusiast. Discover my work.",
    creator: "@NadeemSiyam",
    images: ["https://nadeemsiyam.com/nadeem.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nadeem M Siyam",
  url: "https://nadeemsiyam.com",
  sameAs: [
    "https://github.com/Centinoughty",
    "https://linkedin.com/in/nadeem-m-siyam",
    "https://leetcode.com/Centinoughty",
    "https://www.instagram.com/_nad_eee_",
  ],
  jobTitle: "Software Engineer, Full Stack Developer, DevOps Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Open Source",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col justify-between antialiased bg-[var(--accent)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
