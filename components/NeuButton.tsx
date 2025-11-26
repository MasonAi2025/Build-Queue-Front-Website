import React from 'react';

interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
}

export const NeuButton: React.FC<NeuButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "transition-all duration-200 ease-in-out font-bold outline-none active:scale-[0.98]";
  
  const variants = {
    // Primary: Uses brand purple for text to stand out against the light neu background
    primary: "px-8 py-3 rounded-full bg-neu-base text-neu-purple shadow-neu-btn hover:text-neu-teal active:shadow-neu-btn-active",
    // Secondary: Dark grey text
    secondary: "px-6 py-2 rounded-xl bg-neu-base text-neu-text shadow-neu-btn hover:text-neu-purple active:shadow-neu-btn-active",
    // Icon: Centered
    icon: "w-12 h-12 rounded-full flex items-center justify-center bg-neu-base text-neu-text shadow-neu-btn active:shadow-neu-btn-active hover:text-neu-purple",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};