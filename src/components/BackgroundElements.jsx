import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Hexagon, Dna, FlaskConical, Zap, CircleDot } from 'lucide-react';

const FloatingIcon = ({ Icon, size, initialX, initialY, duration, delay, color }) => {
  return (
    <motion.div
      className={`absolute ${color} opacity-20`}
      initial={{ x: initialX, y: initialY, rotate: 0 }}
      animate={{
        y: [initialY, initialY - 40, initialY],
        x: [initialX, initialX + 20, initialX],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
      {/* Gradient Orbs for "Liquid" feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[100px]" />
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-cyan-100/30 rounded-full blur-[80px]" />

      {/* Floating Chemical Elements */}
      <FloatingIcon 
        Icon={Atom} 
        size={120} 
        initialX="10%" 
        initialY="20%" 
        duration={20} 
        delay={0} 
        color="text-blue-300" 
      />
      <FloatingIcon 
        Icon={Hexagon} 
        size={80} 
        initialX="85%" 
        initialY="15%" 
        duration={25} 
        delay={2} 
        color="text-purple-300" 
      />
      <FloatingIcon 
        Icon={Dna} 
        size={100} 
        initialX="75%" 
        initialY="60%" 
        duration={22} 
        delay={1} 
        color="text-cyan-300" 
      />
      <FloatingIcon 
        Icon={FlaskConical} 
        size={60} 
        initialX="15%" 
        initialY="70%" 
        duration={18} 
        delay={3} 
        color="text-indigo-300" 
      />
      <FloatingIcon 
        Icon={Zap} 
        size={50} 
        initialX="50%" 
        initialY="40%" 
        duration={15} 
        delay={0.5} 
        color="text-yellow-200" 
      />
      <FloatingIcon 
        Icon={CircleDot} 
        size={40} 
        initialX="30%" 
        initialY="85%" 
        duration={28} 
        delay={4} 
        color="text-teal-200" 
      />
      
      {/* Extra small particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/10" />
    </div>
  );
};

export default BackgroundElements;
