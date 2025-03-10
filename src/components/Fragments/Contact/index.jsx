import React, { useState } from "react";
import Container from "../../Layouts/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Elements/Button";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  
  return (
    <>
      <Container>
        <div className="mt-10">
          <h2 className="mb-3 text-xl font-black font-Grotesk text-purple">Contact Me</h2>
        </div>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full px-4 py-3 transition border rounded text-black-customborder-white/10 focus:outline-none focus:border-purple focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full px-4 py-3 transition border rounded text-black-customborder-white/10 focus:outline-none focus:border-purple focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full px-4 py-3 transition border rounded text-black-customborder-white/10 focus:outline-none focus:border-purple focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" variant="w-full bg-green-primary">
              Kirim Pesan
            </Button>
          </form>
        </div>
        <div className="mt-3">
          <h2 className="font-semibold text-md font-Grotesk text-green-secondary">
            <span className="text-purple">Social</span> Media :
          </h2>
          <div className="flex mt-3 gap-x-2">
            <Link to={"https://www.linkedin.com/in/ryanfakhroji/"}>
              <Button type="button" sizeText="text-sm" variant="bg-purple">
                <FontAwesomeIcon icon={faLinkedin} size="md" className="text-white-custom" />
              </Button>
            </Link>
            <Link to={"https://github.com/ryanfkhrji"}>
              <Button type="button" sizeText="text-sm" variant="bg-purple">
                <FontAwesomeIcon icon={faGithub} size="md" className="text-white-custom" />
              </Button>
            </Link>
            <Link to={"https://www.instagram.com/ryanfkhrji/"}>
              <Button type="button" sizeText="text-sm" variant="bg-purple">
                <FontAwesomeIcon icon={faInstagram} size="md" className="text-white-custom" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-3 font-semibold text-md font-Grotesk text-purple">Gmail :</h2>
          <Link to={"mailto:ryanfakhroji09@gmail.com"}>
            <Button type="button" sizeText="text-sm">
              <FontAwesomeIcon icon={faEnvelope} size="md" className="text-black-custom" /> ryanfakhroji09@gmail.com
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Contact;
