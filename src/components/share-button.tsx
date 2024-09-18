"use client";

import { Check, Share } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ShareButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
    setCopied(true);
    toast("URL copied to clipboard");

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center"
      type="button"
    >
      {copied ? <Check className="w-4 h-4" /> : <Share className="w-4 h-4" />}
    </button>
  );
}
