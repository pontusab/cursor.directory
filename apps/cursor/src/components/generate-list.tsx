"use client";

import type { Rule } from "@directories/data/rules";
import { motion } from "motion/react";

export function GenerateList({ rules }: { rules: Rule[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden h-[120px] sm:h-[160px] relative mt-4 sm:mt-8"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 70,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex flex-row gap-2 sm:gap-4"
        >
          {[...rules, ...rules].map((item, index) => (
            <motion.div
              key={`${item}-${index.toString()}`}
              className="px-2 py-2 border border-border w-[180px] sm:w-[240px] h-full"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[#878787] text-[10px] sm:text-[11px] h-[55px] sm:h-[75px] overflow-hidden font-mono bg-[#121212] p-2 leading-4">
                  {item.title}
                </span>
                <span className="text-primary font-mono text-[10px] sm:text-[11px] truncate px-1 pt-2">
                  {item?.content?.slice(0, 100)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
