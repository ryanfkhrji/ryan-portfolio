import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <>
      <Container>
        <div className={`mt-10 pb-6 md:mt-20`}>
          <p className={`text-sm font-Grotesk text-black-custom`}>
            &copy; Developed <span className="text-purple">By</span> <span className="font-semibold text-green-secondary">Ryan Fakhroji</span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
