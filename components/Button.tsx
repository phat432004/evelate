import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-sunset text-white shadow-lg shadow-orange-200/50 hover:opacity-90",
    secondary: "bg-white text-[#1A3154] border border-brand-border hover:bg-slate-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
    ghost: "text-[#6F7F9D] hover:text-brand-orange bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};