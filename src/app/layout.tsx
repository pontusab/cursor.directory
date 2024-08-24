import "./globals.css";
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
        {children}
        <footer className="right-4 bottom-4 absolute text-xs text-[#878787]">
          Made by{" "}
          <a
            href="https://twitter.com/pontusab"
            target="_blank"
            rel="noopener noreferrer"
          >
            pontus
          </a>{" "}
          &{" "}
          <a
            href="https://twitter.com/viktorhofte"
            target="_blank"
            rel="noopener noreferrer"
          >
            viktor
          </a>
        </footer>
      </body>

      <Analytics />
    </html>
  );
}
