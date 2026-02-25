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
    title: ja ? '私たちについて' : 'About Us',
    description: ja
      ? '1976年創業。創業者グラハム・ペイジのビジョンから生まれたランゲージハウスの歴史・哲学・メソッド・会社概要をご紹介します。'
      : 'Founded in 1976 by Graham Page. Discover the history, philosophy, method, and company profile of Language House — a leader in corporate English training in Japan.',
    openGraph: {
      title: ja ? 'ランゲージハウスについて | Language House' : 'About Language House',
      description: ja
        ? '1976年創業。グラハム・ペイジが築いたランゲージハウスの歴史・哲学・メソッドをご紹介します。'
        : 'Founded in 1976 by Graham Page. The history, philosophy, and method behind Language House.',
      url: ja ? '/ja/about' : '/en/about',
      images: [{ url: '/images/sections/hero/AdobeStock_306467549.jpeg', width: 1200, height: 630 }],
    },
  };
}

export default async function AboutPage({
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
          src="/images/sections/hero/AdobeStock_306467549.jpeg"
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
              {ja ? 'ランゲージハウスについて' : 'About Language House'}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              {ja
                ? '企業ごとに異なるニーズに応じた業界別英語研修を提供しています。日常業務から国際ビジネスまで、確かなコミュニケーション力をお届けします。'
                : 'Language House delivers industry-specific English training tailored to each client\'s unique needs — building the communication skills that drive success in international business and beyond.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Vision ── */}
      <section id="history" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20">
            <figure className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/sections/about/Graham-Page-1.png"
                  alt="Graham Page – Founder"
                  width={600}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="text-center text-sm text-slate-500">
                {ja ? '創業者 グラハム・ペイジ' : 'Founder Graham Page'}
              </figcaption>
            </figure>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja
                  ? '日本のプロフェッショナルに、グローバルで通じる英語を。'
                  : 'Empowering Japanese Professionals Through Global Communication.'}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  {ja
                    ? 'ランゲージハウスでは、コミュニケーションを思考・ニーズ・想いを伝える根本的な力と捉えています。'
                    : 'At Language House, we believe language is more than a tool for communication — it\'s how people express their thoughts, needs, and ambitions.'}
                </p>
                <p>
                  {ja
                    ? '私たちの目標は、リスニング・スピーキング・リーディング・ライティングを通じて「伝え、伝わる」力を育てることです。文化的なニュアンスを踏まえた実践的な言語ツールを提供し、クライアントが自信を持って自己表現できるよう支援します。そしてコミュニケーションの先にある「説得する力」も重視します。ビジネスでも社交の場でも、流暢さ・構成・スタイルが成果を左右します。'
                    : 'Our goal is to build the listening, speaking, reading, and writing skills needed to truly understand and be understood. We provide language tools that account for cultural nuance — so clients can express their ideas with confidence. And we go beyond communication: we recognize the power of language in persuasion. In business and social settings alike, fluency, structure, and style make the difference.'}
                </p>
                <p>
                  {ja
                    ? 'ランゲージハウスが他の語学学校と一線を画すのは、単なる英会話の向上にとどまらず、各分野のプロフェッショナルが英語を武器にして成果を上げることに重点を置いているからです。伝える力がコミュニケーションの基礎なら、相手を動かす説得力こそ言語の真の力です。'
                    : 'Unlike other language schools, Language House focuses on helping Japanese professionals master English as a tool for results — not just conversation. Communication is the foundation; the ability to persuade is where language becomes power.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. History ── */}
      <section id="our-history" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
              {ja ? 'ランゲージハウスの沿革' : 'Our History'}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                {ja
                  ? 'ランゲージハウスは1976年の創業以来、独自のアプローチで日本のプロフェッショナルのビジネス英語力を支えてきました。'
                  : 'Since 1976, Language House has helped Japanese professionals thrive in global business through a distinctive approach to English education.'}
              </p>
              <p>
                {ja
                  ? 'ランゲージハウスの歴史は、今から約60年前、ニュージーランド出身の青年グラハム・ペイジが「日本人に英語を教えたい」という夢を胸に来日したことから始まります。彼はすぐに、日本の画一的な英語教育が効果的でないことを感じ取り、学習者が "Communicate and Persuade"（伝え、説得する）ための独自の哲学とメソッドを開発し始めました。そして何年もかけて、生徒との実践を重ねながら独自のテキストと教材を完成させていきました。'
                  : 'The story begins roughly 60 years ago, when a young New Zealander named Graham Page arrived in Japan with a dream of teaching English. He quickly recognized that Japan\'s standardized approach wasn\'t equipping learners to truly communicate — and set about developing his own philosophy centered on the idea of "Communicate and Persuade." Over many years, he refined original textbooks and materials through constant testing with his students.'}
              </p>
              <p>
                {ja
                  ? 'そして、1976年、株式会社ランゲージハウスが誕生したのです。四国を中心に着実に事業を拡大し、現在では西日本を代表するビジネス英語の会社となっています。'
                  : 'In 1976, Language House Corporation was formally established. Rooted in Shikoku, the company grew steadily to become one of the leading business English providers in western Japan.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Philosophy ── */}
      <section id="philosophy" className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? 'ランゲージハウスの哲学' : 'Our Philosophy'}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  {ja
                    ? '言語には、個人の考え・ニーズ・想いを伝える力があると信じています。私たちの理念の核心は、リスニング・スピーキング・リーディング・ライティングを包括的に鍛えること。単なるコミュニケーションにとどまらず、説得力のある表現のために言語ツールを戦略的に使いこなすことを重視しています。'
                    : 'We believe in the power of language as a means of expressing thoughts, needs, and aspirations. Our philosophy centers on building comprehensive skills across listening, speaking, reading, and writing — with a particular emphasis on using language strategically for both effective communication and persuasion.'}
                </p>
                <p>
                  {ja
                    ? '他の語学スクールが「日常会話」に重点を置くのに対し、私たちはさまざまな分野のプロフェッショナルの具体的なニーズを優先します。専門家・エンジニア・ビジネスパーソン・研究者それぞれに合わせた、業界特化の指導とオーダーメイドの語学研修を提供しています。'
                    : 'Unlike many language schools, we go well beyond conversational English. We prioritize the specific needs of professionals across fields — delivering industry-specific instruction and tailored language training for specialists, engineers, business professionals, and academics.'}
                </p>
                <p>
                  {ja
                    ? '日常会話の向上より、国際ビジネスで成果を出せる実践的な語学力を。それが私たちの企業のお客様への約束です。'
                    : 'Our ultimate goal: equipping corporate clients with the practical language skills they need to succeed in international business — not just to chat, but to perform.'}
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/sections/about/why-join-us.png"
                alt="Language House philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Not Ordinary ── */}
      <section id="not-ordinary" className="py-20 lg:py-28 bg-[#046bd2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {ja
              ? 'ランゲージハウスは普通の英会話学校ではありません。'
              : 'Language House is not an ordinary English conversation school.'}
          </p>
          <div className="mt-8">
            <Link
              href={href('/why-us')}
              className="inline-flex items-center gap-2 rounded-md border border-white/70 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {ja ? '私たちが選ばれる理由' : 'Why Choose Us'}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Method ── */}
      <section id="method" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/raw/Business-English.png"
                alt="Language House method"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                {ja ? 'ランゲージハウス・メソッド' : 'The Language House Method'}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  {ja
                    ? '当校の特徴は、最初のレッスンから英語に完全に没入するランゲージハウスの教授法にあります。単に言語を「学ぶ」のではなく「習得する」ことを目指しています。習得された言語は第二の天性となり、母国語を話すように自然に、素早く使えるようになります。'
                    : 'What sets Language House apart is its teaching method — total English immersion from the very first lesson. We focus not on merely "learning" a language, but on truly "acquiring" it. Acquired language becomes second nature: accessible and automatic, just like your mother tongue.'}
                </p>
                <p>
                  {ja
                    ? '言語の真の「習得」を促すため、挑戦的でありながら理解しやすい、充実したテクニックと教材を用います。ランゲージハウスのメソッドは英語でのリスニングとスピーキングに特化しており、自然で直感的な学習環境を生み出します。'
                    : 'We use techniques and materials that are challenging yet comprehensible — designed to foster genuine language growth and true acquisition of English as a second language. The Language House Method focuses exclusively on listening and speaking in English, creating a natural, intuitive learning environment.'}
                </p>
                <p>
                  {ja
                    ? 'レッスンはすべて英語で進行し、生徒が英語で考え、英語で反応することを自然と促します。この没入型アプローチが言語習得を加速させ、国際ビジネスに不可欠な自信と流暢さを育てます。'
                    : 'All lessons are conducted in English, naturally encouraging students to think and respond in the language. This immersive approach accelerates acquisition while building the confidence and fluency that international business demands.'}
                </p>
                <p>
                  {ja
                    ? '日常のビジネスシーンで使われる語彙やフレーズに重点を置くため、受講生は専門的な業務で即役立つコミュニケーションスキルを短期間で身につけることができます。'
                    : 'By centering on vocabulary and phrases from real business contexts, students quickly build the skills they need to communicate effectively in their professional roles.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Company Info ── */}
      <section id="company-info" className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/sections/hero/Background.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* White overlay for readability */}
        <div className="absolute inset-0 bg-white/80" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
            {ja ? '会社概要' : 'Company Profile'}
          </h2>
          <dl className="mt-10 divide-y divide-slate-300 border-t border-b border-slate-300">
            {[
              {
                label: ja ? '会社名' : 'Company Name',
                value: ja ? (
                  <>ランゲージハウス（<a href="https://zephyros.jp/" target="_blank" rel="noopener noreferrer" className="text-[#046bd2] hover:underline">株式会社ＺＥＰＨＹＲＯＳ</a>）</>
                ) : (
                  <>Language House (<a href="https://zephyros.jp/" target="_blank" rel="noopener noreferrer" className="text-[#046bd2] hover:underline">ZEPHYROS Co., Ltd.</a>)</>
                ),
              },
              { label: ja ? '設立' : 'Founded', value: '1976年' },
              { label: ja ? '資本金' : 'Capital', value: ja ? '1,000万円' : '¥10,000,000' },
              { label: ja ? '代表取締役' : 'President', value: 'Jun Page' },
              {
                label: ja ? '事業内容' : 'Business',
                value: ja ? 'ビジネススキル研修・セミナー' : 'Business skills training and seminars',
              },
              {
                label: ja ? '本社所在地' : 'Headquarters',
                value: ja ? '香川県高松市瓦町2-3-2' : '2-3-2 Kawaramachi, Takamatsu, Kagawa',
              },
              { label: ja ? '電話番号' : 'Phone', value: '087-834-3322' },
            ].map(({ label, value }) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-5 sm:grid-cols-4">
                <dt className="col-span-1 text-sm font-semibold text-[#1e293b]">{label}</dt>
                <dd className="col-span-2 text-sm font-medium text-[#1e293b] sm:col-span-3">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    </>
  );
}
