
import React from "react";
import { Button } from "@/components/ui/button";
import { Tv, Music } from "lucide-react";

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

      {/* Streaming Services Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* TV and Services Image */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <img 
                src="/lovable-uploads/76a74df6-52fb-4065-9bd4-9de22165b239.png" 
                alt="TV con plataformas de streaming" 
                className="w-full max-w-lg"
              />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-[#00b894] text-3xl md:text-4xl font-bold mb-4">
                Tus plataformas favoritas, <br />
                en tu suscripción de internet <br />
                fibra óptica.
              </h2>
              
              <p className="text-gray-700 mb-8">
                Añade a tus planes de internet: STAR+, Disney+, Netflix, Amazon Prime Video, YouTube Premium, 
                Apple Music o Crunchyroll a tu plan con un costo adicional.
              </p>
              
              {/* Streaming Platforms Logos */}
              <div className="grid grid-cols-4 gap-6 mb-10">
                {/* Platform Icons */}
                <img src="https://cdn.worldvectorlogo.com/logos/disney.svg" alt="Disney+" className="h-6 object-contain" />
                <img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" alt="Netflix" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Star%2B_logo.svg/2560px-Star%2B_logo.svg.png" alt="Star+" className="h-6 object-contain" />
                <img src="https://cdn.worldvectorlogo.com/logos/prime-video-1.svg" alt="Prime Video" className="h-6 object-contain" />
                <img src="https://cdn.worldvectorlogo.com/logos/youtube-premium.svg" alt="YouTube Premium" className="h-6 object-contain" />
                <img src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg" alt="Spotify" className="h-6 object-contain" />
                <img src="https://cdn.worldvectorlogo.com/logos/apple-music-icon.svg" alt="Apple Music" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png" alt="Crunchyroll" className="h-6 object-contain" />
              </div>
              
              <button className="bg-[#00b894] hover:bg-[#00a382] text-white font-medium py-3 px-6 rounded transition-colors duration-200">
                NUEVOS PLANES
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
