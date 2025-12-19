import React from 'react';
import { motion } from 'framer-motion';

const BrandSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-12 w-1 bg-primary rounded-full"></div>
              <p className="text-lg text-gray-700 font-medium">
                Your trusted partner for high-purity API Impurities and Custom Synthesis.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Established in <span className="font-semibold text-gray-900">2023 in Pune, Maharashtra</span>, ChemSetu has rapidly evolved into a premier provider of complex chemical solutions. We specialize in bridging the gap between research requirements and industrial-scale manufacturing.
            </p>
            

          </motion.div>

          {/* Right Side - Plain Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-inner"
          >
             <img 
               src="/chemsetu-logo.png" 
               alt="ChemSetu Logo" 
               className="w-64 h-auto md:w-80 object-contain drop-shadow-xl"
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BrandSection;
