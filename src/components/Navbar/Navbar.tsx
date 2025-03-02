import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="z-10 absolute top-0 left-0 w-full px-[13%] py-4 border-b border-b-gray-300 flex justify-between items-center">
        <div className="font-mono text-lg tracking-wide">
          <Link href="/">Nadeem M Siyam</Link>
        </div>
        <div className="text-gray-600 font-mono flex gap-4">
          <Link href="">About</Link>
          <Link href="">Projects</Link>
          <Link href="">Services</Link>
          <Link href="">Skills</Link>
          <Link href="">Contact</Link>
        </div>
      </nav>
    </>
  );
}
