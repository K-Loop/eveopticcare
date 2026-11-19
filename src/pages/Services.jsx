import React from 'react';
import { Eye, Glasses, Disc, UserCheck, Wrench, ShieldCheck, Check, Clock, Calendar, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import CTABanner from '../components/CTABanner';

export default function Services({ lang = 'en', onOpenBookModal }) {
  return (
    <div className="pt-24 pb-20 bg-[#0A0A0A] text-[#F5F5F5]">
      
      {/* 1. Services Hero */}
      <section className="py-16 md:py-20 border-b border-[#1C1C1C] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F50914]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
              <span>Comprehensive Optical Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Clinical Optical Services in <span className="text-[#F50914]">West Mambalam</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              From advanced computerized visual acuity tests to high-precision progressive lens dispensing and ultrasonic frame rehabilitation — explore all our optical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Alternating Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-[#242424] shadow-2xl bg-[#141414] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-medium text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-semibold text-[#00D4FF]">
                    <span>Service 0{index + 1}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F50914]/15 text-[#F50914] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#D0D0D0]">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={onOpenBookModal}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F50914] hover:bg-[#D9000B] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Service</span>
                    </button>

                    <a
                      href={`https://wa.me/918870142706?text=Hi%20Eye%20Mate%20Optic%2C%20I%20have%20a%20question%20about%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#181818] hover:bg-[#222] border border-[#2a2a2a] text-[#C0C0C0] hover:text-white text-xs sm:text-sm transition-all"
                    >
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA Banner */}
      <CTABanner onOpenBookModal={onOpenBookModal} />
    </div>
  );
}
