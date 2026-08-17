import React from 'react';
import { 
  Layers, 
  Users, 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  ShieldCheck, 
  XCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface CustomerJourneyProps {
  onOpenQuote: () => void;
}

export const CustomerJourney: React.FC<CustomerJourneyProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      number: '01',
      title: 'Materials Sourced',
      desc: 'Direct wholesale rates, verified cement & rebar, scheduled site drops.',
      icon: Layers,
    },
    {
      number: '02',
      title: 'Vetted Trades Assigned',
      desc: 'Certified builders, plumbers & electricians with proven standards.',
      icon: Users,
    },
    {
      number: '03',
      title: 'Site Supervision',
      desc: 'Strict QA, correct concrete ratios & diaspora milestone reporting.',
      icon: HardHat,
    },
    {
      number: '04',
      title: 'Project Completed',
      desc: 'Delivered on time, on budget, with excess material return credit.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="customer-journey" className="py-20 sm:py-28 bg-[#12151D] relative border-t border-white/10 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-industrial-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
            The Simplified Construction Model
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            One Partner. <span className="text-[#E51E25]">Less Stress.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            We replaced fragmented suppliers, unreliable artisans, and mystery pricing with a single synchronized delivery pipeline.
          </p>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="relative mb-20">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#E51E25]/20 via-[#E51E25] to-[#E51E25]/20 -translate-y-6 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1A1E26] rounded-2xl p-6 border border-white/10 hover:border-[#E51E25]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center justify-center text-[#E51E25] group-hover:bg-[#E51E25] group-hover:text-white transition-colors duration-200 shadow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono-acc font-bold text-2xl text-gray-500 group-hover:text-[#E51E25] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-2xl text-white uppercase leading-tight mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1 text-[11px] text-[#E51E25] font-mono-acc font-bold uppercase">
                    <span>Stage Verified</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Comparison: Traditional Chaos vs TASH Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Traditional Way (Problem) */}
          <div className="bg-[#14171F]/80 rounded-2xl p-6 sm:p-8 border border-red-900/30">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white uppercase">The Traditional Building Headache</h3>
                <span className="text-xs text-red-400 font-mono-acc">Fragmented & High Risk</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Dealing with 5-7 separate hardware vendors with unpredictable stock and inflated transport fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Unvetted artisans causing structural errors, wrong concrete mixing ratios, and site delays.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Cement hardening in the rain or getting stolen due to lack of phased release schedules.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Zero accountability: suppliers blame the builder; the builder blames the materials.</span>
              </li>
            </ul>
          </div>

          {/* TASH Way (Solution) */}
          <div className="bg-gradient-to-br from-[#1E2430] to-[#14171F] rounded-2xl p-6 sm:p-8 border border-[#E51E25]/50 shadow-2xl relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 bg-[#E51E25] text-white text-[11px] font-mono-acc font-bold uppercase rounded-full shadow">
              The TASH Standard
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#E51E25] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white uppercase">The TASH Integrated Partnership</h3>
                <span className="text-xs text-emerald-400 font-mono-acc">Coordinated & Accountable</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>One direct source for all materials, from foundation steel and cement to finishing roofs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Pre-vetted master builders, plumbers, and electricians coordinated under experienced site supervision.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Controlled phased releases (10-bag system) and return credit on eligible excess materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Transparent BOQ pricing and regular progress reporting (ideal for local and diaspora clients).</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-base uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Building With TASH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
