import Search from './components/Search';
import AnalysisCTA from './components/AnalysisCTA';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center">
        <div className="mx-auto container-default px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e7eb] bg-white/50 mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium text-[#6b7280]">AI-driven aktieöversikt för nordiska investerare</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Snabb, pålitlig aktieanalys med{' '}
            <span className="relative">
              AI
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e5e7eb] rounded-full"></span>
            </span>
          </h1>

          {/* Body text */}
          <p className="text-lg lg:text-xl text-[#6b7280] mb-12 max-w-3xl mx-auto leading-relaxed">
            Sök valfritt bolag eller ticker och få en tydlig bild av läget — nyckeltal, nyheter, värdering och risker. Gratis att prova, kraftfullt för proffs.
          </p>

          {/* Search component */}
          <Search />
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 lg:py-24 bg-gray-50/30">
        <div className="mx-auto container-default px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Så här fungerar det</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">Från sökning till färdig analys på under 10 sekunder</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold text-lg mb-6">1</div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sök på bolag</h3>
                <p className="text-[#6b7280] leading-relaxed">Ange ticker, bolagsnamn eller ISIN-kod för vilken svensk aktie som helst.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-[#e5e7eb] transform -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold text-lg mb-6">2</div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI analyserar</h3>
                <p className="text-[#6b7280] leading-relaxed">Vår AI samlar nyheter, nyckeltal och gör värderingsanalys på sekunder.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-[#e5e7eb] transform -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)] text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold text-lg mb-6">3</div>
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Få rapporten</h3>
                <p className="text-[#6b7280] leading-relaxed">Läs sammanfattning, risker, möjligheter och värderingsintervall.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto container-default px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Allt du behöver för kloka investeringsbeslut</h2>
            <p className="text-lg text-[#6b7280] max-w-3xl mx-auto">Kraftfulla analysverktyg som tidigare bara varit tillgängliga för professionella investerare, nu i en enkel och intuitiv app.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-driven värdering</h3>
              <p className="text-[#6b7280] leading-relaxed">DCF-modeller och multipelvärdering baserat på realtidsdata och branschkomparationer.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart bevakning</h3>
              <p className="text-[#6b7280] leading-relaxed">Få notiser när dina aktier rör sig eller när viktiga nyheter publiceras.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Nyckeltal & historik</h3>
              <p className="text-[#6b7280] leading-relaxed">P/E, P/S, ROE, ROIC och andra viktiga nyckeltal över tid.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Nyhetssammanfattning</h3>
              <p className="text-[#6b7280] leading-relaxed">AI läser igenom senaste nyheterna och ger dig de viktigaste punkterna.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Riskanalys</h3>
              <p className="text-[#6b7280] leading-relaxed">Identifierar bransch-, företags- och marknadsrisker automatiskt.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Realtidsdata</h3>
              <p className="text-[#6b7280] leading-relaxed">Alltid uppdaterad information från pålitliga finansiella datakällor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Analysis Section */}
      <section className="py-16 lg:py-24 bg-gray-50/30">
        <div className="mx-auto container-default px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Se hur en analys kan se ut</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">Exempel på en typisk aktieanalys du får från InvestiAI.</p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 lg:p-12 shadow-[0_6px_24px_rgba(0,0,0,0.06)] max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">Volvo Group (VOLV-B.ST)</h3>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">+2.4%</span>
                </div>
                <p className="text-[#6b7280]">Senaste: 267.40 SEK • Marknadskapitalisering: 544.2 Mdr SEK</p>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left column */}
              <div>
                <h4 className="font-semibold mb-3">AI-sammanfattning</h4>
                <p className="text-[#6b7280] mb-6 leading-relaxed">
                  Volvo Group visar starka resultat med ökad försäljning inom lastbilar och byggmaskiner. 
                  Företaget har en solid marknadsposition i Norden och växer internationellt, särskilt i Asien.
                </p>
                
                <h4 className="font-semibold mb-3">Viktiga risker</h4>
                <ul className="space-y-2 text-[#6b7280]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#6b7280] rounded-full mt-2 flex-shrink-0"></span>
                    Cyklisk bransch med känslighet för ekonomiska nedgångar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#6b7280] rounded-full mt-2 flex-shrink-0"></span>
                    Höga kapitalkostnader och investeringsbehov
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#6b7280] rounded-full mt-2 flex-shrink-0"></span>
                    Konkurrens från asiatiska tillverkare
                  </li>
                </ul>
              </div>

              {/* Right column */}
              <div>
                <h4 className="font-semibold mb-3">Nyckeltal</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-[#6b7280] mb-1">P/E</div>
                    <div className="text-lg font-semibold">12.4</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-[#6b7280] mb-1">P/S</div>
                    <div className="text-lg font-semibold">0.8</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-[#6b7280] mb-1">ROE</div>
                    <div className="text-lg font-semibold">18.2%</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-[#6b7280] mb-1">Skuldsättning</div>
                    <div className="text-lg font-semibold">1.2x</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valuation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-semibold mb-3">Värderingsintervall</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-[#6b7280] mb-1">DCF-modell</div>
                  <div className="font-semibold">245 - 290 SEK</div>
                </div>
                <div>
                  <div className="text-sm text-[#6b7280] mb-1">Multiplar</div>
                  <div className="font-semibold">255 - 285 SEK</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <AnalysisCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-black text-white">
        <div className="mx-auto container-default px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-8">
            <span className="text-sm font-medium">Begränsad tid – Testa Premium gratis</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Börja fatta smartare investeringsbeslut redan idag
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Gå med tusentals andra investerare som använder InvestiAI för att analysera svenska aktier. Börja gratis och uppgradera när du är redo.
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mb-12">
            Skapa gratis konto
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold mb-2">10,000+</div>
              <div className="text-gray-300">Analyser gjorda</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">2,500+</div>
              <div className="text-gray-300">Aktiva användare</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">&lt; 8s</div>
              <div className="text-gray-300">Genomsnittlig analystid</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
