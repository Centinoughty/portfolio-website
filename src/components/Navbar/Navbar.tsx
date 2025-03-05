import { home } from "@/styles/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="z-10 absolute top-0 left-0 w-full px-[3%] md:px-[13%] py-4 border-b border-b-gray-300 flex justify-between items-center backdrop-blur-[5px]">
        <div className={`${home.className} md:text-lg`}>
          <Link href="/" className="px-4 py-1">nadeem</Link>
        </div>
        <div className="hidden text-gray-600 font-mono md:flex gap-4">
          <Link href="">About</Link>
          <Link href="">Projects</Link>
          <Link href="">Play</Link>
          <Link href="">Contact</Link>
        </div>
      </nav>
    </>
  );
}
