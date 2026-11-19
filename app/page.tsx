"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// --- Minimal inline icons (no external libs) ---
function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  // No longer used in the hero badge, but keep as fallback
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

function IconArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* trend line */}
      <path d="M4 16l5-5 3.5 3.5L20 7" />
      {/* arrow head aligned at the end of the line */}
      <path d="M20 7h-4" />
      <path d="M20 7v4" />
    </svg>
  );
}
function IconDoc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 2h7l5 5v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6M9 9h3" />
    </svg>
  );
}
function IconBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 17H9l-2 2h10l-2-2Z" />
      <path d="M18 16V11a6 6 0 1 0-12 0v5" />
    </svg>
  );
}
function IconChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 21h18" />
      <rect x="5" y="10" width="3" height="7" rx="1" />
      <rect x="10.5" y="6" width="3" height="11" rx="1" />
      <rect x="16" y="12" width="3" height="5" rx="1" />
    </svg>
  );
}
function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 22s8-3.5 8-10V6l-8-4-8 4v6c0 6.5 8 10 8 10Z" />
    </svg>
  );
}
function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

export default function Home() {
  const r = useRouter();
  const [q, setQ] = useState("");
  const steps = [
    { title: "Sök på bolag", desc: "Ange ticker eller bolagsnamn för vilken svensk aktie som helst", Icon: IconSearch },
    { title: "AI analyserar", desc: "Vi hämtar och analyserar alla nyckeltal, kvartals och årsrapporter och gör en värdering", Icon: IconBolt },
    { title: "Få rapporten", desc: "Få en riktkurs, djupgående analys och aktiebetyg", Icon: IconDoc },
  ];

  const onSearch = () => {
    const t = q.trim();
    if (!t) return;
    r.push(`/analys/${encodeURIComponent(t)}`);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      

      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f9ff_0%,#ecf2ff_100%)]">
        <div className="absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-40 text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-black/10 rounded-full px-4 py-2 mb-8">
            <IconBolt className="w-4 h-4 text-black" />
            <span className="text-sm">AI‑driven aktieöversikt för nordiska investerare</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Snabb, pålitlig aktieanalys med AI
          </h1>
          <p className="mt-5 text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            Sök valfritt bolag eller ticker och få en tydlig bild av läget – nyckeltal, nyheter,
            värdering och risker. Gratis att prova, kraftfullt för proffs.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative shadow-lg bg-white rounded-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IconSearch className="w-5 h-5 text-black/40" />
              </div>
              <input
                id="search-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
                placeholder="Sök aktie eller bolag (t.ex. VOLV-B, AAPL, HM-B.ST)"
                className="w-full h-14 rounded-2xl border border-black/20 bg-white pl-12 pr-32 text-base outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={onSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-xl bg-black text-white font-semibold border border-black cursor-pointer transition-colors duration-150 hover:bg-[#222]"
              >
                Analysera
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-40 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Så här fungerar det</h2>
            <p className="text-slate-600 mt-4 text-lg md:text-xl">Från sökning till färdig analys på under 10 sekunder</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* connecting line */}
            <div className="hidden md:block absolute left-0 right-0 top-6 h-[2px] bg-[#E5ECF7]" />

            <div className="grid gap-12 md:grid-cols-3">
              {steps.map(({ title, desc, Icon }, i) => (
                <div key={title} className="relative flex flex-col items-center text-center">
                  {/* number above icon */}
                  <div className="w-10 h-10 rounded-full bg-[#0B1220] text-white grid place-items-center font-semibold z-10">
                    {i + 1}
                  </div>

                  {/* icon box */}
                  <div className="mt-4 w-28 h-28 rounded-[24px] bg-[#F8FAFF] border border-[#E5ECF7] shadow-md grid place-items-center">
                    <Icon className="w-10 h-10 text-[#0B1220]" />
                  </div>

                  {/* title & desc */}
                  <h3 className="mt-6 font-semibold text-2xl text-[#0B1220]">{title}</h3>
                  <p className="text-slate-600 mt-3 max-w-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-40 bg-[linear-gradient(180deg,#f8fbff_0%,#f5f8ff_100%)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Allt du behöver för kloka investeringsbeslut
            </h2>
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
              Kraftfulla analysverktyg som tidigare bara varit tillgängliga för professionella investerare,
              nu i en enkel och intuitiv app
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "AI‑driven värdering", d: "DCF‑modeller och multipelvärdering baserat på realtidsdata och branschkomparationer", Icon: IconArrowUpRight },
              { t: "Smart bevakning", d: "Få notiser när dina aktier rör sig eller när viktiga nyheter publiceras", Icon: IconBell },
              { t: "Nyckeltal & historik", d: "P/E, P/S, ROE, ROIC och andra viktiga nyckeltal över tid", Icon: IconChart },
              { t: "Nyhetssammanfattning", d: "AI läser igenom senaste nyheterna och ger dig de viktigaste punkterna", Icon: IconDoc },
              { t: "Riskanalys", d: "Identifierar bransch‑, företags‑ och marknadsrisker automatiskt", Icon: IconShield },
              { t: "Realtidsdata", d: "Alltid uppdaterad information från pålitliga finansiella datakällor", Icon: IconClock },
            ].map(({ t, d, Icon }) => (
              <div key={t} className="rounded-2xl border border-[#E5ECF7] bg-white shadow-sm hover:shadow-md transition p-6">
                <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] border border-[#E5ECF7] text-[#0B1220] grid place-items-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-[#0B1220]">{t}</h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYSIS PREVIEW */}
      <section className="py-40 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Se hur en analys kan se ut
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Exempel på en typisk aktieanalys du får från Investi AI
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-[#E5ECF7] bg-white shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-[#E5ECF7]">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl md:text-2xl font-semibold text-[#0B1220]">
                  Volvo Group (VOLV-B.ST)
                </h3>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  +2.4%
                </span>
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Senaste: <span className="font-medium text-[#0B1220]">267.40 SEK</span>
                <span className="px-2">•</span>
                Marknadskapitalisering: <span className="font-medium text-[#0B1220]">544.2 Mdr SEK</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 grid md:grid-cols-2 gap-8">
              {/* Left: AI-summary */}
              <div>
                <h4 className="text-[#0B1220] font-semibold mb-3">AI‑sammanfattning</h4>
                <p className="text-slate-700 leading-relaxed">
                  Volvo Group visar stark utveckling inom elektrifiering och autonoma lösningar.
                  Q3‑resultat överträffade förväntningar med 15% ökning av ordertillgången. …
                </p>

                <div className="mt-5">
                  <h5 className="font-medium text-[#0B1220]">Viktiga risker:</h5>
                  <ul className="mt-2 text-slate-700 space-y-1 list-disc pl-5">
                    <li>Konjunkturkänslighet i transportbranschen</li>
                    <li>Hård konkurrens inom elektrifiering</li>
                    <li>Råmaterialkostnader och leverantörsberoendet</li>
                  </ul>
                </div>
              </div>

              {/* Right: Key metrics */}
              <div>
                <h4 className="text-[#0B1220] font-semibold mb-3">Nyckeltal</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-[#E5ECF7] bg-[#F8FAFF] p-4">
                    <div className="text-xs text-slate-500">P/E‑tal</div>
                    <div className="mt-1 font-semibold text-[#0B1220]">12.4</div>
                  </div>
                  <div className="rounded-lg border border-[#E5ECF7] bg-[#F8FAFF] p-4">
                    <div className="text-xs text-slate-500">P/S‑tal</div>
                    <div className="mt-1 font-semibold text-emerald-600">0.8</div>
                  </div>
                  <div className="rounded-lg border border-[#E5ECF7] bg-[#F8FAFF] p-4">
                    <div className="text-xs text-slate-500">ROE</div>
                    <div className="mt-1 font-semibold text-emerald-600">18.2%</div>
                  </div>
                  <div className="rounded-lg border border-[#E5ECF7] bg-[#F8FAFF] p-4">
                    <div className="text-xs text-slate-500">Skuldsättning</div>
                    <div className="mt-1 font-semibold text-emerald-600">0.3x</div>
                  </div>
                </div>

                {/* Valuation range */}
                <div className="mt-6 rounded-xl border border-[#E5ECF7] bg-[#EEF3FF] p-4">
                  <div className="font-medium text-[#0B1220]">Värderingsintervall</div>
                  <div className="mt-2 text-sm text-slate-700 grid gap-1">
                    <div>DCF: <span className="font-medium text-[#0B1220]">245–290 SEK</span></div>
                    <div>Multiplar: <span className="font-medium text-[#0B1220]">255–285 SEK</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    const el = document.getElementById('search-input') as HTMLInputElement | null;
                    el?.focus();
                  }, 300);
                }}
                className="w-full h-12 rounded-xl bg-black text-white font-medium hover:opacity-90 cursor-pointer"
                aria-label="Gå till sökfältet"
              >
                Gör en analys
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLACK - Börja fatta smartare investeringsbeslut redan idag */}
      <section className="py-32 bg-[#000000]">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Börja fatta smartare<br />
              investeringsbeslut redan idag
            </h2>
            <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
              Skapa ett gratis konto och få tillgång till AI-drivna analyser, riktkurser och smarta verktyg.
            </p>
            <a
              href="/registrera"
              className="mt-8 inline-flex items-center gap-2 px-8 h-14 rounded-xl bg-white text-black font-semibold text-lg hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Skapa gratis konto"
              role="button"
            >
              Skapa gratis konto
              <span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
            {/* Statistik under knappen */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              <div>
                <div className="text-3xl font-bold text-white">10&nbsp;000+</div>
                <div className="text-white/70 mt-2">Analyser skapade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2&nbsp;500+</div>
                <div className="text-white/70 mt-2">Användare</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">&lt; 8s</div>
                <div className="text-white/70 mt-2">Till färdig analys</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Description only (no logo/brand) */}
            <div className="md:col-span-6">
              <p className="text-slate-700 max-w-xl">
                Snabb, pålitlig aktieanalys med AI. Få en tydlig bild av aktiers senaste nyheter,
                nyckeltal, värdering och risker.
              </p>
            </div>

            {/* Tjänster */}
            <div className="md:col-span-3 md:pl-6">
              <h4 className="text-sm font-semibold text-[#0B1220]">Tjänster</h4>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li><Link href="/analys" className="hover:underline">Aktieanalys</Link></li>
                <li><Link href="/bevakning" className="hover:underline">Bevakning</Link></li>
                <li><Link href="/premium" className="hover:underline">Premium</Link></li>
              </ul>
            </div>

            {/* Hjälp */}
            <div className="md:col-span-3 md:pl-6">
              <h4 className="text-sm font-semibold text-[#0B1220]">Hjälp</h4>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
                <li><Link href="/integritet" className="hover:underline">Integritetspolicy</Link></li>
                <li><Link href="/villkor" className="hover:underline">Användarvillkor</Link></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-black/10" />

          {/* Bottom row */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Investi AI AB. All rights reserved.</p>
            <p>
              <span className="font-medium text-[#0B1220]">Ej finansiell rådgivning</span>
              <span className="mx-2">•</span>
              all information är endast för utbildningsändamål.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
