"use client";

import data from "@/data/mcp/data.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useQueryState } from "nuqs";

export function SearchList() {
  const [search] = useQueryState("q");

  const filteredData = data.filter((item) => {
    const searchTerm = search?.toLowerCase() ?? "";
    return (
      item.name.toLowerCase().includes(searchTerm) ||
      (item.description?.toLowerCase() ?? "").includes(searchTerm)
    );
  });

  return (
    <motion.div
      className="flex flex-col gap-2 w-full mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {filteredData.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, delay: index * 0.05 }}
        >
          <Link
            href={item.url}
            className="flex items-center p-4 transition-colors border border-border hover:bg-accent"
            target="_blank"
          >
            <div className="flex items-start gap-4">
              {item.logo && (
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="font-medium text-primary">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-[#878787]">{item.description}</p>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
