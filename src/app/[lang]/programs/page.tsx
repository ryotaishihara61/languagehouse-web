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
        'ビジネス英語のエッセンスから、各業界に特化した専門的なプログラムまで、各組織の目標やご要望に合わせた包括的なコースをご用意しています。私たちは、グローバルなビジネスの世界で「プロフェッショナル」としての能力を発揮できる場面（プレゼンテーション、経営会議、技術論文、交渉、問題解決スキル、異文化コミュニケーションなど）で、生徒一人ひとりが本来持っている能力を発揮できるようサポートします。',
        '私たちのアプローチでは、御社のご要望と生徒の習熟度の初期評価に正確に沿った、パーソナライズされたコースを作成します。適切な講師の選定から教授法の考案、関連教材の選択まで、あらゆる面をカスタマイズします。',
      ],
    },
    {
      id: 'english',
      name: '英語プログラム',
      image: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg',
      body: [
        '当校の基礎英語プログラムは、文法、スピーキング、ライティング、総合的なコミュニケーションなど、すべての主要分野における英語スキルの向上を目指す学生を対象に、緊密にデザインされています。インタラクティブなレッスン、実践的なエクササイズ、魅力的なアクティビティを通して、英語の基礎を固めます。',
        '実績のある当校のプログラムは、常に生徒の英語力を「レベルアップ」させてきました。実践的な言語使用と実社会での応用に重点を置くことで、個人的な成長、旅行、専門的な能力開発の初期段階など、学習者が多様な文脈で効果的にコミュニケーションを取れるようにします。',
      ],
    },
    {
      id: 'intensive-english',
      name: '集中英語プログラム',
      image: '/images/sections/services/learning-online.png',
      body: [
        'ビジネスのグローバルなプレゼンスを高めたいとお考えですか？海外赴任を控えている従業員をお持ちですか？私たちの集中ビジネス英語コースは、貴社の競争力を高め、社員が英語環境で活躍するための鍵となるものです。',
        '専門の講師陣、実践的なシミュレーション、多彩な教材で、のために特別にデザインされたカスタマイズコースを、ご希望のスケジュールに合わせてお作りします。グローバル市場でシームレスに適応し、活躍するために必要な語学力を、ぜひ私たちにお任せください。',
      ],
    },
    {
      id: 'english-skills',
      name: '英語スキルセミナー',
      image: '/images/sections/services/Business-skill.png',
      body: [
        'ランゲージハウスの英語スキルアップセミナーは、日本企業向けに特別にデザインされています。このセミナーは、人前でのスピーチ、インパクトのあるプレゼンテーション、会議での効果的なコミュニケーションなど、プロフェッショナルな英語スピーキングに不可欠な側面に焦点を当てた 1 日集中型のセミナーです。',
        '経験豊富なトレーナーが、実践的な練習と個別のフィードバックを提供することで、即座の上達と持続的な自信をお約束します。今日のグローバル市場で活躍するために必要なスキルを身につけ、ビジネス交流の質を高めましょう。',
      ],
    },
    {
      id: 'toeic',
      name: 'TOEIC',
      image: '/images/raw/1.png',
      body: [
        '競争の激しいビジネスシーンにおいて、特にグローバル人材を目指す方にとって、高い英語力はキャリアアップに欠かせません。ランゲージハウスでは、TOEIC（またはTOEFL / GMAT）のスコアを昇進のための重要な指標とお考えのお客様に特化した、カスタマイズされたカリキュラムの作成を専門としています。',
        '私たちの専門知識により、TOEIC試験で優秀な成績を収め、キャリアアップの新たなチャンスをつかむために必要なスキルを身につける、的を絞ったプログラムを開発することができます。',
      ],
    },
    {
      id: 'japanese',
      name: '日本語プログラム',
      image: '/images/sections/about/meeting.png',
      body: [
        '日本企業が外国人労働者の雇用を増やす中、日本語能力の向上は仕事と個人の成功に不可欠です。当校のオーダーメイドクラスは、集中的な学習ニーズにも、定期的な学習ニーズにも柔軟に対応し、勤務時間への支障を最小限に抑えます。企業や受講生と明確な目標を設定することで、必要な日本語スキルに焦点を当てたカリキュラムをカスタマイズし、効率的かつ効果的な学習プロセスを実現します。',
        '私たちの集中学習アプローチは、燃え尽きやフラストレーションを防ぐために、主要な言語スキルに優先順位を付けます。初心者の方には、第二言語として日本語を学んだ経験のある教師が、教師自身の経験に基づいた、共感できるアドバイスと効果的な学習方法をお伝えします。上級者の方には、複雑な概念、発音、ニュアンスをマスターするために、ネイティブ講師とペアを組みます。',
      ],
    },
  ],
  en: [
    {
      id: 'business-english',
      name: 'Business English Program',
      image: '/images/sections/hero/AdobeStock_306467549.jpeg',
      body: [
        'From the essentials of business English to specialized programs for each industry, we offer comprehensive courses tailored to each organization\'s goals and requirements. We support each student in demonstrating their full potential in professional business situations — presentations, executive meetings, technical papers, negotiations, problem-solving, and cross-cultural communication.',
        'Our approach creates personalized courses precisely aligned with your requirements and an initial assessment of student proficiency. Everything is customized, from selecting the right instructor to devising teaching methods and choosing relevant materials.',
      ],
    },
    {
      id: 'english',
      name: 'English Program',
      image: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg',
      body: [
        'Our foundational English program is closely designed for students seeking to improve their English skills across all key areas — grammar, speaking, writing, and overall communication. Through interactive lessons, practical exercises, and engaging activities, we build a solid foundation in English.',
        'Our proven program has consistently helped students "level up" their English proficiency. By emphasizing practical language use and real-world application, we enable learners to communicate effectively in diverse contexts — personal growth, travel, or the early stages of professional development.',
      ],
    },
    {
      id: 'intensive-english',
      name: 'Intensive English Program',
      image: '/images/sections/services/learning-online.png',
      body: [
        'Looking to enhance your business\'s global presence? Do you have employees preparing for overseas assignments? Our intensive business English course is the key to strengthening your company\'s competitiveness and helping your staff thrive in English-speaking environments.',
        'With expert instructors, practical simulations, and diverse materials, we create a customized course specially designed for your needs and schedule. Trust us to equip your team with the language skills they need to adapt and excel seamlessly in the global marketplace.',
      ],
    },
    {
      id: 'english-skills',
      name: 'English Skills Seminars',
      image: '/images/sections/services/Business-skill.png',
      body: [
        'Language House\'s English Skills Seminars are specially designed for Japanese companies. These intensive one-day seminars focus on essential aspects of professional English speaking — public speaking, impactful presentations, and effective communication in meetings.',
        'Experienced trainers provide hands-on practice and personalized feedback, guaranteeing immediate improvement and lasting confidence. Acquire the skills you need to excel in today\'s global market and elevate the quality of your business interactions.',
      ],
    },
    {
      id: 'toeic',
      name: 'TOEIC',
      image: '/images/raw/1.png',
      body: [
        'In today\'s competitive business environment, a high level of English proficiency is essential for career advancement — especially for those aiming to work globally. Language House specializes in creating customized curricula for clients who view TOEIC (or TOEFL/GMAT) scores as an important benchmark for promotion.',
        'Our expertise enables us to develop targeted programs that equip students with the skills needed to achieve excellent TOEIC scores and seize new career advancement opportunities.',
      ],
    },
    {
      id: 'japanese',
      name: 'Japanese Program',
      image: '/images/sections/about/meeting.png',
      body: [
        'As Japanese companies increasingly hire foreign workers, improving Japanese language proficiency is essential for professional and personal success. Our tailor-made classes flexibly accommodate intensive or regular learning needs, minimizing disruption to work schedules.',
        'By setting clear goals with companies and students, we customize curricula focused on the necessary Japanese skills, ensuring an efficient and effective learning process. Our focused approach prioritizes key language skills to prevent burnout and frustration.',
      ],
    },
  ],
};

