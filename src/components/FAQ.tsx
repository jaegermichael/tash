import React, { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/siteData';

interface FAQProps {
  onOpenQuote: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0B0D11] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
            Clear Answers
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            Frequently Asked <span className="text-[#E51E25]">Questions.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our construction services, building supplies, site delivery logistics, and project management in Zimbabwe.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14171F] border-[#E51E25]/50 shadow-xl'
                    : 'bg-[#14171F]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-lg sm:text-xl text-white uppercase leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#E51E25] text-white rotate-180'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 mt-2 pt-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#1A1E26] via-[#14171F] to-[#1A1E26] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-heading font-bold text-base uppercase">
                Have a specific project question?
              </div>
              <div className="text-xs text-gray-400">
                Our estimation and site consultation team is available via direct WhatsApp or phone.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-bold uppercase rounded-lg transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#E51E25] hover:bg-[#C4161C] text-white text-xs font-heading font-bold uppercase rounded-lg transition-colors cursor-pointer"
            >
              <span>Get Quote</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
