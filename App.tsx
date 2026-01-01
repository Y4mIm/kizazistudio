
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import { View, Service } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleSelectService = (service: Service) => {
    setActiveService(service);
    setCurrentView(View.SERVICE_DETAIL);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView(View.HOME);
    setActiveService(null);
  };

  return (
    <div className="relative bg-[#050505] text-white selection:bg-[#FF3333] selection:text-white">
      <Navbar onHomeClick={handleBackToHome} />
      
      {currentView === View.HOME ? (
        <main>
          <Hero />
          <WorkGrid />
          <Services onSelectService={handleSelectService} />
          <Contact />
        </main>
      ) : (
        <ServiceDetail 
          service={activeService!} 
          onBack={handleBackToHome} 
          onSelectService={handleSelectService}
        />
      )}
      
      <Footer />

      {/* High-quality grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
