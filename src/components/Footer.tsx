import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
            >
              Shriraj Marella
            </button>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              An aspiring marketing analyst blending engineering precision with creative vision. Passionate about building meaningful brands, enabling impact through strategy, and always learning along the way.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shrirajmarella/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/shrirajjjjj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/shrirxjj18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Work', id: 'case-studies' },
                { label: 'Experience', id: 'experience' },
                { label: 'Achievements', id: 'achievements' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:shrirajmarella18@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="mr-3" />
                shrirajmarella18@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3" />
                Visakhapatnam, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Shriraj Marella. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
