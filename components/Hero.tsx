
import React, { useState, useEffect } from 'react';
import { generateStudioManifesto } from '../services/geminiService';

const Hero: React.FC = () => {
  const [manifesto, setManifesto] = useState('Forging the visual future of brands from the heart of Blantyre.');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchManifesto = async () => {
      const text = await generateStudioManifesto();
      setManifesto(text);
      setIsLoading(false);
    };
    fetchManifesto();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden bg-[#050505]">
      {/* Refined Atmospheric Blobs */}
      <div className="absolute top-[5%] right-[10%] w-[35rem] h-[35rem] bg-[#FF3333]/10 rounded-full blur-[160px] animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[30rem] h-[30rem] bg-[#00FF99]/5 rounded-full blur-[180px] animate-[pulse_12s_infinite]"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="max-w-5xl">
          <span className="text-[#FF3333] text-[10px] font-black uppercase tracking-[0.8em] mb-12 block animate-[fadeIn_0.8s_ease-out]">Kizazi Studios / BT — MW</span>
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            Visual<br />
            <span className="text-[#00FF99]">Impact</span>.<br />
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end gap-12 mt-24 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <p className="text-xl md:text-2xl text-stone-400 font-medium max-w-xl leading-snug">
              {isLoading ? 'Wait for it...' : manifesto}
            </p>
            
            <a href="#work" className="group flex items-center space-x-6 mb-2 shrink-0">
              <div className="w-16 h-16 rounded-full bg-[#FF3333] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-[#FF3333]/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-white font-black">Our Work</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
