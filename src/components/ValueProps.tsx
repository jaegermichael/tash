import React from 'react';
import { 
  Calculator, 
  Truck, 
  TrendingDown, 
  RefreshCw, 
  UserCheck, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/siteData';

interface ValuePropsProps {
  onOpenQuote: () => void;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return Calculator;
      case 'Truck':
        return Truck;
      case 'TrendingDown':
        return TrendingDown;
      case 'RefreshCw':
        return RefreshCw;
      case 'UsersCheck':
        return UserCheck;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Layers':
        return Layers;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="why-tash" className="py-20 sm:py-28 bg-[#0B0D11] relative">
      {/* Background Decorative Accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
            The TASH Advantage
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            Why Build With <span className="text-[#E51E25]">TASH?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            We solved the most painful challenges of building in Zimbabwe: runaway costs, compromised material quality, rogue contractors, and damaged materials on site.
          </p>
        </div>

        {/* 7 Core Advantage Cards (Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = getIcon(prop.iconName);
            const isFeatured = prop.isPromotional;

            return (
              <div
                key={prop.id}
                className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1E232E] to-[#14171F] border-[#E51E25]/40 shadow-lg hover:border-[#E51E25]'
                    : 'bg-[#14171F] border-white/10 hover:border-white/25 hover:bg-[#1A1E26]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Highlight Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25]">
                      <Icon className="w-6 h-6" />
                    </div>

                    {prop.highlightTag && (
                      <span className={`text-[11px] font-mono-acc font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        prop.isPromotional
                          ? 'bg-[#E51E25]/20 text-red-300 border-[#E51E25]/40'
                          : 'bg-white/5 text-gray-300 border-white/10'
                      }`}>
                        {prop.highlightTag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase leading-tight tracking-tight">
                    {prop.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Promotional notice if applicable */}
                {prop.promoNotice && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-300/90 font-mono-acc">
                    <Clock className="w-3 h-3 flex-shrink-0 text-amber-300" />
                    <span>{prop.promoNotice}</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* 8th Card: Instant Consultation Action Card */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#E51E25] via-[#C4161C] to-[#8B0000] text-white flex flex-col justify-between shadow-2xl md:col-span-2 lg:col-span-1">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/30 text-amber-300 text-[11px] font-bold uppercase font-mono-acc mb-4">
                <Sparkles className="w-3 h-3" />
                Zero Obligation
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase leading-tight">
                Have a Bill of Quantities or Architectural Plan?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                Send your drawings or material list to our estimators. We will provide an itemized, highly competitive price comparison.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <button
                onClick={onOpenQuote}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-gray-100 text-[#0B0D11] font-heading font-black text-base uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                <span>Upload / Send BOQ</span>
                <ArrowRight className="w-4 h-4 text-[#E51E25]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
