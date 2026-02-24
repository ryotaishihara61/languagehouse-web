import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { i18nConfig, type Locale } from '@/i18n-config';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import '../globals.css';

const BASE_URL = 'https://www.languagehouse.jp';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale;
  const ja = lang === 'ja';

  return {
    title: {
      default: ja
        ? 'Language House | ビジネス英語研修・語学スクール'
        : 'Language House | Business English Training in Japan',
      template: '%s | Language House',
    },
    description: ja
      ? '1976年創業。本当に伝わる英語を。日本の企業・プロフェッショナル向けビジネス英語研修・語学スクール。288社・415,774人の実績。'
      : 'Founded in 1976. Real English that communicates. Business English training for Japanese companies and professionals. Trusted by 288 companies and 415,774 students.',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ja: `/ja`,
        en: `/en`,
      },
    },
    openGraph: {
      siteName: 'Language House',
      locale: ja ? 'ja_JP' : 'en_US',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale;

  return (
    <div lang={lang} className={`${notoSansJP.variable} flex min-h-screen flex-col antialiased bg-white text-[#334155]`}>
      <Navigation lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </div>
  );
}
