import { GlobalSearch } from "@/components/global-search";
import { getPopularRules } from "@directories/data/popular";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windsurf Directory - Windsurf Rules & MCP Servers",
  description:
    "Enhance your Windsurf with custom rules, find MCP servers, and join a community of Windsurf enthusiasts.",
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
