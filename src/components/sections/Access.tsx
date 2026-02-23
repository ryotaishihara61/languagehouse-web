import type { Locale } from '@/types';

interface AccessProps {
  lang: Locale;
}

interface SchoolInfo {
  name: string;
  address: string;
  access: string;
  tel: string;
  hours: string;
  mapEmbedSrc?: string;
}

const content = {
  ja: {
    label: 'Access',
    heading: '校舎・アクセス情報',
    subheading: '主要ターミナルから便利な立地に校舎を構えています。オンラインレッスンにも対応しています。',
    hoursLabel: '営業時間',
    telLabel: '電話番号',
    accessLabel: 'アクセス',
    onlineLabel: 'オンラインレッスン',
    onlineNote: 'Zoom / Microsoft Teams にて対応可能',
    schools: [
      {
        name: '東京校（本校）',
        address: '〒100-0000 東京都千代田区〇〇 1-2-3 〇〇ビル 5F',
        access: 'JR〇〇線「〇〇駅」徒歩3分 / 地下鉄〇〇線「〇〇駅」徒歩5分',
        tel: '03-0000-0000',
        hours: '月〜金 9:00〜21:00　土 9:00〜18:00',
      },
      {
        name: '大阪校',
        address: '〒530-0000 大阪府大阪市北区〇〇 4-5-6 〇〇ビル 3F',
        access: 'JR〇〇線「〇〇駅」徒歩2分 / 地下鉄〇〇線「〇〇駅」徒歩4分',
        tel: '06-0000-0000',
        hours: '月〜金 9:00〜21:00　土 9:00〜18:00',
      },
    ] as SchoolInfo[],
  },
  en: {
    label: 'Access',
    heading: 'School Locations & Access',
    subheading: 'Our schools are conveniently located near major transit hubs. Online lessons are also available.',
    hoursLabel: 'Hours',
    telLabel: 'Phone',
    accessLabel: 'Access',
    onlineLabel: 'Online Lessons',
    onlineNote: 'Available via Zoom / Microsoft Teams',
    schools: [
      {
        name: 'Tokyo (Main School)',
        address: '〇〇 Bldg. 5F, 1-2-3 〇〇, Chiyoda-ku, Tokyo 100-0000',
        access: '3 min walk from JR 〇〇 Stn. / 5 min walk from Subway 〇〇 Stn.',
        tel: '03-0000-0000',
        hours: 'Mon–Fri 9:00–21:00 / Sat 9:00–18:00',
      },
      {
        name: 'Osaka School',
        address: '〇〇 Bldg. 3F, 4-5-6 〇〇, Kita-ku, Osaka 530-0000',
        access: '2 min walk from JR 〇〇 Stn. / 4 min walk from Subway 〇〇 Stn.',
        tel: '06-0000-0000',
        hours: 'Mon–Fri 9:00–21:00 / Sat 9:00–18:00',
      },
    ] as SchoolInfo[],
  },
} as const;

export default function Access({ lang }: AccessProps) {
  const t = content[lang] ?? content['ja'];

  return (
    <section id="access" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#046bd2]">
            {t.label}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-[#1e293b] sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t.subheading}</p>
        </div>

        {/* School cards */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {t.schools.map((school) => (
            <div
              key={school.name}
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              {/* Map placeholder */}
              <div className="h-56 bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                {/* Replace with actual Google Maps embed */}
                <span>Map — {school.name}</span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1e293b]">{school.name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 font-semibold text-slate-500">{t.accessLabel}</dt>
                    <dd className="text-slate-700">{school.access}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 font-semibold text-slate-500">{t.telLabel}</dt>
                    <dd>
                      <a
                        href={`tel:${school.tel.replace(/-/g, '')}`}
                        className="text-[#046bd2] hover:underline"
                      >
                        {school.tel}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 font-semibold text-slate-500">{t.hoursLabel}</dt>
                    <dd className="text-slate-700">{school.hours}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 font-semibold text-slate-500">〒</dt>
                    <dd className="text-slate-700">{school.address}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>

        {/* Online note */}
        <div className="mt-10 flex items-center gap-4 rounded-xl border border-[#046bd2]/20 bg-[#e8f1fb] p-6">
          <span className="text-3xl" aria-hidden="true">
            💻
          </span>
          <div>
            <p className="font-bold text-[#1e293b]">{t.onlineLabel}</p>
            <p className="mt-1 text-sm text-slate-600">{t.onlineNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
