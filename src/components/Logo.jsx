import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', className = '', showText = true }) {
  // Sizes: sm, md, lg
  const sizeClasses = {
    sm: 'h-11 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-95 ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* User uploaded exact logo with rainbow spectacles */}
        <img 
          src="/assets/logo/logo.png" 
          alt="Eye Mate Optic Logo" 
          className={`${sizeClasses[size]} w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(245,9,20,0.25)]`}
        />
      </div>
    </Link>
  );
}
