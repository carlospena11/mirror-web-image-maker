
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tv, Music, Wifi, ArrowUp, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("tv-streaming");
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-white py-4 px-6 md:px-12 lg:px-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-[#46494F] text-2xl font-bold flex items-center">
              <img 
                src="/lovable-uploads/0b938288-c45d-4a66-8950-ca5af79fda4f.png" 
                alt="Nuvik" 
                className="h-8 mr-2"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#23b5e9]">Inicio</a>
            <a href="/planes" className="text-gray-700 hover:text-[#23b5e9]">Planes de internet</a>
            <a href="/smart-home" className="text-gray-700 hover:text-[#23b5e9]">Smart home</a>
            <a href="/contacto" className="text-gray-700 hover:text-[#23b5e9]">Contacto</a>
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
            <button className="nuvik-button">
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
              <h2 className="text-[#a8c80e] text-3xl md:text-4xl font-bold mb-4">
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
              
              <button className="bg-[#a8c80e] hover:bg-[#98b80d] text-white font-medium py-3 px-6 rounded transition-colors duration-200">
                NUEVOS PLANES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Internet Plans Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[#23b5e9] text-3xl md:text-4xl font-bold mb-4">
              Planes de internet y servicios streaming para la<br />
              nueva generación de hogares
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Trabaja en línea con aplicaciones y programas de alto rendimiento y para varias personas o dispositivos conectados simultáneamente.
            </p>
          </div>
          
          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {/* Plan 1 - Basic */}
            <Card className="border-t-4 border-t-[#23b5e9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col">
                  <span className="text-lg text-gray-700">Planes Básicos</span>
                  <span className="text-sm text-gray-500">Internet súper rápido</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center bg-gray-50 py-4 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-[#46494F]">INTERNET 30 MBPS</div>
                    <div className="text-[#a8c80e] text-3xl font-bold mt-2">$33.00</div>
                    <div className="text-gray-500">mensual</div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-3">
                    Conexión básica y económica para navegar por la web, consultar correos electrónicos y disfrutar de contenidos en streaming de baja calidad.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Tecnología fibra óptica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Velocidad simétrica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Añade servicios streaming a precio especial</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Ideal para hogares con pocos dispositivos conectados</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#23b5e9] hover:bg-[#1ca5d6]">Contactar</Button>
              </CardFooter>
            </Card>
            
            {/* Plan 2 - Standard */}
            <Card className="border-t-4 border-t-[#23b5e9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col">
                  <span className="text-lg text-gray-700">Plan Estándar</span>
                  <span className="text-sm text-gray-500">Mayor conectividad</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center bg-gray-50 py-4 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-[#46494F]">INTERNET 50 MBPS</div>
                    <div className="text-[#a8c80e] text-3xl font-bold mt-2">$37.00</div>
                    <div className="text-gray-500">mensual</div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-3">
                    Adecuado para usuarios que desean una conexión más rápida para realizar tareas cotidianas en línea y ver vídeos en streaming en calidad estándar.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Tecnología fibra óptica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Velocidad simétrica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Añade servicios streaming a precio especial</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#23b5e9] hover:bg-[#1ca5d6]">Contactar</Button>
              </CardFooter>
            </Card>
            
            {/* Plan 3 - Premium */}
            <Card className="border-t-4 border-t-[#23b5e9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col">
                  <span className="text-lg text-gray-700">Plan Premium</span>
                  <span className="text-sm text-gray-500">Alto rendimiento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center bg-gray-50 py-4 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-[#46494F]">INTERNET 100 MBPS</div>
                    <div className="text-[#a8c80e] text-3xl font-bold mt-2">$55.00</div>
                    <div className="text-gray-500">mensual</div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-3">
                    Ideal para quienes desean una conexión estable para disfrutar de contenidos en streaming en alta definición y realizar videoconferencias sin interrupciones.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Tecnología fibra óptica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Velocidad simétrica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Añade servicios streaming a precio especial</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Adecuado para familias y hogares con múltiples usuarios activos</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#23b5e9] hover:bg-[#1ca5d6]">Contactar</Button>
              </CardFooter>
            </Card>
            
            {/* Plan 4 - Ultimate */}
            <Card className="border-t-4 border-t-[#23b5e9] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col">
                  <span className="text-lg text-gray-700">Plan Máximo</span>
                  <span className="text-sm text-gray-500">Velocidad extrema</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center bg-gray-50 py-4 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-[#46494F]">INTERNET 150 MBPS</div>
                    <div className="text-[#a8c80e] text-3xl font-bold mt-2">$75.00</div>
                    <div className="text-gray-500">mensual</div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-3">
                    Lorem ipsum dolor sit amet calesua
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Tecnología fibra óptica</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Velocidad simétrica 1:1</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Añade servicios streaming a precio especial</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowUp className="h-4 w-4 text-[#a8c80e] mr-2 mt-0.5" />
                      <span>Ideal para hogares con múltiples dispositivos y usuarios activos</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#23b5e9] hover:bg-[#1ca5d6]">Contactar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Entertainment Options Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[#23b5e9] text-3xl md:text-4xl font-bold mb-4">
              ¡Disfruta de lo mejor del cine y<br/>
              eventos en vivo en un solo lugar!
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Con nuestros planes de internet de fibra óptica y estos increíbles servicios de
              streaming, ¡tendrás una experiencia de entretenimiento sin igual! Elige tus
              plataformas favoritas y empieza a disfrutar de lo mejor en cine, series, música,
              deportes y videojuegos. ¡Nuvik te conecta con el mundo del entretenimiento!
            </p>
          </div>
          
          {/* Tabs */}
          <div className="mt-8">
            <Tabs 
              defaultValue="tv-streaming" 
              value={activeTab}
              onValueChange={setActiveTab} 
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger 
                    value="tv-streaming" 
                    className="px-8 py-3 data-[state=active]:bg-[#46494F] data-[state=active]:text-white"
                  >
                    <Tv className="w-4 h-4 mr-2" /> TV Streaming
                  </TabsTrigger>
                  <TabsTrigger 
                    value="musica" 
                    className="px-8 py-3 data-[state=active]:bg-[#46494F] data-[state=active]:text-white"
                  >
                    <Music className="w-4 h-4 mr-2" /> Música
                  </TabsTrigger>
                  <TabsTrigger 
                    value="gaming" 
                    className="px-8 py-3 data-[state=active]:bg-[#46494F] data-[state=active]:text-white"
                  >
                    Gaming
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* TV Streaming Content */}
              <TabsContent value="tv-streaming" className="mt-6">
                <div className="space-y-12">
                  {/* Star+ */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1 flex justify-center">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Star%2B_logo.svg/2560px-Star%2B_logo.svg.png" 
                        alt="Star+" 
                        className="h-12 object-contain"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">Star+</h3>
                      <p className="text-gray-700">
                        La plataforma de streaming que te ofrece una amplia variedad de 
                        contenido de alta calidad. Desde las mejores series, películas y 
                        documentales, hasta programas de televisión y contenido exclusivo. 
                        Con Star+, siempre tendrás algo interesante que ver. No te pierdas lo 
                        mejor del entretenimiento en un solo lugar.
                      </p>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="text-2xl font-bold text-[#46494F]">$8 al mes</div>
                      <Button className="mt-4 bg-[#a8c80e] hover:bg-[#98b80d]">Agregar</Button>
                    </div>
                  </div>

                  {/* IPTV Television */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1 flex justify-center">
                      <div className="h-16 w-16">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#46494F]">
                          <rect x="2" y="7" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                          <path d="M17 3L12 7L7 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">IPTV Televisión</h3>
                      <p className="text-gray-700">
                        Una revolución en la forma de ver la televisión. Con IPTV, podrás 
                        disfrutar de una amplia variedad de canales en alta definición y sin 
                        interrupciones. Además, tendrás la posibilidad de ver tus programas 
                        favoritos a la hora que desees gracias a su función de grabación y 
                        reproducción.
                      </p>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="text-2xl font-bold text-[#46494F]">$4.50 al mes</div>
                      <Button className="mt-4 bg-[#a8c80e] hover:bg-[#98b80d]">Agregar</Button>
                    </div>
                  </div>

                  {/* Netflix Estándar */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1 flex justify-center">
                      <img 
                        src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" 
                        alt="Netflix" 
                        className="h-12 object-contain"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">Netflix Estándar</h3>
                      <p className="text-gray-700">
                        Disfruta de las mejores películas, series y documentales en uno de los 
                        servicios de streaming más populares del mundo. Desde producciones 
                        originales hasta clásicos atemporales, Netflix tiene algo para todos. 
                        Este plan permite que dos usuarios disfruten de contenido en HD al 
                        mismo tiempo.
                      </p>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="text-2xl font-bold text-[#46494F]">$8.50 al mes</div>
                      <Button className="mt-4 bg-[#a8c80e] hover:bg-[#98b80d]">Agregar</Button>
                    </div>
                  </div>

                  {/* Netflix Premium */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-1 flex justify-center">
                      <img 
                        src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" 
                        alt="Netflix" 
                        className="h-12 object-contain"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold mb-2">Netflix Premium</h3>
                      <p className="text-gray-700">
                        Para los verdaderos amantes del cine y las series, Netflix Premium 
                        permite que hasta cuatro usuarios disfruten simultáneamente de 
                        contenido en Ultra HD. ¡Nunca más tendrás que discutir sobre qué ver!
                      </p>
                    </div>
                    <div className="md:col-span-1 text-center">
                      <div className="text-2xl font-bold text-[#46494F]">$10 al mes</div>
                      <Button className="mt-4 bg-[#a8c80e] hover:bg-[#98b80d]">Agregar</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Música Content */}
              <TabsContent value="musica" className="mt-6">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Servicios de música próximamente</h3>
                  <p>Estamos trabajando para traerte las mejores plataformas de streaming de música.</p>
                </div>
              </TabsContent>

              {/* Gaming Content */}
              <TabsContent value="gaming" className="mt-6">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Servicios de gaming próximamente</h3>
                  <p>Estamos trabajando para traerte las mejores plataformas de gaming.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#46494F] text-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/73c7e074-1294-4daa-8df6-6b061f887df7.png" 
                  alt="Nuvik" 
                  className="h-8 mb-2" 
                />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                La mejor conexión a internet de fibra óptica con ultra velocidad y la última tecnología
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#23b5e9] hover:border-[#23b5e9] transition-colors duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#23b5e9] hover:border-[#23b5e9] transition-colors duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#23b5e9] hover:border-[#23b5e9] transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#23b5e9] hover:border-[#23b5e9] transition-colors duration-200">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Company Links */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">Comienza</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">Internet</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">TV & Streaming</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">Smart Home</a></li>
              </ul>
            </div>
            
            {/* Support Links */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">Centro de ayuda</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">Ticket de soporte</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#23b5e9] text-sm">Contacto</a></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-2">Enterate de nuestras ofertas exclusivas suscribiéndote a nuestro boletín de noticias.</h3>
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex flex-col space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white text-black" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-[#a8c80e] hover:bg-[#98b80d]"
                  >
                    SUSCRIBIRSE
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-600" />
          
          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div>Copyright © 2023 Nuvik. Todos los derechos reservados</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#23b5e9]">Términos del servicio</a>
              <a href="#" className="hover:text-[#23b5e9]">Política y privacidad</a>
              <a href="#" className="hover:text-[#23b5e9]">Política de cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
