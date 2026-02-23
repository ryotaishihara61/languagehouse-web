import Image from 'next/image';
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
    title: ja ? 'お問い合わせ' : 'Contact Us',
    description: ja
      ? 'ランゲージハウスへのお問い合わせはこちら。電話 087-834-3322・メール website@languagehouse.jp・フォームにてお気軽にご相談ください。'
      : 'Get in touch with Language House. Call 087-834-3322, email website@languagehouse.jp, or use our contact form. We\'d love to discuss your training needs.',
    openGraph: {
      title: ja ? 'お問い合わせ | Language House' : 'Contact Language House',
      description: ja
        ? 'お電話・メール・フォームにてお気軽にお問い合わせください。087-834-3322'
        : 'Contact us by phone, email, or form. We\'d love to hear from you.',
      url: ja ? '/ja/contact-us' : '/en/contact-us',
      images: [{ url: '/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg', width: 1200, height: 630 }],
    },
  };
}

export default async function ContactUsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (['ja', 'en'].includes(rawLang) ? rawLang : 'ja') as Locale;
  const ja = lang === 'ja';

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40">
        <Image
          src="/images/sections/hero/LH-WEBSITE-AdobeStock_306467498.jpeg"
          alt="Contact Language House"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {ja ? 'お問い合わせ' : 'Contact Us'}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1e293b] sm:text-3xl">
                {ja ? '連絡方法' : 'Contact Information'}
              </h2>

              <dl className="mt-10 space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#046bd2]" aria-hidden="true">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.608 3.5-7.327A8.25 8.25 0 0012 3.75a8.25 8.25 0 00-8.25 8.25c0 2.719 1.556 5.314 3.5 7.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#1e293b]">{ja ? '住所' : 'Address'}</dt>
                    <dd className="mt-1 text-base text-slate-600">
                      {ja
                        ? '〒760-0052　香川県高松市瓦町２丁目３－２'
                        : '2-3-2 Kawaramachi, Takamatsu, Kagawa 760-0052, Japan'}
                    </dd>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#046bd2]" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#1e293b]">{ja ? '電話' : 'Phone'}</dt>
                    <dd className="mt-1 text-base text-slate-600">
                      <a href="tel:0878343322" className="hover:text-[#046bd2] transition-colors">
                        087-834-3322
                      </a>
                    </dd>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f1fb]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#046bd2]" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-[#1e293b]">e-mail</dt>
                    <dd className="mt-1 text-base text-slate-600">
                      <a href="mailto:website@languagehouse.jp" className="hover:text-[#046bd2] transition-colors">
                      website@languagehouse.jp
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              {/* Social Media */}
              <div className="mt-16">
                <h3 className="text-lg font-bold text-[#1e293b]">Social Media</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {ja
                    ? '最新のアップデート、英語学習に役立つ情報をお届けします！'
                    : 'Stay updated with the latest news and English learning tips!'}
                </p>
                <div className="mt-6 flex gap-4">
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@languagehouse-omotenashi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-red-100 hover:text-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/language-house-inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-100 hover:text-[#0a66c2]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100068177394098"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-100 hover:text-[#1877f2]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1e293b] sm:text-3xl">
                {ja ? 'お問い合わせフォーム' : 'Send Us a Message'}
              </h2>
              <form
                action="https://formsubmit.co/website@languagehouse.jp"
                method="POST"
                className="mt-10 space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="ランゲージハウス Webサイト お問い合わせ" />
                <input type="hidden" name="_template" value="table" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1e293b]">
                    {ja ? 'お名前' : 'Name'}
                    <span className="ml-1 text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-[#1e293b] placeholder:text-slate-400 focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1e293b]">
                    {ja ? 'メールアドレス' : 'Email Address'}
                    <span className="ml-1 text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-[#1e293b] placeholder:text-slate-400 focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2] focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1e293b]">
                    {ja ? 'お問合せ内容' : 'Message'}
                    <span className="ml-1 text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 block w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-[#1e293b] placeholder:text-slate-400 focus:border-[#046bd2] focus:ring-1 focus:ring-[#046bd2] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#046bd2] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4] focus:outline-none focus:ring-2 focus:ring-[#046bd2] focus:ring-offset-2"
                >
                  {ja ? '送信' : 'Send'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
