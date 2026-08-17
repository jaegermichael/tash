import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown, Menu, PackageCheck, Ruler, ShieldCheck, Truck, X, Phone, MapPin, Mail, Upload } from 'lucide-react';
import { AreaChart, Area } from './charts/area-chart';
import { HardwareShop } from './components/HardwareShop';

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
  ['Do you deliver outside Harare?','We coordinate scheduled deliveries across Zimbabwe. Delivery options and lead times are confirmed with every quote.'],
  ['How do you verify material quality?','We source from approved manufacturers and provide compliance documentation for specified products.']
];

export default function App(){
  const [menu,setMenu]=useState(false); const [open,setOpen]=useState(0); const [sent,setSent]=useState(false);
  const quote=()=>document.querySelector('#quote')?.scrollIntoView({behavior:'smooth'});
  const submitQuote=(event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const subject=encodeURIComponent(`Quote request — ${form.get('project') || 'Building materials'}`);
    const body=encodeURIComponent(`Name: ${form.get('name')}\nContact: ${form.get('contact')}\nProject/location: ${form.get('project')}\nRequired date: ${form.get('date') || 'Not specified'}\n\nMaterials required:\n${form.get('requirements')}`);
    window.location.href=`mailto:tashhardware@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="topbar"><span>HARARE · ZIMBABWE</span><span className="topbar-center">MATERIALS THAT KEEP PROJECTS MOVING</span><span>MON—SAT / 07:30—17:00</span></header>
    <nav className="nav">
      <a className="brand" href="#"><span className="brand-mark">T</span><span>TASH<small>HARDWARE</small></span></a>
      <div className="navlinks"><a href="#shop">Shop hardware</a><a href="#materials">Materials</a><a href="#services">Services</a><a href="#proof">Why Tash</a><a href="#contact">Contact</a></div>
      <button className="nav-cta" onClick={quote}>Request pricing <ArrowUpRight size={17}/></button>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{menu&&<motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="mobile-menu"><a href="#shop" onClick={()=>setMenu(false)}>Shop hardware</a><a href="#materials" onClick={()=>setMenu(false)}>Materials</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#proof" onClick={()=>setMenu(false)}>Why Tash</a><button onClick={()=>{quote();setMenu(false)}}>Request pricing</button></motion.div>}</AnimatePresence>

    <main id="main-content">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span/> BUILT FOR THE WORK AHEAD</div>
          <h1>Supply that<br/>shows up.</h1>
          <p>Building materials, hardware and project support for contractors who cannot afford delays.</p>
          <div className="hero-actions"><button className="primary" onClick={quote}>Get an itemised quote <ArrowUpRight/></button><a href="#materials">Browse materials</a></div>
          <div className="hero-stats"><div><b>BOQ</b><span>Pricing support</span></div><div><b>QA</b><span>Approved sources</span></div><div><b>ZW</b><span>Nationwide supply</span></div></div>
        </div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=82" alt="Construction team on an active building site" width="1800" height="1200" fetchPriority="high" decoding="async"/><div className="image-note"><PackageCheck size={20}/><span><b>Site-ready orders</b>Checked, packed, dispatched.</span></div></div>
      </section>

      <section className="ticker" aria-label="Services"><span>STEEL</span><i/> <span>CEMENT</span><i/> <span>ROOFING</span><i/> <span>PLUMBING</span><i/> <span>ELECTRICAL</span><i/> <span>TOOLS</span></section>

      <HardwareShop />

      <section className="materials section" id="materials">
        <div className="section-head"><div><span className="kicker">THE SUPPLY DESK</span><h2>One partner.<br/>Every critical material.</h2></div><p>Source with confidence. Our team translates drawings and BOQs into coordinated orders that arrive when your programme needs them.</p></div>
        <div className="category-grid">{categories.map((c,i)=><motion.article key={c.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="category"><img src={c.image} alt={`${c.title} construction materials`} width="1200" height="900" loading="lazy" decoding="async"/><div className="shade"/><span className="num">{c.n}</span><div className="category-copy"><h3>{c.title}</h3><p>{c.copy}</p><button onClick={quote}>Price this category <ArrowUpRight size={17}/></button></div></motion.article>)}</div>
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
        <div className="proof-copy"><span className="kicker">RELIABILITY, DESIGNED IN</span><h2>Promises are cheap.<br/>Process is visible.</h2><p>Dependable supply starts with clear scopes, confirmed lead times and coordinated dispatch—not unsupported performance claims.</p><ul><li><Check/>Dedicated account contact</li><li><Check/>Order coordination</li><li><Check/>Clear lead times before payment</li></ul></div>
        <div className="chart-card" aria-label="Illustrative order readiness progression"><div className="chart-meta"><span>ORDER READINESS MODEL</span><strong>06<small>/06</small></strong><em>Illustrative workflow</em></div><AreaChart data={data} xDataKey="date" aspectRatio="1.6 / 1" margin={{top:12,right:8,bottom:8,left:8}}><Area dataKey="reliability" stroke="#f15a24" fill="#f15a24" strokeWidth={3}/></AreaChart><div className="chart-axis"><span>SCOPE</span><span>DISPATCH</span></div></div>
      </section>

      <section className="testimonial"><p>“Tash understands that our biggest cost isn’t the material—it’s a crew waiting because the material is late.”</p><div><b>DAVID M.</b><span>PROJECT MANAGER · NAIROBI</span></div></section>

      <section className="faq section"><div><span className="kicker">STRAIGHT ANSWERS</span><h2>Before you order.</h2></div><div>{faqs.map(([q,a],i)=><button className="faq-row" key={q} onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><ChevronDown className={open===i?'rotate':''}/>{open===i&&<motion.p initial={{opacity:0}} animate={{opacity:1}}>{a}</motion.p>}</button>)}</div></section>

      <section className="quote" id="quote">
        <div><span className="kicker light">START A QUOTE</span><h2>Tell us what<br/>the site needs.</h2><p>Share your shortlist below. If you have a BOQ, attach it directly to the email draft after submitting.</p><div className="contact-mini"><a href="tel:+263719043295"><Phone/> +263 719 043 295</a><a href="mailto:tashhardware@gmail.com"><Mail/> tashhardware@gmail.com</a><span><MapPin/> Harare, Zimbabwe</span></div></div>
        {sent?<div className="success" role="status"><Check/><h3>Email draft opened.</h3><p>Review the message, attach your BOQ if needed, then send it from your email app.</p><button type="button" onClick={()=>setSent(false)}>Edit request</button></div>:<form onSubmit={submitQuote}><label htmlFor="quote-name">Your name<input id="quote-name" name="name" autoComplete="name" required placeholder="e.g. Tawanda Moyo"/></label><label htmlFor="quote-contact">Phone or email<input id="quote-contact" name="contact" autoComplete="email" required placeholder="How should we reach you?"/></label><label htmlFor="quote-project">Project & location<input id="quote-project" name="project" required placeholder="e.g. Residential build, Harare"/></label><label htmlFor="quote-date">Required by<input id="quote-date" name="date" type="date"/></label><label className="full" htmlFor="quote-requirements">What do you need?<textarea id="quote-requirements" name="requirements" required placeholder="List materials, specifications and quantities…"/></label><div className="upload-note full"><Upload/><span><b>Have a BOQ?</b> Attach the PDF or spreadsheet to the email draft that opens next.</span></div><button className="full" type="submit">Create quote email <ArrowUpRight/></button></form>}
      </section>
    </main>
    <footer id="contact"><a className="brand inverse" href="#"><span className="brand-mark">T</span><span>TASH<small>HARDWARE</small></span></a><p>Reliable materials. Practical support. Built around your programme.</p><div><a href="#materials">Materials</a><a href="#services">Services</a><a href="#quote">Request pricing</a></div><small>© 2026 TASH HARDWARE LTD · ALL RIGHTS RESERVED</small></footer>
  </div>
}