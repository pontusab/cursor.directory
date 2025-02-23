import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { getOfficialRuleBySlug, officialRules } from "@/data/official";

type Params = Promise<{ slug: string }>;

export const revalidate = 86400; // Revalidate every 24 hours (86400 seconds)

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const rule = getOfficialRuleBySlug(slug);

  return {
    title: `Official ${rule?.title} rule by ${rule?.author?.name}`,
    description: rule?.content,
  };
}

export async function generateStaticParams() {
  return officialRules.map((rule) => ({
    slug: rule.slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const rule = getOfficialRuleBySlug(slug);

  if (!rule) {
    return <div>Rule not found</div>;
  }

  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16">
        <RuleCard rule={rule} isPage={true} />
      </main>
    </div>
  );
}
