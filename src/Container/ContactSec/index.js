import React from "react";
import {
  ContactContainer,
  ContactCell,
  ContactRow,
  CellRow,
  LinkIcon,
  CellFrame,
  ContactHeader,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  CellTitle,
  CellContainer1,
  CellContainer2,
  ContactWraper,
  LinkExterno,
  ButtonWrapper,
} from "./styles";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";


const ContactSec = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <ContactContainer id="contact">
      <ContactWraper>
        <ContactRow>
          <ContactCell>
            <CellContainer1>
              

              <Form
                action="https://formsubmit.co/contato@arnenergia.com"
                method="POST"
              >
                <FormLabel htmlFor="Nome">
                  Nome completo/Razão social
                </FormLabel>
                <FormInput type="text" name="Nome:" required></FormInput>

                <FormLabel htmlFor="Telefone">Telefone</FormLabel>
                <FormInput type="tel" name="Telefone:" required></FormInput>

                <FormLabel htmlFor="Email">E-mail</FormLabel>
                <FormInput type="email" name="Email:" required></FormInput>

                <ButtonWrapper>
                  <FormButton onSubmit={sendEmail}>
                    Entrar em contato!
                  </FormButton>
                </ButtonWrapper>
                <input type="hidden" name="_template" value="box"></input>
                <input
                  type="hidden"
                  name="_subject"
                  value="Novo contato inserido!"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:3000/ThankPage"
                ></input>
              </Form>
            </CellContainer1>
          </ContactCell>

          <ContactCell>
            <CellContainer2>
              <CellTitle>Informações de contato</CellTitle>
              <LinkExterno>
                <FaMapMarkerAlt /> R. 103, 105 - St. Sul, Goiânia - GO, Brasil
              </LinkExterno>
              <CellFrame
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15287.227644977347!2d-49.2583664!3d-16.6865431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55f218e46637c67%3A0xf7bf0cff8903b689!2zQVJOIFNvbHXDp8O1ZXMgRW5lcmfDqXRpY2Fz!5e0!3m2!1sen!2sbr!4v1686465868582!5m2!1sen!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></CellFrame>
              <CellRow>
                <LinkIcon
                  href="https://www.instagram.com/arnenergiasolar/"
                  target="_blank"
                >
                  <FaInstagram />
                </LinkIcon>
                <LinkIcon
                  href="https://wa.me/5562996934200?text=Ol%C3%A1%2C+tudo+bem%3F+"
                  target="_blank"
                >
                  <FaWhatsapp />
                </LinkIcon>
                <LinkIcon
                  href="https://www.linkedin.com/company/arn-solu%C3%A7%C3%B5es-energ%C3%A9ticas/"
                  target="_blank"
                >
                  <FaLinkedin />
                </LinkIcon>
                <LinkIcon href="mailto:contato@arnenergia.com" target="_blank">
                  <FaEnvelope />
                </LinkIcon>
              </CellRow>
            </CellContainer2>
          </ContactCell>
        </ContactRow>
      </ContactWraper>
    </ContactContainer>
  );
};

export default ContactSec;
