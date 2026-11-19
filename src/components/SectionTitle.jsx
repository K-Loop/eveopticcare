import React from 'react';

export default function SectionTitle({
  badge,
  titleStart,
  titleHighlight,
  titleEnd,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight mb-4">
        {titleStart}
        {titleHighlight && (
          <span className="text-[#F50914] relative inline-block">
            {titleHighlight}
          </span>
        )}
        {titleEnd}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
