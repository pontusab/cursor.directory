import { Generate } from "@/components/generate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Cursor Rules | Cursor Directory",
  description:
    "Generate custom cursor rules for your project by uploading your package.json file. Get tailored cursor rules based on your project's dependencies and tech stack.",
  openGraph: {
    title: "Generate Cursor Rules | Cursor Directory",
    description:
      "Generate custom cursor rules for your project by uploading your package.json file. Get tailored cursor rules based on your project's dependencies and tech stack.",
    url: "https://cursor.directory/generate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image-generate.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image-generate.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "Generate Cursor Rules | Cursor Directory",
    description:
      "Generate custom cursor rules for your project by uploading your package.json file. Get tailored cursor rules based on your project's dependencies and tech stack.",
    images: [
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image-generate.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://cdn.midday.ai/cursor/opengraph-image-generate.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-2 -mt-16 sm:mt-0">
      <div className="w-full max-w-3xl">
        <Generate />
      </div>
    </div>
  );
}
