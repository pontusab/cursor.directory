import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Directory",
  description: "Find the best cursor rules for your framework and language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        `${GeistSans.variable} ${GeistMono.variable}`,
        "whitespace-pre-line dark antialiased",
      )}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>

      <Analytics />
    </html>
  );
}
