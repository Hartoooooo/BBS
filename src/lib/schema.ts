import { berlinDistricts, brandenburgTowns, site } from '@/content/site';

export type Faq = { question: string; answer: string };
export type Crumb = { name: string; path: string };

const businessId = `${site.url}/#organization`;

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/bbs-logo-transparent.png`,
    image: `${site.url}/hero-bathroom.webp`,
    description:
      'Meisterbetrieb für barrierefreie Badumbauten, Badsanierung, Fliesenarbeiten und barrierefreien Umbau in Berlin und Brandenburg.',
    foundingDate: String(site.foundingYear),
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '16:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Berlin' },
      { '@type': 'State', name: 'Brandenburg' },
      ...berlinDistricts.map((name) => ({ '@type': 'AdministrativeArea', name: `Berlin-${name}` })),
      ...brandenburgTowns.map((name) => ({ '@type': 'City', name })),
    ],
    knowsAbout: [
      'Barrierefreies Bad',
      'Barrierefreier Badumbau',
      'Bodengleiche Dusche',
      'DIN 18040-2',
      'Badsanierung',
      'Fliesenarbeiten',
      'Wohnraumanpassung',
    ],
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${site.url}${path}`,
    provider: { '@id': businessId },
    areaServed: [
      { '@type': 'City', name: 'Berlin' },
      { '@type': 'State', name: 'Brandenburg' },
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Startseite', path: '/' }, ...crumbs].map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path === '/' ? '' : crumb.path}`,
    })),
  };
}
