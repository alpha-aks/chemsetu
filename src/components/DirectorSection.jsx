import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DirectorSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { id: 1, label: "Director Photo", bg: "bg-gradient-to-br from-gray-100 to-gray-200" },
    { id: 2, label: "Lab Facility", bg: "bg-blue-50" },
    { id: 3, label: "Research Team", bg: "bg-green-50" },
    { id: 4, label: "Office", bg: "bg-purple-50" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-primary font-bold text-sm tracking-wider uppercase">The Authority</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Mr. Sachin J. Mahangare
            </h2>
            
            <p className="text-xl text-secondary font-semibold">
              Director
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-1 bg-primary rounded-full"></div>
              <p className="text-lg text-gray-700 font-medium">
                19+ Years of Excellence in Pharmaceutical Research
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              With a rich background working with industry giants like <span className="font-semibold text-gray-900">Lupin, Teva, Emcure, and Deepak Nitrite</span>, Mr. Mahangare brings world-class expertise to ChemSetu.
            </p>
            
            <div className="pt-4 border-t border-gray-200 mt-6">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Established</p>
              <p className="text-xl font-bold text-gray-900">2023 in Pune, Maharashtra</p>
            </div>

            <motion.div 
              className="mt-8 p-8 bg-white rounded-xl shadow-xl border-l-4 border-secondary relative"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-4 -left-2 text-6xl text-gray-200 font-serif">"</div>
              <p className="text-xl text-gray-800 italic relative z-10 font-medium">
                We deliver molecules from milligram to kilogram scale with precision.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] w-full max-w-md bg-white group">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentImage}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className={`absolute inset-0 flex items-center justify-center ${images[currentImage].bg}`}
                 >
                    <div className="text-center p-10">
                        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-primary font-bold shadow-inner">
                          {images[currentImage].id}
                        </div>
                        <p className="text-gray-500 font-medium">{images[currentImage].label}</p>
                        <p className="text-xs text-gray-400 mt-2">(Image {currentImage + 1} of {images.length})</p>
                    </div>
                 </motion.div>
               </AnimatePresence>

               <button 
                 onClick={prevImage}
                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-primary shadow-lg transition-all opacity-0 group-hover:opacity-100 z-20"
                 aria-label="Previous image"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                 </svg>
               </button>
               
               <button 
                 onClick={nextImage}
                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-primary shadow-lg transition-all opacity-0 group-hover:opacity-100 z-20"
                 aria-label="Next image"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                 </svg>
               </button>

               <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                 {images.map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => setCurrentImage(idx)}
                     className={`h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                     aria-label={`Go to slide ${idx + 1}`}
                   />
                 ))}
               </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            
            <motion.div 
              className="absolute top-10 -right-4 bg-white p-3 rounded-lg shadow-lg z-20 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="text-secondary font-bold text-xs">API Impurities</div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 -left-4 bg-white p-3 rounded-lg shadow-lg z-20 hidden lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-primary font-bold text-xs">Custom Synthesis</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
