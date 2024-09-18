import { getRuleBySlug, rules } from "@/data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export function GET(_: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ error: "No slug provided" }, { status: 400 });
  }

  const rule = getRuleBySlug(slug);

  if (!rule) {
    return NextResponse.json({ error: "Rule not found" }, { status: 404 });
  }

  return NextResponse.json({ data: rule });
}
