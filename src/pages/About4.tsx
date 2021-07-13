import React, { useEffect } from "react";
import "./About4.css";
import "./Aboutall.css";

const About4 = () => {
  useEffect(() => {
    window.AOS.init();
  });

  return (
    <section id="about4">
      <div className="about__right">
        <div
          className="about__text"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1>
            후원처는 정해졌습니다.
            <br />
            한마음으로 후원해주세요.
          </h1>
          <p>
            사건 사고 자세히 보기를 클릭하시고 살펴보세요.
            <br />
            살펴보시고 후원이 필요한 곳에 도움을 주세요.
            <br />
            후원자님의 후원금은 게시물에 작성되어 있는 후원처에 기부됩니다.
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
        <img src="images/about4.png" alt="" />
      </div>
    </section>
  );
};

export default About4;
