import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles, X, Check, Eye, Glasses, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, productCategories } from '../data/products';
import { storeInfo } from '../data/navigation';

export default function Products({ lang = 'en', onOpenBookModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync with URL query parameter changes
  React.useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: catId });
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shape.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="py-12 md:py-16 border-b border-[#1C1C1C] relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#F50914]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
              <span>Eyewear Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Explore Our <span className="text-[#F50914]">Curated Eyewear</span>
            </h1>

            <p className="text-sm sm:text-base text-[#A0A0A0]">
              Discover premium spectacles, polarized sunglasses, and specialized digital blue-light filtering lenses. Visit our West Mambalam showroom to try any frame in person.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="py-8 bg-[#0D0D0D] border-b border-[#1A1A1A] sticky top-16 z-30 backdrop-blur-md bg-[#0D0D0D]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#F50914] text-white shadow-[0_2px_12px_rgba(245,9,20,0.4)]'
                      : 'bg-[#181818] text-[#A0A0A0] hover:text-white hover:bg-[#222] border border-[#282828]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* In-page Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
              <input
                type="text"
                placeholder="Search models or materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 rounded-full bg-[#161616] border border-[#282828] text-xs text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#707070] hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center">
              <Glasses className="w-12 h-12 text-[#555] mb-4 stroke-[1]" />
              <h3 className="text-xl font-bold text-white mb-2">No matching frames found</h3>
              <p className="text-sm text-[#888] max-w-sm mb-6">
                Try searching for another keyword or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="px-6 py-2.5 rounded-full bg-[#F50914] text-white text-xs font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Quick View Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#141414] border border-[#292929] shadow-2xl p-6 sm:p-8 overflow-hidden">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e1e1e] text-[#A0A0A0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="h-64 rounded-2xl bg-[#0f0f0f] border border-[#222] p-6 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl"
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#F50914] font-semibold">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4">
                  {selectedProduct.description}
                </p>

                <div className="space-y-2 text-xs text-[#C0C0C0] mb-6">
                  <div><strong>Material:</strong> {selectedProduct.material}</div>
                  <div><strong>Frame Shape:</strong> {selectedProduct.shape}</div>
                  <div><strong>Gender Fit:</strong> {selectedProduct.gender}</div>
                  <div className="pt-1">
                    <strong>Key Features:</strong>
                    <ul className="list-disc pl-4 mt-1 text-[#909090] space-y-0.5">
                      {selectedProduct.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      onOpenBookModal();
                    }}
                    className="flex-1 py-3 rounded-full bg-[#F50914] hover:bg-[#D9000B] text-white text-xs font-semibold shadow-lg transition-all"
                  >
                    Book Store Trial
                  </button>
                  <a
                    href={`https://wa.me/918870142706?text=Hello%2C%20I%20am%20interested%20in%20trying%20the%20${encodeURIComponent(selectedProduct.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-full bg-[#1e1e1e] hover:bg-[#252525] border border-[#2e2e2e] text-white text-xs font-medium"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
