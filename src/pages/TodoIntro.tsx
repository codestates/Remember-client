import React from "react";
import "./TodoIntro.css";

const Todo: React.FC = () => {
  return (
    <section id="todo__intro">
      <h1 className="todo__intro__title">What We To do?</h1>
      <div className="todo__intro__row">
        <div className="todo__intro__col">
          <img src="images/4064.jpg" alt="" />
          <h4>사건 & 사고 알림</h4>
          <p>천안함 침몰 사건 외 각종 대형 사고를 알립니다.</p>
        </div>
        <div className="todo__intro__col">
          <img src="images/43086.jpg" alt="" />
          <h4>후원금 전달</h4>
          <p>대형 사고로 피해를 입은 분들에게 후원금을 전달합니다.</p>
        </div>
        <div className="todo__intro__col">
          <img src="images/4565650.jpg" alt="" />
          <h4>커뮤니티 채널 운영</h4>
          <p>회원들의 생각과 의견을 공유하기 위한 공간을 마련했습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Todo;
