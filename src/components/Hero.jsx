import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-neutral-950/60 dark:via-neutral-950/70 dark:to-neutral-950/95" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Creative Strategy. Real Results.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
            Zhyrx is a full-stack ad agency helping brands scale through strategy, media, and performance.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full bg-neutral-900 text-white text-sm px-5 py-2.5 shadow-lg shadow-black/10 hover:shadow-black/20 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              Work With Us
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full border border-neutral-300 bg-white text-neutral-900 text-sm px-5 py-2.5 shadow-sm hover:bg-neutral-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;