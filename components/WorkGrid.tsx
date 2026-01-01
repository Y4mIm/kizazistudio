
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Malaŵi Gold',
    category: 'Brand Identity',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=1200',
    description: 'Elevating local heritage through premium visual systems.',
    accentColor: 'bg-[#FF3333]'
  },
  {
    id: '2',
    title: 'Chichiri Pulse',
    category: 'Motion Graphics',
    imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1200',
    description: 'Dynamic storytelling for the modern African city.',
    accentColor: 'bg-[#00FF99]'
  },
  {
    id: '3',
    title: 'Lake Horizon',
    category: 'Creative Direction',
    imageUrl: 'https://images.unsplash.com/photo-1534331744111-f9092837f511?auto=format&fit=crop&q=80&w=1200',
    description: 'A visual tribute to the Warm Heart of Africa.',
    accentColor: 'bg-white'
  },
  {
    id: '4',
    title: 'Mulanje Echo',
    category: 'Graphic Design',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
    description: 'Geometric explorations of Malawian landscapes.',
    accentColor: 'bg-[#FF3333]'
  },
  {
    id: '5',
    title: 'Zomba Static',
    category: 'Art Direction',
    imageUrl: 'https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=1200',
    description: 'Minimalism meets vibrant cultural expression.',
    accentColor: 'bg-[#00FF99]'
  },
  {
    id: '6',
    title: 'Kizazi Flow',
    category: 'Brand Systems',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200',
    description: 'Defining the next generation of visual language.',
    accentColor: 'bg-white'
  }
];

const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Portfolios</h2>
          <p className="text-[#FF3333] text-[11px] tracking-[0.5em] uppercase mt-6 md:mt-0 font-black">
            Selected Works — BT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative aspect-[3/4] overflow-hidden bg-stone-900 cursor-pointer"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s]"
              />
              <div className={`absolute inset-0 ${project.accentColor} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-end p-12 z-10`}>
                <span className="text-[10px] uppercase tracking-[0.4em] text-black font-black mb-6 block">/ {project.category}</span>
                <h3 className="text-5xl font-black mb-8 text-black uppercase leading-none tracking-tighter">{project.title}</h3>
                <p className="text-sm text-black font-bold mb-10 max-w-xs leading-relaxed opacity-80">{project.description}</p>
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group/btn hover:bg-black transition-colors">
                  <svg className="w-5 h-5 text-black group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
