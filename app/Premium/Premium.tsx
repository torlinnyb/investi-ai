import React from "react";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Premium() {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      period: "för alltid",
      features: [
        "5 analyser per månad",
        "Grundläggande nyckeltal",
        "AI-sammanfattning",
        "Begränsad historik"
      ],
      cta: "Kom igång gratis",
      featured: false
    },
    {
      name: "Premium",
      price: "199",
      period: "per månad",
      features: [
        "Obegränsade analyser",
        "Avancerade nyckeltal",
        "Detaljerad riskanalys",
        "Fullständig historik",
        "Smart bevakning",
        "Export till Excel",
        "Prioriterat stöd"
      ],
      cta: "Starta Premium",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-12 transition-colors duration-200">
          <ArrowLeft className="w-4 h-4" />
          Tillbaka
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Välj din plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Börja gratis och uppgradera när du behöver mer kraft för dina investeringsanalyser
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.featured 
                  ? "border-black shadow-lg scale-105" 
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mest populär
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-600 ml-1">SEK</span>
                </div>
                <p className="text-gray-600">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                  plan.featured
                    ? "bg-black text-white hover:bg-black/90"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-black mb-6 text-center">
            Vanliga frågor
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-black mb-2">
                Kan jag byta plan när som helst?
              </h4>
              <p className="text-gray-600">
                Ja, du kan uppgradera eller nedgradera din plan när som helst. 
                Ändringar träder i kraft omedelbart.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-2">
                Vilka betalningsmetoder accepterar ni?
              </h4>
              <p className="text-gray-600">
                Vi accepterar alla vanliga kreditkort (Visa, Mastercard, American Express) 
                samt Swish för svenska kunder.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-2">
                Finns det en gratis testperiod för Premium?
              </h4>
              <p className="text-gray-600">
                Ja, alla nya användare får 14 dagar gratis Premium när de registrerar sig. 
                Ingen bindningstid eller uppsägningstid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}