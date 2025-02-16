"use client";

import { cn } from "@/lib/utils";
import { Check, Share } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ShareButton({
  slug,
  small,
}: { slug: string; small?: boolean }) {
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
      className={cn(
        "text-xs bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center",
        small ? "p-1.5 size-7" : "p-2 size-9",
      )}
      type="button"
    >
      {copied ? (
        <Check className={small ? "w-3 h-3" : "w-4 h-4"} />
      ) : (
        <Share className={small ? "w-3 h-3" : "w-4 h-4"} />
      )}
    </button>
  );
}
