"use client";

import { motion } from "framer-motion";

export function GenerateFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.2 }}
      className="text-center text-sm text-[#878787] fixed bottom-6 left-0 right-0 mx-auto w-fit"
    >
      Built by the team from{" "}
      <a href="https://midday.ai" className="text-primary">
        Midday
      </a>{" "}
      and{" "}
      <a href="https://languine.ai" className="text-primary">
        Languine
      </a>
    </motion.div>
  );
}
