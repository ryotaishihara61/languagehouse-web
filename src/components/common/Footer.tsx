import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Youtube, Linkedin, Facebook } from 'lucide-react';
import type { Locale } from '@/types';
import { footerItems } from '@/constants/navigation';

interface FooterProps {
  lang: Locale;
}

const snsLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/languagehouse.jp',
    icon: Facebook,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/language-house',
    icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@languagehouse',
    icon: Youtube,
  },
];

const content = {
  ja: {
    tagline: '1976年創業。半世紀にわたり、日本企業のグローバル化を語学教育で支えてきました。',
    address: '〒760-0052 香川県高松市瓦町２丁目３－２',
    phone: '087-834-3322',
    email: 'website@languagehouse.jp',
    sitemapHeading: 'サイトマップ',
    contactHeading: 'お問い合わせ',
    copyright: `© ${new Date().getFullYear()} Language House. All rights reserved.`,
  },
  en: {
    tagline: "Founded in 1976. Supporting Japanese companies' globalization through language education for over 40 years.",
    address: '2-3-2 Kawaramachi, Takamatsu, Kagawa 760-0052, Japan',
    phone: '+81-87-834-3322',
    email: 'website@languagehouse.jp',
    sitemapHeading: 'Sitemap',
    contactHeading: 'Contact',
    copyright: `© ${new Date().getFullYear()} Language House. All rights reserved.`,
  },
} as const;

export default function Footer({ lang }: FooterProps) {
  const t = content[lang] ?? content['ja'];
  const items = footerItems[lang] ?? footerItems['ja'];

  function localizeHref(href: string): string {
    return `/${lang}${href === '/' ? '' : href}`;
  }

  return (
    <footer className="bg-[#1e293b] text-gray-300">
      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Column 1: Brand */}
          <div className="space-y-5">
            <Link href={localizeHref('/')} className="inline-block">
              <Image
                src="/images/common/Logo.png"
                alt="Language House"
                width={140}
                height={56}
                className="h-12 w-auto object-contain rounded"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">{t.tagline}</p>

            {/* SNS */}
            <div className="flex items-center gap-3">
              {snsLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-[#046bd2] hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.sitemapHeading}
            </h2>
            <ul className="space-y-2" role="list">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizeHref(item.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              <Link href={localizeHref('/contact-us')} className="hover:text-[#046bd2] transition-colors">
                {t.contactHeading}
              </Link>
            </h2>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#046bd2]" aria-hidden="true" />
                {t.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#046bd2]" aria-hidden="true" />
                <a href={`tel:${t.phone.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {t.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#046bd2]" aria-hidden="true" />
                <a href={`mailto:${t.email}`} className="hover:text-white transition-colors">
                  {t.email}
                </a>
              </p>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
