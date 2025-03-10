import React from "react";
import Contact from "../components/Fragments/Contact";
import { RevealOnScroll } from "../components/RevealOnScroll";

const ContactPage = () => {
  return (
    <>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </>
  );
};

export default ContactPage;
