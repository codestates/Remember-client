import React from "react";
import "./AccidentList.css";
import { dummyList } from "../data/types";
import AccidentListItem from "./AccidentListItem";

interface AccidentListProps {
  data: dummyList[];
}

const AccidentList: React.FC<AccidentListProps> = ({ data }) => {
  return (
    <>
      <section id="accidentList">
        <div className="accidentList__cards">
          {data.map((datas) => (
            <AccidentListItem data={datas} key={datas.id}></AccidentListItem>
          ))}
        </div>
        <br></br>
        <div className="quiz__area">
          <a className="quiz__start">퀴즈 시작하기</a>
        </div>
      </section>
    </>
  );
};

export default AccidentList;
