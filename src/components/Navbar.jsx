import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60" aria-label="Site header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="Zhyrx home">
          <span className="sr-only">Zhyrx</span>
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 shadow-lg shadow-blue-500/30" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-tight">Zhyrx</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-0.5">About</a>
          <a href="#services" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-0.5">Services</a>
          <a href="#cases" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-0.5">Case Studies</a>
          <a href="#testimonials" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-0.5">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-0.5">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-full bg-neutral-900 text-white text-sm px-4 py-2 shadow-lg shadow-black/10 hover:shadow-black/20 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
          Work With Us
        </a>
      </nav>
    </header>
  );
};

export default Navbar;