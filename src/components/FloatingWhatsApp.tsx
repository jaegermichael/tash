import React, { useState } from 'react';
import { MessageSquare, Phone, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: 'Request Material Pricing', text: 'Hello TASH Hardware, I would like to check prices for cement and building materials.' },
    { label: 'Free QS Consultation', text: 'Hello TASH Hardware, I would like to request the Free Quantity Surveyor Consultation for my project.' },
    { label: 'Vetted Builder / Trades', text: 'Hello TASH Hardware, I need qualified builders/plumbers/electricians for a site in Zimbabwe.' },
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#14171F] border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-heading font-black text-sm uppercase leading-none">TASH Hardware Support</div>
                <div className="text-[10px] text-white/90 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online • Harare Site Desk
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Options */}
          <div className="p-4 space-y-2 bg-[#14171F]">
            <p className="text-xs text-gray-300 mb-2">
              How can we assist your construction project today?
            </p>
            {quickMessages.map((msg, idx) => (
              <a
                key={idx}
                href={`https://wa.me/263719043295?text=${encodeURIComponent(msg.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-200 hover:text-white transition-colors"
              >
                {msg.label} →
              </a>
            ))}

            <div className="pt-2 border-t border-white/10">
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase rounded-xl transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Custom WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat with TASH Hardware"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer border-2 border-white/20 group"
      >
        <MessageSquare className="w-7 h-7 text-black group-hover:rotate-6 transition-transform" />
      </button>
    </div>
  );
};
