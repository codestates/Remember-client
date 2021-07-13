import React, { useEffect } from "react";
import "./About1.css";
import "./Aboutall.css";

const About1 = () => {
  useEffect(() => {
    window.AOS.init();
  });

  return (
    <section id="about1">
      <div
        className="about__left"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <img className="about1__img" src="images/about1.png" alt="" />
      </div>
      <div className="about__right">
        <div
          className="about__text"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1>
            잊혀져가는 사건 사고들을
            <br /> 살펴보며 기억해 주세요.
          </h1>
          <p>
            미리 제보를 받아 잊혀져가는 사건 사고들을 게시해놓았습니다.
            <br />
            천천히 보시고 기억해 주세요.
            <br />
            그리고 제보해 주세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About1;
