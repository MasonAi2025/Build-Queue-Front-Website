import React, { useState } from 'react';
import { NeuCard } from './NeuCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What manufacturing technologies does BuildQueue support?",
      answer: "BuildQueue is technology-agnostic but optimized for Additive Manufacturing (FDM, SLA, SLS, MJF). Our flexible workflow engine can also support CNC machining, post-processing, and manual assembly tasks."
    },
    {
      question: "How is the Digital Passport generated?",
      answer: "The Digital Passport is automatically compiled as an order moves through production. It aggregates data from material batches, machine logs, operator actions, and QC checkpoints into a single traceable record for each part."
    },
    {
      question: "Can I integrate BuildQueue with my existing ERP?",
      answer: "Yes. BuildQueue offers a robust API that allows for seamless integration with ERPs, CRMs, and accounting software. We can push/pull data regarding orders, inventory levels, and shipping status."
    },
    {
      question: "How is pricing structured?",
      answer: "We offer tiered pricing based on the number of active machines and user seats. We have plans suitable for small job shops up to enterprise-level manufacturing facilities. Contact us for a custom quote."
    },
    {
      question: "Is my proprietary design data secure?",
      answer: "Absolutely. We use industry-standard encryption for all stored files and data in transit. Your 3D models and technical drawings are accessible only to authorized personnel within your organization."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-neu-base">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">
            Everything you need to know about the platform and billing.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-2xl flex items-center justify-between transition-all duration-300 outline-none ${
                  openIndex === index 
                    ? 'bg-neu-base shadow-neu-in text-neu-purple' 
                    : 'bg-neu-base shadow-neu-out hover:transform hover:-translate-y-1 text-neu-text'
                }`}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-neu-purple" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 pl-6 text-gray-500 leading-relaxed border-l-4 border-neu-purple/20 ml-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};