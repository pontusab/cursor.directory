import { Search } from "@/components/search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Servers for Cursor",
  description: "MCP Servers",
};

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen w-full mt-36">
      <Search />
    </div>
  );
}
