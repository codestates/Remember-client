import React, { useEffect } from "react";
import "./About4.css";

const About4 = () => {
  useEffect(() => {
    window.AOS.init();
  });

  return (
    <section id="about">
      <div className="about__right">
        <div
          className="about__text"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1>후원처는 정해졌습니다.한마음으로 후원해주세요.</h1>
          <p>
            우리는 잊혀진 사건과 사고들을 사람들에게 알리고자 합니다. <br></br>
            또한, 사건의 희생자들을 돕기 위해 후원금을 모아서 지원하는 활동을
            하고 있습니다.
          </p>
          <h2>당신의 도움과 관심을 희망합니다!</h2>
          <h3>----Remember----</h3>
        </div>
      </div>
      <div
        className="about__left"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <img src="images/about4.png" alt="" />
      </div>
    </section>
  );
};

export default About4;
