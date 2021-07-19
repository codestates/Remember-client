import React, { useEffect } from "react";
import "./About5.css";

const About5: React.FC = () => {
  useEffect(() => {
    window.AOS.init();
  });

  return (
    <section id="about5">
      <div
        className="about5__left"
        data-aos="zoom-out-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <img src="images/about5.png" alt="" />
      </div>
      <div className="about5__right">
        <div className="about5__text">
          <h1>
            공유하기를 통해
            <br /> 다른 분들도 기억할 수 있도록 도와주세요.
          </h1>
          <p>
            리멤버 서비스를 이용하시고 사건 사고들을 알리고 싶으시다면
            <br />
            공유하기를 통해 가족과 친구들에게 알려주세요.
            <br />
            그리고 기억해 주세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About5;
