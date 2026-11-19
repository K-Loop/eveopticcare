import React from 'react';
import { Eye, ShieldCheck, Heart, Sparkles, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { storeInfo } from '../data/navigation';
import CTABanner from '../components/CTABanner';

export default function About({ lang = 'en', onOpenBookModal }) {
  return (
    <div className="pt-24 pb-16 bg-[#0A0A0A] text-[#F5F5F5]">
      
      {/* 1. About Hero */}
      <section className="relative py-16 md:py-24 border-b border-[#1c1c1c] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F50914]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
              <span>Our Story & Vision</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Crafting Clearer Vision in <span className="text-[#F50914]">West Mambalam</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              Eye Mate Optic was founded with a singular conviction: premium optical diagnostics and world-class designer eyewear should be welcoming, accessible, and uncompromisingly precise for every family in Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visual Story Showcase */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Store Photography Collage */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="rounded-3xl overflow-hidden border border-[#242424] shadow-xl">
                <img
                  src="/assets/about/store-interior.jpg"
                  alt="Eye Mate Optic Boutique Showroom"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-[#242424] shadow-xl mt-8">
                <img
                  src="/assets/about/doctor-examination-clean.jpg"
                  alt="Precision Computerised Eye Testing Bay"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-black/90 backdrop-blur-md border border-[#F50914]/40 text-xs text-white font-medium shadow-2xl flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-[#FFD600]" />
                <span>Over 10,000+ Precision Prescriptions Dispensed</span>
              </div>
            </div>

            {/* Editorial Philosophy */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                "See Better. Look Smarter." <br />
                <span className="text-sm font-normal text-[#8a8a8a] block mt-1">Is more than our slogan — it's our clinical standard.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                Located right at 31/4 Station Road, West Mambalam, Eye Mate Optic combines hospital-grade optometry instruments with a fashion boutique atmosphere.
              </p>

              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                Whether you are an IT professional suffering from screen fatigue in T. Nagar, a student preparing for competitive exams, or a senior seeking effortless progressive lenses, our optometry team dedicates 20–30 minutes to understand your visual habits before recommending a lens profile.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222]">
                  <div className="text-2xl font-bold text-[#F50914] mb-1">4.9 ★</div>
                  <div className="text-xs text-[#A0A0A0]">496+ Verified Google Reviews</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#141414] border border-[#222]">
                  <div className="text-2xl font-bold text-[#00D4FF] mb-1">1,200+</div>
                  <div className="text-xs text-[#A0A0A0]">Eyewear Frames on Display</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Brand Values */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Core Commitments</h2>
            <p className="text-sm text-[#A0A0A0]">The pillars that make Eye Mate Optic Chennai's beloved optical store.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#131313] border border-[#222222] hover:border-[#F50914]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#F50914]/15 text-[#F50914] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Clinical Precision</h3>
              <p className="text-sm text-[#8a8a8a] leading-relaxed">
                Zero guesswork. We pair high-speed digital autorefractometers with subjective cross-cylinder fine tuning to eliminate head strain and optical distortion.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#131313] border border-[#222222] hover:border-[#00D4FF]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#00D4FF]/15 text-[#00D4FF] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Aesthetic Balance</h3>
              <p className="text-sm text-[#8a8a8a] leading-relaxed">
                Spectacles are the most prominent accessory on your face. We help you choose frame shapes and colors that complement your bone structure and personal aesthetic.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#131313] border border-[#222222] hover:border-[#FFD600]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD600]/15 text-[#FFD600] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Lifetime Frame Care</h3>
              <p className="text-sm text-[#8a8a8a] leading-relaxed">
                Every frame purchased comes with complimentary lifetime adjustments, ultrasonic cleaning, and screw tightening whenever you walk through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner onOpenBookModal={onOpenBookModal} />
    </div>
  );
}
