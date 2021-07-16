import React, { useState } from "react";
import "./About3.css";
import Quiz from "../components/Quiz";

const About3: React.FC = () => {
  useState(() => {
    window.AOS.init();
  });
  const [quizClick, setQuizClick] = useState<boolean>(false);

  return (
    <section id="about3">
      <div
        className="about3__left"
        data-aos="flip-right"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <img src="images/about3.png" alt="" />
      </div>
      <div className="about3__right">
        <div className="about3__text">
          <h1>퀴즈를 통해 더 쉽게 기억해봐요.</h1>
          <p>
            우리는 잊혀진 사건과 사고들을 사람들에게 알리고자 합니다. <br />
            또한, 사건의 희생자들을 돕기 위해 후원금을 모아서
            <br /> 지원하는 활동을 하고 있습니다.
          </p>
          <div className="btn__area">
            <button
              className="about3_btn"
              onClick={() => {
                setQuizClick(true);
              }}
            >
              퀴즈 시작
            </button>
          </div>
        </div>
        <Quiz setQuizClick={setQuizClick} quizClick={quizClick}></Quiz>
      </div>
    </section>
  );
};

export default About3;
