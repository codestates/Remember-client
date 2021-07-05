import React from "react";
import "./AccidentList.css";
import { dummyList } from "../data/types";
import AccidentListItem from "./AccidentListItem";

interface AccidentListProps {
  data: dummyList[];
}

const AccidentList: React.FC<AccidentListProps> = ({ data }) => {
  return (
    <div className="accident__row">
      {data.map((datas) => (
        <AccidentListItem data={datas} key={datas.id}></AccidentListItem>
      ))}
      {/* <a className="quiz__start">퀴즈 시작하기</a> */}
    </div>
  );
};

export default AccidentList;
