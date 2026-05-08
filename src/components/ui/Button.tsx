import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out';
  
  const variants = {
    primary: 'bg-brand-primary text-brand-offwhite hover:bg-opacity-90 active:scale-95',
    secondary: 'bg-brand-terracotta text-brand-offwhite hover:bg-opacity-90 active:scale-95',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-offwhite active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`;

  const { target, rel, ...buttonProps } = props;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
};
