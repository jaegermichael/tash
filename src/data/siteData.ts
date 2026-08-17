import { ServiceItem, MaterialCategory, ProjectItem, ValueProp, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'TASH Hardware',
  tagline: 'Building Made Easier, Cheaper & Stress-Free.',
  subheadline: 'Quality construction solutions, materials and project support for residential, commercial and industrial developments across Zimbabwe.',
  phones: [
    { display: '+263 71 904 3295', raw: '+263719043295', primary: true, isWhatsApp: true },
    { display: '+263 71 636 4464', raw: '+263716364464', primary: false, isWhatsApp: true },
    { display: '+263 77 304 3295', raw: '+263773043295', primary: false, isWhatsApp: true },
    { display: '+263 77 770 3405', raw: '+263777703405', primary: false, isWhatsApp: true },
  ],
  email: 'tashhardware@gmail.com',
  address: 'Harare, Zimbabwe (Serving Harare, Chitungwiza, Ruwa, Norton & Nationwide)',
  openingHours: 'Mon - Sat: 7:30 AM - 5:00 PM | Sun: On-Call Project Support',
  whatsappDirectUrl: 'https://wa.me/263719043295?text=Hello%20TASH%20Hardware,%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20construction%20project.',
};

export const CURRENT_CAMPAIGN = {
  title: 'Limited Campaign Offer',
  highlight: 'Free Quantity Surveyor Consultation & Site Assessment',
  secondaryHighlight: 'Free Delivery on qualifying material orders within 10km radius',
  validityNote: 'Promotional campaign terms subject to project scope & verification. Contact our team to confirm current validity.',
  badgeText: 'Active Campaign',
};

