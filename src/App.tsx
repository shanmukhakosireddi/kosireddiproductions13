import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToExplore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e6]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className={`font-bold text-lg tracking-wide transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              Kosireddi Productions
            </div>
            
            {/* Navigation Menu */}
            <div className={`hidden md:flex space-x-12 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              {[
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-black/80 hover:text-black transition-all duration-300 relative group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-black/80 hover:text-black transition-colors">
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-8 lg:px-12">
        {/* Background with semi-circle */}
        <div className="absolute inset-0 overflow-hidden">
          {/* White top half */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white"></div>
          {/* Black bottom with semi-circle cut */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] bg-white rounded-full"
              style={{ top: '-75vw', zIndex: 1 }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto relative z-20 py-20">
          {/* Main Heading */}
          <h1 className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-12 transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="block leading-none">KOSIREDDI</span>
            <span className="block leading-none">PRODUCTIONS</span>
          </h1>

          {/* Subheading Line 1 */}
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 transition-all duration-1500 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Helping Creators Bring Ideas to Life
          </h2>

          {/* Subheading Line 2 */}
          <p className={`text-sm sm:text-base lg:text-lg font-medium tracking-[0.3em] uppercase mb-20 transition-all duration-1500 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            THROUGH SHOOTING & EDITING MAGIC
          </p>

          {/* Split Content */}
          <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto mb-24 transition-all duration-1500 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center md:text-right">
              <p className="text-base lg:text-lg font-light lowercase">
                
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-base lg:text-lg font-bold uppercase tracking-wide">
               
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1000 z-20 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={scrollToExplore}
            className="flex flex-col items-center gap-3 text-black/60 hover:text-black transition-all duration-300 group"
          >
            
            <div className="relative">
            </div>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <div id="services" className="relative z-30">
        <Services />
      </div>
      
      {/* About Section */}
      <div id="about" className="relative z-30">
        <About />
      </div>
      
      {/* Contact Section */}
      <div id="contact" className="relative z-30">
        <Contact />
      </div>
    </div>
  );
}

export default App;