const faqs = {
  ja: [
    { q: 'どのような英語プログラムを提供していますか？', a: '職場や英語環境で使用される英語に焦点を当てた様々なコースを提供しています。各プログラムは、御社のニーズに合わせてカスタマイズいたしますので、特定の業種に合わせたコースも可能です。また、学生を対象とした基礎英語プログラムも提供しており、基本的な英文法とコミュニケーションスキルを固めることに重点を置いています。' },
    { q: 'プログラムはどのように提供されるのですか？', a: '各クライアントのプログラムへの参加方法については、非常に柔軟性があります。場所によっては、お客様のオフィスで直接受講することも、ビデオ会議によるオンライン受講も、あるいは両方の方法を組み合わせた受講も可能です。最も効率的で実行可能なオプションを決定するために協力させて頂きます。' },
    { q: '講師の資格を教えてください？', a: '当校の講師は全員、ビジネス英語の指導経験が豊富で、高い資格を持つネイティブ・スピーカーです。多くの講師は上級学位を持ち、ビジネス分野での専門的な経歴も持っています。また、全員が日本での生活と指導の経験があり、日本人従業員の英語学習に対する具体的なニーズを熟知しています。' },
    { q: '会社のニーズに合わせてトレーニングをカスタマイズできますか？', a: 'はい、御社や従業員の特定のニーズや目標に合わせてカスタマイズした研修プログラムを提供しています。' },
    { q: 'コースの期間と回数は？', a: 'コースの期間と回数は、あなたのスケジュールに合わせて調整することができます。インテンシブ・コース、週1回のレギュラー・クラス、フレキシブルなスケジュール・オプションがあります。' },
    { q: '社員の英語レベルはどのように評価するのですか？', a: '当社では、各社員の英語力レベルを判定し、適切なレベルのコースに配属するために、面接を通じて潜在的な学生を総合的に評価しています。' },
    { q: 'コースではどのような教材や資料を使用しますか？', a: '当校では、独自に開発した実績のあるビジネス英語テキスト、オンライン・リソース、実際のビジネス・シナリオ、学習効果を高めるインタラクティブなアクティビティなど、さまざまな教材を使用しています。どの教材があなたの目標達成に最も適しているか、ご一緒に考えていきます。' },
    { q: '進捗状況の報告や評価はありますか？', a: 'はい、定期的に進捗状況の報告や評価を行い、従業員の語学力の伸びを確認します。' },
    { q: '1クラスの最大参加人数は？', a: 'クラスの定員はとてもフレキシブルで、レッスンの進め方によって大きく異なります。少人数のグループレッスンはもちろん、マンツーマンのレッスンも大変人気があります。必要であれば、大人数のグループにも対応できます。どのような場合でも、一人一人に目が行き届き、効果的な学習ができるようなクラス編成になるよう努めています。' },
    { q: '企業英語研修を始めるには？', a: 'まずはご相談ください。お客様のニーズや目標をお伺いします。' },
    { q: 'トレーニング・プログラムにかかる費用は？', a: 'コースの種類、期間、参加人数によって異なります。弊社では競争力のある価格を設定しており、ご要望に応じて詳細なお見積もりをお出しいたします。' },
    { q: '他の顧客からの紹介や感想などを提供してもらえますか？', a: 'もちろんです。ご要望があれば、ご満足いただいている他の企業のお客様からの推薦状や体験談をご提供いたします。' },
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
                ? 'ランゲージハウスのメソッドは、あらゆるレベルの日系企業で働く何千人もの方々の英語コミュニケーションスキルの向上に貢献してきました。実績のある教授法と魅力的な教材により、参加者一人ひとりが包括的なサポートと指導を受けることができます。'
                : "Language House's method has contributed to improving the English communication skills of thousands of people working at Japanese companies at all levels. With proven teaching methods and engaging materials, each participant receives comprehensive support and guidance."}
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
            {ja ? '貴方の目指すゴールに向かって' : 'Toward Your Goals'}
          </h2>
          <div className="mt-8">
            <Link
              href={href('/contact-us')}
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-semibold text-[#046bd2] shadow-sm transition-colors hover:bg-white/90"
            >
              Contact Us
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
              ? 'FAQセクションは、私たちのプログラムや会社について、よくあるご質問にお答えしています。その他、ご不明な点がございましたら、お気軽にお問い合わせください。'
              : 'This FAQ section answers common questions about our programs and company. If you have any other questions, please feel free to contact us.'}
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
