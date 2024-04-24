import React, { useEffect, useState } from "react";

import TrapComponent from "../../components/TrapComponent";
import WelcomeSection from "../../components/welcomeContainer";
import img from "../../Images/placas.jpg";
import img2 from "../../Images/casaCarousel.jpeg";
import img3 from "../../Images/FixedAD.jpg";
import {
  Container,
  ImageContainer,
  Image,
  TrapContainer,
  Trap,
  Title,
  BlueText,
  OrangeText,
  Separetor,
  Subtitle,
  Description,
  StyledButton,
  Icon,
} from "./HomeElements.js";

const HomeComponent = () => {
  const imagesArray = [
    { image: img, alt: "Imagem placas dispersas" },
    { image: img2, alt: "Imagem projeto instalado em casa" },
    { image: img3, alt: "Imagem placa instalada próximo" },
  ];
  const [actualImage, setActualImage] = useState("");
  const [actualAlt, setActualAlt] = useState("");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const arrayIndex = Math.floor(Math.random() * 3);
    setActualImage(imagesArray[arrayIndex].image);
    setActualAlt(imagesArray[arrayIndex].alt);
  }, []);

  return (
    <Container id="home">
      <ImageContainer>
        <Image src={actualImage} alt={actualAlt}></Image>
      </ImageContainer>
      <TrapContainer>
        <Trap>
          <Title>
            <BlueText>Bem vindo</BlueText>
            <Separetor />
            <OrangeText>ao futuro</OrangeText>
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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "Quero conhecer " : "Quero conhecer "}
            {hovered ? (
              <Icon>
                <i class="fa-solid fa-solar-panel"></i>
              </Icon>
            ) : (
              <Icon>
                <i class="fa-solid fa-sun"></i>
              </Icon>
            )}
          </StyledButton>
        </Trap>
      </TrapContainer>
    </Container>
  );
};

export default HomeComponent;
