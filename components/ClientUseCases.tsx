import React from 'react';
import { NeuCard } from './NeuCard';
import { TrendingUp, ShieldCheck, Microscope } from 'lucide-react';

export const ClientUseCases: React.FC = () => {
  const cases = [
    {
      industry: "Aerospace Manufacturing",
      title: "Traceability at Scale",
      challenge: "Manual documentation for certified parts was slowing down production cycles and increasing audit preparation time.",
      solution: "Implemented BuildQueue's Digital Passport to auto-generate full genealogy reports for every printed flight part.",
      result: "100% Audit Readiness",
      icon: <ShieldCheck size={24} className="text-neu-teal" />
    },
    {
      industry: "Rapid Prototyping Bureau",
      title: "Automated Scheduling",
      challenge: "Managing 50+ machines with spreadsheets led to low utilization, frequent conflicts, and missed deadlines.",
      solution: "Used Smart Scheduler to optimize machine uptime, manage maintenance, and assign orders automatically.",
      result: "40% Output Increase",
      icon: <TrendingUp size={24} className="text-neu-purple" />
    },
    {
      industry: "Medical Devices",
      title: "Quality Control",
      challenge: "Inconsistent visual inspections across different shifts resulted in high scrap rates and compliance risks.",
      solution: "Deployed Standardized QC Checkpoint Templates with mandatory visual references for operators.",
      result: "15% Scrap Reduction",
      icon: <Microscope size={24} className="text-neu-teal" />
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 bg-neu-base">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-4">Client Success Stories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                See how manufacturing leaders are transforming their operations with BuildQueue.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {cases.map((useCase, idx) => (
                <NeuCard key={idx} className="p-8 flex flex-col h-full relative overflow-hidden group">
                     {/* Hover effect accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neu-purple to-neu-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-neu-base shadow-neu-btn text-neu-text group-hover:text-neu-purple transition-colors">
                            {useCase.icon}
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{useCase.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neu-text mb-4 group-hover:text-neu-purple transition-colors">{useCase.title}</h3>
                    
                    <div className="mb-6 space-y-4 flex-grow">
                        <div>
                            <p className="text-xs font-bold text-neu-purple mb-1 uppercase tracking-wider">Challenge</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{useCase.challenge}</p>
                        </div>
                         <div>
                            <p className="text-xs font-bold text-neu-teal mb-1 uppercase tracking-wider">Solution</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{useCase.solution}</p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-neu-gradient">
                            {useCase.result}
                        </p>
                    </div>
                </NeuCard>
            ))}
        </div>
      </div>
    </section>
  );
};