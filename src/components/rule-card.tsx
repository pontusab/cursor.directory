import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy } from "lucide-react";

export type Rule = {
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
      <ContextMenu>
        <ContextMenuTrigger>
          <CardContent className="bg-card h-full mb-2 font-mono p-4 text-sm opacity-50 hover:opacity-100 transition-opacity">
            <ScrollArea className="h-full">
              <code className="text-sm">{rule.content}</code>
            </ScrollArea>
          </CardContent>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem className="flex items-center gap-2">
            <Copy className="w-4 h-4" />
            <span>Copy rule</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <CardTitle className="text-sm">{rule.author.name}</CardTitle>

        <Avatar className="size-6">
          <a href={rule.author.url} target="_blank" rel="noopener noreferrer">
            <AvatarImage src={rule.author.avatar} alt={rule.author.name} />
          </a>
        </Avatar>
      </CardHeader>
    </Card>
  );
}
