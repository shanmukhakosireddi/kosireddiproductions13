import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const scrollToExplore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <span className="hidden sm:inline">Kosireddi Productions</span>
              <span className="sm:hidden">KP</span>
            </div>
            
            {/* Navigation Menu */}
            <div className={`hidden md:flex space-x-12 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              {[
                { name: 'My Work', id: 'my-work' },
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
            <div className={`md:hidden transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <button 
                onClick={toggleMobileMenu}
                className="text-black/80 hover:text-black transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} style={{ top: '64px' }}>
          <div className={`bg-[#f5f0e6] w-full h-full transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
              {[
                { name: 'My Work', id: 'my-work' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-medium text-black/80 hover:text-black transition-all duration-300 py-4 px-8 rounded-lg hover:bg-black/5 min-h-[60px] flex items-center justify-center w-full max-w-xs"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-8 lg:px-12">
        {/* Background with semi-circle */}
        <div className="absolute inset-0 overflow-hidden">
          {/* White top half */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white"></div>
          {/* Black bottom with semi-circle cut */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black">
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200vw] sm:w-[150vw] h-[200vw] sm:h-[150vw] bg-white rounded-full"
              style={{ top: '-100vw', zIndex: 1 }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto relative z-20 py-10 sm:py-20">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8 sm:mb-12 transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="block leading-none">KOSIREDDI</span>
            <span className="block leading-none">PRODUCTIONS</span>
          </h1>

          {/* Subheading Line 1 */}
          <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6 px-4 transition-all duration-1500 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Helping Creators Bring Ideas to Life
          </h2>

          {/* Subheading Line 2 */}
          <p className={`text-xs sm:text-sm lg:text-base font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-12 sm:mb-20 px-4 transition-all duration-1500 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            THROUGH SHOOTING & EDITING MAGIC
          </p>

          {/* Split Content */}
          <div className={`grid md:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 max-w-4xl mx-auto mb-12 sm:mb-24 px-4 transition-all duration-1500 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center md:text-right">
              <p className="text-sm sm:text-base lg:text-lg font-light lowercase">
                
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wide">
               
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1000 z-20 ${
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

      {/* My Work Section */}
      <div id="my-work" className="relative z-30">
        <MyWork />
      </div>

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