import React from "react";
import "./Party.css";

const Party: React.FC = () => {
  return (
    <section id="party">
      <div className="party__title__text">
        <h1>당신이 함께 할 수 있는 가치</h1>
      </div>
      <div className="party__box">
        <div className="partys">
          <h1>후원하기</h1>
          <div className="party__desc">
            <div className="party__icon">
              <i className="far fa-handshake"></i>
            </div>
            <div className="party__text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nemo laboriosam error at omnis reprehenderit suscipit
              </p>
            </div>
          </div>
          <h1>커뮤니티</h1>
          <div className="party__desc">
            <div className="party__icon">
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className="party__text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nemo laboriosam error at omnis reprehenderit suscipit
              </p>
            </div>
          </div>
          <h1>도움</h1>
          <div className="party__desc">
            <div className="party__icon">
              <i className="fas fa-hand-holding-medical"></i>
            </div>
            <div className="party__text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nemo laboriosam error at omnis reprehenderit suscipit
              </p>
            </div>
          </div>
        </div>
        <div className="party__img">
          <img src="images/5340226.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Party;
