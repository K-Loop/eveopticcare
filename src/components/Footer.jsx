import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { storeInfo } from '../data/navigation';
import { translations } from '../data/translations';

// High-fidelity social icons
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer({ lang = 'en' }) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] text-[#A0A0A0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1b1b1b]">
          
          {/* Col 1: Brand Info & Tagline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-[#F50914] font-semibold tracking-widest uppercase">
              {t.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#8a8a8a] leading-relaxed max-w-sm">
              {t.desc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={storeInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-[#F50914] hover:bg-[#F50914]/15 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={storeInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-[#F50914] hover:bg-[#F50914]/15 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={storeInfo.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-[#F50914] hover:bg-[#F50914]/15 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href={storeInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#151515] border border-[#262626] flex items-center justify-center text-[#A0A0A0] hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/15 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Eyewear Collections
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.ourServices}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services#computerised-eye-test" className="hover:text-white transition-colors">
                  Computerised Eye Testing
                </Link>
              </li>
              <li>
                <Link to="/services#premium-frames" className="hover:text-white transition-colors">
                  Spectacle Frames
                </Link>
              </li>
              <li>
                <Link to="/services#contact-lenses" className="hover:text-white transition-colors">
                  Contact Lenses & Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#expert-consultation" className="hover:text-white transition-colors">
                  Optometrist Consultation
                </Link>
              </li>
              <li>
                <Link to="/services#lens-care-repairs" className="hover:text-white transition-colors">
                  Frame Alignment & Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Contact & Silhouette Artwork */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.contactInfo}
            </h4>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#F50914] shrink-0 mt-0.5" />
              <a href={`tel:${storeInfo.phoneRaw}`} className="hover:text-white font-medium text-white transition-colors">
                {storeInfo.phone}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#F50914] shrink-0 mt-0.5" />
              <a
                href={storeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-xs leading-relaxed"
              >
                {storeInfo.address}
              </a>
            </div>

            {/* AI-Generated Luxury Eyewear Artwork & Handwritten Tagline */}
            <div className="pt-3 flex flex-col items-start">
              <div className="relative w-48 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[#F50914]/15 blur-xl pointer-events-none" />
                <img
                  src="/assets/hero/footer-glasses-clean.jpg"
                  alt="Eye Mate Optic Luxury Eyewear"
                  className="w-full h-24 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    maskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 55%, transparent 98%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 50% 50%, black 55%, transparent 98%)',
                  }}
                />
              </div>
              <div
                className="mt-1 text-xl text-white/90 tracking-wide pl-1"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                See the Difference...
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#F50914] to-transparent rounded-full mt-0.5 ml-1 shadow-[0_0_8px_#F50914]" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707070]">
          <div>
            © 2026 Eye Mate Optic. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Eye Mate Optic respects your personal privacy. We do not sell or distribute customer information."); }} className="hover:text-[#A0A0A0] transition-colors">
              {t.privacy}
            </a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms & Conditions: Standard optical warranty applies to prescription eyewear as per manufacturer specifications."); }} className="hover:text-[#A0A0A0] transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
