import React from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onQuickView }) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#383838] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.7)] overflow-hidden">
      {/* Product Image Stage with custom ambient background tint */}
      <div className={`relative h-56 sm:h-60 w-full overflow-hidden flex items-center justify-center p-6 bg-gradient-to-b ${product.cardBg || 'from-[#1c1c1c] to-[#121212]'}`}>
        
        {/* Subtle radial ambient highlight */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${product.accentColor || '#F50914'} 0%, transparent 70%)`
          }}
        />

        {/* Badge if present */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold tracking-wider text-white uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.accentColor || '#F50914' }} />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Quick View Button on hover */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-[#F50914] hover:border-[#F50914] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
            title="Quick Preview"
          >
            <Eye className="w-4 h-4" />
          </button>
        )}

        {/* Product image with smooth zoom */}
        <img
          src={product.image}
          alt={product.name}
          className="relative max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-108"
          loading="lazy"
        />
      </div>

      {/* Info Container */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-[#141414]">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs uppercase tracking-wider text-[#A0A0A0] font-medium">
              {product.category}
            </span>
            {product.shape && (
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#1e1e1e] text-[#A0A0A0] border border-[#2a2a2a]">
                {product.shape}
              </span>
            )}
          </div>

          <h3 className="text-base font-semibold text-[#F5F5F5] group-hover:text-[#F50914] transition-colors duration-200 line-clamp-1 mb-2">
            {product.name}
          </h3>

          <p className="text-xs text-[#8c8c8c] line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Bottom action row with circular arrow button matching UI reference */}
        <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
          <span className="text-xs text-[#A0A0A0] font-mono">
            {product.material || 'Premium Optical'}
          </span>

          <Link
            to="/contact?inquiry=frame"
            className="w-8 h-8 rounded-full bg-[#202020] group-hover:bg-[#F50914] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md"
            title="Inquire in Store"
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
