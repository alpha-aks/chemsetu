import React from 'react';
import { motion } from 'framer-motion';

const ShieldMoleculeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-32 h-32 text-[#2E3192]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="stroke-[#2E3192]" />
    <g className="stroke-[#00A651]">
      <circle cx="12" cy="12" r="2" fill="currentColor" className="text-[#00A651] opacity-20" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="15.5" cy="14" r="1" />
      <circle cx="8.5" cy="14" r="1" />
      
      <path d="M12 9v2" />
      <path d="M12 12l2.5 1.5" />
      <path d="M12 12l-2.5 1.5" />
    </g>
  </svg>
);

const TrustSection = () => {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="flex flex-col items-center justify-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-8 p-6 bg-white rounded-full shadow-lg border border-blue-100"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ShieldMoleculeIcon />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192] mb-6">
            Uncompromising Confidentiality
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            "We strictly follow guidelines about confidentiality."
          </p>
          
          <div className="mt-8 w-16 h-1 bg-[#00A651] rounded-full mx-auto" />
          
          <p className="mt-6 text-sm text-gray-500 max-w-lg">
            Your intellectual property is protected by our rigorous security protocols and non-disclosure agreements, ensuring your innovations remain exclusively yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
