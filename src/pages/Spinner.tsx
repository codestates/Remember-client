import React from "react";
import "./Spinner.css";

const Spinner: React.FC<any> = () => {
  return (
    <>
      <img className="spinner__img" src="images/spinner.gif" alt="Loading..." />
    </>
  );
};

export default Spinner;
