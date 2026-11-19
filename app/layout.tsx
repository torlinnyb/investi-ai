import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvestiAI – Snabb, pålitlig aktieanalys med AI",
  description: "Sök bolag eller ticker och få en tydlig bild av nyheter, nyckeltal, värdering och risker. AI-driven aktieanalys för nordiska investerare.",
  keywords: ["aktieanalys", "AI", "investering", "svenska aktier", "nyckeltal", "värdering", "riskanalys"],
  authors: [{ name: "InvestiAI" }],
  creator: "InvestiAI",
  publisher: "InvestiAI",
  metadataBase: new URL("https://investiai.se"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "InvestiAI – Snabb, pålitlig aktieanalys med AI",
    description: "Sök bolag eller ticker och få en tydlig bild av nyheter, nyckeltal, värdering och risker. AI-driven aktieanalys för nordiska investerare.",
    locale: "sv_SE",
    type: "website",
    url: "https://investiai.se/",
    siteName: "InvestiAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InvestiAI - AI-driven aktieanalys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvestiAI – Snabb, pålitlig aktieanalys med AI",
    description: "AI-driven aktieanalys för nordiska investerare",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv-SE">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#0a0a0a]`}>        
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50 rounded-full bg-black text-white px-4 py-2 text-sm font-medium"
        >
          Hoppa till innehåll
        </a>
        <Header />
        <main id="innehall" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
