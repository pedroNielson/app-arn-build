import React from 'react'
import {FormContainer, FormWrap, FormContent, Form, FormLabel, FormInput, FormSelect, FormButton, TitleSection, Title, Description, BackLink} from './FormElements'

import { BsArrowLeftShort } from "react-icons/bs";




const FormPage = () => {
  
  
  
  
  return (

            <FormContainer>
              
              <BackLink to='/'><BsArrowLeftShort/> Voltar</BackLink>
              <FormWrap>
              <TitleSection>
                <Title>Peça já o seu orçamento</Title>
                <Description>Preencha o formulário para que um de nossos consultores entre em contato gratuitamente e o mais rapido possível.</Description>
              </TitleSection>
                <FormContent>
                  <Form action="https://formsubmit.co/contato@arnenergia.com" method="POST">
                    <FormLabel htmlFor='Nome' >Nome completo/Razão social:</FormLabel>
                    <FormInput type='text' name = 'Nome:' required ></FormInput>

                    <FormLabel htmlFor='Telefone' >Telefone:</FormLabel>
                    <FormInput type='number' name = 'Telefone:' required ></FormInput>

                    <FormLabel htmlFor='Email' >E-mail:</FormLabel>
                    <FormInput type='email' name = 'Email:' required ></FormInput>

                    <FormLabel htmlFor='Consumo' >Consumo médio (Kwh/mês):</FormLabel>
                    <FormInput type='number' name = 'Consumo médio:' required ></FormInput>

                    <FormLabel htmlFor='Sistemas' >Tipo de sistema:</FormLabel>
                    <FormSelect name="pets" id="pet-select" >
                    <option value="">--Selecione uma opção--</option>
                    <option value="urbana">Residência urbana</option>
                    <option value="rural">Residência rural</option>
                    <option value="industria">Indústria</option>
                    <option value="comercio">Comércio</option>
                    </FormSelect>

                    
                    <FormButton>Enviar dados</FormButton>

                  <input type="hidden" name="_template" value="box"></input>
                  <input type="hidden" name="_subject" value="Novo orçamento inserido!"></input>
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="hidden" name="_next" value="http://localhost:3000/ThankPage"></input>

                  </Form>
                </FormContent>
              </FormWrap>
            </FormContainer>




  )
}

export default FormPage