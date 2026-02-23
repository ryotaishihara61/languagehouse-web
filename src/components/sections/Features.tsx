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
      'ランゲージハウスは、1976年の設立以来、日本の企業英語研修のリーダーとして頼され、高品質でカスタマイズされたプログラムを提供しています。日本での生活や仕事の経験が豊富な講師陣が、文化的な背景や実例を踏まえながら、グローバルな視点で指導します。',
      'フレキシブルな研修オプション、独自に開発した教材、オーダーメイドのアプローチにより、各プログラムが貴社の具体的なニーズを満たすことをお約束します。',
      '私たちは、お客様を長期的なパートナーとして捉え、ビジネスの成長に合わせて語学研修のニーズをサポートすることに専念しています。',
    ],
    cta: '詳細を見る',
    ctaHref: '/why-us',
  },
  en: {
    label: 'Why Choose Us',
    heading: 'Why Choose Us',
    paragraphs: [
      'Since our founding in 1976, Language House has been trusted as a leader in corporate English training in Japan, providing high-quality, customized programs. Our instructors, who have extensive experience living and working in Japan, provide instruction from a global perspective while drawing on cultural backgrounds and real-world examples.',
      'With flexible training options, independently developed teaching materials, and a tailored approach, we guarantee that each program meets your company\'s specific needs.',
      'We consider our clients to be long-term partners, and we are dedicated to supporting your organization\'s language training needs as your business evolves and grows.',
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
