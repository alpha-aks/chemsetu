import React from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      initial="initial"
      animate="initial"
      exit="exit"
    >
      <div className="absolute inset-0 flex z-0">
        {/* Left half */}
        <motion.div
          className="relative w-1/2 h-full bg-white"
          variants={{
            initial: { x: 0 },
            exit: { x: '-100%' },
          }}
          transition={transition}
        />

        {/* Right half */}
        <motion.div
          className="relative w-1/2 h-full bg-slate-50"
          variants={{
            initial: { x: 0 },
            exit: { x: '100%' },
          }}
          transition={transition}
        />
      </div>

      {/* Logo: centered on screen, glowing while loading */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        variants={{
          initial: { x: 0, opacity: 1, scale: 1 },
          exit: { x: '-120vw', opacity: 0, scale: 0.95 },
        }}
        transition={transition}
      >
        <motion.div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center p-4"
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              '0 0 0px rgba(46,49,146,0.0), 0 0 0px rgba(0,166,81,0.0)',
              '0 0 22px rgba(46,49,146,0.22), 0 0 28px rgba(0,166,81,0.18)',
              '0 0 0px rgba(46,49,146,0.0), 0 0 0px rgba(0,166,81,0.0)'
            ],
          }}
          transition={{ duration: 1.1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        >
          <img
            src="/chemsetu-logo.png"
            alt="ChemSetu"
            className="w-full h-full object-contain -translate-x-px -translate-y-px"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