export const TRUST_PILLARS = [
  { id: 'commercial', title: 'Commercial & Industrial', desc: 'Retail, Offices & Warehouses' },
  { id: 'residential', title: 'Residential Development', desc: 'Custom Homes & Multi-Units' },
  { id: 'civil', title: 'Civil Works & Infrastructure', desc: 'Excavation, Utilities & Paving' },
  { id: 'hardware', title: 'Hardware & Materials', desc: 'Cement, Steel & Construction Supplies' },
  { id: 'project-mgmt', title: 'Project Management', desc: 'Qualified Trades & Site Supervision' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'commercial-industrial',
    number: '01',
    title: 'Commercial & Industrial Construction',
    subtitle: 'High-Standard Structural & Commercial Builds',
    description: 'Turnkey and structural development for commercial office spaces, retail plazas, factories, and heavy-duty industrial warehouses with disciplined scheduling and budget controls.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861563?q=80&w=1200&auto=format&fit=crop',
    tag: 'Commercial & Industrial',
    idealFor: 'Property developers, business owners, industrial investors, and corporate tenants.',
    features: [
      'New office, retail and factory builds from foundation to finishing',
      'Interior fit-outs & commercial tenant improvements',
      'Industrial warehouse extensions & structural steel erections',
      'Structural expansions, reinforced slabs & mezzanine floors'
    ],
    deliverables: [
      'Structural engineering coordination & compliance',
      'High-grade material procurement & delivery scheduling',
      'Dedicated on-site supervision and milestone verification'
    ]
  },
  {
    id: 'residential-development',
    number: '02',
    title: 'Residential Development',
    subtitle: 'Crafted Homes, Clusters & Multi-Units',
    description: 'Comprehensive residential construction services tailored to private homeowners, diaspora investors, and residential estate developers in Harare and surrounding regions.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tag: 'Residential Builds',
    idealFor: 'Diaspora homebuilders, private land owners, cluster housing developers, and renovation projects.',
    features: [
      'Custom single-family luxury homes and contemporary villas',
      'Apartments, cluster complexes & townhouse developments',
      'Multi-unit residential projects & duplex extensions',
      'Major structural renovations, roof conversions & modern additions'
    ],
    deliverables: [
      'Accurate Bill of Quantities (BOQ) preparation & cost tracking',
      'Certified bricklayers, plasterers, roofers & finishes specialists',
      'Strict quality oversight with regular photo & video milestone updates'
    ]
  },
  {
    id: 'civil-works',
    number: '03',
    title: 'Civil Works & Infrastructure',
    subtitle: 'Earthworks, Utilities & Ground Engineering',
    description: 'Solid foundation, earthmoving, drainage, and utility infrastructure solutions executing site preparation and durable ground engineering before and during building.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop',
    tag: 'Civil Engineering',
    idealFor: 'New subdivision developments, industrial premises, steep topography sites, and municipal access.',
    features: [
      'Site preparation, clearing, excavation & precision grading',
      'Soil stabilization, compaction & geotechnical preparation',
      'Water reticulation & sewer utility pipeline installation',
      'Electrical utility trenching & substructure cable installation',
      'Concrete works, heavy-duty paving, storm drains & retaining walls'
    ],
    deliverables: [
      'Heavy plant machinery deployment & earthworks management',
      'Engineered retaining walls and erosion mitigation',
      'Robust road base and durable interlocking concrete paving'
    ]
  },
  {
    id: 'hardware-materials',
    number: '04',
    title: 'Hardware & Building Materials',
    subtitle: 'Direct Supply of Certified Construction Materials',
    description: 'A direct supply channel for construction essentials—from certified cement and high-tensile steel to roofing sheets, plumbing components, and electrical infrastructure.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    tag: 'Direct Supply',
    idealFor: 'Contractors, project managers, owner-builders, and trade artisans.',
    features: [
      'Top-tier Portland cement (32.5R & 42.5N grades)',
      'High-tensile deformed rebar, BRC mesh & binding wire',
      'Common bricks, load-bearing pavers, gravel & river sand',
      'Corrugated & IBR chromadek roofing, treated timber trusses',
      'Industrial plumbing PVC, copper pipes, electrical cables & conduit'
    ],
    deliverables: [
      'Scheduled bulk site deliveries with offloading support',
      'Controlled phased releases (e.g. 10-bag cement batches) to prevent waste',
      'Excess material return and account credit options on eligible items'
    ]
  },
  {
    id: 'project-management',
    number: '05',
    title: 'Project Management & Supervision',
    subtitle: 'End-to-End Oversight & Vetted Tradespeople',
    description: 'Bridging the gap between materials and craftsmanship. We provide experienced site managers and connect you with qualified builders, plumbers, and electricians.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Supervision & Trade Support',
    idealFor: 'Busy professionals, diaspora clients building remotely, and developers needing on-site oversight.',
    features: [
      'Dedicated on-site site managers and quality control supervisors',
      'Access to pre-vetted, certified builders, plumbers & electricians',
      'Milestone tracking, stage sign-offs, and transparent cost auditing',
      'Daily site logs, photographic progress reports & diaspora updates'
    ],
    deliverables: [
      'Risk mitigation and waste prevention on construction sites',
      'Direct coordination between material deliveries and artisan workflows',
      'Peace of mind that your budget is protected and build is up to standard'
    ]
  }
];

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: 'qs-consultation',
    title: 'Free Quantity Surveyor Consultation',
    description: 'Get your construction plans and Bill of Quantities (BOQ) reviewed by our experienced estimation specialists to pinpoint cost savings before you pour a single foundation.',
    iconName: 'Calculator',
    highlightTag: 'Campaign Offer',
    isPromotional: true,
    promoNotice: 'Available as a promotional campaign offer on qualifying residential and commercial projects.'
  },
  {
    id: 'free-delivery',
    title: 'Free Delivery (Within 10km)',
    description: 'Save on heavy transportation costs with complimentary direct-to-site delivery on qualifying bulk building material orders within designated delivery zones.',
    iconName: 'Truck',
    highlightTag: 'Delivery Benefit',
    isPromotional: true,
    promoNotice: 'Promotional delivery radius based on order volume and project location.'
  },
  {
    id: 'competitive-pricing',
    title: 'Fair & Competitive Pricing',
    description: 'We eliminate unnecessary middlemen markups. Direct-from-source procurement gives you wholesale-tier rates for cement, steel, timber, and roofing.',
    iconName: 'TrendingDown',
    highlightTag: 'Budget Friendly'
  },
  {
    id: 'excess-materials',
    title: 'Return Excess Materials',
    description: 'Ordered too many unopened bags of cement, tiles, or fittings? Return eligible uncompromised materials for account credit so not a single dollar goes to waste.',
    iconName: 'RefreshCw',
    highlightTag: 'Zero Waste'
  },
  {
    id: 'qualified-trades',
    title: 'Qualified & Vetted Tradespeople',
    description: 'Avoid rogue contractors. Access our curated network of certified master builders, licensed plumbers, and certified electricians with proven track records.',
    iconName: 'UsersCheck',
    highlightTag: 'Vetted Artisans'
  },
  {
    id: 'site-supervision',
    title: 'Dedicated Site Supervision',
    description: 'Experienced site managers conduct stage-by-stage inspections, ensuring correct material mixing ratios, structural alignment, and adherence to architectural drawings.',
    iconName: 'ShieldCheck',
    highlightTag: 'Quality Control'
  },
  {
    id: 'cement-release',
    title: 'Controlled Phased Cement Release',
    description: 'Protect your cement from moisture, theft, and site hardening. Take advantage of our scheduled 10-bag batch release system as your project advances.',
    iconName: 'Layers',
    highlightTag: 'Smart Phasing',
    isPromotional: true,
    promoNotice: 'Flexible batching schedule coordinated directly with your site foreman.'
  }
];

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: 'cement-aggregates',
    name: 'Cement & Aggregates',
    description: 'Certified 32.5R & 42.5N cement, washed river sand, pit sand, 3/4 quarry stone, and gravel.',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop',
    popularItems: ['Sino-Zimbabwe / PPC 32.5R (50kg)', 'Rapid Hardening 42.5N Cement', 'Washed River Sand (per m³ / truckload)', '3/4 Concrete Quarry Stones', 'Crusher Run & Gravel Base'],
    unitTypes: '50kg Bags, m³, 10m³-20m³ Tipper Loads',
    leadTime: 'Same day / Next day on site',
    isPopular: true
  },
  {
    id: 'structural-steel',
    name: 'Structural Steel & Mesh',
    description: 'Deformed high-yield reinforcement bars, BRC welded mesh sheets, round bars, and binding wire.',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=800&auto=format&fit=crop',
    popularItems: ['Y10, Y12, Y16 & Y20 Deformed Rebar (6m & 12m)', 'BRC Ref 65 & 88 Welded Mesh', 'Black Binding Wire (25kg rolls)', 'Angle Irons & Square Tubing', 'Lintels & Concrete Reinforcement'],
    unitTypes: 'Lengths (6m/12m), Rolls, Bundles',
    leadTime: 'Immediate dispatch',
    isPopular: true
  },
  {
    id: 'brickwork-masonry',
    name: 'Bricks & Masonry Supplies',
    description: 'Solid standard common bricks, load-bearing concrete blocks, face bricks, and brickforce wire.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    popularItems: ['Solid Common Bricks (Kiln-fired)', 'Concrete Hollow Blocks (4", 6", 9")', 'Semi-face & Clinker Bricks', 'Brickforce Wire Galvanized (75mm & 150mm)', 'Damp Proof Course (DPC Plastisheet)'],
    unitTypes: '1,000s Palletized, Bundles',
    leadTime: 'Scheduled site drop'
  },
  {
    id: 'roofing-timber',
    name: 'Roofing, Trusses & Timber',
    description: 'IBR and corrugated chromadek roofing sheets, treated structural pine timber, fascia boards, and valley gutters.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    popularItems: ['Chromadek IBR Roofing (0.4mm & 0.5mm in all colors)', 'Corrugated Galvanized Sheets', 'Treated Structural Pine Trusses (38x114, 38x152, 50x76)', 'Roofing Screws & Underlayment', 'Concrete Roofing Tiles & Ridges'],
    unitTypes: 'Cut to Custom Lengths, Linear Metres',
    leadTime: 'Custom lengths in 24-48h',
    isPopular: true
  },
  {
    id: 'plumbing-drainage',
    name: 'Plumbing & Drainage',
    description: 'Underground PVC pipes, pressure pipes, copper tubing, brass fittings, septic tanks, and soakaway solutions.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    popularItems: ['110mm PVC Soil & Waste Pipes', 'HDPE Poly Pipes & Compression Fittings', 'PEX & Multilayer Hot/Cold Water Lines', 'Geysers (Solar & Electric 100L/150L)', 'Water Storage Tanks (2,500L - 10,000L)'],
    unitTypes: 'Pcs, 6m Lengths, Tanks, Coils',
    leadTime: 'In stock'
  },
  {
    id: 'electrical-power',
    name: 'Electrical & Cable Infrastructure',
    description: 'Distribution boards, armored underground cables, copper twin & earth wire, conduit pipes, and breakers.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop',
    popularItems: ['1.5mm, 2.5mm & 4.0mm Twin & Earth Cable', 'Armoured Cable 4-Core (10mm - 25mm)', 'PVC Conduit Pipes & Adaptors (20mm / 25mm)', 'Main Distribution Boards & MCBs', 'Solar Backup Inverters & Cable Accessories'],
    unitTypes: '100m Coils, Metres, Units',
    leadTime: 'In stock'
  },
  {
    id: 'tools-safety',
    name: 'Tools & Construction Hardware',
    description: 'Professional contractor power tools, wheelbarrows, spade shovels, spirit levels, scaffolding props, and PPE.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop',
    popularItems: ['Heavy-Duty Builder Wheelbarrows', 'Concrete Mixers (Petrol & Electric)', 'Adjustable Steel Scaffolding Props & Acrows', 'Diamond Cutting Discs & Drill Bits', 'Safety Boots, Helmets & High-Vis PPE'],
    unitTypes: 'Units, Kits, Bulk Sets',
    leadTime: 'In stock'
  },
  {
    id: 'finishing-paints',
    name: 'Finishing & Decorative Materials',
    description: 'High-coverage interior & exterior PVA paints, tile adhesives, porcelain floor tiles, and ceiling boards.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop',
    popularItems: ['High-Cover Acrylic Exterior / Interior Paint (20L)', 'Ceramic & Porcelain Tile Adhesive (20kg)', '600x600 Glazed Porcelain Floor Tiles', 'Rhinoboard Ceiling Sheets & Cornices', 'Waterproofing Slurry & Joint Compounds'],
    unitTypes: '20L Buckets, 20kg Bags, m²',
    leadTime: 'In stock / Palette dispatch'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'harare-north-villa',
    title: 'Contemporary Luxury Residence',
    category: 'Residential',
    location: 'Harare North (Borrowdale Brooke Extension)',
    year: '2025 - 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    description: 'Full-scope structural residential build featuring double-volume reinforced concrete slabs, custom chromadek roofing, and comprehensive civil retaining walls for a sloping site.',
    scope: ['Earthworks & Foundation Slabs', 'Structural Brickwork & Concrete Lintels', 'Roof Trusses & Chromadek Roofing', 'Full Material Supply & Site Supervision'],
    materialsSupplied: ['32.5R & 42.5N Cement (1,200+ bags)', 'High-Tensile Rebar (Y12 & Y16)', '110,000 Solid Common Bricks', '0.5mm IBR Charcoal Chromadek'],
    stats: [
      { label: 'Floor Area', value: '620 m²' },
      { label: 'Timeline', value: '8 Months' },
      { label: 'Quality Score', value: '100% Passed' }
    ]
  },
  {
    id: 'borrowdale-office-park',
    title: 'Commercial Corporate Complex',
    category: 'Commercial',
    location: 'Borrowdale Commercial Corridor, Harare',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    description: 'Multi-storey modern office block with integrated commercial retail frontage, underground utility routing, and heavy-duty 80mm interlocking paved parking bays.',
    scope: ['Commercial Foundation & Column Pours', 'Multi-Floor Structural Rebar Placement', 'Paving & Drainage Infrastructure', 'Electrical & Plumbing Reticulation'],
    materialsSupplied: ['Certified 42.5N Structural Cement', 'Deformed Steel Y20 & Y16', '80mm Heavy Interlocking Pavers (3,500 m²)', 'PVC 160mm Storm Drainage'],
    stats: [
      { label: 'Commercial Space', value: '2,400 m²' },
      { label: 'Phases', value: '3 Completed' },
      { label: 'Supervision', value: 'Full-Time On Site' }
    ]
  },
  {
    id: 'msasa-logistics-warehouse',
    title: 'Industrial Heavy-Duty Warehouse',
    category: 'Industrial',
    location: 'Msasa Industrial Zone, Harare',
    year: '2024 - 2025',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    description: 'Industrial high-bay warehouse facility with heavy vehicle loading docks, laser-leveled industrial concrete floors, and wide-span structural steel framework.',
    scope: ['Civil Grading & Compaction', 'Post-Tensioned Industrial Slab', 'Steel Structure Erection Support', 'Site Utility Trenching'],
    materialsSupplied: ['Heavy Industrial Slabs Mix Supply', 'BRC Ref 88 Mesh & Y16 Rebar', 'Structural Square & I-Beams', 'Perimeter Heavy Concrete Blocks'],
    stats: [
      { label: 'Warehouse Span', value: '4,800 m²' },
      { label: 'Load Capacity', value: '35 Ton Axle' },
      { label: 'Material Phasing', value: '10-Bag Batch System' }
    ]
  },
  {
    id: 'highlands-cluster-homes',
    title: 'Highlands Townhouse Cluster Project',
    category: 'Residential',
    location: 'Highlands, Harare',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    description: 'Development of 8 contemporary cluster units with shared boundary security walls, individual private gardens, underground water storage tanks, and solar-ready conduits.',
    scope: ['Site Layout & Multi-Unit Foundation Slabs', 'Brickwork & Cavity Wall Construction', 'Standardized Roof Trusses & Tiling', 'Project Management & Trades Allocation'],
    materialsSupplied: ['Common & Semi-Face Bricks (350,000 pcs)', 'PPC Cement Batches', 'Structural Timber & Concrete Tile Trusses', 'Underground 5,000L Water Tanks'],
    stats: [
      { label: 'Units', value: '8 Townhouses' },
      { label: 'Trades Deployed', value: '32 Artisans' },
      { label: 'Delivery', value: 'On Budget' }
    ]
  },
  {
    id: 'ruwa-civil-retaining',
    title: 'Civil Earthworks & Retaining Works',
    category: 'Civil Works',
    location: 'Ruwa Hills Development',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop',
    description: 'Challenging terrain grading, 4.5m high reinforced concrete retaining wall construction, storm water channel redirection, and all-weather access road paving.',
    scope: ['Heavy Excavation & Rock Breaking', 'Engineered Retaining Wall Pours', 'Subsurface Weep Holes & Drainage', 'Interlocking Road Paving'],
    materialsSupplied: ['42.5N High Strength Cement', 'Rebar Cages Y16 & Y20', 'Quarry Aggregates & Crusher Dust', 'Perforated Subsoil Drainage Pipes'],
    stats: [
      { label: 'Retaining Wall Length', value: '180 Metres' },
      { label: 'Elevation Handled', value: '6.2 Metres' },
      { label: 'Soil Compacted', value: '98% Proctor' }
    ]
  },
  {
    id: 'mount-pleasant-renovation',
    title: 'Structural Renovation & Modern Extension',
    category: 'Commercial',
    location: 'Mount Pleasant Business District',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    description: 'Transforming an outdated commercial premises into an open-plan collaborative hub with steel portal frames, energy-efficient floor finishes, and upgraded plumbing infrastructure.',
    scope: ['Demolition of Non-Loadbearing Walls', 'Steel Support Beam Installation', 'Complete Re-roofing with Chromadek', 'Plumbing & Electrical Refurbishment'],
    materialsSupplied: ['Universal Steel Beams', 'Drywall & Ceiling Boards', 'PEX Plumbing Fittings', 'Exterior Acrylic Weatherproof Paint'],
    stats: [
      { label: 'Transformation', value: '100% Upgraded' },
      { label: 'Downtime', value: 'Zero Tenant Disruption' },
      { label: 'Material Credits', value: '$840 Excess Returned' }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: "Tell Us What You're Building",
    description: 'Share your architectural plans, Bill of Quantities (BOQ), or general project idea via our quote builder or direct WhatsApp chat. We review your requirements with zero commitment.',
    iconName: 'FileText',
    badge: 'Initial Consultation'
  },
  {
    step: '02',
    title: 'Get Your Quote & Cost Plan',
    description: 'We calculate competitive material pricing, recommend qualified trade options, evaluate site logistics, and provide a clear, transparent cost breakdown.',
    iconName: 'Calculator',
    badge: 'Transparent BOQ'
  },
  {
    step: '03',
    title: 'Build With Confidence',
    description: 'Receive scheduled on-site material deliveries (or phased cement releases), coordinate with vetted builders, plumbers and electricians, with optional site supervision.',
    iconName: 'Hammer',
    badge: 'Supervised Execution'
  },
  {
    step: '04',
    title: 'Complete The Project',
    description: 'Finish your residential, commercial, or civil project on time, within budget, and with less stress. Return any eligible excess material for account credit.',
    iconName: 'CheckCircle2',
    badge: 'Stress-Free Delivery'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Tendai M.',
    role: 'Diaspora Homeowner (UK / Harare Build)',
    projectType: '4-Bedroom Residence in Borrowdale',
    location: 'Harare',
    content: 'Building while based in the UK is normally stressful, but TASH Hardware made it seamless. They supplied all our cement on a 10-bag release schedule so nothing went hard or got stolen, and connected us with an incredible builder.',
    rating: 5,
    date: 'January 2026',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Farai G.',
    role: 'Commercial Property Developer',
    projectType: 'Retail Strip Mall & Parking',
    location: 'Chitungwiza Road Corridor',
    content: 'TASH is not just a hardware supplier—they are true construction partners. Their QS consultation saved us thousands on our foundation steel and 80mm pavers. Deliveries were consistently on time without site delays.',
    rating: 5,
    date: 'December 2025',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Eng. K. Sibanda',
    role: 'Civil Contractor & Site Engineer',
    projectType: 'Retaining Wall & Drainage Works',
    location: 'Ruwa Hills',
    content: 'Finding high-yield rebar and certified 42.5N cement with immediate batch certification is essential for our engineering sign-offs. TASH Hardware is our go-to partner for high-spec materials and project coordination.',
    rating: 5,
    date: 'February 2026',
    verified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What construction services does TASH Hardware provide?',
    category: 'Services',
    answer: 'TASH Hardware provides end-to-end construction solutions across residential developments (custom homes, cluster units, renovations), commercial and industrial builds (offices, retail, warehouses, structural expansions), civil works & infrastructure (excavation, utilities, retaining walls, paving), direct building material supply, and on-site project management & trades coordination.'
  },
  {
    id: 'faq-2',
    question: 'Do you supply building materials directly?',
    category: 'Materials',
    answer: 'Yes. We supply certified 32.5R and 42.5N cement, deformed high-tensile steel rebar (Y10–Y20), common and concrete bricks, chromadek & corrugated roofing sheets, treated structural timber, plumbing PVC & pressure pipes, electrical cables, and general hardware essentials directly to your job site.'
  },
  {
    id: 'faq-3',
    question: 'Do you work on residential projects?',
    category: 'Projects',
    answer: 'Yes, residential construction is one of our key specialties. We assist homeowners, diaspora builders, and estate developers with custom homes, townhouses, duplexes, multi-unit cluster developments, and major structural renovations.'
  },
  {
    id: 'faq-4',
    question: 'Do you handle commercial and industrial projects?',
    category: 'Projects',
    answer: 'Yes. We handle commercial office developments, retail tenant fit-outs, heavy-duty industrial warehouses, factory floor slabs, boundary installations, and structural expansions with strict adherence to architectural drawings and safety standards.'
  },
  {
    id: 'faq-5',
    question: 'Do you provide project management?',
    category: 'Management',
    answer: 'Yes. Our project management service provides comprehensive oversight: monitoring milestone schedules, coordinating deliveries, enforcing quality control, and ensuring your project stays within agreed financial parameters.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide site supervision?',
    category: 'Management',
    answer: 'Yes. We provide experienced site managers to supervise on-site trade activities, verify material mixing ratios (such as concrete and mortar), ensure structural compliance, and provide photo/video progress reporting (ideal for diaspora clients).'
  },
  {
    id: 'faq-7',
    question: 'How can I request a quote?',
    category: 'Quotes',
    answer: 'You can request a quote directly through our online quote builder form on this website, call any of our direct phone lines (+263 71 904 3295 / +263 71 636 4464 / +263 77 304 3295 / +263 77 770 3405), email us at tashhardware@gmail.com, or send your Bill of Quantities (BOQ) directly via WhatsApp for immediate review.'
  },
  {
    id: 'faq-8',
    question: 'Can I contact TASH Hardware through WhatsApp?',
    category: 'Contact',
    answer: 'Yes! WhatsApp is our most active and direct communication channel for instant pricing, material availability checks, BOQ reviews, and site consultations. You can click the floating WhatsApp button anywhere on this website or message us at +263 71 904 3295.'
  }
];
