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
    title: ja ? 'プログラム' : 'Programs',
    description: ja
      ? 'ビジネス英語・英語・集中英語・英語スキルセミナー・TOEIC・日本語プログラム。企業のニーズに合わせてカスタマイズされたランゲージハウスの語学研修をご紹介します。'
      : 'Business English, General English, Intensive English, Skills Seminars, TOEIC, and Japanese programs — fully customized to your company\'s needs.',
    openGraph: {
      title: ja ? 'プログラム | Language House' : 'Programs | Language House',
      description: ja
        ? 'ビジネス英語・集中英語・TOEICなど、企業向けカスタマイズ語学研修プログラム一覧。'
        : 'Business English, Intensive English, TOEIC and more — customized corporate language training programs.',
      url: ja ? '/ja/programs' : '/en/programs',
      images: [{ url: '/images/sections/hero/AdobeStock_306467549.jpeg', width: 1200, height: 630 }],
    },
  };
}

const programs = {
  ja: [
    {
      id: 'business-english',
      name: 'ビジネス英語プログラム',
      image: '/images/sections/hero/AdobeStock_306467549.jpeg',
      body: [
        'ビジネス英語の基礎から各業界に特化した専門プログラムまで、組織の目標に合わせた包括的なコースをご提供します。プレゼンテーション、経営会議、技術論文、交渉、問題解決、異文化コミュニケーションなど、グローバルビジネスの現場で求められるあらゆる場面で実力を発揮できるよう、一人ひとりを支援します。',
        'ご要望と受講生の習熟度評価をもとに、パーソナライズされたコースを設計します。講師の選定から教授法・教材の選択まで、すべてをカスタマイズして最適な研修をお届けします。',
      ],
    },
    {
      id: 'english',
      name: '英語プログラム',
      image: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg',
      body: [
        '文法・スピーキング・ライティング・総合的なコミュニケーションなど、主要分野を網羅した基礎英語プログラムです。インタラクティブなレッスンと実践的な演習を通じて、英語の土台をしっかりと築きます。',
        '実績あるプログラムが、着実に英語力を「レベルアップ」させます。実践的な言語使用と実社会での応用を重視し、日常会話・旅行・仕事の初期段階まで、さまざまな場面で自信を持ってコミュニケーションできる力を育てます。',
      ],
    },
    {
      id: 'intensive-english',
      name: '集中英語プログラム',
      image: '/images/sections/services/learning-online.png',
      body: [
        'グローバルなプレゼンスを強化したい企業に。海外赴任を控えた社員に。当校の集中ビジネス英語コースが、英語環境で活躍するための実力を短期間で養います。',
        '専門講師・実践的なシミュレーション・多彩な教材を組み合わせ、ご希望のスケジュールに合わせた完全カスタマイズコースをお作りします。グローバル市場で即戦力になるための語学力を、私たちと共に築きましょう。',
      ],
    },
    {
      id: 'english-skills',
      name: '英語スキルセミナー',
      image: '/images/sections/services/Business-skill.png',
      body: [
        '日本企業向けに開発した1日集中型セミナーです。人前でのスピーチ、インパクトのあるプレゼンテーション、会議での効果的なコミュニケーションなど、ビジネス英語スピーキングの核心に集中して取り組みます。',
        '経験豊富なトレーナーによる実践練習と個別フィードバックで、即日の改善と持続的な自信をお約束します。グローバル市場で求められるスキルを短期間で習得し、ビジネスコミュニケーションの質を一段階引き上げましょう。',
      ],
    },
    {
      id: 'toeic',
      name: 'TOEIC',
      image: '/images/raw/1.png',
      body: [
        '競争の激しいビジネスシーンで、グローバル人材を目指す方にとって英語力は不可欠です。TOEICやTOEFL・GMATスコアを昇進・キャリアアップの指標とされているお客様向けに、目標スコアに直結したカスタマイズカリキュラムを提供しています。',
        '目標スコア取得に直結する集中プログラムで、確かなスキルを習得。キャリアアップへの新たな扉を開きます。',
      ],
    },
    {
      id: 'japanese',
      name: '日本語プログラム',
      image: '/images/sections/about/meeting.png',
      body: [
        '外国人雇用が増加する中、日本語能力は職場でも日常生活でも成功の鍵です。当校のオーダーメイドクラスは、集中型・定期型どちらにも柔軟に対応し、業務への支障を最小限に抑えながら確実な上達を実現します。',
        '無理のない着実な上達のために、優先度の高い言語スキルに的を絞ってカリキュラムを組みます。初心者には第二言語として日本語を学んだ経験を持つ講師が共感を交えて指導し、上級者には複雑な概念や発音・ニュアンスを磨くためにネイティブ講師とペアを組みます。',
      ],
    },
  ],
  en: [
    {
      id: 'business-english',
      name: 'Business English Program',
      image: '/images/sections/hero/AdobeStock_306467549.jpeg',
      body: [
        'From foundational business English to industry-specific programs, we offer comprehensive courses tailored to your organization\'s goals. We help every student rise to the demands of global business — presentations, executive meetings, technical writing, negotiations, problem-solving, and cross-cultural communication.',
        'Each course is built around your requirements and an initial assessment of student proficiency — from selecting the right instructor to tailoring teaching methods and materials.',
      ],
    },
    {
      id: 'english',
      name: 'English Program',
      image: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg',
      body: [
        'Our foundational English program covers all the key areas — grammar, speaking, writing, and overall communication. Through interactive lessons and practical exercises, students build a strong, lasting foundation in English.',
        'Our proven program consistently helps students level up their English proficiency. With an emphasis on practical use and real-world application, learners gain the confidence to communicate across a range of contexts — from everyday conversations to the early stages of professional life.',
      ],
    },
    {
      id: 'intensive-english',
      name: 'Intensive English Program',
      image: '/images/sections/services/learning-online.png',
      body: [
        'Looking to strengthen your company\'s global presence? Preparing staff for overseas assignments? Our intensive business English course equips your team with the skills to thrive in English-speaking environments — fast.',
        'Expert instructors, practical simulations, and carefully selected materials come together in a fully customized course built around your schedule. We\'ll equip your team with the language skills to hit the ground running in the global marketplace.',
      ],
    },
    {
      id: 'english-skills',
      name: 'English Skills Seminars',
      image: '/images/sections/services/Business-skill.png',
      body: [
        'A focused, one-day intensive seminar designed for Japanese companies. We zero in on the essentials of professional English — public speaking, impactful presentations, and effective communication in meetings.',
        'Expert trainers deliver hands-on practice and personalized feedback — driving immediate improvement and lasting confidence. Leave equipped to communicate clearly and convincingly in any business setting.',
      ],
    },
    {
      id: 'toeic',
      name: 'TOEIC',
      image: '/images/raw/1.png',
      body: [
        'In a competitive business environment, English proficiency is a decisive factor in career advancement — especially for those with global ambitions. Language House specializes in building customized curricula for clients who use TOEIC, TOEFL, or GMAT scores as benchmarks for promotion.',
        'We develop targeted programs that build the skills needed to score high and open new doors for career advancement.',
      ],
    },
    {
      id: 'japanese',
      name: 'Japanese Program',
      image: '/images/sections/about/meeting.png',
      body: [
        'As Japanese companies increasingly hire foreign workers, Japanese language proficiency has become essential — for the workplace and beyond. Our tailor-made classes flex around intensive or regular learning needs, with minimal disruption to work schedules.',
        'Working closely with companies and students, we build focused curricula around the skills that matter most — making the learning process efficient, effective, and sustainable. Beginners are guided by instructors who have learned Japanese as a second language, while advanced learners are paired with native speakers to master nuance and pronunciation.',
      ],
    },
  ],
};

