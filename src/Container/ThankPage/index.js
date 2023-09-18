import React from 'react'
import {Placas, Container, Text, SubText} from './ThankPageElements'

const ThankPage = () => {
  return (
    <Container>
        <Placas>
          <Text>Contato enviado com sucesso!</Text>
          <SubText to='../../'>Clique aqui para retornar à home.</SubText>
        </Placas>
    </Container>
    
  )
}

export default ThankPage