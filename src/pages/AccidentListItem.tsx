import React, { useState } from "react";
import "./AccidentListItem.css";

import { dummyList } from "../data/types";

interface AccidentListItemProps {
  data: dummyList;
}

const AccidentListItem: React.FC<AccidentListItemProps> = ({ data }) => {
  return (
    <div className="accidentListItem__card">
      <div className="accidentListItem__card__inner">
        <div className="accidentListItem__card__front">
          <img src={data.img} alt="" className="img__acc__data" />
        </div>
        <div className="accidentListItem__card__back">
          <div className="accidentListItem__card__text">
            <h1 className="acc__title">사건 & 사고</h1>
            <ul className="list">
              <li className="list__size">
                <strong>제목: {data.title}</strong>
              </li>
              <li className="list__size">
                <strong>인명 피해: {data.die}</strong>
              </li>
              <li className="list__size">
                <strong>사건 발생일: {data.date}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="detail__button">자세히 보기</button>
      <button className="detail__button">후원하기</button>
    </div>
  );
};

export default AccidentListItem;
