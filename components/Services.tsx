
import React from 'react';
import { Service, SERVICES_DATA } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-32 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">Expertise</h2>
            <p className="text-2xl text-stone-400 font-medium leading-tight max-w-lg mb-16">
              World-class design, executed with <span className="text-white italic">Malawian soul</span>. We build visuals that move markets.
            </p>
            <div className="relative p-12 bg-stone-900/50 backdrop-blur-sm overflow-hidden group border border-white/5">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FF3333]"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 block mb-6 font-black">Our Stance</span>
              <p className="text-white font-bold text-3xl leading-none tracking-tighter uppercase italic">
                Significant. Bold. Future.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {SERVICES_DATA.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => onSelectService(service)}
                className="group relative p-12 bg-transparent hover:bg-white/5 border-b border-white/5 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="flex justify-between items-baseline mb-8">
                  <h3 className="text-4xl font-black group-hover:text-white transition-colors uppercase tracking-tighter">{service.title}</h3>
                  <span className="text-stone-700 text-sm font-black group-hover:text-[#FF3333] transition-colors">0{idx + 1}</span>
                </div>
                <p className="text-stone-500 leading-relaxed mb-10 font-medium text-lg max-w-md group-hover:text-stone-300 transition-colors">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-white/10 group-hover:border-white/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center space-x-4 text-[11px] font-black uppercase tracking-[0.4em] text-stone-500 group-hover:text-[#FF3333] transition-colors">
                  <span>Explore Process</span>
                  <div className={`w-8 h-[2px] ${service.color.includes('white') ? 'bg-white' : service.color} group-hover:w-16 transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
