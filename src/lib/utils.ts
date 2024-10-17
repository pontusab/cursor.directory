import { Prompt, Rule } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isImageUrl(url: string): boolean {
  if (!url) return false;
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];

  const isDataUri = url.startsWith("data:image/");

  const isImageExtension =
    imageExtensions.includes(
      url.substring(url.lastIndexOf(".")).toLowerCase(),
    ) || url.endsWith(".svg");

  // Add check for GitHub avatar URLs
  const isGitHubAvatar = url.includes("avatars.githubusercontent.com");

  // Add check for URLs with 'image' in the path or query parameters
  const hasImageInUrl = url.toLowerCase().includes("image");

  return isDataUri || isImageExtension || isGitHubAvatar || hasImageInUrl;
}

export function generateNameAbbr(name: string): string {
  const firstCharRegex = /[\p{L}]/u;

  const match = name.match(firstCharRegex);

  return match ? match[0].toUpperCase() : "";
}

export function getSections<T extends { tags: string[] }>(items: T[]) {
  const categories = Array.from(new Set(items.flatMap((item) => item.tags)));

  return categories
    .map((tag) => ({
      tag,
      items: items.filter((item) => item.tags.includes(tag)),
    }))
    .sort((a, b) => b.items.length - a.items.length);
}

export function getItemBySlug(items: Rule[] | Prompt[], slug: string) {
  return items.find((item) => item.slug === slug);
}