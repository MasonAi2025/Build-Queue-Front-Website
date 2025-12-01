import React from 'react';
import { NeuCard } from './NeuCard';
import { TrendingUp, ShieldCheck, Microscope, PackageX, History, AlertCircle } from 'lucide-react';

export const ClientUseCases: React.FC = () => {
  const cases = [
    {
      industry: "Aerospace Component Supplier",
      title: "Achieved 30% Reduction in Inventory Errors",
      challenge: "Manual tracking in Excel led to frequent inventory discrepancies, causing production delays and costly overstock of certain materials.",
      solution: "Switched to BuildQueue's real-time digital inventory, providing a single source of truth for all materials and components.",
      result: "Reduced lead time by 25%",
      icon: <PackageX size={24} className="text-neu-teal" />
    },
    {
      industry: "SME Metal-Parts Manufacturer",
      title: "Reduced Manual Data Entry by 50%",
      challenge: "Operators spent hours manually logging production data, leading to errors and taking time away from value-added tasks.",
      solution: "Automated data capture and production reporting with BuildQueue, freeing up operators to focus on quality and output.",
      result: "Freed up 20 hours of operator time per week",
      icon: <TrendingUp size={24} className="text-neu-purple" />
    },
    {
      industry: "Medical Device Prototyping Lab",
      title: "Streamlined Quality Control and Compliance",
      challenge: "Struggled to maintain consistent quality control and traceability, putting compliance at risk.",
      solution: "Implemented digital passports and standardized QC workflows in BuildQueue, ensuring every part is traceable and meets quality standards.",
      result: "Passed all regulatory audits with zero findings",
      icon: <ShieldCheck size={24} className="text-neu-teal" />
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 bg-neu-base">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-4">Real Results from Real Manufacturers</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Our clients have transformed their operations and achieved significant improvements in efficiency, quality, and traceability.
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
                            <p className="text-xs font-bold text-neu-purple mb-1 uppercase tracking-wider">The Challenge</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{useCase.challenge}</p>
                        </div>
                         <div>
                            <p className="text-xs font-bold text-neu-teal mb-1 uppercase tracking-wider">The Solution</p>
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