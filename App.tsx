import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { ClientUseCases } from './components/ClientUseCases';
import { Partnerships } from './components/Partnerships';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neu-base text-neu-text font-sans selection:bg-neu-accent/30 selection:text-neu-text">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <ClientUseCases />
        <Partnerships />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;