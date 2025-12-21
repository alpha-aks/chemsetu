import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const DNAStrand = () => {
  const groupRef = useRef();
  
  // Generate DNA structure data
  const dnaData = useMemo(() => {
    const count = 20; // Reduced count for performance
    const radius = 1.5;
    const height = 6; // Adjusted height
    const turns = 2; // Adjusted turns
    const items = [];

    for (let i = 0; i < count; i++) {
      // Calculate position along the helix
      const progress = i / count;
      const angle = progress * Math.PI * 2 * turns;
      const y = (progress * height) - (height / 2);
      
      // Coordinates for Strand A
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      
      // Coordinates for Strand B (180 degrees offset)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      items.push({
        id: i,
        y,
        rotation: -angle, // Rotation for the connecting rung
        strandA: [x1, y, z1],
        strandB: [x2, y, z2],
        colorA: '#60A5FA', // Light Blue
        colorB: '#4ADE80', // Light Green
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // 1. Auto-rotation
      groupRef.current.rotation.y += 0.004;

      // 2. Mouse Interaction (Tilt)
      // state.mouse.x/y are normalized coordinates (-1 to 1)
      const targetRotationX = state.mouse.y * 0.2; // Tilt up/down
      const targetRotationZ = -state.mouse.x * 0.2; // Tilt left/right
      
      // Smoothly interpolate current rotation to target
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotationZ, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {dnaData.map((item) => (
        <React.Fragment key={item.id}>
          {/* Strand A Atom */}
          <mesh position={item.strandA}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial 
              color={item.colorA} 
              roughness={0.2} 
              metalness={0.8} 
            />
          </mesh>

          {/* Strand B Atom */}
          <mesh position={item.strandB}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial 
              color={item.colorB} 
              roughness={0.2} 
              metalness={0.8} 
            />
          </mesh>

          {/* Connecting Rung (Cylinder) */}
          <mesh position={[0, item.y, 0]} rotation={[0, item.rotation, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 3, 6]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.1} metalness={0.5} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};

const DNAHelix = () => {
  return (
    <div className="w-full h-[500px] lg:h-full min-h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }} 
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]} // Reduced max DPR for performance
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#60A5FA" />
        <pointLight position={[10, -5, 5]} intensity={1} color="#4ADE80" />
        
        {/* The DNA Component */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DNAStrand />
        </Float>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default DNAHelix;
