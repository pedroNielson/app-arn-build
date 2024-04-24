import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #00062b;
  padding: 40px 60px;
  min-height: 380px;
  min-width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(255 255 255 / 20%);
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 590px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLinkExterno = styled.a`
  color: #eee;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ff5412;
    transition: 200ms ease-in;
  }
`;

export const FooterLink = styled(LinkS)`
  color: #eee;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ff5412;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.4px;
`;

export const FooterFinal = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;

  @media (max-width: 756px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const FooterFinalElement = styled.div`
  font-family: "Quicksand", sans-serif;
  color: #eee;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  @media (max-width: 468px) {
    font-size: 14px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;
export const FooterBtn = styled.a`
  border-radius: 50px;
  background: #ff5412;
  white-space: nowrap;
  padding: 10px 10px 10px 10px;
  color: #fcfbf0;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  text-align: center;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fcfbf0;
    color: #00062b;
  }
`;
