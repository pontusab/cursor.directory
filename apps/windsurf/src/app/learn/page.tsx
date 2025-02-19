import { Menu } from "@/components/menu";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { videos } from "@/data/videos";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const metadata = {
  title: "Learn Windsurf",
  description: "Learn how to use Windsurf from videos and tutorials",
};

export default function Page() {
  return (
    <div className="flex w-full h-full">
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:grid-cols-1">
          {videos.map((video) => (
            <Card key={video.url}>
              <CardHeader>
                <iframe
                  src={video.url}
                  width="100%"
                  height="auto"
                  className="aspect-video pb-4"
                  allowFullScreen
                  loading="lazy"
                  title={video.title}
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={video.author.image}
                      className="size-6 rounded-full"
                    />
                    <AvatarFallback className="size-6 rounded-full bg-accent flex items-center justify-center text-xs font-medium uppercase">
                      {video.author.name.charAt(0)}
                      {video.author.name.charAt(1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-[#878787]">
                    {video.author.name}
                  </span>
                </div>
                <CardTitle className="text-md font-semibold font-mono pt-2">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-sm text-[#878787]">
                  {video.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
