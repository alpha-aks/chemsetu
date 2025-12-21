import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  // Generate random particles
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal position %
    y: Math.random() * 100, // Random vertical position %
    size: Math.random() * 30 + 10, // Random size between 10px and 40px
    duration: Math.random() * 20 + 10, // Random duration between 10s and 30s
    delay: Math.random() * 5,
    color: i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-gray-300',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full mix-blend-multiply blur-sm ${particle.color}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -100, 0], // Float up and down
            x: [0, Math.random() * 40 - 20, 0], // Drift horizontally
            opacity: [0.1, 0.3, 0.1], // Pulse opacity
            scale: [1, 1.2, 1], // Pulse size
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
