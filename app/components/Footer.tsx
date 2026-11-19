import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto container-default px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Vänster kolumn - Intro */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-lg">InvestiAI</span>
            </div>
            <p className="text-sm text-[#6b7280] max-w-md leading-relaxed">
              Snabb, pålitlig aktieanalys med AI. Få tydlig bild av aktiers senaste nyheter, nyckeltal, värdering och risker.
            </p>
          </div>

          {/* Höger två kolumner */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {/* Tjänster */}
            <div>
              <h3 className="text-sm font-semibold tracking-tight mb-4 text-[#0a0a0a]">Tjänster</h3>
              <ul className="space-y-3 text-sm text-[#6b7280]">
                <li>
                  <Link href="/analysis" className="hover:text-black transition-colors">
                    Aktieanalys
                  </Link>
                </li>
                <li>
                  <Link href="/morgonrapporten" className="hover:text-black transition-colors">
                    Bevakning
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-black transition-colors">
                    Premium
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hjälp */}
            <div>
              <h3 className="text-sm font-semibold tracking-tight mb-4 text-[#0a0a0a]">Hjälp</h3>
              <ul className="space-y-3 text-sm text-[#6b7280]">
                <li>
                  <Link href="/kontakt" className="hover:text-black transition-colors">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href="/integritetspolicy" className="hover:text-black transition-colors">
                    Integritetspolicy
                  </Link>
                </li>
                <li>
                  <Link href="/anvandarvillkor" className="hover:text-black transition-colors">
                    Användarvillkor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nedre sektion */}
        <div className="mt-12 pt-6 border-t border-[#e5e7eb] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#6b7280]">
          <p>© 2025 InvestiAI. All rights reserved.</p>
          <p className="text-center md:text-right">Ej finansiell rådgivning – all information är endast för utbildningsändamål.</p>
        </div>
      </div>
    </footer>
  );
}


