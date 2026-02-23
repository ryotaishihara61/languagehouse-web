import Link from 'next/link';
import type { Locale } from '@/types';

interface HeroProps {
  lang: Locale;
}

const content = {
  ja: {
    heading: '流暢さがゴールではない。\n本当に伝わる英語を',
    cta: '詳細を見る',
    ctaHref: '/academic',
    contact: 'お問い合わせ',
    contactHref: '/contact-us',
  },
  en: {
    heading: 'Fluency is not the goal.\nEnglish that truly connects.',
    cta: 'Learn More',
    ctaHref: '/academic',
    contact: 'Contact Us',
    contactHref: '/contact-us',
  },
} as const;

export default function Hero({ lang }: HeroProps) {
  const t = content[lang] ?? content['ja'];

  function localizeHref(href: string) {
    return `/${lang}${href}`;
  }

  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/Teaching-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white whitespace-pre-line sm:text-4xl lg:text-5xl">
              {t.heading}
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={localizeHref(t.ctaHref)}
                className="rounded-md bg-[#046bd2] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#046bd2]"
              >
                {t.cta}
              </Link>
              <Link
                href={localizeHref(t.contactHref)}
                className="rounded-md border border-white/70 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
