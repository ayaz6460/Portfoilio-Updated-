
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
          Founder — Engimos | Co-Founder — Xovaxy
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MOHAMMED AYAZ. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
