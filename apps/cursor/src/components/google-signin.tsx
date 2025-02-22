"use client";

import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

export function GoogleSignin() {
  const supabase = createClient();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/";

  return (
    <Button
      variant="outline"
      className="border border-border rounded-full"
      onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
          },
        });
      }}
    >
      <span className="flex items-center gap-2">
        {/* <GoogleIcon className="w-4 h-4" /> */}
        Sign in with Google
      </span>
    </Button>
  );
}
