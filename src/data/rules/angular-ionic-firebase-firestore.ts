export const angularIonicFirebaseFirestoreRules = [
  {
    tags: ["ionic", "cordova", "angular", "firebase", "firestore"],
    title: "Angular Ionic Firebase Firestore Cursor Rules",
    slug: "angular-ionic-firebase-firestore-cursor-rules",
    libs: ["ionic", "cordova", "angular", "firebase", "firestore"],
    content: `
    You are an expert in Ionic, Cordova, and Firebase Firestore, Working with Typescript and Angular building apps for mobile and web.

    Project Structure and File Naming
    - Organize by feature directories (e.g., 'services/', 'components/', 'pipes/')
    - Use environment variables for different stages (development, staging, production)
    - Create build scripts for bundling and deployment
    - Implement CI/CD pipeline
    - Set up staging and canary environments
    - Structure Firestore collections logically (e.g., 'users/', 'spots/', 'bookings/')
    - Maintain Firebase configurations for different environments
  
  
    ## Project Structure and Organization
    - Use descriptive names for variables and functions (e.g 'getUsers', 'calculateTotalPrice').
    - Keep classes small and focused.
    - Avoid global state when possible.
    - Manage routing through a dedicated module
    - Use the latest ES6+ features and best practices for Typescript and Angular.
    - Centralize API calls and error handling through services
    - Manage all storage through single point of entry and retrievals. Also put storage keys at single to check and find.
    - Create dedicated Firebase services for each collection type
    - Implement Firebase error handling in a centralized service
    - Use Firebase transactions for data consistency
    - Use Firebase rules for data security
    - Use Firebase functions for serverless backend logic
    - Use Firebase storage for file uploads and downloads
    - Use Firebase authentication for user management
    - Use Firebase analytics for tracking user behavior
    - Use Firebase crash reporting for error tracking
    - Structure Firestore queries for optimal performance
    
    ## Naming Conventions
    - camelCase: functions, variables (e.g., \`getUsers\`, \`totalPrice\`)
    - kebab-case: file names (e.g., \`user-service.ts\`, \`home-component.ts\`)
    - PascalCase: classes (e.g., \`UserService\`)
    - Booleans: use prefixes like 'should', 'has', 'is' (e.g., \`shouldLoadData\`, \`isLoading\`).
    - UPPERCASE: constants and global variables (e.g., \`API_URL\`, \`APP_VERSION\`).
    - Firestore collections: plural nouns (e.g., \`users\`, \`bookings\`).
    - Firestore documents: descriptive IDs (e.g., \`user-\${uid}\`, \`booking-\${timestamp}\`).
  
    ## Dependencies and Frameworks
    - Avoid using any external frameworks or libraries unless its absolutely required.
    - Use native plugins through Ionic Native wrappers with proper fallbacks for a smooth user experience in both web and native platforms.
    - While choosing any external dependency, check for the following things:
        - Device compatibility
        - Active maintenance
        - Security
        - Documentation
        - Ease of integration and upgrade
    - Use native components for both mobile and web if available and fullfill the requirements.
    - If any native plugin is being used for andriod or ios, it should be handled in a centralized service and should not be used directly in the component.
    - Use official Firebase SDKs and AngularFire for Firestore integration.
    - Implement proper Firebase initialization and configuration.
    - Handle Firebase Authentication properly.
    - Set up appropriate Firebase Security Rules.
  
    ## UI and Styles
    - Prefer Ionic components.
    - Create reusable components for complex UI.
    - Use SCSS for styling.
    - Centralize themes, colors, and fonts.
    - Implement loading states for Firebase operations.
    - Handle Firebase offline data gracefully.
    - Show appropriate error messages for Firebase operations.
    - Implement real-time UI updates with Firebase snapshots.

    ## Performance and Optimization
    -  Implement lazy loading.
    - Use pre-fetching for critical data.
    - Use caching for all the data that is needed multiple times.
    - Use global error and alert handlers.
    - Integrate any crash reporting service for the application.
    - Use a centralised alert handler to handle all the alert in the application.
    - Implement Firebase offline persistence.
    - Use Firebase query cursors for pagination.
    - Optimize Firestore reads with proper indexing.
    - Cache Firestore query results.
    - Use Firestore batch operations for bulk updates.
    - Monitor Firestore quota usage.
    
    ## Testing
    - Write comprehensive unit tests
    - Make sure to cover all the edge cases and scenarios.
    - In case of Native plugins, write mock services for the same.
    - Test Firebase integration thoroughly
    - Mock Firestore services in tests
    - Test Firebase security rules
    - Implement Firebase emulator for testing
    - Test offline functionality
    - Verify Firebase error handling

    Follow the official Ionic/Angular and Firebase/Firestore guides for best practices.

    `,
    author: {
      name: "Jaro Navales",
      url: "https://github.com/jaronavales",
      avatar: "https://avatars.githubusercontent.com/u/7483452",
    },
  },
];
