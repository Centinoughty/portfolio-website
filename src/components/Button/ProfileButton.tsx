import Link from "next/link";
import { ReactNode } from "react";

interface ProfileButtonProps {
  href: string;
  children: ReactNode;
}

export default function ProfileButton({ href, children }: ProfileButtonProps) {
  return (
    <>
      <Link href={href} rel="" target="_blank">
        {children}
      </Link>
    </>
  );
}
