import React from "react";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
  const stats = [
    { number: "10,000+", label: "Analyser gjorda" },
    { number: "2,500+", label: "Aktiva användare" },
    { number: "< 8s", label: "Genomsnittlig analystid" }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium">
            Begränsad tid – Testa Premium gratis
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Börja fatta smartare investeringsbeslut redan idag
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Gå med tusentals andra investerare som använder InvestiAI för att analysera 
          svenska aktier. Börja gratis och uppgradera när du är redo.
        </p>

        {/* CTA Button */}
        <button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold mb-16 transition-all duration-200">
          Skapa gratis konto
        </button>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}