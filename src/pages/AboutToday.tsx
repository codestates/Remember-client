import React, { useState, useEffect } from "react";
import "./AboutToday.css";
import { CountUp } from "countup.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import API from "../utils/api";

const AboutToday: React.FC = () => {
  const [visit, setVisit] = useState<number>(0);
  const visitCounter = async () => {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜

    const check = `${year}-${month}-${date}`;
    await API.post(`/today`, { check }).then((res) => {
      setVisit(res.data.data);
    });
  };

  const plusCounter = () => {
    let counter = new CountUp(document.querySelector(".counter"), visit);
    counter.start();
  };

  useEffect(() => {
    visitCounter();
  }, []);

  useEffect(() => {
    plusCounter();
  }, [visit]);

  return (
    <>
      <div className="AboutToday_text">
        오늘도 <span className="counter">{visit}</span> 분께서 기억하러
        오셨습니다 🌼
      </div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default AboutToday;
