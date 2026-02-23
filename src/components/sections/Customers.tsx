import Image from 'next/image';
import type { Locale } from '@/types';

interface CustomersProps {
  lang: Locale;
}

const content = {
  ja: {
    label: 'Our Customers',
    heading: 'ランゲージハウスの貴重なお客様',
    body1: '私たちは、お客様を長期的なパートナーとして考えています。',
    body2: '私たちは、お客様のビジネスが進化し成長する中で組織の語学トレーニングのニーズをサポートすることに専念しています。',
  },
  en: {
    label: 'Our Customers',
    heading: 'Our Valued Customers',
    body1: 'We consider our customers to be long-term partners.',
    body2: 'We are dedicated to supporting your organization\'s language training needs as your business evolves and grows.',
  },
} as const;

const logos = [
  { src: '/images/raw/2-Mitsubishi-Chemical.png', alt: 'Mitsubishi Chemical' },
  { src: '/images/raw/3-Sumitomo-chemical.png', alt: 'Sumitomo Chemical' },
  { src: '/images/raw/4-mitsubishi-generator.png', alt: 'Mitsubishi Generator' },
  { src: '/images/raw/5-Shikoku_Electric_Power_CO._Inc._logo.png', alt: 'Shikoku Electric Power' },
  { src: '/images/raw/6-Otsuka.png', alt: 'Otsuka' },
  { src: '/images/raw/8-Sumitomo-metal-mining.png', alt: 'Sumitomo Metal Mining' },
  { src: '/images/raw/9-Amazon.png', alt: 'Amazon' },
  { src: '/images/raw/10-EY.png', alt: 'EY' },
  { src: '/images/raw/11-kpmg.png', alt: 'KPMG' },
  { src: '/images/raw/12-mitsubishi-electric.png', alt: 'Mitsubishi Electric' },
  { src: '/images/raw/15-Toyota.png', alt: 'Toyota' },
  { src: '/images/raw/17-itochu.png', alt: 'Itochu' },
  { src: '/images/raw/20-Hitachi.png', alt: 'Hitachi' },
  { src: '/images/raw/25-makita.png', alt: 'Makita' },
  { src: '/images/raw/26-Mizuho_logo.png', alt: 'Mizuho' },
  { src: '/images/raw/27-sharp.png', alt: 'Sharp' },
  { src: '/images/raw/34-Kawasaki.png', alt: 'Kawasaki' },
  { src: '/images/raw/39-Nippon.png', alt: 'Nippon' },
  { src: '/images/raw/43-STNet.png', alt: 'STNet' },
  { src: '/images/raw/45-NEXCO.png', alt: 'NEXCO' },
];

export default function Customers({ lang }: CustomersProps) {
  const t = content[lang] ?? content['ja'];

  return (
    <section id="customers" className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#046bd2]">
            {t.label}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-[#1e293b] sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t.body1}</p>
          <p className="mt-2 text-base leading-relaxed text-slate-600">{t.body2}</p>
        </div>

        {/* Logo grid */}
        <ul className="mt-12 grid grid-cols-4 gap-6 sm:grid-cols-5 lg:grid-cols-10">
          {logos.map((logo) => (
            <li
              key={logo.alt}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="10vw"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
