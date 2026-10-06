<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Live Resume

## What This Is
Cristal Richardson's online resume, published at https://leanstance.com in English (`/`) and Norwegian (`/no/`). It is a Next.js static export hosted on GitHub Pages. Resume text lives in `src/content/en.ts` and `src/content/no.ts`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** custom SVG components in `src/components/resume/icons.tsx` (Lucide React is installed but unused)
- **Styling:** CSS modules for the resume sections, Tailwind CSS v4 with oklch design tokens for the rest
- **Deployment:** GitHub Pages (static export, custom domain)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Keep the existing look** — match the current spacing, colors and typography; change the design only when asked
- **Both languages stay in sync** — a content or layout change to `en.ts` or `no.ts` is made in the other too
- **Real content** — use the actual resume text and assets, not placeholders
- **Responsive and accessible** — mobile-first, readable contrast, meaningful alt text
- **Static-friendly** — everything must work in a static export with no server

## Project Structure
```
src/
  app/
    (en)/           # English page at "/" (own root layout, <html lang="en">)
    (no)/no/        # Norwegian page at "/no/" (own root layout)
    _shared/        # Document and metadata shared by both layouts
  components/
    resume/         # Resume sections (Header, Welcome, About, Experience, ...)
    ui/             # shadcn/ui primitives
  content/          # en.ts, no.ts (resume text), locales.ts (ASSET_ROOT, BASE_PATH, languages)
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  resume/           # Fonts, images, SEO icons and CV PDFs (referenced through ASSET_ROOT)
  en/               # Redirect page for /en
  CNAME             # Custom domain for GitHub Pages
  .nojekyll         # Stops Pages from running Jekyll on the export
.github/
  workflows/        # ci.yml (lint, typecheck, build) and deploy.yml (GitHub Pages)
```

## Deployment
- The site is a static export (`output: "export"`) deployed to GitHub Pages on pushes to `main`.
- Asset paths must go through `ASSET_ROOT` in `src/content/locales.ts`, never a hard-coded `/resume/...`, so `NEXT_PUBLIC_BASE_PATH` works for sub-path hosting.

## Agent Workflow
- Run `npm run check` before committing; CI runs the same lint, typecheck and build.
- Make content changes in both `src/content/en.ts` and `src/content/no.ts`.
- Work on a branch and merge through a pull request; pushes to `main` deploy the site.
