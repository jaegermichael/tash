import React, { useState } from 'react';
import { 
  Layers, 
  Search, 
  Calculator, 
  ArrowRight, 
  Check, 
  Clock, 
  Truck, 
  MessageSquare,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { MATERIAL_CATEGORIES, COMPANY_INFO } from '../data/siteData';
import { MaterialCategory } from '../types';

interface MaterialsSectionProps {
  onOpenEstimator: () => void;
  onSelectCategoryForQuote: (categoryName: string) => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({ 
  onOpenEstimator, 
  onSelectCategoryForQuote 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = MATERIAL_CATEGORIES.filter((cat) => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    const matchesSearch = 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.popularItems.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="materials" className="py-20 sm:py-28 bg-[#12151D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Calculator Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
              <span className="w-6 h-0.5 bg-[#E51E25]"></span>
              Direct Supply & Delivery
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              Need Materials For <span className="text-[#E51E25]">Your Next Project?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              Certified cement, high-yield rebar, kiln-fired bricks, chromadek roofing, and infrastructure supplies. Transparent wholesale pricing with direct site delivery.
            </p>
          </div>

          {/* Quick Estimator CTA Card */}
          <div className="bg-[#1A1E26] border border-white/15 p-5 rounded-2xl flex items-center justify-between gap-4 shadow-xl max-w-md w-full">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#E51E25] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-heading font-bold text-base uppercase">
                  Material Quantity Calculator
                </div>
                <div className="text-xs text-gray-400">
                  Estimate cement bags, bricks, and slab mix in seconds.
                </div>
              </div>
            </div>
            <button
              onClick={onOpenEstimator}
              id="materials-open-estimator-btn"
              className="flex-shrink-0 px-3.5 py-2 bg-[#E51E25] hover:bg-[#C4161C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Open
            </button>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cement, steel, rebar, timber..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#14171F] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-[#E51E25] transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono-acc font-bold uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#E51E25] text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Supplies ({MATERIAL_CATEGORIES.length})
            </button>
            {MATERIAL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-acc font-bold uppercase whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E51E25] text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Material Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#14171F] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E51E25]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-red-950/20"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-44 overflow-hidden bg-black">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171F] via-[#14171F]/40 to-transparent"></div>
                  
                  {cat.isPopular && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#E51E25] text-white text-[10px] font-bold uppercase tracking-wider rounded font-mono-acc shadow">
                      High Demand
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-heading font-black text-xl text-white uppercase leading-tight drop-shadow">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Typical stocked items */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] font-mono-acc uppercase font-bold text-gray-400">
                      Typical Stock Items:
                    </div>
                    {cat.popularItems.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#E51E25] flex-shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Specs */}
                  <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] text-gray-400 font-mono-acc">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Packaging:</span>
                      <span className="text-gray-300 font-semibold">{cat.unitTypes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Dispatch:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {cat.leadTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-4 pt-0">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/263719043295?text=Hello%20TASH%20Hardware,%20please%20confirm%20availability%20and%20pricing%20for:%20${encodeURIComponent(cat.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-[11px] font-semibold rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3 h-3 text-[#25D366]" />
                    <span>Availability</span>
                  </a>

                  <button
                    onClick={() => onSelectCategoryForQuote(cat.name)}
                    className="flex items-center justify-center gap-1 py-2 bg-[#E51E25] hover:bg-[#C4161C] text-white text-[11px] font-bold uppercase rounded-lg transition-colors cursor-pointer shadow"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Campaign Delivery Info Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#14171F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] flex-shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-acc text-[#E51E25] uppercase font-bold">
                Direct Site Delivery Logistics
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-medium">
                Free delivery within 10km radius on qualifying bulk orders. Controlled 10-bag phased cement releases to prevent site spoil.
              </div>
            </div>
          </div>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-bold uppercase tracking-wider rounded-lg border border-[#25D366]/30 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Check Delivery Zone</span>
          </a>
        </div>

      </div>
    </section>
  );
};
