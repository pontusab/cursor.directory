import { HowTo } from "@/components/how-to";
import mcpData from "@directories/data/mcp";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import slugify from "slugify";

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mcp = mcpData.find(
    (item) => slugify(item.name, { lower: true }) === slug,
  );

  if (!mcp) {
    return {
      title: "MCP Server Not Found",
    };
  }

  return {
    title: `${mcp.name} - MCP Server | Windsurf Directory`,
    description: mcp.description,
  };
}

export async function generateStaticParams() {
  return mcpData.map((mcp) => ({
    slug: slugify(mcp.name, { lower: true }),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mcp = mcpData.find(
    (item) => slugify(item.name, { lower: true }) === slug,
  );

  if (!mcp) {
    notFound();
  }

  return (
    <div className="min-h-screen mt-24 px-4">
      <div className="container px-4 py-8 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          {mcp.logo && (
            <Image
              src={mcp.logo}
              alt={`${mcp.name} logo`}
              width={48}
              height={48}
            />
          )}
          <h1 className="text-2xl">{mcp.name}</h1>
        </div>
        <p className="text-[#878787] mb-4">{mcp.description}</p>

        <Link
          href={mcp.url}
          className="text-sm text-[#878787] flex items-center gap-1"
          target="_blank"
        >
          <span>Installation Instructions</span>
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_106_981"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="12"
              height="13"
            >
              <rect y="0.5" width="12" height="12" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_106_981)">
              <path
                d="M3.2 9.5L2.5 8.8L7.3 4H3V3H9V9H8V4.7L3.2 9.5Z"
                fill="#878787"
              />
            </g>
          </svg>
        </Link>
      </div>

      <HowTo />
    </div>
  );
}
