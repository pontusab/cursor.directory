import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, generateNameAbbr, isImageUrl } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { ShareButton } from "./share-button";
import type { Prompt, Rule } from "@/types";

export function ItemCard({ item, isPage }: { item: Rule | Prompt; isPage?: boolean }) {
  return (
    <Card className="bg-background p-4 max-h-[calc(100vh-8rem)] aspect-square flex flex-col">
      <CardContent
        className={cn(
          "bg-card h-full mb-2 font-mono p-4 pr-1 text-sm opacity-50 hover:opacity-100 transition-opacity group relative flex-grow",
          isPage && "opacity-100",
        )}
      >
        <div className="group-hover:flex hidden right-4 bottom-4 absolute z-10 space-x-2">
          <ShareButton slug={item.slug} />
          <CopyButton content={item.content} slug={item.slug} />
        </div>

        <Link href={`/${item.slug}`}>
          <ScrollArea className="h-full">
            <code className="text-sm block pr-3">{item.content}</code>
          </ScrollArea>
        </Link>
      </CardContent>

      <CardHeader className="p-0 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">{item.author.name}</CardTitle>
          <a href={item.author.url} target="_blank" rel="noopener noreferrer">
            <Avatar className="size-6">
              {isImageUrl(item.author.avatar) ? (
                <AvatarImage src={item.author.avatar} alt={item.author.name} />
              ) : (
                <AvatarFallback>
                  {generateNameAbbr(item.author.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </a>
        </div>
        {item.libs && item.libs.length > 0 && (
          <Popover>
            <PopoverTrigger className="flex gap-2 items-center overflow-x-auto whitespace-nowrap h-5 cursor-pointer hover:bg-accent">
              {item.libs.slice(0, 2).map((lib) => (
                <span
                  key={lib}
                  className="text-xs text-[#878787] font-mono flex-shrink-0"
                >
                  {lib}
                </span>
              ))}
              {item.libs.length > 2 && (
                <span className="text-xs text-[#878787] font-mono flex gap-1 items-center">
                  <span>+{item.libs.length - 2} more</span>
                  <ChevronDown className="w-3 h-3" />
                </span>
              )}
            </PopoverTrigger>
            <PopoverContent>
              {item.libs.map((lib) => (
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
