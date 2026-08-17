import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Calculator, ArrowRight, Shield, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Materials', href: '#materials' },
    { label: 'Why TASH', href: '#why-tash' },
    { label: 'Projects', href: '#projects' },
    { label: 'How It Works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D11]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#0B0D11]/80 backdrop-blur-xs border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#E51E25] rounded-lg shadow-lg group-hover:bg-[#C4161C] transition-transform duration-200 group-hover:scale-105">
            <span className="font-black text-white text-xl sm:text-2xl tracking-tighter font-heading">
              T
            </span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-black border-2 border-[#E51E25] rounded-xs"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-white uppercase leading-none">
                TASH
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm text-[#E51E25] tracking-widest uppercase bg-white/5 px-1.5 py-0.5 rounded border border-[#E51E25]/30">
                HARDWARE
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide hidden sm:block">
              Construction • Materials • Project Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Matrix */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Material Calculator Shortcut */}
          <button
            onClick={onOpenEstimator}
            id="nav-estimator-btn"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all cursor-pointer"
            title="Calculate bricks, cement & slab requirements"
          >
            <Calculator className="w-3.5 h-3.5 text-[#E51E25]" />
            <span>Estimator</span>
          </button>

          {/* Direct Phone Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
              id="nav-phone-dropdown-btn"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono-acc font-semibold text-gray-200 bg-[#14171F] hover:bg-[#1C212C] border border-white/10 rounded-lg transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#E51E25]" />
              <span>{COMPANY_INFO.phones[0].display}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {phoneDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-64 bg-[#14171F] border border-white/15 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setPhoneDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b border-white/10">
                  Direct Line & WhatsApp
                </div>
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between px-3 py-2 text-xs font-mono-acc text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-[#E51E25]" />
                      {phone.display}
                    </span>
                    {phone.primary && (
                      <span className="text-[10px] bg-[#E51E25]/20 text-[#E51E25] font-sans font-bold px-1.5 py-0.5 rounded">
                        Main
                      </span>
                    )}
                  </a>
                ))}
                <div className="pt-2 mt-1 border-t border-white/10 px-2">
                  <a
                    href={COMPANY_INFO.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-semibold text-xs rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenQuote}
            id="nav-get-quote-btn"
            className="flex items-center gap-2 px-4 py-2 bg-[#E51E25] hover:bg-[#C4161C] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get A Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenQuote}
            className="sm:hidden px-3 py-1.5 bg-[#E51E25] text-white font-bold text-xs uppercase tracking-wider rounded-md"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0D11]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-sm font-semibold rounded-lg"
            >
              <Calculator className="w-4 h-4 text-[#E51E25]" />
              Material Quantity Estimator
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#E51E25] hover:bg-[#C4161C] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-md"
            >
              Request Project Quote
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-sm font-bold rounded-lg border border-[#25D366]/30"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp (+263 71 904 3295)
            </a>

            <div className="pt-2 text-center text-xs text-gray-400">
              Direct Phone Lines: {COMPANY_INFO.phones.map(p => p.display).join(' • ')}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
