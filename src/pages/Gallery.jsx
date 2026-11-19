import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    title: "Signature Rainbow Sunglasses",
    category: "Eyewear",
    src: "/assets/hero/hero-rainbow-clean.jpg",
    alt: "Luxury rainbow mirror reflective sunglasses on black textured leather",
    aspect: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 2,
    title: "Digital Optical Eye Examination",
    category: "Clinical",
    src: "/assets/about/doctor-examination-clean.jpg",
    alt: "Optometrist testing patient with precision trial frames",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 3,
    title: "Eye Mate Boutique Showroom",
    category: "Showroom",
    src: "/assets/about/store-interior.jpg",
    alt: "Illuminated eyewear display showroom in West Mambalam",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "Classic Prescription Spectacles",
    category: "Collections",
    src: "/assets/products/prescription-studio.jpg",
    alt: "Classic black acetate prescription spectacles",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 5,
    title: "Amber Gold Designer Shades",
    category: "Sunglasses",
    src: "/assets/products/sunglasses-studio.jpg",
    alt: "Aviator sunglasses with gold hardware",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 6,
    title: "Computer Blue-Light Shield",
    category: "Digital Protection",
    src: "/assets/products/blue-light-studio.jpg",
    alt: "Blue light filtering clear prescription glasses",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 7,
    title: "Indestructible Kids Round Frames",
    category: "Kids",
    src: "/assets/products/kids-studio.jpg",
    alt: "Flexible lightweight round glasses for kids",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 8,
    title: "Executive Men's Acetate Frames",
    category: "Collections",
    src: "/assets/products/men-frames.jpg",
    alt: "Bold architectural black optical frames for men",
    aspect: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 9,
    title: "Curated Designer Sunglasses Display",
    category: "Showroom",
    src: "/assets/gallery/gallery-2.jpg",
    alt: "Eyewear display in boutique",
    aspect: "col-span-1 row-span-1"
  },
  {
    id: 10,
    title: "Modern Optical Precision Bay",
    category: "Clinical",
    src: "/assets/services/eye-exam.jpg",
    alt: "Optometrist equipment close up",
    aspect: "col-span-1 row-span-1"
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      
      {/* 1. Header */}
      <section className="py-12 md:py-16 border-b border-[#1C1C1C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
              <span>Visual Showcase</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Store & Eyewear <span className="text-[#F50914]">Gallery</span>
            </h1>

            <p className="text-sm sm:text-base text-[#A0A0A0]">
              Take a visual tour inside our West Mambalam boutique, explore our handcrafted frame details, and see our clinical diagnostic environment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[240px]">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#242424] hover:border-[#F50914]/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${item.aspect}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase tracking-wider text-[#00D4FF] font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider text-[#F50914] font-medium mr-2">
                {galleryImages[lightboxIndex].category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white inline-block">
                {galleryImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#888] mt-1">
                {galleryImages[lightboxIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
