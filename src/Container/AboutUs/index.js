import React from 'react'
import { InfoWrapper, InfoContainer, Img, TextWrapper, TopLine, Heading, Subtitle, Subtitle2, InfoRow, Col1, Col2, ImageWraper } from './infoElements'

const AboutUs = () => {
  return (
    <InfoContainer >
        <InfoWrapper>
        <InfoRow  id="aboutUs"> 
            <Col1>
            <TextWrapper>
                <Heading>
                Quem somos
                </Heading>
                <Subtitle>
                A ARN Soluções Energéticas é uma empresa de
                engenharia cujo principal objetivo é levar ao segmento
                de energias renováveis uma experiência completa em
                atendimento e conhecimento técnico, além de firmar
                um compromisso de oferecer aos nossos clientes as
                melhores soluções e equipamentos do mercado.
                </Subtitle>
                <br/>
                <Subtitle2>
                Somos especializados em projetos de energia
                renováveis e estudos de eficiência energética.
                </Subtitle2>
            </TextWrapper>
            </Col1>
            <Col2>
            <ImageWraper>
              <Img src = {require('../../Images/img-svg01.png')} alt="Logo" ></Img> 
              </ImageWraper>
            </Col2>
        </InfoRow>
        <InfoRow id="aboutUs2">
            <Col1>
            <ImageWraper>
              <Img src = {require('../../Images/img03.png')} alt="Logo" ></Img> 
              </ImageWraper>
            </Col1>
            <Col2>
            <TextWrapper>
                <Heading>
                O que fazemos
                </Heading>
                <TopLine> - Projetos de energia fotovoltaica</TopLine>
                <Subtitle>
                Entregamos a solução completa (Turn Key): do dimensionamento inicial, visita
                técnica, aquisição de equipamentos, instalação do sistema, homologação do
                projeto, até a conexão junto à rede da concessionária.
                </Subtitle>
                <TopLine> - Projetos de eficiência energética</TopLine>
                <Subtitle2>
                Desenvolvemos o estudo e a implantação de projetos que procuram melhorar
                o uso das fontes de energia, com o objetivo de otimizar o consumo e reduzir
                os custos operacionais, através de ações corretivas e preventivas.

                </Subtitle2>
                <TopLine> - Operação e manutenção</TopLine>
                <Subtitle>
                Desenvolvemos soluções para acompanhamento e manutenção de usinas utilizando ferramentas de gerenciamento e monitoramento, além de serviços presenciais como manutenção corretiva e preventiva.
                </Subtitle>
                
            </TextWrapper>
            </Col2>
        </InfoRow>
        
        </InfoWrapper>
    </InfoContainer>
  )
}

export default AboutUs