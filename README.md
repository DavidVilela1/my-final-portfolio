# davidvilela.dev

A portfolio rendered as a black-and-white desktop environment. Boot sequence, a file-tree
navigator, draggable windows, a CRT layer, English and European Portuguese, no cookies,
no analytics, no backend.

---

## 1. Requirements

| Tool | Version |
| --- | --- |
| Node.js | 20.9 or newer (22 LTS recommended) — required by Next.js 16 |
| npm | 9 or newer (ships with Node) |

Check what you have:

```bash
node -v
npm -v
```

If you need Node, install it from <https://nodejs.org> or with a version manager
(`nvm install 22 && nvm use 22`).

## 2. Run it locally

```bash
# from the folder containing package.json
npm install
cp .env.example .env.local     # optional in development
npm run dev
```

Open <http://localhost:3000>. The root redirects to `/en`; `/pt` is the Portuguese version.

There is no database, no API key and no external service — `npm install` and `npm run dev`
is the whole setup.

## 3. Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build (run `build` first) |
| `npm run lint` | ESLint (flat config, `eslint.config.mjs`) |
| `npm run typecheck` | TypeScript, no emit |

## 4. Environment variables

One, and it is optional in development:

```
NEXT_PUBLIC_SITE_URL=https://davidvilela.dev
```

It is the canonical origin used for `<link rel="canonical">`, Open Graph URLs, hreflang
alternates, `sitemap.xml` and `robots.txt`. Unset, everything falls back to
`http://localhost:3000`. **Set it on your host before going live**, otherwise the sitemap
will advertise localhost URLs to search engines.

On Vercel: Project → Settings → Environment Variables → add `NEXT_PUBLIC_SITE_URL`.

## 5. Deploying

```bash
npm i -g vercel
vercel
```

Any host that runs Next.js 16 works (Vercel, Render, Railway, a Node server, a Docker
image). The build output is a standard `.next` directory; `npm start` serves it.

A single middleware redirect (`/` → `/en`) is the only server-side logic, so static hosts
that do not run middleware will need that redirect configured at the edge instead.

### Keeping it secure

`npm audit` reports **0 vulnerabilities** as shipped. Next.js patches security issues
often, so run `npm audit` before each deploy and `npm update next` when it flags something.
The versions in `package.json` use caret ranges, so `npm update` picks up patches without
you editing anything.

---

## 6. Editing the content

Three files hold everything. You should not need to touch a component.

### `src/data/projects.ts` — your work

```ts
{
  slug: 'atlas-console',        // file name in the tree: atlas-console.md
  title: 'Atlas Console',
  year: 2026,
  status: 'SHIPPED',            // SHIPPED | ACTIVE | ARCHIVED
  stack: ['Next.js', 'TypeScript'],
  description: { en: '…', pt: '…' },
  links: { live: 'https://…', repo: 'https://…' },
  cover: '/covers/atlas.png',   // optional, a file under /public
  featured: true,               // true → appears in case-studies/ in the nav tree
}
```

