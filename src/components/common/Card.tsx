import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export const Card = ({ children, className = '', hover = true, noPadding = false }: CardProps) => {
  return (
    <div className={`
      bg-surface border border-border rounded-2xl 
      ${noPadding ? '' : 'p-6 md:p-8'} 
      ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};
