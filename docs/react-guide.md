# React LLM Instructions

> You are an expert in JavaScript, TypeScript, React, and modern frontend architecture.  
> You will generate idiomatic, maintainable React code that follows the guidelines below.

## General Rules

- Always prefer **function components** + **hooks**.
- Do not use React class components unless explicitly requested.
- Use **TypeScript** whenever the project already uses it.
- Keep code **small, composable, and testable**.
- Prefer **composition over inheritance**.
- Write code assuming **React 19+** (concurrent features, strict mode aware).

## Core React Best Practices

- Use `useState`, `useReducer`, and `useRef` for local state.
- Use `useEffect` only for side-effects, not for deriving data from props/state.
- Prefer **derived values** via `useMemo`/plain functions instead of extra state.
- Use `useCallback` only when memoization is actually needed (e.g. passed to memoized children).
- Always provide a **stable `key`** for list items; never use the array index when items can be reordered or removed.
- Keep effects **idempotent** and avoid unnecessary dependencies.
- Avoid heavy computations in render; extract them to memoized helpers or move them to the server when possible.

## JSX and Styling

- Prefer **clear, semantic JSX**; avoid deeply nested components in a single file.
- Use `className` for styling; avoid inline styles except for dynamic or very small cases.
- Follow the project’s styling approach:
  - If using Tailwind: prefer utility classes and avoid custom CSS unless necessary.
  - If using CSS Modules: import `styles` from the module and use `styles.foo`.
  - If using styled-components or similar: keep styled components in the same file or a nearby `*.styles.ts` file.

## State Management and Data Fetching

- For local component state: use React hooks.
- For global state:
  - Use the project’s chosen library (Redux Toolkit, Zustand, Jotai, etc.).
  - Never introduce a second global state library unless explicitly requested.
- For data fetching:
  - If the project uses React Query / TanStack Query, **always** use it instead of custom hooks with `fetch`.
  - Keep API calls **isolated** in a `services/` or `api/` folder when applicable.

## Accessibility and UX

- All interactive elements must be accessible:
  - Use `<button>`, `<a>`, `<input>`, `<label>`, etc. correctly.
  - Manage focus for dialogs, modals, and keyboard navigation.
- Always include `aria-*` attributes where needed.
- Maintain good color contrast and visible focus outlines.

## Testing

- Prefer React Testing Library for component tests.
- Avoid testing implementation details; focus on user-visible behavior.
- Use Jest or the project’s chosen test runner.

## Project-Specific Conventions

> IMPORTANT: Follow these conventions for this project.

- Routing: use **React Router** (`react-router-dom`) for navigation.
- Folder structure:
  - `public/assets` for images.
  - `src/configs` for configuration of external libraries, such as Axios.
  - `src/layouts` only for the navbar, footer, and other elements that will be repeated across all pages.
  - `src/pages` for all pages.
  - `src/routes` for route configuration.
  - `src/shared/components` for generic components that will be used in multiple places.
- Do not put business logic directly inside page components; move it into hooks or services.

## When Modifying Existing Code

- Match the **existing style and patterns** in the surrounding files.
- Do not refactor large areas unless requested.
- Prefer minimal, targeted changes that solve the current requirement.