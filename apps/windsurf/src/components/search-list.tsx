"use client";

import type { MCP } from "@directories/data/mcp";
import Image from "next/image";
import Link from "next/link";
import { useQueryState } from "nuqs";
import slugify from "slugify";

export function SearchList({ data }: { data: MCP[] }) {
  const [search] = useQueryState("q");

  const filteredData = data.filter((item) => {
    const searchTerm = search?.toLowerCase() ?? "";
    return (
      item.name.toLowerCase().includes(searchTerm) ||
      (item.description?.toLowerCase() ?? "").includes(searchTerm)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
      {filteredData.map((item) => (
        <div key={item.name}>
          <Link
            href={`/mcp/${slugify(item.name, { lower: true })}`}
            className="flex h-full items-center p-4 transition-colors border border-border hover:bg-accent"
          >
            <div className="flex items-start gap-4 w-full">
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
              <div className="flex flex-col flex-1">
                <h3 className="font-medium text-primary">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-[#878787]">{item.description}</p>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
