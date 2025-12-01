
import React from 'react';
import { NeuCard } from '../NeuCard';
import { CheckSquare } from 'lucide-react';

export const ChoosingYourFirstMES: React.FC = () => {
    const evaluationSteps = [
        "Define Your Core Needs: What are the biggest bottlenecks in your current workflow? (e.g., order tracking, inventory, quality control)",
        "Evaluate Scalability: Choose a system that can grow with your business.",
        "Prioritize User-Friendliness: An MES is only effective if your team uses it. Look for intuitive interfaces.",
        "Assess Integration Capabilities: Ensure the MES can connect with your existing software (ERP, accounting, etc.).",
        "Request a Personalized Demo: See the software in action with your specific use cases."
    ];

    return (
        <div className="py-20 px-4 bg-neu-base">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-neu-text mb-4">From Spreadsheets to Sanity: A Guide to Choosing Your First MES</h1>
                    <p className="text-lg text-gray-500">A practical guide to finding the right Manufacturing Execution System.</p>
                </div>

                <NeuCard className="p-8 md:p-12">
                    <div className="prose prose-lg max-w-none text-gray-500">
                        <p>
                            If you're managing a growing manufacturing operation, you've likely felt the pains of using spreadsheets.
                            Manual data entry, lack of real-time visibility, and the constant risk of human error can quickly turn your production floor into a chaotic environment.
                            A Manufacturing Execution System (MES) is designed to solve these exact problems, bringing order, efficiency, and scalability to your operations.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-neu-text mt-12 mb-6">Why You Need an MES</h2>
                        <p>
                            An MES provides a digital backbone for your entire manufacturing process. It connects your people, machines, and materials, offering a single source of truth that eliminates guesswork and empowers data-driven decisions. The right MES can help you:
                        </p>
                        <ul>
                            <li><strong>Increase Throughput:</strong> Optimize scheduling and reduce downtime.</li>
                            <li><strong>Improve Quality:</strong> Standardize workflows and enforce quality checks.</li>
                            <li><strong>Enhance Traceability:</strong> Automatically generate audit trails and digital records.</li>
                            <li><strong>Reduce Costs:</strong> Minimize scrap, rework, and inventory holding costs.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-neu-text mt-12 mb-6">Key Steps for Evaluation</h2>
                        <div className="space-y-5">
                            {evaluationSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckSquare size={20} className="text-neu-teal mt-1 flex-shrink-0" />
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="mt-12 border-l-4 border-neu-purple pl-6 py-2">
                           <p className="font-semibold text-neu-text">
                                "The transition to an MES like BuildQueue isn't just an IT upgrade; it's a fundamental business transformation that pays dividends in efficiency and customer satisfaction."
                           </p>
                        </blockquote>
                    </div>
                </NeuCard>
            </div>
        </div>
    );
};
