export const LOCALES = ['en', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** BCP-47 tags used for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = { en: 'en', pt: 'pt-PT' };

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

/** A string that exists in both languages. */
export type I18nText = Record<Locale, string>;

export const siteUrl = (): string =>
  (process.env.NEXT_PUBLIC_SITE_URL || 'https://davidvilela-dev.vercel.app/').replace(/\/$/, '');
