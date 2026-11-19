import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[#e5e7eb]">
      <div className="mx-auto container-default px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="InvestiAI startsida" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold tracking-tight text-xl">InvestiAI</span>
            </Link>
          </div>

          <nav aria-label="Huvudnavigation" className="hidden md:flex items-center gap-8">
            <Link href="/morgonrapporten" className="text-sm text-[#6b7280] hover:text-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded transition-colors">
              Prognos
            </Link>
            <Link href="/premium" className="text-sm text-[#6b7280] hover:text-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded transition-colors">
              Premium
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <span>Logga in</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </nav>

          <details className="md:hidden">
            <summary className="list-none inline-flex items-center justify-center rounded-full border border-[#e5e7eb] w-10 h-10 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 transition-colors" aria-label="Öppna meny">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#0a0a0a" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </summary>
            <div className="absolute left-0 right-0 mt-2 bg-white border-t border-b border-[#e5e7eb] shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
              <nav className="px-4 py-3" aria-label="Mobilnavigation">
                <Link href="/morgonrapporten" className="block px-2 py-3 text-sm text-[#0a0a0a] hover:underline underline-offset-4 transition-colors">Prognos</Link>
                <Link href="/premium" className="block px-2 py-3 text-sm text-[#0a0a0a] hover:underline underline-offset-4 transition-colors">Premium</Link>
                <Link href="/login" className="mt-2 inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                  Logga in
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}