- Every entry appears in **Projects.db**.
- Entries with `featured: true` also get a file in **case-studies/** and become clickable
  rows in the Projects.db table.
- The four featured entries shipped with the project are **templates**. Each case-study
  window says so at the bottom; that line is `caseStudy.template` in the dictionary and
  disappears if you remove it there.

### `src/data/profile.ts` — you

Contact details, the skill groups and their 0–4 proficiency levels (these drive the square
grid in About and the meters in Skills), the tools list, and the work-log entries.

### `src/data/dict.ts` — all interface text

One `en` object, one `pt` object with the same shape. TypeScript will tell you if they drift
apart. Legal documents live here too, as arrays of `{ heading, body[] }`.

---

## 7. How it is put together

```
src/
├── app/
│   ├── layout.tsx              # document shell, font, global CSS
│   ├── not-found.tsx           # custom 404 (bilingual, real 404 status)
│   ├── robots.ts               # → /robots.txt
│   ├── sitemap.ts              # → /sitemap.xml, with hreflang alternates
│   ├── globals.css             # Tailwind layers, CRT helpers, scrollbar
│   └── [locale]/
│       ├── layout.tsx          # per-language metadata + JSON-LD
│       ├── page.tsx            # the page
│       ├── not-found.tsx       # 404 inside a valid language
│       └── [...rest]/page.tsx  # anything deeper → 404
├── components/
│   ├── Shell.tsx               # boot gate, desktop/mobile split
│   ├── WindowSystem.tsx        # window state: open, focus, z-order, cascade
│   ├── WindowFrame.tsx         # chrome, drag, collapse, close
│   ├── BootScreen.tsx          # the setup sequence
│   ├── FileTree.tsx            # the navigator
│   ├── MobileShell.tsx         # sheets + bottom dock
│   ├── Wallpaper.tsx           # dithered portrait + parallax
│   ├── CrtOverlay.tsx          # scanlines, flicker, vignette
│   ├── CrtCursor.tsx           # blocky pointer (fine pointers only)
│   ├── NoticeBanner.tsx        # the privacy notice
│   ├── SeoContent.tsx          # crawlable mirror of every window's text
│   └── content/WindowContent.tsx
├── data/                       # ← the three files above
├── fonts/                      # IBM Plex Mono, self-hosted (OFL)
└── lib/                        # i18n, fonts, window registry, browser-state hooks
```

### Design decisions worth knowing

**Windows.** Each nav item opens its own window. Opening a second one never touches the
first. New windows cascade 28px down-right and wrap after seven. Drag by the title bar;
clicking anywhere in a window raises it. `−` collapses a window to its title bar in place
(there is no taskbar to hide into) and `+` restores it. `Esc` closes the front window.

**No page scroll.** The desktop is locked to the viewport; windows scroll internally with a
1-bit scrollbar when their content is longer than they are. Mobile scrolls normally.

**Mobile.** Below 768px the desktop is replaced by full-screen sheets and a five-icon
bottom dock. Both surfaces share one window store, so the sheet is simply the front window.

**The wallpaper** is a pre-dithered 1-bit PNG (10 KB) scaled up with `image-rendering:
pixelated`, so it stays crisp at any size and costs nothing to render. It drifts slightly
against the pointer, and dims to 40% while a window is open so text always wins the
contrast fight.

**Browser-only state** (pointer type, the dismissed-notice flag) is read through
`useSyncExternalStore` in `src/lib/clientState.ts` rather than set inside an effect, so
there is no cascading render on load and no hydration mismatch.

**Reduced motion.** `prefers-reduced-motion: reduce` skips the boot animation, the parallax
and every transition. The CRT cursor only appears for fine pointers.

**SEO.** Window content is not in the DOM until you open a window, which would leave
crawlers an empty page — so `SeoContent` mirrors every window's text in a visually hidden,
`aria-hidden` block in document order. Plus: per-language metadata, canonical URLs, hreflang
(including `x-default`), Open Graph, Twitter cards, `Person` JSON-LD, sitemap, robots and
`llms.txt`.

### Privacy posture

No cookies. No analytics. No third-party scripts, fonts, pixels or embeds — the typeface is
self-hosted, the icons are inline SVG. Two values are written to **local storage** and never
transmitted: `dv.locale` (your language) and `dv.notice` (that you dismissed the banner).
Both are strictly necessary, which is why the banner is a *notice* and not a consent gate —
there is nothing non-essential to consent to.

If you ever add analytics, update `src/data/dict.ts` → `legal.cookies` **first** and replace
`NoticeBanner` with a real Accept/Reject gate that loads nothing before the choice is made.

---

## 8. Credits and licensing

- **Typeface:** IBM Plex Mono, SIL Open Font License 1.1 — free for commercial use.
  Licence text in `src/fonts/LICENSE.txt`.
- **Icons:** drawn for this project, no third-party icon library.
- **Photograph:** yours. It is processed into `public/portrait-dither.png`.

### Replacing the portrait

The shipped wallpaper was generated from a 150×150 source, which is why it is deliberately
chunky. To regenerate it from a larger photo with Python and Pillow:

```python
from PIL import Image, ImageOps, ImageEnhance, ImageFilter
import math

im = Image.open('your-photo.jpg').convert('L')
im = im.resize((900, 1000), Image.LANCZOS)
im = im.filter(ImageFilter.UnsharpMask(radius=4, percent=170, threshold=2))
im = ImageOps.autocontrast(im, cutoff=2)
im = ImageEnhance.Brightness(im).enhance(1.4)

# fade the edges to black so the subject emerges from the desktop
W, H = im.size; px = im.load(); cx, cy = W / 2, H * 0.45; maxr = max(W, H) * 0.46
for y in range(H):
    for x in range(W):
        r = math.hypot(x - cx, (y - cy) / 1.15) / maxr
        f = 1.0 if r < 0.50 else max(0.0, 1.0 - ((r - 0.50) / 0.38) ** 1.35)
        px[x, y] = int(px[x, y] * f)

im.resize((400, 444), Image.LANCZOS) \
  .convert('1', dither=Image.FLOYDSTEINBERG) \
  .save('public/portrait-dither.png', optimize=True)
```

Keep the output small (400px wide is plenty) — the browser scales it up without smoothing.
