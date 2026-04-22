import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SkyEliteProps {
  onClose?: () => void;
}

const SkyElite: React.FC<SkyEliteProps> = ({ onClose }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif] selection:bg-gray-200">
      {/* Close Button if used as overlay in showcase */}
      {onClose && (
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 z-[100] w-12 h-12 rounded-full bg-white text-gray-900 border border-gray-100 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <X size={24} />
        </button>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" type="video/mp4" />
        </video>

        {/* Content Wrapper */}
        <div className="relative h-full z-10 flex flex-col">
          {/* Navigation Bar */}
          <nav className="w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900 tracking-tight">SkyElite</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-24 left-8 right-8 z-[60] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-in fade-in zoom-in duration-300">
              {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-900 font-semibold text-lg hover:text-gray-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

          {/* Main Content Area */}
          <main className="flex-1 flex items-center justify-center p-6 text-center">
            <div className="max-w-4xl -mt-80 flex flex-col items-center">
              <span className="text-sm font-semibold text-gray-600 tracking-[0.3em] mb-4 uppercase">
                PRIVATE JETS
              </span>
              
              <div className="relative mb-6">
                <h1 className="text-[56px] sm:text-[72px] md:text-[90px] lg:text-[120px] font-normal text-gray-500 leading-none tracking-tighter">
                  Premium.
                </h1>
                <h1 className="text-[56px] sm:text-[72px] md:text-[90px] lg:text-[120px] font-normal text-[#202A36] leading-none tracking-tighter -mt-2 md:-mt-3 lg:-mt-4 relative">
                  Accessible.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-medium">
                Your dedication deserves recognition. Experience travel redefined.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button className="px-10 py-4 rounded-full bg-gray-300 text-gray-800 font-semibold text-sm uppercase tracking-widest hover:bg-gray-400 transition-all active:scale-95">
                  Discover
                </button>
                <button className="px-10 py-4 rounded-full bg-[#202A36] text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#1a2229] transition-all active:scale-95 shadow-lg shadow-black/20">
                  Book Now
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Basic Footer for context */}
      <footer className="py-12 px-8 text-center bg-white border-t border-gray-100">
        <p className="text-gray-400 text-xs tracking-widest uppercase">© 2026 SkyElite Aviation. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SkyElite;
