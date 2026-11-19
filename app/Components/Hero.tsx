"use client";

import React, { useRef, useState } from "react";
import { Search, Zap } from "lucide-react";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const popularStocks = ["VOLV-B", "ASSA-B", "SEB-A", "INVE-B", "ATCO-A"];

  // Hantera både submit från formuläret och klick på knappen (knappen är type="submit")
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim();

    if (!query) {
      // Om tomt: fokusera inputen (knappen är alltid klickbar och svart)
      inputRef.current?.focus();
      return;
    }

    // TODO: Navigera till valfri sida, t.ex.:
    // router.push(`/analys?ticker=${encodeURIComponent(query)}`);
    console.log("Searching for:", query);
  };

  const handlePopularClick = (ticker: string) => {
    setSearchQuery(ticker);
    // När man väljer en populär tagg, fokusera direkt på input så man kan trycka enter
    inputRef.current?.focus();
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white mb-8">
          <Zap className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            AI-driven aktieöversikt för nordiska investerare
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight whitespace-nowrap">
          <span className="relative">
            Analysera som proffsen
            <div className="absolute bottom-1 left-0 w-full h-1 bg-black/10 rounded-full"></div>
          </span>
          {" "}med AI
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sök valfritt bolag eller ticker och få en tydlig bild av läget nyckeltal, 
          nyheter, värdering och risker. Gratis att prova, kraftfullt för proffs.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Search className="w-6 h-6 text-gray-400 ml-6" />
              <input
                ref={inputRef}
                id="search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Sök aktie eller bolag (t.ex. VOLV-B, Volvo, ASSA-B.ST)"
                aria-label="Sök aktie eller bolag"
                className="flex-1 border-none focus:outline-none focus:ring-0 text-lg py-6 px-4 bg-transparent"
              />
              <button
                type="submit"
                className="bg-black hover:bg-black active:bg-black text-white rounded-xl px-8 py-3 m-2 font-medium transition-all duration-200 cursor-pointer"
                aria-label="Analysera sökning"
              >
                Analysera
              </button>
            </div>
          </div>
        </form>

        {/* Popular Stocks */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="text-sm text-gray-500 mr-2">Populära:</span>
          {popularStocks.map((ticker) => (
            <button
              key={ticker}
              type="button"
              onClick={() => handlePopularClick(ticker)}
              className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-black bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              {ticker}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}