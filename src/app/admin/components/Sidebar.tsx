"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Code2,
  FileText,
  Image as ImageIcon,
  LogOut,
  Layers,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: Layers },
  { name: "Experience", href: "/admin/experience", icon: Briefcase },
  { name: "Skills", href: "/admin/skills", icon: Code2 },
  { name: "Blogs", href: "/admin/blogs", icon: FileText },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <aside className="w-64 bg-[var(--color-secondary)]/10 border-r border-[var(--color-secondary)]/20 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-[var(--color-secondary)]/20">
        <h2 className="text-xl font-bold text-[var(--color-primary)]">
          Admin Panel
        </h2>
        <p className="text-xs opacity-60 mt-1">Nadeem Siyam Portfolio</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                  : "text-[var(--color-text)] hover:bg-[var(--color-secondary)]/20 opacity-80 hover:opacity-100"
              }`}
            >
              <Icon
                size={18}
                className={
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "opacity-70 group-hover:opacity-100"
                }
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[var(--color-secondary)]/20">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
