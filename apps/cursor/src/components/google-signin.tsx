"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "./ui/button";

export function GoogleSignin() {
  const supabase = createClient();

  return (
    <Button
      variant="outline"
      className="border-dashed border-border w-full"
      onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: "github",
        });
      }}
    >
      <span className="flex items-center gap-2">Sign in with Google</span>
    </Button>
  );
}
