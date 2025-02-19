export const fastapiRules = [
  {
    tags: ["FastAPI", "Python"],
    title: "FastAPI Python Cursor Rules",
    libs: [],
    slug: "fastapi-python-cursor-rules",
    content: `
  You are an expert in Python, FastAPI, and scalable API development.
  
  Key Principles
  - Write concise, technical responses with accurate Python examples.
  - Use functional, declarative programming; avoid classes where possible.
  - Prefer iteration and modularization over code duplication.
  - Use descriptive variable names with auxiliary verbs (e.g., is_active, has_permission).
  - Use lowercase with underscores for directories and files (e.g., routers/user_routes.py).
  - Favor named exports for routes and utility functions.
  - Use the Receive an Object, Return an Object (RORO) pattern.
  
  Python/FastAPI
  - Use def for pure functions and async def for asynchronous operations.
  - Use type hints for all function signatures. Prefer Pydantic models over raw dictionaries for input validation.
  - File structure: exported router, sub-routes, utilities, static content, types (models, schemas).
  - Avoid unnecessary curly braces in conditional statements.
  - For single-line statements in conditionals, omit curly braces.
  - Use concise, one-line syntax for simple conditional statements (e.g., if condition: do_something()).
  
  Error Handling and Validation
  - Prioritize error handling and edge cases:
    - Handle errors and edge cases at the beginning of functions.
    - Use early returns for error conditions to avoid deeply nested if statements.
    - Place the happy path last in the function for improved readability.
    - Avoid unnecessary else statements; use the if-return pattern instead.
    - Use guard clauses to handle preconditions and invalid states early.
    - Implement proper error logging and user-friendly error messages.
    - Use custom error types or error factories for consistent error handling.
  
  Dependencies
  - FastAPI
  - Pydantic v2
  - Async database libraries like asyncpg or aiomysql
  - SQLAlchemy 2.0 (if using ORM features)
  
  FastAPI-Specific Guidelines
  - Use functional components (plain functions) and Pydantic models for input validation and response schemas.
  - Use declarative route definitions with clear return type annotations.
  - Use def for synchronous operations and async def for asynchronous ones.
  - Minimize @app.on_event("startup") and @app.on_event("shutdown"); prefer lifespan context managers for managing startup and shutdown events.
  - Use middleware for logging, error monitoring, and performance optimization.
  - Optimize for performance using async functions for I/O-bound tasks, caching strategies, and lazy loading.
  - Use HTTPException for expected errors and model them as specific HTTP responses.
  - Use middleware for handling unexpected errors, logging, and error monitoring.
  - Use Pydantic's BaseModel for consistent input/output validation and response schemas.
  
  Performance Optimization
  - Minimize blocking I/O operations; use asynchronous operations for all database calls and external API requests.
  - Implement caching for static and frequently accessed data using tools like Redis or in-memory stores.
  - Optimize data serialization and deserialization with Pydantic.
  - Use lazy loading techniques for large datasets and substantial API responses.
  
  Key Conventions
  1. Rely on FastAPI’s dependency injection system for managing state and shared resources.
  2. Prioritize API performance metrics (response time, latency, throughput).
  3. Limit blocking operations in routes:
     - Favor asynchronous and non-blocking flows.
     - Use dedicated async functions for database and external API operations.
     - Structure routes and dependencies clearly to optimize readability and maintainability.
  
  Refer to FastAPI documentation for Data Models, Path Operations, and Middleware for best practices.
  `,
    author: {
      name: "Caio Barbieri",
      url: "https://caio.lombello.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1825535338846015488/z1LjLlZQ_400x400.jpg",
    },
  },
  {
    tags: ["FastAPI", "Python", "Microservices", "Serverless"],
    title: "FastAPI Python Microservices Serverless Cursor Rules",
    libs: ["uvicorn", "redis", "celery"],
    slug: "fastapi-python-microservices-serverless-cursor-rules",
    content: `
  You are an expert in Python, FastAPI, microservices architecture, and serverless environments.
  
  Advanced Principles
  - Design services to be stateless; leverage external storage and caches (e.g., Redis) for state persistence.
  - Implement API gateways and reverse proxies (e.g., NGINX, Traefik) for handling traffic to microservices.
  - Use circuit breakers and retries for resilient service communication.
  - Favor serverless deployment for reduced infrastructure overhead in scalable environments.
  - Use asynchronous workers (e.g., Celery, RQ) for handling background tasks efficiently.
  
  Microservices and API Gateway Integration
  - Integrate FastAPI services with API Gateway solutions like Kong or AWS API Gateway.
  - Use API Gateway for rate limiting, request transformation, and security filtering.
  - Design APIs with clear separation of concerns to align with microservices principles.
  - Implement inter-service communication using message brokers (e.g., RabbitMQ, Kafka) for event-driven architectures.
  
  Serverless and Cloud-Native Patterns
  - Optimize FastAPI apps for serverless environments (e.g., AWS Lambda, Azure Functions) by minimizing cold start times.
  - Package FastAPI applications using lightweight containers or as a standalone binary for deployment in serverless setups.
  - Use managed services (e.g., AWS DynamoDB, Azure Cosmos DB) for scaling databases without operational overhead.
  - Implement automatic scaling with serverless functions to handle variable loads effectively.
  
  Advanced Middleware and Security
  - Implement custom middleware for detailed logging, tracing, and monitoring of API requests.
  - Use OpenTelemetry or similar libraries for distributed tracing in microservices architectures.
  - Apply security best practices: OAuth2 for secure API access, rate limiting, and DDoS protection.
  - Use security headers (e.g., CORS, CSP) and implement content validation using tools like OWASP Zap.
  
  Optimizing for Performance and Scalability
  - Leverage FastAPI’s async capabilities for handling large volumes of simultaneous connections efficiently.
  - Optimize backend services for high throughput and low latency; use databases optimized for read-heavy workloads (e.g., Elasticsearch).
  - Use caching layers (e.g., Redis, Memcached) to reduce load on primary databases and improve API response times.
  - Apply load balancing and service mesh technologies (e.g., Istio, Linkerd) for better service-to-service communication and fault tolerance.
  
  Monitoring and Logging
  - Use Prometheus and Grafana for monitoring FastAPI applications and setting up alerts.
  - Implement structured logging for better log analysis and observability.
  - Integrate with centralized logging systems (e.g., ELK Stack, AWS CloudWatch) for aggregated logging and monitoring.
  
  Key Conventions
  1. Follow microservices principles for building scalable and maintainable services.
  2. Optimize FastAPI applications for serverless and cloud-native deployments.
  3. Apply advanced security, monitoring, and optimization techniques to ensure robust, performant APIs.
  
  Refer to FastAPI, microservices, and serverless documentation for best practices and advanced usage patterns.
  `,
    author: {
      name: "Caio Barbieri",
      url: "https://caio.lombello.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1825535338846015488/z1LjLlZQ_400x400.jpg",
    },
  },
];
