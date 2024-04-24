import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterLink,
  FooterLinkExterno,
  FooterRow,
  Title,
  FooterFinal,
  FooterBtn,
  FooterFinalElement,
} from "./FooterElements";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRow>
          <FooterColumn>
            <Title> Sobre nós </Title>
            <FooterLink
              to="aboutUs"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Quem somos
            </FooterLink>
            <FooterLink
              to="aboutUs2"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-152}
            >
              O que fazemos
            </FooterLink>
          </FooterColumn>
          <FooterColumn>
            <Title> Serviços </Title>
            <FooterLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Residências
            </FooterLink>
            <FooterLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Setor agrícola
            </FooterLink>
            <FooterLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Indústrias
            </FooterLink>
            <FooterLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Empresas e comércios
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <Title> Projetos </Title>

            <FooterLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Principais cases
            </FooterLink>
            <FooterLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Outros projetos
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <Title> Contato </Title>
            <FooterLinkExterno
              href="https://www.instagram.com/arnenergiasolar/"
              target="_blank"
            >
              <FaInstagram /> Instragram
            </FooterLinkExterno>
            <FooterLinkExterno
              href="https://wa.me/5562996934200?text=Ol%C3%A1%2C+tudo+bem%3F+"
              target="_blank"
            >
              <FaWhatsapp /> WhatsApp
            </FooterLinkExterno>
            <FooterLinkExterno
              href="https://www.linkedin.com/company/arn-solu%C3%A7%C3%B5es-energ%C3%A9ticas/"
              target="_blank"
            >
              <FaLinkedin /> Linkedin
            </FooterLinkExterno>
            <FooterLinkExterno
              href="mailto:contato@arnenergia.com"
              target="_blank"
            >
              <HiOutlineMail /> Email
            </FooterLinkExterno>
          </FooterColumn>

          <FooterColumn>
            <Title> Orçamento </Title>
            <FooterBtn
              href="https://forms.ploomes.com/form/c29b05bc83c0492db6c44c290b6aacbb"
              target="_blank"
            >
              Acessar orçamento
            </FooterBtn>
          </FooterColumn>
        </FooterRow>
      </FooterWrapper>
      <FooterFinal href="https://github.com/pedroNielson" target="_blank">
        <FooterFinalElement>
          © 2024 ARN Energia - All rights reserved
        </FooterFinalElement>
        <FooterFinalElement>
          Developed by Nielson <FaGithub />
        </FooterFinalElement>
      </FooterFinal>
    </FooterContainer>
  );
};

export default Footer;
