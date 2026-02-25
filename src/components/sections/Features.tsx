import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/types';

interface FeaturesProps {
  lang: Locale;
}

const content = {
  ja: {
    label: '私たちが選ばれる理由',
    heading: '私たちが選ばれる理由',
    paragraphs: [
      '1976年の創業以来、高品質なカスタマイズプログラムで日本の企業英語研修を牽引してきました。日本での生活・就労経験を持つ講師陣が、文化的背景と実体験を交えながら、グローバルな視点で指導します。',
      '柔軟な受講形式、独自開発の教材、オーダーメイドのアプローチで、貴社の具体的なニーズにしっかり応えます。',
      'お客様とは長期的なパートナーシップを築き、ビジネスの成長とともに変化する語学研修のニーズに寄り添い続けます。',
    ],
    cta: '詳細を見る',
    ctaHref: '/why-us',
  },
  en: {
    label: 'Why Choose Us',
    heading: 'Why Choose Us',
    paragraphs: [
      'Since 1976, Language House has been trusted as a leader in corporate English training in Japan. Our instructors — each with extensive experience living and working here — bring a global perspective grounded in real-world cultural insight.',
      'Flexible delivery options, proprietary teaching materials, and a tailored approach combine to ensure every program is built around your company\'s specific goals.',
      'We see our clients as long-term partners — committed to supporting your language training needs as your business grows and evolves.',
    ],
    cta: 'Learn More',
    ctaHref: '/why-us',
  },
} as const;

const featureImages = [
  { src: '/images/sections/about/qualify.png', alt: '資格を持つエキスパート講師' },
  { src: '/images/others/3.png', alt: 'オーダーメイドの英語研修' },
  { src: '/images/others/2.png', alt: 'ビジネス英語トレーニング' },
  { src: '/images/others/4.png', alt: '柔軟な研修スタイル' },
];

export default function Features({ lang }: FeaturesProps) {
  const t = content[lang] ?? content['ja'];

  function localizeHref(href: string) {
    return `/${lang}${href}`;
  }

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-[#1e293b] sm:text-4xl">
              {t.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {t.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href={localizeHref(t.ctaHref)}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#046bd2] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4]"
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

          {/* Feature image grid */}
          <div className="grid grid-cols-2 gap-4">
            {featureImages.map((img) => (
              <div
                key={img.alt}
                className="relative aspect-square overflow-hidden rounded-xl bg-slate-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
