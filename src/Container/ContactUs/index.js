import React from 'react'
import { ContactContainer, ContactCell, ContactRow, ContactHeader, Form, FormLabel, FormInput, FormButton } from './ContactElements'



const ContactSection = () => {

  const sendEmail = (e) => {
    e.preventDefault();

  };

  return (
    <ContactContainer id="contact">
      <ContactHeader>Contato</ContactHeader>
      <ContactRow>
        <ContactCell>
          <Form action="https://formsubmit.co/contato@arnenergia.com" method='POST' >

            <FormLabel htmlFor='Nome'>Nome completo/Razão social:</FormLabel>
            <FormInput type='text' name='Nome:' required></FormInput>

            <FormLabel htmlFor='Telefone'>Telefone:</FormLabel>
            <FormInput type='number' name='Telefone:' required></FormInput>

            <FormLabel htmlFor='Email'>E-mail:</FormLabel>
            <FormInput type='email' name='Email:' required></FormInput>

            <FormButton onSubmit={sendEmail}>Entrar em contato!</FormButton>

            <input type="hidden" name="_template" value="box"></input>
            <input type="hidden" name="_subject" value="Novo contato inserido!"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="http://localhost:3000/ThankPage"></input>
          </Form>
        </ContactCell>
        
        <ContactCell>kleber</ContactCell>

          
        
      </ContactRow>
    </ContactContainer>
  )
}

export default ContactSection