import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      id: 'basic',
      title: 'Basic Package',
      price: '₹269',
      color: 'emerald',
      features: [
        'Shooting',
        'Lighting',
        'Color Grading',
        '1 Video (1–10 mins)'
      ],
      subtext: '⏱ Fast & Simple Delivery',
      idealFor: '👤 Ideal for: Students, Solo Creators',
      accentColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'standard',
      title: 'Standard Package',
      price: '₹399',
      color: 'blue',
      features: [
        'Shooting',
        'Lighting',
        'Color Grading',
        'Bluetooth Mic',
        'Editing Included',
        '1 Video (1–10 mins)',
        '2 Revisions'
      ],
      subtext: '🎯 Ideal for: Reels, YouTube Shorts, Promo Videos',
      idealFor: '',
      accentColor: 'bg-blue-100 text-blue-800',
      popular: true
    },
    {
      id: 'premium',
      title: 'Premium Package',
      price: '₹699',
      color: 'purple',
      features: [
        'Shooting',
        'Lighting',
        'Color Grading',
        'Bluetooth Mic',
        'Full Editing',
        '1 Video (1–30 mins)',
        '4 Revisions'
      ],
      subtext: '🎬 Ideal for: Vlogs, Interviews, Client Work',
      idealFor: '',
      accentColor: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section className="bg-[#f8f2ea] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 min-h-screen w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-black uppercase">
            SERVICES
          </h1>
          <h2 className="text-base sm:text-lg lg:text-xl font-medium text-black mb-2 sm:mb-3 max-w-4xl mx-auto px-4">
            Helping Creators Bring Ideas to Life — At Any Budget.
          </h2>
          <p className="text-sm lg:text-base text-black/80 max-w-3xl mx-auto leading-relaxed px-4">
            Whether you're a student, startup, or storyteller, there's a package designed to meet your creative vision.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="relative bg-[#f8f2ea] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-black/5 touch-manipulation"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-[#fdf6ee] px-3 sm:px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Title */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                  {pkg.title}
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">
                  {pkg.price}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#fdf6ee]" />
                    </div>
                    <span className="text-sm sm:text-base text-black font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtext */}
              <div className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                <p className="text-sm text-black/80 font-medium">
                  {pkg.subtext}
                </p>
                {pkg.idealFor && (
                  <p className="text-sm text-black/70">
                    {pkg.idealFor}
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-black text-[#f8f2ea] font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-black/90 hover:scale-105 active:scale-95 uppercase tracking-wide text-sm min-h-[48px] touch-manipulation">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm sm:text-base text-black/80 mb-4 max-w-2xl mx-auto px-4">
            Need something custom? Let's discuss your specific requirements and create a package that perfectly fits your vision.
          </p>
          <button className="bg-black text-[#f8f2ea] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 uppercase tracking-wide text-sm sm:text-base min-h-[48px] touch-manipulation">
            Contact for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;