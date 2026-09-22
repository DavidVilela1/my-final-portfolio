import { notFound } from 'next/navigation';
import { Shell } from '@/components/Shell';
import { SeoContent } from '@/components/SeoContent';
import { getDict } from '@/data/dict';
import { isLocale } from '@/lib/i18n';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);

  return (
    <main>
      <SeoContent d={d} locale={locale} />
      <Shell d={d} locale={locale} />
    </main>
  );
}
