"use server";

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
  const { success } = await ratelimit.limit("api_calls");

 
  if (!success) {
    throw new Error("Too many requests. Please try again later.");
  }

  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = streamText({
      model: xai("grok-2"),
      prompt: `Analyze these dependencies and generate best practices for the most popular packages:

${dependencies}

Focus primarily on important production dependencies. Ignore version numbers and dev dependencies.

Return the response as a simple string with double line breaks between sections and single line breaks between rules, like this example:

React Best Practices:

Use functional components and hooks instead of class components
Implement proper React memo and useMemo for performance
Follow the React hooks rules strictly


Next.js Standards:

Utilize Next.js App Router for better performance
Implement proper error boundaries
Use proper data fetching patterns with suspense


TypeScript Practices:

Use TypeScript strict mode for better type safety
Follow proper type definitions
Implement comprehensive error handling


General Standards:

Keep components small and focused
Follow proper state management patterns
Implement proper testing practices

Format all rules as clear, actionable items. Focus on modern practices that improve:
- Code quality
- Performance
- Maintainability
- Security

Analyze both major frameworks and smaller utility libraries found in package.json, providing specific best practices for each.`,
      experimental_transform: smoothStream(),
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}