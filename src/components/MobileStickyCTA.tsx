import React from 'react';
import { Phone, MessageSquare, Calculator, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface MobileStickyCTAProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ 
  onOpenQuote, 
  onOpenEstimator 
}) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0B0D11]/95 backdrop-blur-md border-t border-white/15 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      {/* Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].raw}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#E51E25]" />
        <span className="text-[10px] font-mono-acc font-semibold uppercase mt-0.5">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-lg border border-[#25D366]/30 transition-colors"
      >
        <MessageSquare className="w-4 h-4 text-[#25D366]" />
        <span className="text-[10px] font-mono-acc font-bold uppercase mt-0.5">WhatsApp</span>
      </a>

      {/* Estimator Button */}
      <button
        onClick={onOpenEstimator}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors"
      >
        <Calculator className="w-4 h-4 text-amber-400" />
        <span className="text-[10px] font-mono-acc font-semibold uppercase mt-0.5">Calc</span>
      </button>

      {/* Primary Quote CTA */}
      <button
        onClick={onOpenQuote}
        className="flex-[1.5] flex items-center justify-center gap-1 py-2.5 px-3 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-black text-xs uppercase tracking-wider rounded-lg shadow-lg"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Get Quote</span>
      </button>
    </div>
  );
};
