import React, { useRef } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 4.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 72px;
  color: #fffffff4;
  text-shadow: 0 0 5px black, 0 0 10px black;
`;

const Desc = styled.p`
  font-size: 22px;
  color: #ffffff;
  text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
  font-weight: bold;
`;

const Img = styled.img`
  width: 600px;
  height: 540px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(3px);
    }
  }
`;

const Right = styled.div`
  flex: 3.5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;


const MovingSphere = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = Math.sin(Date.now() * 0.002) * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <sphereGeometry args={[2.05, 64, 64]} />
      <MeshDistortMaterial
        color="#ff8c20"
        distort={0.2}
        speed={1}     
        roughness={0.3}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi, I'm Sanjith Harpalla</Title>
          <Desc>~I craft web apps, design slick UIs and bring 3D visuals to life.</Desc>
        </Left>
        <Right>
          <CanvasWrapper>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 1, 2]} />
              <MovingSphere />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </CanvasWrapper>
          <Img src="./img/coding.png"/>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;