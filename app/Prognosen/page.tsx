// /app/Prognosen/Prognosen.tsx
import React from "react";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Calendar } from "lucide-react";
import Link from "next/link";

// Typ för trendvärdena i listan
type Trend = "up" | "down" | "flat";

export default function Prognos() {
  const todayDate = new Date().toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const marketData: { name: string; change: string; trend: Trend; price: string }[] = [
    { name: "OMXS30",     change: "+0.8%", trend: "up",   price: "2,458.2" },
    { name: "Volvo B",    change: "+2.1%", trend: "up",   price: "267.40" },
    { name: "Ericsson B", change: "-1.2%", trend: "down", price: "54.82" },
    { name: "H&M B",      change: "+0.5%", trend: "up",   price: "142.35" },
    { name: "SEB A",      change: "0.0%",  trend: "flat", price: "159.20" },
    { name: "Investor B", change: "+1.8%", trend: "up",   price: "289.60" },
  ];

  const getTrendIcon = (trend: Trend) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: Trend) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-12 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-gray-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-black">Morgonrapporten</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4 capitalize">{todayDate}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-800 rounded-full">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">Marknaden: Positiv trend</span>
          </div>
        </div>

        {/* Market Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold text-black mb-6">Marknadsöversikt</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketData.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(item.trend)}
                  <span className={`font-medium ${getTrendColor(item.trend)}`}>{item.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Analysis */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl font-bold text-black mb-6">AI-analys av dagen</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-black mb-3">Marknadssentiment</h3>
              <p className="text-gray-700 leading-relaxed">
                Stockholmsbörsen öppnar positivt efter starka amerikanska siffror över natten.
                Teknologiaktier leder uppgången medan råvarubolag ligger platt. Investare
                fokuserar på veckovigga företagsrapporter från storbanker.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-3">Viktiga händelser att bevaka</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  SEB presenterar Q4-rapport klockan 08:00
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Riksbankens beslutsränta förväntas hålla sig oförändrad
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Oljepriset fortsätter stiga på geopolitiska spänningar
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Tesla-aktien kan påverka europeiska elbilar efter starka leveranssiffror
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-3">Rekommendationer</h3>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-900 font-medium mb-2">Dagens fokus: Finanssektorn</p>
                <p className="text-blue-800">
                  Med SEB:s rapport idag rekommenderar vi att följa storbanker noga.
                  Sektorn har visat motståndskraft och kan dra nytta av höga räntor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}