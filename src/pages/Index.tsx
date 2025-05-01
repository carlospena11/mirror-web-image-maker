
import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white py-4 px-6 md:px-12 lg:px-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-[#004c6d] text-2xl font-bold flex items-center">
              click!
              <span className="text-[#00b894] text-3xl">.</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#00b894]">Inicio</a>
            <a href="/planes" className="text-gray-700 hover:text-[#00b894]">Planes de internet</a>
            <a href="/smart-home" className="text-gray-700 hover:text-[#00b894]">Smart home</a>
            <a href="/contacto" className="text-gray-700 hover:text-[#00b894]">Contacto</a>
            <a href="/mi-cuenta" className="account-button">MI CUENTA</a>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Text Content */}
        <div className="hero-gradient w-full md:w-1/2 px-6 py-12 md:px-12 lg:px-20 flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Fibra óptica hasta tu hogar
          </h1>
          <p className="text-white text-base mb-10 opacity-90 max-w-md">
            Mejora tu experiencia de navegación con internet simétrico de fibra óptica. Experimenta la misma velocidad de descarga y de subida sin interrupciones.
          </p>
          <div>
            <button className="click-button">
              VER PLANES
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 bg-black relative overflow-hidden">
          <img 
            src="/lovable-uploads/f0e24088-6ecb-426c-bdf9-1a06ed830461.png" 
            alt="Mujer sonriendo usando laptop" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
