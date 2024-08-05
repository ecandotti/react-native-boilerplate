# ⚡️ ArchiPower - React Native Application Architecture with Expo

ArchiPower is a React Native application architecture template designed for modern mobile development. Built with Expo 51, Zustand for state management, and NativeWind for styling, this project demonstrates a robust and scalable architecture using Hexagonal Architecture and SOLID principles. Ideal for developing maintainable and testable mobile apps, ArchiPower provides a structured approach to managing state, services, and components, ensuring clean and efficient code practices.

## Table of Contents

1. [Technologies and Concepts](#technologies-and-concepts)
2. [Project Structure](#project-structure)
3. [Layers of Hexagonal Architecture](#layers-of-hexagonal-architecture)
4. [Data Flows and Interactions](#data-flows-and-interactions)
5. [Dependency Management](#dependency-management)
6. [State Management](#state-management)
7. [Navigation](#navigation)
8. [Key Principles](#key-principles)
9. [Advantages of this Architecture](#advantages-of-this-architecture)
10. [Basic Example: Add Todo to TodoList](#basic-example-add-todo-to-todolist)
11. [Installation](#installation)
12. [Cloning the Project](#cloning-the-project)

## Technologies and Concepts

| Technology                    | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| **React Native 📱**           | Framework for building mobile applications.       |
| **Expo 51 🚀**                | Toolkit for developing and deploying RN apps.     |
| **NativeWind 🎨**             | Styling with Tailwind CSS for React Native.       |
| **Zustand 🏗️**                | State management for React.                       |
| **ESLint 🔍**                 | Linting tool for code quality assurance.          |
| **Prettier ✨**               | Code formatter for consistent styling.            |
| **Hexagonal Architecture 🛠️** | Architectural pattern for better maintainability. |
| **SOLID Principles 🔒**       | Design principles for robust software.            |

## Project Structure

```
archipower/
├── __mocks__
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   └── _layout.tsx
├── assets
│   ├── css
│   ├── fonts
│   └── images
├── src
│   ├── application
│   ├── domain
│   │   ├── entities
│   │   └── repositories
│   ├── infrastructure
│   │   ├── repositories
│   │   ├── services
│   │   └── state
│   ├── presentation
│   │   ├── components
│   │   │   ├── common
│   │   │   └── screens
│   │   ├── constants
│   │   └── hooks
│   └── utils
├── README.md
├── app.config.ts
├── babel.config.js
├── expo-env.d.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

## Layers of Hexagonal Architecture

### 1. Core (Core of the application)

- **Domain**: Defines entities and repository
  - Example: `Todo.ts`, `TodoRepository.ts`
- **Application**: Contains use cases (use cases)
  - Example: `todo/createTodo.ts`

### 2. Infrastructure

- **Services**: Concrete implementations to interact with storage
  - Example: `LocalStorageService.ts`
- **Repositories**: Implement interfaces defined in the domain
  - Example: `TodoRepositoryImpl.ts`

### 3. Presentation

- **Components**: React Native Components
  - Example: `TodoScreen.tsx`
- **Hooks**: Custom Hooks to interface with services and state
  - Example: `useAuth.ts`
- **Store**: Global state management with Zustand
  - Example: `authStore.ts`

## Data Flows and Interactions

1. Components use custom hooks to interact with the application.
2. Hooks use the Zustand store to manage global state.
3. The Zustand store uses the core use cases.
4. Use cases use repositories defined in the domain.
5. The adapters in the infrastructure implement these repositories.
6. Services in the infrastructure manage concrete interactions with APIs or storage.

## Dependency Management

- Use of a factory or dependency injection container to create and manage service instances.
- Dependencies are injected via class constructors.

## State Management

- Zustand is used for global state management.
- Zustand stores encapsulate state logic and service interactions.
- Custom hooks provide a simple interface for components.

## Navigation

- Use of Expo Router for navigation management.
- Routes are defined in the `app/` folder.

## Key Principles

- Separation of concerns
- Inversion of dependencies
- Easier testability
- Improved flexibility and maintainability

## Advantages of this Architecture

1. Independence of the business domain from technical details.
2. Ease of changing implementations (e.g., moving from a REST API to GraphQL).
3. Simplified unit testing thanks to clear separation of responsibilities.
4. Improved long-term scalability and maintainability.
5. Compliance with SOLID principles.

## Basic Example: Add Todo to TodoList

1. **Domain**:

   - `Todo.ts` (entity)
   - `TodoRepository.ts` (repository interface)

2. **Application**:

   - `todo/createTodo.ts` (use case)

3. **Infrastructure**:

   - `localStorageService.ts` (storage service)
   - `TodoRepositoryImpl.ts` (implementation)

4. **Presentation**:
   - `todoStore.ts` (Zustand store for todo status)
   - `useTodo.ts` (Custom hook)
   - `TodoListScreen.tsx` (React component)

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/archipower.git
   cd archipower
   ```

2. **Install dependencies**:

   ```sh
   yarn install
   ```

3. **Start the Expo server**:

   ```sh
   yarn start
   ```

4. **Run the application on a simulator or physical device**:
   - **iOS**: Open the project in Xcode and run it.
   - **Android**: Use Android Studio or a physical device with the Expo Go app.
