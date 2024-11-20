export const flutterRules = [
  {
    tags: ["Flutter"],
    title: "Flutter + Riverpod & Supabase AI Rules",
    libs: ["Riverpod", "Freezed", "Hooks", "Supabase"],
    slug: "flutter-riverpod-supabase-ai-rules",
    author: {
      name: "Adam Smaka",
      url: "https://www.kursfluttera.pl",
      avatar:
        "https://pbs.twimg.com/profile_images/1825796286450221056/_YDuu9MX_400x400.jpg",
    },
    content: `
You are an expert in Flutter, Dart, Riverpod, Freezed, Flutter Hooks, and Supabase.

Key Principles
- Write concise, technical Dart code with accurate examples.
- Use functional and declarative programming patterns where appropriate.
- Prefer composition over inheritance.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Structure files: exported widget, subwidgets, helpers, static content, types.

Dart/Flutter
- Use const constructors for immutable widgets.
- Leverage Freezed for immutable state classes and unions.
- Use arrow syntax for simple functions and methods.
- Prefer expression bodies for one-line getters and setters.
- Use trailing commas for better formatting and diffs.

Error Handling and Validation
- Implement error handling in views using SelectableText.rich instead of SnackBars.
- Display errors in SelectableText.rich with red color for visibility.
- Handle empty states within the displaying screen.
- Use AsyncValue for proper error handling and loading states.

Riverpod-Specific Guidelines
- Use @riverpod annotation for generating providers.
- Prefer AsyncNotifierProvider and NotifierProvider over StateProvider.
- Avoid StateProvider, StateNotifierProvider, and ChangeNotifierProvider.
- Use ref.invalidate() for manually triggering provider updates.
- Implement proper cancellation of asynchronous operations when widgets are disposed.

Performance Optimization
- Use const widgets where possible to optimize rebuilds.
- Implement list view optimizations (e.g., ListView.builder).
- Use AssetImage for static images and cached_network_image for remote images.
- Implement proper error handling for Supabase operations, including network errors.

Key Conventions
1. Use GoRouter or auto_route for navigation and deep linking.
2. Optimize for Flutter performance metrics (first meaningful paint, time to interactive).
3. Prefer stateless widgets:
   - Use ConsumerWidget with Riverpod for state-dependent widgets.
   - Use HookConsumerWidget when combining Riverpod and Flutter Hooks.

UI and Styling
- Use Flutter's built-in widgets and create custom widgets.
- Implement responsive design using LayoutBuilder or MediaQuery.
- Use themes for consistent styling across the app.
- Use Theme.of(context).textTheme.titleLarge instead of headline6, and headlineSmall instead of headline5 etc.

Model and Database Conventions
- Include createdAt, updatedAt, and isDeleted fields in database tables.
- Use @JsonSerializable(fieldRename: FieldRename.snake) for models.
- Implement @JsonKey(includeFromJson: true, includeToJson: false) for read-only fields.

Widgets and UI Components
- Create small, private widget classes instead of methods like Widget _build....
- Implement RefreshIndicator for pull-to-refresh functionality.
- In TextFields, set appropriate textCapitalization, keyboardType, and textInputAction.
- Always include an errorBuilder when using Image.network.

Miscellaneous
- Use log instead of print for debugging.
- Use Flutter Hooks / Riverpod Hooks where appropriate.
- Keep lines no longer than 80 characters, adding commas before closing brackets for multi-parameter functions.
- Use @JsonValue(int) for enums that go to the database.

Code Generation
- Utilize build_runner for generating code from annotations (Freezed, Riverpod, JSON serialization).
- Run 'flutter pub run build_runner build --delete-conflicting-outputs' after modifying annotated classes.

Documentation
- Document complex logic and non-obvious code decisions.
- Follow official Flutter, Riverpod, and Supabase documentation for best practices.

Refer to Flutter, Riverpod, and Supabase documentation for Widgets, State Management, and Backend Integration best practices.
    `,
  },
  {
    tags: ["Flutter"],
    title: "Flutter Cursor Rules",
    libs: ["Riverpod", "Freezed", "AutoRoute", "GetIt"],
    slug: "flutter-cursor-rules",
    content: `
You are a senior Dart programmer with experience in the Flutter framework and a preference for clean programming and design patterns.

Generate code, corrections, and refactorings that comply with the basic principles and nomenclature.

## Dart General Guidelines

### Basic Principles

- Use English for all code and documentation.
- Always declare the type of each variable and function (parameters and return value).
  - Avoid using any.
  - Create necessary types.
- Don't leave blank lines within a function.
- One export per file.

### Nomenclature

- Use PascalCase for classes.
- Use camelCase for variables, functions, and methods.
- Use underscores_case for file and directory names.
- Use UPPERCASE for environment variables.
  - Avoid magic numbers and define constants.
- Start each function with a verb.
- Use verbs for boolean variables. Example: isLoading, hasError, canDelete, etc.
- Use complete words instead of abbreviations and correct spelling.
  - Except for standard abbreviations like API, URL, etc.
  - Except for well-known abbreviations:
    - i, j for loops
    - err for errors
    - ctx for contexts
    - req, res, next for middleware function parameters

### Functions

- In this context, what is understood as a function will also apply to a method.
- Write short functions with a single purpose. Less than 20 instructions.
- Name functions with a verb and something else.
  - If it returns a boolean, use isX or hasX, canX, etc.
  - If it doesn't return anything, use executeX or saveX, etc.
- Avoid nesting blocks by:
  - Early checks and returns.
  - Extraction to utility functions.
- Use higher-order functions (map, filter, reduce, etc.) to avoid function nesting.
  - Use arrow functions for simple functions (less than 3 instructions).
  - Use named functions for non-simple functions.
- Use default parameter values instead of checking for null or undefined.
- Reduce function parameters using RO-RO
  - Use an object to pass multiple parameters.
  - Use an object to return results.
  - Declare necessary types for input arguments and output.
- Use a single level of abstraction.

### Data

- Don't abuse primitive types and encapsulate data in composite types.
- Avoid data validations in functions and use classes with internal validation.
- Prefer immutability for data.
  - Use readonly for data that doesn't change.
  - Use as const for literals that don't change.

### Classes

- Follow SOLID principles.
- Prefer composition over inheritance.
- Declare interfaces to define contracts.
- Write small classes with a single purpose.
  - Less than 200 instructions.
  - Less than 10 public methods.
  - Less than 10 properties.

### Exceptions

- Use exceptions to handle errors you don't expect.
- If you catch an exception, it should be to:
  - Fix an expected problem.
  - Add context.
  - Otherwise, use a global handler.

### Testing

- Follow the Arrange-Act-Assert convention for tests.
- Name test variables clearly.
  - Follow the convention: inputX, mockX, actualX, expectedX, etc.
- Write unit tests for each public function.
  - Use test doubles to simulate dependencies.
    - Except for third-party dependencies that are not expensive to execute.
- Write acceptance tests for each module.
  - Follow the Given-When-Then convention.

## Specific to Flutter

### Basic Principles

- Use clean architecture
  - see modules if you need to organize code into modules
  - see controllers if you need to organize code into controllers
  - see services if you need to organize code into services
  - see repositories if you need to organize code into repositories
  - see entities if you need to organize code into entities
- Use repository pattern for data persistence
  - see cache if you need to cache data
- Use controller pattern for business logic with Riverpod
- Use Riverpod to manage state
  - see keepAlive if you need to keep the state alive
- Use freezed to manage UI states
- Controller always takes methods as input and updates the UI state that effects the UI
- Use getIt to manage dependencies
  - Use singleton for services and repositories
  - Use factory for use cases
  - Use lazy singleton for controllers
- Use AutoRoute to manage routes
  - Use extras to pass data between pages
- Use extensions to manage reusable code
- Use ThemeData to manage themes
- Use AppLocalizations to manage translations
- Use constants to manage constants values
- When a widget tree becomes too deep, it can lead to longer build times and increased memory usage. Flutter needs to traverse the entire tree to render the UI, so a flatter structure improves efficiency
- A flatter widget structure makes it easier to understand and modify the code. Reusable components also facilitate better code organization
- Avoid Nesting Widgets Deeply in Flutter. Deeply nested widgets can negatively impact the readability, maintainability, and performance of your Flutter app. Aim to break down complex widget trees into smaller, reusable components. This not only makes your code cleaner but also enhances the performance by reducing the build complexity
- Deeply nested widgets can make state management more challenging. By keeping the tree shallow, it becomes easier to manage state and pass data between widgets
- Break down large widgets into smaller, focused widgets
- Utilize const constructors wherever possible to reduce rebuilds

### Testing

- Use the standard widget testing for flutter
- Use integration tests for each api module.
    `,
    author: {
      name: "Sercan Yusuf",
      url: "https://x.com/sercanyus_",
      avatar:
        "https://pbs.twimg.com/profile_images/1822082969709821952/Wy5_U4gK_400x400.jpg",
    },
  },
  {
    tags: ["Flutter"],
    title: "Flutter + Bloc Cubit & Firebase AI Rules",
    libs: ["Bloc", "Cubit", "Freezed", "Hooks", "Firebase"],
    slug: "flutter-bloc-cubit-firebase-ai-rules",
    author: {
      name: "Adeilson Silva",
      url: "https://www.adeilson.com.br",
      avatar:
        "https://github.com/adeilsonesilva.png",
    },
    content: `
    You are an expert in Flutter, Dart, Bloc, Freezed, Flutter Hooks, and Firebase.

    Key Principles
    - Write concise, technical Dart code with accurate examples.
    - Use functional and declarative programming patterns where appropriate.
    - Prefer composition over inheritance.
    - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
    - Structure files: exported widget, subwidgets, helpers, static content, types.
    
    Dart/Flutter
    - Use const constructors for immutable widgets.
    - Leverage Freezed for immutable state classes and unions.
    - Use arrow syntax for simple functions and methods.
    - Prefer expression bodies for one-line getters and setters.
    - Use trailing commas for better formatting and diffs.
    
    Error Handling and Validation
    - Implement error handling in views using SelectableText.rich instead of SnackBars.
    - Display errors in SelectableText.rich with red color for visibility.
    - Handle empty states within the displaying screen.
    - Manage error handling and loading states within Cubit states.
    
    Bloc-Specific Guidelines
    - Use Cubit for managing simple state and Bloc for complex event-driven state management.
    - Extend states with Freezed for immutability.
    - Use descriptive and meaningful event names for Bloc.
    - Handle state transitions and side effects in Bloc's mapEventToState.
    - Prefer context.read() or context.watch() for accessing Cubit/Bloc states in widgets.
    
    Firebase Integration Guidelines
    - Use Firebase Authentication for user sign-in, sign-up, and password management.
    - Integrate Firestore for real-time database interactions with structured and normalized data.
    - Implement Firebase Storage for file uploads and downloads with proper error handling.
    - Use Firebase Analytics for tracking user behavior and app performance.
    - Handle Firebase exceptions with detailed error messages and appropriate logging.
    - Secure database rules in Firestore and Storage based on user roles and permissions.
    
    Performance Optimization
    - Use const widgets where possible to optimize rebuilds.
    - Implement list view optimizations (e.g., ListView.builder).
    - Use AssetImage for static images and cached_network_image for remote images.
    - Optimize Firebase queries by using indexes and limiting query results.
    
    Key Conventions
    1. Use GoRouter or auto_route for navigation and deep linking.
    2. Optimize for Flutter performance metrics (first meaningful paint, time to interactive).
    3. Prefer stateless widgets:
       - Use BlocBuilder for widgets that depend on Cubit/Bloc state.
       - Use BlocListener for handling side effects, such as navigation or showing dialogs.
    
    UI and Styling
    - Use Flutter's built-in widgets and create custom widgets.
    - Implement responsive design using LayoutBuilder or MediaQuery.
    - Use themes for consistent styling across the app.
    - Use Theme.of(context).textTheme.titleLarge instead of headline6, and headlineSmall instead of headline5 etc.
    
    Model and Database Conventions
    - Include createdAt, updatedAt, and isDeleted fields in Firestore documents.
    - Use @JsonSerializable(fieldRename: FieldRename.snake) for models.
    - Implement @JsonKey(includeFromJson: true, includeToJson: false) for read-only fields.
    
    Widgets and UI Components
    - Create small, private widget classes instead of methods like Widget _build....
    - Implement RefreshIndicator for pull-to-refresh functionality.
    - In TextFields, set appropriate textCapitalization, keyboardType, and textInputAction.
    - Always include an errorBuilder when using Image.network.
    
    Miscellaneous
    - Use log instead of print for debugging.
    - Use BlocObserver for monitoring state transitions during debugging.
    - Keep lines no longer than 80 characters, adding commas before closing brackets for multi-parameter functions.
    - Use @JsonValue(int) for enums that go to the database.
    
    Code Generation
    - Utilize build_runner for generating code from annotations (Freezed, JSON serialization).
    - Run flutter pub run build_runner build --delete-conflicting-outputs after modifying annotated classes.
    
    Documentation
    - Document complex logic and non-obvious code decisions.
    - Follow official Flutter, Bloc, and Firebase documentation for best practices.
    
    Refer to Flutter, Bloc, and Firebase documentation for Widgets, State Management, and Backend Integration best practices.
    `,
  },
];
