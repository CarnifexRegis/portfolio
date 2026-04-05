import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md hover:-translate-y-0.5',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary-hover hover:text-white hover:border-primary-hover',
    ghost: 'text-text hover:bg-surface hover:text-primary-hover',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
