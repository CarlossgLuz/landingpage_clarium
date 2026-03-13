import type { MetadataRoute } from 'next';

import { getLocalizedUrl, getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: getSiteUrl(),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: getLocalizedUrl('pt-BR'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: getLocalizedUrl('en'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: getLocalizedUrl('es'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    }
  ];
}
