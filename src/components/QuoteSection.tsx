import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  FileText,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { COMPANY_INFO, CURRENT_CAMPAIGN } from '../data/siteData';

interface QuoteSectionProps {
  initialService?: string;
  initialMaterials?: string[];
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ 
  initialService = '', 
  initialMaterials = [] 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    location: 'Harare (Central / Suburbs)',
    timeline: 'Immediate (Within 1-2 Weeks)',
    message: '',
    hasBOQ: false,
  });

  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Sync initial passed service/materials
  useEffect(() => {
    const initialList: string[] = [];
    if (initialService) initialList.push(initialService);
    if (initialMaterials && initialMaterials.length > 0) {
      initialList.push(...initialMaterials);
    }
    if (initialList.length > 0) {
      setSelectedNeeds(prev => Array.from(new Set([...prev, ...initialList])));
    }
  }, [initialService, initialMaterials]);

  const availableNeeds = [
    '32.5R / 42.5N Cement Supply',
    'High-Yield Deformed Rebar & Mesh',
    'Bricks & Aggregate Quarry Stones',
    'Chromadek Roofing & Timber Trusses',
    'Commercial Building Works',
    'Residential Home / Cluster Build',
    'Civil Works, Excavation & Paving',
    'Qualified Builder / Plumber / Spark',
    'On-Site Project Supervision',
    'Free Quantity Surveyor Consultation'
  ];

  const toggleNeed = (item: string) => {
    setSelectedNeeds(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    let text = `*NEW PROJECT QUOTE INQUIRY (TASH Hardware Website)*\n\n`;
    text += `👤 *Client Name:* ${formData.name || 'Not specified'}\n`;
    text += `📞 *Phone:* ${formData.phone || 'Not specified'}\n`;
    text += `✉️ *Email:* ${formData.email || 'Not specified'}\n`;
    text += `🏗️ *Project Type:* ${formData.projectType}\n`;
    text += `📍 *Site Location:* ${formData.location}\n`;
    text += `⏱️ *Timeline:* ${formData.timeline}\n`;
    text += `📋 *Services & Materials Needed:*\n${selectedNeeds.length > 0 ? selectedNeeds.map(n => ` • ${n}`).join('\n') : ' • General Consultation'}\n\n`;
    if (formData.hasBOQ) {
      text += `📄 *BOQ / Plans Available:* Yes, will attach drawing/BOQ.\n\n`;
    }
    if (formData.message) {
      text += `💬 *Project Notes:* ${formData.message}\n\n`;
    }
    text += `Please review and provide a transparent, itemized quotation.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#12151D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-acc uppercase tracking-widest text-[#E51E25] font-bold mb-3">
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
            Direct Estimation & Inquiries
            <span className="w-6 h-0.5 bg-[#E51E25]"></span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
            Let's Talk About <span className="text-[#E51E25]">Your Project.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Fill out the form below for a rapid response, or send your Bill of Quantities directly to our WhatsApp team for same-day estimation.
          </p>
        </div>

        {/* Main Grid: Form on Left, Contact Matrix on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: High-Conversion Form */}
          <div className="lg:col-span-7 bg-[#14171F] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-3xl text-white uppercase">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our quantity surveyor and estimation team is reviewing your project requirements.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-gray-300 space-y-1">
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Project Type:</strong> {formData.projectType}</div>
                  <div><strong>Location:</strong> {formData.location}</div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/263719043295?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp for Instant Review</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tendai Moyo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#E51E25] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +263 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm font-mono-acc focus:outline-hidden focus:border-[#E51E25] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#E51E25] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                      Site Location / Suburb *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Borrowdale, Harare / Ruwa / Chitungwiza"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#E51E25] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white text-sm focus:outline-hidden focus:border-[#E51E25]"
                    >
                      <option value="Residential Construction">Residential Construction / New Home</option>
                      <option value="Commercial Build / Fit-Out">Commercial Build / Office / Retail</option>
                      <option value="Industrial Warehouse / Slab">Industrial Warehouse / Heavy Slab</option>
                      <option value="Civil Works & Retaining Walls">Civil Works, Earthworks & Paving</option>
                      <option value="Building Materials Supply Only">Building Materials Supply Only</option>
                      <option value="Renovations & Roof Expansion">Major Renovation / Roof Conversion</option>
                      <option value="Site Supervision & Trade Management">Site Supervision & Trade Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                      Target Start Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white text-sm focus:outline-hidden focus:border-[#E51E25]"
                    >
                      <option value="Immediate (Within 1-2 Weeks)">Immediate (Within 1-2 Weeks)</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="Within 3 Months">Within 3 Months</option>
                      <option value="Planning & Cost Estimation Phase">Planning & Estimation Phase</option>
                    </select>
                  </div>
                </div>

                {/* What do you need? (Pill checklist) */}
                <div>
                  <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-2">
                    What Do You Need? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableNeeds.map((need, idx) => {
                      const isSelected = selectedNeeds.includes(need);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleNeed(need)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#E51E25] text-white border-[#E51E25] shadow'
                              : 'bg-[#0B0D11] text-gray-400 border-white/10 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {isSelected && '✓ '}
                          {need}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Scope Notes */}
                <div>
                  <label className="block text-xs font-mono-acc font-bold uppercase text-gray-300 mb-1.5">
                    Project Details / Estimated Material Quantities
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your site requirements, number of bags of cement, brick quantities, wall lengths, or project milestones..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0D11] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-hidden focus:border-[#E51E25] transition-colors"
                  ></textarea>
                </div>

                {/* BOQ Checkbox */}
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <input
                    type="checkbox"
                    id="hasBOQ"
                    checked={formData.hasBOQ}
                    onChange={(e) => setFormData({ ...formData, hasBOQ: e.target.checked })}
                    className="w-4 h-4 accent-[#E51E25] rounded cursor-pointer"
                  />
                  <label htmlFor="hasBOQ" className="text-xs text-gray-300 cursor-pointer">
                    I have an architectural plan or Bill of Quantities (BOQ) ready to send.
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    id="quote-form-submit-btn"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-4 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-black text-base uppercase tracking-wider rounded-xl shadow-xl transition-all cursor-pointer"
                  >
                    <span>Request My Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <a
                    href={`https://wa.me/263719043295?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-black" />
                    <span>Send Via WhatsApp</span>
                  </a>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: Direct Contact & Phone Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Numbers Matrix */}
            <div className="bg-[#14171F] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-acc uppercase font-bold text-[#E51E25]">
                <Phone className="w-4 h-4" />
                <span>Direct Phone Lines & WhatsApp</span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white uppercase leading-tight">
                Call Our Project Coordinators
              </h3>

              <div className="space-y-2.5 pt-2">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#E51E25]/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E51E25]/15 text-[#E51E25] flex items-center justify-center group-hover:bg-[#E51E25] group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-mono-acc font-bold text-sm text-white group-hover:text-[#E51E25] transition-colors">
                        {phone.display}
                      </span>
                    </div>

                    {phone.primary ? (
                      <span className="text-[10px] bg-[#E51E25] text-white font-mono-acc font-bold px-2 py-0.5 rounded uppercase">
                        Main
                      </span>
                    ) : (
                      <span className="text-[10px] text-gray-400 font-mono-acc uppercase">
                        Line {idx + 1}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="bg-[#14171F] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E51E25]/15 text-[#E51E25] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono-acc uppercase text-gray-400 font-bold">Email Inquiries</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-[#E51E25] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#E51E25]/15 text-[#E51E25] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono-acc uppercase text-gray-400 font-bold">Service Location</div>
                  <div className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#E51E25]/15 text-[#E51E25] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono-acc uppercase text-gray-400 font-bold">Business Hours</div>
                  <div className="text-xs text-gray-300 mt-0.5">
                    {COMPANY_INFO.openingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Summary Pill */}
            <div className="p-4 rounded-xl bg-[#E51E25]/15 border border-[#E51E25]/30 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0" />
              <div className="text-xs text-white">
                <strong className="text-amber-300">{CURRENT_CAMPAIGN.highlight}</strong> — available on qualifying projects.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
