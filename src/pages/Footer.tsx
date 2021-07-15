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
              <h3 className="footer__text">
                <a
                  className="weblink"
                  href="https://github.com/codestates/Remember-client/wiki"
                  target="_blank"
                >
                  Remember Wiki
                </a>
              </h3>
              <h3 className="footer__text">
                <a
                  className="weblink"
                  href="https://github.com/codestates/Remember-client"
                  target="_blank"
                >
                  Client Repository
                </a>
              </h3>
              <h3 className="footer__text">
                <a
                  className="weblink"
                  href="https://github.com/codestates/Remember-server"
                  target="_blank"
                >
                  Server Repository
                </a>
              </h3>
              <br></br>
            </div>
            <div className="link__title">
              <h1 className="footer__title">CONTACT GITHUB</h1>
              <div className="position">
                <h3 className="footer__text1">
                  <a
                    className="weblink"
                    href="https://github.com/KimseungMoo"
                    target="_blank"
                  >
                    Front-end 김승무
                  </a>
                </h3>
                <h3 className="footer__text1">
                  <a
                    className="weblink"
                    href="https://github.com/heesmile0310"
                    target="_blank"
                  >
                    Back-end 김성희
                  </a>
                </h3>
              </div>
              <div className="position">
              <h3 className="footer__text1">
                  <a
                    className="weblink"
                    href="https://github.com/dong-geon-Lee"
                    target="_blank"
                  >
                    Front-end 이동건
                  </a>
                </h3>
                <h3 className="footer__text1">
                  <a
                    className="weblink"
                    href="https://github.com/johny985"
                    target="_blank"
                  >
                    Back-end 이주형
                  </a>
                </h3>
              </div>

              <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="footer__right">2021 Team: Remember All rights reserved</p> */}
    </section>
  );
};

export default Footer;
