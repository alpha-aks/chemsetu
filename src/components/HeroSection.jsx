import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DNAHelix from './DNAHelix';
import FloatingParticles from './FloatingParticles';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-white">
      <FloatingParticles />
      <div className="container mx-auto px-4 relative z-10 h-full pt-20 lg:pt-0">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0 lg:gap-12 h-full justify-between lg:justify-center pb-10 lg:pb-0">
          {/* Left side - Text content (50% on mobile) */}
          <motion.div 
            className="w-full lg:w-[90%] text-left h-auto lg:h-full flex flex-col justify-center relative z-10 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              BRIDGING
              <br />
              SCIENCE AND SYNTHESIS.
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-xl text-gray-600 mb-6 lg:mb-10 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your trusted partner for high-purity API Impurities, advanced Intermediates, and complex Custom Synthesis solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-row gap-3 w-full lg:w-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/services" className="flex-1 lg:flex-none">
                <motion.div
                  className="w-full px-2 py-3 lg:px-8 lg:py-4 rounded-full bg-secondary text-white font-semibold text-xs lg:text-base text-center hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Services
                </motion.div>
              </Link>
              
              <Link to="/contact" className="flex-1 lg:flex-none">
                <motion.div
                  className="w-full px-2 py-3 lg:px-8 lg:py-4 rounded-full border-2 border-primary text-primary font-semibold text-xs lg:text-base text-center hover:bg-primary/10 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a Consultation
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image (50% on mobile) */}
          <motion.div 
            className="relative h-[50vh] lg:h-full w-full flex items-center justify-center z-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <DNAHelix />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
