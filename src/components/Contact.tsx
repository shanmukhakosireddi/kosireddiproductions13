import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-[#f8f2ea] flex flex-col py-12 sm:py-16 lg:py-20 min-h-screen w-full">
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12 mb-6 sm:mb-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#111] mb-4 sm:mb-6 leading-none">
            LET'S CONNECT.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#111] mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto px-4">
            Whether it's a project, collab, or just a question — I'm one click away.
          </p>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 px-4">
              <Mail className="w-6 h-6 text-[#111]" />
              <a
                href="mailto:kosireshanmukha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base lg:text-lg text-[#111] hover:text-[#111]/70 transition-colors duration-300 break-all sm:break-normal min-h-[48px] flex items-center"
              >
                kosireddishanmukha@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 px-4">
              <Linkedin className="w-6 h-6 text-[#111]" />
              <a
                href="https://www.linkedin.com/in/shanmukha-kosireddi-59464329b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base lg:text-lg text-[#111] hover:text-[#111]/70 transition-colors duration-300 break-all sm:break-normal min-h-[48px] flex items-center"
              >
                shanmukha-kosireddi-59464329b
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 px-4">
              <Instagram className="w-6 h-6 text-[#111]" />
              <a
                href="https://instagram.com/shanmukhakosireddi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base lg:text-lg text-[#111] hover:text-[#111]/70 transition-colors duration-300 min-h-[48px] flex items-center"
              >
                @shanmukhakosireddi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 sm:py-6 text-center px-4">
        <p className="text-xs sm:text-sm text-[#111]/60">
          © 2025 Kosireddi Productions. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;