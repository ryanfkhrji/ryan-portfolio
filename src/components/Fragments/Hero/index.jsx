import React from "react";
import Container from "../../Layouts/Container";
import Button from "../../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = (props) => {
  const { linkUrl = "https://drive.google.com/file/d/1khqZmp7EO7DCGQv1NO-MZ9DsRgjd5ond/view?usp=sharing" } = props;
  return (
    <>
      <Container>
        <div className={`mt-10 md:max-w-2xl mx-auto`}>
          <p className={`text-sm md:text-base font-Grotesk text-black-custom text-center`}>
            Hallo <span className="text-green-secondary">Dunia</span>, Saya👋🏻
          </p>
          <h1 className="py-8 text-5xl font-black text-center font-Grotesk text-green-secondary">
            RYAN <span className="text-purple">FAKHROJI</span>
          </h1>
          <p className={`text-sm md:text-base pb-8 font-Grotesk text-black-custom text-center`}>
            Saya seorang frontend developer yang gemar menciptakan antarmuka web yang bersih, responsif, dan menarik. Tujuan saya adalah membangun solusi yang memberikan pengalaman pengguna yang intuitif dan performa luar biasa.
          </p>
          <div className="flex justify-center">
            <Link to={linkUrl}>
              <Button type="button" sizeText="text-sm">
                <FontAwesomeIcon icon={faCircleArrowDown} size="sm" /> Download My CV
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
