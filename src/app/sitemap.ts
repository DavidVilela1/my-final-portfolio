import type { MetadataRoute } from 'next';
import { LOCALES, siteUrl } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  return LOCALES.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${base}/en`,
        'pt-PT': `${base}/pt`,
        'x-default': `${base}/en`,
      },
    },
  }));
}
