import React from 'react';
import { NeuCard } from './NeuCard';
import { NeuButton } from './NeuButton';
import { Cpu, Globe, Anchor, Zap } from 'lucide-react';

export const Partnerships: React.FC = () => {
  const partners = [
    { name: "TechForge Systems", type: "Hardware Integration", icon: <Cpu size={32} /> },
    { name: "Global Logistics Co", type: "Distribution", icon: <Globe size={32} /> },
    { name: "MarineLayer 3D", type: "Material Science", icon: <Anchor size={32} /> },
    { name: "PowerPrint", type: "High-Speed Tooling", icon: <Zap size={32} /> }
  ];

  return (
    <section id="partnerships" className="py-20 px-4 bg-neu-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-4">Our Ecosystem</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We collaborate with industry leaders in hardware, materials, and logistics to deliver a seamless manufacturing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, idx) => (
            <NeuCard key={idx} className="p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-neu-purple mb-4">
                {partner.icon}
              </div>
              <h3 className="text-lg font-bold text-neu-text mb-1">{partner.name}</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{partner.type}</p>
            </NeuCard>
          ))}
        </div>

        <div className="mt-16">
          <NeuCard className="p-8 md:p-12 text-center relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-neu-gradient"></div>
             
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-neu-text mb-4">Become a Partner</h3>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                    Are you a machine manufacturer, software vendor, or material supplier? 
                    Join the BuildQueue ecosystem to integrate your solutions directly into our digital passport workflow.
                </p>
                <NeuButton onClick={() => {
                    const contactSection = document.getElementById('contact');
                    const select = document.querySelector('select[name="type"]') as HTMLSelectElement;
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    if (select) select.value = 'Partnership';
                }}>
                    Discuss Partnership
                </NeuButton>
             </div>
          </NeuCard>
        </div>
      </div>
    </section>
  );
};