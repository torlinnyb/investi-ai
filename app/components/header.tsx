// app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-7xl h-14 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/logo.png" alt="InvestiAI" width={112} height={28} priority />
          </Link>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/morgonrapporten" className="hover:underline">Morgonrapporten</Link>
          <Link href="/premium" className="hover:underline">Premium</Link>
          <Link href="/login" className="rounded-full px-4 py-2 bg-black text-white hover:opacity-90">Logga in</Link>
        </nav>
      </div>
    </header>
  );
}