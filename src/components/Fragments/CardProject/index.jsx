import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardProject = (props) => {
  const { children } = props;
  return (
    <>
      <div className={`flex flex-col p-2 rounded-md bg-white border border-gray-100 hover:border-gray-300 hover:transform hover:-translate-y-0.5 duration-300`}>{children}</div>
    </>
  );
};

const HeaderCard = (props) => {
  const { image, children, linkUrl } = props;
  return (
    <>
      <Link to={linkUrl}>
        <img src={image} alt={children} className="object-cover w-full rounded-sm" />
      </Link>
    </>
  );
};

const BodyCard = (props) => {
  const { title, desc } = props;
  return (
    <>
      <div className="h-full pt-3">
        <h5 className={`text-sm pb-2 font-semibold md:text-base font-Grotesk text-black-custom`}>{title}</h5>
        <p className={`text-sm font-light font-Grotesk text-black-custom`}>{desc}</p>
      </div>
    </>
  );
};

const FooterCard = (props) => {
  const { linkUrl, children } = props;
  return (
    <>
      <div className="flex py-4 gap-x-2">
        {children}
      </div>
      <Link to={linkUrl}>
        <span className="text-sm font-semibold md:text-base text-green-secondary font-Grotesk">Visit</span> <FontAwesomeIcon icon={faArrowRight} size="sm" className="text-green-secondary" />
      </Link>
    </>
  );
};

// menambahkan header, body, footer kedalam children
CardProject.Header = HeaderCard;
CardProject.Body = BodyCard;
CardProject.Footer = FooterCard;

export default CardProject;
