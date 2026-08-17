import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown, Menu, PackageCheck, Ruler, ShieldCheck, Truck, X, Phone, MapPin } from 'lucide-react';
import { AreaChart, Area } from './charts/area-chart';

const categories = [
  { n:'01', title:'Structural steel', copy:'Certified bars, mesh and sections for foundations and frames.', image:'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85' },
  { n:'02', title:'Cement & masonry', copy:'Cement, blocks, aggregates and admixtures delivered to programme.', image:'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=85' },
  { n:'03', title:'Roofing systems', copy:'Complete roof packages, rainwater goods and installation support.', image:'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85' },
];
const data = [
  { date:new Date('2026-01-01'), reliability:86 }, { date:new Date('2026-02-01'), reliability:89 },
  { date:new Date('2026-03-01'), reliability:91 }, { date:new Date('2026-04-01'), reliability:94 },
  { date:new Date('2026-05-01'), reliability:96 }, { date:new Date('2026-06-01'), reliability:98 },
];
const faqs = [
  ['Can you price from a bill of quantities?','Yes. Send your BOQ and our commercial team will return a consolidated, itemised quotation with lead times.'],
  ['Do you deliver outside Nairobi?','We coordinate scheduled deliveries across Kenya through our vetted logistics network.'],
  ['How do you verify material quality?','We source from approved manufacturers and provide compliance documentation for specified products.']
];

