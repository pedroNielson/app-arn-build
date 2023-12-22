import styled from "styled-components";

export const ProjectContainer = styled.div`
  background: #eee;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding-top: 1rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;
export const Heading = styled.h3`
  font-size: 80px;
  z-index: 2;
  font-family: "Poiret One";
  color: black;
  margin-bottom: 4rem;

  @media screen and (max-width: 560px) {
    font-size: 53px;
  }

  @media screen and (max-width: 500px) {
    font-size: 48px;
  }

  @media screen and (max-width: 460px) {
    font-size: 45px;
  }

  @media screen and (max-width: 430px) {
    font-size: 40px;
  }

  @media screen and (max-width: 383px) {
    font-size: 35px;
  }

  @media screen and (max-width: 321px) {
    font-size: 31px;
  }

  @media screen and (max-width: 300px) {
    font-size: 28px;
  }
`;

export const DownLine = styled.hr`
  margin-top: -10px;
  z-index: 1;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );

  @media screen and (max-width: 383px) {
    margin-top: -6px;
  }
`;

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;

  @media screen and (max-width: 1540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1156px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ProjectStatsRow = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1156px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsStatsWrapper = styled.div`
  background-color: #ff895c; //rgba(254,244,209,255);
  width: 100%;
  height: 480px;
  margin-bottom: 6rem;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export const SpanStats = styled.div`
  margin-top: 1.5rem;
  font-size: 35px;
  font-weight: bold;
  color: #00062b;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  &:hover {
    color: black;
    transition: 200ms ease-in;
  }

  @media screen and (max-width: 560px) {
    font-size: 53px;
  }

  @media screen and (max-width: 500px) {
    font-size: 48px;
  }

  @media screen and (max-width: 460px) {
    font-size: 45px;
  }

  @media screen and (max-width: 430px) {
    font-size: 40px;
  }

  @media screen and (max-width: 383px) {
    font-size: 35px;
  }

  @media screen and (max-width: 321px) {
    font-size: 31px;
  }

  @media screen and (max-width: 300px) {
    font-size: 28px;
  }
`;

export const SpanCount = styled.span`
  margin-top: 0.5rem;
  font-size: 42px;
  font-weight: bolder;
  color: #00062b;
  font-family: "Quicksand", sans-serif;
`;

export const ProjectStatsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 420px;
  }

  @media screen and (max-width: 460px) {
    width: 380px;
  }

  @media screen and (max-width: 430px) {
    width: 350px;
  }

  @media screen and (max-width: 383px) {
    width: 300px;
  }

  @media screen and (max-width: 321px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`;
export const ProjectStatsCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  display: grid;
  align-items: center;
  justify-items: center;
  background: whitesmoke;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 420px;
  }

  @media screen and (max-width: 460px) {
    width: 380px;
  }

  @media screen and (max-width: 430px) {
    width: 350px;
  }

  @media screen and (max-width: 383px) {
    width: 300px;
  }

  @media screen and (max-width: 321px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`;

export const ProjectDescColumn = styled.div`
  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 420px;
  }

  @media screen and (max-width: 460px) {
    width: 380px;
  }

  @media screen and (max-width: 430px) {
    width: 350px;
  }

  @media screen and (max-width: 383px) {
    width: 300px;
  }

  @media screen and (max-width: 321px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`;

export const ProjectColumn = styled.div`
  width: 350px;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgb(0 0 0 / 5%);
  margin-bottom: 30px;
  overflow: hidden;
  background: whitesmoke;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 420px;
  }

  @media screen and (max-width: 460px) {
    width: 380px;
  }

  @media screen and (max-width: 430px) {
    width: 350px;
  }

  @media screen and (max-width: 383px) {
    width: 300px;
  }

  @media screen and (max-width: 321px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`;

export const ProjectThumb = styled.div`
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    width: 450px;
  }

  @media screen and (max-width: 430px) {
    width: 350px;
  }

  @media screen and (max-width: 383px) {
    width: 300px;
  }

  @media screen and (max-width: 321px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`;

export const ThumbImage = styled.img`
  width: 350px;
  vertical-align: middle;
  transition: 0.3s;

  &:hover {
    transform: scale(1.12);
  }

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 560px) {
    width: 450px;
  }

  @media screen and (max-width: 430px) {
    width: 350px;
  }

  @media screen and (max-width: 383px) {
    width: 300px;
  }

  @media screen and (max-width: 321px) {
    width: 270px;
  }

  @media screen and (max-width: 300px) {
    width: 250px;
  }
`;

export const ProjectContent = styled.div`
  padding: 25px;
  border-bottom: 1px solid #e8e8e8;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const ContentHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  color: #00062b;
  margin-bottom: 8px;
`;

export const Mark = styled.div`
  font-size: 16px;
  font-weight: 800;
  font-family: "Quicksand", sans-serif;
  color: #919191;
  margin-left: 5px;
`;

export const SpanAmout = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-family: "Quicksand", sans-serif;
  color: #919191;
  margin-top: 3px;
  padding: 3px 7px;
  display: inline-block;
`;
