import { redis } from "@/lib/redis";
import { getSections } from "@/lib/utils";
import { rules } from "@/data";

export async function getPopularRules() {
  const sections = getSections(rules);

  const sectionsWithCounts = await Promise.all(
    sections.map(async (section) => {
      const rulesWithCounts = await Promise.all(
        section.items.map(async (rule) => {
          const count = await redis.get(`rules:${rule.slug}`);
          return {
            ...rule,
            count: Number(count) || 0,
          };
        }),
      );

      const sortedRules = rulesWithCounts.sort((a, b) => b.count - a.count);
      const totalCount = sortedRules.reduce((sum, rule) => sum + rule.count, 0);

      return {
        ...section,
        rules: sortedRules,
        totalCount,
      };
    }),
  );

  return sectionsWithCounts.sort((a, b) => b.totalCount - a.totalCount);
}
