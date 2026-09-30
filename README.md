# Intenda Hub

A single-page directory for Intenda projects at https://work.imber.me. Built with Next.js App Router, React, TypeScript, Tailwind CSS and Lucide icons. Includes a locally hosted variable Geist font with its SIL Open Font License. No backend, authentication or database.

## Local development

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
npm run typecheck
```

Project names, descriptions, production URLs and link labels are maintained in `src/data/projects.ts`. The page and reusable project card rendering live in `src/app/page.tsx`. Theme, responsive layouts and reduced-motion behavior live in `src/app/globals.css`. SEO and social metadata are defined in `src/app/layout.tsx`, with a custom SVG favicon in `src/app/icon.svg`.

## Vercel deployment

Import `Verrayne/Intenda-hub` into Vercel, select the Next.js framework preset, and use the repository root. The default build command is `npm run build`. No environment variables are required. Add `work.imber.me` under the project's Domains settings and configure the DNS record Vercel provides. The canonical URL is already configured as `https://work.imber.me`.

Project links open in a new tab with `noopener noreferrer`. The hub does not attempt to authenticate users to, or determine the availability of, individual projects.
