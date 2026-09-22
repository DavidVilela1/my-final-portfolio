import type { Metadata } from 'next';
import { DEFAULT_LOCALE, HTML_LANG, LOCALES, isLocale, siteUrl } from '@/lib/i18n';
import { getDict } from '@/data/dict';
import { PROFILE } from '@/data/profile';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  const base = siteUrl();

  return {
    metadataBase: new URL(base),
    title: d.meta.title,
    description: d.meta.description,
    applicationName: PROFILE.name,
    authors: [{ name: PROFILE.name, url: PROFILE.github }],
    creator: PROFILE.name,
    keywords: [
      'David Vilela',
      'full stack developer',
      'UI/UX designer',
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'Vila Real',
      'Portugal',
      'portfolio',
    ],
    alternates: {
      canonical: `${base}/${locale}`,
      languages: { en: `${base}/en`, 'pt-PT': `${base}/pt`, 'x-default': `${base}/en` },
    },
    openGraph: {
      type: 'website',
      url: `${base}/${locale}`,
      siteName: PROFILE.name,
      title: d.meta.title,
      description: d.meta.description,
      locale: HTML_LANG[locale].replace('-', '_'),
      images: [
        { url: '/portrait-dither.png', width: 400, height: 444, alt: d.meta.ogAlt },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.meta.title,
      description: d.meta.description,
      images: ['/portrait-dither.png'],
    },
    robots: { index: true, follow: true },
    icons: { icon: '/icon.svg', apple: '/icon.svg' },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  // An unknown first segment is a 404, but the page throws it — not the layout,
  // so the not-found view still renders inside this document with its styles.
  const valid = isLocale(raw);
  const locale = valid ? raw : DEFAULT_LOCALE;
  const d = getDict(locale);
  const base = siteUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    url: `${base}/${locale}`,
    jobTitle: locale === 'pt' ? 'Full Stack Developer e Designer UI/UX' : 'Full Stack Developer and UI/UX Designer',
    email: `mailto:${PROFILE.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Vila Real', addressCountry: 'PT' },
    knowsLanguage: ['pt-PT', 'en'],
    sameAs: [PROFILE.github, PROFILE.linkedin],
    description: d.meta.description,
  };

  return (
    <div lang={HTML_LANG[locale]}>
      {valid && (
        <script
          type="application/ld+json"
          // Static, author-controlled object — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </div>
  );
}
