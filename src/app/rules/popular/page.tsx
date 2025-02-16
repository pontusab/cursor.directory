import { Menu } from "@/components/menu";
import { RuleList } from "@/components/rule-list";
import { Tabs } from "@/components/tabs";
import { getPopularRules } from "@/data/popular";

export const metadata = {
  title: "Popular rules",
  description: "Popular rules for Cursor for frameworks, libraries and more.",
};

export const revalidate = 86400; // Revalidate once every day

const popularRules = await getPopularRules();

export default async function Page() {
  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs />
        <RuleList sections={popularRules} />
      </main>
    </div>
  );
}
