import React from 'react';

interface NeuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const NeuInput: React.FC<NeuInputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex justify-between items-center ml-2">
        <label className="text-sm font-bold text-neu-text">{label}</label>
      </div>
      <input
        className={`w-full bg-neu-base rounded-xl px-4 py-3 outline-none text-neu-text placeholder-gray-400 shadow-neu-in transition-all ${
          error 
            ? 'ring-2 ring-red-400/50' 
            : 'focus:ring-2 focus:ring-neu-accent/20'
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-bold ml-2 animate-fade-in-down">
          {error}
        </span>
      )}
    </div>
  );
};

interface NeuTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const NeuTextArea: React.FC<NeuTextAreaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex justify-between items-center ml-2">
        <label className="text-sm font-bold text-neu-text">{label}</label>
      </div>
      <textarea
        className={`w-full bg-neu-base rounded-xl px-4 py-3 outline-none text-neu-text placeholder-gray-400 shadow-neu-in transition-all ${
          error 
            ? 'ring-2 ring-red-400/50' 
            : 'focus:ring-2 focus:ring-neu-accent/20'
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-bold ml-2 animate-fade-in-down">
          {error}
        </span>
      )}
    </div>
  );
};