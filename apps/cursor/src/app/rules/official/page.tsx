import { Menu } from "@/components/menu";
import { RuleList } from "@/components/rule-list";
import { Tabs } from "@/components/tabs";
import { officialRulesSections } from "@/data/official";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Official Rules from framework and library creators | Cursor Directory",
  description:
    "Official rules for Cursor from framework and library creators. Find the best rules for your project.",
};

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate once every day

export default async function Page() {
  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs />
        <RuleList sections={officialRulesSections} />
      </main>
    </div>
  );
}
