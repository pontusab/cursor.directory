import { SubscribeForm } from "@/components/ui/subscribe-form";

export default function Live() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4">
        <div className="relative w-full aspect-video">
          <div className="flex flex-col items-center justify-center aspect-video w-full bg-border mb-8 blur-md" />
          <div className="font-medium font-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            No live streams right now
          </div>
        </div>

        <SubscribeForm
          group="newsletter"
          className="w-[370px]"
          placeholder="Notify me about new live streams"
        />
      </div>
    </div>
  );
}
