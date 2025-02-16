import { Generate } from "@/components/generate";
import { getPopularRules } from "@/data/popular";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Directory - Cursor Rules & MCP Servers",
  description:
    "Enhance your Cursor with custom rules, find MCP servers, and join a community of Cursor enthusiasts.",
};

export const revalidate = 86400; // Revalidate once every day

const popularRules = await getPopularRules();

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen w-full px-2 mt-[15%]">
      <div className="w-full max-w-6xl">
        <Generate sections={popularRules} />
      </div>
    </div>
  );
}
