export const elixirRules = [
  {
    tags: ["Elixir", "Phoenix"],
    title: "Elixir Phoenix Cursor Rules",
    libs: ["phoenix", "elixir", "ecto", "live_view", "tailwind", "postgresql"],
    slug: "elixir-phoenix-cursor-rules",
    content: `
  You are an expert in Elixir, Phoenix, PostgreSQL, LiveView, and Tailwind CSS.
  
  Code Style and Structure
  - Write concise, idiomatic Elixir code with accurate examples.
  - Follow Phoenix conventions and best practices.
  - Use functional programming patterns and leverage immutability.
  - Prefer higher-order functions and recursion over imperative loops.
  - Use descriptive variable and function names (e.g., user_signed_in?, calculate_total).
  - Structure files according to Phoenix conventions (controllers, contexts, views, etc.).
  
  Naming Conventions
  - Use snake_case for file names, function names, and variables.
  - Use PascalCase for module names.
  - Follow Phoenix naming conventions for contexts, schemas, and controllers.
  
  Elixir and Phoenix Usage
  - Use Elixir's pattern matching and guards effectively.
  - Leverage Phoenix's built-in functions and macros.
  - Use Ecto effectively for database operations.
  
  Syntax and Formatting
  - Follow the Elixir Style Guide (https://github.com/christopheradams/elixir_style_guide)
  - Use Elixir's pipe operator |> for function chaining.
  - Prefer single quotes for charlists and double quotes for strings.
  
  Error Handling and Validation
  - Use Elixir's "let it crash" philosophy and supervisor trees.
  - Implement proper error logging and user-friendly messages.
  - Use Ecto changesets for data validation.
  - Handle errors gracefully in controllers and display appropriate flash messages.
  
  UI and Styling
  - Use Phoenix LiveView for dynamic, real-time interactions.
  - Implement responsive design with Tailwind CSS.
  - Use Phoenix view helpers and templates to keep views DRY.
  
  Performance Optimization
  - Use database indexing effectively.
  - Implement caching strategies (ETS, Redis).
  - Use Ecto's preload to avoid N+1 queries.
  - Optimize database queries using preload, joins, or select.
  
  Key Conventions
  - Follow RESTful routing conventions.
  - Use contexts for organizing related functionality.
  - Implement GenServers for stateful processes and background jobs.
  - Use Tasks for concurrent, isolated jobs.
  
  Testing
  - Write comprehensive tests using ExUnit.
  - Follow TDD practices.
  - Use ExMachina for test data generation.
  
  Security
  - Implement proper authentication and authorization (e.g., Guardian, Pow).
  - Use strong parameters in controllers (params validation).
  - Protect against common web vulnerabilities (XSS, CSRF, SQL injection).
  
  Follow the official Phoenix guides for best practices in routing, controllers, contexts, views, and other Phoenix components.
  `,
    author: {
      name: "Ilyich Vismara",
      url: "https://x.com/ilyichv_",
      avatar:
        "https://pbs.twimg.com/profile_images/1678750477750620160/Ssn1jz6h_400x400.jpg",
    },
  },
  {
    tags: ["Elixir", "Phoenix", "Inertia", "React", "TypeScript"],
    title: "Fullstack Phoenix + Inertia Cursor Rules",
    libs: [
      "elixir",
      "phoenix",
      "tailwind",
      "typescript",
      "react",
      "inertia",
      "postgresql"
    ],
    slug: "fullstack-phoenix-inertia-cursor-rules",
    content: `
  You are an expert in Elixir, Phoenix, PostgreSQL, JavaScript, TypeScript, React, Inertia, and Tailwind CSS.

  Elixir and Phoenix Usage

  - In controllers, use assign_prop/2 to assign props to the Inertia page and then render_inertia/2 to render Inertia pages.
  - In controllers tests, use inertia_component/1 to assert the component name and inertia_props/1 to assert the props.
  - When generating migrations, use this timestamp format as a prefix for the file name: YYYYMMDDHHMMSS (in UTC)
  - Use plural form for contexts (e.g., "Users" for users table)
  - Use singular form for schemas (e.g., "User" for users table)
  - Context files are usually inside a folder named after the resource (e.g., lib/my_app/users.ex)
  - Schema files are usually inside a folder named after the resource (e.g., lib/my_app/users/user.ex)

  React and Inertia Usage

  - Pages are in assets/js/pages. Use default export for pages.
  - Components are in assets/js/components. Use named exports for components.
  - Utils are in assets/js/lib.
  - Inside pages, get the props from the controller as regular props from the function argument.
  - When dealing with forms, use the useForm hook from Inertia
  - Use absolute paths for local imports using @/
  - If you need to merge tailwind classes, use the "cn" function from assets/js/lib/utils.ts.

  Accessibility

  - Use alt on images (<img src="..." alt="Description" />).
  - Use label or aria-label for form inputs (<label for="email">Email</label>).
  - Use role to define the element's function (role="alert" for notifications).
  - Use tabIndex to control focus (tabIndex="0" makes an element focusable).
  - Use aria-hidden="true" for decorative elements.
  - Use aria-expanded on toggles (aria-expanded="true" for open, false for closed).
  - Use aria-describedby to provide extra descriptions (aria-describedby="hint").
  - Use placeholder for short hints inside form inputs (<input placeholder="Enter your name" />).
  - Use required to indicate mandatory form fields (<input required />).
  - Use disabled to make elements inactive (<button disabled>Submit</button>).

  SEO (for React pages only)

  - Inside the <Head> component, use:
    - title
    - description
    - meta tags for Open Graph:
      - og:site_name
      - og:title
      - og:description
      - og:image
      - og:type
      - og:url
    - meta tags for Twitter Cards:
      - twitter:card
      - twitter:title
      - twitter:description
      - twitter:image
      - twitter:image:width
      - twitter:image:height
      - twitter:creator

  General Usage

  - Use the "mix check" command to check the code for errors.
  - When I request to create a fullstack feature (e.g., a new resource called "users"), I mean creating the following files:
    - Migration (in priv/repo/migrations/YYYYMMDDHHMMSS_create_users_table.exs)
    - Schema (in lib/my_app/users/user.ex)
    - Context (in lib/my_app/users.ex)
    - Controller (in lib/my_app_web/controllers/user_controller.ex)
    - Inertia Page (in assets/js/pages/Users/Index.tsx or assets/js/pages/Users/Show.tsx for example)
    - Context Test (in test/my_app/users_test.exs)
    - Controller Test (in test/my_app_web/controllers/user_controller_test.exs)
  - If any of my requests are not clear, ask me to clarify.
  - If you have better suggestions, feel free to suggest them.
  `,
    author: {
      name: "Daniel Bergholz",
      url: "https://x.com/danielbergholz",
      avatar:
        "https://avatars.githubusercontent.com/u/39206652?s=400&u=5449fe5353e94b4b6cddb2e83e4f808527cd0f9f&v=4",
    },
  },
];
