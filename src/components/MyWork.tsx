import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const MyWork = () => {
  return (
    <section className="bg-[#f8f2ea] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 min-h-screen w-full">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black uppercase">
            MY WORK
          </h1>
        </div>

{/* Photo Grid Section */}
<div className="mb-16 sm:mb-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
    {[
      "https://i.postimg.cc/MGRn4BWj/burntcolor-mov-01-00-31-00-Still002.jpg", // Image 1
      "https://i.postimg.cc/B642Bpxv/Whats-App-Image-2025-08-11-at-10-53-14-4b1d561e.jpg", // Image 2
      "https://i.postimg.cc/d0BhwYyq/Whats-App-Image-2025-08-11-at-10-51-08-d34a2a6c.jpg",  // Image 3
      "https://i.postimg.cc/Jn3V9rDq/websiteimage.jpg"  // Image 4
    ].map((imageUrl, index) => (
      <div
        key={index}
        className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative touch-manipulation"
      >
        {/* Hover background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-lg"></div>
        
        {/* Image */}
        <img
          src={imageUrl}
          alt={`Work sample ${index + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
        />
      </div>
    ))}
  </div>
</div>


        {/* Videos Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black uppercase">
              MY VIDEOS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative touch-manipulation"
              >
                {/* Hover background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-lg"></div>
                <img
                  src={`https://images.pexels.com/photos/${
                    index === 1 ? '3585047' : 
                    index === 2 ? '3184418' : '3184465'
                  }/pexels-photo-${
                    index === 1 ? '3585047' : 
                    index === 2 ? '3184418' : '3184465'
                  }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Video thumbnail ${index}`}
                  className="w-full h-full object-cover relative z-0"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 z-20">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-30 touch-manipulation">
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Channel Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black uppercase mb-4 sm:mb-6">
            FIND ME ON YOUTUBE
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-black/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            I post weekly content on filmmaking, creativity, and student life.
          </p>
          
          {/* YouTube Channel Info */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
              <span className="text-white font-bold text-lg sm:text-2xl">SK</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">
              Shanmukha Kosireddi
            </h3>
            <p className="text-sm text-black/60">
              @shanmukhakosireddi
            </p>
          </div>
          
          {/* Subscribe Button */}
          <a
            href="https://youtube.com/@shanmukhakosireddi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-red-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg relative group min-h-[48px] touch-manipulation"
          >
            {/* Hover background overlay for button */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-red-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="uppercase tracking-wide text-sm sm:text-base">Subscribe</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;