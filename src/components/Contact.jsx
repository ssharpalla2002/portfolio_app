import styled from 'styled-components';
import Map from './Map';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    background: linear-gradient(to left, #000000, transparent);
    pointer-events: none;
  }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  height: 75%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

const Left = styled.div`
  flex: 2.7;
  height: 100%;
  background-color: #0f0f0f;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #000000;
`;

const Title = styled.h2`
  font-weight: 550;
  font-size: 23px;
  margin-bottom: 1px;
  color: #ffffffe1;
  text-align:center;
`;

const Form = styled.form`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 8px;
  width:270px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #000000;
  transition: border 0.3s ease;

  &:focus {
    border-color: #ff33d6;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 8px;
  width:270px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #000000;
  resize: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #ff33d6;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 8px;
  width:290px;
  background-color: #9c0000;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0%.8;
  transition: background 0.3s ease;

  &:hover {
    background-color: #9c0000;
  }
`;

const SuccessMessage = styled.p`
  margin-top: 10px;
  color: #00ff04;
  font-weight: 500;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4kolser', 'template_jzsn0n6', ref.current, {
        publicKey: 'cKta4r46Hg8PLkGvO',
      })
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left><MapWrapper><Map/>
  </MapWrapper>
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input type="text" placeholder="Name" name="name" required />
            <Input type="email" placeholder="Email" name="email" required />
            <TextArea placeholder="Message" name="message" rows={6} required />
            <Button type="submit">Send</Button>
            {success && (
              <SuccessMessage>
                Your message has been sent. I'll get back to you soon :)
              </SuccessMessage>
            )}
          </Form>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;