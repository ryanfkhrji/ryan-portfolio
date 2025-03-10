import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardSetifikat = (props) => {
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
        <img src={image} alt={children} className="object-cover w-full" />
      </Link>
    </>
  );
};

const BodyCard = (props) => {
  const { title } = props;
  return (
    <>
      <div className="h-full pt-3 pb-2">
        <h5 className={`text-sm font-semibold md:text-base font-Grotesk text-black-custom`}>{title}</h5>
      </div>
    </>
  );
};

const FooterCard = (props) => {
  const { linkUrl } = props;
  return (
    <>
      <Link to={linkUrl}>
        <span className="text-sm font-semibold md:text-base text-green-secondary font-Grotesk">Visit</span> <FontAwesomeIcon icon={faArrowRight} size="sm" className="text-green-secondary" />
      </Link>
    </>
  );
};

// menambahkan header, body, footer kedalam children
CardSetifikat.Header = HeaderCard;
CardSetifikat.Body = BodyCard;
CardSetifikat.Footer = FooterCard;

export default CardSetifikat;
