import React from 'react';
import { Eye, Glasses, Disc, UserCheck, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Eye: Eye,
  Glasses: Glasses,
  Disc: Disc,
  UserCheck: UserCheck,
  Wrench: Wrench,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.icon] || Eye;

  return (
    <Link
      to={`/services#${service.id}`}
      className="group relative flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#242424] hover:border-[#F50914]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden"
    >
      {/* Top red glow accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon with red circle hover */}
      <div className="w-14 h-14 rounded-full bg-[#1e1e1e] border border-[#2d2d2d] group-hover:border-[#F50914]/40 flex items-center justify-center text-[#F50914] mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F50914]/10">
        <IconComponent className="w-7 h-7 stroke-[1.75]" />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors duration-200 mb-2">
        {service.title}
      </h3>

      {/* Short Description */}
      <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed line-clamp-2">
        {service.shortDesc}
      </p>

      {/* Subtle arrow indicator */}
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#A0A0A0] group-hover:text-[#F50914] transition-colors duration-200">
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
