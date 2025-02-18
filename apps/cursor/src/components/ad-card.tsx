import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Ad } from "@/data/ads";
import Image from "next/image";

export function AdCard({ ad }: { ad: Ad }) {
  return (
    <Card className="bg-background p-4 flex flex-col">
      <CardContent className="bg-card h-full mb-2 font-mono p-4 pr-1 text-sm opacity-50 hover:opacity-100 transition-opacity group relative flex-grow">
        <a
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full"
        >
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src={ad.logoUrl}
                alt={`${ad.company} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm">{ad.description}</p>
            </div>
          </div>
        </a>
      </CardContent>

      <CardHeader className="p-0 space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm">{ad.title}</CardTitle>
          <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
            Ad
          </span>
        </div>
      </CardHeader>
    </Card>
  );
}
