
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  accentColor: string;
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
  color: string;
}

export enum View {
  HOME = 'home',
  SERVICE_DETAIL = 'service-detail'
}

export enum Section {
  HERO = 'hero',
  WORK = 'work',
  SERVICES = 'services',
  CONTACT = 'contact'
}

export const SERVICES_DATA: Service[] = [
  {
    title: 'Motion Graphics',
    description: 'Dynamic storytelling through kinetic typography, fluid animations, and immersive visual effects that bring static brands to life.',
    tags: ['C4D', 'After Effects', '2D/3D'],
    color: 'bg-[#FF3333]'
  },
  {
    title: 'Brand Identity',
    description: 'Constructing robust visual foundations. We craft logos, color systems, and brand guidelines that resonate across every touchpoint.',
    tags: ['Logos', 'Systems', 'Strategy'],
    color: 'bg-[#00FF99]'
  },
  {
    title: 'Graphic Design',
    description: 'Sophisticated print and digital design with a focus on hierarchy, typography, and purposeful composition.',
    tags: ['Editorial', 'UI/UX', 'Packaging'],
    color: 'bg-white'
  },
  {
    title: 'Creative Direction',
    description: 'Holistic vision for campaigns and brand launches. We manage the visual narrative from concept to final execution.',
    tags: ['Curation', 'Vision', 'Execution'],
    color: 'bg-stone-500'
  }
];
