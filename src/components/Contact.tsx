import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-[#f5f0e6] flex flex-col py-12">
      {/* Main Content */}
      <div className="flex items-center justify-center px-8 lg:px-12 mb-8">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#111] mb-6 leading-none">
            LET'S CONNECT.
          </h1>

          {/* Subtitle */}
          <p className="text-base lg:text-lg text-[#111] mb-12 leading-relaxed max-w-xl mx-auto">
            Whether it's a project, collab, or just a question — I'm one click away.
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-center space-x-4">
              <Mail className="w-6 h-6 text-[#111]" />
              <a
                href="mailto:kosireshanmukha@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-[#111] hover:text-[#111]/70 transition-colors duration-300"
              >
                kosireshanmukha@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-center space-x-4">
              <Linkedin className="w-6 h-6 text-[#111]" />
              <a
                href="https://www.linkedin.com/in/shanmukha-kosireddi-59464329b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-[#111] hover:text-[#111]/70 transition-colors duration-300"
              >
                shanmukha-kosireddi-59464329b
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-center space-x-4">
              <Instagram className="w-6 h-6 text-[#111]" />
              <a
                href="https://instagram.com/shanmukhakosireddi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-[#111] hover:text-[#111]/70 transition-colors duration-300"
              >
                @shanmukhakosireddi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-sm text-[#111]/60">
          © 2025 Kosireddi Productions. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;