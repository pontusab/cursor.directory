import { getPopularRules } from "@/data/popular";
import { NextResponse } from "next/server";

export const revalidate = 300;

const popularRules = await getPopularRules();

export async function GET() {
  const allRules = popularRules.flatMap((section) => section.rules);

  // Create a Set to track unique slugs and an array for unique rules
  const uniqueSlugs = new Set();
  const uniqueRules = [];

  for (const rule of allRules) {
    if (uniqueSlugs.has(rule.slug)) continue; // Skip if slug is already in the Set
    uniqueSlugs.add(rule.slug); // Add slug to the Set
    uniqueRules.push(rule); // Keep the rule
  }

  const sortedRules = uniqueRules.sort((a, b) => b.count - a.count);
  return NextResponse.json({ data: sortedRules });
}
