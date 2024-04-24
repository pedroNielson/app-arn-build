import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh; /* Ocupar 100% da altura da tela */
  width: 100%;
  margin-bottom: -50px;
`;

export const ImageContainer = styled.div`
  /* position: relative; Adicionado para que o componente TrapContainer seja posicionado em relação a este container */
  height: 100%; /* Ocupar 100% da altura da tela */
  width: 100%; /* Definir a largura da imagem */

  @media screen and (max-width: 700px) {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }
`;

export const TrapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55%; /* Define a largura do componente */
  height: 100%; /* Ocupa toda a altura da tela */
  overflow: hidden;
  z-index: 2; /* Garante que o TrapContainer fique acima da imagem */

  @media screen and (max-width: 1180px) {
    width: 60%;
  }
  @media screen and (max-width: 1180px) {
    width: 75%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Trap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  clip-path: polygon(0% 0%, 100% 0%, 65% 100%, 0% 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1500px) {
    align-items: flex-start;
    padding-left: 100px;
  }

  @media screen and (max-width: 1320px) {
    padding-left: 70px;
  }

  @media screen and (max-width: 1235px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 1180px) {
    padding-left: 120px;
  }

  @media screen and (max-width: 1180px) {
    padding-left: 90px;
  }

  @media screen and (max-width: 920px) {
    padding-left: 55px;
  }

  @media screen and (max-width: 900px) {
    background: rgba(255, 255, 255, 0.56);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    clip-path: none; /* Removing the clip-path */
    width: 100%; /* Filling the entire width */
    height: 100%; /* Filling the entire height */
    padding-left: 0; /* Remove padding-left */
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const OrangeText = styled.span`
  color: orange; /* Cor do texto laranja */
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 130px;
  margin-top: -30px;
  letter-spacing: 8px;

  @media screen and (max-width: 497px) {
    font-size: 120px;
  }

  @media screen and (max-width: 465px) {
    margin-top: -20px;
    font-size: 100px;
  }

  @media screen and (max-width: 399px) {
    font-size: 90px;
  }

  @media screen and (max-width: 366px) {
    font-size: 80px;
  }

  @media screen and (max-width: 333px) {
    margin-top: -10px;
    font-size: 70px;
  }

  @media screen and (max-width: 303px) {
    font-size: 65px;
  }
`;
export const BlueText = styled.span`
  color: #0c1861; /* Cor do texto laranja */
  font-family: "Poiret One";
  font-style: normal;
  font-weight: 400;
  letter-spacing: -8px;
  font-size: 130px;
  margin-bottom: -30px;

  @media screen and (max-width: 497px) {
    font-size: 120px;
  }

  @media screen and (max-width: 465px) {
    margin-bottom: -20px;
    font-size: 100px;
  }

  @media screen and (max-width: 399px) {
    font-size: 90px;
  }

  @media screen and (max-width: 366px) {
    font-size: 80px;
  }

  @media screen and (max-width: 333px) {
    margin-bottom: -10px;
    font-size: 70px;
  }

  @media screen and (max-width: 303px) {
    font-size: 65px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: right;
  padding: 10px;
`;

export const Icon = styled.span`
  margin-right: 10px;
`;

export const Separetor = styled.div`
  width: 90%;
  height: 1px;
  border-bottom: 1px solid rgb(255, 255, 255);
`;

export const StyledButton = styled.a`
  text-decoration: none;
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
    background-color: #3dd652b3;
    color: white;
    border-radius: 12px;
    font-size: 38px;
  }

  // Novo ícone quando o botão está em estado de hover

  &:hover::before {
    position: absolute;
    opacity: 1;
    top: 14px;
    left: 10px;
    transition: 0.5s;
  }
`;
