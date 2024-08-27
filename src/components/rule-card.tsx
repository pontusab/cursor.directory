import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CopyButton } from "./copy-button";

export type Rule = {
  libs?: string[];
  content: string;
  title?: string;
  slug: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
};

export function RuleCard({ rule, isPage }: { rule: Rule; isPage?: boolean }) {
  return (
    <Card className="bg-background p-4 max-h-[calc(100vh-8rem)] aspect-square flex flex-col">
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono p-4 pr-1 text-sm opacity-50 hover:opacity-100 transition-opacity group relative flex-grow",
          isPage && "opacity-100",
        )}
      >
        <CopyButton content={rule.content} />
        <Link href={`/${rule.slug}`}>
          <ScrollArea className="h-full">
            <code className="text-sm block pr-3">{rule.content}</code>
          </ScrollArea>
        </Link>
      </CardContent>

      <CardHeader className="p-0 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">{rule.author.name}</CardTitle>
          <Avatar className="size-6">
            <a href={rule.author.url} target="_blank" rel="noopener noreferrer">
              <AvatarImage src={rule.author.avatar} alt={rule.author.name} />
            </a>
          </Avatar>
        </div>

        <div className="flex gap-2 overflow-x-auto whitespace-nowrap h-5">
          {rule?.libs?.slice(0, 2).map((lib) => (
            <span
              key={lib}
              className="text-xs text-[#878787] font-mono flex-shrink-0"
            >
              {lib}
            </span>
          ))}
          {rule?.libs && rule.libs.length > 2 && (
            <span className="text-xs text-[#878787] font-mono flex-shrink-0">
              +{rule.libs.length - 2} more
            </span>
          )}
        </div>
      </CardHeader>
    </Card>
  );
}
