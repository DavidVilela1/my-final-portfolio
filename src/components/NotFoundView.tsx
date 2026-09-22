'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDict } from '@/data/dict';
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n';

export function NotFoundView() {
  const segment = (usePathname() ?? '').split('/')[1] ?? '';
  const locale = isLocale(segment) ? segment : DEFAULT_LOCALE;
  const d = getDict(locale);

  return (
    <main className="relative grid h-dvh w-full place-items-center overflow-hidden bg-black px-6 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 3px)',
        }}
      />
      <div className="relative w-full max-w-[520px] border border-white/25 bg-black">
        <div className="border-b border-white/25 px-3 py-[7px]">
          <p className="text-[11px] tracking-[0.18em] text-white/85">{d.notFound.code}</p>
        </div>
        <div className="space-y-4 px-5 py-6">
          <h1 className="text-lg font-semibold tracking-[0.1em] glow">{d.notFound.title}</h1>
          <div className="space-y-1.5 text-[12.5px] text-white/70">
            {d.notFound.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={`/${locale}`}
            className="inline-block border border-white/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
          >
            {d.notFound.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
