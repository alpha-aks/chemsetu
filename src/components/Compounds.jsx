import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, FlaskConical, ArrowRight } from 'lucide-react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';
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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = useMemo(() => {
    if (!documents) return [];

    const query = searchQuery.trim().toLowerCase();
    if (!query) return documents;

    const normalize = (value) => (typeof value === 'string' ? value.trim().toLowerCase() : '');

    return documents.filter((doc) => {
      const name = normalize(doc?.data?.name);
      const casId = normalize(doc?.data?.cas_id);
      const productCode = normalize(doc?.data?.product_code);

      return (
        (casId && casId.includes(query)) ||
        (productCode && productCode.includes(query)) ||
        (name && name.includes(query))
      );
    });
  }, [documents, searchQuery]);

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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* The Compounds Table */}
      {loading ? (
        <div className="text-center py-20">Loading library...</div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-20 text-slate-600">
              No compounds found for "{searchQuery.trim()}".
            </div>
          ) : null}

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full text-left">
                <thead className="bg-slate-50">
                  <tr className="text-xs font-bold tracking-wider uppercase text-slate-500">
                    <th className="px-4 py-4 w-[80px]">Sr No</th>
                    <th className="px-4 py-4 w-[110px]">Photo</th>
                    <th className="px-4 py-4">Product Name</th>
                    <th className="px-4 py-4 w-[200px]">CAS No</th>
                    <th className="px-4 py-4 w-[160px]">Structure</th>
                    <th className="px-4 py-4 w-[140px]">View</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredDocuments.map((doc, index) => {
                    const photoUrl = doc?.data?.image?.url;
                    const name = doc?.data?.name || doc?.uid || 'Compound';
                    const casId = doc?.data?.cas_id || '—';
                    const formula = doc?.data?.formula;
                    const routeId = doc?.uid || doc?.id;
                    const canView = typeof routeId === 'string' && routeId.length > 0;

                    return (
                      <tr key={doc.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-4 py-4 text-sm font-semibold text-slate-700">{index + 1}</td>

                        <td className="px-4 py-4">
                          {photoUrl ? (
                            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
                              <img src={photoUrl} alt={name} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                              <FlaskConical className="w-6 h-6 text-blue-600" />
                            </div>
                          )}
                        </td>

                        <td className="px-4 py-4">
                          <div className="text-sm md:text-base font-bold text-slate-900">{name}</div>
                          {doc?.data?.product_code ? (
                            <div className="text-xs text-slate-500 mt-1">Product Code: {doc.data.product_code}</div>
                          ) : null}
                        </td>

                        <td className="px-4 py-4 text-sm font-semibold text-slate-700">{casId}</td>

                        <td className="px-4 py-4">
                          {photoUrl ? (
                            <div className="w-28 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden">
                              <img src={photoUrl} alt={`${name} structure`} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="text-xs text-slate-500">{formula || '—'}</div>
                          )}
                        </td>

                        <td className="px-4 py-4">
                          {canView ? (
                            <Link
                              to={`/compounds/${routeId}`}
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-secondary text-white text-sm font-bold hover:bg-secondary/90 transition-colors"
                              aria-label={`View more details for ${name}`}
                            >
                              View More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          ) : (
                            <span className="text-sm text-slate-400">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Compounds;
