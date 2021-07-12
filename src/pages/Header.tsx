import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { CountUp } from 'countup.js';
import img1 from "../images/d9ee49de95394c5d.jpg";
import img2 from "../images/jonathan.jpg";
import img3 from "../images/joel.jpg";

const Header: React.FC = () => {

  const [visit, setVisit] = useState<number>(0);
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
    let counter = new CountUp(document.querySelector('.counter'), visit)
    counter.start();
  }

  useEffect(() => {
    visitCounter();
  }, [])

  useEffect(() => {
    plusCounter();
  }, [visit])

  return (
    <div>
    </div>
  );
};

export default Header;

 