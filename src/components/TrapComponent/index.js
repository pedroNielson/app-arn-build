// src/components/ImageSection.js
import React from "react";
import styled from "styled-components";

const TrapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55%; /* Define a largura do componente */
  height: 100%; /* Ocupa toda a altura da tela */
  overflow: hidden;
  z-index: 1; /* Garante que o TrapContainer fique acima da imagem */
`;

const Trap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: whitesmoke; /* Define a cor de fundo do trapézio */
  clip-path: polygon(0% 0%, 100% 0%, 65% 100%, 0% 100%);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3); /* Adiciona uma sombra ao trapézio */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: blue; /* Cor do título */
  /* font-family: "NomeDaFonteChamativa", sans-serif; Fonte chamativa */
  font-size: 24px;
  margin-bottom: 10px;
`;

const OrangeText = styled.span`
  color: orange; /* Cor do texto laranja */
`;

const Subtitle = styled.h2`
  /* font-family: "OutraFonte", sans-serif; Fonte mais discreta */
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const StyledButton = styled.a`
  border-radius: 4px;
  background-color: #5ca1e1;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:hover {
    padding-right: 24px;
    padding-left: 8px;
  }

  &:hover::after {
    content: "»";
    position: absolute;
    opacity: 1;
    top: 14px;
    right: 10px;
    transition: 0.5s;
  }
`;

const TrapComponent = () => {
  return (
    <TrapContainer>
      <Trap>
        <Title>
          Bem vindo ao <OrangeText>futuro</OrangeText>
        </Title>
        <Subtitle>
          Para quem deseja investir em seu sistema fotovoltaico
        </Subtitle>
        <Description>
          Com segurança, confiabilidade e custo que cabe no seu bolso
        </Description>
        <StyledButton
          href="https://forms.ploomes.com/form/c29b05bc83c0492db6c44c290b6aacbb"
          target="_blank"
        >
          Quero conhecer{" "}
          <Icon>
            <i class="fa-solid fa-arrow-right-long"></i>
          </Icon>
        </StyledButton>
      </Trap>
    </TrapContainer>
  );
};

export default TrapComponent;
