import React from "react";
import Link from "next/link";

export default function Footer() {
  const services = [
    { name: "Aktieanalys", href: "/" },
    { name: "Bevakning", href: "#" },
    { name: "Premium", href: "/premium" }
  ];

  const help = [
    { name: "Kontakt", href: "#" },
    { name: "Integritetspolicy", href: "#" },
    { name: "Användarvillkor", href: "#" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold text-black mb-4 inline-block">InvestiAI</Link>
              <p className="text-gray-600 leading-relaxed">
                Snabb, pålitlig aktieanalys med AI. Få tydlig bild av aktiers senaste 
                nyheter, nyckeltal, värdering och risker.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-black mb-4">Tjänster</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-black mb-4">Hjälp</h3>
            <ul className="space-y-3">
              {help.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 InvestiAI. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 text-center md:text-right">
              Ej finansiell rådgivning – all information är endast för utbildningsändamål.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}