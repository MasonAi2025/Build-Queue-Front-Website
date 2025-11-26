import React from 'react';
import { NeuCard } from './NeuCard';
import { ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
    const steps = [
        { num: '01', title: 'Order & Quote', desc: 'Ingest designs, estimate costs, and generate technical quotations.' },
        { num: '02', title: 'Schedule', desc: 'Assign production routes and allocate machine time efficiently.' },
        { num: '03', title: 'Produce & QC', desc: 'Execute tasks, log material usage, and perform checkpoint inspections.' },
        { num: '04', title: 'Digital Passport', desc: 'Auto-generate a traceable history for the final delivered part.' }
    ];

    return (
        <section id="workflow" className="py-20 px-4">
             <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-neu-text mb-4">The BuildQueue Workflow</h2>
                    <p className="text-gray-500">Seamless integration from customer file to physical product.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-neu-base shadow-neu-in -translate-y-1/2 rounded-full z-0"></div>

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-xl font-black text-neu-accent mb-6 border-4 border-neu-base z-10">
                                    {step.num}
                                </div>
                                <NeuCard className="p-6 w-full h-full flex flex-col items-center">
                                    <h4 className="text-lg font-bold text-neu-text mb-2">{step.title}</h4>
                                    <p className="text-xs text-gray-500">{step.desc}</p>
                                </NeuCard>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </section>
    );
};