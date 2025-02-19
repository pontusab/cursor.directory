export interface Ad {
  title: string;
  description: string;
  logoUrl: string;
  link: string;
  imageUrl: string;
}

export const ads: Ad[] = [
  {
    title: "Midday",
    description: "Invoicing, Time tracking, File reconciliation, Storage, Financial Overview & your own Assistant",
    logoUrl: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/ads-midday-logo.png",
    imageUrl: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/ads-midday.png",
    link: "https://go.midday.ai/8cX3F4o",
   },
  {
    title: "Languine",
    description: "Localization infrastructure made for fast-paced startups.",
    logoUrl: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/ads-languine-logo.png",
    imageUrl: "https://pub-abe1cd4008f5412abb77357f87d7d7bb.r2.dev/ads-languine.png",
    link: "https://go.midday.ai/NnI1CUO",
   },
]; 