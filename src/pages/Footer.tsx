import React, { useState } from "react";
import "./Footer.css";
import KakaoShareButton from "./KakaoShareButton";
import Facebook from "./Facebook";
import Quiz from "../components/Quiz";

const Footer: React.FC = () => {
  const [quizClick, setQuizClick] = useState<boolean>(false);
  return (
    <section id="footer">
      <h2 className="footer__title">Team: Remember</h2>
      <div className="footer__links">
        <a
          className="footer__address"
          href="https://github.com/codestates/Remember-client"
          target="_blank"
        >
          GitHub : <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="footer__rights">
        2021 Team: Remember - All rights reserved
      </p>
      <button 
      className="quiz__start"
      onClick={() => {
        setQuizClick(true);
      }}
      >퀴즈 시작하기</button>
      <KakaoShareButton />
      <Facebook />
      <Quiz setQuizClick={setQuizClick} quizClick={quizClick}></Quiz>
    </section>
  );
};

export default Footer;
