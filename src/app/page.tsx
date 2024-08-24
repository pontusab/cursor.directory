import { RuleCard } from "@/components/rule-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { rules } from "@/data";

const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));
const sections = categories.map((tag) => ({
  tag,
  rules: rules.filter((rule) => rule.tags.includes(tag)),
}));

export default function Page() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <aside className="w-64 p-4 flex flex-col">
        <ScrollArea className="flex-grow">
          <div className="space-y-1">
            <h3 className="font-semibold mb-4 text-sm font-mono">
              cursor.directory
            </h3>
            {sections.map((section) => (
              <Button
                key={section.tag}
                variant="ghost"
                className="w-full justify-start"
              >
                {section.tag}
                <span className="ml-auto text-muted-foreground">
                  {section.rules.length}
                </span>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <Separator className="my-4" />
        <div className="space-y-4">
          <a href="https://github.com/pontusab/cursor.directory">
            <Button
              className="w-full metall text-black rounded-full"
              variant="outline"
            >
              Submit
            </Button>
          </a>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {sections.map((section, idx) => (
          <section key={section.tag} id={section.tag}>
            <h3 className="text-lg font-semibold mb-4 mt-10">{section.tag}</h3>
            <div className="grid grid-cols-3 gap-4">
              {section.rules.map((rule, idx2) => (
                <RuleCard key={`${idx}-${idx2.toString()}`} rule={rule} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
