import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModuleCards from './components/ModuleCards';
import ModuleDetail from './components/ModuleDetail';
import Footer from './components/Footer';

export default function App() {
  const [activeModule, setActiveModule] = useState('video');

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      <Hero />
      <div className="flex-grow">
        <ModuleCards activeModule={activeModule} setActiveModule={setActiveModule} />
        <ModuleDetail activeModule={activeModule} />
      </div>
      <Footer />
    </div>
  );
}