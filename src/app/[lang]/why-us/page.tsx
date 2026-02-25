import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const ja = rawLang !== 'en';

  return {
    title: ja ? '私たちが選ばれる理由' : 'Why Choose Us',
    description: ja
      ? '専門知識・エキスパート講師・オーダーメイドプログラム・教材の多様性・柔軟なスケジュール。ランゲージハウスが48年間選ばれ続ける理由をご紹介します。'
      : 'Expert instructors, customized programs, and flexible scheduling. Discover why top Japanese companies have chosen Language House for business English training for 48 years.',
    openGraph: {
      title: ja ? '私たちが選ばれる理由 | Language House' : 'Why Choose Language House',
      description: ja
        ? '専門知識・エキスパート講師・オーダーメイドプログラム。48年間選ばれ続ける理由。'
        : 'Expert instructors, customized programs, flexible scheduling. 48 years of trusted business English training.',
      url: ja ? '/ja/why-us' : '/en/why-us',
      images: [{ url: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg', width: 1200, height: 630 }],
    },
  };
}

export default async function WhyUsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale;
  const ja = lang === 'ja';

  function href(path: string) {
    return `/${lang}${path}`;
  }

  return (
    <>
      {/* ── 1. Page Hero ── */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">
        <Image
          src="/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg"
          alt="Language House"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {ja ? 'なぜランゲージハウスなのか？' : 'Why Language House?'}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              {ja
                ? '1976年の創業以来、半世紀にわたって日本の企業英語研修を牽引してきました。確かな理念と実績あるメソッドが、日本人ビジネスパーソンの英語力向上を力強く支えます。'
                : 'For nearly 50 years, we\'ve been a trusted leader in corporate English training in Japan. Our proven philosophy and methods have helped thousands of Japanese professionals communicate with confidence.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Expertise ── */}
      <section id="expertise" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg"
                alt="Expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? '専門知識' : 'Expertise'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {ja
                  ? '1976年の創業以来積み上げてきた企業英語研修の経験と専門知識が、私たちの基盤です。各分野のエキスパートが講師を務め、確かな成果につながる質の高いトレーニングをお届けします。'
                  : 'Built on nearly 50 years of corporate English training in Japan, our courses are taught by specialists with deep industry expertise — delivering high-quality instruction that produces real, measurable results.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Expert Instructors ── */}
      <section id="instructors" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? 'エキスパート・インストラクター' : 'Expert Instructors'}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  {ja
                    ? '当校の講師陣は最大の強みです。経験豊富で関連資格を持ち、日本の企業文化を深く理解しています。全員が日本での居住・就労経験を持ち、日本人と長年にわたってコミュニケーションを重ねてきたネイティブ、またはネイティブに準ずるスピーカーです。'
                    : 'Our instructors are our greatest strength. Experienced, credentialed, and deeply familiar with Japanese corporate culture, they have all lived and worked in Japan — native or near-native speakers with years of experience engaging with Japanese professionals.'}
                </p>
                <p>
                  {ja
                    ? '海外在住の講師は、日本の企業文化やビジネス慣習を熟知していないことがほとんどです。当校の講師は実体験に基づいて、ビジネスパーソンに本当に必要な実践的で効果的なトレーニングを提供します。'
                    : 'Instructors based overseas are often unfamiliar with Japanese corporate culture and business practices. Ours draw on firsthand experience to deliver practical, effective training that speaks directly to what business professionals need.'}
                </p>
              </div>

              {/* Sub-features */}
              <dl className="mt-10 space-y-6">
                {[
                  {
                    title: ja ? '文化的感受性' : 'Cultural Sensitivity',
                    body: ja
                      ? '全講師が日本での居住・就労経験を持つため、豊かな文化的背景を自然にレッスンへ取り入れることができます。より身近で充実した学習体験を生み出します。'
                      : 'All our instructors have lived and worked in Japan, naturally weaving cultural insight into every lesson — creating a more relatable and engaging learning experience.',
                  },
                  {
                    title: ja ? '実体験' : 'Real-World Experience',
                    body: ja
                      ? '講師は日本での実体験をもとに、個人・仕事双方のエピソードを交えながら授業を進めます。理論と実践を結びつけることで、職場や社交の場で即使える英語を身につけます。'
                      : 'Drawing on firsthand experience in Japan, our instructors share real personal and professional stories that bridge theory and practice — making English immediately useful in the workplace and beyond.',
                  },
                  {
                    title: ja ? 'グローバルな視点' : 'Global Perspective',
                    body: ja
                      ? '日本と英語圏の両方を知る講師が、方言・慣用表現・文化的規範の違いをレッスンに取り入れます。広い視野が学習を豊かにし、グローバルな舞台で通用する力を養います。'
                      : 'With experience in both Japan and English-speaking countries, our instructors compare dialects, idioms, and cultural norms — broadening students\' perspective and preparing them for the global stage.',
                  },
                  {
                    title: ja ? '本物の言語体験' : 'Authentic Language Experience',
                    body: ja
                      ? '自然で本物の英語インプットにより、ネイティブに近い流暢さが身につきます。本物のアクセントやイントネーション、文化的な表現に触れることで、リスニング力が鍛えられ、ネイティブスピーカーとの会話に自信が生まれます。'
                      : 'Authentic, natural language input helps students develop near-native fluency. Exposure to real accents, intonation, and cultural references sharpens listening skills and builds genuine confidence with native speakers.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="border-l-4 border-[#046bd2] pl-5">
                    <dt className="font-bold text-[#1e293b]">{title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-slate-600">{body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 lg:sticky lg:top-24">
              <Image
                src="/images/sections/about/qualify.png"
                alt="Expert Instructors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Tailored Approach ── */}
      <section id="tailored" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/sections/about/meeting.png"
                alt="Tailored Approach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? 'オーダーメイドのアプローチ' : 'Tailored Approach'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {ja
                  ? '組織ごとに異なるニーズを的確に把握し、目標に沿ったカスタマイズプログラムを設計します。発音・文法・語彙など、日本人学習者特有の課題を深く理解し、授業にしっかり反映させることに長けています。'
                  : 'Every organization has unique needs. We work closely with clients to design training programs precisely aligned with their goals — and we have a particular strength in identifying and addressing the challenges Japanese learners face with pronunciation, grammar, and vocabulary.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Diverse Materials ── */}
      <section id="materials" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? '教材の多様性' : 'Versatility of Materials'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {ja
                  ? '他社が1つの教科書や教授法に依存した画一的なコースを提供するのに対し、私たちは企業・受講生のニーズに応じて教材とアプローチを柔軟に組み合わせます。独自のテキスト・コースワークに加え、業界特化のビジネススキル教材も組み合わせることで、目標に直結した学習を実現します。'
                  : 'While many providers rely on a single textbook or fixed curriculum, we tailor every lesson to the company and student. Our proprietary texts and coursework can be paired with industry-specific business skills materials — all focused on what you want to achieve.'}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/raw/Versatility-of-Materials.png"
                alt="Versatility of Materials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Flexibility ── */}
      <section id="flexibility" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/sections/about/process.png"
                alt="Flexibility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? '柔軟性' : 'Flexibility'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {ja
                  ? '受講スケジュールや希望に合わせて、対面・オンライン・ブレンド型から最適な形式を選べます。就業時間中・時間外を問わず、さまざまな受講オプションをご用意しています。'
                  : 'Choose the format that works best for your team — on-site, online, or blended learning. We offer sessions both during and outside business hours to fit any schedule.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Online Lessons ── */}
      <section id="online" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? 'オンラインレッスン' : 'Online Lessons'}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {ja
                  ? 'ランゲージハウスのすべてのプログラムはオンラインでもご受講いただけます。場所を選ばず、柔軟に学習を続けられます。'
                  : 'All Language House programs are available online, giving your team the flexibility to learn from wherever they are.'}
              </p>

              <dl className="mt-8 space-y-6">
                {[
                  {
                    title: ja ? '柔軟性と利便性' : 'Flexibility and Convenience',
                    body: ja
                      ? '自宅やオフィスなど、インターネット環境があればどこからでも参加できます。通勤・移動がないぶん、忙しいスケジュールにも無理なく組み込めます。'
                      : 'Join from your office, home, or anywhere with an internet connection. No commuting means no wasted time — learning fits seamlessly into even the busiest schedule.',
                  },
                  {
                    title: ja ? '対面と変わらない質' : 'Uncompromised Quality',
                    body: ja
                      ? 'オンライン形式でも、講師の質と指導内容は対面と変わりません。日本でのビジネス経験をもとにした実践的な指導を、画面を通してそのままお届けします。'
                      : 'Online delivery doesn\'t mean lower quality. Our instructors bring the same real-world expertise and Japan-based experience to every virtual session — practical, relevant, and effective.',
                  },
                  {
                    title: ja ? 'インタラクティブな学習ツール' : 'Interactive Learning Tools',
                    body: ja
                      ? '画面共有、デジタルホワイトボード、グループワークなど、オンラインならではのインタラクティブなツールを積極的に活用します。対面授業と変わらない充実した学習体験をオンラインで実現します。'
                      : 'We make full use of screen sharing, digital whiteboards, and virtual breakout sessions — creating an interactive, engaging learning experience that rivals in-person instruction.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="border-l-4 border-[#046bd2] pl-5">
                    <dt className="font-bold text-[#1e293b]">{title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-slate-600">{body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 lg:sticky lg:top-24">
              <Image
                src="/images/raw/learning-online.png"
                alt="Online Lessons"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section id="cta" className="py-20 lg:py-28 bg-[#046bd2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-bold text-white/80 sm:text-xl">
            {ja ? '流暢さがゴールではない。' : 'Fluency is not the goal.'}
          </p>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {ja ? '本当に伝わる英語を。' : 'English that truly connects.'}
          </p>
          <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl">
            {ja ? 'あなたの目標達成をお手伝いします' : 'Let us help you achieve your goals.'}
          </h2>
          <div className="mt-8">
            <Link
              href={href('/contact-us')}
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold text-[#046bd2] shadow-sm transition-colors hover:bg-white/90"
            >
              {ja ? 'お問い合わせ' : 'Contact Us'}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
