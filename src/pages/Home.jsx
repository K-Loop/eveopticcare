import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Glasses,
  Eye,
  Award,
  Zap,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import ReviewSection from '../components/ReviewSection';
import CTABanner from '../components/CTABanner';

import { servicesData } from '../data/services';
import { products, collectionsHero } from '../data/products';
import { storeInfo } from '../data/navigation';
import { translations } from '../data/translations';

export default function Home({ lang = 'en', onOpenBookModal }) {
  const t = translations[lang];
  const [collectionIndex, setCollectionIndex] = useState(0);

  const prevCollection = () => {
    setCollectionIndex((prev) => (prev === 0 ? collectionsHero.length - 1 : prev - 1));
  };

  const nextCollection = () => {
    setCollectionIndex((prev) => (prev === collectionsHero.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#0A0A0A] overflow-hidden">
      {/* 1. HERO SECTION */}
      <Hero lang={lang} onOpenBookModal={onOpenBookModal} />

      {/* 2. SERVICES QUICK ACCESS BAR (5 Cards matching Reference) */}
      <section className="py-12 bg-[#0E0E0E] border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION (Matching Layout in Reference Image) */}
      <section className="py-20 md:py-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left: Optometrist Eye Exam Image with Red Accent Ribbon Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#262626] shadow-2xl bg-[#141414] group">
                
                {/* Red decorative curved edge accent matching mockup */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#F50914] -translate-x-12 -translate-y-12 rotate-45 pointer-events-none opacity-80" />

                <img
                  src="/assets/about/doctor-examination-clean.jpg"
                  alt="Doctor conducting modern eye test at Eye Mate Optic"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* Subtle caption pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-[#D5D5D5]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#55E64B] animate-pulse" />
                    <span>State-of-the-Art Phoropter & Autorefractor</span>
                  </span>
                  <span className="text-[#00D4FF] font-medium">West Mambalam</span>
                </div>
              </div>
            </div>

            {/* Right: Content & 4 Benefit Highlights */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
                <span>{t.about.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
                {t.about.headingStart}
                <span className="text-[#F50914]">{t.about.headingHighlight}</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-8">
                {t.about.desc}
              </p>

              {/* 4 Checklist Benefits with Red Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                {[
                  { text: t.about.b1, desc: "Certified & compassionate optometrists" },
                  { text: t.about.b2, desc: "Digital autorefractor computerized accuracy" },
                  { text: t.about.b3, desc: "1,200+ spectacle & sunglass frames" },
                  { text: t.about.b4, desc: "Direct lens manufacturing at fair rates" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#131313] border border-[#222222]">
                    <div className="w-6 h-6 rounded-full bg-[#F50914]/15 text-[#F50914] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.text}</div>
                      <div className="text-xs text-[#808080]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Know More CTA Button */}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181818] border border-[#2d2d2d] hover:border-[#F50914] hover:bg-[#F50914] text-white text-sm font-semibold transition-all duration-300 shadow-md group"
              >
                <span>{t.about.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT COLLECTIONS (With Horizontal Slider Controls) */}
      <section id="collections" className="py-20 md:py-28 bg-[#0D0D0D] border-t border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row with Navigation Arrows */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
                <span>{t.collections.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                {t.collections.headingStart}
                <span className="text-[#F50914]">{t.collections.headingHighlight}</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A0A0A0]">
                {t.collections.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-xs font-medium text-white hover:border-white/30 transition-colors"
              >
                <span>{t.collections.viewAll}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevCollection}
                  className="w-10 h-10 rounded-full bg-[#181818] border border-[#292929] hover:border-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Collection"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextCollection}
                  className="w-10 h-10 rounded-full bg-[#181818] border border-[#292929] hover:border-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Collection"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Core Collection Cards matching reference styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionsHero.map((item, index) => (
              <Link
                key={item.id}
                to={`/products?cat=${item.id}`}
                className="group relative rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#383838] p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Image Canvas with custom background tint */}
                <div className={`relative h-48 rounded-2xl overflow-hidden flex items-center justify-center p-4 bg-gradient-to-br ${item.bgTint} mb-5`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-black/60 text-white border border-white/10">
                    {item.count}
                  </div>
                </div>

                {/* Bottom title row with circle arrow button */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#F50914] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#808080] line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#202020] group-hover:bg-[#F50914] text-white flex items-center justify-center shrink-0 ml-2 transition-all duration-300 group-hover:scale-105 shadow-md">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REAL CUSTOMER REVIEWS (Google 4.9/5) */}
      <ReviewSection lang={lang} />

      {/* 7. CTA BANNER (Red Gradient Banner matching Reference) */}
      <CTABanner onOpenBookModal={onOpenBookModal} />

      {/* 8. STORE CONTACT & MAPS SECTION */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
                  <span>West Mambalam Store</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                  {storeInfo.name}
                </h2>
                <p className="text-sm text-[#A0A0A0]">
                  Conveniently situated right near the West Mambalam Railway Station.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#141414] border border-[#242424]">
                  <MapPin className="w-5 h-5 text-[#F50914] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      Exact Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                      {storeInfo.address}
                    </p>
                    <span className="text-xs text-[#00D4FF] mt-1 inline-block">
                      Landmark: {storeInfo.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#141414] border border-[#242424]">
                  <Phone className="w-5 h-5 text-[#F50914] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      Direct Store Phone
                    </h4>
                    <a href={`tel:${storeInfo.phoneRaw}`} className="text-sm font-semibold text-white hover:text-[#F50914] transition-colors">
                      {storeInfo.phone}
                    </a>
                    <p className="text-xs text-[#808080] mt-0.5">Calls & WhatsApp inquiries welcome</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#141414] border border-[#242424]">
                  <Clock className="w-5 h-5 text-[#F50914] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      Working Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C0C0C0]">
                      {storeInfo.hours}
                    </p>
                    <p className="text-xs text-[#55E64B] mt-0.5 font-medium">Open All 7 Days</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={storeInfo.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#F50914] hover:bg-[#D9000B] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Google Maps Directions</span>
                </a>

                <a
                  href={`tel:${storeInfo.phoneRaw}`}
                  className="px-6 py-3 rounded-full bg-[#181818] border border-[#2c2c2c] hover:border-white/40 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00D4FF]" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Google Maps Iframe */}
            <div className="lg:col-span-7 h-96 lg:h-[450px] rounded-3xl overflow-hidden border border-[#262626] shadow-2xl relative bg-[#151515]">
              <iframe
                title="Eye Mate Optic Location Map"
                src="https://maps.google.com/maps?q=Eye%20Mate%20Optic%2C%2031%2F4%2C%20Station%20Road%2C%20West%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
