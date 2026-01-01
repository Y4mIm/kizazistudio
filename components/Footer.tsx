
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="text-center md:text-left">
          <span className="text-2xl font-black tracking-tighter">KIZAZI<span className="text-[#FF3333]">STUDIOS</span></span>
          <p className="text-[10px] text-stone-600 uppercase tracking-[0.5em] mt-4 font-black">© 2025 Generation Creative / BT</p>
        </div>

        <div className="flex space-x-12">
          {['Instagram', 'Behance', 'LinkedIn'].map(social => (
            <a 
              key={social} 
              href="#" 
              className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-500 hover:text-[#00FF99] transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="text-[10px] text-stone-700 uppercase tracking-[0.6em] font-black italic">
          Crafting Legacies — Blantyre, Malaŵi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
