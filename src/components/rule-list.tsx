"use client";

import { RuleCard } from "@/components/rule-card";
import type { Section } from "@/data";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 6;

export function RuleList({ sections }: { sections: Section[] }) {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom && visibleItems < sections.length) {
      setVisibleItems((prev) =>
        Math.min(prev + ITEMS_PER_PAGE, sections.length),
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sections.slice(0, visibleItems).map((section, idx) => (
        <section key={section.tag} id={section.tag}>
          <h3 className="text-lg font-semibold mb-4">{section.tag}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
            {section.rules.slice(0, visibleItems).map((rule, idx2) => (
              <RuleCard key={`${idx}-${idx2.toString()}`} rule={rule} />
            ))}
          </div>
        </section>
      ))}
      {visibleItems < sections.length && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() =>
              setVisibleItems((prev) =>
                Math.min(prev + ITEMS_PER_PAGE, sections.length),
              )
            }
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Load more...
          </button>
        </div>
      )}
    </>
  );
}
