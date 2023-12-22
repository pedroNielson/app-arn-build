import React, { useState } from "react";
import ServicesData from "./ServicesData";
import {
  ServicesHeader,
  ProjectRow,
  ProjectContainer,
  Span,
  Img,
  ImgCard,
  ImgInfo,
  ImgDesc,
  ImgTitle,
  ShapeDivider,
  SvgSegment,
  PathSegment,
} from "./ServicesElements";

const ServicesSection = () => {
  const [data] = useState(ServicesData);

  return (
    <>
      <ShapeDivider class="custom-shape-divider-top-1701581203">
        <SvgSegment
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <PathSegment
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></PathSegment>
        </SvgSegment>
      </ShapeDivider>
      <ProjectContainer id="services">
        <ServicesHeader>
          Conheça nossas <Span>soluções</Span>
        </ServicesHeader>
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
            );
          })}
        </ProjectRow>
      </ProjectContainer>
    </>
  );
};

export default ServicesSection;
