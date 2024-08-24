import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";
import { CopyButton } from "./copy-button";

export type Rule = {
  libs?: string[];
  content: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
};

export function RuleCard({ rule }: { rule: Rule }) {
  return (
    <Card className="bg-background p-4 aspect-square">
      <CardContent className="bg-card h-full mb-2 font-mono p-4 text-sm opacity-50 hover:opacity-100 transition-opacity group relative">
        <CopyButton content={rule.content} />
        <ScrollArea className="h-full">
          <code className="text-sm">{rule.content}</code>
        </ScrollArea>
      </CardContent>

      <CardHeader className="flex flex-row items-center justify-between p-0">
        <div>
          <CardTitle className="text-sm">{rule.author.name}</CardTitle>

          <div className="flex gap-2">
            {rule?.libs?.map((lib) => (
              <span key={lib} className="text-xs text-[#878787] font-mono">
                {lib}
              </span>
            ))}
          </div>
        </div>
        <Avatar className="size-6">
          <a href={rule.author.url} target="_blank" rel="noopener noreferrer">
            <AvatarImage src={rule.author.avatar} alt={rule.author.name} />
          </a>
        </Avatar>
      </CardHeader>
    </Card>
  );
}
