# BBS Björn Hartmann - Barrierefreies Bauen und Sanieren

Eine moderne, responsive Webseite für den Meisterbetrieb BBS Björn Hartmann, spezialisiert auf barrierefreies Bauen und Sanieren in Berlin & Brandenburg.

## 🚀 Technologien

- **Next.js 15** - React Framework mit App Router
- **TypeScript** - Typsicherheit und bessere Entwicklererfahrung
- **Tailwind CSS** - Utility-first CSS Framework
- **Lucide React** - Moderne Icon-Bibliothek
- **ESLint** - Code-Qualität und Konsistenz

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Startseite
├── components/
│   ├── layout/            # Layout-Komponenten
│   │   ├── Header.tsx     # Navigation
│   │   └── Footer.tsx     # Footer
│   ├── sections/          # Sektions-Komponenten
│   │   ├── Hero.tsx       # Hero-Bereich
│   │   ├── Services.tsx   # Dienstleistungen
│   │   ├── Testimonials.tsx # Kundenstimmen
│   │   ├── About.tsx      # Über uns
│   │   ├── FAQ.tsx        # Häufige Fragen
│   │   └── Contact.tsx    # Kontakt
│   └── ui/                # Wiederverwendbare UI-Komponenten
└── lib/                   # Utilities und Hilfsfunktionen
```

## 🎨 Features

- **Responsive Design** - Optimiert für alle Bildschirmgrößen
- **Smooth Scrolling** - Sanfte Navigation zwischen Sektionen
- **Interaktive Komponenten** - Testimonial-Karussell, FAQ-Akkordeon
- **SEO-optimiert** - Metadaten und semantische HTML-Struktur
- **Barrierefreie UI** - Fokus auf Accessibility und Usability
- **Performance** - Optimiert für schnelle Ladezeiten

## 🛠 Entwicklung

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Webseite ist dann unter `c http://localhos
t:3000` erreichbar.

### Weitere Befehle

```bash
# Production Build erstellen
npm run build

# Production Server starten
npm run start

# Linting
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🎯 Sektionen

1. **Header** - Navigation mit mobilem Hamburger-Menü
2. **Hero** - Haupttitel, Beschreibung und Call-to-Action
3. **Services** - Übersicht der Dienstleistungen
4. **Testimonials** - Kundenbewertungen mit Karussell
5. **About** - Über das Unternehmen mit Projektgalerie
6. **FAQ** - Häufig gestellte Fragen mit Akkordeon
7. **Contact** - Kontaktinformationen und Kontaktformular
8. **Footer** - Links, Öffnungszeiten und Impressum

## 🚀 Deployment

Das Projekt kann auf verschiedenen Plattformen deployed werden:

- **Vercel** (empfohlen für Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker Container**

### Vercel Deployment

```bash
# Vercel CLI installieren
npm i -g vercel

# Projekt deployen
vercel
```

## 📞 Kontakt

Bei Fragen zur Webseite oder zum Code wenden Sie sich gerne an den Entwickler.

---

© 2024 BBS Björn Hartmann - Barrierefreies Bauen und Sanieren# BBS
