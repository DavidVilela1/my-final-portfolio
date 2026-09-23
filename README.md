# davidvilela.dev

Personal portfolio of **David Vilela** — full stack developer and UI/UX designer, Vila Real, Portugal.

The site is a black-and-white desktop environment: a boot sequence, a file-tree navigator, and
draggable windows over a dithered wallpaper. English and European Portuguese. No cookies, no
analytics, no backend.

> **Source-available, not open source.** This repository is published so the code can be read.
> It is not licensed for reuse. See [LICENSE](LICENSE).

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Typeface | IBM Plex Mono, self-hosted (OFL) |
| Hosting | Any Node host; built for Vercel |

No database, no CMS, no API keys. Project data is a typed file in the repository.

## Features

- **Window manager** — each section opens its own window; cascade positioning, drag by title bar,
  click-to-focus z-ordering, collapse-in-place, `Esc` to close the front window.
- **Boot sequence** — a setup screen that runs on every visit and waits for a keypress.
- **Bilingual** — `/en` and `/pt` (PT-PT), full parity, type-checked against each other.
- **Mobile** — below 768px the desktop becomes full-screen sheets with a bottom dock.
- **CRT layer** — scanlines, phosphor flicker, vignette, and a blocky pointer on fine-pointer devices.
- **Accessibility** — semantic dialogs and landmarks, alt text throughout, visible focus rings,
  and full `prefers-reduced-motion` support.
- **SEO** — per-language metadata, canonical URLs, hreflang with `x-default`, Open Graph,
  `Person` JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`, and a crawlable mirror of content
  that would otherwise only exist inside unopened windows.
- **Privacy** — zero cookies, zero third-party requests. Two strictly necessary local-storage keys.

## Running locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Serves on `http://localhost:3000`; `/` redirects to `/en`.

| Script | |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` |

### Configuration

One optional environment variable:

```
NEXT_PUBLIC_SITE_URL=https://davidvilela.dev
```

The canonical origin for metadata, hreflang, `sitemap.xml` and `robots.txt`. Falls back to
`http://localhost:3000`. Must be set in production or the sitemap will advertise localhost.

## Structure

```
src/
├── app/                    Routes, metadata, sitemap, robots, 404
│   └── [locale]/           Per-language layout and page
├── components/             Shell, window manager, boot screen, surfaces
│   └── content/            What renders inside each window
├── data/                   Content: projects, profile, dictionaries
├── fonts/                  IBM Plex Mono (OFL)
└── lib/                    i18n, window registry, browser-state hooks
```

Content lives in three files and nothing else needs touching to update the site:

- `src/data/projects.ts` — the project list; `featured: true` promotes an entry to a case study
- `src/data/profile.ts` — contact details, skill levels, tools, work log
- `src/data/dict.ts` — every string, in both languages, including the legal documents

## Notes

**No page scroll.** The desktop is locked to the viewport; windows scroll internally. Mobile
scrolls normally.

**The wallpaper** is a pre-dithered 1-bit PNG scaled up with `image-rendering: pixelated`, so it
stays crisp at any size for 10 KB. It drifts against the pointer and dims while windows are open.

**Browser-only state** (pointer type, dismissed notice) is read via `useSyncExternalStore` rather
than set inside an effect — no cascading render, no hydration mismatch.

**Content visibility.** Because window content is absent from the DOM until opened, `SeoContent`
mirrors it in a visually hidden block so crawlers see a complete page.

## Licence

Copyright © 2026 David Vilela. All rights reserved.

Published for **exposition only** — you may read it, you may not use it. Full terms in
[LICENSE](LICENSE). IBM Plex Mono is separately licensed under the SIL Open Font License 1.1
(`src/fonts/LICENSE.txt`), and npm dependencies remain under their own licences.

## Contact

[vileladavid112@gmail.com](mailto:vileladavid112@gmail.com) ·
[GitHub](https://github.com/DavidVilela1) ·
[LinkedIn](https://www.linkedin.com/in/davidvilelawebdev/)
