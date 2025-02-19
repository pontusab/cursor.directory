"use server";

import { getSession } from "@/utils/supabase/auth";
import { xai } from "@ai-sdk/xai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { smoothStream, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1m"),
});

export async function generateRule(dependencies: string) {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Authentication required");
  }

  const { success } = await ratelimit.limit("api_calls");

  if (!success) {
    throw new Error("Too many requests. Please try again later.");
  }

  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = streamText({
      model: xai("grok-2"),
      prompt: `Analyze these dependencies and generate best practices for each major library/framework. Tell the user in the begining that they need to adapt the globs depending on the project. And keep it short and concise. Use this format for each section:

---
name: [framework-name]-best-practices.mdc
description: Best practices and guidelines for [Framework Name]
globs: **/*.{ts,tsx,js,jsx}
---

For example:

---
name: nextjs-best-practices.mdc
description: Best practices for Next.js applications and routing
globs: **/*.{ts,tsx}
---

- Use the App Router for better performance
- Implement proper error boundaries
- Use proper data fetching patterns with suspense

---
name: typescript-best-practices.mdc
description: TypeScript coding standards and type safety guidelines
globs: **/*.{ts,tsx}
---

- Use strict null checks
- Prefer interface over type
- Use type guards and assertions
- Implement proper type inference

---
name: ui-and-styling-best-practices.mdc
description: Guidelines for UI components and styling with Tailwind/Shadcn
globs: **/*.{ts,tsx,css}
---

- Use Tailwind CSS for styling
- Follow Shadcn UI component guidelines
- Ensure UI is responsive and accessible

Add more practices for packages if needed. Additional to this, add conventions for some of the practices, only the important ones of main frameworks and libraries in this format, the following is just an example, don't use it, and generate a minimum of seven conventions and up to unlimited ones:

---
name: project-conventions.mdc
description: This rule explains project tech stack and some basic code conventions
globs: *
---

## Project conventions

These conventions should be used when writing code for [project-name].

### Convention 1: Minimize dependencies, vanilla Laravel is plenty

Dependencies are a natural part of building software, but we aim to minimize them when possible to keep this open-source codebase easy to understand, maintain, and contribute to.

- Push Laravel to its limits before adding new dependencies
- When a new dependency is added, there must be a strong technical or business reason to add it
- When adding dependencies, you should favor old and reliable over new and flashy

Add more conventions as needed, putting a number for each convention, a clear title, and extended description. If we add more conventions we will have a better code generation, so, if you are descriptive with each convention the code generated will be much better.

Generate separate sections with best practices for each major library/framework found in these dependencies:

${dependencies}

Focus on providing specific, actionable best practices that are unique to each framework/library.`,
      experimental_transform: smoothStream(),
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