export default function App(){
  const [menu,setMenu]=useState(false); const [open,setOpen]=useState(0); const [sent,setSent]=useState(false);
  const quote=()=>document.querySelector('#quote')?.scrollIntoView({behavior:'smooth'});
  return <div className="site-shell">
    <header className="topbar"><span>NAIROBI · KENYA</span><span className="topbar-center">MATERIALS THAT KEEP PROJECTS MOVING</span><span>MON—SAT / 07:30—18:00</span></header>
    <nav className="nav">
      <a className="brand" href="#"><span className="brand-mark">T</span><span>TASH<small>HARDWARE</small></span></a>
      <div className="navlinks"><a href="#materials">Materials</a><a href="#services">Services</a><a href="#proof">Why Tash</a><a href="#contact">Contact</a></div>
      <button className="nav-cta" onClick={quote}>Request pricing <ArrowUpRight size={17}/></button>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{menu&&<motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="mobile-menu"><a href="#materials">Materials</a><a href="#services">Services</a><a href="#proof">Why Tash</a><button onClick={quote}>Request pricing</button></motion.div>}</AnimatePresence>

    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span/> BUILT FOR THE WORK AHEAD</div>
          <h1>Supply that<br/>shows up.</h1>
          <p>Building materials, hardware and project support for contractors who cannot afford delays.</p>
          <div className="hero-actions"><button className="primary" onClick={quote}>Get an itemised quote <ArrowUpRight/></button><a href="#materials">Browse materials</a></div>
          <div className="hero-stats"><div><b>15+</b><span>Years supplying Kenya</span></div><div><b>98%</b><span>On-time dispatch</span></div><div><b>2hr</b><span>Typical quote response</span></div></div>
        </div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90" alt="Construction team on an active building site"/><div className="image-note"><PackageCheck size={20}/><span><b>Site-ready orders</b>Checked, packed, dispatched.</span></div></div>
      </section>

      <section className="ticker" aria-label="Services"><span>STEEL</span><i/> <span>CEMENT</span><i/> <span>ROOFING</span><i/> <span>PLUMBING</span><i/> <span>ELECTRICAL</span><i/> <span>TOOLS</span></section>

      <section className="materials section" id="materials">
        <div className="section-head"><div><span className="kicker">THE SUPPLY DESK</span><h2>One partner.<br/>Every critical material.</h2></div><p>Source with confidence. Our team translates drawings and BOQs into coordinated orders that arrive when your programme needs them.</p></div>
        <div className="category-grid">{categories.map((c,i)=><motion.article key={c.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="category"><img src={c.image} alt=""/><div className="shade"/><span className="num">{c.n}</span><div className="category-copy"><h3>{c.title}</h3><p>{c.copy}</p><button onClick={quote}>Price this category <ArrowUpRight size={17}/></button></div></motion.article>)}</div>
      </section>

      <section className="service-band" id="services">
        <div className="service-intro"><span className="kicker">MORE THAN A MERCHANT</span><h2>Your commercial team’s extension.</h2><p>From take-off to last-mile delivery, we remove friction between specification and site.</p></div>
        <div className="service-list">{[
          [Ruler,'BOQ & take-off support','We help turn drawings and schedules into a clean procurement list.'],
          [ShieldCheck,'Quality assurance','Approved sources, transparent brands and documentation on request.'],
          [Truck,'Planned site delivery','Staged drops aligned to access, storage and construction sequence.']
        ].map(([Icon,title,copy]:any,i)=><div className="service-row" key={title}><span>0{i+1}</span><Icon/><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
      </section>

      <section className="proof section" id="proof">
        <div className="proof-copy"><span className="kicker">RELIABILITY, MEASURED</span><h2>Promises are cheap.<br/>Performance is visible.</h2><p>Our dispatch discipline has improved every month this year—because dependable supply is a system, not a slogan.</p><ul><li><Check/>Dedicated account contact</li><li><Check/>Live order coordination</li><li><Check/>Clear lead times before payment</li></ul></div>
        <div className="chart-card"><div className="chart-meta"><span>ON-TIME DISPATCH</span><strong>98<small>%</small></strong><em>+12 pts / 6 months</em></div><AreaChart data={data} xDataKey="date" aspectRatio="1.6 / 1" margin={{top:12,right:8,bottom:8,left:8}}><Area dataKey="reliability" stroke="#f15a24" fill="#f15a24" strokeWidth={3}/></AreaChart><div className="chart-axis"><span>JAN</span><span>JUN</span></div></div>
      </section>

      <section className="testimonial"><p>“Tash understands that our biggest cost isn’t the material—it’s a crew waiting because the material is late.”</p><div><b>DAVID M.</b><span>PROJECT MANAGER · NAIROBI</span></div></section>

      <section className="faq section"><div><span className="kicker">STRAIGHT ANSWERS</span><h2>Before you order.</h2></div><div>{faqs.map(([q,a],i)=><button className="faq-row" key={q} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><ChevronDown className={open===i?'rotate':''}/>{open===i&&<motion.p initial={{opacity:0}} animate={{opacity:1}}>{a}</motion.p>}</button>)}</div></section>

      <section className="quote" id="quote">
        <div><span className="kicker light">START A QUOTE</span><h2>Tell us what<br/>the site needs.</h2><p>Send a shortlist or upload your full BOQ. We’ll organise the rest.</p><div className="contact-mini"><span><Phone/> +254 700 000 000</span><span><MapPin/> Nairobi, Kenya</span></div></div>
        {sent?<div className="success"><Check/><h3>Request received.</h3><p>Our supply desk will contact you shortly.</p></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Your name<input required placeholder="e.g. James Mwangi"/></label><label>Phone or email<input required placeholder="How should we reach you?"/></label><label className="full">What do you need?<textarea required placeholder="List materials, quantities, location and required date…"/></label><button className="full" type="submit">Send to the supply desk <ArrowUpRight/></button></form>}
      </section>
    </main>
    <footer id="contact"><a className="brand inverse" href="#"><span className="brand-mark">T</span><span>TASH<small>HARDWARE</small></span></a><p>Reliable materials. Practical support. Built around your programme.</p><div><a href="#materials">Materials</a><a href="#services">Services</a><a href="#quote">Request pricing</a></div><small>© 2026 TASH HARDWARE LTD · ALL RIGHTS RESERVED</small></footer>
  </div>
}