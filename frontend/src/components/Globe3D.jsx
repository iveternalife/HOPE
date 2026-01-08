import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Box } from '@chakra-ui/react';

function RotatingGlobe() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4EE3D8" />
      
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#2F5FA0"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#4EE3D8"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[2.2, 32, 32]}>
        <meshBasicMaterial
          color="#4EE3D8"
          transparent
          opacity={0.1}
          wireframe
        />
      </Sphere>
    </>
  );
}

export default function Globe3D() {
  return (
    <Box w="100%" h="100%" position="relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <RotatingGlobe />
      </Canvas>
    </Box>
  );
}
