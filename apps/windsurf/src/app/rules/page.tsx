import { Menu } from "@/components/menu";
import { RuleList } from "@/components/rule-list";
import { Tabs } from "@/components/tabs";
import { getSections } from "@directories/data/rules";
import { Suspense } from "react";

const sections = getSections();

export default function Page() {
  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs />
        <Suspense fallback={null}>
          <RuleList sections={sections} />
        </Suspense>
      </main>
    </div>
  );
}
