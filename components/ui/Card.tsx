import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'light',
  className = '' 
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 ease-in-out h-full flex flex-col';
  
  const variantStyles = {
    light: 'bg-white shadow-md hover:shadow-xl',
    dark: 'bg-[var(--color-deep-sapphire)] shadow-lg hover:shadow-2xl'
  };
  
  const paddingStyles = 'p-8';
  
  const hoverStyles = 'hover:border-[var(--color-courage-gold)] hover:scale-[1.03] hover:-translate-y-1';
  
  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles} ${hoverStyles} border border-transparent ${className}`}
    >
      {children}
    </div>
  );
};

