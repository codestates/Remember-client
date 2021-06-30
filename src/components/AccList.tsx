import React, { useState } from "react";
import SearchBar from "../pages/SearchBar";
import "./AccList.css";
import { dummyData } from "../data/dummyData";
import AccidentList from "../pages/AccidentList";

const AccList: React.FC = () => {
  const [data, setdata] = useState(dummyData);

  return (
    <section id="accList">
      <SearchBar></SearchBar>
      <AccidentList data={data}></AccidentList>
    </section>
  );
};

export default AccList;
