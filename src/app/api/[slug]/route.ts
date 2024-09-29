import { getRuleBySlug, rules } from "@/data";
import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate once every day

export async function generateStaticParams() {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ error: "No slug provided" }, { status: 400 });
  }

  const rule = getRuleBySlug(slug);

  if (!rule) {
    return NextResponse.json({ error: "Rule not found" }, { status: 404 });
  }

  return new Response(JSON.stringify({ data: rule }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=86400",
      "CDN-Cache-Control": "public, s-maxage=86400",
      "Vercel-CDN-Cache-Control": "public, s-maxage=86400",
    },
  });
}
