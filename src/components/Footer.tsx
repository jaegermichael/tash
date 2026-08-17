import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Shield, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] text-gray-400 border-t border-white/10 relative overflow-hidden pb-16 sm:pb-0">
      
      {/* Top Red Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#E51E25] to-[#B91C1C]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 bg-[#E51E25] rounded-lg shadow-lg">
                <span className="font-black text-white text-2xl tracking-tighter font-heading">
                  T
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-3xl tracking-tight text-white uppercase leading-none">
                    TASH
                  </span>
                  <span className="font-heading font-bold text-xs text-[#E51E25] tracking-widest uppercase bg-white/5 px-1.5 py-0.5 rounded border border-[#E51E25]/30">
                    HARDWARE
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 font-heading font-bold text-base uppercase text-white tracking-wide">
              “{COMPANY_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Zimbabwe's trusted partner for residential, commercial and industrial construction projects, certified building materials, civil infrastructure works, and on-site project supervision.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-bold uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono-acc transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E51E25]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono-acc uppercase font-bold text-white tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About TASH</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">All Services</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Building Materials</a></li>
              <li><a href="#why-tash" className="hover:text-white transition-colors">The TASH Advantage</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono-acc uppercase font-bold text-white tracking-wider">
              Specializations
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Builds</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Residential Homes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Industrial Warehouses</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Civil Retaining Walls</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Cement (32.5R/42.5N)</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Steel Rebar & Mesh</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Site Supervision</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Phone Numbers Matrix (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono-acc uppercase font-bold text-white tracking-wider">
              Direct Contact Lines
            </h3>
            <div className="space-y-1.5 text-xs font-mono-acc">
              {COMPANY_INFO.phones.map((p, idx) => (
                <a
                  key={idx}
                  href={`tel:${p.raw}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white py-1 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E51E25] flex-shrink-0" />
                  <span>{p.display}</span>
                  {p.primary && <span className="text-[9px] bg-[#E51E25]/20 text-[#E51E25] px-1 rounded">Main</span>}
                </a>
              ))}
            </div>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E51E25] flex-shrink-0 mt-0.5" />
                <span>Harare, Zimbabwe (Countrywide deliveries)</span>
              </div>
              <div className="text-[11px] text-gray-500 font-mono-acc pt-1">
                Mon - Sat: 7:30 AM - 5:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} TASH Hardware. All rights reserved. Building Made Easier, Cheaper & Stress-Free.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E51E25]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
