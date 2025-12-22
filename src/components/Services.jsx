import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Settings, Atom, Microscope, Factory, GraduationCap, Search, ArrowRight, Database } from 'lucide-react';
import ServicesHeader from './ServicesHeader';
import SEO from './SEO';

const services = [
  {
    title: "API Intermediates",
    description: "High-purity intermediates for pharmaceutical synthesis, ensuring seamless integration into your production line.",
    icon: <Database className="w-10 h-10 text-blue-600" />,
    color: "blue"
  },
  {
    title: "Process Development",
    description: "Optimization of synthetic routes for scalability, safety, and cost-efficiency from lab to pilot scale.",
    icon: <Settings className="w-10 h-10 text-green-600" />,
    color: "green"
  },
  {
    title: "Custom Synthesis",
    description: "Tailored synthesis of complex molecules, impurities, and metabolites from milligrams to kilograms.",
    icon: <FlaskConical className="w-10 h-10 text-blue-600" />,
    color: "blue"
  },
  {
    title: "Analytical Solutions",
    description: "Comprehensive characterization using HPLC, GC, NMR, and LC-MS to ensure the highest quality standards.",
    icon: <Microscope className="w-10 h-10 text-green-600" />,
    color: "green"
  },
  {
    title: "Impurity Synthesis",
    description: "Identification, isolation, and synthesis of API impurities to support regulatory filings and quality control.",
    icon: <Atom className="w-10 h-10 text-blue-600" />,
    color: "blue"
  },
  {
    title: "Industrial Training",
    description: "Bridging the academic-industry gap with hands-on training in advanced organic synthesis and analysis.",
    icon: <GraduationCap className="w-10 h-10 text-green-600" />,
    color: "green"
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#00A651] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
  >
    <div className={`mb-6 p-4 rounded-xl inline-block ${service.color === 'blue' ? 'bg-blue-50' : 'bg-green-50'} group-hover:scale-110 transition-transform duration-300`}>
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#00A651] transition-colors">
      {service.title}
    </h3>
    <p className="text-slate-600 leading-relaxed">
      {service.description}
    </p>
  </motion.div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="Our Services" 
        description="Explore our comprehensive chemical services including API Intermediates, Process Development, Custom Synthesis, and Impurity Standards."
        url="/services"
      />
      {/* Header Section */}
      <ServicesHeader />

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Scale-Up Flow */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-4">From Concept to Commercialization</h2>
            <p className="text-slate-600">Our streamlined process ensures rapid turnaround times.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-[#00A651]/50 to-blue-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { title: "Literature Search", icon: <Search className="w-8 h-8 text-white" />, desc: "Comprehensive IP & route scouting" },
                { title: "Lab Synthesis", icon: <FlaskConical className="w-8 h-8 text-white" />, desc: "Process optimization & validation" },
                { title: "Scale Up to 5KG", icon: <Factory className="w-8 h-8 text-white" />, desc: "Pilot scale manufacturing" }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg md:shadow-none md:bg-transparent"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-[#00A651] flex items-center justify-center shadow-lg mb-6 relative">
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-sm text-[#0a192f] shadow-md border border-slate-100">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;