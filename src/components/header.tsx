"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function Header() {
  const pathname = usePathname();
  const isGeneratePage = pathname === "/generate";

  return (
    <div className="md:fixed top-0 z-10 px-6 py-2 w-full flex justify-between items-center bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
      <Link href="/" className="font-medium font-mono text-sm">
        cursor.directory
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="/generate"
          className={`flex items-center gap-2 text-sm font-medium ${isGeneratePage ? "text-primary" : ""}`}
        >
          Generator
        </Link>

        <Link
          href="/mcp"
          className="flex items-center gap-2 text-sm font-medium"
        >
          Explore MCP
        </Link>

        {/* <Link
          href="/learn"
          className={`text-sm font-medium ${isGeneratePage ? "text-[#878787]" : ""}`}
        >
          Learn
        </Link> */}

        <Link href="/login">
          <Button variant="outline" className="border-dashed border-border h-8">
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
