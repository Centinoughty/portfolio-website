"use client";

import { useEffect, useRef, useState } from "react";
import { home } from "@/styles/fonts";
import Link from "next/link";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <>
      <nav className="z-10 absolute top-0 left-0 w-full px-[3%] md:px-[13%] py-4 border-b border-b-gray-300 flex justify-between items-center backdrop-blur-[5px]">
        <div className={`${home.className} md:text-lg`}>
          <Link href="/" className="px-4 py-1">
            nadeem
          </Link>
        </div>

        <div className="hidden text-gray-600 font-mono md:flex gap-4">
          <Link href="#">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#">Play</Link>
          <Link href="#">Contact</Link>
          <Link
            href="https://drive.google.com/file/d/1DjghVezG53l5qr7M7_Lb9F7FW_4OuFS6/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </div>

        <div
          className="md:hidden text-xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <MdClose color="#025a4e" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#025a4e"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            </svg>
          )}
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-[45px] my-4 mx-1 px-10 right-0 rounded-xl bg-[var(--primary-color)]/30 backdrop-blur-[10px] text-black font-mono flex flex-col items-center gap-4 py-4 shadow-md z-20"
        >
          <Link href="/" aria-label="About Section" onClick={toggleMenu}>
            About
          </Link>
          <Link
            href="/projects"
            aria-label="Projects page"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link href="#" aria-label="Play page" onClick={toggleMenu}>
            Play
          </Link>
          <Link href="#" aria-label="Contact section" onClick={toggleMenu}>
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1DjghVezG53l5qr7M7_Lb9F7FW_4OuFS6/view?usp=sharing"
            aria-label="My Resume"
            target="_blank"
            onClick={toggleMenu}
          >
            Resume
          </Link>
        </div>
      )}
    </>
  );
}
