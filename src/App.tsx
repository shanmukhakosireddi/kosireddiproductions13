import React, { useState, useEffect } from 'react';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e6]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-0 sm:h-16">
            {/* Logo */}
            <div className={`font-bold text-base sm:text-lg tracking-wide transition-all duration-1000 text-center sm:text-left mb-2 sm:mb-0 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              Kosireddi Productions
            </div>
            
            {/* Navigation Menu */}
            <div className={`flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-200 ${
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
                  className="text-xs sm:text-sm font-medium text-black/80 hover:text-black transition-all duration-300 relative group min-h-[48px] flex items-center px-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-12 pt-20 sm:pt-16">
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
        <div className="text-center max-w-6xl mx-auto relative z-20 py-8 sm:py-12 lg:py-20">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8 sm:mb-12 transition-all duration-1500 leading-[0.85] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="block leading-none">KOSIREDDI</span>
            <span className="block leading-none">PRODUCTIONS</span>
          </h1>

          {/* Subheading Line 1 */}
          <h2 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6 transition-all duration-1500 delay-300 px-4 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Helping Creators Bring Ideas to Life
          </h2>

          {/* Subheading Line 2 */}
          <p className={`text-xs sm:text-sm lg:text-base font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-12 sm:mb-16 lg:mb-20 transition-all duration-1500 delay-500 px-4 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            THROUGH SHOOTING & EDITING MAGIC
          </p>

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