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
