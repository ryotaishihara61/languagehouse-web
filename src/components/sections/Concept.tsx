import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/types';
import CountUp from '@/components/ui/CountUp';

interface ConceptProps {
  lang: Locale;
}

const content = {
  ja: {
    label: '沿革',
    heading: '沿革',
    body: 'ランゲージハウスは半世紀にわたり、さまざまな業種の日本企業に英語研修を提供し、従業員の語学力向上を支え続けてきました。',
    cta: '詳細を見る',
    ctaHref: '/about',
    stat1: { value: '288', label: '導入社数', suffix: '社' },
    stat2: { value: '415,774', label: '累計受講者数', suffix: '人' },
    stat3: { value: '50', label: '創業', suffix: '年' },
  },
  en: {
    label: 'History',
    heading: 'Trusted by Japanese companies\nfor over half a century.',
    body: 'For over half a century, Language House has delivered English training to Japanese companies across a wide range of industries — helping their employees communicate and succeed in the global arena.',
    cta: 'Learn More',
    ctaHref: '/about',
    stat1: { value: '288', label: 'Companies Served', suffix: '' },
    stat2: { value: '415,774', label: 'Total Participants', suffix: '' },
    stat3: { value: '50', label: 'Years Since Founding', suffix: '' },
  },
} as const;

export default function Concept({ lang }: ConceptProps) {
  const t = content[lang] ?? content['ja'];

  function localizeHref(href: string) {
    return `/${lang}${href}`;
  }

  return (
    <section id="concept" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/sections/services/businessmeeting.jpeg"
              alt="Language House meeting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#1e293b] whitespace-pre-line sm:text-3xl">
              {t.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {t.body}
            </p>

            {/* Stats */}
            <dl className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8">
              {[t.stat1, t.stat2, t.stat3].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-slate-500">{stat.label}</dt>
                  <dd className="mt-1 text-4xl font-extrabold leading-none text-[#046bd2] sm:text-5xl">
                    <CountUp value={stat.value} />
                    {stat.suffix && (
                      <span className="ml-1 text-2xl font-bold sm:text-3xl">{stat.suffix}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href={localizeHref(t.ctaHref)}
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#046bd2] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4]"
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
      </div>
    </section>
  );
}
