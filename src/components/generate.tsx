"use client";

import type { Section } from "@/data";
import { motion } from "motion/react";
import { GenerateInput } from "./generate-input";
import { GenerateTitle } from "./generate-title";
import MCPList from "./mcp-list";
import { RuleList } from "./rule-list";

export function Generate({ sections }: { sections: Section[] }) {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full relative mx-auto h-screen">
        <div className="transition-all duration-1000">
          <GenerateTitle />

          <div className="max-w-[620px] mx-auto w-full mb-14">
            <GenerateInput />
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
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <RuleList sections={sections} small />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
