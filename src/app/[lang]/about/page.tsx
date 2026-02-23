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
                ? 'ランゲージハウスでは、お客様のためのユニークなニーズに合わせた業界別英語トレーニングを提供することで、日常生活や国際ビジネスでの効果的なコミュニケーションと成功をお約束します。'
                : 'At Language House, we provide industry-specific English training tailored to the unique needs of each client, ensuring effective communication and success in daily life and international business.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. History ── */}
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
                  ? 'グローバル・コミュニケーションで日本のプロフェッショナルを強化する。'
                  : 'Empowering Japanese Professionals Through Global Communication.'}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
                <p>
                  {ja
                    ? 'ランゲージハウスでは、コミュニケーションは思考、ニーズ、願望を表現するために不可欠であると考えています。'
                    : 'At Language House, we believe that communication is essential for expressing thoughts, needs, and aspirations.'}
                </p>
                <p>
                  {ja
                    ? '私たちの目標は、効果的な英語のリスニング、スピーキング、リーディング、ライティングに必要なスキルを身につけ、理解し、理解されるようにすることです。文化的なニュアンスを考慮した有意義で効果的な言語ツールを提供し、クライアントが自信を持って自分の考えを表現できるようにします。コミュニケーションにとどまらず、私たちは説得における言語の力を認識しています。ビジネスであれ、社交であれ、流暢さ、構成、スタイルが重要です。'
                    : 'Our goal is to develop the skills needed for effective English listening, speaking, reading, and writing — to understand and be understood. We provide meaningful and effective language tools that take cultural nuances into account, empowering clients to express their ideas with confidence. Beyond communication, we recognize the power of language in persuasion. Whether in business or social settings, fluency, structure, and style matter.'}
                </p>
                <p>
                  {ja
                    ? 'ランゲージハウスは、他の語学学校とは異なり、日本人のプロフェッショナルが英語をマスターし、効果的に使うことで、各分野で卓越した成果を上げることに重点を置いています。コミュニケーションは基礎であり、説得力は言語の熟練した実行力です。'
                    : 'Unlike other language schools, Language House focuses on helping Japanese professionals master English and use it effectively to achieve outstanding results in their respective fields. Communication is the foundation; persuasion is the skillful execution of language.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3b. History ── */}
      <section id="history" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
              {ja ? 'ランゲージハウスの沿革' : 'Our History'}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                {ja
                  ? 'ランゲージハウスは、1976年の創立以来、ビジネス英語教育の革新的なアプローチで、日本のプロフェッショナルに力を与えてきました。'
                  : 'Since its founding in 1976, Language House has empowered Japanese professionals with an innovative approach to business English education.'}
              </p>
              <p>
                {ja
                  ? 'ランゲージハウスの歴史は、今から約60年前、ニュージーランド出身の青年グラハム・ペイジが、日本人学習者に英語を教えるという夢を抱いて来日したことに始まります。彼はすぐに、日本の画一的な英語教育が、日本人が英語でコミュニケーションをとるための最も効果的な方法ではないことに気づき、学習者が "Communicate and Persuade"（伝え、説得する）ための独自の哲学と方法を開発し始めました。そしてこの哲学を取り入れた独自のテキストや教材を生徒たちにテストを重ねながら、何年もかけて作り上げました。'
                  : 'The history of Language House began some 60 years ago when a young New Zealander named Graham Page came to Japan with a dream of teaching English to Japanese learners. He quickly realized that Japan\'s uniform approach to English education was not the most effective way for Japanese people to communicate in English, and began developing his own philosophy and methods for learners to "Communicate and Persuade." Over many years, he tested and refined original textbooks and materials with his students.'}
              </p>
              <p>
                {ja
                  ? 'そして、1976年、株式会社ランゲージハウスが誕生したのです。四国を中心に着実に事業を拡大し、現在では西日本を代表するビジネス英語の会社となっています。'
                  : 'In 1976, Language House Corporation was born. The company steadily expanded, primarily in Shikoku, and has grown to become one of the leading business English companies in western Japan.'}
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
                    ? '私達は個人の考え、ニーズ、願望を表現する手段としての言語の力を信じています。私たちの理念は、リスニング、スピーキング、リーディング、ライティングを含む総合的な言語スキルを身につけることを中心に据えています。私たちは、効果的なコミュニケーションと説得のために言語ツールを戦略的に活用することを重視しています。'
                    : 'We believe in the power of language as a means to express individual thoughts, needs, and aspirations. Our philosophy centers on developing comprehensive language skills including listening, speaking, reading, and writing, with an emphasis on strategically using language tools for effective communication and persuasion.'}
                </p>
                <p>
                  {ja
                    ? '同業他社とは異なり、私たちは単なる社会化にとどまらず、さまざまな分野の専門家の具体的なニーズを優先し、専門家、エンジニア、企業関係者、学識経験者に対し、業界に特化した指導とオーダーメイドの語学トレーニングを提供しています。'
                    : 'Unlike our competitors, we go beyond mere socialization to prioritize the specific needs of professionals across various fields, providing industry-specific instruction and tailor-made language training for specialists, engineers, business professionals, and academics.'}
                </p>
                <p>
                  {ja
                    ? '最終的には、一般的な会話力よりも実践的な語学力を優先し、国際ビジネスで成功するために必要な語学ツールを企業のお客様に身につけていただくことを第一の目標としています。'
                    : 'Ultimately, our primary goal is to equip corporate clients with the language tools needed to succeed in international business, prioritizing practical language skills over general conversational ability.'}
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
                    ? '私たちのユニークな強みは、最初のレッスンから英語漬けになるランゲージ・ハウスの教授法にあります。単に言語を「学ぶ」のではなく、「習得する」ことに重点を置いています。言語を習得すれば、それは第二の天性となります。母国語を使うのと同じように、その言語に素早く自然にアクセスし、使うことができるようになります。'
                    : 'Our unique strength lies in the Language House teaching method, which immerses students in English from the very first lesson. We focus not merely on "learning" a language, but on "acquiring" it. Once acquired, language becomes second nature — you can access and use it quickly and naturally, just as you do your mother tongue.'}
                </p>
                <p>
                  {ja
                    ? '私たちは、生徒の言語成長を促し、第二言語としての英語を真「習得」させるために、挑戦的でありながら理解しやすい、魅力的なテクニックと教材を使用しています。ランゲージハウスのメソッドは、英語でのリスニングとスピーキングのみに重点を置き、自然で直感的な学習環境を作り出します。'
                    : 'We use engaging techniques and materials that are challenging yet comprehensible to foster students\' language growth and true "acquisition" of English as a second language. The Language House Method focuses exclusively on listening and speaking in English, creating a natural and intuitive learning environment.'}
                </p>
                <p>
                  {ja
                    ? 'レッスンはすべて英語で行われ、生徒がターゲット言語で考え、反応することを促します。このアプローチは、言語習得を加速させるだけでなく、国際ビジネスの成功に不可欠な自信と流暢さを養います。'
                    : 'All lessons are conducted entirely in English, encouraging students to think and respond in the target language. This approach not only accelerates language acquisition but also builds the confidence and fluency essential for success in international business.'}
                </p>
                <p>
                  {ja
                    ? '日常的なビジネスシーンで使用される実用的な語彙やフレーズに重点を置くことで、受講生は専門的な職務において効果的なコミュニケーションを図るために必要なスキルを短期間で身につけることができます。'
                    : 'By focusing on practical vocabulary and phrases used in everyday business situations, students can quickly acquire the skills needed to communicate effectively in their professional roles.'}
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
