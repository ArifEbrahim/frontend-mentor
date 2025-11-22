# Agent Onboarding Guide

## Project Overview

This is a **Frontend Mentor** challenge solutions repository. The project implements various frontend challenges using modern React patterns. Each challenge is organized as a separate page/route within a single-page application. 

The app serves as a portfolio showcase for Frontend Mentor challenge solutions, with a simple welcome page at the root (`/`).

## Tech Stack

**Core:**
- **React 19.2** with TypeScript (strict mode enabled)
- **React Router 7.9** for navigation
- **Vite 7.2** for build tooling with SWC for Fast Refresh
- **Tailwind CSS 4.1** for styling (configured via `@tailwindcss/vite` plugin)

**Development:**
- **TypeScript 5.9** with strict linting rules
- **ESLint 9** with flat config (comprehensive plugin setup - see below)
- **Prettier 3.6** with Tailwind plugin for class sorting
- **pnpm** for package management

## Project Structure

```
/
├── src/
│   ├── main.tsx              # App entry point, router setup
│   ├── main.css              # Global styles, Tailwind imports, custom fonts
│   └── pages/                # Route components
│       └── [challenge-name]/ # Each challenge in its own folder
│           ├── index.tsx     # Challenge component
│           └── [assets]      # Challenge-specific images, etc.
├── index.html                # HTML entry point
├── vite.config.ts            # Vite + React + Tailwind plugins
├── eslint.config.js          # ESLint flat config
├── .prettierrc               # Prettier config
└── tsconfig.*.json           # TypeScript configs (app + node)
```

**Key patterns:**
- Each Frontend Mentor challenge lives in `src/pages/[challenge-name]/`
- Challenge folders contain an `index.tsx` component and all challenge-specific assets
- Routes are defined in `src/main.tsx` using `createBrowserRouter`
- Custom styling configured in `main.css` with `@theme` directive

## Development Commands

```bash
pnpm dev      # Start dev server (port 5173 by default)
pnpm build    # Type check + build for production
pnpm lint     # Run ESLint
pnpm preview  # Preview production build
```

## Coding Guidelines

### TypeScript
- **Strict mode enabled** with additional checks (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`)
- Use `verbatimModuleSyntax` for type imports
- React 19's new JSX transform (`react-jsx`) is configured
- Prefer explicit typing; avoid `any`

### React
- Use functional components with hooks
- Wrap app in `<StrictMode>`
- Follow React 19 patterns (no prop destructuring where unnecessary)
- Use semantic HTML elements (e.g., `<main>`, `<article>`)

### Styling (Tailwind CSS 4.1)
- **Utility-first approach** - use Tailwind classes directly in JSX
- Custom theme values defined in `main.css` using `@theme` directive (e.g., `--font-display`)
- Use descriptive class names when needed (e.g., `className="font-display"` for custom font)
- Prettier automatically sorts Tailwind classes via `prettier-plugin-tailwindcss`

### Code Style (Prettier)
- **No semicolons** (`semi: false`)
- **Single quotes** (`singleQuote: true`)
- **No trailing commas** (`trailingComma: 'none'`)
- **2 spaces** for indentation
- **120 character** line width
- **Arrow function parens**: avoid when possible (`arrowParens: 'avoid'`)
- Format before committing

### ESLint Configuration
Comprehensive setup with multiple plugins:
- TypeScript ESLint (recommended rules)
- React Hooks (flat config)
- React Refresh (for Vite HMR)
- JSX Accessibility (`eslint-plugin-jsx-a11y`)
- React X (`eslint-plugin-react-x` - modern React patterns)
- React DOM (`eslint-plugin-react-dom`)
- Prettier integration (`eslint-config-prettier` to avoid conflicts)

**Always run `pnpm lint` before committing.** ESLint is configured to catch accessibility issues, React anti-patterns, and TypeScript issues.


## Important Notes

- **Response options**: Always respond to prompts and write code in British English
- **Package manager**: Always use `pnpm` (lockfile is `pnpm-lock.yaml`)
- **TypeScript configs**: Project uses composite config - `tsconfig.json` references `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config)
- **Vite plugin**: Uses `@vitejs/plugin-react-swc` (SWC compiler, not Babel) for faster builds
- **Image imports**: Import images directly in components (Vite handles them)
- **Root element**: App mounts to `#root` div in `index.html`
- **Custom fonts**: Defined via Google Fonts in `main.css`, accessible via `font-display` class
- **Accessibility**: JSX a11y plugin enforces accessible patterns (proper alt text, semantic HTML, ARIA usage)
- **Commit message**: Always use Conventional Commits 