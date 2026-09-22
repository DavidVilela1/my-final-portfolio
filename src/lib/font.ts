import localFont from 'next/font/local';

/**
 * IBM Plex Mono, self-hosted (SIL Open Font License 1.1 — see src/fonts/LICENSE.txt).
 * The `latin` subset covers every Portuguese diacritic, so no second file is needed.
 */
export const mono = localFont({
  src: [
    { path: '../fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-mono',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
});
