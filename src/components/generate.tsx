"use client";

import { generateRule } from "@/actions/generate-rule";
import type { Section } from "@/data";
import { cn } from "@/lib/utils";
import { readStreamableValue } from "ai/rsc";
import { motion } from "motion/react";
import { useState } from "react";
import { GenerateInput } from "./generate-input";
import { GenerateTitle } from "./generate-title";
import { GeneratedResults } from "./generated-results";
import { RuleList } from "./rule-list";

export function Generate({ sections }: { sections: Section[] }) {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate(packageJson?: string) {
    try {
      setIsLoading(true);
      setError(null);
      setResult("");

      const stream = await generateRule(packageJson || value);
      for await (const delta of readStreamableValue(stream.output)) {
        setResult((currentResult) => `${currentResult}${delta}`);
      }

      setFinished(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  const hasResult = result.length > 0;

  return (
    <div>
      <div className="flex flex-col gap-4 w-full relative mx-auto h-screen">
        <div
          className={cn("transition-all duration-1000", {
            "blur-sm opacity-0": hasResult,
          })}
        >
          <GenerateTitle />

          <div className="max-w-[620px] mx-auto w-full">
            <GenerateInput
              value={value}
              setValue={setValue}
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <RuleList sections={sections} small />
          </motion.div>
        </div>
      </div>

      {hasResult && (
        <GeneratedResults
          result={result}
          onNew={() => {
            setValue("");
            setResult("");
            setFinished(false);
          }}
        />
      )}
    </div>
  );
}
