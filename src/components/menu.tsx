"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { Rule } from "./rule-card";

export function Menu({
  sections,
}: { sections: { tag: string; rules: Rule[] }[] }) {
  const handleClick = (tag: string) => {
    const element = document.getElementById(tag);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <aside className="w-64 p-4 flex flex-col">
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
              <span className="ml-auto text-muted-foreground text-[#878787]">
                {section.rules.length}
              </span>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <Separator className="my-4" />
      <a href="https://github.com/pontusab/cursor.directory">
        <Button
          className="w-full bg-white text-black rounded-full"
          variant="outline"
        >
          Submit
        </Button>
      </a>
    </aside>
  );
}
