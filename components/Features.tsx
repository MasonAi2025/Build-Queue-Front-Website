import React from 'react';
import { NeuCard } from './NeuCard';
import { Layers, GanttChartSquare, PackageSearch, FileCheck, Users, Box, BarChart3, Network, ShieldCheck, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Digital Inventory Tracking",
      desc: "Real-time tracking of materials, batches, and stock levels. Prevents stockouts and reduces waste.",
      benefit: "Benefit: Never run out of critical materials again.",
      icon: <PackageSearch size={32} className="text-neu-purple" />
    },
    {
      title: "Production Workflow Builder",
      desc: "Visually create and customize production workflows to match your unique processes.",
      benefit: "Benefit: Eliminate manual scheduling and production bottlenecks.",
      icon: <GanttChartSquare size={32} className="text-neu-teal" />
    },
    {
      title: "Batch & Material Traceability",
      desc: "Generate a complete digital passport for every part, from raw material to final shipment.",
      benefit: "Benefit: Handle compliance and recalls with ease and confidence.",
      icon: <FileCheck size={32} className="text-neu-purple" />
    },
    {
      title: "Reporting & Analytics",
      desc: "Customizable dashboards and reports for KPIs, machine utilization, and overall production efficiency.",
      benefit: "Benefit: Make data-driven decisions to improve your bottom line.",
      icon: <BarChart3 size={32} className="text-neu-teal" />
    },
    {
      title: "Multi-Site Support",
      desc: "Manage and monitor production activities across multiple physical locations from a single, unified platform.",
      benefit: "Benefit: Gain centralized control and visibility over your entire operation.",
      icon: <Network size={32} className="text-neu-purple" />
    },
    {
      title: "User Access Control & Audit Trail",
      desc: "Assign roles and permissions to users, and maintain a complete audit trail of all actions taken in the system.",
      benefit: "Benefit: Enhance security, accountability, and compliance.",
      icon: <Users size={32} className="text-neu-teal" />
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-neu-base relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-neu-purple/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-4">Core Platform Capabilities</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
                BuildQueue provides a comprehensive toolset to manage your manufacturing operations from end to end. Here's what makes our platform powerful, yet easy to use.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
                <NeuCard key={idx} className="p-8 hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-neu-base shadow-neu-btn flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neu-text mb-3 group-hover:text-neu-purple transition-colors">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{feature.desc}</p>
                    <p className="text-neu-teal text-sm font-semibold mt-4">{feature.benefit}</p>
                </NeuCard>
            ))}
        </div>
      </div>
    </section>
  );
};