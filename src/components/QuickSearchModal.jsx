import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Glasses, Eye, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { servicesData } from '../data/services';

export default function QuickSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredServices = query.trim()
    ? servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.shortDesc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#141414] border border-[#2a2a2a] shadow-2xl overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="relative border-b border-[#242424] flex items-center px-4 py-3.5">
            <Search className="w-5 h-5 text-[#808080] mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search frames, sunglasses, eye tests, repairs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-base text-white placeholder-[#666666] focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-md text-[#888] hover:text-white mr-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2 py-1 rounded-md bg-[#202020] text-xs text-[#A0A0A0] hover:text-white cursor-pointer ml-1"
            >
              ESC
            </button>
          </div>

          {/* Results Container */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-4">
            {!query.trim() ? (
              <div className="py-6 text-center text-xs text-[#707070]">
                <p className="mb-2">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Computerised Eye Test', 'Blue Light', 'Sunglasses', 'Titanium Frames', 'Kids Glasses'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-[#A0A0A0] hover:text-white border border-[#282828] text-xs transition-colors cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Services Matches */}
                {filteredServices.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-bold text-[#F50914] uppercase tracking-wider mb-2">
                      Services ({filteredServices.length})
                    </h4>
                    <div className="space-y-1.5">
                      {filteredServices.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services#${s.id}`}
                          onClick={onClose}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#1f1f1f] border border-transparent hover:border-[#2e2e2e] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#F50914]/15 text-[#F50914] flex items-center justify-center">
                              <Eye className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-[#F50914] transition-colors">
                                {s.title}
                              </div>
                              <div className="text-xs text-[#808080] line-clamp-1">{s.shortDesc}</div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#606060] group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Products Matches */}
                {filteredProducts.length > 0 && (
                  <div>
                    <h4 className="text-[11px] font-bold text-[#00D4FF] uppercase tracking-wider mb-2">
                      Eyewear Products ({filteredProducts.length})
                    </h4>
                    <div className="space-y-1.5">
                      {filteredProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/products?cat=${p.category}`}
                          onClick={onClose}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#1f1f1f] border border-transparent hover:border-[#2e2e2e] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#2a2a2a] p-1 flex items-center justify-center overflow-hidden">
                              <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-[#F50914] transition-colors">
                                {p.name}
                              </div>
                              <div className="text-xs text-[#808080] flex items-center gap-2">
                                <span className="capitalize">{p.category}</span>
                                <span>•</span>
                                <span>{p.material}</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#606060] group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {filteredServices.length === 0 && filteredProducts.length === 0 && (
                  <div className="py-8 text-center text-sm text-[#808080]">
                    No direct matches found for "{query}". You can call our store directly at{' '}
                    <span className="text-white">+91 88701 42706</span>.
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
