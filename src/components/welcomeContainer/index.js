import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a237e; /* Azul escuro */
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #1a237e; /* Azul escuro */
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #f57c00; /* Laranja */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const WelcomeSection = () => {
  return (
    <WelcomeContainer>
      <Title>
        Bem vindo ao <span style={{ color: "#f57c00" }}>futuro</span>
      </Title>
      <Subtitle>Subtítulo importante para o contexto</Subtitle>
      <Button>Descubra mais</Button>
    </WelcomeContainer>
  );
};

export default WelcomeSection;
