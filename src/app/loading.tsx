"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [index, setIndex] = useState(0);

  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center bg-(--accent) text-(--primary-color)">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-(--primary-color) border-t-transparent" />
      </div>
    </div>
  );
}
