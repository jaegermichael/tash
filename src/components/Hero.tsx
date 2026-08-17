import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall, Sparkles, MessageSquare, Building2, Truck, HardHat } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center bg-[#0B0D11] overflow-hidden">
      {/* Background Image Layer with Industrial Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb1861563?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Commercial and Residential Construction in Zimbabwe"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom opacity-30 mix-blend-luminosity"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/85 to-[#0B0D11]/70"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0D11]/60 to-[#0B0D11]"></div>
        {/* Subtle Industrial Grid Lines */}
        <div className="absolute inset-0 bg-industrial-grid opacity-30"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 flex flex-col items-center text-center">
        
        {/* Top Authority Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span className="w-2 h-2 rounded-full bg-[#E51E25] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 uppercase font-mono-acc">
            Zimbabwe's Turnkey Construction & Hardware Partner
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-[0.95] drop-shadow-md">
          Building Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-[#E51E25] to-red-400">Easier,</span>{' '}
          <span className="text-white">Cheaper</span> &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Stress-Free.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl font-normal leading-relaxed">
          Quality construction solutions, certified materials, and expert project support for residential, commercial and industrial developments across Zimbabwe.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={onOpenQuote}
            id="hero-primary-cta"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-lg sm:text-xl uppercase tracking-wider rounded-xl shadow-2xl hover:shadow-red-600/40 transition-all transform hover:-translate-y-1 cursor-pointer border border-red-400/30"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#services"
            id="hero-secondary-cta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-lg sm:text-xl uppercase tracking-wider rounded-xl border border-white/20 hover:border-white/40 transition-all cursor-pointer backdrop-blur-md"
          >
            <span>Explore Our Services</span>
          </a>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-heading font-bold text-lg sm:text-xl uppercase tracking-wider rounded-xl border border-[#25D366]/40 transition-all cursor-pointer backdrop-blur-md"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Trust Statement */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10 w-full max-w-4xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E51E25]" />
            <span>Construction</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E51E25]" />
            <span>Hardware & Materials</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E51E25]" />
            <span>Civil Works</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E51E25]" />
            <span>Project Support & Supervision</span>
          </div>
        </div>

        {/* Quick Highlights Floating Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl text-left">
          <div className="bg-[#14171F]/80 border border-white/10 p-3.5 rounded-xl backdrop-blur-xs">
            <div className="text-[11px] font-bold text-[#E51E25] uppercase tracking-wider">QS Consultation</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Free Estimation Support</div>
          </div>
          <div className="bg-[#14171F]/80 border border-white/10 p-3.5 rounded-xl backdrop-blur-xs">
            <div className="text-[11px] font-bold text-[#E51E25] uppercase tracking-wider">Site Delivery</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Direct to Site (Free ≤10km)</div>
          </div>
          <div className="bg-[#14171F]/80 border border-white/10 p-3.5 rounded-xl backdrop-blur-xs">
            <div className="text-[11px] font-bold text-[#E51E25] uppercase tracking-wider">Vetted Trades</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Builders, Plumbers & Sparks</div>
          </div>
          <div className="bg-[#14171F]/80 border border-white/10 p-3.5 rounded-xl backdrop-blur-xs">
            <div className="text-[11px] font-bold text-[#E51E25] uppercase tracking-wider">Smart Release</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">10-Bag Cement Phasing</div>
          </div>
        </div>

      </div>
    </section>
  );
};
