import React from "react";
import "./About6.css";

const About6: React.FC = () => {
  return (
    <section id="todo__intro">
      <h1 className="todo__intro__title">What We do?</h1>
      <div className="todo__intro__row">
        <div className="todo__intro__col">
          <img className="todo__intro__img" src="images/about6_1.png" alt="" />
          <div className="wrapper__first">
            <h4>이메일 알림</h4>
            <p>회원가입 후</p>
            <p>후원하기 알림 및 후원 내역들을 받아보세요.</p>
          </div>
        </div>
        <div className="todo__intro__col">
          <img src="images/about6_2.png" alt="" />
          <div className="wrapper">
            <h4>공감 버튼</h4>
            <p>공감 버튼을 통해</p>
            <p>마음을 표현하세요.</p>
          </div>
        </div>
        <div className="todo__intro__col">
          <img src="images/about6_3.png" alt="" />
          <div className="wrapper">
            <h4>후원금 사용처</h4>
            <p>후원금액이 어디에 사용되고 있는지</p>
            <p>직접 확인해 보세요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About6;
