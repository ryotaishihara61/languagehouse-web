import type { Metadata } from 'next';
import type { Locale } from '@/i18n-config';
import Hero from '@/components/sections/Hero';
import Concept from '@/components/sections/Concept';
import LanguageServices from '@/components/sections/LanguageServices';
import Features from '@/components/sections/Features';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const ja = rawLang !== 'en';

  return {
    title: ja
      ? 'Language House | ビジネス英語研修・語学スクール'
      : 'Language House | Business English Training in Japan',
    description: ja
      ? '1976年創業。本当に伝わる英語を。日本の企業・プロフェッショナル向けビジネス英語研修・語学スクール。288社・415,774人の実績。'
      : 'Founded in 1976. Real English that communicates. Business English training for Japanese companies and professionals. Trusted by 288 companies and 415,774 students.',
    openGraph: {
      title: ja ? 'Language House | ビジネス英語研修・語学スクール' : 'Language House | Business English Training in Japan',
      description: ja
        ? '1976年創業。本当に伝わる英語を。日本の企業・プロフェッショナル向けビジネス英語研修・語学スクール。'
        : 'Founded in 1976. Real English that communicates. Business English training for Japanese companies.',
      url: ja ? '/ja' : '/en',
      images: [{ url: '/images/sections/hero/AdobeStock_306467549.jpeg', width: 1200, height: 630 }],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale;

  return (
    <>
      <Hero lang={lang} />
      <Concept lang={lang} />
      <LanguageServices lang={lang} />
      <Features lang={lang} />
    </>
  );
}
