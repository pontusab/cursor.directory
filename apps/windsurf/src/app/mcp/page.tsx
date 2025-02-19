import { Search } from "@/components/search";
import mcpData from "@directories/data/mcp";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MCP Servers for Windsurf",
  description: "MCP Servers",
};

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen w-full mt-12 md:mt-36">
      <Suspense fallback={null}>
        <Search data={mcpData} />
      </Suspense>
    </div>
  );
}
