import React from 'react';
import { ArrowDown, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-orange-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Aspiring
            <span className="text-blue-700 block">Marketing</span>
            <span className="text-orange-600">Professional</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            An emerging marketer passionate about turning ideas into impact and campaigns into conversations.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/shrirajmarella/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/shrirxjj18/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Instagram size={24} className="text-pink-500" />
            </a>
            <a
              href="mailto:shrirajmarella18@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Mail size={24} className="text-orange-600" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <ArrowDown size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
