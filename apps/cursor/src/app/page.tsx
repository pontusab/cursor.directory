import { GlobalSearch } from "@/components/global-search";
import { getPopularRules } from "@/data/popular";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Directory - Cursor Rules & MCP Servers",
  description:
    "Enhance your Cursor with custom rules, find MCP servers, and join a community of Cursor enthusiasts.",
};

// Add force-static and revalidate configuration
export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate once every day

export default async function Page() {
  const popularRules = await getPopularRules();

  return (
    <div className="flex justify-center min-h-screen w-full px-2 mt-[10%]">
      <div className="w-full max-w-6xl">
        <GlobalSearch sections={popularRules} />
      </div>
    </div>
  );
}
