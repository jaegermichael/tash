import React, { useState } from 'react';
import { Building2, Home, Shovel, Layers, HardHat, ArrowRight, Check, Sparkles, ChevronRight, ShieldCheck, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'commercial-industrial':
        return Building2;
      case 'residential-development':
        return Home;
      case 'civil-works':
        return Shovel;
      case 'hardware-materials':
        return Layers;
      case 'project-management':
        return HardHat;
      default:
        return Building2;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#12151D] relative border-t border-white/10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-industrial-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
              <span className="w-6 h-0.5 bg-[#E51E25]"></span>
              Comprehensive Solutions
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              Everything You <span className="text-[#E51E25]">Need To Build.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
            From single-family residential dream homes to heavy industrial warehouse expansions, civil road paving, and direct material supply.
          </p>
        </div>

        {/* Services Grid (High-Craft Industrial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            const isLarge = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className="group relative bg-[#1A1E26] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E51E25]/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-red-950/20"
              >
                {/* Image Header with Badge */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E26] via-[#1A1E26]/40 to-transparent"></div>

                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-md border border-white/10 flex items-center gap-2">
                    <span className="font-mono-acc font-bold text-xs text-[#E51E25]">{service.number}</span>
                    <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">{service.tag}</span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-[#E51E25] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#E51E25] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider font-mono-acc">
                      {service.subtitle}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-3.5 h-3.5 text-[#E51E25] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-[11px] text-[#E51E25] font-semibold pt-1">
                          + {service.features.length - 3} more specialized capabilities
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Matrix */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Full Scope</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#E51E25]" />
                    </button>

                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#E51E25] hover:bg-[#C4161C] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg shadow transition-colors cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Project Management & Trades */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#14171F] via-[#1A1E26] to-[#14171F] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono-acc text-[#E51E25] uppercase font-bold tracking-wider">
                Full-Spectrum Quality Assurance
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase mt-0.5">
                Need Site Supervision or Qualified Tradespeople for an existing project?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                We assign qualified site managers and supply vetted bricklayers, licensed plumbers, and certified electricians to keep your build on schedule and structurally compliant.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectServiceForQuote('Project Management & Site Supervision')}
            className="flex-shrink-0 px-6 py-3.5 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Request Site Manager
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#14171F] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-48 sm:h-56 bg-black flex-shrink-0">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14171F] via-[#14171F]/40 to-transparent"></div>
              
              <button
                onClick={() => setActiveModalService(null)}
                aria-label="Close service details"
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 bg-[#E51E25] text-white font-mono-acc text-xs font-bold uppercase rounded">
                  {activeModalService.number} • {activeModalService.tag}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div>
                <h4 className="text-xs font-mono-acc font-bold uppercase tracking-wider text-gray-400">
                  Overview & Scope
                </h4>
                <p className="mt-1 text-sm text-gray-200 leading-relaxed">
                  {activeModalService.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-acc font-bold uppercase tracking-wider text-gray-400">
                  Core Capabilities & Inclusions
                </h4>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 p-2 rounded-lg bg-white/5 border border-white/5">
                      <Check className="w-4 h-4 text-[#E51E25] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono-acc font-bold uppercase tracking-wider text-gray-400">
                  Key Quality Deliverables
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs text-gray-300">
                  {activeModalService.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E51E25]"></div>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#E51E25]/10 border border-[#E51E25]/20">
                <div className="text-xs font-bold text-[#E51E25] uppercase font-mono-acc">
                  Ideal For
                </div>
                <div className="text-xs text-gray-200 mt-0.5">
                  {activeModalService.idealFor}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#0B0D11] flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white uppercase transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForQuote(title);
                }}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transition-colors cursor-pointer"
              >
                <span>Request Quote for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
