import { Search } from "@/components/search";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MCP Servers for Cursor",
  description: "MCP Servers",
};

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen w-full mt-12 md:mt-36">
      <Suspense fallback={null}>
        <Search />
      </Suspense>
    </div>
  );
}
