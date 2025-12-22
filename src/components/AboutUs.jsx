import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Microscope, Globe, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import SEO from './SEO';

// --- Updated Mock Data for Team with new fields ---
const teamMembers = [
  {
    name: "Mr. Sachin J. Mahangare",
    role: "Director & Founder",
    education: "M.Sc. (Organic Chemistry) from Fergusson College, Pune University (2003)",
    experience: "19+ Years in Research & Industry",
    companies: "Lupin, Nycomed, Teva, Emcure, Deepak Nitrite",
    expertise: "Synthetic Strategies, Process Development, Technology Transfer, Polypeptides",
    achievements: "He has several patents and research articles to his credit."
  },
  {
    name: "Mrs. Rupali Mahangare",
    role: "Director",
    education: "M.Sc. (Organic Chemistry) from Pune University",
    experience: "10+ Years in Research & Industry",
    companies: "Glenmark Pharmaceuticals, Getz Pharma, Emcure Pharma Ltd",
    expertise: "Synthetic Strategies, Documentation, Patent Filing",
    achievements: "Actively involved in patent documentation and filing."
  }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

// --- New Team Member Profile Component ---
const TeamMemberProfile = ({ member }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-col items-start gap-8 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100"
    >
      {/* Content Section */}
      <div className="w-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">{member.name}</h3>
          <p className="text-[#00A651] font-bold text-lg">{member.role}</p>
        </div>

        <div className="space-y-5">
            <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Education</h4>
                <p className="text-slate-800 font-medium text-lg">{member.education}</p>
            </div>
            
            <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Experience</h4>
                <p className="text-slate-800 font-medium text-lg">{member.experience}</p>
                <p className="text-slate-500 text-sm mt-1">Previously at: {member.companies}</p>
            </div>

            <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Core Expertise</h4>
                <p className="text-slate-800 font-medium text-lg">{member.expertise}</p>
            </div>
             
             {member.achievements && (
                <div className="pt-5 border-t border-slate-100 mt-2">
                    <div className="flex gap-3">
                        <Quote className="text-[#00A651] w-6 h-6 flex-shrink-0 rotate-180" />
                        <p className="text-slate-600 italic font-medium">{member.achievements}</p>
                    </div>
                </div>
             )}
        </div>
      </div>
    </motion.div>
  );
};


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <SEO 
        title="About Us" 
        description="Learn about ChemSetu's mission, vision, and our expert team led by Mr. Sachin J. Mahangare. We bridge the gap between scientific innovation and industrial scale synthesis."
        url="/about"
      />
      
      {/* --- 1. Hero Section --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a192f] text-white">
        {/* Abstract DNA Background Effect */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            The Chemistry of <span className="text-green-400">Trust</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          >
            Bridging the gap between scientific innovation and industrial scale synthesis since 2023.
          </motion.p>
        </div>
      </section>

      {/* --- 2. Our Mission & Vision --- */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-[#00A651] rounded-full"></span>
              <span className="uppercase tracking-widest text-sm font-bold text-[#00A651]">Who We Are</span>
            </div>
            <h2 className="text-4xl font-bold text-[#0a192f] mb-6">
              Accelerating Research, <br/> Delivering Precision.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Chemsetu Lifesciences, we don't just synthesize molecules; we synthesize solutions. Founded in Pune, the hub of chemical innovation, we serve as the critical bridge for pharmaceutical giants like Lupin, Teva, and Emcure.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to streamline the complex journey from <strong>literature search to 5KG plant execution</strong>, ensuring your IP remains secure and your timelines are met.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 h-[500px] w-full group">
               <img src="/lab-infra.png" alt="Lab Infrastructure" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a192f] to-transparent p-8">
                 <p className="text-white font-medium">State-of-the-art Infrastructure in Pune, MH</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. The Team (Redesigned based on "Director's Edge") --- */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Meet The Minds</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Led by industry veteran Mr. Sachin J. Mahangare, our team combines decades of experience in API impurities, tech transfer, and cryogenic reactions.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberProfile key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. Values / Why Us --- */}
      <section className="py-20 px-6 container mx-auto">
        <div className="bg-[#0a192f] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
           <Microscope className="absolute top-10 right-10 w-64 h-64 text-white opacity-5 rotate-12" />

           <div className="grid md:grid-cols-2 gap-12 relative z-10">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Pharma Leaders Trust Chemsetu</h2>
               <p className="text-slate-300 mb-8 text-lg">
                 We strictly follow guidelines regarding confidentiality. Your IP is our priority, secured by rigorous processes and agreements.
               </p>
               <Link to="/compounds" className="bg-[#00A651] hover:bg-[#008f45] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 inline-flex w-fit">
                 View Capabilities <ArrowRight size={18} />
               </Link>
             </div>

             <div className="grid gap-6">
                {[
                  { title: "Rapid Turnaround", desc: "Fastest literature search to lab synthesis timelines." },
                  { title: "Complex Reactions", desc: "Expertise in Cryogenic, Chiral, and High-purity isolation." },
                  { title: "Tech Transfer", desc: "Seamless process development for industrial scaling." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                    <div className="p-2 bg-[#00A651] rounded-lg mt-1">
                      <ChevronRight size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;