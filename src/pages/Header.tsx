import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { CountUp } from 'countup.js';

const Header: React.FC = () => {
  const [visit, setVisit] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const visitCounter = async() => {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1;  // 월
    const date = today.getDate();  // 날짜
    
    const check = `${year}-${month}-${date}`;
    await axios.post(`${process.env.REACT_APP_API_URL}/today`, { check })
    .then((res) => {
      setVisit(res.data.data);
    })
  }

  const plusCounter = () => {
    // let demo = new CountUp('.counter', 100)
    // demo.start();
  }

  useEffect(() => {
    visitCounter();
    //plusCounter()
  }, [])
  return (
    <section id="header">
      <div className="header__container">
        <div className="header__text">
          <h1>
            기억해주세요! <br></br>사건 & 사고들을!
          </h1>
          <h3>
            <div>
            지금까지
            <span className="counter">{count}</span>
            분께서 기억하러 오셨습니다.
            </div>
            <div>
            오늘도
            <span >{visit}</span>
            분께서 기억하러 오셨습니다.
            </div>
          </h3>
          <Link to="/accident">
            <button className="header__btn__top">자세히 보기</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
