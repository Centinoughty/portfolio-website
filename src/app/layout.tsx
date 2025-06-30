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
    "AI ML Engineer",
    "Web Developer Portfolio from Kottayam",
    "Networking",
  ],
  creator: "Nadeem M Siyam",
  authors: [{ name: "Nadeem M Siyam", url: "https://nadeemsiyam.com" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: "Nadeem M Siyam",
    description:
      "Explore my portfolio: Full Stack, AI/ML, DevOps, and more. Discover my projects and blog.",
    url: "https://nadeemsiyam.com",
    siteName: "Nadeem M Siyam",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://nadeemsiyam.com/og-nadeem.png",
        width: 1200,
        height: 630,
        alt: "Nadeem M Siyam Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeem M Siyam Portfolio",
    description: "Full Stack & AI Developer. Explore my work, blog, and more.",
    creator: "@NadeemSiyam",
    images: ["https://nadeemsiyam.com/og-nadeem.png"],
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
                "Software Engineer, DevOps Engineer, Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Open Source & Freelance",
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
