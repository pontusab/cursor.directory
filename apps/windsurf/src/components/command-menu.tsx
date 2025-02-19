"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CommandEmpty, CommandInput } from "./ui/command";
import { CommandDialog, CommandItem, CommandList } from "./ui/command";

interface Rule {
  title: string;
  slug: string; // Added slug property for navigation
  // Add other properties that a rule might have
}

const getRules = async () => {
  const rules = await import("@directories/data/rules").then(
    (mod) => mod.rules,
  );
  // Filter out duplicates based on title
  const uniqueRules = Array.from(
    new Map(rules.map((rule) => [rule.title, rule])).values(),
  );
  return uniqueRules;
};

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [rules, setRules] = useState<Rule[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Load rules when component mounts
    getRules().then((loadedRules) => setRules(loadedRules));
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search for a rule..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {rules.map((rule, index) => (
          <CommandItem
            key={rule.title}
            onSelect={() => {
              router.push(`/${rule.slug}`);
              setOpen(false);
            }}
          >
            {rule.title}
          </CommandItem>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
