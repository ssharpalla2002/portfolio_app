import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const TorusKnot = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshStandardMaterial color="#f07706" roughness={0.3} />
    </mesh>
  );
};

const TorusKnotScene = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', display: 'block' }}
      camera={{ position: [3, 3, 3], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <TorusKnot />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TorusKnotScene;