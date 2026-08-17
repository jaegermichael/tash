import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'partner'>('reviews');

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#12151D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
            Client & Partner Trust
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            What Our <span className="text-[#E51E25]">Customers Say.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Real feedback from local homeowners, diaspora builders, commercial developers, and civil site engineers across Zimbabwe.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#14171F] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#E51E25]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E51E25]/40" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-base text-white uppercase">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-[#E51E25] font-medium">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    {t.projectType} • {t.location}
                  </div>
                </div>

                {t.verified && (
                  <div className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono-acc font-semibold border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1A1E26] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-heading font-bold text-base uppercase">
                Our Guarantee to Every Builder
              </div>
              <div className="text-xs text-gray-400">
                Accurate material grading, transparent pricing without hidden markups, and structured project support.
              </div>
            </div>
          </div>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono-acc font-bold uppercase rounded-lg transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Share Project Feedback</span>
          </a>
        </div>

      </div>
    </section>
  );
};
