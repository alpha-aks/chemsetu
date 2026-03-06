import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, FlaskConical, Settings, Microscope, Box, GraduationCap, Search, Factory } from 'lucide-react';
import ServicesHeader from './ServicesHeader';
import SEO from './SEO';

const services = [
  {
    title: 'API Impurities & Intermediates',
    description: 'Focus on difficult-to-synthesize molecules and complex impurity standards.',
    icon: Beaker,
    image: {
      src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
      alt: 'API impurities and intermediates',
    },
  },
  {
    title: 'Custom Synthesis',
    description: 'From mg to 5kg scale. Specializing in NCEs and novel scaffolds.',
    icon: FlaskConical,
    image: {
      src: 'https://images.prismic.io/chemsetu/aaseHlxvIZEnjbeF_Screenshot2026-03-07at12.03.02AM.png?auto=format,compress',
      alt: 'Custom synthesis chemistry lab',
    },
  },
  {
    title: 'Process Development',
    description: 'Cost reduction strategies & seamless Technology Transfer to manufacturing.',
    icon: Settings,
    image: {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      alt: 'Process development and lab optimization',
    },
  },
  {
    title: 'Analytical Solutions',
    description: 'Isolation & Structural Elucidation of unknown impurities and degradation products.',
    icon: Microscope,
    image: {
      src: 'https://images.prismic.io/chemsetu/aase51xvIZEnjbeV_Screenshot2026-03-07at12.06.09AM.png?auto=format,compress',
      alt: 'Analytical solutions and instrumentation',
    },
  },
  {
    title: 'Complex Reactions',
    description: 'Expertise in Cryogenic, High Pressure, and Chiral reaction chemistries.',
    icon: Box,
    image: {
      src: 'https://images.prismic.io/chemsetu/aasfblxvIZEnjbec_Screenshot2026-03-07at12.09.05AM.png?auto=format,compress',
      alt: 'Complex chemical reactions and lab equipment',
    },
  },
  {
    title: 'Industrial Training',
    description: 'Bridging academic knowledge with practical industrial application.',
    icon: GraduationCap,
    image: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      alt: 'Industrial training and collaboration',
    },
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    {/* Image Header */}
    <div className="relative h-44 w-full overflow-hidden">
      <img
        src={service.image?.src}
        alt={service.image?.alt || service.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />
    </div>

    {/* Floating Icon Circle */}
    <div className="relative flex justify-center">
      <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-white dark:border-slate-950 bg-white dark:bg-slate-950 shadow-lg text-primary transition-transform duration-300 group-hover:scale-110">
        {service.icon ? React.createElement(service.icon, { size: 28 }) : null}
      </div>
    </div>

    {/* Text Body */}
    <div className="flex flex-1 flex-col items-center p-8 pt-12 text-center">
      <h3 className="mb-3 text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors group-hover:text-secondary">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {service.description}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">From Concept to Commercialization</h2>
            <p className="text-slate-600">Our streamlined process ensures rapid turnaround times.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-secondary/50 to-blue-200 -translate-y-1/2 z-0"></div>

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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-secondary flex items-center justify-center shadow-lg mb-6 relative">
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-sm text-slate-900 shadow-md border border-slate-100">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{step.title}</h3>
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