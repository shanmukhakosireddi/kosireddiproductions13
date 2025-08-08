import React from 'react';

const About = () => {
  return (
    <section className="bg-[#f5f0e6] flex items-center py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/api/placeholder/400/500"
                alt="Shanmukha Kosireddi"
                className="w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Optional overlay for cinematic effect */}
              <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 lg:pl-8">
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#111] leading-none">
                SHANMUKHA
              </h1>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#111] leading-none">
                KOSIREDDI
              </h1>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-[#111] max-w-xl">
              <p className="text-lg lg:text-xl leading-relaxed">
                I'm Shanmukha Kosireddi — a content creator, video editor, and filmmaker based in Hyderabad.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed">
                Since 2022, I've been telling stories through the lens — blending humor, motivation, and real emotions that speak to students and young audiences.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed">
                My journey started with a curious mind and a camera… and turned into a mission to turn raw ideas into cinematic content that <em className="font-semibold">feels real</em>. From directing short films to editing viral reels — I've done it all, and I'm just getting started.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed font-medium">
                I believe every creator has a story worth telling — and I'm here to help you tell yours with clarity, creativity, and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;