import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about__left">
        <img src="images/Photos.jpg" alt="" />
      </div>
      <div className="about__right">
        <div className="about__text">
          <h1>About Us</h1>
          <p>
            우리는 잊혀진 사건과 사고들을 사람들에게 알리고자 합니다. <br></br>
            또한, 사건의 희생자들을 돕기 위해 후원금을 모아서 지원하는 활동을
            하고 있습니다.
          </p>
          <h2>당신의 도움과 관심을 희망합니다!</h2>
          <h3>----Remember----</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
