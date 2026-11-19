'use client';

export default function AnalysisCTA() {
  const scrollToSearch = () => {
    const searchElement = document.getElementById('search');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToSearch}
      className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium text-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      aria-label="Gå till sökfältet för att göra en analys"
    >
      Gör en analys
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
