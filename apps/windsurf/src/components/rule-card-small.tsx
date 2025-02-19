import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { Rule } from "@directories/data/rules";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { ShareButton } from "./share-button";

function truncateContent(content: string, limit: number) {
  if (content.length <= limit) return content;
  return `${content.slice(0, limit)}...`;
}

export function RuleCardSmall({
  rule,
  isPage,
  small,
}: {
  rule: Rule;
  isPage?: boolean;
  small?: boolean;
}) {
  return (
    <Card
      className={cn(
        "bg-background max-h-[calc(100vh-8rem)] flex flex-col rounded-[8px]",
        small ? "p-2" : "p-4 aspect-square",
      )}
    >
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono pr-1 text-sm opacity-50 hover:opacity-100 transition-opacity group relative flex-grow",
          small ? "p-2" : "p-4",
          isPage && "opacity-100",
        )}
      >
        <div
          className={cn(
            "group-hover:flex hidden right-4 bottom-4 absolute z-10 space-x-2",
            small ? "right-2 bottom-2" : "right-4 bottom-4",
          )}
        >
          <ShareButton slug={rule.slug} small={small} />
          <CopyButton content={rule.content} slug={rule.slug} small={small} />
        </div>

        <Link href={`/${rule.slug}`}>
          <div className="h-full overflow-y-auto">
            <code className={cn("block pr-3", small ? "text-xs" : "text-sm")}>
              {small
                ? truncateContent(rule.content, small ? 70 : 200)
                : rule.content}
            </code>
          </div>
        </Link>
      </CardContent>

      <CardHeader className="p-0 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className={cn("truncate", small ? "text-xs" : "text-sm")}>
            {rule.title || rule.author?.name}
          </CardTitle>
        </div>
        {rule.libs && rule.libs.length > 0 && (
          <Popover>
            <PopoverTrigger
              className={cn(
                "flex gap-2 items-center overflow-x-auto whitespace-nowrap cursor-pointer hover:bg-accent",
                small ? "h-4" : "h-5",
              )}
            >
              {rule.libs.slice(0, 2).map((lib) => (
                <span
                  key={lib}
                  className={cn(
                    "text-[#878787] font-mono flex-shrink-0",
                    small ? "text-[10px]" : "text-xs",
                  )}
                >
                  {lib}
                </span>
              ))}
              {rule.libs.length > 2 && (
                <span
                  className={cn(
                    "text-[#878787] font-mono flex gap-1 items-center",
                    small ? "text-[10px]" : "text-xs",
                  )}
                >
                  <span>+{rule.libs.length - 2} more</span>
                  <ChevronDown className={small ? "w-2 h-2" : "w-3 h-3"} />
                </span>
              )}
            </PopoverTrigger>
            <PopoverContent>
              {rule.libs.map((lib) => (
                <div key={lib} className="flex flex-col justify-center gap-2">
                  <span className="text-xs text-[#878787] font-mono flex-shrink-0">
                    {lib}
                  </span>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        )}
      </CardHeader>
    </Card>
  );
}
