// app/morgonrapporten/page.tsx
// Server Component (ingen styled-jsx). Använder globala CSS-klasser.

type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Morgonrapporten({ searchParams }: PageProps) {
  // 1) Hämta från query ?p=... & d=...
  const pParam = typeof searchParams?.p === "string" ? searchParams?.p : undefined;
  const dParam = typeof searchParams?.d === "string" ? searchParams?.d : undefined;

  // 2) Fallback till placeholders (kan ersättas av n8n med templating)
  const forecastPercentage = pParam ?? "{{forecast_percentage}}";
  const forecastDate = dParam ?? "{{forecast_date}}";

  // Färg baserat på tecken
  const isNegative = forecastPercentage.includes("-");
  const color = isNegative ? "#e74c3c" : "#2ecc71";

  return (
    <main className="mr-hero">
      <section className="mr-container" aria-labelledby="mr-headline">
        {/* STOR PROCENTSATS */}
        <div className="mr-percent" style={{ color }}>
          {forecastPercentage}
        </div>

        {/* DATUM */}
        <div className="mr-date">{forecastDate}</div>

        {/* RUBRIK */}
        <h1 id="mr-headline" className="mr-headline">
          Investis prognos för dagen: 🇸🇪 OMXSPI
        </h1>

        {/* FELMARGINAL */}
        <p className="mr-note">Felmarginal ± 0,5%</p>
      </section>
    </main>
  );
}