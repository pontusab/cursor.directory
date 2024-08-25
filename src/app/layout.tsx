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
        </div>
      </body>

      <OpenPanelComponent
        clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
      />
    </html>
  );
}
