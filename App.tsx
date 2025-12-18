import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LogoBar } from './components/LogoBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ExpertsSection } from './components/ExpertsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FooterForm } from './components/FooterForm';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      <main>
        <HeroSection />
        <LogoBar />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ExpertsSection />
        <TestimonialsSection />
      </main>
      <FooterForm />
    </div>
  );
}

export default App;