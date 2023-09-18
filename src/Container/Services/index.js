import React, { useState } from 'react'
import ServicesData from './ServicesData'
import { ServicesHeader, ProjectRow, ProjectContainer, Span, Img, ImgCard, ImgInfo, ImgDesc, ImgTitle } from './ServicesElements'


const ServicesSection = () => {
  const [data] = useState(ServicesData)

  return (
    <ProjectContainer id="services">
      <ServicesHeader>Conheça nossas <Span>soluções</Span></ServicesHeader>
      <ProjectRow>
        {data.map((product, index) => {
          return (

            <ImgCard key={index}>
              <Img src={product.img} alt={product.alt} />
              <ImgInfo>
                <ImgTitle>{product.name}</ImgTitle>
                <ImgDesc>{product.desc}</ImgDesc>
              </ImgInfo>
            </ImgCard>

          )
        })}
      </ProjectRow>
    </ProjectContainer>


  )
}

export default ServicesSection