import React from 'react';

interface NeuCardProps {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
}

export const NeuCard: React.FC<NeuCardProps> = ({ children, className = '', inset = false }) => {
  return (
    <div className={`bg-neu-base rounded-[2rem] ${inset ? 'shadow-neu-in' : 'shadow-neu-out'} ${className}`}>
      {children}
    </div>
  );
};