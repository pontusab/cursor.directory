import { getPopularRules } from "@/data/popular";
import { NextResponse } from "next/server";

export const revalidate = 300;

const popularRules = await getPopularRules();

export async function GET() {
  const allRules = popularRules.flatMap((section) => section.rules);
  const sortedRules = allRules.sort((a, b) => b.count - a.count);
  return NextResponse.json({ data: sortedRules });
}
