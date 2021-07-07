import React from "react";
import "./AccidentListItem.css";
import { AccidentData } from "../types/accident";

interface AccidentListItemProps {
  data: AccidentData;
}

const AccidentListItem: React.FC<AccidentListItemProps> = ({ data }) => {
  return (
    <div className="accident__detail">
      <img src={data.url} alt="" className="accident__img"></img>
      <h2 className="accident__title">{data.title}</h2>
      <div className="text__group">
        <p className="people__text">인명 피해 : {data.casualty}</p>
        <p className="day__text">사건 발생일 : {data.date}</p>
      </div>
      <p className="acc__btn__group">
        <a href="" className="detail__btn">
          자세히보기
        </a>
        <a href="/service" className="detail__btn">
          후원하기
        </a>
      </p>
    </div>
  );
};

export default AccidentListItem;
