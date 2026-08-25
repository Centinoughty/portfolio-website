"use client";

import { useEffect, useRef, useState } from "react";
import { home } from "@/styles/fonts";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div ref={navRef} className="isolate absolute left-0 top-0 z-50 w-full">
      <nav className="relative flex w-full items-center justify-between border-b border-[var(--primary-color)]/10 bg-[rgba(241,237,230,0.72)] px-[5%] py-3 backdrop-blur-md md:px-[13%] md:py-4">
        <div className={`${home.className} text-sm md:text-lg`}>
          <Link href="/" className="inline-block px-2 py-1 transition-opacity hover:opacity-65">
            nadeem
          </Link>
        </div>

        <div className="hidden items-center gap-6 font-mono text-sm text-[var(--secondary-color)] md:flex">
          <Link href="/" className="transition-colors hover:text-[var(--primary-color)]">Home</Link>
          <Link href="/projects" className="transition-colors hover:text-[var(--primary-color)]">Projects</Link>
          <Link href="/blogs" className="transition-colors hover:text-[var(--primary-color)]">Blogs</Link>
          <Link
            href="https://drive.google.com/file/d/1G8V_9BkrXbWwFCDKpe8Eeyg8T8jjzeek/view?usp=sharing"
            target="_blank"
            className="transition-colors hover:text-[var(--primary-color)]"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full p-2 text-[var(--primary-color)] transition-colors hover:bg-[var(--primary-color)]/10 active:bg-[var(--primary-color)]/15 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <FiX size={20} aria-hidden="true" /> : <FiMenu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mx-[5%] mt-3 flex flex-col gap-1 rounded-2xl border border-[var(--primary-color)]/12 bg-[rgba(241,237,230,0.94)] p-2 font-mono text-sm text-[var(--secondary-color)] shadow-[0_18px_45px_rgba(2,90,78,0.12)] backdrop-blur-md md:hidden"
        >
          <Link href="/" className="rounded-xl px-4 py-3 transition-colors hover:bg-[var(--primary-color)]/8 hover:text-[var(--primary-color)]" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-xl px-4 py-3 transition-colors hover:bg-[var(--primary-color)]/8 hover:text-[var(--primary-color)]"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link href="/blogs" className="rounded-xl px-4 py-3 transition-colors hover:bg-[var(--primary-color)]/8 hover:text-[var(--primary-color)]" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <Link
            href="https://drive.google.com/file/d/1G8V_9BkrXbWwFCDKpe8Eeyg8T8jjzeek/view?usp=sharing"
            target="_blank"
            className="rounded-xl px-4 py-3 transition-colors hover:bg-[var(--primary-color)]/8 hover:text-[var(--primary-color)]"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </div>
  );
}
