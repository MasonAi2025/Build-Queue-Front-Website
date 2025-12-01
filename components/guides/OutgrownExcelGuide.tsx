
import React from 'react';
import { NeuCard } from '../NeuCard';
import { AlertTriangle } from 'lucide-react';

export const OutgrownExcelGuide: React.FC = () => {
    const warningSigns = [
        { sign: "You Spend More Time Tracking Data Than Using It", description: "Your team is bogged down in manual data entry, and by the time you have the data, it's already out of date." },
        { sign: "Costly Errors Are Becoming More Frequent", description: "Mistakes from typos, copy-paste errors, or incorrect formulas are leading to scrap, rework, and shipping the wrong orders." },
        { sign: "You Have No Real-Time Visibility", description: "To find out the status of an order, you have to physically walk the floor, make phone calls, or sift through a dozen spreadsheets." },
        { sign: "Traceability is a Nightmare", description: "When a customer or auditor asks for a part's history, it takes days of detective work to piece together the information." },
        { sign: "Your Team Is Frustrated", description: "Your skilled operators and managers are frustrated with a clunky, inefficient system that hinders their ability to do their best work." },
    ];

    return (
        <div className="py-20 px-4 bg-neu-base">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-neu-text mb-4">5 Signs You've Outgrown Excel for Manufacturing</h1>
                    <p className="text-lg text-gray-500">Recognizing the limitations of spreadsheets and knowing when to upgrade.</p>
                </div>

                <NeuCard className="p-8 md:p-12">
                     <div className="prose prose-lg max-w-none text-gray-500">
                        <p>
                            Excel is a powerful tool, but it was never designed to manage a complex manufacturing floor.
                            As your business grows, the very tool that once helped you organize your work can become your biggest bottleneck, actively costing you time, money, and customer trust.
                            Recognizing the warning signs is the first step toward a more efficient future.
                        </p>

                        <h2 className="text-2xl font-bold text-neu-text mt-12 mb-6">Are You Seeing These Red Flags?</h2>
                        
                        <div className="space-y-8">
                            {warningSigns.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-neu-base shadow-neu-inner">
                                    <AlertTriangle size={24} className="text-neu-purple flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-neu-text">{item.sign}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-12 border-l-4 border-neu-purple pl-6 py-2">
                           <p className="font-semibold text-neu-text">
                                "Letting go of Excel is the moment a manufacturer decides to stop reacting to problems and start proactively managing their success. A dedicated system like BuildQueue provides the visibility and control you need to thrive."
                           </p>
                        </blockquote>
                    </div>
                </NeuCard>
            </div>
        </div>
    );
};
