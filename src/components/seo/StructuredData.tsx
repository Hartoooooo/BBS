export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.artdesignbau.de/#organization",
    "name": "BBS Barrierefreies Bauen und Sanieren",
    "legalName": "BBS Björn Hartmann",
    "url": "https://www.artdesignbau.de",
    "logo": "https://www.artdesignbau.de/ChatGPT Image 28. Sept. 2025, 20_07_42.png",
    "description": "Fliesenleger und Badumbau Experte in Schöneiche, Berlin, Brandenburg, Strausberg und West-Berlin/Charlottenburg. Spezialist für barrierefreies Bauen und Sanieren, Bad Sanierung Berlin, Bad Umbau Brandenburg. Über 22 Jahre Erfahrung.",
    "foundingDate": "2003",
    "telephone": "+49-30-92371277",
    "email": "info@bbs-hartmann.de",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Berlin"
      },
      {
        "@type": "City",
        "name": "Berlin-Charlottenburg"
      },
      {
        "@type": "City",
        "name": "Berlin West"
      },
      {
        "@type": "State",
        "name": "Brandenburg"
      },
      {
        "@type": "City",
        "name": "Schöneiche bei Berlin"
      },
      {
        "@type": "City",
        "name": "Strausberg"
      }
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
      "name": "Barrierefreie Bauleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Barrierefreie Badumbauten",
            "description": "Komplette Badumbauten für mehr Sicherheit und Komfort – bodengleiche Duschen, Haltegriffe und mehr"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Treppenlifte & Rampen",
            "description": "Installation von Treppenliften und Rampen für barrierefreien Zugang"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Türverbreiterungen",
            "description": "Verbreiterung von Türöffnungen für Rollstuhlfahrer"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Altersgerechte Wohnungsanpassung",
            "description": "Ganzheitliche Anpassung Ihrer Wohnung an individuelle Bedürfnisse"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fliesenarbeiten Schöneiche, Brandenburg, Berlin",
            "description": "Professionelle Fliesen- und Natursteinarbeiten für Bad, Küche und Wohnraum in Schöneiche, Brandenburg, Berlin und Strausberg"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bad Sanierung Berlin",
            "description": "Komplette Badsanierung und Badumbau in Berlin, Brandenburg und Umgebung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Barrierefreies Bauen West-Berlin Charlottenburg",
            "description": "Spezialist für barrierefreies Bauen und Sanieren in West-Berlin und Charlottenburg"
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
        "name": "Kann ich bei Ihnen einen Beratungstermin für barrierefreies Bauen buchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selbstverständlich. Wir bieten Ihnen eine kostenlose und unverbindliche Beratung für Ihr Haus oder Ihre Wohnung. Vereinbaren Sie einfach einen Termin und lassen Sie sich individuell beraten, welche barrierefreien Lösungen für Sie in Frage kommen."
        }
      },
      {
        "@type": "Question",
        "name": "Übernehmen Sie auch komplette Badumbauten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir führen komplette barrierefreie Badumbauten durch. Von der Planung bis zur Fertigstellung erhalten Sie alles aus einer Hand - bodengleiche Duschen, rutschfeste Böden, Haltegriffe und alle weiteren Anpassungen für mehr Sicherheit und Komfort."
        }
      },
      {
        "@type": "Question",
        "name": "Installieren Sie auch Treppenlifte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir verkaufen, montieren und warten Treppenlifte verschiedener Hersteller. Unsere Installationen erfolgen fachgerecht mit entsprechender Zertifizierung und regelmäßigen Wartungsprotokollen für maximale Sicherheit."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Förderungen gibt es für barrierefreie Umbauten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es gibt verschiedene Fördermöglichkeiten wie KfW-Zuschüsse, Pflegekassenzuschüsse und regionale Förderungen. Wir beraten Sie gerne über die für Sie passenden Fördermöglichkeiten und unterstützen Sie bei der Antragsstellung."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert ein typischer Badumbau?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Dauer hängt vom Umfang der Arbeiten ab. Ein einfacher Umbau dauert meist 3-5 Tage, ein kompletter Badumbau kann 1-2 Wochen in Anspruch nehmen. Wir informieren Sie vorab über den genauen Zeitplan."
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
