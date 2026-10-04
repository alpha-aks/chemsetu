import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Environment, ContactShadows, Float } from '@react-three/drei';

const Atom = () => {
  const atomRef = useRef();
  
  useFrame((state, delta) => {
    if (atomRef.current) {
      atomRef.current.rotation.y += delta * 0.05;
      atomRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={atomRef} scale={2.5}>
        <Sphere args={[0.4, 64, 64]} castShadow receiveShadow>
          <meshPhysicalMaterial 
            color="#00A651" 
            emissive="#00A651" 
            emissiveIntensity={0.2} 
            roughness={0.1} 
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        
        <ElectronRing rotation={[1.5, 0, 0]} color="#2E3192" speed={0.8} />
        <ElectronRing rotation={[0, 1.5, 0]} color="#00A651" speed={1.0} />
        <ElectronRing rotation={[0.8, 0.8, 0]} color="#3b82f6" speed={0.7} />
      </group>
    </Float>
  );
};

const ElectronRing = ({ rotation, color, speed }) => {
  const ringRef = useRef();
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * speed;
      ringRef.current.rotation.y += delta * (speed * 0.5);
    }
  });

  return (
    <group rotation={rotation}>
      <Torus ref={ringRef} args={[1.8, 0.04, 32, 100]} castShadow receiveShadow>
        <meshPhysicalMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.5} 
          toneMapped={false}
          roughness={0.2}
          metalness={1}
        />
      </Torus>
      <mesh position={[1.8, 0, 0]} castShadow>
         <sphereGeometry args={[0.12, 32, 32]} />
         <meshStandardMaterial color={color} emissive="white" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const ServicesHeader = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#2E3192 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-0 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-full">
          <div className="w-full h-[300px] md:w-1/2 md:h-[600px] order-1 md:order-1 flex items-center justify-center relative">
             <div className="absolute w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
             
             <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight 
                  position={[10, 10, 10]} 
                  angle={0.15} 
                  penumbra={1} 
                  intensity={1} 
                  castShadow 
                  shadow-mapSize={[1024, 1024]}
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00A651" />
                
                <Atom />
                
                <Environment preset="city" />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
             </Canvas>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-2 z-10">
            <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-2">
              Advanced Capabilities
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Our Scientific <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600 relative">
                Expertise
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-green-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 1.37464 90.6283 -5.12055 125.027 4.57743C158.481 14.008 197.935 3.99996 197.935 3.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Delivering precision, purity, and innovation across the pharmaceutical value chain. From 
              <span className="font-semibold text-blue-700"> lab-scale </span> synthesis to 
              <span className="font-semibold text-green-600"> commercial production</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;