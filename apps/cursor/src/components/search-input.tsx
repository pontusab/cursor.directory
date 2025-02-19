"use client";

import { useQueryState } from "nuqs";
import { Input } from "./ui/input";

export function SearchInput() {
  const [search, setSearch] = useQueryState("q", { defaultValue: "" });

  return (
    <Input
      placeholder="Search for MCP servers"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border-border placeholder:text-[#565656] outline-none focus:!ring-0"
    />
  );
}
