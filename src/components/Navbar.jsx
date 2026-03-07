import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    // Default to light mode unless the user explicitly chose a theme before.
    const shouldBeDark = stored ? stored === 'dark' : false;

    document.documentElement.classList.toggle('dark', shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white dark:bg-slate-950 shadow-md py-1 md:py-2 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/chemsetu-logo.png" alt="Chemsetu Logo" className="h-10 md:h-16 w-auto" />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'About Us', 'Compounds', 'Contact'].map((item) => {
              const isPage = ['Compounds', 'Contact', 'About Us', 'Services'].includes(item);
              let path = '/';
              if (item === 'Compounds') path = '/compounds';
              else if (item === 'Contact') path = '/contact';
              else if (item === 'About Us') path = '/about';
              else if (item === 'Services') path = '/services';
              
              return isPage ? (
                <Link
                  key={item}
                  to={path}
                  className="text-gray-700 dark:text-slate-200 hover:text-primary transition-colors duration-300 text-sm font-bold"
                >
                  {item}
                </Link>
              ) : (
                <motion.a
                  key={item}
                  href={`/#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 dark:text-slate-200 hover:text-primary transition-colors duration-300 text-sm font-bold"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              );
            })}

            {/* Dark mode toggle */}
            <motion.button
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button 
              className="ml-4 px-6 py-2 rounded-full bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile menu button with Atom Animation */}
          <button 
            className="md:hidden relative w-10 h-10 overflow-hidden focus:outline-none z-50" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Nucleus */}
              <motion.div 
                className="absolute w-2 h-2 bg-secondary rounded-full"
                initial={false}
                animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Line 1 - Top to Orbit 1 */}
              <motion.span
                className="absolute w-6 h-0.5 bg-primary rounded-full origin-center"
                initial={false}
                animate={isOpen ? { y: 0, rotate: 60 } : { y: -8, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Line 2 - Middle to Orbit 2 */}
              <motion.span
                className="absolute w-6 h-0.5 bg-primary rounded-full origin-center"
                initial={false}
                animate={isOpen ? { y: 0, rotate: -60 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Line 3 - Bottom to Orbit 3 */}
              <motion.span
                className="absolute w-6 h-0.5 bg-primary rounded-full origin-center"
                initial={false}
                animate={isOpen ? { y: 0, rotate: 0 } : { y: 8, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Spinning Effect Container */}
              {isOpen && (
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col items-center space-y-8">
              {['Services', 'About Us', 'Compounds', 'Contact'].map((item, index) => {
                const isPage = ['Compounds', 'Contact', 'About Us', 'Services'].includes(item);
                let path = '/';
                if (item === 'Compounds') path = '/compounds';
                else if (item === 'Contact') path = '/contact';
                else if (item === 'About Us') path = '/about';
                else if (item === 'Services') path = '/services';

                return isPage ? (
                  <Link
                    key={item}
                    to={path}
                    className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ) : (
                  <motion.a
                    key={item}
                    href={`/#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                );
              })}

              {/* Dark mode toggle (mobile) */}
              <motion.button
                type="button"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={toggleTheme}
                className="p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button 
                className="px-8 py-3 rounded-full bg-secondary text-white font-bold text-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
