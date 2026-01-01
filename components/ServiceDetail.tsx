
import React, { useState, useEffect } from 'react';
import { Service, SERVICES_DATA } from '../types';
import { generateDetailedServiceInfo } from '../services/geminiService';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onSelectService: (service: Service) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onSelectService }) => {
  const [details, setDetails] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDetails = async () => {
      setLoading(true);
      const text = await generateDetailedServiceInfo(service.title);
      setDetails(text);
      setLoading(false);
    };
    fetchDetails();
  }, [service]);

  const relatedServices = SERVICES_DATA.filter(s => s.title !== service.title).slice(0, 2);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-4 mb-20 text-[10px] uppercase tracking-[0.4em] font-black text-stone-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6 border-2 border-stone-800 rounded-full p-1 group-hover:border-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className={`inline-block px-4 py-1 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-white ${service.color}`}>
              Capabilities / {service.title}
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase">
              {service.title.split(' ')[0]}<br />
              <span className="text-stone-700">{service.title.split(' ')[1] || ''}</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {service.tags.map(tag => (
                <span key={tag} className="text-sm font-black uppercase tracking-widest px-6 py-2 border-2 border-stone-800 text-stone-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-stone-900 p-12 relative">
              <div className={`absolute top-0 left-0 w-2 h-full ${service.color}`}></div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">The Vision</h2>
              <div className="text-stone-300 text-xl font-medium leading-relaxed whitespace-pre-line">
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-stone-800 w-3/4"></div>
                    <div className="h-4 bg-stone-800 w-full"></div>
                    <div className="h-4 bg-stone-800 w-5/6"></div>
                  </div>
                ) : details}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-t-4 border-stone-900 pt-8">
                <h4 className="text-xs uppercase tracking-widest text-stone-600 font-black mb-4">Precision Level</h4>
                <p className="text-2xl font-black">Absolute</p>
              </div>
              <div className="border-t-4 border-stone-900 pt-8">
                <h4 className="text-xs uppercase tracking-widest text-stone-600 font-black mb-4">Market Focus</h4>
                <p className="text-2xl font-black">Global-Local</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Gallery Placeholder */}
        <div className="mt-40">
            <h3 className="text-4xl font-black mb-16 uppercase tracking-tight">Case Study Visuals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-video bg-stone-900 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" alt="Process" />
                </div>
                <div className="aspect-video bg-stone-900 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200`} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" alt="Result" />
                </div>
            </div>
        </div>

        {/* Related Services Section */}
        <div className="mt-40 pt-20 border-t border-stone-900">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-5xl font-black uppercase tracking-tighter">Other<br />Expertise</h3>
            <button 
              onClick={onBack}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-500 hover:text-white transition-colors"
            >
              All Capabilities
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map((rel, idx) => (
              <div 
                key={idx}
                onClick={() => onSelectService(rel)}
                className="group p-10 bg-stone-900/50 hover:bg-stone-900 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${rel.color}`}></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 mb-6 block">Capability / 0{idx + 1}</span>
                <h4 className="text-3xl font-black uppercase mb-4 group-hover:text-white transition-colors">{rel.title}</h4>
                <p className="text-stone-500 text-sm font-medium mb-8 max-w-sm group-hover:text-stone-300 transition-colors">
                  {rel.description}
                </p>
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] text-stone-700 group-hover:text-white">
                  <span>Explore Detail</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
