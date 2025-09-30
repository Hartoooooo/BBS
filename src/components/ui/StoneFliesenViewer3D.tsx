'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function StoneSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Texturen für Stein-Fliesen laden (optimiert)
  const baseColorMap = useLoader(THREE.TextureLoader, '/models/textures/StonePatternedTile_basecolor.png');
  const normalMap = useLoader(THREE.TextureLoader, '/models/textures/StonePatternedTile_normal.png');
  const roughnessMap = useLoader(THREE.TextureLoader, '/models/textures/StonePatternedTile_roughness.png');
  
  // Texture Repeat für mehr Kacheln
  [baseColorMap, normalMap, roughnessMap].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2); // 2x2 Kacheln auf der Kugel
  });
  
  // Langsame Auto-Rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.3, 64, 64]} />
      <meshStandardMaterial
        map={baseColorMap}
        normalMap={normalMap}
        normalScale={new THREE.Vector2(1, 1)}
        roughnessMap={roughnessMap}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial color="#888888" />
    </mesh>
  );
}

interface StoneFliesenViewer3DProps {
  className?: string;
}

export default function StoneFliesenViewer3D({ className = "" }: StoneFliesenViewer3DProps) {
  return (
    <div className={`w-full h-[450px] ${className}`}>
      <Canvas
        camera={{ position: [3, 2, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Umgebungslicht */}
        <ambientLight intensity={0.8} />
        
        {/* Hauptlicht von oben */}
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5}
        />
        
        {/* Fülllicht von der Seite */}
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[5, 0, 5]} intensity={0.3} />
        
        <Suspense fallback={<LoadingFallback />}>
          <StoneSphere />
        </Suspense>
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
}
