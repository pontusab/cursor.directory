export const localScriptRules = [
  {
    tags: ["Typescript"],
    title: "Local script with comprehensive Typescript rules",
    libs: ["Vitest", "BiomeJS"],
    slug: "local-script-typescript-rules",
    author: {
      name: "Andrii Syrokomskyi",
      url: "https://syrokomskyi.com",
      avatar: "https://avatars.githubusercontent.com/u/311074?s=48&v=4",
    },
    content: `
You are an expert in modern Typescript.

# Use TypeScript Everywhere

- All code must be written in modern TypeScript, no JavaScript files.
- Always enable \`strict\` mode in \`tsconfig.json\` for maximum type safety.

# Prefer Interfaces Over Types

- When defining shapes for objects and components props, favor interfaces:

  \`\`\`ts
  interface User {
    id: string
    name: string
  }
  \`\`\`

- Avoid \`type\` unless it is strictly necessary (e.g., for union types or function signatures).

# Avoid \`any\` and \`unknown\`

- Do not use \`any\` or \`unknown\` types unless absolutely unavoidable.
- If a type is truly unknown, narrow it before use or define a precise type.

# Avoid Enums; Use Maps or Objects

- Instead of \`enum\`, prefer a plain object or map for constants:

  \`\`\`ts
  const Role = {
    Admin: 'admin',
    User: 'user'
  } as const
  \`\`\`

- This pattern provides clearer behavior and better flexibility.

# Always Declare Types Explicitly

- Every variable, function parameter, and return value must have an explicit type, unless type inference is completely unambiguous.
- Example:

  \`\`\`ts
  function handleLogin(userId: string): void {
    // ...
  }
  \`\`\`

# Use JSDoc (Where Applicable)

- For public APIs, classes, methods, or library exports, include JSDoc-style comments for clarity and tooling support:

  \`\`\`ts
  /**
   * Fetches user by ID.
   * @param userId The unique user ID
   * @returns The fetched user object
   */
  function getUserById(userId: string): User | null {
    // ...
  }
  \`\`\`

# Prefer Functional Patterns; Avoid Classes Unless Required

- Write functions and functional components wherever possible.

# Use the \`function\` Keyword for Named Functions

- For pure utility or helper functions, define them with the \`function\` keyword to leverage hoisting and consistent naming:

  \`\`\`ts
  export function calculateTotal(items: Item[]): number {
    // ...
  }
  \`\`\`

- For simple inline callbacks (map, filter, etc.), arrow functions are acceptable.

# Keep Functions Short and Focused

- Aim for a single responsibility, ideally fewer than 21 lines or “instructions.”
- Use early returns and guard clauses to reduce nesting.
- Example:

  \`\`\`ts
  function isValidEmail(email: string): boolean {
    if (!email.includes('@')) {
      return false;
    }
    // ..
    return true;
  }
  \`\`\`

# Name Booleans and Functions Verbosely

- For booleans, use verbs like \`is\`, \`has\`, \`should\`, \`can\`:

  \`\`\`ts
  const isLoading = false
  const hasError = false
  \`\`\`

- For functions, use action-oriented names—if it returns a boolean, use \`isSomething()\` or \`hasSomething()\`.
- If the function does not return anything, use \`executeX()\`, \`saveX()\`, or \`handleX()\`.

# Consistent File Naming

- Use lowercase with dashes for file and folder names (e.g., \`user-profile.ts\`).
- Use exactly one export per file when dealing with classes or a default export. Otherwise, named exports are fine.

# Leverage Type Inference Wisely

- TypeScript’s inference can be powerful:

  \`\`\`ts
  const user = { id: 'u1', name: 'Alice' } // Inferred type
  \`\`\`

- But do not rely on it if it obscures intent or clarity.

# Use Default Parameter Values Instead of Conditionals

- For optional function parameters, define default values to avoid \`if (!param) { ... }\` checks:

  \`\`\`ts
  function greetUser(name = 'Guest'): string {
    return \`Hello, ${name}!\`
  }
  \`\`\`

# RORO (Receive an Object, Return an Object)

- For multiple parameters, accept a single object argument; similarly, return an object for multiple outputs:

  \`\`\`ts
  interface LoginParams {
    email: string
    password: string
  }

  interface LoginResult {
    token: string
    expiresAt: string
  }

  function login({ email, password }: LoginParams): LoginResult {
    // ..
    return { token, expiresAt }
  }
  \`\`\`

# Avoid Unnecessary Type Assertions

- Do not use \`as\` or non-null assertion (\`!\`) unless absolutely required.
- Always validate or narrow unknown data instead of forcefully asserting.

# Keep Data Immutable Where Possible

- Use \`readonly\` for properties that never change and \`as const\` for literals:

  \`\`\`ts
  const config = {
    apiKey: 'XYZ',
    maxUsers: 100
  } as const
  \`\`\`

# Short, Single-Purpose Classes

- If classes are required:
  - Follow SOLID principles.
  - Keep them small (<210 lines, <12 methods).
  - Use interfaces to define the shape of data they manage.
  - Document each public method with JSDoc.

# Testing and Tooling

- Use a test framework (Vitest) with TypeScript support for all tests.
- Ensure all public APIs have test coverage.
- Use linters and formatters (BiomeJS) with TypeScript-specific rules.

# Minimize External Type Assertions

- For third-party libraries, install official or community-provided type definitions (\`@types/*\`).
- If none exist, create custom \`.d.ts\` definitions but keep them minimal.

# No Blank Lines Within a Function

- Keep function bodies dense and straightforward—use early returns and guard clauses, but avoid large blank separations.

# Single Export per File (If Class/Primary Export)

- Each file should have one main export. For utility modules with multiple small helpers, named exports are OK.

# Consistent TypeScript Configuration

- Use a shared \`tsconfig.json\` in monorepos or multi-package setups so that all projects follow the same rules (strict, noImplicitAny, esModuleInterop, etc.).

# Always Use English

- Write all identifiers, docs, and comments in English for clarity and consistency.

# File Structure

- Store all scripts in the \`./scripts\` folder.

# Package Manager

- Use \`pnpm\`.
`,
  },
];
