import React, { useContext } from "react";

const Container = ({ children }) => {
  return <div className={`max-w-4xl mx-auto px-4 lg:px-0`}>{children}</div>;
}

export default Container