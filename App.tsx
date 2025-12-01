
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { ClientUseCases } from './components/ClientUseCases';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChoosingYourFirstMES } from './components/guides/ChoosingYourFirstMES';
import { DigitalPassportGuide } from './components/guides/DigitalPassportGuide';
import { OutgrownExcelGuide } from './components/guides/OutgrownExcelGuide';

const Home: React.FC = () => (
  <>
    <Hero />
    <PainPoints />
    <Features />
    <Workflow />
    <ClientUseCases />
    <Blog />
    <FAQ />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neu-base text-neu-text font-sans selection:bg-neu-accent/30 selection:text-neu-text">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides/choosing-your-first-mes" element={<ChoosingYourFirstMES />} />
            <Route path="/guides/digital-passport" element={<DigitalPassportGuide />} />
            <Route path="/guides/outgrown-excel" element={<OutgrownExcelGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
