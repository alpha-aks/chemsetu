import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, FlaskConical, ArrowRight } from 'lucide-react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Environment, ContactShadows, Float } from '@react-three/drei';
import SEO from './SEO';

// --- 3D Atom Component (Reused) ---
const Atom = () => {
  const atomRef = useRef();
  
  // Rotate the entire atom group slowly
  useFrame((state, delta) => {
    if (atomRef.current) {
      atomRef.current.rotation.y += delta * 0.05;
      atomRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={atomRef} scale={2.2}>
        {/* Core Nucleus (Green & Blue mix) */}
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
        
        {/* Electron Rings (Rotating Torus shapes) */}
        <ElectronRing rotation={[1.5, 0, 0]} color="#2E3192" speed={0.8} />
        <ElectronRing rotation={[0, 1.5, 0]} color="#00A651" speed={1.0} />
        <ElectronRing rotation={[0.8, 0.8, 0]} color="#3b82f6" speed={0.7} />
      </group>
    </Float>
  );
};

// Individual Electron Ring Helper
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
      {/* Small Electron Sphere on the ring */}
      <mesh position={[1.8, 0, 0]} castShadow>
         <sphereGeometry args={[0.12, 32, 32]} />
         <meshStandardMaterial color={color} emissive="white" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const Compounds = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('compound');
  const loading = state === 'loading';

  return (
    <section id="compounds" className="bg-slate-50 py-12 md:py-20 px-4 min-h-screen overflow-hidden">
      <SEO 
        title="Compounds Catalog" 
        description="Browse our extensive catalog of high-quality chemical compounds, API impurities, and intermediates available for research and development."
        url="/compounds"
      />
      
      {/* Header Section with 3D Atom */}
      <div className="relative w-full h-auto md:h-[85vh] mb-12 md:mb-0 flex items-center overflow-hidden bg-slate-50">
        
        {/* 3D Atom Animation - Full Screen Background on Desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
             <Canvas shadows camera={{ position: [0, 0, 9], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight 
                  position={[10, 10, 10]} 
                  angle={0.15} 
                  penumbra={1} 
                  intensity={1} 
                  castShadow 
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00A651" />
                
                {/* Position atom to the right */}
                <group position={[4, 0, 0]}>
                  <Atom />
                </group>
                
                <Environment preset="city" />
                <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
             </Canvas>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 relative z-10 pointer-events-none">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Left Side: Text & Search */}
                <div className="w-full md:w-1/2 text-left pointer-events-auto pt-12 md:pt-0">
                    <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Molecular Library <br/> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">Capabilities</span>
                    </h2>
                    <p className="text-base md:text-xl text-slate-600 max-w-xl mb-8">
                    From complex API intermediates to difficult-to-synthesize impurities. Explore our catalog of high-purity compounds.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-lg">
                        <input 
                            type="text" 
                            placeholder="Search by CAS No., Name..." 
                            className="w-full pl-12 pr-4 py-3 md:py-4 rounded-full border border-slate-200 shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/90 backdrop-blur-sm text-sm md:text-base"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    </div>
                </div>

                {/* Spacer for the right side where the atom is */}
                <div className="hidden md:block w-full md:w-1/2"></div>
            </div>
        </div>
      </div>

      {/* The Product Grid */}
      {loading ? (
        <div className="text-center py-20">Loading library...</div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {documents && documents.map((doc) => (
            <Link to={`/compounds/${doc.uid}`} key={doc.id} className="block">
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer hover:-translate-y-1 flex flex-col h-full">
                
                {/* Image or Icon & Category Tag */}
                {doc.data.image && doc.data.image.url ? (
                  <div className="mb-6">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                      <img src={doc.data.image.url} alt={doc.data.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                        {doc.data.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-blue-50 transition-colors">
                      <FlaskConical className="text-blue-600 w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                      {doc.data.category}
                    </span>
                  </div>
                )}

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {doc.data.name}
                </h3>
                <div className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  <PrismicRichText field={doc.data.description} />
                </div>

                {/* Footer: Scale & Arrow */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                  <div className="text-xs font-semibold text-slate-400">
                    Capacity: <span className="text-slate-700">{doc.data.scale}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

    </section>
  );
};

export default Compounds;
