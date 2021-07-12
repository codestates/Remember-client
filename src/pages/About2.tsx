import React, { useEffect } from "react";
import "./About2.css";

const About2 = () => {
  useEffect(() => {
    window.AOS.init();
  });

  return (
    <section id="about2">
      <div className="about__right">
        <div
          className="about__text"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1 className="main_text">
            다른 사람들과 함께 해당 사고의 피해자분들께 따뜻한 한마디를
            남겨주세요.
          </h1>
          <p className="minor_text">
            사건 사고들 목록의 자세히 보기를 통해 들어가게 되면
            <br />
            여러 콘텐츠와 따뜻한 한마디 남길 수 있는 기능이 제공되고 있습니다.
            <br />
            여러분의 따뜻한 한마디를 피해자분들께 전달해 주세요.
          </p>
        </div>
      </div>
      <div
        className="about__left"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <img src="images/about2.png" alt="" />
      </div>
    </section>
  );
};

export default About2;
