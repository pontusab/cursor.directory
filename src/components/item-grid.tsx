import { getSections } from "@/lib/utils";
import { Prompt, Rule } from "@/types";
import { ItemCard } from "./item-card";

export function ItemGrid<T extends Rule | Prompt>({items} : {items: T[]}) {

    const sections = getSections<T>(items);
  
    return (
      <>
        {sections.map((section, idx) => (
          <section key={section.tag} id={section.tag}>
          <h3 className="text-lg font-semibold mb-4">{section.tag}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {section.items.map((item, idx2) => (
                <ItemCard key={`${idx}-${idx2.toString()}`} item={item} />
              ))}
            </div>
        </section>
      ))}
      </>
    );
  }