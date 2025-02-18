export interface Ad {
  title: string;
  description: string;
  logoUrl: string;
  link: string;
  company: string;
}

export const ads: Ad[] = [
  {
    title: "Build Better Apps",
    description: "Deploy your apps with one click. Get started for free.",
    logoUrl: "https://cdn.brandfetch.io/idDpCfN4VD/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    link: "https://vercel.com",
    company: "Vercel"
  },
  {
    title: "Database for the Modern Web",
    description: "Build in a weekend, scale to millions.",
    logoUrl: "https://cdn.brandfetch.io/idsSceG8fK/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    link: "https://supabase.com",
    company: "Supabase"
  },
]; 