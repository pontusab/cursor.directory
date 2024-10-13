"use client";

import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Rule, Prompt, Instruction } from "@/types";
import { rules } from "@/data";
import { prompts } from "@/data/prompts";
import { getSections } from "@/lib/utils";

interface MenuProps {
  type: "rules" | "prompts" | "instructions";
}

export function Menu({ type }: MenuProps) {
  let items: Rule[] | Prompt[] | Instruction[] = [];
  let allSections: { tag: string; items: Rule[] | Prompt[] | Instruction[] }[] = [];

  if (type === "rules") {
    items = rules;
    allSections = getSections<Rule>(rules);
  } else if (type === "prompts") {
    items = prompts;
    allSections = getSections<Prompt>(prompts);
  }
  // else if (type === "instructions") items = instructions;

  const router = useRouter();
  const [sections, setSections] = useState(allSections);

  const handleClick = (tag: string) => {
    router.push("/", { scroll: false });

    const element = document.getElementById(tag);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 56,
      behavior: "smooth",
    });

    // Run the handleClick function first
    clearSearch();
  };

  const clearSearch = () => {
    // Clear the search input
    setSections(allSections);
  };

  return (
    <aside className="w-64 p-4 flex flex-col">
      {/* Search input */}
      <SearchInput
        onSearch={(term) =>
          setSections(
            allSections.filter((section) =>
              section.tag.toLowerCase().includes(term),
            ),
          )
        }
        clearSearch={clearSearch}
      />
      <ScrollArea className="flex-grow">
        <div className="space-y-1">
          {sections.map((section) => (
            <Button
              onClick={() => handleClick(section.tag)}
              key={section.tag}
              variant="ghost"
              className="w-full justify-start"
            >
              {section.tag}
              <span className="ml-auto text-[#878787]">
                {section.items.length}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <Separator className="my-4" />
      <a
        href="https://github.com/pontusab/cursor.directory"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          className="w-full bg-[#F5F5F3]/30 text-black border border-black rounded-full items-center justify-center gap-2 font-medium hidden md:flex dark:text-white dark:border-white"
          variant="outline"
        >
          <span>Submit</span> <PlusIcon className="w-4 h-4" />
        </Button>
      </a>
    </aside>
  );
}
