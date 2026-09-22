import type { Viewport } from 'next';
import { mono } from '@/lib/font';
import { DEFAULT_LOCALE, HTML_LANG } from '@/lib/i18n';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Document shell. `lang` here is the site default; each locale layout wraps its
 * own content in an element carrying the right language, which is what assistive
 * technology reads for the text it is actually announcing.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[DEFAULT_LOCALE]} className={mono.variable}>
      <body className="font-mono bg-black text-white antialiased">{children}</body>
    </html>
  );
}
