import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-neu-base border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-xl bg-neu-base shadow-neu-btn flex items-center justify-center">
              <BrandLogo size={24} />
           </div>
           <span className="text-xl font-extrabold text-neu-text">BuildQueue Ltd</span>
        </div>

        <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BuildQueue Ltd. All rights reserved.
        </p>

        <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-gray-500 hover:text-neu-purple transition-colors">
                <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-gray-500 hover:text-neu-teal transition-colors">
                <Twitter size={18} />
            </a>
             <a href="#" className="w-10 h-10 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-gray-500 hover:text-neu-purple transition-colors">
                <Github size={18} />
            </a>
        </div>
      </div>
    </footer>
  );
};