import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Animations & Helpers
import { initSmoothScroll } from './animations/smoothScroll';

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';
import AppointmentModal from './components/AppointmentModal';
import QuickSearchModal from './components/QuickSearchModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const location = useLocation();

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col relative selection:bg-[#F50914] selection:text-white">
      {/* 1. Preloader Animation */}
      <Preloader />

      {/* 2. Custom Desktop Cursor */}
      <CustomCursor />

      {/* 3. Global Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenBookModal={() => setIsBookModalOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* 4. Main Page View Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                lang={lang}
                onOpenBookModal={() => setIsBookModalOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                lang={lang}
                onOpenBookModal={() => setIsBookModalOpen(true)}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                lang={lang}
                onOpenBookModal={() => setIsBookModalOpen(true)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                lang={lang}
                onOpenBookModal={() => setIsBookModalOpen(true)}
              />
            }
          />
          <Route
            path="/gallery"
            element={<Gallery lang={lang} />}
          />
          <Route
            path="/contact"
            element={<Contact lang={lang} />}
          />
          <Route
            path="*"
            element={
              <Home
                lang={lang}
                onOpenBookModal={() => setIsBookModalOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* 5. Global Footer */}
      <Footer lang={lang} />

      {/* 6. Floating Action Buttons */}
      <ScrollToTop />
      <FloatingWhatsApp />

      {/* 7. Global Modals */}
      <AppointmentModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
      <QuickSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </div>
  );
}
