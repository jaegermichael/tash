import React, { useState } from 'react';
import { Calculator, X, MessageSquare, ArrowRight, Layers, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface MaterialEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToQuote: (materials: string[]) => void;
}

type CalculatorTab = 'bricks' | 'concrete' | 'plaster' | 'roofing';

export const MaterialEstimatorModal: React.FC<MaterialEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToQuote
}) => {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('bricks');

  // Brickwork inputs
  const [wallLength, setWallLength] = useState<number>(10);
  const [wallHeight, setWallHeight] = useState<number>(2.7);
  const [wallType, setWallType] = useState<'single' | 'double'>('double'); // 4.5" single skin or 9" double skin

  // Concrete inputs
  const [slabLength, setSlabLength] = useState<number>(10);
  const [slabWidth, setSlabWidth] = useState<number>(8);
  const [slabThickness, setSlabThickness] = useState<number>(0.15); // in metres (150mm)

  // Plaster inputs
  const [plasterArea, setPlasterArea] = useState<number>(60);

  // Roofing inputs
  const [roofLength, setRoofLength] = useState<number>(12);
  const [roofWidth, setRoofWidth] = useState<number>(8);

  if (!isOpen) return null;

  // Brickwork calculations (Standard Zimbabwean standard brick 222mm x 106mm x 73mm)
  // Single skin: ~55 bricks per m2 + 5% wastage = ~58
  // Double skin: ~110 bricks per m2 + 5% wastage = ~116
  const wallArea = Math.max(0.1, wallLength * wallHeight);
  const brickRatePerM2 = wallType === 'single' ? 58 : 116;
  const totalBricks = Math.round(wallArea * brickRatePerM2);
  // Mortar cement: ~1 bag per 350-400 single bricks or ~200 double bricks
  const cementBagsMortar = Math.ceil(totalBricks / (wallType === 'single' ? 380 : 200));
  const pitSandCubic = (totalBricks * 0.0006).toFixed(1);

  // Concrete calculations (1:2:4 Mix ratio for standard foundations/slabs)
  // 1 m3 requires approx 6-7 bags of 32.5R/42.5N cement, 0.5m3 river sand, 0.8m3 quarry stone
  const concreteVolume = Math.max(0.1, slabLength * slabWidth * slabThickness);
  const concreteCementBags = Math.ceil(concreteVolume * 6.5);
  const riverSandM3 = (concreteVolume * 0.55).toFixed(1);
  const quarryStoneM3 = (concreteVolume * 0.85).toFixed(1);
  const brcMeshSheets = Math.ceil((slabLength * slabWidth) / (2.4 * 6)); // Standard sheet 2.4m x 6m

  // Plaster calculations (1:4 Mix, 15mm thick)
  // 1 bag cement plasters approx 8-10 m2 at 15mm
  const plasterCementBags = Math.ceil(plasterArea / 9);
  const plasterSandM3 = (plasterArea * 0.02).toFixed(1);

  // Roofing calculations (IBR 0.686m effective cover)
  const roofTotalSheets = Math.ceil((roofLength / 0.686) * 2); // both slopes
  const sheetLength = (roofWidth / 2 / Math.cos(25 * (Math.PI / 180))).toFixed(1); // 25 degree pitch approx

  // Build WhatsApp share string
  const getWhatsAppEstimateText = () => {
    let text = `Hello TASH Hardware, I used your website Material Estimator for my project:\n\n`;
    if (activeTab === 'bricks') {
      text += `🧱 *Brickwork Estimate:*\n• Wall: ${wallLength}m × ${wallHeight}m (${wallType === 'double' ? 'Double 9" Wall' : 'Single 4.5" Wall'})\n• Total Bricks: ${totalBricks.toLocaleString()} pcs\n• Cement for Mortar: ${cementBagsMortar} bags\n• Pit Sand: ~${pitSandCubic} m³\n`;
    } else if (activeTab === 'concrete') {
      text += `🏗️ *Concrete Slab Estimate:*\n• Slab Size: ${slabLength}m × ${slabWidth}m × ${slabThickness * 1000}mm (${concreteVolume.toFixed(1)} m³)\n• Cement Bags (32.5R/42.5N): ${concreteCementBags} bags\n• Washed River Sand: ~${riverSandM3} m³\n• 3/4 Quarry Stone: ~${quarryStoneM3} m³\n• BRC Mesh: ~${brcMeshSheets} sheets\n`;
    } else if (activeTab === 'plaster') {
      text += `🏛️ *Plastering Estimate:*\n• Wall Area: ${plasterArea} m²\n• Cement Bags: ${plasterCementBags} bags\n• Plaster Sand: ~${plasterSandM3} m³\n`;
    } else {
      text += `🏠 *Roofing Estimate:*\n• Roof Span: ${roofLength}m × ${roofWidth}m\n• IBR Chromadek Sheets: ~${roofTotalSheets} sheets @ ${sheetLength}m each\n`;
    }
    text += `\nPlease provide a competitive delivered quote to our site.`;
    return encodeURIComponent(text);
  };

  const handleApplyToQuote = () => {
    const items: string[] = [];
    if (activeTab === 'bricks') {
      items.push(`Common Bricks (${totalBricks.toLocaleString()} pcs)`, `Cement for Mortar (${cementBagsMortar} bags)`, `Pit Sand (${pitSandCubic} m³)`);
    } else if (activeTab === 'concrete') {
      items.push(`Structural Cement (${concreteCementBags} bags)`, `River Sand (${riverSandM3} m³)`, `3/4 Quarry Stone (${quarryStoneM3} m³)`, `BRC Welded Mesh (${brcMeshSheets} sheets)`);
    } else if (activeTab === 'plaster') {
      items.push(`Cement for Plaster (${plasterCementBags} bags)`, `Plaster Sand (${plasterSandM3} m³)`);
    } else {
      items.push(`IBR Chromadek Roofing Sheets (${roofTotalSheets} sheets @ ${sheetLength}m)`);
    }
    onApplyToQuote(items);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#14171F] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1A1E26] via-[#14171F] to-[#1A1E26] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E51E25] flex items-center justify-center text-white shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase leading-none">
                Construction Material Estimator
              </h3>
              <p className="text-xs text-gray-400 mt-1 font-mono-acc">
                Quick calculations for Zimbabwean building standards
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close estimator"
            className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#0B0D11] p-1.5 gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('bricks')}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono-acc font-bold uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'bricks'
                ? 'bg-[#E51E25] text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            🧱 Brickwork & Mortar
          </button>
          <button
            onClick={() => setActiveTab('concrete')}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono-acc font-bold uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'concrete'
                ? 'bg-[#E51E25] text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            🏗️ Concrete Slab & Footing
          </button>
          <button
            onClick={() => setActiveTab('plaster')}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono-acc font-bold uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'plaster'
                ? 'bg-[#E51E25] text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            🏛️ Wall Plaster
          </button>
          <button
            onClick={() => setActiveTab('roofing')}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono-acc font-bold uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'roofing'
                ? 'bg-[#E51E25] text-white shadow'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            🏠 Chromadek Roofing
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#14171F]">
          
          {/* TAB 1: BRICKWORK */}
          {activeTab === 'bricks' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Wall Length (Metres)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={wallLength}
                    onChange={(e) => setWallLength(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Wall Height (Metres)
                  </label>
                  <input
                    type="number"
                    min="0.5"
                    step="0.1"
                    value={wallHeight}
                    onChange={(e) => setWallHeight(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Wall Thickness
                  </label>
                  <select
                    value={wallType}
                    onChange={(e) => setWallType(e.target.value as 'single' | 'double')}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  >
                    <option value="double">9" Double Wall (Main Structural)</option>
                    <option value="single">4.5" Single Skin (Partition Wall)</option>
                  </select>
                </div>
              </div>

              {/* Result Cards */}
              <div className="p-5 rounded-xl bg-[#1A1E26] border border-white/15 space-y-4">
                <div className="text-xs font-mono-acc uppercase font-bold text-[#E51E25] tracking-wider">
                  Estimated Quantities ({wallArea.toFixed(1)} m² wall surface):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[11px] text-gray-400 font-mono-acc uppercase">Common Bricks</div>
                    <div className="text-2xl font-heading font-black text-white mt-0.5">
                      {totalBricks.toLocaleString()} <span className="text-xs font-sans font-normal text-gray-400">pcs (incl 5% waste)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[11px] text-gray-400 font-mono-acc uppercase">Cement (50kg bags)</div>
                    <div className="text-2xl font-heading font-black text-[#E51E25] mt-0.5">
                      {cementBagsMortar} <span className="text-xs font-sans font-normal text-gray-400">bags (32.5R)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[11px] text-gray-400 font-mono-acc uppercase">Pit Sand</div>
                    <div className="text-2xl font-heading font-black text-white mt-0.5">
                      ~{pitSandCubic} <span className="text-xs font-sans font-normal text-gray-400">m³</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 font-mono-acc flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Tip: Ask for TASH's phased 10-bag release to keep your cement fresh on site!</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONCRETE SLAB */}
          {activeTab === 'concrete' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Slab Length (Metres)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={slabLength}
                    onChange={(e) => setSlabLength(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Slab Width (Metres)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={slabWidth}
                    onChange={(e) => setSlabWidth(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Thickness
                  </label>
                  <select
                    value={slabThickness}
                    onChange={(e) => setSlabThickness(parseFloat(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  >
                    <option value={0.10}>100mm (Standard Floor Bed)</option>
                    <option value={0.15}>150mm (Reinforced Raft / Driveway)</option>
                    <option value={0.20}>200mm (Heavy Commercial / Suspended)</option>
                  </select>
                </div>
              </div>

              {/* Concrete Result Cards */}
              <div className="p-5 rounded-xl bg-[#1A1E26] border border-white/15 space-y-4">
                <div className="text-xs font-mono-acc uppercase font-bold text-[#E51E25] tracking-wider">
                  Total Volume: {concreteVolume.toFixed(1)} m³ (1:2:4 Mix Ratio)
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[10px] text-gray-400 font-mono-acc uppercase">Cement (50kg)</div>
                    <div className="text-xl font-heading font-black text-[#E51E25] mt-0.5">
                      {concreteCementBags} <span className="text-xs font-sans font-normal text-gray-400">bags</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[10px] text-gray-400 font-mono-acc uppercase">River Sand</div>
                    <div className="text-xl font-heading font-black text-white mt-0.5">
                      ~{riverSandM3} <span className="text-xs font-sans font-normal text-gray-400">m³</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[10px] text-gray-400 font-mono-acc uppercase">3/4 Quarry Stone</div>
                    <div className="text-xl font-heading font-black text-white mt-0.5">
                      ~{quarryStoneM3} <span className="text-xs font-sans font-normal text-gray-400">m³</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-[10px] text-gray-400 font-mono-acc uppercase">BRC Mesh Sheets</div>
                    <div className="text-xl font-heading font-black text-white mt-0.5">
                      {brcMeshSheets} <span className="text-xs font-sans font-normal text-gray-400">sheets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PLASTERING */}
          {activeTab === 'plaster' && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                  Total Wall Plastering Area (m²)
                </label>
                <input
                  type="number"
                  min="1"
                  value={plasterArea}
                  onChange={(e) => setPlasterArea(parseFloat(e.target.value) || 1)}
                  className="w-full max-w-sm px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Average 3-bedroom interior/exterior walls range between 200m² - 450m².
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1E26] border border-white/15 space-y-4">
                <div className="text-xs font-mono-acc uppercase font-bold text-[#E51E25] tracking-wider">
                  Plaster Material Requirements (1:4 Mix, 15mm):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-xs text-gray-400 font-mono-acc uppercase">Plaster Cement</div>
                    <div className="text-2xl font-heading font-black text-[#E51E25] mt-0.5">
                      {plasterCementBags} <span className="text-sm font-sans font-normal text-gray-400">bags (32.5R)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-xs text-gray-400 font-mono-acc uppercase">Plaster Sand</div>
                    <div className="text-2xl font-heading font-black text-white mt-0.5">
                      ~{plasterSandM3} <span className="text-sm font-sans font-normal text-gray-400">m³</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ROOFING */}
          {activeTab === 'roofing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Building Length (Metres)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={roofLength}
                    onChange={(e) => setRoofLength(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-acc font-semibold text-gray-300 uppercase mb-1.5">
                    Building Width (Metres)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={roofWidth}
                    onChange={(e) => setRoofWidth(parseFloat(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D11] border border-white/15 rounded-xl text-white font-mono-acc focus:outline-hidden focus:border-[#E51E25]"
                  />
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#1A1E26] border border-white/15 space-y-4">
                <div className="text-xs font-mono-acc uppercase font-bold text-[#E51E25] tracking-wider">
                  Estimated IBR Chromadek Roofing Sheets:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-xs text-gray-400 font-mono-acc uppercase">Total Sheets Needed</div>
                    <div className="text-2xl font-heading font-black text-white mt-0.5">
                      ~{roofTotalSheets} <span className="text-sm font-sans font-normal text-gray-400">sheets</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0B0D11] border border-white/10">
                    <div className="text-xs text-gray-400 font-mono-acc uppercase">Estimated Sheet Length</div>
                    <div className="text-2xl font-heading font-black text-[#E51E25] mt-0.5">
                      {sheetLength} <span className="text-sm font-sans font-normal text-gray-400">metres per sheet</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400">
                  *TASH custom cuts IBR & Corrugated Chromadek sheets to your exact truss measurements in 0.4mm and 0.5mm gauges.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0B0D11] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            *Estimates based on standard construction ratios with typical waste allowances.
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/263719043295?text=${getWhatsAppEstimateText()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              <span>Send To WhatsApp</span>
            </a>

            <button
              onClick={handleApplyToQuote}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-[#E51E25] hover:bg-[#C4161C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              <span>Add to Quote Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
