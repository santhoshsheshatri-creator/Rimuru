import React from 'react';
import { motion } from 'motion/react';
import { Mail, Twitter, Github, ChevronRight, X } from 'lucide-react';

interface OrbisNftProps {
  onClose?: () => void;
}

const OrbisNft: React.FC<OrbisNftProps> = ({ onClose }) => {
  const cards = [
    { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", score: "8.7/10" },
    { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", score: "9/10" },
    { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", score: "8.2/10" },
  ];

  return (
    <div className="relative w-full h-full bg-[#0a0a0c] text-cream font-sans overflow-auto selection:bg-neon selection:text-navy">
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-40 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      
      {/* Close Button */}
      {onClose && (
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 z-[60] w-12 h-12 rounded-full bg-neon text-navy flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(111,255,0,0.5)]"
        >
          <X size={24} />
        </button>
      )}

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[100svh] flex flex-col rounded-b-[40px] md:rounded-b-[80px] overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
        </video>
        
        {/* Header */}
        <header className="relative z-10 w-full max-w-[1831px] mx-auto px-6 md:px-12 py-8 md:py-12 flex justify-between items-center">
          <div className="font-display text-[22px] md:text-[28px] uppercase tracking-[0.4em] font-extrabold text-neon drop-shadow-lg">Orbis.Nft</div>
          
          <nav className="hidden lg:flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-10 py-5 shadow-2xl">
            {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((link) => (
              <button key={link} className="font-heading text-[13px] font-semibold uppercase px-4 hover:text-neon transition-all hover:-translate-y-0.5 active:translate-y-0 tracking-widest cursor-pointer">
                {link}
              </button>
            ))}
          </nav>
          
          <div className="flex gap-4">
            <div className="hidden lg:flex flex-col gap-4 fixed top-16 right-12 z-20">
               {[Mail, Twitter, Github].map((Icon, i) => (
                <button key={i} className="w-[64px] h-[64px] liquid-glass rounded-2xl flex items-center justify-center hover:bg-neon hover:text-navy transition-all duration-300">
                  <Icon size={24} />
                </button>
              ))}
            </div>
            <button className="lg:hidden w-[52px] h-[52px] liquid-glass rounded-xl flex items-center justify-center">
              <Mail size={22} />
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-grow flex flex-col justify-center max-w-[1831px] mx-auto w-full px-6 md:px-12 pb-24 md:pb-32">
          <div className="relative lg:ml-12 xl:ml-24 w-fit">
            <div className="relative">
              <h1 className="font-display text-[10vw] sm:text-[8vw] md:text-[6vw] xl:text-[100px] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-br from-white via-cream to-white/70 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] [text-shadow:4px_4px_0px_rgba(0,0,0,0.2)]">
                Beyond earth<br />
                and ( its ) familiar<br />
                boundaries
              </h1>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute -top-12 -right-4 sm:-top-14 sm:-right-8 md:-top-16 md:-right-24 font-condiment text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] text-neon -rotate-6 drop-shadow-[0_0_20px_rgba(111,255,0,0.6)] pointer-events-none select-none"
              >
                Nft collection
              </motion.div>
            </div>
          </div>
          
          <div className="flex lg:hidden justify-center gap-6 mt-16">
            {[Mail, Twitter, Github].map((Icon, i) => (
              <button key={i} className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center active:scale-90 transition-transform">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
           <div className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent opacity-50" />
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-center bg-[#0a0a0c]">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 max-w-[1831px] mx-auto px-6 md:px-12 flex flex-col justify-between h-full w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-24 mb-24 md:mb-32">
            <div className="relative">
              <h2 className="font-display text-[40px] sm:text-[50px] md:text-[80px] font-extrabold uppercase leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 [text-shadow:3px_3px_0px_rgba(0,0,0,0.3)]">
                Hello!<br />
                I'm orbis
              </h2>
              <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-16 font-condiment text-[36px] sm:text-[50px] md:text-[90px] text-neon -rotate-12 mix-blend-exclusion opacity-90 drop-shadow-[0_0_15px_rgba(111,255,0,0.5)]">
                Orbis
              </div>
            </div>
            <div className="max-w-[450px]">
              <p className="font-heading font-medium text-[16px] md:text-[20px] uppercase leading-relaxed text-cream/90 border-l-2 border-neon/50 pl-8 md:pl-10">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space. Experience the void through algorithmic artistry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-end">
            <div className="flex flex-col gap-6 opacity-40 hover:opacity-100 transition-opacity">
              <p className="font-mono text-[13px] md:text-[14px] uppercase tracking-wider">
                [ 01 ] A digital object fixed beyond time and place.
              </p>
              <p className="font-mono text-[13px] md:text-[14px] uppercase tracking-wider">
                [ 02 ] An exploration of distance, form, and silence.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-6 opacity-30 text-center">
              <p className="font-mono text-[13px] uppercase tracking-widest">PROJECT CODE: ORBIS-001</p>
              <div className="h-[1px] w-full bg-cream/10" />
              <p className="font-mono text-[13px] uppercase tracking-widest">STATUS: EXPLORATORY</p>
            </div>
            <div className="hidden md:flex flex-col gap-6 opacity-40 text-right hover:opacity-100 transition-opacity">
              <p className="font-mono text-[13px] md:text-[14px] uppercase tracking-wider">
                A digital object fixed beyond time and place.
              </p>
              <p className="font-mono text-[13px] md:text-[14px] uppercase tracking-wider">
                An exploration of distance, form, and silence in space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COLLECTION */}
      <section className="relative w-full bg-[#0a0a0c] py-24 md:py-40">
        <div className="max-w-[1831px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-12">
            <div className="flex flex-col relative w-full md:w-auto">
              <h2 className="font-display text-[48px] sm:text-[60px] md:text-[80px] font-extrabold uppercase leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                Collection of
              </h2>
              <div className="flex items-center ml-4 sm:ml-12 md:ml-24 lg:ml-32 mt-2 h-fit">
                <span className="font-condiment text-[42px] sm:text-[60px] md:text-[90px] text-neon mr-6 sm:mr-8 mb-2 whitespace-nowrap drop-shadow-[0_0_20px_rgba(111,255,0,0.4)]">Space</span>
                <span className="font-display text-[48px] sm:text-[60px] md:text-[80px] font-extrabold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40 [text-shadow:4px_4px_0px_rgba(0,0,0,0.2)]">objects</span>
              </div>
            </div>
            
            <button className="flex flex-col items-start group self-end md:mb-4">
              <div className="flex items-end gap-3 translate-y-2">
                <span className="font-display text-[32px] md:text-[54px] font-extrabold uppercase leading-none">SEE</span>
                <div className="flex flex-col">
                  <span className="font-display text-[18px] md:text-[28px] font-bold uppercase leading-none">ALL</span>
                  <span className="font-display text-[18px] md:text-[28px] font-bold uppercase leading-none">CREATORS</span>
                </div>
              </div>
              <div className="w-full h-[6px] md:h-[8px] bg-neon mt-4 transition-all duration-500 group-hover:scale-x-125 origin-left" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {cards.map((card, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15 }}
                className="liquid-glass rounded-[40px] p-6 md:p-8 transition-all duration-500 group border border-white/5 hover:border-neon/20 hover:shadow-[0_20px_50px_rgba(111,255,0,0.1)]"
              >
                <div className="relative w-full aspect-square rounded-[30px] overflow-hidden mb-8 shadow-2xl">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                    <source src={card.url} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="liquid-glass rounded-[24px] px-6 py-5 flex justify-between items-center bg-white/[0.03]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-widest opacity-60 font-bold">RARITY SCORE:</span>
                    <span className="text-[18px] font-black font-display tracking-tight text-neon">{card.score}</span>
                  </div>
                  <button className="w-14 h-14 bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-[0_10px_30px_rgba(183,36,255,0.4)] rounded-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all">
                    <ChevronRight size={28} className="text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="relative w-full bg-[#0a0a0c] pb-40 overflow-hidden">
        <div className="relative w-full max-w-[1831px] mx-auto group">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-auto block z-0 rounded-[30px] md:rounded-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-end lg:pr-[12vw] lg:pl-[12vw] text-right px-6 md:px-12 bg-gradient-to-l from-[#0a0a0c]/80 via-[#0a0a0c]/20 to-transparent rounded-[30px] md:rounded-[60px]">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute -top-12 sm:-top-20 right-0 font-condiment text-[36px] sm:text-[50px] md:text-[80px] lg:text-[100px] text-neon mix-blend-exclusion -rotate-2 pointer-events-none"
              >
                Go beyond
              </motion.div>
              <h2 className="font-display text-[26px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[90px] font-extrabold uppercase leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/40 [text-shadow:4px_4px_0px_rgba(0,0,0,0.4)]">
                <div className="mb-4 md:mb-10">JOIN US.</div>
                REVEAL WHAT'S <span className="text-neon drop-shadow-[0_0_15px_rgba(111,255,0,0.5)]">HIDDEN</span>.<br />
                DEFINE WHAT'S NEXT.<br />
                FOLLOW THE SIGNAL.
              </h2>
            </div>
          </div>

          {/* Social Icons Bottom-Left */}
          <div className="absolute left-[5%] bottom-[10%] md:bottom-[15%] z-20">
            <div className="flex flex-col liquid-glass rounded-2xl md:rounded-[1.5rem] overflow-hidden border border-white/5 bg-navy/20">
              {[Mail, Twitter, Github].map((Icon, i) => (
                <button 
                  key={i} 
                  className={`
                    w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]
                    flex items-center justify-center hover:bg-neon hover:text-navy transition-all duration-300
                    ${i !== 2 ? 'border-b border-white/10' : ''}
                  `}
                >
                  <Icon className="w-[24%] h-[24%]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OrbisNft;
