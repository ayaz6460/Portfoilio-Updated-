
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Liquid Blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-red-100 rounded-full liquid-blob opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full liquid-blob opacity-40"></div>

      <div className="max-w-4xl text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 rounded-full"
        >
          Full-Stack Developer & CS Student
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-[1.1]"
        >
          MOHAMMED <span className="text-red-600">AYAZ</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mb-8 md:mb-10"
        >
          <div className="text-xs md:text-base font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-900 flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-x-4">
            <span>Founder — <span className="text-red-600">Engimos</span></span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>Co-Founder — <span className="text-red-600">Xovaxy</span></span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Building modern web apps with clean UI, smart automation, and real-world functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto relative bg-black text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-red-600 flex items-center justify-center shadow-lg cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              Hire Me <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
          <motion.a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            whileHover={{ x: 5 }}
            className="text-black font-semibold hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600 pb-1 flex items-center cursor-pointer"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
