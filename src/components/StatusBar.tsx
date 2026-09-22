'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LOCALES, isLocale, type Locale } from '@/lib/i18n';
import type { Dict } from '@/data/dict';

/** Reset on reload, so a stored preference redirects at most once per page load. */
let redirectChecked = false;

const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Lisbon',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

export function StatusBar({ locale, d }: { locale: Locale; d: Dict }) {
  const router = useRouter();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (redirectChecked) return;
    redirectChecked = true;
    try {
      const saved = window.localStorage.getItem('dv.locale');
      if (saved && isLocale(saved) && saved !== locale) router.replace(`/${saved}`);
    } catch {
      /* storage unavailable — the default locale is fine */
    }
  }, [locale, router]);

  const remember = (next: Locale) => {
    try {
      window.localStorage.setItem('dv.locale', next);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="pointer-events-auto flex items-center gap-3 text-[11px] tracking-[0.12em] text-white/70">
      <nav aria-label={d.ui.language} className="flex items-center gap-1">
        {LOCALES.map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            {i > 0 && <span className="text-white/30" aria-hidden="true">|</span>}
            <Link
              href={`/${l}`}
              hrefLang={l === 'pt' ? 'pt-PT' : 'en'}
              onClick={() => remember(l)}
              aria-current={l === locale ? 'true' : undefined}
              className={`px-1 transition-colors hover:text-white ${
                l === locale ? 'text-white underline underline-offset-4' : ''
              }`}
            >
              {l.toUpperCase()}
            </Link>
          </span>
        ))}
      </nav>
      <span className="text-white/30" aria-hidden="true">·</span>
      <time
        className="tabular-nums"
        aria-label={d.ui.clock}
        suppressHydrationWarning
      >
        {time ?? '--:--:--'}
      </time>
    </div>
  );
}
