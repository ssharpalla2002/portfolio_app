import React from 'react';
import styled from 'styled-components';
import Who1 from './Who1';

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align:start;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CanvasWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  overflow: hidden;
`;

const Right = styled.div`
  flex: 1;
  padding: 40px;
  color: white;
`;


const Title = styled.h1`
  font-size: 50px;
  color: #f07706;
  font-weight: bold;
  text-shadow:
    -0.5px -0.5px 0 #1f1f1f,
     0.5px -0.5px 0 #272727,
    -0.5px  0.5px 0 #333,
     0.5px  0.5px 0 #000000;
`;

const Desc = styled.p`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  text-shadow:
    -0.5px -0.5px 0 #333,
     0.5px -0.5px 0 #333,
    -0.5px  0.5px 0 #333,
     0.5px  0.5px 0 #333;
`;

const FDesc = styled.p`
  font-weight: bold;
  font-size: 26px;
  color: #cfe8ef;
  margin-top: 20px;
  text-shadow:
    -0.5px -0.5px 0 #333,
     0.5px -0.5px 0 #333,
    -0.5px  0.5px 0 #333,
     0.5px  0.5px 0 #333;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <CanvasWrapper>
            <Who1 />
          </CanvasWrapper>
        </Left>
        <Right>
          <Title>Introduction</Title>
          <Desc>
            Skilled software developer specializing in scalable backend systems, multi-threaded applications, and real-time data processing with Node.js, Express.js, PostgreSQL, and RESTful APIs.Focused on writing clean, maintainable code and delivering high-performance solutions in fast-paced environments.
          </Desc>
          <FDesc>Let's work together to bring your ideas to life!</FDesc>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;