import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/barrierefreies-bad', priority: 0.95 },
  { path: '/badewanne-zur-dusche', priority: 0.9 },
  { path: '/foerderung', priority: 0.85 },
  { path: '/barrierefreier-umbau', priority: 0.85 },
  { path: '/badsanierung', priority: 0.8 },
  { path: '/fliesenleger', priority: 0.8 },
  { path: '/leistungen', priority: 0.6 },
  { path: '/anfrage', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-19');
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
