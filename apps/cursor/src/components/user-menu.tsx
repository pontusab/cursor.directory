"use client";

import { createClient } from "@/utils/supabase/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface Session {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function UserMenu() {
  const pathname = usePathname();
  const supabase = createClient();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      {session ? (
        <Button
          variant="outline"
          onClick={handleSignOut}
          className="bg-white text-black h-8 rounded-full"
        >
          Sign Out
        </Button>
      ) : (
        <Link href={`/login?next=${pathname}`}>
          <Button
            variant="outline"
            className="bg-white text-black h-8 rounded-full"
          >
            Sign In
          </Button>
        </Link>
      )}
    </motion.div>
  );
}
