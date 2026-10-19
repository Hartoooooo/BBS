import type { Metadata } from 'next';
import { site } from '@/content/site';

type MetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, image = '/hero-bathroom.webp', noindex }: MetaInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
