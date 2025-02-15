"use client";

import { subscribeAction } from "@/actions/subscribe-action";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <div className="absolute top-1 right-0">
        <Loader2 className="absolute w-4 h-4 mr-3 text-base animate-spin top-2 right-2" />
      </div>
    );
  }

  return (
    <button
      type="submit"
      className="absolute right-2 h-6 bg-primary top-1.5 px-4 font-medium text-sm z-10 text-primary-foreground"
    >
      Subscribe
    </button>
  );
}

type Props = {
  group: string;
  placeholder: string;
  className?: string;
};

export function SubscribeForm({ group, placeholder, className }: Props) {
  const [isSubmitted, setSubmitted] = useState(false);
  const pathname = usePathname();

  if (pathname === "/generate" || pathname === "/mcp") {
    return null;
  }

  return (
    <div className="mr-4">
      <div className="flex justify-center">
        {isSubmitted ? (
          <div className="border border-[#2C2C2C] text-sm text-primary h-9 w-[290px] flex items-center py-0.5 px-2 justify-between">
            <p>Subscribed</p>

            <svg
              width="17"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check</title>
              <path
                d="m14.546 4.724-8 8-3.667-3.667.94-.94 2.727 2.72 7.06-7.053.94.94Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ) : (
          <form
            action={async (formData) => {
              setSubmitted(true);
              await subscribeAction(formData, group);

              setTimeout(() => {
                setSubmitted(false);
              }, 5000);
            }}
          >
            <fieldset className="relative">
              <input
                placeholder={placeholder}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                aria-label="Email address"
                required
                className={cn(
                  "bg-transparent text-primary outline-none py-0.5 px-2 w-[290px] placeholder-[#606060] h-9 border border-border text-sm",
                  className,
                )}
              />
              <SubmitButton />
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
}
