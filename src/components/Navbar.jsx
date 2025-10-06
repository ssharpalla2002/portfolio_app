import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.img`
  height: 50px;
  object-fit: contain;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.a`
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffca8a;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.a`
  min-width: 100px;
  padding: 8px 16px;
  background-color: #9c0000;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s ease;

  &:hover {
    background-color: #b30000;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" alt="Logo" />
          <List>
            <ListItem href="#Hero">Home</ListItem>
            <ListItem href="#Who">Overview</ListItem>
            <ListItem href="#Works">Studio</ListItem>
            <ListItem href="#Projects">Projects</ListItem>
          </List>
        </Links>
        <Icons>
          <Button href="#Contact">Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

