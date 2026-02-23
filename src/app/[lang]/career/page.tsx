import Image from 'next/image';
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
    title: 'Career',
    description: ja
      ? 'ランゲージハウスで働きませんか。日本のビジネスプロフェッショナルを支える情熱的な英語講師を募集しています。'
      : 'Join the Language House team. We are looking for passionate English instructors with business experience to help Japanese professionals communicate with confidence.',
    openGraph: {
      title: 'Career | Language House',
      description: ja
        ? '日本のビジネスプロフェッショナルを支える英語講師募集。'
        : 'Join Language House as an English instructor. Help Japanese business professionals communicate with confidence.',
      url: ja ? '/ja/career' : '/en/career',
      images: [{ url: '/images/sections/about/why-join-us.png', width: 1200, height: 630 }],
    },
  };
}

const qualifications = [
  {
    title: 'Educational Background',
    body: "A bachelor's degree in English, Education, Linguistics, or a related field is preferred.",
  },
  {
    title: 'Teaching Experience',
    body: 'A minimum of two years of experience teaching English as a second language (ESL). Corporate teaching experience and teaching experience in Japan is a plus.',
  },
  {
    title: 'Business Experience',
    body: 'A minimum of two years of experience working in a non-teaching role, preferably in a corporate environment.',
  },
  {
    title: 'Certifications',
    body: 'TEFL, TESOL, or CELTA certification is highly desirable.',
  },
  {
    title: 'Language Skills',
    body: 'Native-level proficiency in English. Knowledge of Japanese is a plus but not required.',
  },
  {
    title: 'Professionalism',
    body: 'Strong understanding of business etiquette and culture, with the ability to engage and communicate effectively with corporate clients. Experience working with Japanese companies is a plus, but not required.',
  },
  {
    title: 'Adaptability',
    body: 'Ability to tailor lesson plans to meet the specific needs and learning styles of individual students and groups.',
  },
  {
    title: 'Technology Savvy',
    body: 'Proficiency in using online teaching platforms, virtual classrooms, and other educational technologies.',
  },
];

const applicationSteps = [
  {
    step: '01',
    title: 'Online Application',
    body: 'Submit your resume and a cover letter to resumes@languagehouse.jp. Be sure to highlight your teaching experience, educational background, and any relevant certifications.',
  },
  {
    step: '02',
    title: 'Initial Screening',
    body: 'Our HR team will review your application and conduct an initial screening. If you meet our criteria, you will be contacted for a preliminary interview.',
  },
  {
    step: '03',
    title: 'Interviews',
    body: 'Successful candidates from the initial screening will be invited for a series of interviews. This may include online or face-to-face interviews depending on the location.',
  },
  {
    step: '04',
    title: 'Offer and Onboarding',
    body: 'If you pass the interview and demo lesson stages, you will receive an offer to join our team. Our comprehensive onboarding process includes orientation, training, and support to ensure you are fully prepared for your new role.',
  },
];

export default async function CareerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  // Content is English-only; lang kept for layout consistency
  void ((['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">
        <Image
          src="/images/sections/hero/AdobeStock_306467549.jpeg"
          alt="Career at Language House"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Career
            </h1>
          </div>
        </div>
      </section>

      {/* ── Why Join Us ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
                Why Join Us?
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  'Work with a diverse range of motivated professionals, including executives, managers, and employees from all manner of companies in Japan.',
                  'Engage in one-on-one sessions, group classes, and corporate workshops both in-person and online.',
                  'Be part of a dynamic and supportive community of educators who are passionate about teaching and learning.',
                ].map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[#046bd2]" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="text-base leading-relaxed text-slate-600">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/sections/about/why-join-us.png"
                alt="Teaching at Language House"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Qualifications and Requirements ── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
            Qualifications and Requirements
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            We are looking for passionate and dedicated individuals who are eager to make a difference in the lives of our clients. The ideal candidate will possess the following qualifications and attributes:
          </p>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {qualifications.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <dt className="text-base font-bold text-[#1e293b]">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Application Process ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] sm:text-4xl">
            Application Process
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Joining Language House is a straightforward and transparent process designed to identify the best candidates for our teaching team. Here&apos;s how you can apply:
          </p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map(({ step, title, body }) => (
              <li key={step} className="relative flex flex-col">
                <span className="text-5xl font-extrabold text-[#e8f1fb]">{step}</span>
                <h3 className="mt-3 text-base font-bold text-[#1e293b]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="py-20 lg:py-28 bg-[#046bd2]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Apply Now</h2>
          <p className="mt-4 text-base text-white/80">
            Ready to join our team? Fill out the form below and we will be in touch.
          </p>
          <form
            action="https://formsubmit.co/website@languagehouse.jp"
            method="POST"
            encType="multipart/form-data"
            className="mt-10 space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Language House Career Application" />
            <input type="hidden" name="_template" value="table" />

            {/* Name */}
            <div>
              <label htmlFor="career-name" className="block text-sm font-semibold text-white">
                Name <span className="text-white/70" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="career-name"
                name="name"
                required
                className="mt-2 block w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
              />
            </div>

            {/* Telephone */}
            <div>
              <label htmlFor="career-phone" className="block text-sm font-semibold text-white">
                Telephone <span className="text-white/70" aria-hidden="true">*</span>
              </label>
              <input
                type="tel"
                id="career-phone"
                name="telephone"
                required
                className="mt-2 block w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="career-email" className="block text-sm font-semibold text-white">
                Email <span className="text-white/70" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="career-email"
                name="email"
                required
                className="mt-2 block w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:ring-1 focus:ring-white focus:outline-none"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="career-cover" className="block text-sm font-semibold text-white">
                Cover Letter
              </label>
              <input
                type="file"
                id="career-cover"
                name="cover_letter"
                accept=".pdf,.doc,.docx"
                className="mt-2 block w-full text-sm text-white/80 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30"
              />
            </div>

            {/* Resume */}
            <div>
              <label htmlFor="career-resume" className="block text-sm font-semibold text-white">
                Resume <span className="text-white/70" aria-hidden="true">*</span>
              </label>
              <input
                type="file"
                id="career-resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="mt-2 block w-full text-sm text-white/80 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-white px-8 py-3 text-sm font-semibold text-[#046bd2] shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#046bd2]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
