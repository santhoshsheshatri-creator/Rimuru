import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, useAnimationFrame } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Zap,
  Twitter,
  ArrowUpRight,
  Smartphone,
  Layout,
  ShoppingCart,
  Building2,
  Coffee,
  Globe,
  Plus,
  Eye
} from 'lucide-react';
// --- Asset Paths (Cloudinary Hosted - 100% Reliable Build) ---
const heroVideo = 'https://res.cloudinary.com/dgqsatuk8/video/upload/v1776855408/15684751_3840_2160_24fps_u73u5g.mp4';
const orbisCover = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855548/orbit-cover_uvw7ht.png';
const clothingImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855545/Clothing_zeqjtj.png';
const corporateImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855552/corporate_c7acyx.png';
const restaurantImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855548/restaurant_xexcqe.png';
const realEstateImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855553/real-estate_cxqqrz.png';
const portfolioImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855547/Portfolio_xozwet.png';
const saasImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855550/SAAS_cwpbx3.png';
const skyeliteImg = 'https://res.cloudinary.com/dgqsatuk8/image/upload/v1776855552/skyelite_akjntd.png';

import OrbisNft from './components/OrbisNft';
import SkyElite from './components/SkyElite';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 py-6 px-6 md:px-12 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
            R
          </div>
          <span className="font-heading font-black text-xl tracking-tighter text-white">RIMURU.</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Solutions', 'Showcase', 'Process', 'Pricing'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            Start Project
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-8 shadow-2xl"
          >
            {['Solutions', 'Showcase', 'Process', 'Pricing'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-4xl font-heading font-black text-white text-left uppercase italic tracking-tighter"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold uppercase tracking-widest"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BrowserMockup = ({ children, url, type = "desktop" }: { children: React.ReactNode, url?: string, type?: "desktop" | "mobile" }) => (
  <div className={`relative w-full h-full bg-[#0a0a0a] overflow-hidden flex flex-col border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${type === 'mobile' ? 'rounded-[3rem] border-[8px] border-[#1a1a1a]' : 'rounded-2xl border-white/10'}`}>
    {type === 'desktop' ? (
      <div className="h-8 bg-[#151515] border-b border-white/5 flex items-center px-4 justify-between shrink-0">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        {url && <div className="text-[9px] font-mono font-medium text-white/20 uppercase tracking-[0.2em]">{url}</div>}
        <div className="w-12 h-1.5 bg-white/5 rounded-full" />
      </div>
    ) : (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1a1a1a] rounded-b-2xl z-20 flex items-center justify-center">
        <div className="w-10 h-1 bg-black/40 rounded-full" />
      </div>
    )}
    <div className="flex-grow relative overflow-hidden bg-[#050505]">
      {children}
    </div>
  </div>
);

const Cylinder3D = () => {
  const cards = [
    { title: "Orbis NFT", price: "Premium", img: orbisCover },
    { title: "SaaS Platform", price: "₹40,000", img: saasImg },
    { title: "Portfolio", price: "₹12,499", img: portfolioImg },
    { title: "Real Estate", price: "₹19,999", img: realEstateImg },
    { title: "Restaurant", price: "₹9,999", img: restaurantImg },
    { title: "Corporate", price: "₹15,999", img: corporateImg },
    { title: "RETAIL", price: "₹19,999", img: clothingImg },
  ];

  const rotation = useMotionValue(0);
  const rotationSpring = useSpring(rotation, { stiffness: 50, damping: 20 });
  const [radius, setRadius] = useState(320);
  const [cylinderSize, setCylinderSize] = useState({ w: 300, h: 450 });
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setRadius(isMobile ? 180 : 320);
      setCylinderSize(isMobile ? { w: 180, h: 280 } : { w: 300, h: 450 });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging.current) {
      rotation.set(rotation.get() + delta * 0.015);
    }
  });

  const handlePan = (_: any, info: any) => {
    // Smoother and more responsive panning
    rotation.set(rotation.get() + info.delta.x * 0.3);
  };

  const handlePanStart = () => {
    isDragging.current = true;
  };

  const handlePanEnd = () => {
    // Small timeout to prevent immediate jump after release
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  return (
    <div className="relative w-full overflow-visible py-10 md:py-20">
      <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        className="flex items-center justify-center h-[400px] md:h-[600px] perspective-2000 cursor-grab active:cursor-grabbing touch-none select-none"
        onPan={handlePan}
        onPanStart={handlePanStart}
        onPanEnd={handlePanEnd}
        onPointerDown={handlePanStart} // Stop rotation immediately on touch
        onPointerUp={handlePanEnd}
      >
        <motion.div 
          className="relative preserve-3d"
          style={{ 
            width: cylinderSize.w, 
            height: cylinderSize.h,
            rotateY: rotationSpring 
          }}
        >
          {cards.map((card, i) => {
            const angle = (360 / cards.length) * i;
            return (
              <div 
                key={i}
                className="absolute inset-0 preserve-3d"
                style={{ 
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Mobile GAP: Scale down slightly to create visual space between panels */}
                <div className="w-full h-full p-2 md:p-0">
                  <div className="w-full h-full glass-card rounded-2xl md:rounded-[2rem] overflow-hidden group shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] border-white/10 hover:border-white/20">
                    <img 
                      src={card.img} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
                      alt={card.title} 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <div className="font-bold text-white mb-1 md:mb-2 leading-tight uppercase tracking-tighter text-xs md:text-lg">{card.title}</div>
                      <div className="text-brand-blue font-black text-[8px] md:text-sm tracking-widest">FROM {card.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32 px-4 md:px-12 overflow-hidden bg-black">
      {/* Hero Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[120%]"
        >
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                key={heroVideo}
                className="w-full h-full object-cover opacity-60 scale-105"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Vignette & Grain */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] contrast-125 brightness-100 pointer-events-none mix-blend-soft-light" />
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 md:gap-10"
        >
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-[10px] font-mono font-medium uppercase tracking-[0.4em] text-white/50">Next-Gen Engineering Lab</span>
          </div>

          <h1 className="flex flex-col -space-y-1 md:-space-y-4">
            <span className="font-heading font-black text-[clamp(2.8rem,13vw,6.5rem)] md:text-[clamp(4.5rem,12vw,10rem)] leading-[0.9] text-white uppercase tracking-tighter">WEBSITES</span>
            <span className="font-heading font-black text-[clamp(2.8rem,13vw,6.5rem)] md:text-[clamp(4.5rem,12vw,10rem)] leading-[0.9] text-gradient uppercase tracking-tighter">THAT EVOLVE.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
            High-performance digital engineering for businesses that demand the elite. Not just websites — digital dominance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
            <button 
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-brand-blue text-white font-black rounded-2xl text-sm flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-brand-blue/30 group"
            >
              VIEW OUR WORK
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.open('https://wa.me/917397695113?text=Hi%20Rimuru%2C%20I%20would%20like%20to%20discuss%20a%20project.', '_blank')}
              className="px-10 py-5 bg-black border border-white/20 text-white font-black rounded-2xl text-sm transition-all hover:bg-white/5 hover:border-white/40 flex items-center justify-center gap-3"
            >
              WHATSAPP US
            </button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 md:gap-x-10 gap-y-4 mt-4">
             {[
               { val: '50+', label: 'Sites Built' },
               { val: '₹5,999', label: 'Starting' },
               { val: '3-Day', label: 'Delivery' }
             ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                   <span className="text-white font-heading font-black text-lg">{stat.val}</span>
                   <span className="text-gray-600 text-[10px] uppercase font-mono tracking-widest">{stat.label}</span>
                </div>
             ))}
          </div>
        </motion.div>

        <div className="col-span-1 lg:col-span-5 hidden lg:block overflow-visible">
           <motion.div
             initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
             animate={{ opacity: 1, scale: 1, rotateY: 0 }}
             transition={{ duration: 1.2, delay: 0.2 }}
           >
              <Cylinder3D />
           </motion.div>
        </div>

        {/* Mobile Visual Support */}
        <div className="col-span-1 block lg:hidden w-full -mt-4">
            <Cylinder3D />
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const services = [
    { title: "Web Architecture", desc: "Enterprise-grade web systems built for speed, safety, and scale.", icon: Layout },
    { title: "E-Commerce", desc: "Conversion-optimized stores designed to turn visitors into buyers.", icon: ShoppingCart },
    { title: "Corporate Identity", desc: "Command attention with a high-fidelity digital presence.", icon: Building2 },
    { title: "SaaS & Tech", desc: "Digital products built for the modern internet age.", icon: Zap },
    { title: "Luxury & Food", desc: "Evocative designs that capture the essence of your brand.", icon: Coffee },
    { title: "Global Reach", desc: "Multilingual, high-performance sites built for worldwide scale.", icon: Globe },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-16 md:mb-24">
          <h2 className="font-heading text-6xl md:text-8xl font-black text-white uppercase leading-[0.8] tracking-tighter">
            CORE <br /><span className="text-gradient">SERVICES.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-sm">From corporate giants to scaling startups, we deploy web systems that convert.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 md:p-12 glass-card hover:bg-white/[0.05] transition-all group rounded-[2rem] md:rounded-3xl flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <s.icon size={32} />
              </div>
              <h3 className="font-heading text-3xl font-black text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ title: string, img: string, cat: string, color: string, onLiveClick?: () => void }> = ({ title, img, cat, color, onLiveClick }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative flex flex-col group cursor-pointer"
  >
    <div className="aspect-[4/3] w-full relative">
      <BrowserMockup url={`${title.toLowerCase().replace(' ', '-')}.rimuru`}>
        <img 
          src={img} 
          className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110" 
          alt={title} 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-1/2 bg-gradient-to-t from-black to-transparent opacity-100 group-hover:opacity-0 transition-opacity" />
        
        {onLiveClick && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
             <button 
               onClick={(e) => { e.stopPropagation(); onLiveClick(); }}
               className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-110 transition-transform shadow-2xl shadow-brand-blue/50"
             >
               <Eye size={16} /> VIEW LIVE DEMO
             </button>
          </div>
        )}
      </BrowserMockup>
    </div>

    <div className="mt-8 flex justify-between items-end px-2">
       <div>
         <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-brand-blue"></span>
            <span className="text-brand-blue text-[10px] font-black uppercase tracking-widest">{cat}</span>
         </div>
         <h4 className="font-heading text-4xl font-black text-white italic uppercase tracking-tighter">{title}</h4>
       </div>
       <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-blue hover:text-white transition-all group-hover:rotate-45">
          <ArrowUpRight size={20} />
       </button>
    </div>
  </motion.div>
);

const Showcase = ({ onShowcaseClick }: { onShowcaseClick: (title: string) => void }) => {
  const projects = [
    { title: "Orbis.Nft", cat: "Premium NFT Case Study", img: orbisCover, color: "#6FFF00", live: true },
    { title: "SkyElite", cat: "Private Jet Booking", img: skyeliteImg, color: "#202A36", live: true },
    { title: "Zephyr Store", cat: "E-Commerce", img: clothingImg, color: "#3b82f6" },
    { title: "Lumina Studio", cat: "Portfolio", img: portfolioImg, color: "#8b5cf6" },
    { title: "Vortex Platform", cat: "SaaS", img: saasImg, color: "#10b981" },
    { title: "Estate Key", cat: "Real Estate", img: realEstateImg, color: "#f59e0b" },
    { title: "Spice Route", cat: "Hospitality", img: restaurantImg, color: "#ef4444" },
  ];

  return (
    <section id="showcase" className="py-20 md:py-32 px-4 md:px-6 bg-white/[0.01]">
       <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
             <h2 className="font-heading text-5xl md:text-9xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-6 underline decoration-brand-blue decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8 text-center px-4">SHOWCASE.</h2>
             <p className="text-gray-500 text-base md:text-xl font-medium italic max-w-xl px-6">A selection of premium digital platforms engineered for growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((p, i) => (
              <div key={i} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard 
                  title={p.title} 
                  img={p.img} 
                  cat={p.cat} 
                  color={p.color} 
                  onLiveClick={p.live ? () => onShowcaseClick(p.title) : undefined}
                />
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: '01', title: "You Contact", desc: "Brief us on your vision via WhatsApp or Form." },
    { num: '02', title: "We Design & Build", desc: "Our lab engineers your high-fidelity platform." },
    { num: '03', title: "We Launch", desc: "Going live and dominating your market segment." },
  ];

  return (
    <section id="process" className="py-32 px-6 overflow-hidden">
       <div className="max-w-[1400px] mx-auto relative px-10">
          <h2 className="font-heading text-5xl md:text-8xl font-black text-white italic uppercase leading-[0.8] tracking-tighter mb-32 text-center md:text-left">SIMPLE. FAST. <br /><span className="text-gradient">DELIVERED.</span></h2>
          
          <div className="grid md:grid-cols-3 gap-16 relative">
             <div className="hidden md:block absolute top-12 inset-x-40 h-[2px] bg-white/5 -z-10" />
             {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center md:items-start gap-8 group">
                   <div className="font-heading font-black text-8xl text-transparent stroke-white/10 group-hover:stroke-brand-blue/40 transition-all" style={{ WebkitTextStroke: '2px currentColor' }}>{s.num}</div>
                   <div className="space-y-4 text-center md:text-left">
                      <h3 className="font-heading text-3xl font-black uppercase text-white group-hover:text-brand-blue transition-colors">{s.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-xs">{s.desc}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "₹5,999", features: ["3–5 sections", "Mobile ready", "2 revisions", "3-day delivery"], color: "#3b82f6" },
    { name: "Growth", price: "₹12,999", features: ["Dynamic site", "CMS included", "SEO basics", "Contact forms"], color: "#8b5cf6", popular: true },
    { name: "Pro", price: "₹24,999", features: ["Custom anims", "Booking sys", "Advanced UI", "5 revisions"], color: "#10b981" },
    { name: "Enterprise", price: "₹40,000+", features: ["Full web app", "E-commerce", "Integrations", "Custom quote"], color: "#f59e0b" },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-6">
       <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white uppercase leading-[0.8] tracking-tighter mb-6">SIMPLE <br /><span className="text-gradient">INVESTMENT.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-8 md:p-12 glass-card rounded-[2rem] md:rounded-[3rem] flex flex-col border transition-all ${plan.popular ? 'border-brand-purple scale-100 lg:scale-110 shadow-[0_0_50px_rgba(139,92,246,0.2)] z-10' : 'border-white/5 hover:border-white/20'}`}
              >
                {plan.popular && <div className="px-5 py-1.5 bg-brand-purple text-white text-[10px] font-black uppercase rounded-full mb-8 mx-auto w-fit">★ MOST POPULAR</div>}
                <h3 className="font-heading text-3xl font-black text-white mb-2 uppercase tracking-tighter text-center">{plan.name}</h3>
                <div className="mb-10 text-center"><span className="text-4xl font-heading font-black text-white tracking-tighter">{plan.price}</span></div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="text-gray-500 text-sm font-medium flex items-center gap-3">
                       <CheckCircle2 size={16} className="text-brand-blue" /> {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => window.open(`https://wa.me/917397695113?text=Hi%20Rimuru%2C%20I'm%20interested%20in%20the%20${plan.name}%20package`, '_blank')}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter transition-all hover:scale-[1.02] active:scale-95 ${plan.popular ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/20' : 'bg-white/5 text-white'}`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};

const Stats = () => {
    const stats = [
        { val: '50+', label: 'Sites Delivered' },
        { val: '100%', label: 'Client Satisfaction' },
        { val: '3 Days', label: 'Avg Delivery' },
        { val: '₹0', label: 'Hidden Charges' }
    ];

    return (
        <section className="py-20 bg-white/2 border-y border-white/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                   {stats.map((s, i) => (
                       <div key={i} className="text-center group">
                          <div className="font-heading text-4xl md:text-7xl font-black text-white uppercase tracking-tighter group-hover:text-brand-blue transition-colors mb-2">{s.val}</div>
                          <div className="text-[10px] font-mono font-medium uppercase tracking-[0.25em] text-gray-700">{s.label}</div>
                       </div>
                   ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-32 px-4 md:px-6">
            <div className="max-w-[1200px] mx-auto glass-card p-6 xs:p-8 md:p-24 lg:p-32 rounded-[2rem] md:rounded-[4rem] border-none shadow-[0_0_100px_rgba(59,130,246,0.1)] relative overflow-hidden text-center flex flex-col items-center">
                <h2 className="font-heading text-4xl sm:text-5xl md:text-9xl font-black text-white uppercase leading-[1] md:leading-[0.8] tracking-tighter mb-8 md:mb-12">READY TO <br /><span className="text-gradient">LAUNCH?</span></h2>
                <p className="text-gray-500 text-base md:text-xl font-medium tracking-tight mb-12 md:mb-16 max-w-xl italic px-4">Limited slots available this month. Don't miss out on your digital transformation.</p>
                
                <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-lg">
                    <button 
                        onClick={() => window.open('https://wa.me/917397695113?text=Hi%20Rimuru%2C%20I%20would%20like%20to%20start%20a%20project%20with%20you.', '_blank')}
                        className="w-full py-6 md:py-10 bg-[#25D366] text-white rounded-[1.5rem] md:rounded-[2.5rem] font-black text-xl md:text-3xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(37,211,102,0.3)] uppercase tracking-tighter flex items-center justify-center gap-4 md:gap-6"
                    >
                        <MessageCircle size={32} className="md:w-10 md:h-10" /> WHATSAPP NOW
                    </button>

                    <form className="w-full space-y-4 md:space-y-6 pt-12 border-t border-white/5" onSubmit={(e) => e.preventDefault()}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <input className="w-full px-6 md:px-8 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white font-bold outline-none focus:border-brand-blue transition-colors text-sm md:text-base" placeholder="Name" />
                            <input className="w-full px-6 md:px-8 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white font-bold outline-none focus:border-brand-blue transition-colors text-sm md:text-base" placeholder="Phone" />
                         </div>
                         <select className="w-full px-6 md:px-8 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white font-bold outline-none focus:border-brand-blue transition-colors appearance-none text-sm md:text-base">
                            <option className="bg-black">Select Package</option>
                            <option className="bg-black">Starter (₹5,999)</option>
                            <option className="bg-black">Growth (₹12,999)</option>
                            <option className="bg-black">Pro (₹24,999)</option>
                            <option className="bg-black">Enterprise (₹40,000+)</option>
                         </select>
                         <textarea className="w-full px-6 md:px-8 py-4 md:py-5 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl text-white font-bold outline-none focus:border-brand-blue transition-colors h-40 resize-none text-sm md:text-base" placeholder="Message" />
                         <button className="w-full py-4 md:py-6 bg-white text-black font-black uppercase rounded-xl md:rounded-2xl text-base md:text-lg hover:bg-brand-blue hover:text-white transition-all">SUBMIT REQUEST</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="w-full px-12 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-black/60">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-white text-xs">R</div>
               <span className="font-heading font-black text-2xl text-white tracking-tighter uppercase">RIMURU.</span>
            </div>
            <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase font-mono">Next-Gen Engineering Lab</p>
        </div>

        <div className="flex flex-col gap-8 items-center md:items-end">
            <div className="flex gap-10">
                <Instagram size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                <Twitter size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                <MessageCircle size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase italic">
                <span>© 2026 RIMURU DIGITAL</span>
                <span>MADE IN INDIA 🇮🇳</span>
            </div>
        </div>
    </footer>
);

export default function App() {
  const [showOrbis, setShowOrbis] = useState(false);
  const [showSkyElite, setShowSkyElite] = useState(false);

  if (showOrbis) {
    return <OrbisNft onClose={() => setShowOrbis(false)} />;
  }

  if (showSkyElite) {
    return <SkyElite onClose={() => setShowSkyElite(false)} />;
  }

  const handleShowcaseClick = (title: string) => {
    if (title === "Orbis.Nft") setShowOrbis(true);
    if (title === "SkyElite") setShowSkyElite(true);
  };

  return (
    <div className="relative font-sans text-white bg-black selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <Stats />
        <Solutions />
        <Showcase onShowcaseClick={handleShowcaseClick} />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to Top */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-32 right-12 z-[100] w-14 h-14 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white shadow-2xl"
      >
        <Plus size={24} className="rotate-45" />
      </motion.button>

      {/* Persistent WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917397695113?text=Hi%20Rimuru%2C%20I%20have%20an%20enquiry!" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all group animate-pulse-subtle"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</span>
      </a>
    </div>
  );
}