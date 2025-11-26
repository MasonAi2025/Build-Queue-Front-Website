import React from 'react';

export const BrandLogo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5641A5" />
          <stop offset="100%" stopColor="#05B0C9" />
        </linearGradient>
      </defs>
      
      {/* Abstract geometric layers representing the queue/funnel */}
      <path 
        d="M50 20 L80 40 L50 60 L20 40 L50 20Z" 
        stroke="url(#brandGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="opacity-100"
      />
      <path 
        d="M50 35 L70 48 L50 61 L30 48 L50 35Z" 
        stroke="url(#brandGradient)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="opacity-80"
      />
      
      <path 
        d="M50 50 L60 56 L50 62 L40 56 L50 50Z" 
        stroke="url(#brandGradient)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="opacity-60"
      />

      {/* Connection Line */}
      <line x1="50" y1="62" x2="50" y2="72" stroke="url(#brandGradient)" strokeWidth="4" />

      {/* Cube at the bottom */}
      <path 
        d="M50 72 L62 78 V88 L50 94 L38 88 V78 L50 72Z" 
        fill="url(#brandGradient)" 
      />
      <path 
        d="M50 72 L50 84 M50 94 L50 84 M50 84 L62 78 M50 84 L38 78" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
};