import React from 'react';
import { NeuButton } from './NeuButton';
import { NeuCard } from './NeuCard';
import { Activity, BarChart3, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleRequestDemo = () => {
    const contactSection = document.getElementById('contact');
    const select = document.querySelector('select[name="type"]') as HTMLSelectElement;
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Pre-select the dropdown option if available
    if (select) {
      select.value = 'Request Demo';
      // Trigger a change event manually if needed by React state, 
      // though in this simple implementation the component state might not update 
      // without interacting with the React setter directly. 
      // For this static site interaction, visually scrolling is the priority.
      // The user will see the form.
      
      // Attempt to trigger React's change listener (hacky but works for vanilla DOM manipulation from outside)
      const event = new Event('change', { bubbles: true });
      select.dispatchEvent(event);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-2 rounded-full shadow-neu-in text-neu-purple text-sm font-bold tracking-wider mb-2 bg-neu-base">
            MANUFACTURING OS V1.0
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-neu-text leading-tight">
          From Chaos to Control: The <span className="text-transparent bg-clip-text bg-neu-gradient">Modern Manufacturing OS</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto lg:mx-0">
          BuildQueue is a Manufacturing Execution System (MES) designed to bring clarity, control, and traceability to your entire production process. Say goodbye to spreadsheet chaos and hello to streamlined, automated, and error-free manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <NeuButton onClick={handleRequestDemo}>
              Request a Demo
            </NeuButton>
            <NeuButton variant="secondary" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Platform
            </NeuButton>
          </div>
        </div>

        {/* Mock UI Interface */}
        <div className="relative">
            {/* Background decorative blob */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <NeuCard className="p-6 md:p-8 transform rotate-y-12 transition-transform duration-500 hover:scale-[1.02] border border-white/40">
                <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                    <div>
                        <h3 className="text-xl font-bold text-neu-text">Production Overview</h3>
                        <p className="text-xs text-gray-400">Live Dashboard</p>
                    </div>
                    <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400 shadow-neu-btn"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-neu-btn"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400 shadow-neu-btn"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="p-4 rounded-xl shadow-neu-in bg-neu-base">
                        <div className="flex items-center gap-3 mb-2">
                            <Activity className="text-neu-purple" size={20} />
                            <span className="text-xs font-bold text-gray-500">Active Jobs</span>
                        </div>
                        <p className="text-2xl font-extrabold text-neu-text">124</p>
                        <span className="text-xs text-green-500 font-bold">+12% vs last week</span>
                    </div>
                    <div className="p-4 rounded-xl shadow-neu-in bg-neu-base">
                        <div className="flex items-center gap-3 mb-2">
                            <AlertTriangle className="text-orange-500" size={20} />
                            <span className="text-xs font-bold text-gray-500">Pending QC</span>
                        </div>
                        <p className="text-2xl font-extrabold text-neu-text">8</p>
                        <span className="text-xs text-orange-500 font-bold">Action Required</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 rounded-xl shadow-neu-out bg-neu-base flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-neu-base shadow-neu-btn">
                                <CheckCircle2 className="text-green-500" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Order #4429-A</h4>
                                <p className="text-xs text-gray-400">SLA Printing • Stage 3/5</p>
                            </div>
                        </div>
                        <div className="w-20 h-2 rounded-full bg-gray-200 shadow-neu-in overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-neu-purple to-neu-teal w-3/4"></div>
                        </div>
                    </div>

                     <div className="p-4 rounded-xl shadow-neu-out bg-neu-base flex items-center justify-between opacity-80">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-neu-base shadow-neu-btn">
                                <BarChart3 className="text-neu-teal" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Machine Utilization</h4>
                                <p className="text-xs text-gray-400">FDM Farm A</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-neu-text">92%</span>
                    </div>
                </div>
            </NeuCard>
        </div>
      </div>
    </section>
  );
};