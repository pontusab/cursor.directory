"use client";

import { createClient } from "@/utils/supabase/client";
import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

export function GithubSignin() {
  const supabase = createClient();

  return (
    <Button
      variant="outline"
      className="border border-border rounded-full"
      onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: "github",
        });
      }}
    >
      <span className="flex items-center gap-2">
        <GithubIcon className="w-4 h-4" />
        Sign in with Github
      </span>
    </Button>
  );
}
