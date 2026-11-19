import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Investi AI",
  description: "Snabb, pålitlig aktieanalys med AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        {/* Sticky Header (server-component friendly, no client state) */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center h-full">
              <Image
                src="/logo.png"
                alt="InvestiAI"
                width={400}
                height={100}
                className="w-auto h-12 md:h-14 lg:h-16 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/morgonrapporten"
                className="text-gray-600 hover:text-black font-medium transition-all duration-200 hover:underline underline-offset-4"
              >
                Prognos
              </Link>
              <Link 
                href="/premium"
                className="text-gray-600 hover:text-black font-medium transition-all duration-200 hover:underline underline-offset-4"
              >
                Premium
              </Link>
              <Link
                href="/login"
                className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-2 font-medium transition-all duration-200"
              >
                Logga in
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}