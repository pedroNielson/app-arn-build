import React, {useState } from 'react'
import ProjectsData from './ProjectsData'
import {useSpring, animated} from "react-spring"
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { ProjectContainer, ProjectRow, ProjectsStatsWrapper, SpanCount, ProjectStatsCircle, ProjectDescColumn, ProjectStatsRow, ProjectStatsColumn, SpanStats, ProjectColumn, ProjectThumb, ThumbImage, Heading, ProjectContent, ContentHeading, Mark, SpanAmout } from './ProjectElements'

function Number({n}) {
  const {number} = useSpring({
    immediate: true,
    from: {number: 0},
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10},
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

function ProjectSection() {
  const [data] = useState(ProjectsData);
  const [counterNum, setCounterNum] = useState(false);


  return (
    <ScrollTrigger onEnter={() => setCounterNum(true)} >
      <ProjectContainer id='project'>
        {/*<ProjectsStatsWrapper>
          <Heading> Nossos projetos em números </Heading>
          <ProjectStatsRow>
            <ProjectStatsColumn>
              <ProjectStatsCircle>
                <SpanCount>
                {counterNum &&  <CountUp start={0} end={50} duration={3} delay={0.4}/>}
                </SpanCount>
              </ProjectStatsCircle>

              <ProjectDescColumn>
                <SpanStats>
                  Projetos finalizados
                </SpanStats>
              </ProjectDescColumn>
            </ProjectStatsColumn>
            <ProjectStatsColumn>
              <ProjectStatsCircle>
                <SpanCount>
                {counterNum &&  <CountUp start={0} end={2500} duration={3} delay={0.4}/>}
                </SpanCount>
              </ProjectStatsCircle>

              <ProjectDescColumn>
                <SpanStats>
                  Placas instaladas
                </SpanStats>
              </ProjectDescColumn>
            </ProjectStatsColumn>
            <ProjectStatsColumn>
              <ProjectStatsCircle>
                <SpanCount>
                {counterNum &&  <CountUp start={0} end={20000} duration={3} delay={0.4}/>}
                </SpanCount>
              </ProjectStatsCircle>

              <ProjectDescColumn>
                <SpanStats>
                  Potência gerada
                </SpanStats>
              </ProjectDescColumn>
            </ProjectStatsColumn>
            
          </ProjectStatsRow>
  
        </ProjectsStatsWrapper>
        */}
        <ProjectRow>
          {data.map((data) => {
            return (
              <ProjectColumn>
                <ProjectThumb>
                  <ThumbImage src={data.Image} alt='fotinhas' />
                </ProjectThumb>

                <ProjectContent>
                  <ContentHeading>{data.heading}</ContentHeading>
                  <Mark>
                    <i style={{ paddingRight: '6px', paddingLeft: '3px' }} class='fa-solid fa-location-dot'></i>
                    <SpanAmout>{data.span}</SpanAmout>
                  </Mark>
                  <Mark>
                    <i style={{ paddingRight: '3px' }} class="fa-solid fa-house"></i>
                    <SpanAmout>{data.sistema}</SpanAmout>
                  </Mark>
                  <Mark>
                    <i style={{ paddingRight: '4px', paddingLeft: '3px' }} class="fa-solid fa-bolt"></i>
                    <SpanAmout>{data.amount}</SpanAmout>
                  </Mark>
                  <Mark>
                    <i style={{ paddingRight: '6px', paddingLeft: '3px' }} class="fa-solid fa-dollar-sign"></i>
                    <SpanAmout>{data.lucro}</SpanAmout>
                  </Mark>
                  <Mark>
                    <i style={{ paddingRight: '3px' }} class="fa-solid fa-sun"></i>
                    <SpanAmout>{data.geracao}</SpanAmout>
                  </Mark>
                  <Mark>
                    <i style={{ paddingRight: '1px' }} class="fa-solid fa-solar-panel"></i>
                    <SpanAmout>{data.plates}</SpanAmout>
                  </Mark>
                </ProjectContent>
              </ProjectColumn>

            )
          })}

        </ProjectRow>
      </ProjectContainer>
    </ScrollTrigger>
  )
}

export default ProjectSection