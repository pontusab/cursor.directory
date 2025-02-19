"use client";

import { AdCard } from "@/components/ad-card";
import { RuleCard } from "@/components/rule-card";
import { RuleCardSmall } from "@/components/rule-card-small";
import { ads } from "@/data/ads";
import type { Section } from "@directories/data/rules";
import { useQueryState } from "nuqs";
import { Fragment, useEffect, useState } from "react";
import { AdCardSmall } from "./ad-card-small";

const ITEMS_PER_PAGE = 6;

export function RuleList({
  sections,
  small,
}: {
  sections: Section[];
  small?: boolean;
}) {
  const [search] = useQueryState("q");
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [randomAds, setRandomAds] = useState<(typeof ads)[0][]>([]);

  // Generate random ads after component mounts on client
  useEffect(() => {
    const totalPossibleAds = Math.ceil(
      sections.reduce((sum, section) => sum + section.rules.length, 0) / 9,
    );

    setRandomAds(
      Array.from({ length: totalPossibleAds }, () => {
        const randomIndex = Math.floor(Math.random() * ads.length);
        return ads[randomIndex];
      }),
    );
  }, [sections]);

  // Reset visible items when search changes
  useEffect(() => {
    setVisibleItems(ITEMS_PER_PAGE);
  }, [search]);

  const filteredSections = sections
    .map((section) => ({
      ...section,
      rules: section.rules.filter(
        (rule) =>
          !search ||
          rule.title.toLowerCase().includes(search.toLowerCase()) ||
          rule.content.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((section) => section.rules.length > 0);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom && visibleItems < filteredSections.length) {
      setVisibleItems((prev) =>
        Math.min(prev + ITEMS_PER_PAGE, filteredSections.length),
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const getRandomAd = (index: number) => {
    return randomAds[index] || ads[0]; // Fallback to first ad if index not yet available
  };

  let totalItemsCount = 0;

  return (
    <>
      {filteredSections.slice(0, visibleItems).map((section, idx) => (
        <section key={section.tag} id={section.tag}>
          <h3 className="text-lg font-regular mb-4">{section.tag}</h3>
          <div
            className={`grid grid-cols-1 gap-6 mb-8 ${
              small ? "lg:grid-cols-4" : "lg:grid-cols-2 xl:grid-cols-3"
            }`}
          >
            {section.rules.map((rule, idx2) => {
              totalItemsCount++;
              const shouldShowAd = totalItemsCount % 9 === 0;
              const adIndex = Math.floor(totalItemsCount / 9) - 1;

              return (
                <Fragment key={`${idx}-${idx2.toString()}`}>
                  {small ? (
                    <>
                      <RuleCardSmall rule={rule} small />
                      {shouldShowAd && (
                        <AdCardSmall ad={getRandomAd(adIndex)} small />
                      )}
                    </>
                  ) : (
                    <>
                      <RuleCard key={`${idx}-${idx2.toString()}`} rule={rule} />
                      {shouldShowAd && <AdCard ad={getRandomAd(adIndex)} />}
                    </>
                  )}
                </Fragment>
              );
            })}
          </div>
        </section>
      ))}

      {visibleItems < filteredSections.length && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() =>
              setVisibleItems((prev) =>
                Math.min(prev + ITEMS_PER_PAGE, filteredSections.length),
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
