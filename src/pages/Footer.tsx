import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
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
    </section>
  );
};

export default Footer;
