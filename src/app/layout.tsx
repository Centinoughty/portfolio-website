import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

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
  creator: "Nadeem M Siyam",
  authors: [{ name: "Nadeem M Siyam", url: "https://nadeemsiyam.com" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
        url: "https://nadeemsiyam.com/og-nadeem.webp",
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
    images: ["https://nadeemsiyam.com/og-nadeem.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="FucCzmuCzs8dQQrVB-P_g0CIprT8LjT1eUFSwO4on2M"
        />
        <link rel="canonical" href="https://nadeemsiyam.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              jobTitle:
                "Software Engineer, Full Stack Developer, DevOps Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open Source",
              },
            }),
          }}
        />
      </Head>

      <body className="antialiased bg-[var(--accent)]">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
