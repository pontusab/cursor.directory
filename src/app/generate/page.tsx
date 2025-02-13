import { Generate } from "@/components/generate";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-2 -mt-16 sm:mt-0">
      <div className="w-full max-w-3xl">
        <Generate />
      </div>
    </div>
  );
}
