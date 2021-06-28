import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <section id="header">
      <div className="header__container">
        <img src="images/4forhobby.png" alt="" className="header__logo" />
        <div className="header__text">
          <h1>
            기억해주세요! <br></br>사건 & 사고들을!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            incidunt commodi sint repudiandae, nostrum esse numquam ullam
            corrupti quo nulla sequi fugit impedit molestias aperiam eveniet
            ipsa nisi iure quae.
          </p>
          <button className="header__btn__top">자세히 보기</button>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">소개</a>
          </li>
          <li>
            <a href="#">활동</a>
          </li>
          <li>
            <a href="#">참여</a>
          </li>
          <li>
            <a href="#">후원안내</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
