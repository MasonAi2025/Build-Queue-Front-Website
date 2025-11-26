import React from 'react';
import { NeuCard } from './NeuCard';
import { Layers, CalendarClock, PackageSearch, FileCheck, Users, Box } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Comprehensive Dashboard",
      desc: "Personalized widget-based overview displaying KPIs, active orders, and low stock alerts instantly.",
      icon: <Layers size={32} className="text-neu-purple" />
    },
    {
      title: "Smart Scheduler",
      desc: "Optimize machine utilization by assigning orders to specific machines, handling maintenance & conflicts.",
      icon: <CalendarClock size={32} className="text-neu-teal" />
    },
    {
      title: "Digital Product Library",
      desc: "Maintain a catalog of qualified designs, 3D models, and designated production routes in one place.",
      icon: <PackageSearch size={32} className="text-neu-purple" />
    },
    {
      title: "Quality Control Templates",
      desc: "Create standardized checkpoint templates with tolerances and reference drawings for every stage.",
      icon: <FileCheck size={32} className="text-neu-teal" />
    },
    {
      title: "Role-Based Access",
      desc: "Distinct views for Management (planning & oversight) and Production (task execution & tracking).",
      icon: <Users size={32} className="text-neu-purple" />
    },
    {
      title: "Material Inventory",
      desc: "Track batches, expiry dates, and real-time stock levels for all your raw materials and filaments.",
      icon: <Box size={32} className="text-neu-teal" />
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-neu-base relative overflow-hidden">
      {/* Decorative gradient background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-neu-purple/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-4">Platform Capabilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Built for the unique needs of additive manufacturing and job shops. 
                From quote to delivery, BuildQueue manages the entire lifecycle.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
                <NeuCard key={idx} className="p-8 hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="w-16 h-16 rounded-2xl bg-neu-base shadow-neu-btn flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neu-text mb-3 group-hover:text-neu-purple transition-colors">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </NeuCard>
            ))}
        </div>
      </div>
    </section>
  );
};