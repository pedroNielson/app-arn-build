import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#00062b" : "#00062b")};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  margin-bottom: 30px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1000px;
`;
export const NavLogo = styled(LinkS)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  padding: 4px;
  cursor: pointer;
  align-items: center;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 90px;
`;

export const NavLinks = styled(LinkS)`
  color: #fcfbf0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  &.active {
    border-bottom: 3px solid #ff5412;
    color: #ff5412;
  }
  &:hover {
    color: #ff5412;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #ff5412;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fcfbf0;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fcfbf0;
    color: #00062b;
  }
`;
