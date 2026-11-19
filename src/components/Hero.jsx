import React, { useEffect, useRef } from 'react';
import { Calendar, Glasses, Star, Users, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { translations } from '../data/translations';

export default function Hero({ lang = 'en', onOpenBookModal }) {
  const t = translations[lang].hero;
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Gentle floating motion on the hero eyewear visual
    if (visualRef.current) {
      const anim = gsap.to(visualRef.current, {
        y: -8,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      return () => anim.kill();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-24 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Tasteful Cinematic Neon Ambient Glows */}
      <div className="absolute top-[15%] right-[8%] w-[520px] h-[520px] bg-[#F50914]/18 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[22%] w-[360px] h-[360px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[5%] w-[320px] h-[320px] bg-[#F50914]/6 rounded-full blur-[130px] pointer-events-none" />

      {/* Glowing Crimson Neon Diagonal Streak behind the Sunglasses (matching reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 860" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="neon-red-beam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F50914" stopOpacity="0" />
              <stop offset="35%" stopColor="#F50914" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FF1E2D" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F50914" stopOpacity="0" />
            </linearGradient>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur1" />
              <feGaussianBlur stdDeviation="24" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Thick soft outer neon glow */}
          <path
            d="M 1090 -60 C 980 140, 880 340, 810 560"
            stroke="#F50914"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.35"
            filter="url(#neon-glow)"
          />
          {/* Crisp core crimson beam */}
          <path
            d="M 1090 -60 C 980 140, 880 340, 810 560"
            stroke="url(#neon-red-beam)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#neon-glow)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Hero Content (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D0D0D0] uppercase">
                {t.eyebrow}
              </span>
              <span className="w-10 h-0.5 bg-[#F50914] rounded-full shadow-[0_0_10px_#F50914]" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-3"
            >
              {t.titleStart}
              <span className="text-[#F50914] relative inline-block drop-shadow-[0_0_24px_rgba(245,9,20,0.45)]">
                {t.titleEnd}
              </span>
            </motion.h1>

            {/* Supporting Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-medium text-[#E5E5E5] mb-3"
            >
              {t.subtitle}
            </motion.h2>

            {/* Features line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm text-[#A0A0A0] tracking-wide mb-8"
            >
              {t.features}
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                onClick={onOpenBookModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F50914] text-white font-semibold text-sm hover:bg-[#D9000B] active:scale-95 shadow-[0_0_28px_rgba(245,9,20,0.55)] hover:shadow-[0_0_38px_rgba(245,9,20,0.75)] transition-all duration-300 cursor-pointer group"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#collections"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#141414]/80 backdrop-blur-sm border border-[#2d2d2d] hover:border-[#F50914]/60 text-[#E5E5E5] hover:text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,9,20,0.2)] active:scale-95 cursor-pointer"
              >
                <Glasses className="w-4 h-4 text-[#00D4FF]" />
                <span>{t.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Three Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-[#1e1e1e] w-full grid grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFD600]/15 flex items-center justify-center text-[#FFD600] shrink-0 shadow-[0_0_12px_rgba(255,214,0,0.2)]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">4.9/5</div>
                  <div className="text-[11px] text-[#8e8e8e]">{t.statRating}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F50914]/15 flex items-center justify-center text-[#F50914] shrink-0 shadow-[0_0_12px_rgba(245,9,20,0.25)]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">500+</div>
                  <div className="text-[11px] text-[#8e8e8e]">{t.statCustomers}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#00D4FF]/15 flex items-center justify-center text-[#00D4FF] shrink-0 shadow-[0_0_12px_rgba(0,212,255,0.2)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">West Mambalam</div>
                  <div className="text-[11px] text-[#8e8e8e]">Chennai – 600033</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visual — Seamless Dark Studio Blend with Rainbow Lenses & Neon Glow (6 cols on lg) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div ref={visualRef} className="relative w-full max-w-2xl select-none">
              
              {/* Subtle Neon Red & Rainbow Rim Halo Behind Eyewear */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#F50914]/25 via-[#00D4FF]/12 to-[#FF00C8]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-6 bottom-8 w-44 h-28 bg-[#F50914]/35 rounded-full blur-2xl pointer-events-none" />

              {/* Seamless Blended AI-Generated Rainbow Sunglasses on Black Leather */}
              <div className="relative w-full overflow-hidden">
                <img
                  src="/assets/hero/hero-rainbow-clean.jpg"
                  alt="Eye Mate Optic Luxury Rainbow Reflective Sunglasses on Leather Case"
                  className="w-full h-auto object-cover scale-[1.03] filter contrast-110 saturate-115"
                  style={{
                    maskImage: 'radial-gradient(ellipse 84% 80% at 52% 50%, black 52%, transparent 98%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 84% 80% at 52% 50%, black 52%, transparent 98%)',
                  }}
                />

                {/* Edge Vignette to blend cleanly into #0A0A0A */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 78% 75% at 52% 48%, transparent 50%, #0A0A0A 100%)',
                  }}
                />

                {/* Handwritten "Vision Beyond Style" Script Overlay matching Reference */}
                <div className="absolute bottom-5 right-6 sm:bottom-8 sm:right-10 text-right pointer-events-none">
                  <div
                    className="text-2xl sm:text-3xl font-semibold text-white/95 leading-none tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    Vision
                    <br />
                    Beyond Style
                  </div>
                  <div className="mt-1 ml-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD600] to-[#F50914] rounded-full shadow-[0_0_8px_#FFD600]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
