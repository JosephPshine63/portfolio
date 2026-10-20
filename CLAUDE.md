# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Giuseppe Pio Ruocco, served on `gprdev.com` via GitHub Pages. On the `react` branch it is being rebuilt as a Next.js (App Router, TypeScript) static export with a Game Boy Advance–style "game UI" design. `main` still serves the old single-file site until the branch is merged; that file is kept in `legacy/index.html` only as a content reference and is not served.

## Commands

- `npm run dev` — dev server on http://localhost:3000 (`/` redirects to `/it/` or `/en/`)
- `npm run build` — static export into `out/`
- `npm run typecheck` — `tsc --noEmit`
- `npm run preview` — serve `out/` locally

There is no test suite or linter. Deployment: `.github/workflows/deploy.yml` builds and publishes `out/` on every push to `main`; GitHub Pages must have Source = "GitHub Actions".

## Architecture

- **Static export only** (`next.config.ts`: `output: 'export'`, `trailingSlash: true`). No server code, API routes, middleware or server-side redirects. Metadata routes (`app/sitemap.ts`, `app/robots.ts`) need `export const dynamic = 'force-static'`.
- **Two root layouts.** `app/[locale]/layout.tsx` is the root layout for `/it/` and `/en/` (sets `<html lang>`, fonts, the pre-paint theme script). `app/(root)/` has its own layout and a page that redirects `/` in the browser (saved `localStorage.lang`, then browser language, else English). There is deliberately no `app/layout.tsx`.
- **Content lives in `content/`, not in components.** `content/types.ts` defines `Dictionary`; `content/it.ts` and `content/en.ts` implement it, so TypeScript fails the build if a locale is missing a field. Locale-independent facts (URLs, email, project links) are in `content/shared.ts`. `content/index.ts` exports `locales`, `isLocale` and `getDictionary`.
- **SEO** is in `lib/seo.ts`: per-locale metadata (canonical, hreflang with `x-default` → `/en/`, Open Graph, Search Console verification) and the `ProfilePage`/`Person` JSON-LD rendered by `app/[locale]/page.tsx`.
- **Styling** is plain CSS in `app/globals.css`. Colors are CSS variables on `:root` (day theme), overridden under `:root[data-theme='night']`; use the variables, not hard-coded colors. `.window` is the pixel-frame panel every section is built from. Fonts come from `next/font/google` (Pixelify Sans for UI and headings, DM Sans for body text) and are self-hosted at build time.
- **Client components** (`components/ThemeToggle.tsx`, `components/LangSwitch.tsx`) persist `theme` (`day`/`night`) and `lang` in `localStorage`.

## Editing rules

- Every visible text change goes in both `content/it.ts` and `content/en.ts`; new text means a new field in `content/types.ts` first.
- Section titles stay plain for recruiters and search engines, with the game label as a subtitle (Progetti ▸ SQUADRA, Esperienza ▸ VIAGGIO, Skill ▸ MOSSE, Contatti ▸ SALVA).
- Pixel art must be original: no Nintendo/Pokémon sprites, names or logos. Use the pixel font for UI and headings only, never for paragraphs.
- Keep content honest and consistent with the CV (no invented stats or claims).
