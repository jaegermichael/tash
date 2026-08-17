import React from 'react';
import { Building, Home, Shovel, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      id: 'commercial',
      title: 'Commercial & Industrial',
      desc: 'Offices, retail & warehouses',
      icon: Building,
      href: '#services'
    },
    {
      id: 'residential',
      title: 'Residential Development',
      desc: 'Custom homes & clusters',
      icon: Home,
      href: '#services'
    },
    {
      id: 'civil',
      title: 'Civil Works & Infrastructure',
      desc: 'Site prep, paving & drainage',
      icon: Shovel,
      href: '#services'
    },
    {
      id: 'hardware',
      title: 'Hardware & Materials',
      desc: 'Certified cement, steel & supplies',
      icon: Layers,
      href: '#materials'
    },
    {
      id: 'management',
      title: 'Project Management',
      desc: 'Site managers & vetted trades',
      icon: ShieldCheck,
      href: '#services'
    }
  ];

  return (
    <section id="trust-bar" aria-label="Core Capabilities" className="relative z-20 bg-[#12151D] border-y border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className="group flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-[#E51E25]/40 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E51E25]/10 border border-[#E51E25]/20 flex items-center justify-center text-[#E51E25] group-hover:bg-[#E51E25] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#E51E25] transition-colors leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
