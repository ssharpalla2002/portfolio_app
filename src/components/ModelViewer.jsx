import React, { Suspense, useRef, useLayoutEffect, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

function getVisibleMeshBounds(object3D) {
  const box = new THREE.Box3().makeEmpty();
  object3D.updateWorldMatrix(true, true);

  object3D.traverse((obj) => {
    if (obj.isMesh && obj.visible && obj.geometry) {
      if (!obj.geometry.boundingBox) obj.geometry.computeBoundingBox();
      const meshBox = obj.geometry.boundingBox.clone();
      obj.updateWorldMatrix(true, false);
      meshBox.applyMatrix4(obj.matrixWorld);
      box.union(meshBox);
    }
  });

  if (box.isEmpty()) return { size: null, center: null };
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  return { size, center };
}

const Model = ({
  path,
  speed = 0.8,        
  axis = 'y',          
  maxSize = 3.2,      
  margin = 1.15,        
  initialRotation = [0, 0, 0]
}) => {
  const { scene } = useGLTF(path);
  const group = useRef();

  useLayoutEffect(() => {
    if (!group.current || !scene) return;
    group.current.scale.set(1, 1, 1);
    group.current.position.set(0, 0, 0);
    group.current.rotation.set(...initialRotation);

    const { size, center } = getVisibleMeshBounds(scene);
    if (!size || !center) return;

    const largest = Math.max(size.x, size.y, size.z) || 1;
    const target = maxSize / margin;
    const s = target / largest;

    group.current.scale.setScalar(s);
    group.current.position.set(-center.x * s, -center.y * s, -center.z * s);
  }, [scene, maxSize, margin, initialRotation]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation[axis] += speed * delta;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

const Loader = () => (
  <Html center>
    <div style={{ color: 'white', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      Loading model...
    </div>
  </Html>
);

const ModelViewer = ({ modelPath, background = '#111' }) => {
  useEffect(() => {
    if (modelPath) useGLTF.preload(modelPath);
  }, [modelPath]);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 2000 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model path={modelPath} speed={0.8} axis="y" maxSize={3.2} margin={1.2} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;