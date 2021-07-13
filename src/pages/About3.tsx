import React, { useState } from "react";
import "./About3.css";
import "./Aboutall.css";
import Quiz from "../components/Quiz";

const About3 = () => {
  useState(() => {
    window.AOS.init();
  });
  const [quizClick, setQuizClick] = useState<boolean>(false);

  return (
    <section id="about3">
      <div
        className="about__left"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <img src="images/about3.png" alt="" />
      </div>
      <div className="about__right">
        <div
          className="about__text"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1>퀴즈를 통해 더 쉽게 기억해봐요.</h1>
          <p>
            우리는 잊혀진 사건과 사고들을 사람들에게 알리고자 합니다. <br />
            또한, 사건의 희생자들을 돕기 위해 후원금을 모아서
            <br /> 지원하는 활동을 하고 있습니다.
          </p>
          <button
            className="about3_btn"
            onClick={() => {
              setQuizClick(true);
            }}
          >
            퀴즈 시작
          </button>
          <Quiz setQuizClick={setQuizClick} quizClick={quizClick}></Quiz>
        </div>
      </div>
    </section>
  );
};

export default About3;
