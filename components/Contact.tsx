
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-16 leading-[0.8]">
              Ready to<br />
              <span className="text-[#FF3333] italic">Ignite?</span>
            </h2>
            <p className="text-stone-400 text-2xl mb-20 max-w-md font-medium leading-snug">
              Based in the heart of Blantyre, we're ready to take your vision global.
            </p>
            
            <div className="space-y-16">
              <div className="group">
                <span className="text-[11px] uppercase tracking-[0.5em] text-stone-600 block mb-6 font-black">Headquarters</span>
                <p className="text-3xl text-white font-black leading-tight tracking-tighter uppercase">
                  Chichiri Heritage House<br />
                  Independence Drive<br />
                  Blantyre, Malaŵi
                </p>
              </div>
              <div className="pt-16 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-[0.5em] text-stone-600 block mb-6 font-black">Say Hello</span>
                <a href="mailto:hello@kizazi.mw" className="text-5xl font-black text-[#00FF99] hover:text-white transition-colors block tracking-tighter">hello@kizazi.mw</a>
                <p className="text-2xl font-bold mt-4 text-stone-500">+265 993 909 120</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Minimal Frame */}
            <div className="absolute inset-0 border border-white/5 z-0"></div>
            <div className="relative bg-stone-900/40 backdrop-blur-md p-12 md:p-20 z-10 border border-white/10">
              <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.6em] text-stone-500 font-black">Identity</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#FF3333] outline-none transition-all text-3xl font-black placeholder:text-stone-800 tracking-tighter uppercase"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.6em] text-stone-500 font-black">Requirement</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#00FF99] outline-none transition-all text-3xl font-black placeholder:text-stone-800 tracking-tighter uppercase"
                    placeholder="PROJECT TYPE"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.6em] text-stone-500 font-black">Context</label>
                  <textarea 
                    rows={2}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#FF3333] outline-none transition-all text-3xl font-black resize-none placeholder:text-stone-800 tracking-tighter uppercase"
                    placeholder="TELL US MORE"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-8 bg-white text-black text-lg font-black uppercase tracking-[0.8em] hover:bg-[#FF3333] hover:text-white transition-all duration-500 transform active:scale-95 shadow-2xl"
                >
                  Initiate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
