import React from "react";
import "./Spinner.css";
import image from '../images/Wedges-3s-200px.gif'

const Spinner: React.FC<any> = () => {
  return (
    <>
      <img className="spinner__img" src={image} alt="Loading..." />
    </>
  );
};

export default Spinner;
