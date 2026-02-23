import Link from 'next/link';
import type { Locale } from '@/types';

interface PricingSummaryProps {
  lang: Locale;
}

interface PricePlan {
  name: string;
  target: string;
  price: string;
  unit: string;
  features: string[];
  highlighted: boolean;
}

const content = {
  ja: {
    label: 'Pricing',
    heading: 'シンプルで\n分かりやすい料金体系',
    note: '※ 表示は参考価格です。詳細はお問い合わせください。',
    cta: '料金の詳細・お見積もり',
    ctaHref: '/contact-us',
    plans: [
      {
        name: '個人レッスン',
        target: '個人向け',
        price: '¥5,500',
        unit: '/ 50分〜',
        features: ['マンツーマン指導', '柔軟なスケジュール', '10言語以上対応', 'オンライン可'],
        highlighted: false,
      },
      {
        name: '法人研修',
        target: '企業向け',
        price: 'お見積り',
        unit: '',
        features: [
          'カスタムカリキュラム',
          '複数名同時受講',
          '進捗レポート提供',
          'オンサイト・オンライン対応',
        ],
        highlighted: true,
      },
      {
        name: 'グループレッスン',
        target: '少人数向け',
        price: '¥3,300',
        unit: '/ 60分〜',
        features: ['2〜6名の少人数制', 'レベル別クラス編成', '英語・主要言語対応', 'オンライン可'],
        highlighted: false,
      },
    ] as PricePlan[],
  },
  en: {
    label: 'Pricing',
    heading: 'Simple and transparent\npricing',
    note: '* Prices shown are reference prices. Please contact us for details.',
    cta: 'Pricing details & quotes',
    ctaHref: '/contact-us',
    plans: [
      {
        name: 'Private Lessons',
        target: 'For individuals',
        price: '¥5,500',
        unit: '/ 50 min',
        features: ['One-on-one instruction', 'Flexible scheduling', '10+ languages', 'Online available'],
        highlighted: false,
      },
      {
        name: 'Corporate Training',
        target: 'For businesses',
        price: 'Quote',
        unit: '',
        features: [
          'Custom curriculum',
          'Group sessions',
          'Progress reports',
          'On-site & online',
        ],
        highlighted: true,
      },
      {
        name: 'Group Lessons',
        target: 'Small groups',
        price: '¥3,300',
        unit: '/ 60 min',
        features: ['2–6 students', 'Level-based classes', 'English & major languages', 'Online available'],
        highlighted: false,
      },
    ] as PricePlan[],
  },
} as const;

export default function PricingSummary({ lang }: PricingSummaryProps) {
  const t = content[lang] ?? content['ja'];

  function localizeHref(href: string) {
    return `/${lang}${href}`;
  }

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#046bd2]">
            {t.label}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-[#1e293b] whitespace-pre-line sm:text-4xl">
            {t.heading}
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-[#046bd2] bg-[#046bd2] text-white shadow-lg'
                  : 'border-slate-200 bg-white text-[#1e293b] shadow-sm'
              }`}
            >
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                  plan.highlighted ? 'text-blue-200' : 'text-[#046bd2]'
                }`}
              >
                {plan.target}
              </span>
              <h3 className="mt-2 text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.unit && (
                  <span
                    className={`mb-1 text-sm ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}
                  >
                    {plan.unit}
                  </span>
                )}
              </div>

              <ul className="mt-6 flex flex-col gap-3 border-t pt-6 border-opacity-20 border-white">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-[#046bd2]'
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note + CTA */}
        <p className="mt-8 text-center text-sm text-slate-500">{t.note}</p>
        <div className="mt-6 text-center">
          <Link
            href={localizeHref(t.ctaHref)}
            className="inline-flex items-center gap-2 rounded-md bg-[#046bd2] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4]"
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
