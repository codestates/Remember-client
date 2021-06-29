import React from "react";
import "./JoinPage.css";

const JoinPage: React.FC = () => {
  return (
    <section id="join__container">
      <h1 className="join__title__big">우리와 함께 참여해주세요!</h1>
      <p className="join__text">
        과거에 발생한 사건들을 기억하고 <br></br>더 이상 피해자들이 생기지
        않도록 의견을 공유해주세요!
      </p>
      <div className="join__row">
        <div className="join__col">
          <img src="images/hush.jpg" alt="" />
          <div className="join__hover">
            <h3 className="join__title">사건 & 사고</h3>
          </div>
          <button className="join__button">자세히 보기</button>
        </div>
        <div className="join__col">
          <img src="images/ch.jpg" alt="" />
          <div className="join__hover">
            <h3 className="join__title">후원</h3>
          </div>
          <button className="join__button">자세히 보기</button>
        </div>
        <div className="join__col">
          <img src="images/joel.jpg" alt="" />
          <div className="join__hover">
            <h3 className="join__title">커뮤니티</h3>
          </div>
          <button className="join__button">자세히 보기</button>
        </div>
      </div>
    </section>
  );
};

export default JoinPage;
