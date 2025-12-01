import React from 'react';
import { NeuCard } from './NeuCard';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "From Spreadsheets to Sanity: A Guide to Choosing Your First MES",
    description: "If you're drowning in spreadsheets, it's time for a change. This guide will help you choose the right Manufacturing Execution System (MES) for your business.",
    link: "#",
  },
  {
    title: "The Power of the Digital Passport: A New Era of Traceability",
    description: "Learn how digital passports can revolutionize your traceability, from raw materials to finished products, and make compliance a breeze.",
    link: "#",
  },
  {
    title: "5 Signs You've Outgrown Excel for Manufacturing",
    description: "Is your manufacturing process being held back by the limitations of Excel? Here are 5 signs it's time to upgrade to a dedicated manufacturing system.",
    link: "#",
  },
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 px-4 bg-neu-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-neu-text">Learn with BuildQueue</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            We're not just a software company, we're your partner in manufacturing excellence. Explore our resources to learn how to improve your operations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <NeuCard key={index} className="p-6 flex flex-col group">
              <h3 className="text-xl font-bold text-neu-text mb-4 group-hover:text-neu-purple transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{post.description}</p>
              <a href={post.link} className="flex items-center gap-2 text-neu-teal font-semibold mt-4 group-hover:underline">
                Read More <ArrowRight size={16} />
              </a>
            </NeuCard>
          ))}
        </div>
      </div>
    </section>
  );
};