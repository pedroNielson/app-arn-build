import styled from "styled-components";

export const Span = styled.span`
  font-size: 80px;
  font-family: "Poiret One";
  color: #ff5412;

  @media screen and (max-width: 1080px) {
    font-size: 68px;
    margin-bottom: 10px;
    text-align: center;
  }

  @media screen and (max-width: 780px) {
    font-size: 60px;
  }

  @media screen and (max-width: 450px) {
    font-size: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 45px;
  }
  @media screen and (max-width: 320px) {
    font-size: 40px;
  }
`;

export const PathSegment = styled.path`
  fill: #1a2142;
`;
export const ShapeDivider = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;
export const SvgSegment = styled.svg`
  position: relative;
  display: block;
  width: calc(123% + 1.3px);
  height: 212px;
  transform: rotateY(180deg);
`;

export const ServicesHeader = styled.h1`
  text-align: right;
  margin-right: 250px;
  font-size: 80px;
  font-family: "Poiret One";
  color: #00062b;
  margin-bottom: -3rem;

  letter-spacing: 1.4px;

  @media screen and (max-width: 1780px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 1780px) {
    margin-left: 10px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1080px) {
    margin-left: 0px;
    font-size: 68px;
    margin-bottom: 10px;
    text-align: center;
  }
  @media screen and (max-width: 780px) {
    font-size: 60px;
  }
  @media screen and (max-width: 450px) {
    font-size: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 45px;
  }
  @media screen and (max-width: 320px) {
    font-size: 40px;
  }
`;
export const ImgCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 350px;

  @media screen and (max-width: 1780px) {
    width: 300px;
  }

  @media screen and (max-width: 1600px) {
    width: 270px;
  }

  @media screen and (max-width: 1455px) {
    width: 250px;
  }

  @media screen and (max-width: 1380px) {
    width: 230px;
  }

  @media screen and (max-width: 1300px) {
    width: 300px;
    margin-top: 2rem;
  }
  @media screen and (max-width: 400px) {
    width: 230px;
  }

  @media screen and (max-width: 290px) {
    width: 210px;
  }
`;
export const ImgTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  font-family: "Quicksand", sans-serif;
  color: #ff5412;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.4px;

  &:hover {
    color: #00062b;
    transition: 200ms ease-in;
  }
`;

export const Img = styled.img`
  height: 350px;
  min-width: 350px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  cursor: pointer;

  object-fit: cover;
  object-position: 50% 50%;

  transition: transform 0.8s, filter 1.1s ease-in-out;
  transform-origin: center center;
  filter: brightness(52%);

  &:hover {
    filter: brightness(100%);
    transform: scale(1.15);
  }

  @media screen and (max-width: 1780px) {
    min-width: 310px;
    height: 310px;
  }

  @media screen and (max-width: 1600px) {
    min-width: 278px;
    height: 278px;
  }

  @media screen and (max-width: 1455px) {
    min-width: 260px;
    height: 260px;
  }

  @media screen and (max-width: 1380px) {
    min-width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 1300px) {
    min-width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 400px) {
    min-width: 230px;
    height: 230px;
  }

  @media screen and (max-width: 290px) {
    min-width: 210px;
    height: 210px;
  }
`;

export const ImgDesc = styled.p`
  margin-bottom: 2rem;
  color: #00062b;
  text-align: center;
`;

export const ImgInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
`;

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    place-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectContainer = styled.div`
  background: #eee;
  min-height: 100vh;
  display: grid;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;
