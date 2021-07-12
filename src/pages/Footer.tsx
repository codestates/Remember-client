import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <section id="footer">
      <div className="footer__row">
        <div className="footer__right__col">
          <div className="footer__info">
            <div className="footer__logo">
              <img
                className="logo__size"
                src="https://cdn.discordapp.com/attachments/863956904118976532/864004779197464596/9369b5199406e997.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__left__col">
          <div className="footer__links">
            <div className="link__title">
              <h1 className="footer__title">About Us</h1>
              <h3 className="footer__text">Remember Wiki</h3>
              <h3 className="footer__text">Client Repository</h3>
              <h3 className="footer__text">Server Repository</h3>
              <br></br>
            </div>
            <div className="link__title">
              <h1 className="footer__title">CONTACT GITHUB</h1>
              <h3 className="footer__text">프론트엔드 김승무</h3>
              <h3 className="footer__text">프론트엔드 이동건</h3>
              <h3 className="footer__text">백엔드 김성희</h3>
              <h3 className="footer__text">백엔드 이주형</h3>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__right">2021 Team: Remember All rights reserved</p>
    </section>
  );
};

export default Footer;
