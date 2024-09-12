import { getPopularRules } from "@/data/popular";
import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  const popularRules = await getPopularRules();
  const allRules = popularRules.flatMap((section) => section.rules);
  const sortedRules = allRules.sort((a, b) => b.count - a.count);
  return NextResponse.json({ data: sortedRules });
}
