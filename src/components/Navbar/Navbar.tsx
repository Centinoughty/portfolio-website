"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { home } from "@/styles/fonts";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="z-10 absolute top-0 left-0 w-full px-[3%] md:px-[13%] py-4 border-b border-b-gray-300 flex justify-between items-center backdrop-blur-[5px]">
        {/* Logo */}
        <div className={`${home.className} md:text-lg`}>
          <Link href="/" className="px-4 py-1">
            nadeem
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden text-gray-600 font-mono md:flex gap-4">
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Play</Link>
          <Link href="#">Contact</Link>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div
          className="md:hidden text-xl text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FaTimes color="#025a4e" />
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[45px] my-4 mx-1 px-10 right-0 rounded-lg bg-[var(--primary-color)]/25 backdrop-blur-[11px] text-black font-mono flex flex-col items-center gap-4 py-4 shadow-md z-20">
          <Link href="#" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="#" onClick={toggleMenu}>
            Play
          </Link>
          <Link href="#" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
