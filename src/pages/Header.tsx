import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <section id="header">
      <div className="header__container">
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
          <Link to="/accident">
            <button className="header__btn__top">자세히 보기</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
