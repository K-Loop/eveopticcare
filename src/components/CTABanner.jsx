import React from 'react';
import { ArrowRight, Glasses, Calendar } from 'lucide-react';

export default function CTABanner({ onOpenBookModal }) {
  return (
    <section className="py-12 md:py-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-14 bg-gradient-to-r from-[#D9000B] via-[#F50914] to-[#B30009] shadow-[0_20px_50px_rgba(245,9,20,0.35)] flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Decorative Eyeglasses Watermark */}
          <div className="absolute -left-12 -bottom-10 opacity-15 pointer-events-none text-white select-none">
            <Glasses className="w-80 h-80 stroke-[0.75]" />
          </div>

          {/* Left Text */}
          <div className="relative z-10 max-w-xl text-center md:text-left flex items-center md:items-start gap-5 flex-col md:flex-row">
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md items-center justify-center text-white shrink-0">
              <Glasses className="w-9 h-9" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                Book Your Eye Test Today!
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                Take the first step towards better vision with West Mambalam's trusted optometrists.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenBookModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0A0A0A] font-bold text-sm sm:text-base shadow-xl hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F50914]" />
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
