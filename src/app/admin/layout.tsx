"use client";

import { Inter } from "next/font/google";
import AdminSidebar from "./components/Sidebar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <div
      className={`min-h-screen bg-[var(--color-background)] text-[var(--color-text)] ${inter.className}`}
    >
      {isLoginPage ? (
        <main className="w-full h-full">{children}</main>
      ) : (
        <div className="flex min-h-screen">
          <AdminSidebar />
          <main className="flex-1 p-8 overflow-y-auto max-h-screen">
            <div className="max-w-5xl mx-auto">{children}</div>
          </main>
        </div>
      )}
    </div>
  );
}
