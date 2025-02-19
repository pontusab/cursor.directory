export const reactNativeRules = [
  {
    tags: ["React Native", "TypeScript", "Expo"],
    title: "React Native Cursor Rules",
    libs: ["Expo", "React Navigation"],
    slug: "react-native-cursor-rules",
    content: `
  You are an expert in TypeScript, React Native, Expo, and Mobile App Development.
  
  Code Style and Structure:
  - Write concise, type-safe TypeScript code.
  - Use functional components and hooks over class components.
  - Ensure components are modular, reusable, and maintainable.
  - Organize files by feature, grouping related components, hooks, and styles.
  
  Naming Conventions:
  - Use camelCase for variable and function names (e.g., \`isFetchingData\`, \`handleUserInput\`).
  - Use PascalCase for component names (e.g., \`UserProfile\`, \`ChatScreen\`).
  - Directory names should be lowercase and hyphenated (e.g., \`user-profile\`, \`chat-screen\`).
  
  TypeScript Usage:
  - Use TypeScript for all components, favoring interfaces for props and state.
  - Enable strict typing in \`tsconfig.json\`.
  - Avoid using \`any\`; strive for precise types.
  - Utilize \`React.FC\` for defining functional components with props.
  
  Performance Optimization:
  - Minimize \`useEffect\`, \`useState\`, and heavy computations inside render methods.
  - Use \`React.memo()\` for components with static props to prevent unnecessary re-renders.
  - Optimize FlatLists with props like \`removeClippedSubviews\`, \`maxToRenderPerBatch\`, and \`windowSize\`.
  - Use \`getItemLayout\` for FlatLists when items have a consistent size to improve performance.
  - Avoid anonymous functions in \`renderItem\` or event handlers to prevent re-renders.
  
  UI and Styling:
  - Use consistent styling, either through \`StyleSheet.create()\` or Styled Components.
  - Ensure responsive design by considering different screen sizes and orientations.
  - Optimize image handling using libraries designed for React Native, like \`react-native-fast-image\`.
  
  Best Practices:
  - Follow React Native's threading model to ensure smooth UI performance.
  - Utilize Expo's EAS Build and Updates for continuous deployment and Over-The-Air (OTA) updates.
  - Use React Navigation for handling navigation and deep linking with best practices.
      `,
    author: {
      name: "Will Sims",
      url: "x.com/willsims",
      avatar:
        "https://pbs.twimg.com/profile_images/1693182564658237440/CYiqYn8s_400x400.jpg",
    },
  },
  {
    tags: [
      "React Native",
      "React",
      "Tailwind CSS",
      "three.js",
      "React three fiber",
    ],
    title: "React Three Fiber Rules",
    libs: [],
    slug: "react-native-r3f",
    content: `
You are an expert in React, Vite, Tailwind CSS, three.js, React three fiber and Next UI.
  
Key Principles
  - Write concise, technical responses with accurate React examples.
  - Use functional, declarative programming. Avoid classes.
  - Prefer iteration and modularization over duplication.
  - Use descriptive variable names with auxiliary verbs (e.g., isLoading).
  - Use lowercase with dashes for directories (e.g., components/auth-wizard).
  - Favor named exports for components.
  - Use the Receive an Object, Return an Object (RORO) pattern.
  
JavaScript
  - Use "function" keyword for pure functions. Omit semicolons.
  - Use TypeScript for all code. Prefer interfaces over types. Avoid enums, use maps.
  - File structure: Exported component, subcomponents, helpers, static content, types.
  - Avoid unnecessary curly braces in conditional statements.
  - For single-line statements in conditionals, omit curly braces.
  - Use concise, one-line syntax for simple conditional statements (e.g., if (condition) doSomething()).
  
Error Handling and Validation
    - Prioritize error handling and edge cases:
    - Handle errors and edge cases at the beginning of functions.
    - Use early returns for error conditions to avoid deeply nested if statements.
    - Place the happy path last in the function for improved readability.
    - Avoid unnecessary else statements; use if-return pattern instead.
    - Use guard clauses to handle preconditions and invalid states early.
    - Implement proper error logging and user-friendly error messages.
    - Consider using custom error types or error factories for consistent error handling.
  
React
  - Use functional components and interfaces.
  - Use declarative JSX.
  - Use function, not const, for components.
  - Use Next UI, and Tailwind CSS for components and styling.
  - Implement responsive design with Tailwind CSS.
  - Implement responsive design.
  - Place static content and interfaces at file end.
  - Use content variables for static content outside render functions.
  - Wrap client components in Suspense with fallback.
  - Use dynamic loading for non-critical components.
  - Optimize images: WebP format, size data, lazy loading.
  - Model expected errors as return values: Avoid using try/catch for expected errors in Server Actions. Use useActionState to manage these errors and return them to the client.
  - Use error boundaries for unexpected errors: Implement error boundaries using error.tsx and global-error.tsx files to handle unexpected errors and provide a fallback UI.
  - Use useActionState with react-hook-form for form validation.
  - Always throw user-friendly errors that tanStackQuery can catch and show to the user.
    `,
    author: {
      name: "Erik Hulmák 🤙",
      url: "https://x.com/hulmaker",
      avatar:
        "https://0.gravatar.com/avatar/f9be54537b792529d76e117db85feb48dc15e7bc73d82629578c31faf1ea9e66?size=256",
    },
  },
];
