import React from "react";
import Hero from "../components/Fragments/Hero";
import CardSetifikat from "../components/Fragments/CardSertifikat";
import { getDataSertifikat } from "../utils/dataSertifikat";
import { useState, useEffect } from "react";
import Container from "../components/Layouts/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { RevealOnScroll } from "../components/RevealOnScroll";

const HomePage = () => {
  const [sertifikat, setSertifikat] = useState([]);

  useEffect(() => {
    setSertifikat(getDataSertifikat());
  }, []);

  return (
    <>
      <RevealOnScroll>
        <Hero />
        <Container>
          <div className="mt-10 md:mt-20">
            <h2 className="font-semibold text-md font-Grotesk text-green-secondary">
              <FontAwesomeIcon icon={faCertificate} size="sm" className="text-purple" /> Sertifikat
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-3">
            {sertifikat.length > 0 &&
              sertifikat.map((item) => (
                <CardSetifikat key={item.id}>
                  <CardSetifikat.Header image={item.imageUrl} linkUrl={item.linkUrl} />
                  <CardSetifikat.Body title={item.title} />
                  <CardSetifikat.Footer linkUrl={item.linkUrl} />
                </CardSetifikat>
              ))}
          </div>
        </Container>
      </RevealOnScroll>
    </>
  );
};

export default HomePage;
