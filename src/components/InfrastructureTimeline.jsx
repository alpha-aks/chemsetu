import React from 'react';
import { motion } from 'framer-motion';

const Icons = {
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  ),
  Flask: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.31" />
      <path d="M14 2v7.31" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
    </svg>
  ),
  Factory: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  )
};

const steps = [
  {
    title: "Literature Search",
    description: "Feasibility analysis & route scouting.",
    Icon: Icons.Search
  },
  {
    title: "Lab Synthesis",
    description: "Process development & optimization.",
    Icon: Icons.Flask
  },
  {
    title: "Scale Up",
    description: "Capacity up to 5KG in-house; execution up to 100kg in plant.",
    Icon: Icons.Factory
  }
];

const InfrastructureTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#2E3192] mb-4">The Science</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our systematic approach from concept to commercialization.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-100 -z-0">
            <motion.div
              className="h-full bg-[#00A651]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-gray-100 -z-0">
            <motion.div
              className="w-full bg-[#00A651]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:items-center md:text-center pl-24 md:pl-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-16 h-16 bg-white border-4 border-[#2E3192] rounded-full flex items-center justify-center text-[#2E3192] shadow-lg z-10 group hover:border-[#00A651] hover:text-[#00A651] transition-colors duration-300">
                  <step.Icon />
                </div>

                <div className="mt-2 md:mt-24 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full">
                  <h3 className="text-xl font-bold text-[#2E3192] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureTimeline;
