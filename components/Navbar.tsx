
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NeuButton } from './NeuButton';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Blog', href: '#blog' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // A small delay is needed to allow the page to change and render
    }
  };

  return (
    <nav className="fixed w-full z-50 px-4 py-4 md:px-8 bg-neu-base/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
           <div className="w-12 h-12 rounded-xl bg-neu-base shadow-neu-btn flex items-center justify-center transition-transform group-hover:scale-105">
              <BrandLogo size={32} />
           </div>
           <span className="text-2xl font-extrabold text-neu-text tracking-tight group-hover:text-neu-purple transition-colors">BuildQueue</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href.substring(1))}
              className="text-neu-text font-bold hover:text-neu-purple transition-colors"
            >
              {link.name}
            </button>
          ))}
          <NeuButton onClick={() => handleNavClick('contact')} variant="primary" className="text-sm">
            Integration Quote
          </NeuButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <NeuButton variant="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-neu-purple" /> : <Menu size={24} className="text-neu-purple" />}
          </NeuButton>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neu-base shadow-neu-out p-6 flex flex-col gap-4 md:hidden animate-fade-in-down border-t border-white/50">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href.substring(1))}
              className="text-left py-3 px-4 rounded-xl shadow-neu-btn text-neu-text font-semibold active:shadow-neu-btn-active active:text-neu-purple"
            >
              {link.name}
            </button>
          ))}
          <NeuButton onClick={() => handleNavClick('contact')} className="w-full mt-2">
            Request Quote
          </NeuButton>
        </div>
      )}
    </nav>
  );
};
