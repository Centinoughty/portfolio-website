"use client";

import { useState } from "react";

export default function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (error) {
      console.log(error);
      setCopied(false);
    }
  };

  return { copied, copy };
}
