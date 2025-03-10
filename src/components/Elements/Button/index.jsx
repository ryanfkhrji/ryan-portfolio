import React from "react";

const Button = (props) => {
  const { children, type = "button", variant = "bg-green-primary", sizeText = "text-base", onClick = () => {} } = props;
  return (
    <button
      className={`px-4 py-2 rounded-md text-black-custom font-Grotesk cursor-pointer font-semibold hover:bg-green-secondary transition-all ease-in-out hover:transform hover:-translate-y-0.5 duration-300 ${variant} ${sizeText}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button