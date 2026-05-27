# FeelDX Selection Assistant

A room materials and furniture selection tool. Users pick finishes across 8 room types (Kitchen, Bathroom, Living Room, Bedroom, Laundry, Dining Room, Home Office, Outdoor) and get a cost estimate + AI-generated design recommendation summary.

> The API is fully mocked with MSW — no backend or `.env` setup required.

---

## Tech Stack

| Layer | Package |
|---|---|
| UI | React 19, Tailwind CSS v4, shadcn/ui |
| Language | TypeScript 6 |
| Bundler | Vite 8 |
| Data fetching | TanStack Query v5, Axios |
| Validation | Zod |
| API mocking | MSW v2 |

---

## Running Locally

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
```

```bash
npm run build     # production build
npm run preview   # preview production build → http://localhost:3000
npm run lint      # run ESLint
```

---

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
