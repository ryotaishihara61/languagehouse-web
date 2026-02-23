import type { NavItem } from '@/types';

export const navItems: Record<string, NavItem[]> = {
  ja: [
    { label: 'ホーム', href: '/' },
    { label: '私たちについて', href: '/about' },
    { label: '私たちが選ばれる理由', href: '/why-us' },
    { label: 'プログラム', href: '/programs' },
    { label: 'お問い合わせ', href: '/contact-us' },
    { label: 'Career', href: '/career' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'Career', href: '/career' },
  ],
};

export const footerItems: Record<string, NavItem[]> = {
  ja: [
    { label: 'ホーム', href: '/' },
    { label: '私たちについて', href: '/about' },
    { label: '私たちが選ばれる理由', href: '/why-us' },
    { label: 'プログラム', href: '/programs' },
    { label: 'お問い合わせ', href: '/contact-us' },
    { label: 'Career', href: '/career' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'Career', href: '/career' },
  ],
};
