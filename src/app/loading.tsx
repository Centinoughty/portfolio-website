"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Welcome — almost there.",
  "Curating my work...",
  "Putting things together...",
  "Bootstrapping portfolio...",
];

export default function Loading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center bg-(--accent) text-(--primary-color)">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-(--primary-color) border-t-transparent" />
        <p className="tracking-wide opacity-80 font-mono text-lg font-bold">
          {phrases[index]}
        </p>
      </div>
    </div>
  );
}
