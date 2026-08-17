import React, { useState } from 'react';
import { Sparkles, Phone, MessageSquare, X, ArrowRight } from 'lucide-react';
import { CURRENT_CAMPAIGN, COMPANY_INFO } from '../data/siteData';

interface AnnouncementBarProps {
  onOpenQuote: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenQuote }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Special promotion" className="bg-gradient-to-r from-[#8B0000] via-[#E51E25] to-[#B91C1C] text-white text-xs sm:text-sm py-2 px-3 sm:px-4 relative z-50 border-b border-red-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center md:text-left flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1 bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-300 border border-amber-300/30">
            <Sparkles className="w-3 h-3 text-amber-300" />
            {CURRENT_CAMPAIGN.badgeText}
          </span>
          <span className="font-semibold text-white">
            {CURRENT_CAMPAIGN.highlight}
          </span>
          <span className="hidden lg:inline text-red-200">•</span>
          <span className="hidden lg:inline text-white/90 text-xs">
            {CURRENT_CAMPAIGN.secondaryHighlight}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1 font-bold text-white hover:text-amber-200 underline decoration-white/60 hover:decoration-amber-200 text-xs transition-colors cursor-pointer"
          >
            Claim Offer
            <ArrowRight className="w-3 h-3" />
          </button>
          <span className="text-white/40">|</span>
          <a
            href={`tel:${COMPANY_INFO.phones[0].raw}`}
            className="inline-flex items-center gap-1 font-mono-acc text-white/90 hover:text-white text-xs bg-black/20 hover:bg-black/30 px-2 py-0.5 rounded transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-300" />
            {COMPANY_INFO.phones[0].display}
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-white/70 hover:text-white p-0.5 hover:bg-black/20 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
