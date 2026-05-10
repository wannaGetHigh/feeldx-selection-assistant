# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Frontend Engineering Conventions & Specs

## 1. Architecture: The "Developer Way"

We follow the **"React Project Structure for Scale"** principles, adapted for modern bundling.
Reference: [Developer Way Article](https://www.developerway.com/posts/react-project-structure)

### Core Principles

1.  **Decomposition**: The app is a collection of independent **Features**.
    - Located in `src/feature-*` or `packages/*`.
2.  **No Barrel Files**:
    - ❌ `index.ts` re-exports (e.g., `export * from './my-component'`).
    - ✅ Import directly: `import { MyComponent } from '@/feature-*/components/my-component'`.
    - **Reason**: Improves tree-shaking and Webpack/Turbopack performance.
3.  **Centralized Data Layer**:
    - API definitions and React Query hooks are **centralized** to encourage reuse and caching consistency.
    - `src/api/` -> API client and DTOs.
    - `src/hooks/queries/` -> Read operations.
    - `src/hooks/mutations/` -> Write operations.

## 2. Feature Structure Template

Every `src/feature-*` should focus on **UI and Business Logic**, delegating data fetching to root.

```text
src/feature-*/
├── components/         # UI Components (Hierarchical)
│   ├── user-card/      # Complex component -> Folder
│   │   ├── user-card.tsx
│   │   └── user-avatar.tsx
│   └── button.tsx      # Simple component
├── hooks/              # Feature-specific VIEW LOGIC (not data fetching)
├── types.ts            # Feature-specific UI types
└── utils.ts            # Feature-specific helpers
```

## 3. Data Fetching Standards

### Queries (`src/hooks/queries/`)

Group related resources into a single file (Domain-based grouping).
Always have suffix with Query e.g. `useGetTeamsQuery` or `useGetTeamDetailQuery`

**File**: `use-teams-queries.ts`

```ts
// Includes multiple hooks for the "Teams" domain
export const useGetTeamsQuery = () => useQuery(...)
export const useGetTeamByIdQuery = (id: string) => useQuery(...)
export const useGetTeamMembersQuery = (id: string) => useQuery(...)
```

### Mutations (`src/hooks/mutations/`)

Group related actions into a single file.
Always have suffix with Mutation e.g. `useCreateTeamMutation` or `useUpdateTeamMutation`

**File**: `use-teams-mutations.ts`

```ts
export const useCreateTeamMutation = () => useMutation(...)
export const useUpdateTeamMutation = () => useMutation(...)
export const useDeleteTeamMutation = () => useMutation(...)
```

## 4. State Management

- **Server State**: `TanStack Query` (React Query).
  - **Keys**: Must be defined in `src/query-key-factory.ts`.
- **Client State**: `Zustand`.
  - Use for global UI state.

## 5. Hierarchy Rules (The Tree)

1.  **Parent -> Child**: Allowed.
2.  **Child -> Parent**: **FORBIDDEN**.
3.  **Cross-Feature Imports**:
    - ✅ **Allowed**: `import { DashboardChart } from '@/feature-dashboard/components/chart'`
    - ⚠️ **Caution**: If Feature A imports heavily from Feature B, consider:
      - Moving shared code to `src/components/` (Shared UI).
      - Moving shared logic to `src/hooks/` or `src/utils/`.
    - ❌ **Forbidden**: Circular dependencies (A imports B, B imports A).

## 6. Testing Strategy

- **Unit/Integration**: Jest + React Testing Library.
  - Test files adjacent to source: `my-component.test.tsx`.
- **Development**: Storybook.
  - Stories adjacent to source: `my-component.stories.tsx`.
