"use client";

import { Copy } from "lucide-react";

export function CopyButton({ content }: { content: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <button
      onClick={handleCopy}
      className="hidden items-center gap-2 group-hover:flex text-xs absolute z-10 bg-white text-black p-2 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      type="button"
    >
      <Copy className="w-4 h-4" />
      <span>Copy rule</span>
    </button>
  );
}
