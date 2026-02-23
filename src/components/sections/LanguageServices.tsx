import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/types';

interface LanguageServicesProps {
  lang: Locale;
}

interface Program {
  name: string;
  image: string;
  href: string;
}

const programs: Program[] = [
  { name: 'ビジネス英語プログラム', image: '/images/sections/hero/AdobeStock_306467549.jpeg', href: '/academic' },
  { name: '英語プログラム', image: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg', href: '/academic' },
  { name: '集中英語プログラム', image: '/images/sections/services/learning-online.png', href: '/academic' },
  { name: '英語スキルセミナー', image: '/images/sections/services/Business-skill.png', href: '/academic' },
  { name: 'TOEIC', image: '/images/raw/1.png', href: '/academic' },
  { name: '日本語プログラム', image: '/images/sections/about/meeting.png', href: '/academic' },
];

const programsEn: Program[] = [
  { name: 'Business English Program', image: '/images/raw/Business-English.png', href: '/academic' },
  { name: 'English Program', image: '/images/raw/General-Enlish.png', href: '/academic' },
  { name: 'Intensive English Program', image: '/images/raw/learning.png', href: '/academic' },
  { name: 'English Skills Seminars', image: '/images/raw/English-Skills-Seminars.png', href: '/academic' },
  { name: 'TOEIC', image: '/images/raw/qualify.png', href: '/academic' },
  { name: 'Japanese Program', image: '/images/raw/meeting.png', href: '/academic' },
];

const content = {
  ja: {
    label: '私達のプログラム',
    heading: '私達のプログラム',
    subheading: 'ランゲージハウスでは、これまで40万人以上の日本企業で働く方々の英語コミュニケーションスキルの向上をお手伝いしてきました。',
    cta: '詳細を見る',
    ctaHref: '/academic',
    programs,
  },
  en: {
    label: 'Our Programs',
    heading: 'Our Programs',
    subheading: 'Language House has helped over 400,000 employees at Japanese companies improve their English communication skills.',
    cta: 'Learn More',
    ctaHref: '/academic',
    programs: programsEn,
  },
} as const;

export default function LanguageServices({ lang }: LanguageServicesProps) {
  const t = content[lang] ?? content['ja'];

  function localizeHref(href: string) {
    return `/${lang}${href}`;
  }

  return (
    <section id="language-services" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-[#1e293b] sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t.subheading}</p>
        </div>

        {/* Program cards */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.programs.map((program) => (
            <li key={program.name}>
              <Link
                href={localizeHref(program.href)}
                className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-base font-bold text-[#1e293b]">{program.name}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0 text-[#046bd2]"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href={localizeHref(t.ctaHref)}
            className="inline-flex items-center gap-2 rounded-md border border-[#046bd2] px-8 py-3 text-sm font-semibold text-[#046bd2] transition-colors hover:bg-[#046bd2] hover:text-white"
          >
            {t.cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
