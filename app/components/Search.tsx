'use client';

import { useState } from 'react';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  
  const popularTickers = ['VOLV-B', 'ASSA-B', 'SEB-A', 'INVE-B', 'ATCO-A'];
  
  const handleSearch = () => {
    if (searchValue.trim()) {
      // Här skulle vi navigera till analyssidan
      console.log('Söker efter:', searchValue);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleTickerClick = (ticker: string) => {
    setSearchValue(ticker);
  };

  return (
    <div id="search" className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6b7280]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Sök aktie eller bolag (t.ex. VOLV-B, Volvo, ASSA-B.ST)"
          className="w-full pl-12 pr-32 py-4 text-lg rounded-2xl border border-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
          aria-describedby="search-help"
          enterKeyHint="search"
        />
        <button
          onClick={handleSearch}
          disabled={!searchValue.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          aria-label="Analysera sökning"
        >
          Analysera
        </button>
      </div>
      
      <div id="search-help" className="sr-only">
        Ange ticker, bolagsnamn eller ISIN-kod för vilken svensk aktie som helst
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {popularTickers.map((ticker) => (
          <button
            key={ticker}
            onClick={() => handleTickerClick(ticker)}
            className="px-3 py-1 text-sm text-[#6b7280] hover:text-black border border-[#e5e7eb] rounded-full hover:border-[#0a0a0a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            aria-label={`Välj ${ticker}`}
          >
            {ticker}
          </button>
        ))}
      </div>
    </div>
  );
}


