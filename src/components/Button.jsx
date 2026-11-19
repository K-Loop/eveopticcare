import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer select-none group focus:outline-none';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#F50914] text-white hover:bg-[#D9000B] active:scale-[0.98] shadow-[0_4px_20px_rgba(245,9,20,0.35)] hover:shadow-[0_6px_28px_rgba(245,9,20,0.5)] border border-transparent',
    secondary:
      'bg-[#181818] text-[#F5F5F5] hover:bg-[#222222] border border-[#292929] hover:border-[#444444] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#F5F5F5] border border-[#333333] hover:border-[#F50914] hover:text-white hover:bg-[#F50914]/10 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#A0A0A0] hover:text-white hover:bg-white/5',
  };

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {content}
    </button>
  );
}
