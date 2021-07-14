import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About8.css";

const About8 = () => {
  useEffect(() => {
    window.AOS.init();
  });

  return (
    <section id="about8">
      <div className="about8__right">
        <div
          className="about8__text"
          // data-aos="zoom-in"
          // data-aos-delay="100"
          // data-aos-duration="1000"
        >
          <h1>
            전부 살펴보셨다면 <br></br>
            이제 직접 기억하러 가보실까요?
          </h1>
          <Link to="/accident">
            <button className="about8_btn">체험하기</button>
          </Link>
        </div>
      </div>
      <div
        className="about8__left"
        data-aos="zoom-in-left"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <img src="images/about8.png" alt="" />
      </div>
    </section>
  );
};

export default About8;
