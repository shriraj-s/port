import React from 'react';
import ProfilePic from '../assets/picofme (1) copy.png'; // Import your image

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hello, I'm Shriraj
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I’m Shriraj Marella, an aspiring marketing analyst with an engineering brain and a creative heart. I thrive where data meets design and where strategy sparks connection. From running national-level digital campaigns to leading university fests and heading operations across borders, I’ve carved a niche at the intersection of marketing and leadership.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether I’m scaling brand presence for a youth-run NGO, closing sponsorship deals for a cultural fest, or optimizing processes for international collaborations, I bring energy, clarity, and impact. Right now, I’m exploring new ways to turn insights into action and stories into strategy.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Core Marketing & Strategy</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Brand Positioning</li>
                  <li>Cross-channel Promotion</li>
                  <li>Performance Analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2"> Leadership & Management</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Strategic Leadership</li>
                  <li>Stakeholder Management</li>
                  <li>Legal & Contract Operations</li>
                  <li>Event Planning & Execution</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img
                  src={ProfilePic}
                  alt="Shriraj"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;