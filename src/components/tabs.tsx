"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";



export function Tabs({type}: {type: "rules" | "prompts"}) {
  const selectedTab = usePathname();

  const tabs = [
    {
      name: "All",
      path: `/${type}`,
    },
    {
      name: "Popular",
      path: `/${type}/popular`,
    },
  ];

  return (
    <div className="flex items-center">
      {tabs.map((tab) => (
        <Link href={tab.path} key={tab.name}>
          <Button
            variant="ghost"
            className={cn(
              "px-4 py-0 h-8 text-[#878787] bg-[#1D1D1D]",
              selectedTab === tab.path && "bg-[#2C2C2C] text-white",
            )}
          >
            {tab.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
