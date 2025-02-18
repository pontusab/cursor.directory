import { Generate } from "@/components/generate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Cursor Project Rule (.mdc) | Cursor Directory",
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
        url: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/opengraph-image-generate-v1.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/opengraph-image-generate-v1.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "Generate Cursor Project Rule (.mdc) | Cursor Directory",
    description:
      "Generate custom cursor rules for your project by uploading your package.json file. Get tailored cursor rules based on your project's dependencies and tech stack.",
    images: [
      {
        url: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/opengraph-image-generate-v1.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/opengraph-image-generate-v1.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
};

export default function GeneratePage() {
  return <Generate />;
}
