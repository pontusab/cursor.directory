"use client";

import { cn } from "@/lib/utils";
import { CommandIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CommandMenu } from "./command-menu";
import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";
import { UserMenu } from "./user-menu";

const navigationLinks = [
  { href: "/rules", label: "Rules" },
  { href: "/mcp", label: "MCPs" },
  { href: "/learn", label: "Learn" },
  // { href: "/advertise", label: "Advertise" },
  { href: "/about", label: "About" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="md:fixed z-50 flex justify-between items-center top-0 px-6 py-2 w-full bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
        <Link href="/" className="font-medium font-fraunces text-sm">
          windsurf.run
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                pathname.includes(link.href)
                  ? "text-primary"
                  : "text-[#878787]",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Button
            variant="ghost"
            size="sm"
            className="gap-2 hover:bg-transparent text-[#878787] px-0"
            onClick={() => setOpen(true)}
          >
            <SearchIcon className="h-4 w-4" />
            <span className="hidden sm:inline-flex">Search</span>
          </Button>

          <UserMenu />
        </div>
      </div>
      <MobileMenu />
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
}
