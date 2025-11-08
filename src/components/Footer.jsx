import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 shadow-lg shadow-blue-500/30" aria-hidden="true" />
          <span className="text-base font-semibold tracking-tight">Zhyrx</span>
        </div>
        <p className="text-sm text-neutral-600 text-center md:text-left">© {new Date().getFullYear()} Zhyrx. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;