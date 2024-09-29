import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { getRuleBySlug, rules } from "@/data";

export async function generateMetadata({
  params,
}: { params: { slug: string } }) {
  const rule = getRuleBySlug(params.slug);

  return {
    title: `${rule?.title} rule by ${rule?.author?.name}`,
    description: rule?.content,
  };
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const rule = getRuleBySlug(params.slug);

  if (!rule) {
    return <div>Rule not found</div>;
  }

  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16">
        <RuleCard rule={rule} isPage={true} />
      </main>
    </>
  );
}

export const revalidate = 86400; // Revalidate every 24 hours (86400 seconds)
