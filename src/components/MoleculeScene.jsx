import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function MoleculeScene() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef(0);
  const targetRotationX = useRef(0);
  const currentRotation = useRef(0);
  const currentRotationX = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.6);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ffaa, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00aaff, 1, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const group = new THREE.Group();
    
    const radius = 1.5;
    const tubularSegments = 200;
    const q = 3;

    for (let i = 0; i < tubularSegments; i++) {
      const t = (i / tubularSegments) * Math.PI * 2 * 10;
      
      const x = radius * Math.cos(q * t);
      const y = radius * Math.sin(q * t);
      const z = (i / 10) - 10;
      
      const sphereGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const sphereMaterial = new THREE.MeshPhongMaterial({ 
        color: i % 2 === 0 ? 0x00ffaa : 0x00aaff,
        emissive: i % 2 === 0 ? 0x00aa77 : 0x0066aa,
        emissiveIntensity: 0.5,
        shininess: 100
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, y, z);
      group.add(sphere);
      
      if (i > 0) {
        const prevT = ((i - 1) / tubularSegments) * Math.PI * 2 * 10;
        const prevX = radius * Math.cos(q * prevT);
        const prevY = radius * Math.sin(q * prevT);
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(prevX, prevY, (i - 1) / 10 - 10),
          new THREE.Vector3(x, y, z)
        ]);
        
        const lineMaterial = new THREE.LineBasicMaterial({ 
          color: 0x00ffff,
          transparent: true,
          opacity: 0.6,
          linewidth: 2
        });
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
      }
      
      if (i % 5 === 0) {
        const oppositeX = -x;
        const oppositeY = -y;
        
        const connectorGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x, y, z),
          new THREE.Vector3(oppositeX, oppositeY, z)
        ]);
        
        const connectorMaterial = new THREE.LineBasicMaterial({ 
          color: 0xffffff,
          transparent: true,
          opacity: 0.3,
          linewidth: 1
        });
        
        const connector = new THREE.Line(connectorGeometry, connectorMaterial);
        group.add(connector);
      }
    }
    
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particlesMesh);
    
    scene.add(group);
    
    camera.position.z = 5;
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      currentRotation.current += (targetRotation.current - currentRotation.current) * 0.05;
      currentRotationX.current += (targetRotationX.current - currentRotationX.current) * 0.05;
      
      group.rotation.y = currentRotation.current;
      group.rotation.x = currentRotationX.current;
      
      group.rotation.y += 0.001;
      
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.001;
        if (positions[i + 1] > 5) positions[i + 1] = -5;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.4, window.innerHeight * 0.6);
    };
    
    const handleMouseMove = (event) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
      
      targetRotation.current = mouse.current.x * 0.5;
      targetRotationX.current = mouse.current.y * 0.2;
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    animate();
    
    const mountNode = mountRef.current;
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={mountRef} className="absolute right-0 top-1/2 transform -translate-y-1/2" />;
}
