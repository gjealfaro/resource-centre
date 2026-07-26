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

````js
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


# Resource Centre

A single-page application built for the Wisdom Wellbeing Resource Centre, displaying wellbeing resources (podcasts, articles, newsletters, recipes, fitness, and meditation content) grouped by category.

Built with React, TypeScript, and Vite, using Test-Driven Development throughout.

## Getting Started

```bash
npm install
npm run dev
````

The app runs locally at `http://localhost:5173`.

## Running Tests

```bash
npm test
```

Runs the full test suite in watch mode using Vitest and React Testing Library.

## Tech Stack

- **React** + **TypeScript** — component structure and type safety
- **Vite** — build tooling and dev server
- **Vitest** — test runner
- **React Testing Library** — component testing, focused on user-facing behavior rather than implementation details

## What's Completed

- Resources grouped by category on first page load (Podcasts, Articles, Newsletters, Recipes, Fitness, Meditation)
- Each resource card displays: title, thumbnail image, up to 3 tags, and duration in minutes
- Thumbnail images are handled gracefully when missing (no broken image element rendered)

## Optional Features Implemented

All three optional features were built, each following the same Red/Green/Refactor cycle:

- [x] **Filter by title/tags** — a search input narrows the visible resources by matching against title or tags (case-insensitive)
- [x] **Sort by date** — a toggle re-orders resources within each category by upload date, most recent first
- [x] **Click-to-expand detail view** — clicking a resource's title reveals its full description and upload date

## Approach

This project was built using Test-Driven Development. Each piece of logic and each component behavior was written test-first, following the Red → Green → Refactor cycle:

1. Write a failing test for a specific, small piece of behavior
2. Write the minimum code needed to make it pass
3. Refactor for clarity once the test is green

The git history reflects this process — commits are prefixed with `Red:`, `Green:`, or `Refactor:` to make the incremental story visible. Logic (`groupByCategory`, `filterResources`, `sortByDate`) was tested in isolation before being wired into components, and components (`ResourceCard`, `ResourceList`) were tested using React Testing Library, focusing on what a user sees and can interact with rather than internal state.

## Project Structure

```
src/
  components/
    ResourceCard.tsx       # Individual resource card, including expand/collapse
    ResourceList.tsx        # Groups and renders resources by category
  utils/
    groupByCategory.ts      # Groups a flat resource list by category
    filterResources.ts      # Filters resources by title/tag match
    sortByDate.ts            # Sorts resources by upload date
  types/
    Resource.ts               # Shared TypeScript type for a resource
  data/
    resources.json           # Mock dataset
```

## What I'd Do With More Time

- Add tests for `filterResources` and `sortByDate` interacting together (e.g. sorting an already-filtered list)
- Add a test proving tags are capped at 3 when a resource has more than 3 tags in the source data (current mock data never exceeds 3, so this edge case isn't yet covered)
- Improve accessibility further: add `aria-expanded` to the expand/collapse button, and run a full keyboard-navigation pass
- Add a responsive layout for smaller screen widths (current card sizing assumes a wider viewport)
- Add an empty state message when a search filters out all resources, rather than showing an empty category section
- Consider whether "sort by category/date" should also support flattening across categories, rather than only sorting within each category group, as the brief's wording was open to either interpretation
