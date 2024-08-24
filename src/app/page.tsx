import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { rules } from "@/data";

const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));
const sections = categories.map((tag) => ({
  tag,
  rules: rules.filter((rule) => rule.tags.includes(tag)),
}));

export default function Page() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <div className="flex">
        <h3 className="font-semibold absolute top-4 left-6 text-sm font-mono">
          cursor.directory
        </h3>
        <div className="hidden md:flex">
          <Menu sections={sections} />
        </div>
      </div>
      <main className="flex-1 p-6 overflow-auto">
        {sections.map((section, idx) => (
          <section key={section.tag} id={section.tag}>
            <h3 className="text-lg font-semibold mb-4 mt-10">{section.tag}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
