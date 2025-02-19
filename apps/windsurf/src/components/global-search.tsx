"use client";

import type { Section } from "@directories/data/rules";
import { motion } from "motion/react";
import { GlobalSearchInput } from "./global-search-input";
import { HeroTitle } from "./hero-title";
import MCPList from "./mcp-list";
import { RuleList } from "./rule-list";
import { Windsurf } from "./ui/windsurf";

export function GlobalSearch({ sections }: { sections: Section[] }) {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full relative mx-auto h-screen">
        <div className="transition-all duration-1000">
          <div
            className="flex justify-center items-center mb-8"
            style={{
              opacity: 0,
              animation: "fadeIn 0.05s ease forwards",
            }}
          >
            <Windsurf />
          </div>

          <HeroTitle />

          <div className="max-w-[620px] mx-auto w-full mb-14">
            <GlobalSearchInput />
          </div>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <MCPList />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          >
            <RuleList sections={sections} small />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
