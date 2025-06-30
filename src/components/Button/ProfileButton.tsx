import Link from "next/link";
import { ReactNode } from "react";

interface ProfileButtonProps {
  href: string;
  children: ReactNode;
}

export default function ProfileButton({ href, children }: ProfileButtonProps) {
  return (
    <>
      <Link
        href={href}
        rel=""
        aria-label={href.split("//")[1].split(".")[0]}
        target="_blank"
      >
        {children}
      </Link>
    </>
  );
}
