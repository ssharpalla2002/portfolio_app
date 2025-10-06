import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/img/ecom.png",
    githubUrl: "https://github.com/ssharpalla2002/ecomm_platform",
    tools: ["React", "Tailwind CSS"]
  },
  {
    title: "Spotify Clone",
    image: "/img/spotify.png",
    githubUrl: "https://github.com/ssharpalla2002/spotify_clone",
    tools: ["React","Tailwind CSS", "Redux Toolkit", "RapidAPI"]
  },
  {
    title: "Real Estate Marketplace",
    image: "/img/home.png",
    githubUrl: "https://github.com/ssharpalla2002/real_estate_marketplace",
    tools: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Facebook Clone",
    image: "/img/fb.png",
    githubUrl: "https://github.com/ssharpalla2002/facebook_clone",
    tools: ["React", "Node.js", "MySQL", "Context API", "JWT"]
  },
  {
    title: "FinGenie: Stock Market Assistant",
    image: "/img/ss.png",
    githubUrl: "https://github.com/ssharpalla2002/fingenie",
    tools: ["Python","LangGraph", "RAG", "VectorDB"]
  },
  {
    title: "ShikshaGPT: Smart Science Chatbot",
    image: "/img/shiksha.png",
    githubUrl: "https://github.com/ssharpalla2002/shiksha_gpt",
    tools: ["Python", "LangChain", "Llama-2", "FAISS","Chainlit"]
  }
];

const Section = styled.section`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  scroll-margin-top: 80px;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin-top: 40px;
  font-size: 35px;
  color: white;
  margin-bottom: 25px;
  text-align: center;
  text-shadow:
    -0.5px -0.5px 0 #333,
     0.5px -0.5px 0 #333,
    -0.5px  0.5px 0 #333,
     0.5px  0.5px 0 #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 90%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #000000;
  border-radius: 12px;
  height: 250px;
  overflow: hidden;
  color: white;
  box-shadow: 0 0 8px rgba(0,0,0,0.4);
  transition: transform 0.3s ease;
  max-width: 100%;

  &:hover {
    transform: scale(1.00);
    background-color: #333;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 130px;
  }
`;

const Content = styled.div`
  padding: 16px;
`;

const ProjectTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GitHubLink = styled.a`
  color: white;
  margin-left: 8px;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const Tools = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tool = styled.li`
  background-color: #555;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Title>Featured Projects</Title>
        <Grid>
          {projects.map((project) => (
            <Card key={project.title}>
              <Image src={project.image} alt={project.title} loading="lazy" />
              <Content>
                <ProjectTitle>
                  {project.title}
                  {project.githubUrl && (
                    <GitHubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </GitHubLink>
                  )}
                </ProjectTitle>
                <Tools>
                  {project.tools.map((tool) => (
                    <Tool key={tool}>{tool}</Tool>
                  ))}
                </Tools>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
