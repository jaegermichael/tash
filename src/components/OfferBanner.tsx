import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Check, PhoneCall, MessageSquare, Tag, Zap } from 'lucide-react';
import { COMPANY_INFO, CURRENT_CAMPAIGN } from '../data/siteData';

interface OfferBannerProps {
  onOpenQuote: () => void;
}

export const OfferBanner: React.FC<OfferBannerProps> = ({ onOpenQuote }) => {
  const benefits = [
    { title: 'Fair & Competitive Direct Pricing', desc: 'Direct-from-factory rates on cement, steel & roofing' },
    { title: 'Dedicated Project Support', desc: 'Expert guidance on BOQs, material schedules & deliveries' },
    { title: 'Qualified & Vetted Tradespeople', desc: 'Direct access to certified builders, plumbers & electricians' },
    { title: 'Excess Material Solutions', desc: 'Return eligible unused materials for valuable account credit' },
    { title: 'On-Site Quality Supervision', desc: 'Site managers ensuring structural accuracy and mixing ratios' },
    { title: 'Phased Cement Releases', desc: '10-bag system prevents site hardening, spoilage and theft' },
  ];

  return (
    <section id="offers" className="py-16 sm:py-24 bg-gradient-to-r from-[#990000] via-[#E51E25] to-[#B91C1C] text-white relative overflow-hidden shadow-2xl border-y border-red-700">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Campaign Badge */}
        <div className="flex items-center justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 text-amber-300 text-xs font-mono-acc font-bold uppercase tracking-wider border border-amber-300/40">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            {CURRENT_CAMPAIGN.title} • {CURRENT_CAMPAIGN.highlight}
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] drop-shadow-md">
            Get More From Your <span className="text-black/90 bg-white px-3 py-0.5 rounded-lg inline-block my-1">Construction Budget.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Stop losing thousands of dollars to wasted materials, delivery markups, and uncoordinated artisans. Partner with TASH Hardware for total building control.
          </p>
        </div>

        {/* 6 Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex items-start gap-3 hover:bg-black/40 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-white text-[#E51E25] flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base uppercase text-white leading-tight">
                  {b.title}
                </h3>
                <p className="text-xs text-white/80 mt-0.5">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Matrix */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            id="offer-section-quote-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-[#0B0D11] font-heading font-black text-lg uppercase tracking-wider rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Request A Quote</span>
            <ArrowRight className="w-5 h-5 text-[#E51E25]" />
          </button>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-black/40 hover:bg-black/60 text-white font-heading font-bold text-lg uppercase tracking-wider rounded-xl border border-white/30 backdrop-blur-sm transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
            <span>Chat With A Project Specialist</span>
          </a>
        </div>

        {/* Small Campaign Disclaimer */}
        <div className="mt-8 text-center text-xs text-white/70 max-w-xl mx-auto font-mono-acc">
          *{CURRENT_CAMPAIGN.validityNote}
        </div>

      </div>
    </section>
  );
};
