# InvestiAI - AI-driven aktieanalys

En modern, snabb och lättnavigerad landningssida för InvestiAI - en svensk tjänst för AI-driven aktieanalys.

## 🎯 Mål

Skapa en professionell landningssida som:
- Presenterar InvestiAI:s tjänster på ett tydligt och engagerande sätt
- Följer moderna webbstandarder för tillgänglighet och prestanda
- Använder svart & vitt tema med subtila gråtoner
- Är fullt responsiv och optimerad för alla enheter

## 🚀 Teknik

- **Framework**: Next.js 15 med App Router
- **Styling**: Tailwind CSS
- **Språk**: TypeScript
- **Komponenter**: React Server Components (standard) + Client Components (endast för interaktiva delar)
- **Tillgänglighet**: WCAG AA-standarden
- **Prestanda**: Optimerad för snabb laddning och minimal bundle-storlek

## 🎨 Designregler

### Färger
- **Primär bakgrund**: #ffffff (vit)
- **Primär text**: #0a0a0a (nära svart)
- **Sekundär text**: #6b7280 (neutral grå)
- **Accent**: Endast subtilt (#e5e7eb för linjer, rgba(0,0,0,0.06) för skuggor)

### Typografi
- **Rubriker**: Kraftig vikt, tight tracking
- **H1**: 48-64px (desktop), 32-40px (mobil)
- **H2**: 32-40px (desktop), 24-28px (mobil)
- **H3**: 24-28px (desktop), 20-22px (mobil)
- **Brödtext**: 16-18px, line-height 1.6

### Layout
- **Container**: max-width 1280px
- **Marginaler**: px-4 (mobil), px-6 (tablet), px-8 (desktop)
- **Spacing**: py-24 (desktop), py-16 (mobil)

## 📱 Komponenter

### Header
- Sticky navigation med backdrop-blur
- Logotyp, navigationslänkar och "Logga in"-knapp
- Responsiv hamburgermeny för mobil

### Hero Section
- Badge med AI-information
- Stor H1-rubrik med understrykning
- Beskrivande brödtext
- Sökfält med populära snabbval

### Så här fungerar det
- 3-stegs process med ikoner och progress-linjer
- Responsiv grid-layout

### Features
- 6 funktionskort i 2x3 grid (desktop)
- Ikoner, rubriker och beskrivningar

### Exempelanalys
- Demonstrationskort med Volvo Group
- AI-sammanfattning, risker och nyckeltal
- Värderingsintervall och CTA-knapp

### Final CTA
- Mörk sektion med statistik
- "Skapa gratis konto"-knapp

### Footer
- 3-kolumns layout med tjänster och hjälp
- Copyright och viktiga notiser

## 🛠️ Installation och körning

### Förutsättningar
- Node.js 18+ 
- npm eller yarn

### Installation
```bash
# Klona projektet
git clone [repository-url]
cd investiai

# Installera beroenden
npm install
```

### Utveckling
```bash
# Starta utvecklingsserver
npm run dev

# Öppna http://localhost:3000 i webbläsaren
```

### Bygga för produktion
```bash
# Bygg projektet
npm run build

# Starta produktionsserver
npm start
```

## 📁 Projektstruktur

```
investiai/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigationsheader
│   │   ├── Footer.tsx          # Sidfot
│   │   ├── Search.tsx          # Sökkomponent (client)
│   │   └── AnalysisCTA.tsx     # CTA-knapp (client)
│   ├── globals.css             # Globala stilar
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Huvudsida
├── public/
│   ├── favicon.svg             # SVG-favicon
│   └── manifest.json           # PWA-manifest
├── package.json
└── README.md
```

## ♿ Tillgänglighet

- **Semantisk HTML**: Korrekt användning av landmarks och strukturella element
- **Keyboard navigation**: Fullständigt navigerbart med tangentbord
- **Screen readers**: ARIA-labels och beskrivningar
- **Focus states**: Tydliga fokusringar för alla interaktiva element
- **Kontrast**: Tillräcklig kontrast enligt WCAG AA

## 🚀 Prestanda

- **Server Components**: Mest innehåll renderas på servern
- **Lazy loading**: Bilder och komponenter laddas vid behov
- **Minimal JS**: Endast nödvändig JavaScript för interaktivitet
- **Optimized CSS**: Tailwind CSS med PurgeCSS för minimal bundle

## 🌐 SEO

- **Metadata**: Komplett OpenGraph och Twitter Cards
- **Strukturdata**: Semantisk HTML för sökmotorer
- **Svenska**: Språkinställningar för svenska marknaden
- **Performance**: Snabb laddning för bättre ranking

## 📱 Responsiv design

- **Mobile-first**: Designad för mobil först
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexbox/Grid**: Moderna CSS-layouts
- **Touch-friendly**: Stora touch-targets för mobil

## 🔧 Anpassning

### Färger
Ändra färger i `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
}
```

### Typografi
Anpassa typsnitt i `app/layout.tsx`:
```tsx
import { Geist } from "next/font/google";
```

### Innehåll
Uppdatera text i respektive komponenter eller skapa en central konfigurationsfil.

## 📄 Licens

© 2025 InvestiAI. All rights reserved.

---

**Notis**: Ej finansiell rådgivning – all information är endast för utbildningsändamål.
