import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Globe, Calendar, Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo';
import { navLinks, storeInfo } from '../data/navigation';
import { translations } from '../data/translations';

export default function Navbar({ lang = 'en', setLang, onOpenBookModal, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ta' : 'en');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#202020] py-2.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Logo size={scrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#C0C0C0] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t.home}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#C0C0C0] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t.about}
            </NavLink>

            {/* Products with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-[#C0C0C0] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span>{t.products}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </NavLink>

              {/* Dropdown Menu */}
              {productsDropdown && (
                <div className="absolute top-full left-0 w-56 pt-2 z-50">
                  <div className="p-2 rounded-2xl bg-[#141414] border border-[#2a2a2a] shadow-2xl backdrop-blur-xl space-y-0.5">
                    <Link
                      to="/products?cat=prescription"
                      className="block px-3 py-2 rounded-xl text-xs text-[#D0D0D0] hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Prescription Glasses
                    </Link>
                    <Link
                      to="/products?cat=sunglasses"
                      className="block px-3 py-2 rounded-xl text-xs text-[#D0D0D0] hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Designer Sunglasses
                    </Link>
                    <Link
                      to="/products?cat=blue-light"
                      className="block px-3 py-2 rounded-xl text-xs text-[#D0D0D0] hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Blue Light Glasses
                    </Link>
                    <Link
                      to="/products?cat=men"
                      className="block px-3 py-2 rounded-xl text-xs text-[#D0D0D0] hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Men's Frames
                    </Link>
                    <Link
                      to="/products?cat=women"
                      className="block px-3 py-2 rounded-xl text-xs text-[#D0D0D0] hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Women's Frames
                    </Link>
                    <Link
                      to="/products?cat=kids"
                      className="block px-3 py-2 rounded-xl text-xs text-[#D0D0D0] hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Kids' Eyewear
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#C0C0C0] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t.services}
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#C0C0C0] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t.gallery}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#C0C0C0] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {t.contact}
            </NavLink>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Search Icon Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 rounded-full text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {/* Language Switcher Button (English / தமிழ்) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#181818] border border-[#2a2a2a] text-xs font-medium text-[#D0D0D0] hover:text-white hover:border-[#444] transition-all cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Primary Action Button: Book Eye Test */}
            <button
              onClick={onOpenBookModal}
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#F50914] text-white text-xs xl:text-sm font-semibold hover:bg-[#D9000B] active:scale-95 shadow-[0_4px_18px_rgba(245,9,20,0.4)] transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.bookTest}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-35 lg:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col pt-20 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col space-y-4 text-base font-semibold border-b border-[#202020] pb-6">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#E5E5E5] hover:text-[#F50914] transition-colors"
            >
              {t.home}
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#E5E5E5] hover:text-[#F50914] transition-colors"
            >
              {t.about}
            </Link>
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#E5E5E5] hover:text-[#F50914] transition-colors"
            >
              {t.products}
            </Link>
            <div className="pl-4 space-y-2 border-l border-[#242424] text-sm font-normal text-[#A0A0A0]">
              <Link to="/products?cat=prescription" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                • Prescription Glasses
              </Link>
              <Link to="/products?cat=sunglasses" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                • Designer Sunglasses
              </Link>
              <Link to="/products?cat=blue-light" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                • Blue Light Glasses
              </Link>
              <Link to="/products?cat=kids" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white">
                • Kids' Eyewear
              </Link>
            </div>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#E5E5E5] hover:text-[#F50914] transition-colors"
            >
              {t.services}
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#E5E5E5] hover:text-[#F50914] transition-colors"
            >
              {t.gallery}
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#E5E5E5] hover:text-[#F50914] transition-colors"
            >
              {t.contact}
            </Link>
          </div>

          {/* Mobile Bottom Quick Actions */}
          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookModal();
              }}
              className="w-full py-3.5 rounded-full bg-[#F50914] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookTest}</span>
            </button>

            <a
              href={`tel:${storeInfo.phoneRaw}`}
              className="w-full py-3 rounded-full bg-[#181818] border border-[#2a2a2a] text-[#E0E0E0] font-medium text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00D4FF]" />
              <span>Call Store: +91 88701 42706</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
