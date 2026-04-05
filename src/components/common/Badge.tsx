import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
}

export const Badge = ({ children, className = '', variant = 'default' }: BadgeProps) => {
  const variantStyles = {
    default: 'bg-primary-soft text-white border-border/30',
    outline: 'bg-transparent text-text/70 border-primary/20',
    secondary: 'bg-bg-secondary text-text/60 border-primary/10'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
