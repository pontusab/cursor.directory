import { Header } from "@/components/header";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { PlusIcon } from "lucide-react";
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
        "whitespace-pre-line dark antialiased bg-background text-foreground",
      )}
    >
      <body>
        <Header />

        <div className="flex">
          {children}

          <a
            href="https://github.com/pontusab/cursor.directory"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="size-[48px] bg-[#F5F5F3]/30 text-white border border-white rounded-full font-medium md:hidden fixed bottom-4 left-6 z-10 backdrop-blur-lg"
              variant="outline"
              size="icon"
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </a>

          <a
            href="https://news.ycombinator.com/shownew"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-4 right-6 z-10"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-none border-border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#F60"
                    d="M0 0v16h16V0H0Zm8.7 9.225v3.925H7.275V9.225L3.775 2.3h1.65L8 7.525 10.65 2.3h1.55L8.7 9.225Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span>Live on Hacker News</span>
              <span className="relative ml-auto flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </Button>
          </a>
        </div>
      </body>

      <OpenPanelComponent
        clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
        trackScreenViews
      />
    </html>
  );
}
