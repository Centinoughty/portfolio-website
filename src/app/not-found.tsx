import { bric } from "@/styles/fonts";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <p
          className={`${bric.className} text-7xl font-bold text-(--primary-color)`}
        >
          Oops!!!
        </p>
        <p
          className={`${bric.className} text-3xl font-bold text-(--primary-color)`}
        >
          Can't find your page...
        </p>
      </div>
    </>
  );
}
