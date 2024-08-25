import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { rules } from "@/data";

export async function generateMetadata({
  params,
}: { params: { slug: string } }) {
  const rule = rules.find((rule) => rule.slug === params.slug);

  return {
    title: `${rule?.title} rule by ${rule?.author.name}`,
    description: rule?.content,
  };
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const rule = rules.find((rule) => rule.slug === params.slug);

  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16">
        {rule && <RuleCard rule={rule} isPage={true} />}
      </main>
    </>
  );
}
