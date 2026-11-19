import React from "react";
import { Search, Brain, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Sök på bolag",
    description: "Ange ticker, bolagsnamn eller ISIN-kod för vilken svensk aktie som helst."
  },
  {
    number: "2", 
    icon: Brain,
    title: "AI analyserar",
    description: "Vår AI samlar nyheter, nyckeltal och gör värderingsanalys på sekunder."
  },
  {
    number: "3",
    icon: FileText,
    title: "Få rapporten",
    description: "Läs sammanfattning, risker, möjligheter och värderingsintervall."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Så här fungerar det
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Från sökning till färdig analys på under 10 sekunder
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Progress line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gray-300 z-0"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step number badge */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}