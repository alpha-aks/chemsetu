import React from 'react';
import { motion } from 'framer-motion';

const Icons = {
  Flask: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v7.31" />
      <path d="M14 2v7.31" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
    </svg>
  ),
  Molecule: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="9" x2="12" y2="3" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="14.6" y1="10.5" x2="19.8" y2="7.5" />
      <line x1="9.4" y1="13.5" x2="4.2" y2="16.5" />
      <line x1="14.6" y1="13.5" x2="19.8" y2="16.5" />
      <line x1="9.4" y1="10.5" x2="4.2" y2="7.5" />
      <circle cx="12" cy="3" r="2" />
      <circle cx="12" cy="21" r="2" />
      <circle cx="20" cy="7" r="2" />
      <circle cx="4" cy="17" r="2" />
      <circle cx="20" cy="17" r="2" />
      <circle cx="4" cy="7" r="2" />
    </svg>
  ),
  Gears: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  ),
  Microscope: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  ),
  Atom: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
};

const services = [
  {
    title: "API Impurities & Intermediates",
    description: "Focus on difficult-to-synthesize molecules and complex impurity standards.",
    Icon: Icons.Flask,
    image: {
      src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
      alt: 'API impurities and intermediates',
    }
  },
  {
    title: "Custom Synthesis",
    description: "From mg to 5kg scale. Specializing in NCEs and novel scaffolds.",
    Icon: Icons.Molecule,
    image: {
      src: 'https://images.prismic.io/chemsetu/aaseHlxvIZEnjbeF_Screenshot2026-03-07at12.03.02AM.png?auto=format,compress',
      alt: 'Custom synthesis chemistry lab',
    }
  },
  {
    title: "Process Development",
    description: "Cost reduction strategies & seamless Technology Transfer to manufacturing.",
    Icon: Icons.Gears,
    image: {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      alt: 'Process development and lab optimization',
    }
  },
  {
    title: "Analytical Solutions",
    description: "Isolation & Structural Elucidation of unknown impurities and degradation products.",
    Icon: Icons.Microscope,
    image: {
      src: 'https://images.prismic.io/chemsetu/aase51xvIZEnjbeV_Screenshot2026-03-07at12.06.09AM.png?auto=format,compress',
      alt: 'Analytical solutions and instrumentation',
    }
  },
  {
    title: "Complex Reactions",
    description: "Expertise in Cryogenic, High Pressure, and Chiral reaction chemistries.",
    Icon: Icons.Atom,
    image: {
      src: 'https://images.prismic.io/chemsetu/aasfblxvIZEnjbec_Screenshot2026-03-07at12.09.05AM.png?auto=format,compress',
      alt: 'Complex chemical reactions and lab equipment',
    }
  },
  {
    title: "Industrial Training",
    description: "Bridging academic knowledge with practical industrial application.",
    Icon: Icons.GraduationCap,
    image: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      alt: 'Industrial training and collaboration',
    }
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Core Capabilities</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Delivering specialized chemical solutions with precision and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              transition={{ type: "spring", stiffness: 300 }}
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
                  <service.Icon />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
