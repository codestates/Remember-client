import React, { useEffect, useState } from "react";
import SearchBar from "../pages/SearchBar";
import "./AccList.css";
import AccidentList from "../pages/AccidentList";

const AccList: React.FC = () => {
  return (
    <section className="accList__container">
      <AccidentList></AccidentList>
    </section>
  );
};

export default AccList;
