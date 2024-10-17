import { Menu } from "@/components/menu";
import { Tabs } from "@/components/tabs";
import { rules } from "@/data";
import { ItemGrid } from "@/components/item-grid";

export default function Page() {
  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu type="rules" />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs type="rules" />
        <ItemGrid items={rules} />
      </main>
    </>
  );
}


