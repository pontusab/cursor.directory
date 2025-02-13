"use client";

import { motion } from "motion/react";

const expertise = [
  {
    name: "React",
    description:
      "React is a JavaScript library for building user interfaces with a component-based architecture and virtual DOM.",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript adds static typing to JavaScript, enabling better tooling, error detection, and code maintainability.",
  },
  {
    name: "Next.js",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and API routes.",
  },
  {
    name: "Node.js",
    description:
      "Node.js enables JavaScript execution outside browsers, perfect for building scalable network applications.",
  },
  {
    name: "Python",
    description:
      "Python is a high-level programming language known for its simplicity, readability and extensive library ecosystem.",
  },
  {
    name: "FastAPI",
    description:
      "FastAPI is a modern Python web framework for building APIs with automatic OpenAPI documentation and type checking.",
  },
  {
    name: "Flutter",
    description:
      "Flutter is Google's UI toolkit for building natively compiled applications from a single codebase.",
  },
  {
    name: "Angular",
    description:
      "Angular is a platform for building mobile and desktop web applications using TypeScript and dependency injection.",
  },
  {
    name: "C++",
    description:
      "C++ is a powerful systems programming language supporting object-oriented, procedural and generic programming.",
  },
  {
    name: "Django",
    description:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
  },
];

export function GenerateList() {
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
          {[...expertise, ...expertise].map((item, index) => (
            <motion.div
              key={`${item}-${index.toString()}`}
              className="px-2 py-2 border border-border w-[180px] sm:w-[240px] h-full"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[#878787] text-[10px] sm:text-[11px] h-[55px] sm:h-[75px] overflow-hidden font-mono bg-[#121212] p-2 leading-4">
                  {item.description}
                </span>
                <span className="text-primary font-mono text-[10px] sm:text-[11px] truncate px-1 pt-2">
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
