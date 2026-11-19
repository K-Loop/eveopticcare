import React from 'react';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { reviewsData, reviewStats } from '../data/reviews';

export default function ReviewSection({ lang = 'en' }) {
  return (
    <section className="py-20 md:py-28 bg-[#0D0D0D] border-t border-[#1F1F1F] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F50914]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
              <span>What Our Customers Say</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Trusted by Thousands
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0A0]">
              Real stories. Real smiles.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 bg-[#151515] border border-[#292929] px-4 py-2.5 rounded-xl self-start md:self-auto shadow-lg">
            <div className="flex text-[#FFD600]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-sm font-semibold text-white">
              {reviewStats.rating}/5{' '}
              <span className="text-xs text-[#A0A0A0] font-normal">
                from {reviewStats.totalReviews} reviews
              </span>
            </div>
          </div>
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#383838] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Red quote icon matching UI reference */}
                <div className="w-9 h-9 rounded-lg bg-[#F50914]/15 text-[#F50914] flex items-center justify-center mb-5">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#202020]">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#333333]"
                  onError={(e) => {
                    // Fallback to initial avatar if image unavailable
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-10 h-10 rounded-full bg-[#252525] text-white font-bold items-center justify-center text-sm border border-[#333]">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    {review.name}
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" title="Verified Google Review" />
                  </h4>
                  <p className="text-xs text-[#808080]">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Google Business Listing */}
        <div className="mt-10 text-center">
          <a
            href={reviewStats.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200 group"
          >
            <span>Read all 496+ verified reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
