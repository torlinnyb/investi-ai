import React from "react";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Features from "./Components/Features";
import ExampleAnalysis from "./Components/ExampleAnalysis";
import FinalCTA from "./Components/FinaleCTA";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Features />
      <ExampleAnalysis />
      <FinalCTA />
      <Footer />
    </div>
  );
}