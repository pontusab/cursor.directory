"use client";

import { motion } from "motion/react";

const expertise = [
  {
    name: "Node.js",
    description:
      "Node.js is a runtime environment for JavaScript that allows you to run JavaScript code outside of a web browser.",
  },
  {
    name: "Next.js",
    description:
      "Next.js is a React framework for building server-side rendered (SSR) web applications.",
  },
  {
    name: "App Router",
    description:
      "App Router is a new routing system for Next.js that allows you to create server-side rendered (SSR) web applications.",
  },
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
  },
];

export function GenerateList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden h-[140px] relative mt-8"
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 70,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex flex-row gap-4"
        >
          {[...expertise, ...expertise].map((item, index) => (
            <motion.div
              key={`${item}-${index.toString()}`}
              className="px-6 py-3 border border-border w-[220px] h-full"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[#878787] text-xs line-clamp-2 h-[75px] text-[11px] font-mono">
                  {item.description}
                </span>
                <span className="text-primary font-mono text-sm truncate text-[11px]">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
