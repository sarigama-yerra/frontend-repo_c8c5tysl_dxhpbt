import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        {/* Trusted by Leading Brands with updated clean logos */}
        <Logos />
        <Sections.About />
        <Sections.Services />
        <Sections.CaseStudies />
        <Sections.Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
