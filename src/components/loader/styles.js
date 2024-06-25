import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0c1861;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  position: relative;
  border: 5px solid transparent;
  border-top: 5px solid orange;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  animation: ${spin} 0.8s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 425px) {
    width: 230px;
    height: 230px;
  }
`;

export const LoaderImage = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  padding: 15px;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 425px) {
    width: 230px;
    height: 230px;
  }
`;
