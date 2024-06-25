import React, { useState, useEffect } from "react";
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
import LoaderComponent from "../components/loader";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const change = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoader = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        toggleLoader();
      }, 2500); // 3 seconds delay after page load
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
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
          <ContactSec />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
