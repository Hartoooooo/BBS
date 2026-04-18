export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.artdesignbau.de/#organization",
    "name": "BBS Barrierefreies Bauen und Sanieren",
    "legalName": "BBS Björn Hartmann",
    "url": "https://www.artdesignbau.de",
    "logo": "https://www.artdesignbau.de/LOGO.webp",
    "image": [
      "https://www.artdesignbau.de/LOGO.webp",
      "https://www.artdesignbau.de/hero-bathroom.webp"
    ],
    "description": "Meisterbetrieb für barrierefreies Bauen und Sanieren in Berlin und Brandenburg. Über 22 Jahre Erfahrung in Badumbauten, Fliesenarbeiten, bodengleichen Duschen und barrierefreien Lösungen. KfW-förderfähig.",
    "foundingDate": "2003",
    "telephone": "+49-30-92371277",
    "email": "service@b-b-s.berlin",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Petershagener Straße 27",
      "addressLocality": "Schöneiche bei Berlin",
      "addressRegion": "Brandenburg",
      "postalCode": "15566",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.4633",
      "longitude": "13.6625"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "D. S." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Wir haben schon mehrere Sachen machen lassen, ist jedes Mal super geworden. Tolle Arbeit! Jederzeit wieder!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Herr E. V." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Ich habe mein Bad von BBS umbauen lassen. Die Firma hat eine ebenerdige Dusche, rutschfeste Fliesen und schwellenlose Übergänge eingebaut. Alles wurde sauber, zuverlässig und termingerecht erledigt."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Frau W. E." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Unser Badezimmer wurde komplett barrierefrei umgebaut. Die Fliesenarbeiten sehr sauber ausgeführt und alle Übergänge ohne Kanten gestaltet. Alles lief zuverlässig und termingerecht."
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Berlin" },
      { "@type": "City", "name": "Berlin-Charlottenburg" },
      { "@type": "City", "name": "Berlin-Spandau" },
      { "@type": "City", "name": "Berlin-Pankow" },
      { "@type": "City", "name": "Berlin-Mitte" },
      { "@type": "City", "name": "Berlin-Lichtenberg" },
      { "@type": "City", "name": "Berlin-Treptow" },
      { "@type": "City", "name": "Berlin West" },
      { "@type": "State", "name": "Brandenburg" },
      { "@type": "City", "name": "Schöneiche bei Berlin" },
      { "@type": "City", "name": "Strausberg" },
      { "@type": "City", "name": "Neuenhagen" },
      { "@type": "City", "name": "Erkner" }
    ],
    "priceRange": "€€-€€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.b-b-s.berlin"
    ],
    "hasMap": "https://www.google.com/maps/search/?api=1&query=BBS+Barrierefreies+Bauen+und+Sanieren+Petershagener+Straße+27+15566+Schöneiche+bei+Berlin",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Barrierefreie Bauleistungen Berlin & Brandenburg",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Barrierefreies Bad Berlin – Badumbau & bodengleiche Dusche",
            "description": "Komplette barrierefreie Badumbauten in Berlin und Brandenburg: bodengleiche Duschen, rutschfeste Fliesen, Haltegriffe, schwellenlose Übergänge. KfW-förderfähig."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fliesenarbeiten Berlin & Brandenburg",
            "description": "Professionelle Fliesen- und Natursteinarbeiten für Bad, Küche und Wohnraum in Berlin, Schöneiche, Brandenburg und Strausberg."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Badsanierung Berlin",
            "description": "Komplette Badsanierung und Badumbau in Berlin, Brandenburg und Umgebung – alles aus einer Hand."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Barrierefreies Bauen West-Berlin & Charlottenburg",
            "description": "Spezialist für barrierefreies Bauen und Sanieren in West-Berlin, Charlottenburg und ganz Berlin."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wasserschadensanierung Berlin",
            "description": "Schnelle und professionelle Sanierung von Wasserschäden in Berlin und Brandenburg – Leckortung, Trocknung, Wiederherstellung."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bauwerksabdichtung & Kellerabdichtung Berlin",
            "description": "Fachgerechte Abdichtung gegen Feuchtigkeit: Kellerabdichtung, Horizontalsperren, Balkonabdichtung in Berlin und Brandenburg."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trockenbau Berlin",
            "description": "Professionelle Trockenbauarbeiten für Wände, Decken und Raumteilungen in Berlin und Brandenburg."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Fliesenarbeiten bieten Sie an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten professionelle Fliesenarbeiten für Bad, Küche und Wohnräume an. Dazu gehören Wand- und Bodenfliesen, Natursteinverlegung sowie moderne großformatige Fliesen. Unsere erfahrenen Fliesenleger arbeiten präzise und sauber."
        }
      },
      {
        "@type": "Question",
        "name": "Führen Sie komplette barrierefreie Badumbauten durch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir führen komplette barrierefreie Badumbauten durch. Von der Planung bis zur Fertigstellung erhalten Sie alles aus einer Hand - bodengleiche Duschen, rutschfeste Fliesen, Haltegriffe und alle weiteren Anpassungen für mehr Sicherheit und Komfort."
        }
      },
      {
        "@type": "Question",
        "name": "Was umfasst Ihre Wasserschadensanierung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei Wasserschäden bieten wir schnelle professionelle Hilfe: Leckortung, Trocknung der betroffenen Bereiche, Schimmelprävention sowie fachgerechte Sanierung und Wiederherstellung. Wir arbeiten mit modernen Trocknungsgeräten und dokumentieren den gesamten Prozess."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Bodenbeläge verlegen Sie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir verlegen alle gängigen Bodenbeläge: Fliesen, Naturstein, Parkett, Laminat, Vinyl und PVC. Dabei beraten wir Sie zur Auswahl des passenden Materials für Ihre Räumlichkeiten und sorgen für eine fachgerechte, präzise Verlegung."
        }
      },
      {
        "@type": "Question",
        "name": "Was beinhaltet Ihr Trockenbau-Service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unser Trockenbau-Service umfasst den Bau von Trennwänden, abgehängten Decken, Dachausbauten und Raumteilungen. Wir arbeiten schnell, sauber und bieten auch Schall- und Wärmedämmung sowie die komplette Verspachtelung und Oberflächenbearbeitung."
        }
      },
      {
        "@type": "Question",
        "name": "Wie schützen Sie Gebäude vor Feuchtigkeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten professionelle Bauwerksabdichtung gegen Feuchtigkeit: Kellerabdichtung, Horizontalsperren, Vertikalabdichtungen und Balkonabdichtungen. Zusätzlich führen wir Holzschutzmaßnahmen durch, um Ihre Bausubstanz langfristig zu schützen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Förderungen gibt es für barrierefreie Umbauten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es gibt verschiedene Fördermöglichkeiten wie zinsgünstige KfW Kredite, Pflegekassenzuschüsse (bis zu 4.180 €) und regionale Förderungen. Wir beraten Sie gerne über die für Sie passenden Fördermöglichkeiten."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
