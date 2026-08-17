import React, { useState } from 'react';
import { MapPin, Calendar, Layers, ArrowRight, Check, X, Building, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/siteData';
import { ProjectItem } from '../types';

interface ProjectsPortfolioProps {
  onOpenQuote: () => void;
}

type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Civil Works';

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onOpenQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Industrial', 'Civil Works'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0B0D11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
              <span className="w-6 h-0.5 bg-[#E51E25]"></span>
              Portfolio & Case Studies
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              Built For <span className="text-[#E51E25]">Real Projects.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
            Examine our proven track record supplying materials, managing site deliveries, and coordinating structural executions across Zimbabwe.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-acc font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-[#E51E25] text-white shadow-lg shadow-red-600/30'
                  : 'bg-[#14171F] text-gray-400 hover:text-white hover:bg-[#1A1E26] border border-white/10'
              }`}
            >
              {cat} {cat === 'All' ? `(${PROJECTS_DATA.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Masonry/Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative bg-[#14171F] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E51E25]/50 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171F] via-[#14171F]/30 to-transparent"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-md border border-white/10 text-[11px] font-mono-acc font-bold uppercase text-[#E51E25]">
                    {project.category}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono-acc text-gray-300">
                    {project.year}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  {/* Location Pin */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono-acc mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E51E25]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl text-white uppercase group-hover:text-[#E51E25] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats Pill Strip */}
                  {project.stats && (
                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                      {project.stats.map((s, idx) => (
                        <div key={idx} className="bg-white/5 p-2 rounded-lg border border-white/5">
                          <div className="text-[10px] font-mono-acc uppercase text-gray-400 truncate">{s.label}</div>
                          <div className="text-xs font-bold text-white mt-0.5 truncate">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs font-mono-acc text-[#E51E25] font-bold uppercase tracking-wider flex items-center gap-1">
                  View Full Case Study
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-gray-500 font-mono-acc">
                  Verified Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-base uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Have a Similar Project? Get A Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Project Case Study Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#14171F] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 bg-black flex-shrink-0">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14171F] via-[#14171F]/40 to-transparent"></div>
              
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 bg-[#E51E25] text-white font-mono-acc text-xs font-bold uppercase rounded">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs text-gray-300 font-mono-acc flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E51E25]" />
                    {activeModalProject.location}
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div>
                <h4 className="text-xs font-mono-acc font-bold uppercase tracking-wider text-gray-400">
                  Project Background
                </h4>
                <p className="mt-1.5 text-sm text-gray-200 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Key Scope Executed */}
              <div>
                <h4 className="text-xs font-mono-acc font-bold uppercase tracking-wider text-gray-400">
                  Scope of Works Executed
                </h4>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 p-2 rounded bg-white/5 border border-white/5">
                      <Check className="w-4 h-4 text-[#E51E25] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Supplied */}
              <div>
                <h4 className="text-xs font-mono-acc font-bold uppercase tracking-wider text-gray-400">
                  TASH Hardware Materials Supplied
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeModalProject.materialsSupplied.map((mat, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-200 font-mono-acc">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats Matrix */}
              {activeModalProject.stats && (
                <div className="p-4 rounded-xl bg-[#1A1E26] border border-white/10">
                  <div className="text-xs font-mono-acc uppercase font-bold text-[#E51E25] mb-3">
                    Project Performance Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {activeModalProject.stats.map((s, idx) => (
                      <div key={idx} className="bg-[#0B0D11] p-3 rounded-lg border border-white/5">
                        <div className="text-xs text-gray-400 font-mono-acc">{s.label}</div>
                        <div className="text-sm sm:text-base font-heading font-black text-white mt-0.5">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#0B0D11] flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white uppercase transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenQuote();
                }}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transition-colors cursor-pointer"
              >
                <span>Request Quote for Similar Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
