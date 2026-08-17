import React from 'react';
import { Shield, Users, Layers, ArrowRight, CheckCircle2, PhoneCall, Award, HardHat } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0D11] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E51E25]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rich Architectural Construction Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#14171F]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                alt="Construction professionals and quality building materials on site"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-transparent opacity-80"></div>

              {/* Floating Stat Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#14171F]/90 backdrop-blur-md border border-white/15 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E51E25] flex items-center justify-center text-white flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-heading font-bold text-lg sm:text-xl uppercase leading-tight">
                      One-Stop Construction Ecosystem
                    </div>
                    <div className="text-xs text-gray-300 mt-0.5">
                      Direct Materials • Vetted Trades • Site Supervision across Zimbabwe
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#E51E25] rounded-tl-xl pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-white/20 rounded-br-xl pointer-events-none"></div>
          </div>

          {/* Right Column: Narrative & 3 Core Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
              <span className="w-6 h-0.5 bg-[#E51E25]"></span>
              About TASH Hardware
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              More Than <span className="text-[#E51E25]">Hardware.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              At TASH Hardware, we believe building should not be an endless cycle of project delays, contractor headaches, and runaway material costs.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
              We go far beyond selling building supplies. We provide an integrated construction ecosystem: connecting you directly to verified, premium materials, trusted trade artisans, and professional on-site supervision to guarantee your project finishes on time and on budget.
            </p>

            {/* 3 Core Supporting Points */}
            <div className="mt-8 space-y-4">
              
              {/* Point 1: Quality Materials */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase">
                    Quality Materials
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    Reliable access to certified cement, high-tensile steel rebar, roofing sheets, timber, and essential construction products with direct site dispatch.
                  </p>
                </div>
              </div>

              {/* Point 2: Qualified Professionals */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase">
                    Qualified Professionals
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    Direct access to vetted master builders, certified plumbers, and registered electricians, shielding your build from rogue artisan practices.
                  </p>
                </div>
              </div>

              {/* Point 3: Project Support */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] mt-0.5">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase">
                    Project Support & Site Supervision
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                    Experienced site supervision and project coordination to enforce mixing ratios, verify structural alignment, and protect your construction investment.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Matrix */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                id="about-cta-talk"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-base uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Talk To Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-base uppercase tracking-wider rounded-xl transition-colors font-mono-acc"
              >
                <PhoneCall className="w-4 h-4 text-[#E51E25]" />
                <span>Call {COMPANY_INFO.phones[0].display}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
