import React from 'react';
import { NeuCard } from './NeuCard';
import { TrendingUp, TrendingDown, GanttChartSquare, PackageX, History, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: <GanttChartSquare size={32} className="text-red-500" />,
    title: 'Manual Scheduling & Tracking',
    description: 'Relying on spreadsheets to manage production schedules is time-consuming, error-prone, and lacks real-time visibility.',
    solution_icon: <TrendingUp size={24} className="text-green-500" />,
    solution: 'Automated, visual scheduling and real-time progress tracking.',
  },
  {
    icon: <PackageX size={32} className="text-red-500" />,
    title: 'Inventory & Material Discrepancies',
    description: 'Lack of accurate inventory data leads to stockouts, overstocking, and production delays.',
    solution_icon: <TrendingUp size={24} className="text-green-500" />,
    solution: 'Real-time inventory tracking and automated material requirements planning (MRP).',
  },
  {
    icon: <History size={32} className="text-red-500" />,
    title: 'Lack of Traceability',
    description: 'Inability to trace parts, materials, and production history makes quality control, compliance, and recalls difficult and costly.',
    solution_icon: <TrendingUp size={24} className="text-green-500" />,
    solution: 'Digital passports for every part, providing complete traceability from raw material to finished product.',
  },
  {
    icon: <AlertCircle size={32} className="text-red-500" />,
    title: 'Inefficient Workflows',
    description: 'Manual data entry, paper-based processes, and poor communication between teams lead to wasted time and resources.',
    solution_icon: <TrendingUp size={24} className="text-green-500" />,
    solution: 'Workflow automation, digital work instructions, and seamless team collaboration.',
  },
];

export const PainPoints: React.FC = () => {
  return (
    <section id="pain-points" className="py-20 px-4 bg-neu-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-neu-text">Stop the Manufacturing Chaos</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            If you're still using spreadsheets and manual processes, you're likely facing these common challenges. BuildQueue is designed to solve them.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <NeuCard key={index} className="p-6 flex flex-col">
              <div className="flex items-start gap-4">
                {point.icon}
                <div>
                  <h3 className="text-xl font-bold text-neu-text">{point.title}</h3>
                  <p className="text-gray-500 mt-2">{point.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-4">
                {point.solution_icon}
                <p className="font-semibold text-neu-text">Solution: {point.solution}</p>
              </div>
            </NeuCard>
          ))}
        </div>
      </div>
    </section>
  );
};