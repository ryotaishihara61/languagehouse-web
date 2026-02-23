import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n-config';

export const runtime = 'edge';
export const dynamicParams = false;

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
                ? '弊社は1976年の設立以来、日本における企業およびビジネス英語トレーニングのリーダーとして信頼されてきました。私たちの理念、メソッド、コースは、日本人従業員の英語能力を向上させるという実績があります。'
                : 'Since our founding in 1976, we have been trusted as a leader in corporate and business English training in Japan. Our philosophy, methods, and courses have a proven track record of improving the English proficiency of Japanese employees.'}
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
                  ? '弊社は1976年の設立以来、日本における企業英語研修の豊富な経験を持つ、各分野のエキスパートが講師を務めます。具体的な成果をもたらす質の高いトレーニングを提供するために、私たちの知識と専門知識を信頼してください。'
                  : 'Since our founding in 1976, our courses are taught by experts with extensive experience in corporate English training in Japan. Trust in our knowledge and expertise to deliver high-quality training that produces tangible results.'}
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
                    ? '当校の講師陣は、当校の最大の強みです。経験豊富で、関連学位を持ち、日本の企業環境を深く理解しています。彼らは皆、日本に住み、働いた経験があり、日本人とのコミュニケーションや仕事の経験が長いネイティブ、またはネイティブに近いスピーカーです。'
                    : 'Our instructors are our greatest strength. They are experienced, hold relevant degrees, and have a deep understanding of the Japanese corporate environment. They have all lived and worked in Japan and are native or near-native speakers with extensive experience communicating and working with Japanese people.'}
                </p>
                <p>
                  {ja
                    ? '海外から発信されるオンラインスピーキングなどの講師は、日本の企業文化やビジネス慣習に精通しているとは限りません。一方当校の講師は、自らの経験に基づいた、ビジネスパーソンに必要な実践的で効果的なトレーニングを提供することが可能です。'
                    : 'Instructors based overseas may not be familiar with Japanese corporate culture or business practices. Our instructors, by contrast, can provide practical and effective training based on their own experience — exactly what business professionals need.'}
                </p>
              </div>

              {/* Sub-features */}
              <dl className="mt-10 space-y-6">
                {[
                  {
                    title: ja ? '文化的感受性' : 'Cultural Sensitivity',
                    body: ja
                      ? '私たちのインストラクターは皆、日本に住み、日本で働いた経験があるため、経験豊かな文化的背景をレッスンに無理なく取り入れることができ、より親しみやすく、魅力的な学習体験を育みます。'
                      : 'All of our instructors have lived and worked in Japan, allowing them to naturally incorporate their rich cultural background into lessons, fostering a more relatable and engaging learning experience.',
                  },
                  {
                    title: ja ? '実体験' : 'Real-World Experience',
                    body: ja
                      ? '当校の講師は日本での実体験をもとに日本人と接する際の個人的なエピソードや仕事上のエピソードを紹介します。このアプローチは理論と現実を結びつけ、仕事や社交の場での英語の実践的な使い方を紹介します。個人的な経験、魅力的な逸話、文化的なニュアンスを共有することで、現実の英語使用に関する総合的な視点を提供します。'
                      : 'Our instructors draw on their real experiences in Japan to share personal and professional anecdotes about interacting with Japanese people. This approach bridges theory and reality, demonstrating practical English use in professional and social settings.',
                  },
                  {
                    title: ja ? 'グローバルな視点' : 'Global Perspective',
                    body: ja
                      ? '日本に住み、働いた経験のある講師は、独自のグローバルな視点を持っています。日本と他の英語圏の国々での英語の使い方を比較対照し、方言や慣用表現、文化的規範の違いに触れることができます。このような広い視野は、学習経験を豊かにするだけでなく、生徒がグローバル化した世界に対応できるよう準備します。'
                      : 'Instructors who have lived and worked in Japan bring a unique global perspective. They can compare and contrast how English is used in Japan versus other English-speaking countries, exposing students to different dialects, idiomatic expressions, and cultural norms.',
                  },
                  {
                    title: ja ? '本物の言語体験' : 'Authentic Language Experience',
                    body: ja
                      ? '当校の講師は、本物の自然な言語インプットを提供することで、ユニークな学習体験を提供します。英語のニュアンスに精通した講師陣が、ネイティブのような流暢さを無理なく身につけます。本物のアクセント、イントネーション、文化的な言及に触れることで、言語に対する鋭い耳を養い、ネイティブスピーカーとの会話に自信を持つことができます。当校の講師は、英文法、構文、語彙を深く理解しているため上達が早くなります。また、自然で自信に満ちた会話ができるよう、正確な音の再現を指導します。'
                      : 'Our instructors provide a unique learning experience through authentic, natural language input. With deep familiarity with the nuances of English, students naturally develop native-like fluency. Exposure to authentic accents, intonation, and cultural references builds a keen ear for the language and confidence in conversing with native speakers.',
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
                  ? '私たちは各組織に固有の要件があることを理解しています。私たちはお客様と密接に協力し、お客様の特定の目標や目的に沿ったカスタマイズされたトレーニングプログラムをデザインし、最大の効果と関連性を確保します。 発音、文法、語彙など、日本人学習者が英語を学ぶ際に直面する特有の課題を特定し授業に反映させることに長けています。'
                  : 'We understand that each organization has unique requirements. We work closely with our clients to design customized training programs aligned with their specific goals and objectives, ensuring maximum effectiveness and relevance. We excel at identifying and addressing the unique challenges Japanese learners face when learning English, such as pronunciation, grammar, and vocabulary.'}
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
                  ? '他社が1つのテキストや教授法に基づいた標準的なコースを提供しているのに対し私たちは企業や受講生のニーズに合わせてレッスンをカスタマイズできるよう採用しているツールの柔軟性に優れています。当社独自のテキストとコースワークを用意し達成したいことに焦点を当てた業界特有のビジネススキル開発教材と組み合わせることができます。'
                  : 'While other companies offer standardized courses based on a single textbook or teaching method, we excel in the flexibility of the tools we employ to customize lessons to the needs of each company and student. We have our own proprietary texts and coursework that can be combined with industry-specific business skills development materials focused on what you want to achieve.'}
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
                  ? 'お客様のスケジュールやご希望に合わせて柔軟なトレーニング・オプションをご用意しています。オンサイト、オンライン、ブレンデッド・ラーニングなど、お客様のニーズに合った方法でトレーニングを提供します。また、就業時間中や就業時間外にも、さまざまなオプションをご用意しています。'
                  : 'We offer flexible training options to suit your schedule and preferences. We provide training in the format that suits you best — on-site, online, or blended learning. We also offer a variety of options both during and outside of working hours.'}
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
                  ? 'ランゲージハウスでは、オンラインレッスンも可能です。'
                  : 'Language House also offers online lessons.'}
              </p>

              <dl className="mt-8 space-y-6">
                {[
                  {
                    title: ja ? '柔軟性と利便性' : 'Flexibility and Convenience',
                    body: ja
                      ? '私たちの講師は日本での生活や勤務経験を持っており、独自のグローバルな視点を持っています。日本と他の英語圏の国々での英語の使い方を比較し、対比することができるため、学生は異なる方言、慣用表現、文化的規範に触れることができます。この広範な視点は学習体験を豊かにするだけでなく、グローバル化した世界に備えるための準備にもなります。'
                      : 'Our instructors have experience living and working in Japan, giving them a unique global perspective. They can compare and contrast how English is used in Japan versus other English-speaking countries, exposing students to different dialects, idiomatic expressions, and cultural norms.',
                  },
                  {
                    title: ja ? '実際のビジネス経験' : 'Real Business Experience',
                    body: ja
                      ? '私たちの講師は日本での実体験を活かして、日本人との交流に関する個人的および職業的な話を共有します。このアプローチは理論と現実を結びつけ、プロフェッショナルや社会的な場面での英語の実際の使用を示します。個人的な経験、興味深い逸話、文化的なニュアンスを共有することで、リアルな英語の使い方についての幅広い視点を提供します。'
                      : 'Our instructors leverage their real experiences in Japan to share personal and professional stories about interacting with Japanese people. This approach bridges theory and reality, demonstrating actual English use in professional and social situations.',
                  },
                  {
                    title: ja ? 'インタラクティブで魅力的な学習ツール' : 'Interactive and Engaging Learning Tools',
                    body: ja
                      ? 'ランゲージハウスでは言語が個人が自分の考えやニーズ、願望を表現する手段としての力を持つと信じています。私たちの理念は、クライアントや学生に包括的な言語スキルを提供することにあります。それには、リスニング、スピーキング、リーディング、ライティングが含まれます。私たちは、効果的なコミュニケーションと説得のための言語ツールの戦略的な活用を重視しています。'
                      : 'At Language House, we believe in the power of language as a means for individuals to express their thoughts, needs, and aspirations. Our philosophy is to provide clients and students with comprehensive language skills, including listening, speaking, reading, and writing. We emphasize the strategic use of language tools for effective communication and persuasion.',
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
