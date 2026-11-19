"use client";
import React from "react";
import { TrendingUp } from "lucide-react";

export default function ExampleAnalysis() {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Se hur en analys kan se ut
          </h2>
          <p className="text-lg text-gray-600">
            Exempel på en typisk aktieanalys du får från InvestiAI
          </p>
        </div>

        {/* Analysis Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-black">Volvo Group (VOLV-B.ST)</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    +2.4%
                  </span>
                </div>
                <p className="text-gray-600">
                  Senaste: <span className="font-semibold">267.40 SEK</span> • 
                  Marknadskapitalisering: <span className="font-semibold">544.2 Mdr SEK</span>
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">AI-sammanfattning</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Volvo Group visar stark återhämtning med förbättrade marginaler inom lastbilar 
                    och anläggningsmaskiner. Elektrifieringssatsningen accelererar och orderingången 
                    förblir robust trots konjunkturoro.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Viktiga risker</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Konjunkturkänslighet påverkar efterfrågan på tunga fordon
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Höga investeringar i elektrifiering pressar kortsiktiga marginaler
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Råvarupriser och leveranskedjestörningar
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      Intensifierad konkurrens från kinesiska tillverkare
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">Nyckeltal</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">P/E</p>
                      <p className="text-xl font-bold text-black">12.8</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">P/S</p>
                      <p className="text-xl font-bold text-black">0.9</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">ROE</p>
                      <p className="text-xl font-bold text-black">18.2%</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 mb-1">Skuldsättning</p>
                      <p className="text-xl font-bold text-black">0.7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valuation Panel */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <h4 className="text-lg font-semibold text-black mb-3">Värderingsintervall</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">DCF:</span>
                  <span className="font-semibold text-black ml-2">245-290 SEK</span>
                </div>
                <div>
                  <span className="text-gray-600">Multiplar:</span>
                  <span className="font-semibold text-black ml-2">255-285 SEK</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button
                onClick={scrollToSearch}
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 font-semibold text-lg transition-all duration-200"
              >
                Gör en analys
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}