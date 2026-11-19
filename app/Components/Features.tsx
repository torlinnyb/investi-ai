import React from "react";
import { TrendingUp, Bell, BarChart3, Newspaper, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "AI-driven värdering",
    description: "DCF-modeller och multipelvärdering baserat på realtidsdata och branschkomparationer."
  },
  {
    icon: Bell,
    title: "Smart bevakning",
    description: "Få notiser när dina aktier rör sig eller när viktiga nyheter publiceras."
  },
  {
    icon: BarChart3,
    title: "Nyckeltal & historik",
    description: "P/E, P/S, ROE, ROIC och andra viktiga nyckeltal över tid."
  },
  {
    icon: Newspaper,
    title: "Nyhetssammanfattning",
    description: "AI läser igenom senaste nyheterna och ger dig de viktigaste punkterna."
  },
  {
    icon: Shield,
    title: "Riskanalys",
    description: "Identifierar bransch-, företags- och marknadsrisker automatiskt."
  },
  {
    icon: Clock,
    title: "Realtidsdata",
    description: "Alltid uppdaterad information från pålitliga finansiella datakällor."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Allt du behöver för kloka investeringsbeslut
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kraftfulla analysverktyg som tidigare bara varit tillgängliga för professionella 
            investerare, nu i en enkel och intuitiv app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}