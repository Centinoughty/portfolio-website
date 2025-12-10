"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return (
    <body className="antialiased bg-[var(--accent)]">
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <Footer />}
      <Analytics />
    </body>
  );
}
