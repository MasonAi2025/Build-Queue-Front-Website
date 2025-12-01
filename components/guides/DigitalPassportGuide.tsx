
import React from 'react';
import { NeuCard } from '../NeuCard';
import { CheckSquare } from 'lucide-react';

export const DigitalPassportGuide: React.FC = () => {
    const passportBenefits = [
        "Complete Traceability: Every step, from raw material to final inspection, is recorded.",
        "Effortless Compliance: Generate audit-ready reports with a single click.",
        "Enhanced Quality Control: Link quality checks directly to the part's digital record.",
        "Increased Customer Trust: Provide your customers with a verifiable history of each part.",
        "Reduced Counterfeiting Risk: A secure, digital identity for every component you produce."
    ];

    return (
        <div className="py-20 px-4 bg-neu-base">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-neu-text mb-4">The Power of the Digital Passport: A New Era of Traceability</h1>
                    <p className="text-lg text-gray-500">Understanding how a unique digital identity for every part transforms manufacturing.</p>
                </div>

                <NeuCard className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none text-gray-500">
                        <p>
                            In today's competitive landscape, providing a quality product is no longer enough. Customers and regulators demand full transparency into the entire manufacturing lifecycle.
                            This is where the Digital Passport comes in—a comprehensive, unchangeable digital record that accompanies a part from its creation to its final destination.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-neu-text mt-12 mb-6">What is a Digital Passport?</h2>
                        <p>
                           Imagine a birth certificate for every part you manufacture. This certificate, or Digital Passport, contains every piece of information relevant to that part's journey:
                           the raw materials used, the machines it was processed on, the operators who handled it, the quality checks it passed, and its final shipping details.
                           At BuildQueue, this is a core feature, automatically generated for every item.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-neu-text mt-12 mb-6">Key Benefits of a Digital Passport System</h2>
                        <div className="space-y-5">
                            {passportBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckSquare size={20} className="text-neu-teal mt-1 flex-shrink-0" />
                                    <p>{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-12 border-l-4 border-neu-purple pl-6 py-2">
                           <p className="font-semibold text-neu-text">
                                "Digital Passports are the cornerstone of modern quality assurance. They replace assumptions with certainty and build a foundation of trust with your customers."
                           </p>
                        </blockquote>
                    </div>
                </NeuCard>
            </div>
        </div>
    );
};