const faqs = {
  ja: [
    { q: 'どのような英語プログラムを提供していますか？', a: '職場や英語環境で使用される英語に焦点を当てた様々なコースを提供しています。各プログラムは、御社のニーズに合わせてカスタマイズいたしますので、特定の業種に合わせたコースも可能です。また、学生を対象とした基礎英語プログラムも提供しており、基本的な英文法とコミュニケーションスキルを固めることに重点を置いています。' },
    { q: 'プログラムはどのように提供されるのですか？', a: '受講形式は非常に柔軟に対応しています。場所によっては、お客様のオフィスでの対面受講も、ビデオ会議によるオンライン受講も、あるいは両方を組み合わせた受講も可能です。最適な方法を一緒にご検討いたします。' },
    { q: '講師の資格を教えてください？', a: '当校の講師は全員、ビジネス英語の指導経験が豊富で、高い資格を持つネイティブ・スピーカーです。多くの講師は上級学位を持ち、ビジネス分野での専門的な経歴も持っています。また、全員が日本での生活と指導の経験があり、日本人従業員の英語学習に対する具体的なニーズを熟知しています。' },
    { q: '会社のニーズに合わせてトレーニングをカスタマイズできますか？', a: 'はい、御社や従業員の特定のニーズや目標に合わせてカスタマイズした研修プログラムを提供しています。' },
    { q: 'コースの期間と回数は？', a: 'コースの期間と回数は、お客様のスケジュールに合わせて調整できます。集中コース、週1回のレギュラークラス、フレキシブルなスケジュールなど、さまざまなオプションをご用意しています。' },
    { q: '社員の英語レベルはどのように評価するのですか？', a: '面接を通じて各受講生を総合的に評価し、英語力のレベルを判定した上で、適切なコースへご案内します。' },
    { q: 'コースではどのような教材や資料を使用しますか？', a: '当校独自のビジネス英語テキスト、オンラインリソース、実際のビジネスシナリオ、インタラクティブなアクティビティなど、多様な教材を活用しています。目標達成に最適な教材を一緒に選んでいきます。' },
    { q: '進捗状況の報告や評価はありますか？', a: 'はい、定期的に進捗報告と評価を行い、従業員の語学力の伸びを確認します。' },
    { q: '1クラスの最大参加人数は？', a: 'クラスの人数はレッスン形式に応じて柔軟に対応しています。少人数グループもマンツーマンも大変人気があり、大人数グループにも対応可能です。いかなる場合も、一人ひとりへの目配りと効果的な学習を両立できるクラス編成を心がけています。' },
    { q: '企業英語研修を始めるには？', a: 'まずはお気軽にご相談ください。お客様のニーズや目標をお伺いした上で、最適なプログラムをご提案いたします。' },
    { q: 'トレーニング・プログラムにかかる費用は？', a: 'コースの種類、期間、参加人数によって異なります。競争力のある価格を設定しており、ご要望に応じて詳細なお見積もりをご提示いたします。' },
    { q: '他の顧客からの紹介や感想などを提供してもらえますか？', a: 'もちろんです。ご要望があれば、ご満足いただいている企業のお客様からの推薦状や体験談をご提供いたします。' },
    { q: '指導の機会はありますか？', a: '採用情報のページをご覧ください。' },
  ],
  en: [
    { q: 'What English programs do you offer?', a: 'We offer a variety of courses focused on English used in the workplace and English-speaking environments. Each program can be customized to suit your company\'s needs, including industry-specific courses. We also offer foundational English programs for students focusing on basic grammar and communication skills.' },
    { q: 'How are programs delivered?', a: 'We are very flexible regarding how clients participate in our programs. Depending on location, instruction can be delivered in person at your office, online via video conferencing, or a combination of both. We will work with you to determine the most efficient and feasible option.' },
    { q: 'What are the qualifications of your instructors?', a: 'All of our instructors are highly qualified native speakers with extensive experience teaching business English. Many hold advanced degrees and have professional backgrounds in business fields. All have experience living and teaching in Japan, giving them an intimate understanding of the specific needs of Japanese employees learning English.' },
    { q: 'Can you customize training to our company\'s needs?', a: 'Yes, we offer customized training programs tailored to the specific needs and goals of your company and employees.' },
    { q: 'What is the duration and frequency of courses?', a: 'The duration and frequency of courses can be adjusted to fit your schedule. Options include intensive courses, weekly regular classes, and flexible scheduling.' },
    { q: 'How do you assess employees\' English level?', a: 'We comprehensively assess potential students through interviews to determine their English proficiency level and place them in the appropriate course.' },
    { q: 'What materials and resources are used in courses?', a: 'We use a variety of materials, including our own proven business English texts, online resources, real business scenarios, and interactive activities to enhance learning. We will work with you to determine which materials are best suited to help you achieve your goals.' },
    { q: 'Is there progress reporting and evaluation?', a: 'Yes, we conduct regular progress reports and evaluations to track employees\' language development.' },
    { q: 'What is the maximum class size?', a: 'Class size is very flexible and varies greatly depending on how the lesson is conducted. Small group lessons are popular, as are one-on-one lessons. We can accommodate larger groups if needed. In all cases, we strive to ensure class sizes allow for individual attention and effective learning.' },
    { q: 'How do we get started with corporate English training?', a: 'Please contact us first. We will discuss your needs and goals.' },
    { q: 'What is the cost of training programs?', a: 'Costs vary depending on the type, duration, and number of participants. We offer competitive pricing and can provide a detailed quote upon request.' },
    { q: 'Can you provide references or testimonials from other clients?', a: 'Of course. Upon request, we can provide recommendations and testimonials from satisfied corporate clients.' },
    { q: 'Are there teaching opportunities available?', a: 'Please visit our Career page for teaching opportunities.' },
  ],
};

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale;
  const ja = lang === 'ja';
  const programList = programs[lang];
  const faqList = faqs[lang];

  function href(path: string) {
    return `/${lang}${path}`;
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">
        <Image
          src="/images/sections/hero/AdobeStock_306467549.jpeg"
          alt="Language House Programs"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {ja ? 'プログラム' : 'Programs'}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              {ja
                ? 'ランゲージハウスのメソッドは、あらゆる規模・業種の日系企業で働く何千人もの方々の英語力向上に貢献してきました。実績あるメソッドと充実した教材で、参加者一人ひとりが確かなサポートを受けながら成長できます。'
                : "Language House has helped thousands of professionals at Japanese companies of all sizes sharpen their English. Our proven methods and engaging materials ensure every participant gets the focused support they need to grow."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Program Jump Links ── */}
      <nav className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-1 py-3 text-sm font-medium whitespace-nowrap">
            {programList.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className="rounded-md px-4 py-2 text-slate-600 transition-colors hover:bg-[#e8f1fb] hover:text-[#046bd2]"
                >
                  {p.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#faqs"
                className="rounded-md px-4 py-2 text-slate-600 transition-colors hover:bg-[#e8f1fb] hover:text-[#046bd2]"
              >
                {ja ? 'よくあるご質問' : 'FAQ'}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Program Sections ── */}
      {programList.map((program, i) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-20 lg:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                i % 2 !== 0 ? 'lg:[&>*:first-child]:order-last' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                  {program.name}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  {program.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <Link
                  href={href('/contact-us')}
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#046bd2] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4]"
                >
                  {ja ? 'お問い合わせ' : 'Contact Us'}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-[#046bd2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {ja ? '目指すゴールに向けて、共に。' : 'Let\'s reach your goals together.'}
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

      {/* ── FAQ ── */}
      <section id="faqs" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
            {ja ? 'よくあるご質問' : 'FAQ'}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {ja
              ? 'プログラムや弊社についてよくいただくご質問をまとめました。その他ご不明な点がありましたら、お気軽にお問い合わせください。'
              : 'Answers to the questions we hear most often. Can\'t find what you\'re looking for? Feel free to contact us.'}
          </p>
          <dl className="mt-10 divide-y divide-slate-200">
            {faqList.map(({ q, a }) => (
              <div key={q} className="py-6">
                <dt className="text-base font-bold text-[#1e293b]">{q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
