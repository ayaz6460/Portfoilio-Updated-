
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

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
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-red-100 rounded-full liquid-blob opacity-40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
          rotate: [0, -60, -120, -180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-gray-100 rounded-full liquid-blob opacity-40 blur-3xl"
      />

      <div className="max-w-4xl text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-semibold tracking-widest text-red-600 uppercase bg-red-50 rounded-full"
        >
          Full-Stack & Mobile App Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-4 leading-[1.1]"
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
            <span>
              Founder — <a href="https://enigmos.vercel.app" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Engimos</a>
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span>
              Co-Founder — <a href="https://xovacy.in" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Xovaxy</a>
            </span>
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
          <div className="w-full sm:w-auto flex justify-center">
            <InteractiveHoverButton
              onClick={(e) => scrollToSection(e, 'contact')}
              text="Hire Me"
              className="w-40 h-14 text-lg border-red-600"
            />
          </div>
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
