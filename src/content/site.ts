export const site = {
  url: 'https://www.artdesignbau.de',
  name: 'BBS Barrierefreies Bauen und Sanieren',
  shortName: 'BBS',
  legalName: 'BBS Björn Hartmann',
  owner: 'Björn Hartmann',
  foundingYear: 2003,
  phone: '+49 30 923 712 77',
  phoneHref: 'tel:+493092371277',
  email: 'service@b-b-s.berlin',
  street: 'Petershagener Straße 27',
  postalCode: '15566',
  city: 'Schöneiche bei Berlin',
  region: 'Brandenburg',
  geo: { lat: 52.4633, lng: 13.6625 },
  hours: 'Montag – Freitag, 7:00 – 16:00 Uhr',
  googleReviewsUrl: 'https://share.google/1o8Gsmu8uAAyrGKVm',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=BBS+Barrierefreies+Bauen+und+Sanieren+Petershagener+Straße+27+15566+Schöneiche+bei+Berlin',
};

export const berlinDistricts = [
  'Charlottenburg-Wilmersdorf',
  'Friedrichshain-Kreuzberg',
  'Lichtenberg',
  'Marzahn-Hellersdorf',
  'Mitte',
  'Neukölln',
  'Pankow',
  'Reinickendorf',
  'Spandau',
  'Steglitz-Zehlendorf',
  'Tempelhof-Schöneberg',
  'Treptow-Köpenick',
];

export const brandenburgTowns = [
  'Schöneiche bei Berlin',
  'Neuenhagen',
  'Strausberg',
  'Erkner',
  'Woltersdorf',
  'Hoppegarten',
  'Fredersdorf-Vogelsdorf',
  'Petershagen/Eggersdorf',
  'Rüdersdorf',
  'Fürstenwalde',
  'Königs Wusterhausen',
  'Bernau',
  'Potsdam',
];

export type NavLink = { href: string; label: string; description?: string };

export const badLinks: NavLink[] = [
  { href: '/barrierefreies-bad', label: 'Barrierefreies Bad', description: 'Badumbau nach DIN 18040-2 – seniorengerecht bis rollstuhlgerecht' },
  { href: '/badewanne-zur-dusche', label: 'Badewanne zur Dusche', description: 'Wanne raus, bodengleiche Dusche rein' },
  { href: '/foerderung', label: 'Förderung & Zuschüsse', description: 'Pflegekasse, KfW und der richtige Ablauf' },
];

export const leistungLinks: NavLink[] = [
  { href: '/barrierefreier-umbau', label: 'Barrierefreier Umbau', description: 'Türen verbreitern, Schwellen entfernen, Wohnung anpassen' },
  { href: '/badsanierung', label: 'Badsanierung', description: 'Komplettsanierung vom Rohbau bis zur Fuge' },
  { href: '/fliesenleger', label: 'Fliesenleger & Bodenbeläge', description: 'Fliesen, Naturstein, Vinyl, Parkett' },
  { href: '/leistungen', label: 'Alle Leistungen', description: 'Trockenbau, Wasserschaden, Abdichtung, Holzschutz' },
];
