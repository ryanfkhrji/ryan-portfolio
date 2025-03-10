import React from "react";
import AboutMe from "../components/Fragments/AboutMe";
import { RevealOnScroll } from "../components/RevealOnScroll";

const AboutPage = () => {
  return (
    <>
      <RevealOnScroll>
        <AboutMe />
      </RevealOnScroll>
    </>
  );
};

export default AboutPage;
