import React from 'react'
import { InfoWrapper, InfoContainer, TextWrapper, TopLine, Heading, Subtitle, InfoRow, Col1, Col2, ImageWraper, Image } from './elements'

const OqueFazemos = () => {
  return (
    <InfoContainer id="aboutUs">
        <InfoWrapper>
        <InfoRow>
            <Col1>
            <ImageWraper>
              <img src = {require('../../Images/img03.png')} alt="Logo" height="100%" width = "100%"></img> 
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
                <Subtitle>
                Desenvolvemos o estudo e a implantação de projetos que procuram melhorar
                o uso das fontes de energia, com o objetivo de otimizar o consumo e reduzir
                os custos operacionais, através de ações corretivas e preventivas.

                </Subtitle>
                <TopLine> - Projetos especiais</TopLine>
                <Subtitle>
                Por meio de parcerias estratégicos temos condições de desenvolver projetos
                de mini PCHs e biomassa, partindo da análise para identificar a viabilidade
                das soluções de acordo com o cenário de cada cliente.
                </Subtitle>
                
            </TextWrapper>
            </Col2>
        </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
}

export default OqueFazemos