import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ModelViewer from '../components/ModelViewer';

const data = [
  { label: "Web Developer", model: "/laptop/scene.gltf" },
  { label: "React Developer", model: "/react/scene.gltf" },
  { label: "Design", model: "/blank-canvas/scene.gltf" },
  { label: "AI/ML", model: "/tesla_bot/scene.gltf" },
  { label: "Cloud & DevOps", model: "/clouds/scene.gltf" }
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const moveText = keyframes`
  to {
    width: 100%;
  }
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  position: relative;
  text-shadow:
    -0.5px -0.5px 0 #333,
     0.5px -0.5px 0 #333,
    -0.5px  0.5px 0 #333,
     0.5px  0.5px 0 #333;

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: #ffca8a;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.5s linear;
  }

  &:hover::after {
    animation: ${moveText} 0.5s forwards;
  }
`;

const Right = styled.div`
  flex: 2.2;
  height: 100%;
`;

const Works = () => {
  const [selectedModel, setSelectedModel] = useState(data[0].model);

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item.label}
                data-text={item.label}
                onClick={() => setSelectedModel(item.model)}
              >
                {item.label}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <ModelViewer modelPath={selectedModel} />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;