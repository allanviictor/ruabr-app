# GEMINI Project: ruabr-app

## Project Overview

`ruabr-app` is a web application built with **React** (v19) and **TypeScript**, using **Vite** as the build tool. It is designed to be a modern, fast, and efficient single-page application (SPA).

Key technologies used:

*   **Framework**: [React](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
*   **HTTP Client**: [Axios](https://axios-http.com/)
*   **Icons**: [Phosphor Icons](https://phosphoricons.com/)

The project follows a standard React application structure, with source code in the `src` directory, public assets in the `public` directory, and configuration files at the root.

## Building and Running

### Development

To run the application in a local development environment with hot-reloading, use the following command:

```bash
npm run dev
```

### Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized and bundled files.

To preview the production build locally, use:

```bash
npm run preview
```

## Development Conventions

*   **Linting**: The project uses **ESLint** for code quality and consistency. To run the linter, use:
    ```bash
    npm run lint
    ```
*   **Styling**: **Tailwind CSS** is used for styling. Utility classes should be favored for building components.
*   **Component Structure**: The project is structured with pages in the `src/pages` directory and reusable layout components in `src/layouts`. Shared components are expected to be in the `src/shared/components` directory.
*   **Routing**: All application routes are defined in the `src/routes/routes.tsx` file.
*   **HTTP Requests**: Use the pre-configured **Axios** instance from `src/configs/axios.ts` for making API calls.


# Commit Message Format

- Use a single line for the commit message.
- Start with an emoji to indicate the type of change.
- Use the following emojis for different types of changes:
  - 📦 refactor: code changes that do not fix bugs or add features
  - 📝 docs: documentation changes
  - 🐛 fix: bug fixes
  - ✨ feat: new features
  - 🚀 perf: performance improvements
  - 🔧 chore: maintenance tasks
  - 🧪 test: adding or updating tests
- Use the present tense for the commit message.
- Keep the message concise and descriptive.

# Sample Commit Message

✨ feat(popover): add popover component
📦 refactor(command): improve command component structure
🐛 fix(command): resolve input focus issue in command input
🔧 chore: update dependencies and improve build process
🧪 test(command): add unit tests for command component

## Important:

- Use only the first line of the commit, no additional descriptions.
- You don't need to split the files into several commits and make a commit for each file. You can group them together and make more general commits.
- Always use the `docs/react-guide.md` file to use Angular's best practices.