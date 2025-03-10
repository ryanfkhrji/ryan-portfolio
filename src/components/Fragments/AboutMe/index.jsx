import React from "react";
import Container from "../../Layouts/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <>
      <Container>
        <div className="mt-10">
          <h2 className="pb-3 text-xl font-black font-Grotesk text-green-secondary">
            About <span className="text-purple">Me</span>
          </h2>
          <p className={`py-3 text-sm/7 font-light text-black md:text-base/7 font-Grotesk`}>
            Hai! Saya Ryan. Saya mulai mempelajari pengembangan web di awal pandemi. Karena tidak banyak yang bisa dilakukan, saya memutuskan untuk memulai perjalanan pengembangan web saya melalui forum pengembangan web. Setelah itu, saya
            mulai menonton berbagai video YouTube untuk mempelajari lebih dalam tentang pengembangan web, khususnya dalam hal pengembangan frontend.
          </p>
          <p className={`py-3 text-sm/7 font-light text-black md:text-base/7 font-Grotesk`}>
            Saya ingin memperluas pengetahuan dan keterampilan saya dalam pengembangan frontend, karena ada banyak sekali teknologi dan konsep untuk dijelajahi. Saya merasa sangat puas dalam proses memperoleh informasi dan teknik baru, dan
            saya sangat termotivasi untuk terus belajar dan berkembang. Saya menghargai umpan balik yang membangun karena hal itu membantu saya menyempurnakan kemampuan dan meningkatkan kemahiran saya secara keseluruhan.
          </p>
          <p className={`py-3 text-sm/7 font-light text-black md:text-base/7 font-Grotesk`}>
            Melalui situs web ini, saya berencana untuk berbagi pemikiran dan memamerkan proyek yang telah saya kerjakan. Saya sangat yakin bahwa mendokumentasikan apa yang telah saya pelajari adalah metode yang sangat baik untuk memperkuat
            pemahaman saya, dan juga memungkinkan saya untuk menularkan pengetahuan saya kepada orang lain. Jangan ragu untuk menghubungi saya, dan saya akan dengan senang hati membantu Anda!
          </p>
        </div>
        <div className="mt-10">
          <hr className="mb-3 border-1 text-green-secondary" />
          <h2 className="font-semibold text-md font-Grotesk text-green-secondary">
            <FontAwesomeIcon icon={faCodeBranch} size="sm" className="text-purple" /> Techstack Terkini :
          </h2>
          <div className="flex mt-5 gap-x-3">
            <img src="/html.svg" alt="html" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
            <img src="/css.svg" alt="css" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
            <img src="/javascript.svg" alt="javascript" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
            <img src="/bootstrap.svg" alt="bootstrap" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
            <img src="/tailwind-css.svg" alt="tailwindcss" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
            <img src="/react.svg" alt="react" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
            <img src="/vite.svg" alt="vite" width={30} className="hover:transform hover:-translate-y-0.5 duration-300" />
          </div>
          <hr className="mt-3 border-1 text-green-secondary" />
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
