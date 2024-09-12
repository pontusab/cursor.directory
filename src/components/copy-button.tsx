"use client";

import { voteAction } from "@/actions/vote-action";
import { Check, Copy } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

export function CopyButton({
  content,
  slug,
}: { content: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const { execute } = useAction(voteAction);

  const handleCopy = () => {
    execute({ slug });
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast(
      "Copied to clipboard. Add a .cursorrules file to your project and paste the rule.",
    );

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
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}
