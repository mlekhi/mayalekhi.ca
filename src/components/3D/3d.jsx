import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const PurpleCube = (props) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#886ce4'} />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={3} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
        shadow-camera-far={50} 
      />
      <PurpleCube position={[0, 2, 0]} />
      <PurpleCube position={[0, 0, 0]} />
      <PurpleCube position={[0, -2, 0]} />
    </Canvas>
  );
};

export default ThreeScene;
