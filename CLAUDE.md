# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

No test suite is configured yet.

## Architecture

Next.js 16 App Router project with TypeScript, Tailwind CSS v4, and React 19.

- `src/app/` — App Router root. `layout.tsx` is the root layout (sets Geist fonts via CSS variables, `min-h-full flex flex-col` body). `page.tsx` is the home route. `globals.css` holds Tailwind base styles.
- `public/` — static assets served at `/`.
- `next.config.ts` — Next.js config (currently empty).

Routing follows Next.js App Router conventions: nested folders under `src/app/` become routes, with `page.tsx`, `layout.tsx`, `loading.tsx`, etc. as special files.

## File Headers

Every new source file must start with a short comment (one or two lines max) stating what the file does and its creation date. Use today's actual date. Examples:

```ts
// Root layout: sets fonts and wraps all pages. Created 2026-04-19.
```
```css
/* Global styles: Tailwind base and keyframe animations. Created 2026-04-19. */
```

## End of Session

After every session, update `LEARNING_PLAN.md` — mark completed items with ✅ and add a one-line note on what was done or learned. Then commit and push the changes.
