import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown, Minus, Plus, Search, ShoppingBag, Trash2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type Product = { id:string; name:string; category:string; unit:string; description:string; image:string; badge?:string };
type Cart = Record<string, number>;

const products: Product[] = [
  {id:'angle-grinder',name:'Angle Grinder 115mm',category:'Power tools',unit:'each',description:'Compact grinder for cutting, grinding and surface preparation.',badge:'Trade essential',image:'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=82'},
  {id:'cordless-drill',name:'Cordless Drill Set',category:'Power tools',unit:'set',description:'Versatile drill-driver kit for installation and site work.',image:'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=900&q=82'},
  {id:'claw-hammer',name:'Claw Hammer',category:'Hand tools',unit:'each',description:'Balanced general-purpose hammer with a durable grip.',image:'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=900&q=82'},
  {id:'spanner-set',name:'Combination Spanner Set',category:'Hand tools',unit:'set',description:'Metric spanner selection for workshop and maintenance use.',image:'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=82'},
  {id:'padlock',name:'Heavy-Duty Padlock',category:'Security',unit:'each',description:'Hardened lock for gates, stores and tool boxes.',image:'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=82'},
  {id:'safety-kit',name:'Site Safety Kit',category:'Safety',unit:'kit',description:'Core personal protective equipment for everyday site work.',badge:'Site ready',image:'https://images.unsplash.com/photo-1578874691223-64558a3ca096?auto=format&fit=crop&w=900&q=82'},
  {id:'pvc-pipe',name:'PVC Pressure Pipe',category:'Plumbing',unit:'length',description:'General water and plumbing pipe in selectable specifications.',image:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=82'},
  {id:'paint-roller',name:'Paint Roller Kit',category:'Paint & finish',unit:'kit',description:'Roller, tray and accessories for walls and ceilings.',image:'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=900&q=82'},
];
const categories=['All',...Array.from(new Set(products.map(p=>p.category)))];

export function HardwareShop(){
  const [category,setCategory]=useState('All'); const [query,setQuery]=useState('');
  const [cart,setCart]=useState<Cart>(()=>{try{return JSON.parse(localStorage.getItem('tash-quote-cart')||'{}') as Cart}catch{return {}}});
  const [cartOpen,setCartOpen]=useState(false); const [requested,setRequested]=useState(false);
  useEffect(()=>localStorage.setItem('tash-quote-cart',JSON.stringify(cart)),[cart]);
  const filtered=useMemo(()=>products.filter(p=>(category==='All'||p.category===category)&&`${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
  const quantity=(id:string):number=>Number(cart[id]||0);
  const count:number=Object.keys(cart).reduce((total,id)=>total+quantity(id),0);
  const change=(id:string,amount:number)=>setCart(current=>{const next:Cart={...current};next[id]=Math.max(0,Number(next[id]||0)+amount);if(!next[id])delete next[id];return next});
  const cartProducts=products.filter(p=>quantity(p.id)>0);
  const checkout=()=>{const list=cartProducts.map(p=>`• ${p.name} — ${quantity(p.id)} ${p.unit}${quantity(p.id)>1?'s':''}`).join('\n');const subject=encodeURIComponent('Hardware product quote request');const body=encodeURIComponent(`Hello TASH Hardware,\n\nPlease quote the following products:\n\n${list}\n\nPlease confirm available brands, specifications, stock and current pricing.\n\nName:\nPhone:\nDelivery location:`);window.location.href=`mailto:tashhardware@gmail.com?subject=${subject}&body=${body}`;setRequested(true)};
  return <section className="shop section" id="shop">
    <div className="shop-head"><div><span className="kicker">HARDWARE STORE</span><h2>Tools for the<br/>work at hand.</h2></div><div className="shop-intro"><p>Browse everyday hardware and build a product list. We’ll confirm the right brand, specification, availability and current price before you buy.</p><button className="cart-trigger" onClick={()=>setCartOpen(true)} aria-label={`Open quote basket with ${count} items`}><ShoppingBag/><span>Quote basket</span><b>{count}</b></button></div></div>
    <div className="shop-tools"><label className="product-search"><Search/><span className="sr-only">Search products</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tools, plumbing, safety…"/></label><div className="category-tabs" aria-label="Product categories">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div></div>
    <div className="product-results"><span>{filtered.length} products</span><button onClick={()=>{setCategory('All');setQuery('')}}>Reset filters</button></div>
    <div className="product-grid">{filtered.map((p,i)=><motion.article className="product-card" key={p.id} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.035}}>
      <div className="product-image">{p.badge&&<span>{p.badge}</span>}<img src={p.image} alt={p.name} width="900" height="700" loading="lazy" decoding="async"/></div>
      <div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p>{p.description}</p><div className="product-buy"><div><b>Price on request</b><span>per {p.unit}</span></div>{quantity(p.id)?<div className="qty"><button onClick={()=>change(p.id,-1)} aria-label={`Remove one ${p.name}`}><Minus/></button><span>{quantity(p.id)}</span><button onClick={()=>change(p.id,1)} aria-label={`Add one ${p.name}`}><Plus/></button></div>:<button className="add-product" onClick={()=>change(p.id,1)}><Plus/> Add to quote</button>}</div></div>
    </motion.article>)}</div>
    {!filtered.length&&<div className="empty-products"><Search/><h3>No products found</h3><p>Try another search or reset the category filters.</p></div>}
    <AnimatePresence>{cartOpen&&<><motion.button className="cart-backdrop" aria-label="Close quote basket" onClick={()=>setCartOpen(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/><motion.aside className="cart-drawer" aria-label="Quote basket" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring',damping:28,stiffness:260}}><div className="cart-title"><div><span className="kicker">YOUR PRODUCT LIST</span><h3>Quote basket <b>{count}</b></h3></div><button onClick={()=>setCartOpen(false)} aria-label="Close quote basket"><X/></button></div>
      {requested?<div className="cart-success"><Check/><h3>Email draft opened</h3><p>Add your contact details, review the quantities and send it to our team.</p><button onClick={()=>setRequested(false)}>Back to basket</button></div>:cartProducts.length?<><div className="cart-lines">{cartProducts.map(p=><div className="cart-line" key={p.id}><img src={p.image} alt=""/><div><small>{p.category}</small><h4>{p.name}</h4><span>{p.unit}</span></div><div className="cart-line-actions"><div className="qty"><button onClick={()=>change(p.id,-1)}><Minus/></button><span>{quantity(p.id)}</span><button onClick={()=>change(p.id,1)}><Plus/></button></div><button className="remove" onClick={()=>setCart(c=>{const n={...c};delete n[p.id];return n})} aria-label={`Remove ${p.name}`}><Trash2/></button></div></div>)}</div><div className="cart-footer"><div><span>Items</span><b>{count}</b></div><p>No payment is taken online. TASH will confirm specifications, availability and pricing first.</p><button onClick={checkout}>Request product quote <ShoppingBag/></button></div></>:<div className="empty-cart"><ShoppingBag/><h3>Your basket is empty</h3><p>Add hardware products to prepare a quote request.</p><button onClick={()=>setCartOpen(false)}>Continue browsing</button></div>}
    </motion.aside></>}</AnimatePresence>
  </section>
}