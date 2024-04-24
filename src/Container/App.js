import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ServicesSection from "./Services";
import Footer from "./Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import StickyAd from "./StickyAd";
import Navbar from "./NavBar";
import ProjectSection from "./Projects";
import ContactSec from "./ContactSec";
import HomeComponent from "./Home";
import AboutUs from "./AboutUs";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const change = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HomeComponent />
      <Navbar change={change}></Navbar>
      <Sidebar isOpen={isOpen} change={change}></Sidebar>

      <AboutUs></AboutUs>

      <ServicesSection />
      <StickyAd></StickyAd>
      <ProjectSection />
      <FloatingWhatsApp
        className="wpp-tag"
        phoneNumber="5562996934200"
        accountName="ARN Soluções energéticas"
        chatMessage="Olá, como podemos ajudar?"
        placeholder="Entre em contato ..."
        statusMessage="Online"
        allowEsc
        allowClickAway
      />
      {/* <style>
        {`.wpp-tag {
                position: absolute;
                z-index:100;
              }`}
      </style> */}
      <ContactSec />

      <Footer />
    </div>
  );
};

export default Home;
