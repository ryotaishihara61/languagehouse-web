import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.languagehouse.jp';

const routes = ['', '/about', '/why-us', '/programs', '/contact-us', '/career'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const lang of ['ja', 'en']) {
      entries.push({
        url: `${BASE_URL}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            ja: `${BASE_URL}/ja${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
