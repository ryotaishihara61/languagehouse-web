'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import type { Locale } from '@/types';
import { navItems } from '@/constants/navigation';
import { i18nConfig } from '@/i18n-config';

interface NavigationProps {
  lang: Locale;
}

export default function Navigation({ lang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const items = navItems[lang] ?? navItems['ja'];

  // Scroll detection for sticky background transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function localizeHref(href: string): string {
    return `/${lang}${href === '/' ? '' : href}`;
  }

  const altLocale = i18nConfig.locales.find((l) => l !== lang) as Locale;
  const altLabel = altLocale === 'ja' ? '日本語' : 'English';

  const altLocalePath = (() => {
    const segments = pathname.split('/');
    segments[1] = altLocale;
    return segments.join('/') || `/${altLocale}`;
  })();

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-[#f0f5fa]',
      ].join(' ')}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="メインナビゲーション"
      >
        {/* Logo */}
        <Link href={localizeHref('/')} className="flex-shrink-0">
          <Image
            src="/images/common/cropped-cropped-Logo.png"
            alt="Language House"
            width={180}
            height={65}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex lg:items-center lg:gap-0" role="list">
          {items.map((item) => {
            const href = localizeHref(item.href);
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={item.href}>
                <Link
                  href={href}
                  className={[
                    'block px-4 py-2 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-[#ef1111]'
                      : 'text-[#334155] hover:text-[#ef1111]',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Language switcher */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link
            href={altLocalePath}
            className="flex items-center gap-1.5 rounded-md border border-[#334155]/30 px-3 py-1.5 text-xs font-semibold text-[#334155] transition-colors hover:border-[#046bd2] hover:text-[#046bd2]"
            aria-label={`Switch language to ${altLabel}`}
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            {altLabel}
          </Link>
        </div>

        {/* Mobile: Language switcher + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={altLocalePath}
            className="flex items-center gap-1 rounded border border-[#334155]/30 px-2 py-1 text-xs font-semibold text-[#334155]"
            aria-label={`Switch language to ${altLabel}`}
          >
            <Globe className="h-3 w-3" aria-hidden="true" />
            {altLocale.toUpperCase()}
          </Link>

          <button
            type="button"
            className="rounded-md p-2 text-[#334155] hover:bg-[#046bd2]/10 hover:text-[#046bd2] transition-colors"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen
              ? <X className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={[
          'overflow-hidden transition-all duration-300 lg:hidden',
          isMenuOpen ? 'max-h-screen border-t border-gray-200 bg-white' : 'max-h-0',
        ].join(' ')}
        aria-hidden={!isMenuOpen}
      >
        <ul className="space-y-1 px-4 py-3" role="list">
          {items.map((item) => {
            const href = localizeHref(item.href);
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={item.href}>
                <Link
                  href={href}
                  className={[
                    'block rounded-md px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#f0f5fa] text-[#ef1111]'
                      : 'text-[#334155] hover:bg-[#f0f5fa] hover:text-[#ef1111]',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-gray-100 px-4 py-3">
          <Link
            href={localizeHref('/contact-us')}
            className="block w-full rounded-md bg-[#046bd2] py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#045cb4]"
          >
            {lang === 'ja' ? 'お問い合わせ' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </header>
  );
}
