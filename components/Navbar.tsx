
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'auto';
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'auto';
  };

  // Hamburger menu variants for animation
  const topVariants = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: 45, translateY: 6 },
  };
  const middleVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    opened: { rotate: -45, translateY: -6 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen
        ? 'py-3 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter cursor-pointer"
        >
          AYAZ<span className="text-red-600">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Work with me 
          </motion.a>
        </div>

        {/* Mobile Toggle with Animation */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[110] relative"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <motion.span
            variants={topVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            className="w-6 h-0.5 bg-black rounded-full"
          />
          <motion.span
            variants={middleVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            className="w-6 h-0.5 bg-black rounded-full"
          />
          <motion.span
            variants={bottomVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            className="w-6 h-0.5 bg-black rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 md:hidden bg-white z-[105] flex flex-col pt-24 px-8 space-y-8 h-screen w-screen overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-3xl font-bold text-gray-900 hover:text-red-600 transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-red-600 text-white px-5 py-4 rounded-2xl text-center font-bold text-xl shadow-lg hover:bg-black transition-colors cursor-pointer"
            >
              Work with me 
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
