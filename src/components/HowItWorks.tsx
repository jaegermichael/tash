import React from 'react';
import { FileText, Calculator, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

interface HowItWorksProps {
  onOpenQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return FileText;
      case 'Calculator':
        return Calculator;
      case 'Hammer':
        return Hammer;
      case 'CheckCircle2':
        return CheckCircle2;
      default:
        return FileText;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
            Simple 4-Step Flow
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            How It <span className="text-[#E51E25]">Works.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            From initial idea or Bill of Quantities to the final roof sheet and paint coat.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getIcon(step.iconName);
            return (
              <div
                key={idx}
                className="bg-[#14171F] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#E51E25]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-4 font-mono-acc font-black text-5xl text-white/5 group-hover:text-[#E51E25]/10 transition-colors pointer-events-none">
                  {step.step}
                </div>

                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] group-hover:bg-[#E51E25] group-hover:text-white transition-colors duration-200 shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono-acc font-bold uppercase tracking-wider text-gray-400 px-2.5 py-1 rounded bg-white/5 border border-white/5">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-acc text-gray-400">
                  <span>Step {step.step} of 04</span>
                  <span className="text-[#E51E25] font-bold">●</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-base uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Step 01: Tell Us What You're Building</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
