import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <Achievements />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;